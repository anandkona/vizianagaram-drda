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
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
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
    <Card
      id={product.id}
      elevation={0}
      sx={{
        borderRadius: "18px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        border: "1.5px solid #E2E8F0",
        bgcolor: "#FFFFFF",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          borderColor: "#082B50",
          boxShadow: "0 18px 36px -10px rgba(8, 43, 80, 0.16)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Product Image Stage */}
      <Box sx={{ background: "#F1F5F9", height: 210, overflow: "hidden", position: "relative" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        />

        {/* Subtle Dark Gradient at Bottom of Image for Text Contrast */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Category Pill Tag */}
        <Chip
          label={product.category}
          size="small"
          sx={{
            background: "rgba(255, 255, 255, 0.94)",
            color: "#082B50",
            fontSize: "0.68rem",
            fontWeight: 800,
            left: 12,
            position: "absolute",
            top: 12,
            backdropFilter: "blur(6px)",
            borderRadius: "6px",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            height: 24,
          }}
        />

        {/* Wishlist Button */}
        <Tooltip title={inWishlist ? "Remove from wishlist" : "Save to wishlist"}>
          <IconButton
            aria-label={inWishlist ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
            aria-pressed={inWishlist}
            onClick={handleWishlist}
            sx={{
              background: "rgba(255, 255, 255, 0.92)",
              color: inWishlist ? "#E11D48" : "#64748B",
              position: "absolute",
              right: 12,
              top: 12,
              width: 32,
              height: 32,
              backdropFilter: "blur(6px)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              "&:hover": { background: "#FFFFFF", color: "#E11D48", transform: "scale(1.08)" },
              transition: "all 0.2s ease",
            }}
          >
            {inWishlist ? <FavoriteRoundedIcon sx={{ fontSize: 17 }} /> : <FavoriteBorderRoundedIcon sx={{ fontSize: 17 }} />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Card Content & Details */}
      <CardContent sx={{ display: "flex", flex: 1, flexDirection: "column", p: 2.2, "&:last-child": { pb: 2.2 } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} mb={0.8}>
          <Typography
            component="h3"
            sx={{
              color: "#082B50",
              fontSize: "0.98rem",
              fontWeight: 850,
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </Typography>
        </Stack>

        {/* Producer & Verification Badge */}
        {product.badge ? (
          <Stack direction="row" alignItems="center" spacing={0.6} sx={{ mb: 1 }}>
            <VerifiedRoundedIcon sx={{ fontSize: 13, color: "#16A34A" }} />
            <Typography sx={{ color: "#16A34A", fontSize: "0.68rem", fontWeight: 750 }}>
              {product.badge}
            </Typography>
          </Stack>
        ) : null}

        <Typography
          sx={{
            color: "#64748B",
            fontSize: "0.78rem",
            lineHeight: 1.55,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>

        {/* Price & Action Footer */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{ mt: "auto", pt: 2.2, borderTop: "1px solid #F1F5F9" }}
        >
          <Box>
            <Typography
              component="p"
              sx={{ color: "#082B50", fontSize: "1.2rem", fontWeight: 900, lineHeight: 1 }}
            >
              {formatINR(product.price)}
            </Typography>
            <Typography sx={{ color: "#94A3B8", fontSize: "0.68rem", fontWeight: 650, mt: 0.3 }}>
              {product.unit}
            </Typography>
          </Box>

          <Button
            aria-pressed={inCart}
            onClick={handleCart}
            variant="contained"
            startIcon={
              inCart ? (
                <CheckRoundedIcon sx={{ fontSize: "16px !important" }} />
              ) : (
                <AddShoppingCartRoundedIcon sx={{ fontSize: "15px !important" }} />
              )
            }
            sx={{
              fontSize: "0.75rem",
              fontWeight: 800,
              py: 0.8,
              px: 1.8,
              borderRadius: "10px",
              textTransform: "none",
              bgcolor: inCart ? "#F1F5F9" : "#FFC107",
              color: inCart ? "#082B50 !important" : "#082B50 !important",
              border: inCart ? "1.5px solid #CBD5E1" : "none",
              boxShadow: inCart ? "none" : "0 3px 10px rgba(245, 158, 11, 0.3)",
              "&:hover": {
                bgcolor: inCart ? "#E2E8F0" : "#FFD54F",
                boxShadow: inCart ? "none" : "0 4px 14px rgba(245, 158, 11, 0.4)",
              },
            }}
          >
            {inCart ? "In Cart" : "Add to Cart"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function CartProductImage({ item, size = 72 }: { item: { image: string; name: string }; size?: number }) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        flexShrink: 0,
        height: size,
        overflow: "hidden",
        position: "relative",
        width: size,
        border: "1px solid #E2E8F0",
      }}
    >
      <Image src={item.image} alt={item.name} fill sizes={`${size}px`} style={{ objectFit: "cover" }} />
    </Box>
  );
}

export function CartEmptyIcon() {
  return <ShoppingBagIcon sx={{ color: "#082B50", fontSize: 42 }} />;
}
