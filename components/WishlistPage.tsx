"use client";

import { useEffect, useMemo, useState } from "react";
import { Box, Button, Container, Grid, Typography, IconButton } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";
import Image from "next/image";
import {
  addProductToCart,
  formatINR,
  products,
  readWishlist,
  toggleWishlist,
  type Product
} from "@/src/data/commerce";

function WishlistProductCard({ product }: { product: Product }) {
  const handleRemove = () => {
    toggleWishlist(product.id);
  };
  const handleAddToCart = () => {
    addProductToCart(product);
  };
  // Mock an original price slightly higher than the current price
  const originalPrice = Math.round(product.price * 1.2 / 10) * 10;

  return (
    <Box sx={{
      background: "#ffffff",
      borderRadius: 4,
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
      <Box sx={{ position: "relative", height: 220 }}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: "cover" }} />
        <IconButton 
          onClick={handleRemove}
          sx={{ 
            position: "absolute", 
            top: 10, 
            right: 10, 
            background: "rgba(255,255,255,0.85)",
            "&:hover": { background: "rgba(255,255,255,1)" },
            width: 32,
            height: 32,
            backdropFilter: "blur(4px)"
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 18, color: "#d32f2f" }} />
        </IconButton>
      </Box>
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1.05rem", lineHeight: 1.3, mb: 1 }}>
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mt: "auto", mb: 2 }}>
          <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", color: "#1a1a1a" }}>
            {formatINR(product.price)}
          </Typography>
          <Typography sx={{ textDecoration: "line-through", color: "#888", fontSize: "0.85rem" }}>
            {formatINR(originalPrice)}
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          onClick={handleAddToCart}
          startIcon={<ShoppingCartOutlinedIcon />}
          fullWidth
          sx={{ 
            background: "#FFB300", 
            color: "#000", 
            fontWeight: 700,
            textTransform: "none",
            borderRadius: 2,
            py: 1,
            boxShadow: "none",
            "&:hover": { background: "#FFA000", boxShadow: "none" }
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default function WishlistPage() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setIds(readWishlist());
    sync();
    window.addEventListener("vizianagaram-wishlist-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("vizianagaram-wishlist-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const savedProducts = useMemo(() => products.filter((product) => ids.includes(product.id)), [ids]);

  return (
    <Box sx={{ background: "#F8FAFC", minHeight: "80vh", pt: { xs: 2, md: 4 }, pb: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e293b", mb: 4, display: "flex", alignItems: "center", gap: 1.5 }}>
          <span style={{ color: "#e11d48" }}>❤️</span> My Wishlist <Typography component="span" sx={{ color: "#94a3b8", fontSize: "1.25rem", fontWeight: 600 }}>({savedProducts.length})</Typography>
        </Typography>

        {savedProducts.length > 0 ? (
          <Grid container spacing={3}>
            {savedProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <WishlistProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{
            background: "#ffffff",
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid #e2e8f0",
            maxWidth: 360,
            mx: "auto",
            mt: 4
          }}>
            <FavoriteBorderRoundedIcon sx={{ fontSize: 48, color: "#cbd5e1", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b", mb: 1 }}>
              Your wishlist is empty
            </Typography>
            <Typography sx={{ color: "#64748b", mb: 3, fontSize: "0.875rem" }}>
              Tap the ❤️ on any product to save it here.
            </Typography>
            <Button 
              component={Link} 
              href="/mart" 
              variant="contained"
              sx={{ 
                background: "#FFB300", 
                color: "#000000",
                borderRadius: 8,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { background: "#FFA000" },
                boxShadow: "none"
              }}
            >
              Browse Products
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
