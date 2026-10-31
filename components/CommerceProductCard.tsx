"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  addProductToCart,
  formatINR,
  readCart,
  readWishlist,
  removeProductFromCart,
  toggleWishlist,
  type Product,
} from "@/src/data/commerce";

export default function CommerceProductCard({ product }: { product: Product }) {
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const syncCart = () => setInCart(readCart().some((item) => item.id === product.id));
    const syncWishlist = () => setInWishlist(readWishlist().includes(product.id));
    syncCart();
    syncWishlist();
    window.addEventListener("vizianagaram-cart-change", syncCart);
    window.addEventListener("vizianagaram-wishlist-change", syncWishlist);
    window.addEventListener("storage", syncCart);
    window.addEventListener("storage", syncWishlist);
    return () => {
      window.removeEventListener("vizianagaram-cart-change", syncCart);
      window.removeEventListener("vizianagaram-wishlist-change", syncWishlist);
      window.removeEventListener("storage", syncCart);
      window.removeEventListener("storage", syncWishlist);
    };
  }, [product.id]);

  const handleCart = () => {
    if (inCart) removeProductFromCart(product.id);
    else addProductToCart(product);
  };

  const handleWishlist = () => toggleWishlist(product.id);

  return (
    <Card id={product.id} sx={{ borderRadius: 3, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", border: "1px solid #E2E8F0", boxShadow: "none", transition: "all 0.2s ease", "&:hover": { borderColor: "#FFC107", boxShadow: "0 8px 24px rgba(0,0,0,0.06)", transform: "translateY(-3px)" } }}>
      <Box sx={{ background: "#FFF3C4", height: 160, overflow: "hidden", position: "relative" }}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: "cover" }} />
        <Chip label={product.category} size="small" sx={{ background: "rgba(255,255,255,0.95)", color: "#1E293B", fontSize: "0.6rem", fontWeight: 800, left: 10, position: "absolute", top: 10, backdropFilter: "blur(4px)" }} />
        <Tooltip title={inWishlist ? "Remove from wishlist" : "Save to wishlist"}>
          <IconButton aria-label={inWishlist ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`} aria-pressed={inWishlist} onClick={handleWishlist} sx={{ background: "rgba(255,255,255,0.95)", color: inWishlist ? "#E11D48" : "#64748B", position: "absolute", right: 10, top: 10, width: 28, height: 28, "&:hover": { background: "#FFFFFF", color: "#E11D48" }, backdropFilter: "blur(4px)" }}>
            {inWishlist ? <FavoriteIcon sx={{ fontSize: 16 }} /> : <FavoriteBorderIcon sx={{ fontSize: 16 }} />}
          </IconButton>
        </Tooltip>
      </Box>
      <CardContent sx={{ display: "flex", flex: 1, flexDirection: "column", p: 2, "&:last-child": { pb: 2 } }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1} mb={0.5}>
          <Typography component="h3" sx={{ color: "#1E293B", fontSize: "0.95rem", fontWeight: 800, lineHeight: 1.3 }}>{product.name}</Typography>
          {product.badge ? <Chip label={product.badge} size="small" sx={{ background: "#FFF8E1", color: "#D97706", fontWeight: 800, flexShrink: 0, fontSize: "0.55rem", height: 20 }} /> : null}
        </Stack>
        <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.5 }}>{product.description}</Typography>
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" spacing={1} sx={{ mt: "auto", pt: 2 }}>
          <Box>
            <Typography component="p" sx={{ color: "#1E293B", fontSize: "1.1rem", fontWeight: 900, lineHeight: 1 }}>{formatINR(product.price)}</Typography>
            <Typography sx={{ color: "#94A3B8", fontSize: "0.65rem", fontWeight: 600, mt: 0.25 }}>{product.unit}</Typography>
          </Box>
          <Button aria-pressed={inCart} onClick={handleCart} size="small" variant={inCart ? "outlined" : "contained"} startIcon={inCart ? <RemoveShoppingCartIcon sx={{ fontSize: "14px !important" }} /> : <AddShoppingCartIcon sx={{ fontSize: "14px !important" }} />} sx={{ fontSize: "0.65rem", fontWeight: 800, minHeight: 32, px: 1.5, textTransform: "none", bgcolor: inCart ? "transparent" : "#FFC107", color: inCart ? "#1E293B" : "#1F1700", borderColor: "#E2E8F0", "&:hover": { bgcolor: inCart ? "#F8FAFC" : "#FFB300" } }}>
            {inCart ? "Remove" : "Add to cart"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function CartProductImage({ item, size = 72 }: { item: { image: string; name: string }; size?: number }) {
  return <Box sx={{ borderRadius: 2, flexShrink: 0, height: size, overflow: "hidden", position: "relative", width: size }}><Image src={item.image} alt={item.name} fill sizes={`${size}px`} style={{ objectFit: "cover" }} /></Box>;
}

export function CartEmptyIcon() {
  return <ShoppingBagIcon sx={{ color: "#000000", fontSize: 42 }} />;
}
