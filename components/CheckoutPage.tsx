"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Link from "next/link";
import { CartProductImage } from "@/components/CommerceProductCard";
import { clearCart, formatINR, readCart, type CartItem } from "@/src/data/commerce";

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
      setError("Enter your name, a 10-digit mobile number, delivery address and at least one cart item.");
      return;
    }
    setError("");
    setStatus("pending");
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: values.name.trim(), mobile, address: values.address.trim(), notes: values.notes.trim(), items }),
      });
      const payload: unknown = await response.json().catch(() => null);
      if (!response.ok) throw new Error("We could not create the demonstration order. Please try again.");
      const record = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
      setOrderId(typeof record.orderId === "string" ? record.orderId : "VZM-MART-DEMO");
      clearCart();
      setStatus("success");
    } catch (submitError) {
      setStatus("idle");
      setError(submitError instanceof Error ? submitError.message : "We could not create the demonstration order. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <Box component="section" sx={{ background: "#F8FAFC", py: { xs: 6, md: 10 }, minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Card sx={{ borderRadius: 3, p: { xs: 4, md: 6 }, textAlign: "center", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <CheckCircleRoundedIcon sx={{ color: "#22C55E", fontSize: 68 }} />
            <Typography component="h2" variant="h3" sx={{ color: "#0F172A", fontSize: { xs: "1.5rem", md: "2rem" }, mt: 2, fontWeight: 800 }}>Order request received</Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.7, mt: 1.5, maxWidth: "500px", mx: "auto" }}>
              Your demonstration order request is complete. Your reference is <strong style={{ color: "#0F172A" }}>{orderId}</strong>. A verified seller would confirm availability, delivery and payment separately.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={2} sx={{ mt: 4 }}>
              <Button component={Link} href="/mart" variant="contained" sx={{ bgcolor: "#0F172A", color: "white", px: 3, py: 1, borderRadius: 2, fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "#1E293B" } }}>Continue browsing</Button>
              <Button component={Link} href="/" variant="outlined" sx={{ color: "#0F172A", borderColor: "#CBD5E1", px: 3, py: 1, borderRadius: 2, fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "white", borderColor: "#94A3B8" } }}>Back to portal</Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box component="section" sx={{ background: "#F8FAFC", py: { xs: 2.5, md: 3.5 }, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "#64748B", mb: 3, fontSize: "0.85rem", fontWeight: 600 }}>
          <Link href="/mart" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Vizianagaram Mart</Link>
          <Typography component="span" sx={{ fontSize: "0.75rem" }}>/</Typography>
          <Typography sx={{ color: "#0F172A", fontSize: "0.85rem", fontWeight: 700 }}>Checkout</Typography>
        </Stack>

        <Typography component="h1" variant="h3" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "2rem", md: "2.5rem" }, letterSpacing: "-0.02em", color: "#0F172A" }}>
          Checkout
        </Typography>
        <Typography sx={{ color: "#64748B", fontSize: "0.95rem", mb: 4, maxWidth: "600px", lineHeight: 1.6 }}>
          Review your selected products and leave a contact route for a verified local seller. This is a demonstration checkout and does not process payment.
        </Typography>

        {error ? <Alert severity="error" sx={{ borderRadius: 2, mb: 3 }}>{error}</Alert> : null}
        
        {items.length === 0 ? (
          <Card sx={{ borderRadius: 3, p: { xs: 4, md: 6 }, textAlign: "center", border: "1px solid #E2E8F0", boxShadow: "none", bgcolor: "white" }}>
            <Typography component="h2" variant="h4" sx={{ color: "#0F172A", fontSize: "1.5rem", fontWeight: 800 }}>Your cart is empty.</Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.9rem", mt: 1 }}>Add a product before starting checkout.</Typography>
            <Button component={Link} href="/mart" sx={{ mt: 3, bgcolor: "#FFC107", color: "#1F1700", px: 3, py: 1, borderRadius: 2, fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "#FFB300" } }} variant="contained">Browse products</Button>
          </Card>
        ) : (
          <Grid container spacing={3} alignItems="flex-start">
            <Grid size={{ xs: 12, lg: 7.5 }}>
              <Card sx={{ borderRadius: 3, border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Typography component="h2" variant="h5" sx={{ color: "#0F172A", fontSize: "1.2rem", fontWeight: 800, mb: 3 }}>Contact & Delivery Details</Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}><TextField size="small" fullWidth label="Full name" onChange={(event) => update("name", event.target.value)} required value={values.name} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} /></Grid>
                      <Grid size={{ xs: 12, sm: 6 }}><TextField size="small" fullWidth inputProps={{ inputMode: "numeric", maxLength: 10 }} label="Mobile number" onChange={(event) => update("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))} required type="tel" value={values.mobile} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} /></Grid>
                      <Grid size={12}><TextField size="small" fullWidth label="Delivery address" minRows={3} multiline onChange={(event) => update("address", event.target.value)} required value={values.address} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} /></Grid>
                      <Grid size={12}><TextField size="small" fullWidth label="Notes for the seller (optional)" multiline minRows={2} onChange={(event) => update("notes", event.target.value)} value={values.notes} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} /></Grid>
                    </Grid>
                    <Button disabled={status === "pending"} type="submit" variant="contained" endIcon={status === "pending" ? <CircularProgress sx={{ color: "#1F1700" }} size={16} /> : <ArrowForwardRoundedIcon />} sx={{ mt: 3, bgcolor: "#FFC107", color: "#1F1700", px: 4, py: 1.25, borderRadius: 2, fontWeight: 800, textTransform: "none", boxShadow: "none", "&:hover": { bgcolor: "#FFB300", boxShadow: "0 4px 12px rgba(255,193,7,0.3)" }, "&.Mui-disabled": { bgcolor: "#FDE68A", color: "#92400E" } }}>{status === "pending" ? "Creating request…" : "Create order request"}</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, lg: 4.5 }}>
              <Card sx={{ borderRadius: 3, position: "sticky", top: 120, border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography component="h2" variant="h5" sx={{ color: "#0F172A", fontSize: "1.15rem", fontWeight: 800 }}>Order Summary</Typography>
                  <Stack divider={<Divider flexItem sx={{ borderColor: "#F1F5F9" }} />} sx={{ mt: 2 }}>
                    {items.map((item) => (
                      <Stack key={item.id} direction="row" spacing={2} sx={{ py: 1.5 }}>
                        <CartProductImage item={item} size={48} />
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography sx={{ color: "#0F172A", fontSize: "0.85rem", fontWeight: 700 }}>{item.name}</Typography>
                          <Typography sx={{ color: "#64748B", fontSize: "0.75rem", mt: 0.25 }}>Qty: {item.quantity}</Typography>
                        </Box>
                        <Typography sx={{ color: "#0F172A", fontSize: "0.9rem", fontWeight: 800 }}>{formatINR(item.price * item.quantity)}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Divider sx={{ my: 2, borderColor: "#E2E8F0" }} />
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ color: "#64748B", fontSize: "0.85rem", fontWeight: 600 }}>Estimated total</Typography>
                    <Typography sx={{ color: "#0F172A", fontSize: "1.4rem", fontWeight: 900 }}>{formatINR(total)}</Typography>
                  </Stack>
                  <Box sx={{ mt: 3, p: 1.5, bgcolor: "#F8FAFC", borderRadius: 2, border: "1px solid #E2E8F0" }}>
                    <Typography sx={{ color: "#64748B", fontSize: "0.7rem", lineHeight: 1.5 }}>
                      <strong style={{ color: "#0F172A" }}>Note:</strong> No payment is processed here. Availability, delivery and final price must be confirmed by a verified seller.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}
