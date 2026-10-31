"use client";

import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
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
      const matchesQuery = !normalized || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 2, md: 2.5 } }}>
      <Container maxWidth="lg">
        <Paper sx={{ background: "#FFFFFF", border: "1px solid #EDE3CE", borderRadius: 3.5, mb: 3.5, p: { xs: 2, md: 2.7 } }}>
          <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "stretch", md: "center" }} justifyContent="space-between" spacing={2}>
            <TextField value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, materials or local categories" aria-label="Search District Mart products" InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: "#6B6254" }} /></InputAdornment>, endAdornment: query ? <InputAdornment position="end"><Button aria-label="Clear product search" onClick={() => setQuery("")} sx={{ minHeight: 30, minWidth: 30, p: 0 }}><ClearIcon fontSize="small" /></Button></InputAdornment> : undefined }} sx={{ maxWidth: { md: 520 } }} />
            <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap" useFlexGap>
              <Typography sx={{ color: "text.secondary", fontSize: "0.78rem", fontWeight: 700 }}>{filteredProducts.length} of {products.length} products</Typography>
              <Button component={Link} href="/mart/checkout" size="small" startIcon={<ShoppingCartCheckoutIcon />} sx={{ color: "#000000", fontSize: "0.75rem" }}>View cart & checkout</Button>
            </Stack>
          </Stack>
          <Box className="no-scrollbar" sx={{ mt: 2.2, overflowX: "auto", pb: 0.4 }}>
            <ToggleButtonGroup exclusive value={category} onChange={(_event, value: string | null) => { if (value) setCategory(value as ProductCategoryFilter); }} aria-label="Filter products by category" sx={{ gap: 0.8, justifyContent: { xs: "flex-start", md: "center" }, minWidth: "max-content" }}>
              {productCategories.map((item) => <ToggleButton key={item} value={item} sx={{ border: "1px solid #F0E4C6 !important", borderRadius: "999px !important", color: "text.secondary", fontSize: "0.72rem", fontWeight: 750, px: 1.6, py: 0.75, textTransform: "none", whiteSpace: "nowrap", "&.Mui-selected": { background: "#A66A00 !important", borderColor: "#A66A00 !important", color: "#FFFFFF !important" }, "&:hover": { background: "#FFF3C4" } }}>{item}</ToggleButton>)}
            </ToggleButtonGroup>
          </Box>
        </Paper>
        {filteredProducts.length ? <Grid container spacing={2.25}>{filteredProducts.map((product) => <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}><CommerceProductCard product={product} /></Grid>)}</Grid> : <Alert severity="info" sx={{ borderRadius: 3 }}>No products match “{query}”. Try another search or choose “All products”.</Alert>}
        <Paper sx={{ background: "#FFF8E1", border: "1px solid #FFF0B3", borderRadius: 3, mt: 3, p: { xs: 2, md: 2.5 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between" spacing={1.5}>
            <Box><Typography sx={{ color: "text.primary", fontSize: "0.9rem", fontWeight: 800 }}>A demonstration catalogue</Typography><Typography sx={{ color: "text.secondary", fontSize: "0.75rem", lineHeight: 1.6, mt: 0.35 }}>Product names, images, prices and availability are illustrative. Confirm details with a verified local seller before purchasing.</Typography></Box>
            <Chip label="LocalStorage cart" size="small" sx={{ background: "#FFFFFF", color: "secondary.dark", flexShrink: 0, fontSize: "0.65rem" }} />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
