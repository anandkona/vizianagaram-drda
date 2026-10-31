"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { CartEmptyIcon, CartProductImage } from "@/components/CommerceProductCard";
import PageIntro from "@/components/PageIntro";
import SectionTitle from "@/components/SectionTitle";
import { clearCart, formatINR, readCart, removeProductFromCart, setCartQuantity, type CartItem } from "@/src/data/commerce";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    window.addEventListener("vizianagaram-cart-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("vizianagaram-cart-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const runCartAction = (action: () => void) => {
    try {
      action();
      setError("");
    } catch {
      setError("Your browser could not update local cart storage. Please try again.");
    }
  };

  return (
    <>
      <PageIntro eyebrow="District Mart" title="Your cart" description="Review the local products you have selected, adjust quantities and continue to a clearly labelled demonstration checkout." icon="shopping" crumb="Cart" />
      <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 2, md: 2.5 } }}>
        <Container maxWidth="lg">
          {error ? <Alert severity="error" sx={{ borderRadius: 3, mb: 2.5 }} role="alert">{error}</Alert> : null}
          {items.length ? (
            <Grid container spacing={{ xs: 3, lg: 5 }} alignItems="flex-start">
              <Grid size={{ xs: 12, lg: 8 }}>
                <Card sx={{ borderRadius: 3.5, overflow: "hidden" }}>
                  <Box sx={{ background: "linear-gradient(120deg, #20252D, #6B4300)", color: "#FFFFFF", p: { xs: 2.4, md: 3 } }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                      <Box><Typography component="h2" variant="h5" sx={{ color: "#FFFFFF", fontSize: "1.25rem" }}>Selected products</Typography><Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.76rem", mt: 0.35 }}>{itemCount} {itemCount === 1 ? "item" : "items"} saved in this browser</Typography></Box>
                      <ShoppingCartIcon sx={{ color: "#FFD54F", fontSize: 30 }} />
                    </Stack>
                  </Box>
                  <CardContent sx={{ p: { xs: 1.5, md: 2.5 }, "&:last-child": { pb: { xs: 1.5, md: 2.5 } } }}>
                    <Stack divider={<Divider flexItem />}>
                      {items.map((item) => <CartLine key={item.id} item={item} onChange={runCartAction} />)}
                    </Stack>
                    <Button color="inherit" onClick={() => runCartAction(clearCart)} startIcon={<DeleteOutlineIcon />} sx={{ color: "text.secondary", fontSize: "0.75rem", mt: 2 }}>Clear cart</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <Card sx={{ borderRadius: 3.5, position: "sticky", top: 150 }}>
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Typography component="h2" variant="h5" sx={{ color: "text.primary", fontSize: "1.2rem" }}>Order summary</Typography>
                    <Stack spacing={1.3} sx={{ mt: 2.2 }}>
                      <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: "text.secondary", fontSize: "0.82rem" }}>Items</Typography><Typography sx={{ color: "text.primary", fontSize: "0.82rem", fontWeight: 750 }}>{formatINR(total)}</Typography></Stack>
                      <Stack direction="row" justifyContent="space-between"><Typography sx={{ color: "text.secondary", fontSize: "0.82rem" }}>Delivery</Typography><Typography sx={{ color: "text.secondary", fontSize: "0.82rem" }}>Arranged after confirmation</Typography></Stack>
                    </Stack>
                    <Divider sx={{ my: 2 }} />
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline"><Typography sx={{ color: "text.primary", fontSize: "0.95rem", fontWeight: 800 }}>Estimated total</Typography><Typography sx={{ color: "primary.main", fontSize: "1.35rem", fontWeight: 900 }}>{formatINR(total)}</Typography></Stack>
                    <Button component={Link} href="/mart/checkout" fullWidth variant="contained" endIcon={<ArrowForwardIcon />} sx={{ mt: 2.5 }}>Continue to checkout</Button>
                    <Button component={Link} href="/mart" fullWidth sx={{ color: "primary.main", fontSize: "0.78rem", mt: 0.8 }}>Continue shopping</Button>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.7rem", lineHeight: 1.6, mt: 1.5 }}>Prices and delivery are illustrative. Checkout does not process payment or create a live order record.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ) : (
            <EmptyCart />
          )}
        </Container>
      </Box>
      <Box component="section" sx={{ background: "#FFFFFF", py: { xs: 2, md: 2.5 } }}>
        <Container maxWidth="lg">
          <SectionTitle eyebrow="Need a different route?" title="Keep exploring local value" description="The District Mart is one way to explore the district’s craft, agriculture and food stories. Browse the wider portal when you need a service or public reference." />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.3} flexWrap="wrap" useFlexGap>
            <Button component={Link} href="/mart" variant="contained">Browse products</Button>
            <Button component={Link} href="/mart/wishlist" variant="outlined">Open wishlist</Button>
            <Button component={Link} href="/knowledge-center" variant="text">Knowledge Center</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

