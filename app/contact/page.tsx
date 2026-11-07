"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Stack,
  Paper,
  Chip,
  Alert,
} from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mandal: "",
    category: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        mandal: "",
        category: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* 1. MASTER EDITORIAL HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 3, sm: 3.5, md: 4 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
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
            {/* Left Column: Heading & Subtitle */}
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
                OFFICIAL CITIZEN HELPDESK & GRIEVANCE REDRESSAL
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
                Contact DRDA Vizianagaram
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
                విజయనగరం జిల్లా గ్రామీణాభివృద్ధి సంస్థ (DRDA) అధికారిక సంప్రదింపు కేంద్రం
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
                Connect directly with the District Rural Development Agency, Collectorate administrative offices, Project Directors, and Mandal development officers. Our dedicated citizen facilitation desk is open to serve you.
              </Typography>

              {/* Action Badges */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
                <Chip
                  icon={<SupportAgentRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
                  label="IVRS Toll-Free: 1902"
                  sx={{
                    bgcolor: "#FFF9E6",
                    color: "#082B50",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                    border: "1px solid #F5B800",
                    py: 1.8,
                    px: 0.5,
                  }}
                />
                <Chip
                  icon={<AccessTimeRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
                  label="Mon - Sat: 10:00 AM - 5:30 PM"
                  sx={{
                    bgcolor: "#F1F5F9",
                    color: "#334155",
                    fontWeight: 750,
                    fontSize: "0.78rem",
                    py: 1.8,
                    px: 0.5,
                  }}
                />
              </Stack>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Badge */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 310, md: 360 },
                  borderRadius: { xs: "24px", sm: "32px", md: "38px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
                  border: "4px solid #FFFFFF",
                }}
              >
                <Image
                  src="/images/collectorate.jpg"
                  alt="District Collectorate & DRDA Office Vizianagaram"
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
                      <CorporateFareRoundedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "0.85rem", lineHeight: 1.2 }}>
                        DRDA Office Complex
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 600 }}>
                        Collectorate Compound, Vizianagaram - 535003
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. THREE CORE CONTACT COORDINATE CARDS */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={2.5}>
            {/* Card 1: Direct Helpline & IVRS */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  borderRadius: "18px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 14px rgba(8, 43, 80, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 24px rgba(8, 43, 80, 0.08)",
                    borderColor: "#CBD5E1",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    bgcolor: "#FFF9E6",
                    color: "#D97706",
                    border: "1px solid #FDE68A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <PhoneRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.1rem", mb: 0.5 }}>
                  Phone & Helpline
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, mb: 2, flexGrow: 1 }}>
                  Contact the District Control Room or access state-wide automated IVRS assistance.
                </Typography>

                <Box sx={{ p: 1.5, borderRadius: "10px", bgcolor: "#F8FAFC", border: "1px solid #E2E8F0", mb: 1 }}>
                  <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                    DRDA Office Landline
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.05rem" }}>
                    08922 - 236966
                  </Typography>
                </Box>

                <Box sx={{ p: 1.5, borderRadius: "10px", bgcolor: "#FFFDF5", border: "1px solid #FEF3C7" }}>
                  <Typography sx={{ color: "#92400E", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                    CM Public Grievance Toll-Free
                  </Typography>
                  <Typography sx={{ color: "#B45309", fontWeight: 900, fontSize: "1.05rem" }}>
                    1902 (Toll-Free)
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Card 2: Official Institutional Emails */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  borderRadius: "18px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 14px rgba(8, 43, 80, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 24px rgba(8, 43, 80, 0.08)",
                    borderColor: "#CBD5E1",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    bgcolor: "#EFF6FF",
                    color: "#1D4ED8",
                    border: "1px solid #BFDBFE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <MailRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.1rem", mb: 0.5 }}>
                  Official Email Desks
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, mb: 2, flexGrow: 1 }}>
                  Submit official correspondence, scheme clarifications, and documentation to authorized inboxes.
                </Typography>

                <Box sx={{ p: 1.5, borderRadius: "10px", bgcolor: "#F8FAFC", border: "1px solid #E2E8F0", mb: 1 }}>
                  <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                    Project Director DRDA
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.92rem", wordBreak: "break-all" }}>
                    pd-drda-vzm@ap.gov.in
                  </Typography>
                </Box>

                <Box sx={{ p: 1.5, borderRadius: "10px", bgcolor: "#F0F9FF", border: "1px solid #BAE6FD" }}>
                  <Typography sx={{ color: "#0369A1", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                    District Collectorate Office
                  </Typography>
                  <Typography sx={{ color: "#0284C7", fontWeight: 800, fontSize: "0.92rem", wordBreak: "break-all" }}>
                    collector-vzm@ap.gov.in
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Card 3: Physical Headquarters Location */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  borderRadius: "18px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 14px rgba(8, 43, 80, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 24px rgba(8, 43, 80, 0.08)",
                    borderColor: "#CBD5E1",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    bgcolor: "#ECFDF5",
                    color: "#059669",
                    border: "1px solid #A7F3D0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <LocationOnRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.1rem", mb: 0.5 }}>
                  Headquarters & Address
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, mb: 2, flexGrow: 1 }}>
                  Physical office location for citizen walk-ins, Spandana grievance submission, and official meetings.
                </Typography>

                <Box sx={{ p: 1.5, borderRadius: "10px", bgcolor: "#F8FAFC", border: "1px solid #E2E8F0", mb: 1 }}>
                  <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                    Postal Address
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.88rem", lineHeight: 1.4 }}>
                    DRDA Office, District Collectorate Complex, Cantonment, Vizianagaram, Andhra Pradesh - 535003
                  </Typography>
                </Box>

                <Button
                  component={Link}
                  href="/map"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important" }} />}
                  sx={{
                    mt: "auto",
                    color: "#082B50",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    p: 0,
                    "&:hover": { color: "#D97706", bgcolor: "transparent" },
                  }}
                >
                  Open on District Interactive Map →
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. CITIZEN FACILITATION FORM & HELP DESK ASSISTANCE */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 3.5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3.5}>
            {/* Left Column: Direct Message Form */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 3.5, md: 4 },
                  borderRadius: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 6px 20px rgba(8, 43, 80, 0.05)",
                }}
              >
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 0.6,
                  }}
                >
                  CITIZEN COMMUNICATION DESK
                </Typography>
                <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: { xs: "1.35rem", sm: "1.6rem" }, mb: 0.8 }}>
                  Send an Official Inquiry
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.5, mb: 3 }}>
                  Your inquiry will be logged with the DRDA public facilitation desk. Please provide complete contact information for timely callback.
                </Typography>

                {submitted && (
                  <Alert
                    severity="success"
                    icon={<CheckCircleRoundedIcon fontSize="inherit" />}
                    sx={{ mb: 3, borderRadius: "10px", fontWeight: 600, fontSize: "0.85rem" }}
                  >
                    Thank you, your inquiry has been registered successfully. Our administrative desk will contact you within 2 working days.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                        Full Name *
                      </Typography>
                      <TextField
                        size="small"
                        fullWidth
                        required
                        placeholder="e.g. S. Appala Naidu"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#F8FAFC",
                            borderRadius: "10px",
                            fontSize: "0.85rem",
                            "& fieldset": { borderColor: "#CBD5E1" },
                            "&:hover fieldset": { borderColor: "#94A3B8" },
                            "&.Mui-focused fieldset": { borderColor: "#082B50" },
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                        Mobile Phone Number *
                      </Typography>
                      <TextField
                        size="small"
                        fullWidth
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#F8FAFC",
                            borderRadius: "10px",
                            fontSize: "0.85rem",
                            "& fieldset": { borderColor: "#CBD5E1" },
                            "&:hover fieldset": { borderColor: "#94A3B8" },
                            "&.Mui-focused fieldset": { borderColor: "#082B50" },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                        Email Address
                      </Typography>
                      <TextField
                        size="small"
                        fullWidth
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#F8FAFC",
                            borderRadius: "10px",
                            fontSize: "0.85rem",
                            "& fieldset": { borderColor: "#CBD5E1" },
                            "&:hover fieldset": { borderColor: "#94A3B8" },
                            "&.Mui-focused fieldset": { borderColor: "#082B50" },
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                        Mandal / Municipality
                      </Typography>
                      <TextField
                        size="small"
                        fullWidth
                        placeholder="e.g. Vizianagaram, Bobbili, Cheepurupalli"
                        value={formData.mandal}
                        onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            bgcolor: "#F8FAFC",
                            borderRadius: "10px",
                            fontSize: "0.85rem",
                            "& fieldset": { borderColor: "#CBD5E1" },
                            "&:hover fieldset": { borderColor: "#94A3B8" },
                            "&.Mui-focused fieldset": { borderColor: "#082B50" },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                      Subject / Scheme Category *
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      required
                      placeholder="e.g. YSR Aasara, DWCRA Bank Linkage, FPO Support, General Query"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#F8FAFC",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          "& fieldset": { borderColor: "#CBD5E1" },
                          "&:hover fieldset": { borderColor: "#94A3B8" },
                          "&.Mui-focused fieldset": { borderColor: "#082B50" },
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.8rem", mb: 0.6 }}>
                      Inquiry / Message Details *
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      required
                      multiline
                      rows={4}
                      placeholder="Please describe your query, village name, SHG group details, or specific information needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "#F8FAFC",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          "& fieldset": { borderColor: "#CBD5E1" },
                          "&:hover fieldset": { borderColor: "#94A3B8" },
                          "&.Mui-focused fieldset": { borderColor: "#082B50" },
                        },
                      }}
                    />
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50" }} />}
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50 !important",
                      fontWeight: 850,
                      fontSize: "0.88rem",
                      py: 1.2,
                      px: 3,
                      borderRadius: "10px",
                      textTransform: "none",
                      boxShadow: "0 4px 14px rgba(245, 184, 0, 0.35)",
                      mt: 1,
                      "&:hover": {
                        bgcolor: "#E0A800",
                      },
                    }}
                  >
                    Submit Official Message
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Right Column: Key Administrative Helplines & PGRS Cards */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Stack spacing={2.5}>
                {/* PGRS Banner */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "18px",
                    bgcolor: "#082B50",
                    color: "#FFFFFF",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid #0c3b6d",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      bgcolor: "rgba(245, 184, 0, 0.15)",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#F5B800",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      mb: 0.5,
                    }}
                  >
                    MEEKOSAM / SPANDANA PGRS
                  </Typography>
                  <Typography sx={{ color: "#FFFFFF", fontWeight: 900, fontSize: "1.2rem", mb: 1 }}>
                    Have a Public Grievance?
                  </Typography>
                  <Typography sx={{ color: "#CBD5E1", fontSize: "0.82rem", lineHeight: 1.5, mb: 2 }}>
                    If you are filing a grievance concerning scheme sanction, pension delay, or land/welfare records, use the official Andhra Pradesh Public Grievance Redressal portal.
                  </Typography>
                  <Button
                    component={Link}
                    href="/pgrs"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50" }} />}
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50 !important",
                      fontWeight: 850,
                      fontSize: "0.8rem",
                      py: 0.9,
                      px: 2.2,
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#E0A800" },
                    }}
                  >
                    Lodge Grievance on PGRS →
                  </Button>
                </Paper>

                {/* Directory Navigation Box */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "18px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 14px rgba(8, 43, 80, 0.04)",
                  }}
                >
                  <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.05rem", mb: 0.8 }}>
                    Need Specific Officer Phone Numbers?
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.5, mb: 2 }}>
                    Our complete District Tele-Directory contains direct mobile numbers and official extensions for:
                  </Typography>
                  <Stack spacing={1} sx={{ mb: 2.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#10B981" }} />
                      <Typography sx={{ fontSize: "0.8rem", color: "#334155", fontWeight: 650 }}>
                        District Collector & Joint Collector
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#10B981" }} />
                      <Typography sx={{ fontSize: "0.8rem", color: "#334155", fontWeight: 650 }}>
                        Project Director & Assistant Project Directors (DRDA)
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#10B981" }} />
                      <Typography sx={{ fontSize: "0.8rem", color: "#334155", fontWeight: 650 }}>
                        All 27 Mandal Parishad Development Officers (MPDOs)
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#10B981" }} />
                      <Typography sx={{ fontSize: "0.8rem", color: "#334155", fontWeight: 650 }}>
                        District Area Hospitals, CHCs, and PHCs
                      </Typography>
                    </Box>
                  </Stack>
                  <Button
                    component={Link}
                    href="/directory"
                    fullWidth
                    variant="outlined"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important" }} />}
                    sx={{
                      borderColor: "#082B50",
                      color: "#082B50",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      py: 1,
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#F8FAFC",
                        borderColor: "#082B50",
                      },
                    }}
                  >
                    Open Staff & Officer Tele-Directory
                  </Button>
                </Paper>

                {/* Office Timings & Working Days */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "#FFFDF5",
                    border: "1px solid #FEF3C7",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <AccessTimeRoundedIcon sx={{ color: "#D97706", fontSize: 22, mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.88rem", mb: 0.3 }}>
                        Official Working Hours
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.4 }}>
                        Monday to Saturday: 10:00 AM – 5:30 PM
                        <br />
                        Public Grievance Day (Spandana): Every Monday 10:00 AM onwards at Collectorate Auditorium.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
