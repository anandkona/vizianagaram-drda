"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Paper,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import Link from "next/link";
import Image from "next/image";
import {
  addProductToCart,
  formatINR,
  products,
  readWishlist,
  toggleWishlist,
  type Product,
} from "@/src/data/commerce";

function WishlistProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const handleRemove = () => {
    toggleWishlist(product.id);
  };

  const handleAddToCart = () => {
    addProductToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const originalPrice = Math.round((product.price * 1.25) / 10) * 10;

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid #E2E8F0",
        boxShadow: "0 6px 18px rgba(8, 43, 80, 0.05)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 14px 30px rgba(8, 43, 80, 0.1)",
          borderColor: "#CBD5E1",
        },
      }}
    >
      {/* 210px Standard Product Image Frame */}
      <Box sx={{ position: "relative", width: "100%", height: 210, overflow: "hidden", bgcolor: "#F8FAFC" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />

        {/* Category Pill Tag */}
        <Chip
          label={product.category}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "rgba(8, 43, 80, 0.85)",
            color: "#FFFFFF",
            backdropFilter: "blur(8px)",
            fontWeight: 700,
            fontSize: "0.68rem",
            borderRadius: "6px",
          }}
        />

        {/* Remove Wishlist Button */}
        <IconButton
          onClick={handleRemove}
          title="Remove from Wishlist"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            width: 36,
            height: 36,
            "&:hover": { bgcolor: "#FEE2E2", color: "#DC2626" },
          }}
        >
          <DeleteOutlineRoundedIcon sx={{ fontSize: 19, color: "#DC2626" }} />
        </IconButton>
      </Box>

      {/* Product Content */}
      <Box sx={{ p: 2.2, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          sx={{
            fontWeight: 800,
            color: "#082B50",
            fontSize: "0.98rem",
            lineHeight: 1.35,
            mb: 0.8,
            minHeight: "2.7em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: "0.78rem",
            lineHeight: 1.45,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>

        {/* Pricing */}
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mt: "auto", mb: 2 }}>
          <Typography sx={{ fontWeight: 900, fontSize: "1.3rem", color: "#082B50" }}>
            {formatINR(product.price)}
          </Typography>
          <Typography sx={{ textDecoration: "line-through", color: "#94A3B8", fontSize: "0.85rem", fontWeight: 550 }}>
            {formatINR(originalPrice)}
          </Typography>
          <Typography sx={{ color: "#16A34A", fontSize: "0.75rem", fontWeight: 750, ml: "auto" }}>
            20% OFF
          </Typography>
        </Box>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          onClick={handleAddToCart}
          startIcon={<ShoppingBagRoundedIcon sx={{ fontSize: "17px !important", color: "#082B50" }} />}
          fullWidth
          sx={{
            bgcolor: added ? "#16A34A !important" : "#F5B800",
            color: added ? "#FFFFFF !important" : "#082B50 !important",
            fontWeight: 850,
            fontSize: "0.86rem",
            textTransform: "none",
            borderRadius: "10px",
            py: 1,
            boxShadow: "0 2px 8px rgba(245, 184, 0, 0.3)",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: added ? "#15803D !important" : "#E0A800",
            },
          }}
        >
          {added ? "Added to Cart ✓" : "Move to Cart"}
        </Button>
      </Box>
    </Paper>
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
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 6 }}>
      {/* 1. MASTER EDITORIAL HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 3, sm: 3.5, md: 4 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
          mb: { xs: 3, md: 4 },
        }}
      >
        {/* Soft Gold Backdrop Blur Accent */}
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: { xs: "-10%", sm: "0%", md: "6%" },
            width: { xs: 320, sm: 420, md: 500 },
            height: { xs: 320, sm: 420, md: 500 },
            borderRadius: "50%",
            bgcolor: "#FEF08A",
            opacity: 0.65,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Traditional Temple Scripture Watermark Accent */}
        <Box
          sx={{
            position: "absolute",
            top: "14%",
            right: { xs: "28%", md: "38%", lg: "42%" },
            width: { xs: 180, sm: 240, md: 300 },
            height: { xs: 150, sm: 200, md: 240 },
            backgroundImage: "url('/images/temple-scripture-clean.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.22,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Details */}
            <Grid size={{ xs: 12, md: 6.5 }}>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.6,
                }}
              >
                DISTRICT MART • DWCRA & SHG CRAFT STORE
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.75rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1,
                }}
              >
                Saved Wishlist
              </Typography>

              <Typography
                sx={{
                  color: "#B45309",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  fontWeight: 700,
                  fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                  mb: 1.2,
                }}
              >
                మీరు ఎంపిక చేసుకున్న స్వయం సహాయక సంఘాల ప్రామాణిక ఉత్పత్తులు
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2.5,
                }}
              >
                Items you have bookmarked from our rural artisans, Bobbili weavers, and farmer producer groups. Move them directly to your order inquiry whenever you are ready.
              </Typography>

              {/* Status Pill */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Chip
                  icon={<FavoriteRoundedIcon sx={{ fontSize: "16px !important", color: "#DC2626 !important" }} />}
                  label={`${savedProducts.length} Saved Product${savedProducts.length === 1 ? "" : "s"}`}
                  sx={{
                    bgcolor: "#FFF1F2",
                    color: "#9F1239",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    border: "1px solid #FECDD3",
                    py: 1.8,
                    px: 0.5,
                  }}
                />
                <Button
                  component={Link}
                  href="/mart"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important" }} />}
                  sx={{
                    color: "#082B50",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    textTransform: "none",
                    "&:hover": { color: "#D97706", bgcolor: "transparent" },
                  }}
                >
                  Explore All Mart Products →
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Badge */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 240, sm: 280, md: 320 },
                  borderRadius: { xs: "24px", sm: "32px", md: "38px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
                  border: "4px solid #FFFFFF",
                }}
              >
                <Image
                  src="/images/cultural-heritage.jpg"
                  alt="Vizianagaram Handicrafts and DWCRA Products"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />

                {/* Glassmorphic Official Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: { xs: 16, sm: "auto" },
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: "16px",
                    px: 2,
                    py: 1.2,
                    boxShadow: "0 8px 24px rgba(8, 43, 80, 0.2)",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "10px",
                        bgcolor: "#F5B800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#082B50",
                        flexShrink: 0,
                      }}
                    >
                      <StorefrontRoundedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "0.85rem", lineHeight: 1.2 }}>
                        DRDA DWCRA Bazaar
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 600 }}>
                        Direct Producer-to-Citizen Support
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. WISHLIST PRODUCTS GRID OR EMPTY STATE */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {savedProducts.length > 0 ? (
          <Grid container spacing={2.5}>
            {savedProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <WishlistProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              p: { xs: 4, sm: 6, md: 8 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid #E2E8F0",
              maxWidth: 500,
              mx: "auto",
              my: 4,
              boxShadow: "0 8px 24px rgba(8, 43, 80, 0.04)",
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                bgcolor: "#FFF1F2",
                color: "#F43F5E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2.5,
              }}
            >
              <FavoriteBorderRoundedIcon sx={{ fontSize: 36 }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#082B50", mb: 1 }}>
              Your Wishlist is Empty
            </Typography>
            <Typography sx={{ color: "#64748B", mb: 3.5, fontSize: "0.88rem", maxWidth: 360, lineHeight: 1.6 }}>
              You haven't saved any handcrafted or agricultural items yet. Tap the heart icon on any product in District Mart to save it here.
            </Typography>
            <Button
              component={Link}
              href="/mart"
              variant="contained"
              startIcon={<StorefrontRoundedIcon sx={{ color: "#082B50" }} />}
              sx={{
                bgcolor: "#F5B800",
                color: "#082B50 !important",
                borderRadius: "10px",
                px: 3.5,
                py: 1.2,
                fontWeight: 850,
                fontSize: "0.9rem",
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(245, 184, 0, 0.35)",
                "&:hover": { bgcolor: "#E0A800" },
              }}
            >
              Explore District Mart Products
            </Button>
          </Paper>
        )}
      </Container>
    </Box>
  );
}
