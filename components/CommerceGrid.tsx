"use client";

import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import Link from "next/link";
import CommerceProductCard from "@/components/CommerceProductCard";
import { productCategories, products, type ProductCategoryFilter } from "@/src/data/commerce";

export default function CommerceGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategoryFilter>("All products");

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All products" || product.category === category;
      const matchesQuery =
        !normalized ||
        `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Box component="section" sx={{ width: "100%" }}>
      {/* Search & Category Filter Toolbar */}
      <Paper
        elevation={0}
        sx={{
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "20px",
          mb: 3.5,
          p: { xs: 2.2, sm: 2.8 },
          boxShadow: "0 10px 30px -10px rgba(8, 43, 80, 0.08)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "stretch", md: "center" }}
          justifyContent="space-between"
          spacing={2}
        >
          {/* Search Box */}
          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products, materials, or local categories..."
            aria-label="Search District Mart products"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon sx={{ color: "#082B50", fontSize: 20 }} />
                </InputAdornment>
              ),
              endAdornment: query ? (
                <InputAdornment position="end">
                  <Button
                    aria-label="Clear product search"
                    onClick={() => setQuery("")}
                    sx={{ minHeight: 28, minWidth: 28, p: 0, color: "#64748B" }}
                  >
                    <ClearRoundedIcon sx={{ fontSize: 18 }} />
                  </Button>
                </InputAdornment>
              ) : undefined,
            }}
            sx={{
              flex: 1,
              maxWidth: { md: 540 },
              "& .MuiOutlinedInput-root": {
                bgcolor: "#F8FAFC",
                borderRadius: "12px",
                "& fieldset": { borderColor: "#E2E8F0" },
                "&:hover fieldset": { borderColor: "#CBD5E1" },
                "&.Mui-focused fieldset": { borderColor: "#082B50", borderWidth: 2 },
              },
            }}
          />

          {/* Stats & Cart Link */}
          <Stack direction="row" alignItems="center" spacing={1.5} justifyContent={{ xs: "space-between", md: "flex-end" }}>
            <Box
              sx={{
                bgcolor: "#F1F5F9",
                borderRadius: "10px",
                px: 1.6,
                py: 0.6,
                border: "1px solid #E2E8F0",
              }}
            >
              <Typography sx={{ color: "#082B50", fontSize: "0.78rem", fontWeight: 800 }}>
                {filteredProducts.length} of {products.length} products
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/mart/checkout"
              startIcon={<ShoppingBagRoundedIcon sx={{ fontSize: 17 }} />}
              sx={{
                bgcolor: "#FFC107",
                color: "#082B50 !important",
                fontSize: "0.78rem",
                fontWeight: 800,
                textTransform: "none",
                borderRadius: "10px",
                px: 2,
                py: 0.75,
                boxShadow: "0 2px 8px rgba(245, 158, 11, 0.25)",
                "&:hover": { bgcolor: "#FFD54F" },
              }}
            >
              Checkout
            </Button>
          </Stack>
        </Stack>

        {/* Category Filter Pills */}
        <Box
          className="no-scrollbar"
          sx={{
            mt: 2.2,
            overflowX: "auto",
            pb: 0.5,
            display: "flex",
            gap: 1,
          }}
        >
          {productCategories.map((item) => {
            const isSelected = category === item;
            return (
              <Button
                key={item}
                onClick={() => setCategory(item)}
                sx={{
                  bgcolor: isSelected ? "#082B50" : "#F8FAFC",
                  color: isSelected ? "#FFFFFF !important" : "#475569",
                  border: isSelected ? "1.5px solid #082B50" : "1px solid #E2E8F0",
                  borderRadius: "50px",
                  fontSize: "0.74rem",
                  fontWeight: 750,
                  px: 2,
                  py: 0.6,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: isSelected ? "#06203D" : "#E2E8F0",
                    borderColor: isSelected ? "#06203D" : "#CBD5E1",
                  },
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      </Paper>

      {/* Product Cards Grid */}
      {filteredProducts.length ? (
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {filteredProducts.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CommerceProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Alert
          severity="info"
          sx={{
            borderRadius: "14px",
            bgcolor: "#F8FAFC",
            border: "1px solid #E2E8F0",
            color: "#475569",
            fontWeight: 600,
          }}
        >
          No products match &ldquo;{query}&rdquo;. Try another search keyword or switch back to &ldquo;All products&rdquo;.
        </Alert>
      )}

      {/* Authentic Guarantee Banner */}
      <Paper
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #FEF9E7 0%, #FFFDF5 100%)",
          border: "1.5px solid #FDE68A",
          borderRadius: "16px",
          mt: 4,
          p: { xs: 2.2, md: 2.8 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={1.5}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                bgcolor: "#FFC107",
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
              <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 850 }}>
                Directly from Local Self Help Groups & FPO Federations
              </Typography>
              <Typography sx={{ color: "#78350F", fontSize: "0.76rem", lineHeight: 1.5, mt: 0.2 }}>
                Every purchase supports rural women entrepreneurs and smallholder farmers of Vizianagaram district.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
