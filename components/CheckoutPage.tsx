"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import Link from "next/link";
import Image from "next/image";
import {
  clearCart,
  formatINR,
  readCart,
  removeProductFromCart,
  setCartQuantity,
  type CartItem,
} from "@/src/data/commerce";

type Values = { name: string; mobile: string; address: string; notes: string };

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [values, setValues] = useState<Values>({ name: "", mobile: "", address: "", notes: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success">("idle");
  const [orderId, setOrderId] = useState("");

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

  const update = (field: keyof Values, value: string) => setValues((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mobile = values.mobile.replace(/\D/g, "").slice(0, 10);

    if (!values.name.trim() || !/^\d{10}$/.test(mobile) || !values.address.trim() || items.length === 0) {
      setError("Please enter your name, a 10-digit mobile number, complete address, and ensure you have at least one item.");
      return;
    }

    setError("");
    setStatus("pending");

    const suffix =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID().slice(0, 8).toUpperCase()
        : Math.random().toString(36).slice(2, 10).toUpperCase();

    setOrderId("VZM-MART-" + suffix);
    clearCart();
    setStatus("success");
  };

  if (status === "success") {
    return (
      <Box sx={{ background: "#F8FAFC", py: { xs: 6, md: 10 }, minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              borderRadius: "24px",
              p: { xs: 4, md: 6 },
              textAlign: "center",
              border: "1px solid #E2E8F0",
              boxShadow: "0 10px 30px rgba(8, 43, 80, 0.08)",
              bgcolor: "#FFFFFF",
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#DCFCE7",
                color: "#16A34A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2.5,
              }}
            >
              <CheckCircleRoundedIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.6rem", md: "2.1rem" }, fontWeight: 900, mb: 1 }}>
              Order Inquiry Registered Successfully!
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 520, mx: "auto", mb: 3 }}>
              Your demonstration order inquiry has been received. Your official tracking reference is{" "}
              <strong style={{ color: "#082B50" }}>{orderId}</strong>. The respective DWCRA SHG federation or producer group will verify stock availability and contact you.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={2} sx={{ mt: 4 }}>
              <Button
                component={Link}
                href="/mart"
                variant="contained"
                startIcon={<StorefrontRoundedIcon sx={{ color: "#082B50" }} />}
                sx={{
                  bgcolor: "#F5B800",
                  color: "#082B50 !important",
                  px: 3.5,
                  py: 1.2,
                  borderRadius: "10px",
                  fontWeight: 850,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(245, 184, 0, 0.35)",
                  "&:hover": { bgcolor: "#E0A800" },
                }}
              >
                Continue Shopping on Mart
              </Button>
              <Button
                component={Link}
                href="/"
                variant="outlined"
                sx={{
                  color: "#082B50",
                  borderColor: "#CBD5E1",
                  px: 3,
                  py: 1.2,
                  borderRadius: "10px",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#F8FAFC", borderColor: "#082B50" },
                }}
              >
                Back to District Portal
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 8 }}>
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
                DISTRICT MART • SHOPPING CART & INQUIRY
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
                Shopping Cart & Checkout
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
                స్వయం సహాయక సంఘాల ఉత్పత్తుల ఎంపిక మరియు నేరుగా ఆర్డర్ నమోదు
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
                Review your selected rural artisanal items, handloom weaves, and organic agri-products before dispatch confirmation by our district DRDA marketing cell.
              </Typography>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <Chip
                  icon={<ShoppingBagRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
                  label={`${items.length} Unique Product${items.length === 1 ? "" : "s"}`}
                  sx={{
                    bgcolor: "#FFF9E6",
                    color: "#082B50",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    border: "1px solid #F5B800",
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
                  Continue Shopping →
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
                  src="/images/drda-women-shg.jpg"
                  alt="DWCRA Self Help Group Women Producers"
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
                        100% Direct SHG Producers
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 600 }}>
                        Fair Returns to Rural Women Artisans
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. MAIN CART ITEMS & ORDER FORM */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {items.length === 0 ? (
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
                bgcolor: "#FFF9E6",
                color: "#D97706",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2.5,
              }}
            >
              <ShoppingBagRoundedIcon sx={{ fontSize: 36 }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#082B50", mb: 1 }}>
              Your Cart is Currently Empty
            </Typography>
            <Typography sx={{ color: "#64748B", mb: 3.5, fontSize: "0.88rem", maxWidth: 360, lineHeight: 1.6 }}>
              You haven't added any handcrafted items to your cart yet. Explore our authentic Bobbili veenas, cotton stoles, and millet flours.
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
        ) : (
          <Grid container spacing={3.5}>
            {/* Left Column: Cart Items List */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5, pb: 1.5, borderBottom: "1px solid #E2E8F0" }}>
                  <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.2rem" }}>
                    Selected Items ({items.reduce((s, i) => s + i.quantity, 0)})
                  </Typography>
                  <Button
                    onClick={() => clearCart()}
                    startIcon={<DeleteOutlineRoundedIcon sx={{ fontSize: "18px !important" }} />}
                    sx={{ color: "#DC2626", textTransform: "none", fontWeight: 700, fontSize: "0.82rem", "&:hover": { bgcolor: "#FEF2F2" } }}
                  >
                    Clear All
                  </Button>
                </Box>

                <Stack spacing={2.5}>
                  {items.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1.5,
                        borderRadius: "14px",
                        bgcolor: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        transition: "all 0.15s ease",
                        "&:hover": { bgcolor: "#FFFFFF", borderColor: "#CBD5E1" },
                      }}
                    >
                      {/* Product Thumbnail */}
                      <Box sx={{ position: "relative", width: 80, height: 80, borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                        <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                      </Box>

                      {/* Product Details */}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.3, mb: 0.5 }}>
                          {item.name}
                        </Typography>
                        <Typography sx={{ color: "#D97706", fontWeight: 850, fontSize: "1rem" }}>
                          {formatINR(item.price)}
                        </Typography>
                      </Box>

                      {/* Quantity Controls */}
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ bgcolor: "#FFFFFF", p: 0.4, borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                        <IconButton
                          size="small"
                          onClick={() => setCartQuantity(item.id, item.quantity - 1)}
                          sx={{ p: 0.4, color: "#64748B" }}
                        >
                          <RemoveRoundedIcon fontSize="small" />
                        </IconButton>
                        <Typography sx={{ fontWeight: 850, fontSize: "0.9rem", color: "#082B50", minWidth: 20, textAlign: "center" }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => setCartQuantity(item.id, item.quantity + 1)}
                          sx={{ p: 0.4, color: "#082B50" }}
                        >
                          <AddRoundedIcon fontSize="small" />
                        </IconButton>
                      </Stack>

                      {/* Remove Button */}
                      <IconButton
                        size="small"
                        onClick={() => removeProductFromCart(item.id)}
                        sx={{ color: "#94A3B8", "&:hover": { color: "#DC2626" } }}
                      >
                        <DeleteOutlineRoundedIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            {/* Right Column: Order Delivery & Checkout Details */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  borderRadius: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 6px 20px rgba(8, 43, 80, 0.05)",
                }}
              >
                <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.2rem", mb: 0.8 }}>
                  Delivery Details & Inquiry
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, mb: 2.5 }}>
                  Please fill in your recipient details. The respective SHG federation will verify stock and contact you for doorstep delivery.
                </Typography>

                {error && (
                  <Alert severity="error" sx={{ mb: 2.5, borderRadius: "10px", fontSize: "0.82rem", fontWeight: 600 }}>
                    {error}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                      Full Name *
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      required
                      placeholder="e.g. S. Appala Naidu"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#F8FAFC",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          "& fieldset": { borderColor: "#CBD5E1" },
                          "&.Mui-focused fieldset": { borderColor: "#082B50" },
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                      Mobile Phone Number *
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      required
                      placeholder="10-digit mobile number"
                      value={values.mobile}
                      onChange={(e) => update("mobile", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#F8FAFC",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          "& fieldset": { borderColor: "#CBD5E1" },
                          "&.Mui-focused fieldset": { borderColor: "#082B50" },
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                      Delivery Address & Landmark *
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      required
                      multiline
                      rows={2}
                      placeholder="House/Door No, Street, Village/Mandal, Pincode"
                      value={values.address}
                      onChange={(e) => update("address", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#F8FAFC",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          "& fieldset": { borderColor: "#CBD5E1" },
                          "&.Mui-focused fieldset": { borderColor: "#082B50" },
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                      Special Delivery Instructions (Optional)
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      placeholder="e.g. Call before delivery, gift wrap, preferred delivery time"
                      value={values.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#F8FAFC",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          "& fieldset": { borderColor: "#CBD5E1" },
                          "&.Mui-focused fieldset": { borderColor: "#082B50" },
                        },
                      }}
                    />
                  </Box>

                  {/* Order Summary Box */}
                  <Box sx={{ mt: 1, p: 2, borderRadius: "12px", bgcolor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                    <Stack spacing={1}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ color: "#64748B", fontSize: "0.85rem" }}>Subtotal ({items.length} items)</Typography>
                        <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.85rem" }}>{formatINR(total)}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ color: "#64748B", fontSize: "0.85rem" }}>Rural Delivery Fee</Typography>
                        <Typography sx={{ color: "#16A34A", fontWeight: 750, fontSize: "0.85rem" }}>Free Support</Typography>
                      </Box>
                      <Divider sx={{ my: 0.5 }} />
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1rem" }}>Total Amount</Typography>
                        <Typography sx={{ color: "#D97706", fontWeight: 900, fontSize: "1.3rem" }}>{formatINR(total)}</Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={status === "pending"}
                    endIcon={status === "pending" ? <CircularProgress size={16} color="inherit" /> : <ArrowForwardRoundedIcon sx={{ color: "#082B50" }} />}
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50 !important",
                      fontWeight: 850,
                      fontSize: "0.92rem",
                      py: 1.3,
                      borderRadius: "10px",
                      textTransform: "none",
                      boxShadow: "0 4px 14px rgba(245, 184, 0, 0.35)",
                      mt: 1,
                      "&:hover": { bgcolor: "#E0A800" },
                    }}
                  >
                    {status === "pending" ? "Registering Inquiry..." : "Submit Direct Order Inquiry"}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}
