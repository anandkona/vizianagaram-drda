"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Breadcrumbs,
  Chip,
  Rating,
  TextField,
  MenuItem,
  Alert,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const SERVICES_EVALUATION = [
  { id: "shg-linkage", label: "SHG & Stree Nidhi Credit Linkage", icon: GroupsRoundedIcon },
  { id: "pgrs-spandana", label: "Spandana / PGRS Grievance Redressal", icon: SupportAgentRoundedIcon },
  { id: "farmer-rbk", label: "Rythu Bharosa & FPO Agriculture Support", icon: AgricultureRoundedIcon },
  { id: "msme-ofoe", label: "One Family One Entrepreneur (MSME)", icon: BusinessCenterRoundedIcon },
  { id: "youth-skilling", label: "APSSDC / DDU-GKY Youth Skilling", icon: SchoolRoundedIcon },
  { id: "social-pension", label: "NTR Bharosa Social Security Pension", icon: AccountBalanceRoundedIcon },
];

const MANDALS_LIST = [
  "Vizianagaram Urban", "Vizianagaram Rural", "Bobbili", "Cheepurupalli", "Gantyada",
  "Gajapathinagaram", "Nellimarla", "Srungavarapukota (S.Kota)", "Salur", "Kothavalasa",
  "Lakkavarapukota (L.Kota)", "Jami", "Vepada", "Badangi", "Therlam",
  "Dattirajeru", "Mentada", "Bondapalli", "Garividi", "Gurla",
  "Merakamudidam", "Pusapatirega", "Bhogapuram", "Denkada", "Pachipenta",
  "Komarada", "Garugubilli"
];

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(5);
  const [selectedService, setSelectedService] = useState("shg-linkage");
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mandal: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.comment.trim()) return;
    const generatedRef = `VZM-FB-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#FAFAFA", pb: 0 }}>
      {/* 1. MASTER EDITORIAL HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 3.5, sm: 4, md: 4.5 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* Soft Gold Decorative Backdrop Blur Circle */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
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
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            aria-label="Breadcrumb navigation"
            separator="›"
            sx={{
              color: "#64748B",
              fontSize: "0.75rem",
              fontWeight: 650,
              mb: { xs: 1.2, sm: 1.5 },
              "& .MuiBreadcrumbs-separator": { color: "#CBD5E1", mx: 0.6 },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <HomeRoundedIcon sx={{ fontSize: 15, color: "#082B50" }} />
              <Link href="/" style={{ color: "#082B50", textDecoration: "none", fontWeight: 700 }}>
                Home
              </Link>
            </Stack>
            <Link href="/citizen-services" style={{ color: "#64748B", textDecoration: "none" }}>
              Citizen Services
            </Link>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.75rem" }}>
              Citizen Feedback
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Title, Subtitle, Overview */}
            <Grid size={{ xs: 12, md: 7 }}>
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
                DISTRICT PUBLIC SERVICE BENCHMARK & EVALUATION
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.8rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1,
                }}
              >
                Citizen Feedback & Experience
              </Typography>

              {/* Telugu Subtitle */}
              <Typography
                sx={{
                  color: "#B45309",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  fontWeight: 700,
                  fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                  mb: 1.2,
                }}
              >
                ప్రజా సంక్షేమం, సచివాలయ సేవలు మరియు జీవనోపాధి కార్యక్రమాలపై మీ విలువైన అభిప్రాయం
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Your feedback directly empowers the Vizianagaram District Administration, DRDA Quality Cell, and Mandal Samakhyas to refine service delivery, reduce turnaround times, and uphold citizen charter standards across all 27 Mandals.
              </Typography>

              {/* Key Indicators Strip */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ gap: 1 }}>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: "#DCFCE7", px: 1.5, py: 0.6, borderRadius: 2, border: "1px solid #86EFAC" }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#16A34A" }} />
                  <Typography sx={{ fontSize: "0.74rem", fontWeight: 750, color: "#14532D" }}>
                    Monthly Satisfaction: 96.4%
                  </Typography>
                </Box>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: "#EFF6FF", px: 1.5, py: 0.6, borderRadius: 2, border: "1px solid #BFDBFE" }}>
                  <Typography sx={{ fontSize: "0.74rem", fontWeight: 750, color: "#1E40AF" }}>
                    Verified Responses: 3,420+
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            {/* Right Column: Hero High-Resolution Photography with Floating Feedback Badge */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, sm: 240, md: 270 },
                  borderRadius: { xs: "18px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 34px -8px rgba(8, 43, 80, 0.16)",
                  border: "3px solid #FFFFFF",
                  bgcolor: "#FEF9C3",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px -6px rgba(8, 43, 80, 0.22)",
                    "& .hero-photo": { transform: "scale(1.03)" },
                  },
                }}
              >
                <Image
                  src="/images/drda-women-shg.jpg"
                  alt="Vizianagaram Citizen Feedback & Social Audit Session"
                  fill
                  className="hero-photo"
                  priority
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Subtle gradient vignette at bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(8, 43, 80, 0.05) 0%, rgba(8, 43, 80, 0.75) 100%)",
                  }}
                />

                {/* Floating Official Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    right: 12,
                    bgcolor: "rgba(8, 43, 80, 0.92)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    px: 1.5,
                    py: 0.8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <RateReviewRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        DRDA Citizen Satisfaction Desk
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        48-Hour Review SLA • 27 Mandals Monitored
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="4.8★ Rated"
                    size="small"
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50",
                      fontWeight: 800,
                      fontSize: "0.65rem",
                      height: 20,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. THREE COMPACT SATISFACTION BENCHMARK METRICS */}
      <Box sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", py: { xs: 2.5, sm: 3 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={2}>
            {[
              {
                label: "Overall Citizen Rating",
                value: "4.8 / 5.0",
                subtext: "Based on 3,420 verified submissions across 27 mandals",
                icon: <StarRoundedIcon sx={{ fontSize: 20, color: "#D97706" }} />,
                accent: "#D97706",
                bg: "#FEF3C7",
              },
              {
                label: "Follow-up & Review SLA",
                value: "98.2%",
                subtext: "Feedback reviewed by Project Director cell within 48 hours",
                icon: <VerifiedUserRoundedIcon sx={{ fontSize: 20, color: "#16A34A" }} />,
                accent: "#16A34A",
                bg: "#DCFCE7",
              },
              {
                label: "Public Recommendation",
                value: "96.4%",
                subtext: "Citizens rating village Sachivalayam delivery prompt & helpful",
                icon: <ThumbUpRoundedIcon sx={{ fontSize: 20, color: "#2563EB" }} />,
                accent: "#2563EB",
                bg: "#EFF6FF",
              },
            ].map((metric, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderTop: `3px solid ${metric.accent}`,
                    borderRadius: 2,
                    p: 1.75,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.75,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#FFFFFF",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 18px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#CBD5E1",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 1.75,
                      bgcolor: metric.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {metric.icon}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontSize: "0.68rem", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {metric.label}
                    </Typography>
                    <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#082B50", lineHeight: 1.15, my: 0.2 }}>
                      {metric.value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.35, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {metric.subtext}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. MAIN INTERACTIVE FEEDBACK FORM & SIDEBAR */}
      <Box sx={{ py: { xs: 3.5, sm: 4, md: 5 }, bgcolor: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3.5} alignItems="flex-start">
            
            {/* Left Column: Form Card */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 3,
                  p: { xs: 2.5, sm: 3.5 },
                  boxShadow: "0 10px 30px -8px rgba(8, 43, 80, 0.07)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Header Banner Strip */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #D97706 0%, #F5B800 50%, #082B50 100%)",
                  }}
                />

                <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 1, mt: 0.5 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      bgcolor: "rgba(217, 119, 6, 0.1)",
                      color: "#D97706",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RateReviewRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.1 }}>
                      CITIZEN EXPERIENCE SUBMISSION
                    </Typography>
                    <Typography sx={{ color: "#082B50", fontSize: { xs: "1.2rem", sm: "1.45rem" }, fontWeight: 900, lineHeight: 1.2 }}>
                      Submit Your Observations & Feedback
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: "#64748B", fontSize: "0.8rem", lineHeight: 1.55, mb: 2.75 }}>
                  Help us evaluate our schemes, field staff behavior, and village secretariat promptness. Your feedback is registered with the DRDA Quality Monitoring Cell.
                </Typography>

                {submitted ? (
                  <Box
                    sx={{
                      bgcolor: "#DCFCE7",
                      border: "1.5px solid #86EFAC",
                      borderRadius: 2,
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon sx={{ fontSize: 44, color: "#16A34A", mb: 1 }} />
                    <Typography sx={{ color: "#14532D", fontSize: "1.1rem", fontWeight: 900, mb: 0.5 }}>
                      Thank You! Feedback Submitted Successfully.
                    </Typography>
                    <Typography sx={{ color: "#166534", fontSize: "0.82rem", mb: 1.5 }}>
                      Your comments have been registered under acknowledgement reference:
                    </Typography>

                    <Box
                      sx={{
                        display: "inline-block",
                        bgcolor: "#FFFFFF",
                        border: "1px dashed #16A34A",
                        borderRadius: 2,
                        px: 2.5,
                        py: 0.8,
                        mb: 2,
                      }}
                    >
                      <Typography sx={{ color: "#082B50", fontSize: "1.15rem", fontWeight: 900, letterSpacing: "0.05em" }}>
                        {refId}
                      </Typography>
                    </Box>

                    <Typography sx={{ color: "#14532D", fontSize: "0.76rem", mb: 2.5 }}>
                      Our district monitoring team reviews citizen comments weekly to update operational guidelines.
                    </Typography>

                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", mandal: "", comment: "" });
                      }}
                      size="small"
                      sx={{
                        bgcolor: "#15803D",
                        color: "#FFFFFF !important",
                        fontWeight: 750,
                        fontSize: "0.76rem",
                        textTransform: "none",
                        px: 2,
                        py: 0.7,
                        borderRadius: 1.75,
                        "&:hover": { bgcolor: "#166534" },
                      }}
                    >
                      Submit Another Response
                    </Button>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={2.5}>
                      {/* Rating Box */}
                      <Box
                        sx={{
                          bgcolor: "#FFFDF5",
                          border: "1.5px solid #FDE68A",
                          borderRadius: 2,
                          p: 1.75,
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: { xs: "flex-start", sm: "center" },
                          justifyContent: "space-between",
                          gap: 1.25,
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 800, color: "#1F1700", fontSize: "0.88rem" }}>
                            Overall Service Experience <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#92400E", mt: 0.25 }}>
                            Rate officer responsiveness, clarity, and time taken
                          </Typography>
                        </Box>

                        <Stack direction="row" spacing={1} alignItems="center">
                          <Rating
                            value={rating}
                            onChange={(e, val) => setRating(val)}
                            size="medium"
                            sx={{ color: "#F59E0B" }}
                          />
                          <Typography sx={{ fontWeight: 850, color: "#B45309", fontSize: "0.95rem", minWidth: 32 }}>
                            {rating}/5
                          </Typography>
                        </Stack>
                      </Box>

                      {/* Service Category Buttons */}
                      <Box>
                        <Typography sx={{ color: "#082B50", fontSize: "0.76rem", fontWeight: 750, mb: 1 }}>
                          Select Government Service / Scheme Interacted With <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                        </Typography>
                        <Grid container spacing={1}>
                          {SERVICES_EVALUATION.map((svc) => {
                            const Icon = svc.icon;
                            const isSelected = selectedService === svc.id;
                            return (
                              <Grid size={{ xs: 12, sm: 6 }} key={svc.id}>
                                <Button
                                  fullWidth
                                  onClick={() => setSelectedService(svc.id)}
                                  startIcon={<Icon sx={{ fontSize: 16 }} />}
                                  sx={{
                                    justifyContent: "flex-start",
                                    textAlign: "left",
                                    py: 0.85,
                                    px: 1.5,
                                    borderRadius: 1.75,
                                    textTransform: "none",
                                    fontWeight: 700,
                                    fontSize: "0.76rem",
                                    bgcolor: isSelected ? "#082B50" : "#F8FAFC",
                                    color: isSelected ? "#FFFFFF !important" : "#334155",
                                    border: "1px solid",
                                    borderColor: isSelected ? "#082B50" : "#E2E8F0",
                                    "&:hover": {
                                      bgcolor: isSelected ? "#06203D" : "#FEF3C7",
                                      borderColor: isSelected ? "#06203D" : "#FDE68A",
                                    },
                                  }}
                                >
                                  {svc.label}
                                </Button>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>

                      {/* Petitioner Particulars */}
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.5 }}>
                            Your Name (Optional)
                          </Typography>
                          <TextField
                            fullWidth
                            size="small"
                            placeholder="Sri / Smt."
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                bgcolor: "#F8FAFC",
                                borderRadius: 1.75,
                                fontSize: "0.82rem",
                                "&:hover fieldset": { borderColor: "#082B50" },
                                "&.Mui-focused fieldset": { borderColor: "#082B50" },
                              },
                            }}
                          />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.5 }}>
                            Mobile Number (Optional)
                          </Typography>
                          <TextField
                            fullWidth
                            size="small"
                            placeholder="10-digit phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                bgcolor: "#F8FAFC",
                                borderRadius: 1.75,
                                fontSize: "0.82rem",
                                "&:hover fieldset": { borderColor: "#082B50" },
                                "&.Mui-focused fieldset": { borderColor: "#082B50" },
                              },
                            }}
                          />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.5 }}>
                            Your Mandal
                          </Typography>
                          <TextField
                            select
                            fullWidth
                            size="small"
                            value={formData.mandal}
                            onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                bgcolor: "#F8FAFC",
                                borderRadius: 1.75,
                                fontSize: "0.82rem",
                                "&:hover fieldset": { borderColor: "#082B50" },
                                "&.Mui-focused fieldset": { borderColor: "#082B50" },
                              },
                            }}
                          >
                            <MenuItem value="" disabled>Select your Mandal</MenuItem>
                            {MANDALS_LIST.map((m) => (
                              <MenuItem key={m} value={m} sx={{ fontSize: "0.8rem" }}>{m}</MenuItem>
                            ))}
                          </TextField>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.5 }}>
                            Your Observations, Suggestions or Concerns <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                          </Typography>
                          <TextField
                            fullWidth
                            multiline
                            rows={3.5}
                            required
                            placeholder="Please share what worked well or what can be improved regarding the scheme, staff assistance, or process..."
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                bgcolor: "#F8FAFC",
                                borderRadius: 1.75,
                                fontSize: "0.82rem",
                                "&:hover fieldset": { borderColor: "#082B50" },
                                "&.Mui-focused fieldset": { borderColor: "#082B50" },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>

                      {/* Action Submission */}
                      <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center" justifyContent="space-between">
                          <Typography sx={{ color: "#64748B", fontSize: "0.72rem" }}>
                            ✓ Anonymity respected • Monitored for citizen charter compliance
                          </Typography>

                          <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendRoundedIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              bgcolor: "#082B50",
                              color: "#FFFFFF !important",
                              fontWeight: 750,
                              fontSize: "0.82rem",
                              py: 0.85,
                              px: 3.5,
                              borderRadius: 2,
                              textTransform: "none",
                              boxShadow: "0 4px 12px rgba(8, 43, 80, 0.2)",
                              "&:hover": { bgcolor: "#06203D" },
                            }}
                          >
                            Submit Feedback
                          </Button>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                )}
              </Paper>
            </Grid>

            {/* Right Column: Support & Official Desks */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Stack spacing={2}>
                {/* Official Grievance Advisory Card */}
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: 2.5,
                    p: 2.25,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #D97706 0%, #082B50 100%)",
                    }}
                  />
                  <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1, mt: 0.25 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: 1.5,
                        bgcolor: "#FEF3C7",
                        color: "#B45309",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SupportAgentRoundedIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontSize: "0.95rem", fontWeight: 850 }}>
                        Need a Formal Grievance?
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 600 }}>
                        Spandana Public Grievance Desk
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography sx={{ color: "#475569", fontSize: "0.74rem", lineHeight: 1.5, mb: 1.75 }}>
                    If you are experiencing delayed payments, pending certificate issuance, or officer non-compliance, file an official petition on the PGRS portal with a statutory 7–15 day SLA.
                  </Typography>
                  <Button
                    component={Link}
                    href="/pgrs"
                    size="small"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.72rem",
                      py: 0.6,
                      px: 2,
                      borderRadius: 1.75,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Open Grievance Desk (PGRS)
                  </Button>
                </Paper>

                {/* Direct Telephone Helpline Card */}
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FEF3C7",
                    border: "1px solid #FDE68A",
                    borderRadius: 2.5,
                    p: 2.25,
                  }}
                >
                  <Typography sx={{ color: "#92400E", fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.25 }}>
                    DIRECT TELEPHONE HELPLINE
                  </Typography>
                  <Typography sx={{ color: "#1F1700", fontSize: "1.15rem", fontWeight: 900, mb: 0.5 }}>
                    1902 Toll-Free
                  </Typography>
                  <Typography sx={{ color: "#78350F", fontSize: "0.74rem", lineHeight: 1.45, mb: 1.5 }}>
                    Available 24/7 across Andhra Pradesh for scheme queries, status tracking, and operator assistance.
                  </Typography>
                  <Button
                    component="a"
                    href="tel:1902"
                    fullWidth
                    size="small"
                    startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#D97706",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.74rem",
                      py: 0.6,
                      borderRadius: 1.75,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#B45309" },
                    }}
                  >
                    Dial 1902 Now
                  </Button>
                </Paper>

                {/* Quality Commitment Card */}
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 2.5,
                    p: 2.25,
                  }}
                >
                  <Typography sx={{ color: "#082B50", fontSize: "0.88rem", fontWeight: 850, mb: 1 }}>
                    Citizen Charter Commitment
                  </Typography>
                  <Stack spacing={0.8}>
                    {[
                      "100% of feedbacks logged with acknowledgment ID",
                      "Weekly review presided by District Collectorate Cell",
                      "Direct feedback loop with 27 Mandal Samakhyas",
                      "Strict zero-tolerance on unauthorized fees"
                    ].map((item, idx) => (
                      <Stack direction="row" spacing={1} alignItems="flex-start" key={idx}>
                        <CheckCircleRoundedIcon sx={{ fontSize: 14, color: "#16A34A", mt: 0.2, flexShrink: 0 }} />
                        <Typography sx={{ color: "#475569", fontSize: "0.72rem", lineHeight: 1.4 }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
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
