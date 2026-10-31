"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export const CART_STORAGE_KEY = "vizianagaram-cart";
export const CART_CHANGE_EVENT = "vizianagaram-cart-change";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  href?: string;
};

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Partial<CartItem>;
  return (
    typeof item.id === "string" &&
    item.id.length > 0 &&
    typeof item.name === "string" &&
    item.name.length > 0 &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.quantity === "number" &&
    Number.isFinite(item.quantity) &&
    typeof item.image === "string" &&
    (item.href === undefined || typeof item.href === "string")
  );
}

export function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(isCartItem).map((item) => ({
      ...item,
      price: Math.max(0, item.price),
      quantity: Math.max(1, Math.floor(item.quantity)),
    }));
  } catch {
    return [];
  }
}

function writeStoredCart(items: CartItem[]) {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // The in-memory cart remains usable when browser storage is unavailable.
  }
  window.dispatchEvent(new Event(CART_CHANGE_EVENT));
}

function safeItemHref(href?: string) {
  if (!href) {
    return null;
  }
  return href.startsWith("/") || /^https?:\/\//i.test(href) ? href : null;
}

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const syncCart = () => setItems(readStoredCart());
    const handleStorage = (event: StorageEvent) => {
      if (event.key === CART_STORAGE_KEY) {
        syncCart();
      }
    };

    syncCart();
    window.addEventListener(CART_CHANGE_EVENT, syncCart);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(CART_CHANGE_EVENT, syncCart);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const commitItems = (nextItems: CartItem[]) => {
    setItems(nextItems);
    writeStoredCart(nextItems);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const nextItems = items
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, Math.floor(quantity)) }
          : item,
      )
      .filter((item) => item.quantity > 0);
    commitItems(nextItems);
  };

  const removeItem = (id: string) => {
    commitItems(items.filter((item) => item.id !== id));
  };

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "#FFFBF2",
            width: { xs: "min(94vw, 420px)", sm: 420 },
          },
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #5B4300, #8A6500)",
            color: "#FFFFFF",
            px: { xs: 2, sm: 2.5 },
            py: 2,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1.2}>
              <Box
                sx={{
                  alignItems: "center",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: 2,
                  display: "flex",
                  height: 42,
                  justifyContent: "center",
                  width: 42,
                }}
              >
                <ShoppingBagOutlinedIcon />
              </Box>
              <Box>
                <Typography id="cart-drawer-title" component="h2" sx={{ fontSize: "1.05rem", fontWeight: 850 }}>
                  Your cart
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.72rem" }}>
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </Typography>
              </Box>
            </Stack>
            <IconButton aria-label="Close cart" onClick={onClose} sx={{ color: "#FFFFFF" }}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
        </Box>

        {items.length === 0 ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{ flex: 1, minHeight: 360, p: 3, textAlign: "center" }}
          >
            <Box
              sx={{
                alignItems: "center",
                background: "rgba(255, 193, 7, 0.18)",
                borderRadius: "50%",
                color: "primary.main",
                display: "flex",
                height: 78,
                justifyContent: "center",
                width: 78,
              }}
            >
              <Inventory2OutlinedIcon sx={{ fontSize: 38 }} />
            </Box>
            <Typography component="h3" sx={{ fontSize: "1.05rem", fontWeight: 800 }}>
              Your cart is empty
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "0.82rem", lineHeight: 1.6, maxWidth: 280 }}>
              Browse Vizianagaram Mart for local products and add your favourites here.
            </Typography>
            <Button
              component={Link}
              href="/mart"
              onClick={onClose}
              startIcon={<ShoppingBagOutlinedIcon />}
              sx={{ mt: 0.5 }}
              variant="contained"
            >
              Browse products
            </Button>
          </Stack>
        ) : (
          <>
            <Box aria-label="Cart items" sx={{ flex: 1, overflowY: "auto", px: { xs: 1.5, sm: 2.5 }, py: 1.5 }}>
              {items.map((item) => {
                const itemHref = safeItemHref(item.href);
                return (
                  <Stack
                    key={item.id}
                    direction="row"
                    spacing={1.5}
                    sx={{ borderBottom: "1px solid", borderColor: "divider", py: 1.8, "&:last-child": { borderBottom: 0 } }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        background: "#FFF8E1",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        display: "flex",
                        flexShrink: 0,
                        height: 82,
                        justifyContent: "center",
                        overflow: "hidden",
                        width: 82,
                      }}
                    >
                      {item.image ? (
                        <Box
                          alt=""
                          component="img"
                          loading="lazy"
                          src={item.image}
                          sx={{ height: "100%", objectFit: "cover", width: "100%" }}
                        />
                      ) : (
                        <Inventory2OutlinedIcon sx={{ color: "#000000" }} />
                      )}
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1}>
                        <Box sx={{ minWidth: 0 }}>
                          {itemHref ? (
                            <Typography
                              component={Link}
                              href={itemHref}
                              onClick={onClose}
                              sx={{
                                color: "text.primary",
                                display: "block",
                                fontSize: "0.84rem",
                                fontWeight: 750,
                                lineHeight: 1.4,
                                "&:hover": { color: "primary.main" },
                              }}
                            >
                              {item.name}
                            </Typography>
                          ) : (
                            <Typography sx={{ fontSize: "0.84rem", fontWeight: 750, lineHeight: 1.4 }}>
                              {item.name}
                            </Typography>
                          )}
                          <Typography sx={{ color: "primary.main", fontSize: "0.86rem", fontWeight: 800, mt: 0.35 }}>
                            {currencyFormatter.format(item.price)}
                          </Typography>
                        </Box>
                        <IconButton
                          aria-label={`Remove ${item.name} from cart`}
                          onClick={() => removeItem(item.id)}
                          size="small"
                          sx={{ color: "text.secondary", flexShrink: 0 }}
                        >
                          <DeleteOutlineRoundedIcon fontSize="small" />
                        </IconButton>
                      </Stack>

                      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mt: 1.1 }}>
                        <Stack
                          alignItems="center"
                          direction="row"
                          sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1.5, overflow: "hidden" }}
                        >
                          <IconButton
                            aria-label={`Decrease quantity of ${item.name}`}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            size="small"
                            sx={{ borderRadius: 0, height: 34, width: 34 }}
                          >
                            <RemoveRoundedIcon fontSize="small" />
                          </IconButton>
                          <Typography
                            aria-label={`Quantity ${item.quantity}`}
                            component="span"
                            sx={{ alignItems: "center", borderLeft: "1px solid", borderRight: "1px solid", bordercolor: "#000000", display: "flex", fontSize: "0.78rem", fontWeight: 800, height: 34, justifyContent: "center", minWidth: 34 }}
                          >
                            {item.quantity}
                          </Typography>
                          <IconButton
                            aria-label={`Increase quantity of ${item.name}`}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            size="small"
                            sx={{ borderRadius: 0, height: 34, width: 34 }}
                          >
                            <AddRoundedIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                        <Typography sx={{ fontSize: "0.78rem", fontWeight: 750 }}>
                          {currencyFormatter.format(item.price * item.quantity)}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                );
              })}
            </Box>

            <Box sx={{ background: "#FFFFFF", borderTop: "1px solid", borderColor: "divider", px: { xs: 2, sm: 2.5 }, py: 2.2 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", fontWeight: 700 }}>
                  Subtotal
                </Typography>
                <Typography component="p" sx={{ color: "text.primary", fontSize: "1.2rem", fontWeight: 850 }}>
                  {currencyFormatter.format(subtotal)}
                </Typography>
              </Stack>
              <Typography sx={{ color: "text.secondary", fontSize: "0.68rem", mt: 0.4 }}>
                Taxes and delivery, where applicable, are confirmed at checkout.
              </Typography>
              <Button
                component={Link}
                href="/mart/checkout"
                fullWidth
                onClick={onClose}
                startIcon={<ShoppingBagOutlinedIcon />}
                sx={{ mt: 1.8 }}
                variant="contained"
              >
                Proceed to checkout
              </Button>
              <Button
                component={Link}
                href="/mart"
                fullWidth
                onClick={onClose}
                sx={{ mt: 0.7 }}
                variant="text"
              >
                Continue shopping
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}