function CartLine({ item, onChange }: { item: CartItem; onChange: (action: () => void) => void }) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} spacing={{ xs: 1.5, sm: 2 }} sx={{ py: 2 }}>
      <CartProductImage item={item} size={78} />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "0.98rem", lineHeight: 1.35 }}>{item.name}</Typography>
        <Typography sx={{ color: "text.secondary", fontSize: "0.77rem", mt: 0.4 }}>{formatINR(item.price)} each</Typography>
      </Box>
      <Stack direction="row" alignItems="center" spacing={0.6} sx={{ flexShrink: 0 }}>
        <Button aria-label={`Decrease ${item.name} quantity`} onClick={() => onChange(() => setCartQuantity(item.id, item.quantity - 1))} variant="outlined" size="small" sx={{ minHeight: 36, minWidth: 36, p: 0 }}><RemoveIcon fontSize="small" /></Button>
        <Typography aria-live="polite" sx={{ color: "text.primary", fontSize: "0.86rem", fontWeight: 850, minWidth: 28, textAlign: "center" }}>{item.quantity}</Typography>
        <Button aria-label={`Increase ${item.name} quantity`} onClick={() => onChange(() => setCartQuantity(item.id, item.quantity + 1))} variant="outlined" size="small" sx={{ minHeight: 36, minWidth: 36, p: 0 }}><AddIcon fontSize="small" /></Button>
      </Stack>
      <Typography sx={{ color: "primary.main", fontSize: "0.94rem", fontWeight: 850, minWidth: 78, textAlign: { xs: "left", sm: "right" } }}>{formatINR(item.price * item.quantity)}</Typography>
      <Button aria-label={`Remove ${item.name} from cart`} onClick={() => onChange(() => removeProductFromCart(item.id))} color="inherit" size="small" sx={{ color: "text.secondary", minWidth: 36, p: 0 }}><DeleteOutlineIcon fontSize="small" /></Button>
    </Stack>
  );
}

function EmptyCart() {
  return (
    <Paper sx={{ background: "linear-gradient(135deg, #FFF3C4, #FFF8E1)", border: "1px solid #F0E4C6", borderRadius: 3.5, p: { xs: 3, md: 6 }, textAlign: "center" }}>
      <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: "50%", color: "#000000", display: "inline-flex", height: 82, justifyContent: "center", width: 82 }}><CartEmptyIcon /></Box>
      <Typography component="h2" variant="h3" sx={{ color: "text.primary", fontSize: { xs: "1.55rem", md: "2rem" }, mt: 2.2 }}>Your cart is ready for a local find.</Typography>
      <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 540, mx: "auto", mt: 1 }}>Browse illustrative Vizianagaram craft, agriculture, food and village products, then add an item to see it here.</Typography>
      <Button component={Link} href="/mart" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ mt: 2.5 }}>Explore District Mart</Button>
    </Paper>
  );
}
