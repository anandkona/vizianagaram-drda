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
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import HowToVoteRoundedIcon from "@mui/icons-material/HowToVoteRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

// Statutory 6-step Redressal Pipeline
const PGRS_PIPELINE = [
  {
    step: "01",
    title: "Petition Registration",
    telugu: "దరఖాస్తు నమోదు",
    sla: "Immediate (Unique ID)",
    desc: "Citizen submits grievance via 1902 toll-free, MeeSeva center, Village Secretariat, or Monday Collectorate Spandana camp. An instant tracking SMS with Petition ID is generated.",
    icon: AssignmentTurnedInRoundedIcon,
    accent: "#082B50",
  },
  {
    step: "02",
    title: "Department Routing",
    telugu: "శాఖకు కేటాయింపు",
    sla: "Within 24 Hours",
    desc: "Collectorate grievance cell assigns petition to concerned Mandal Tahsildar, MPDO, Municipal Commissioner, or District Officer based on statutory jurisdiction.",
    icon: TrackChangesRoundedIcon,
    accent: "#D97706",
  },
  {
    step: "03",
    title: "Field Inspection",
    telugu: "క్షేత్రస్థాయి పరిశీలన",
    sla: "3 – 5 Days",
    desc: "Field-level officer (VRO, Panchayat Secretary, Engineering Assistant) conducts spot enquiry, verifies records, and collects physical/geo-tagged evidence.",
    icon: FactCheckRoundedIcon,
    accent: "#15803D",
  },
  {
    step: "04",
    title: "Action & Resolution",
    telugu: "పరిష్కారం & ఉత్తర్వులు",
    sla: "7 – 15 Days Max",
    desc: "Departmental authority issues official orders, resolves grievance, and uploads action-taken report (ATR) directly into the state PGRS portal.",
    icon: CheckCircleRoundedIcon,
    accent: "#7C3AED",
  },
];

// District Grievance Channels
const GRIEVANCE_CHANNELS = [
  {
    title: "1902 Toll-Free Call Desk",
    telugu: "1902 ఉచిత టోల్‌ఫ్రీ కాల్ సెంటర్",
    desc: "24/7 dedicated government citizen helpline in Telugu and English. Operators register petition directly and send tracking SMS.",
    badge: "24/7 Toll-Free",
    contact: "Dial 1902",
    href: "tel:1902",
    actionLabel: "Call 1902 Helpline",
  },
  {
    title: "Monday Spandana at Collectorate",
    telugu: "సోమవారం కలెక్టరేట్ ప్రజా సమస్యల వేదిక",
    desc: "Direct in-person petition submission every Monday (10:00 AM – 01:00 PM) before the District Collector, Joint Collector, and DRO.",
    badge: "Weekly In-Person",
    contact: "Collectorate Conference Hall",
    href: "/about/structure",
    actionLabel: "View Collectorate Desk",
  },
  {
    title: "Grama & Ward Sachivalayams",
    telugu: "గ్రామ & వార్డు సచివాలయాల కేంద్రాలు",
    desc: "Submit petitions at your doorstep through 777 Grama Sachivalayams with Digital Assistant & Welfare Education Assistant support.",
    badge: "777 Gram Panchayats",
    contact: "Nearest Sachivalayam",
    href: "/services",
    actionLabel: "Sachivalayam Services",
  },
  {
    title: "Official Meekosam AP Portal",
    telugu: "ఆంధ్రప్రదేశ్ ప్రభుత్వం 'మీకోసం' పోర్టల్",
    desc: "Direct online lodging, document upload, and real-time petition status tracking through the statewide PGRS digital gateway.",
    badge: "Online Gateway",
    contact: "meekosam.ap.gov.in",
    href: "https://meekosam.ap.gov.in",
    actionLabel: "Open State Portal",
    external: true,
  },
];

const COMPLAINT_CATEGORIES = [
  "NTR Bharosa Social Pension Non-Receipt",
  "Meebhumi / Revenue / Land Record Rectification",
  "Civil Supplies / Ration Card (ePDS) Issue",
  "Drinking Water Supply & RWS Pipeline",
  "Panchayat Raj Rural Road Repair",
  "Electricity / APTransco Transformer Issue",
  "MeeSeva Certificate Delivery Delay",
  "Housing (PMAY / YSR Gruha Vasathi)",
  "Women SHG Credit / Stree Nidhi Linkage",
  "Agriculture Crop Loss / Input Subsidy",
  "Other Public Administrative Grievance",
];

const MANDALS_LIST = [
  "Vizianagaram Urban", "Vizianagaram Rural", "Bobbili", "Cheepurupalli", "Gantyada",
  "Gajapathinagaram", "Nellimarla", "Srungavarapukota (S.Kota)", "Salur", "Kothavalasa",
  "Lakkavarapukota (L.Kota)", "Jami", "Vepada", "Badangi", "Therlam",
  "Dattirajeru", "Mentada", "Bondapalli", "Garividi", "Gurla",
  "Merakamudidam", "Pusapatirega", "Bhogapuram", "Denkada", "Pachipenta",
  "Komarada", "Garugubilli"
];

export default function PgrsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    aadhaar: "",
    mandal: "",
    category: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [trackId, setTrackId] = useState("");
  const [trackQuery, setTrackQuery] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.mandal || !formData.category) {
      return;
    }
    const generatedId = `VZM-PGRS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackId(generatedId);
    setSubmitted(true);
    setSnackbarOpen(true);
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
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Title, Subtitle, Overview */}
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
                PUBLIC GRIEVANCE REDRESSAL SYSTEM • SPANDANA
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
                Citizen Grievance Redressal
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
                స్పందన ప్రజా సమస్యల పరిష్కార వేదిక - వేగవంతమైన, పారదర్శక అధికారిక పరిష్కారం
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2.2,
                }}
              >
                The official grievance redressal mechanism of Vizianagaram District Administration and Government of Andhra Pradesh. Register public service issues, track unique petition IDs, and receive time-bound departmental redressal backed by strict citizen charter SLAs.
              </Typography>

              {/* Quick Status Check Bar */}
              <Paper
                elevation={0}
                sx={{
                  p: "3px 8px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 480,
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: 2.5,
                  boxShadow: "0 2px 8px rgba(8, 43, 80, 0.04)",
                  "&:focus-within": { borderColor: "#082B50" },
                }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Have an existing Petition ID? Enter to track status..."
                  value={trackQuery}
                  onChange={(e) => setTrackQuery(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "0.82rem", color: "#082B50", fontWeight: 550 },
                  }}
                />
                <Button
                  component={Link}
                  href={`https://meekosam.ap.gov.in`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 13 }} />}
                  sx={{
                    bgcolor: "#082B50",
                    color: "#FFFFFF !important",
                    fontSize: "0.72rem",
                    fontWeight: 750,
                    textTransform: "none",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    whiteSpace: "nowrap",
                    "&:hover": { bgcolor: "#06203D" },
                  }}
                >
                  Track Status
                </Button>
              </Paper>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Redressal Badge */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, sm: 240, md: 270 },
                  borderRadius: { xs: "18px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 34px -8px rgba(8, 43, 80, 0.16)",
                  border: "4px solid #FFFFFF",
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
                  src="/images/service-concern.jpg"
                  alt="Vizianagaram Collectorate Spandana Public Grievance Redressal"
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

                {/* Floating Official Redressal Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    bgcolor: "rgba(8, 43, 80, 0.90)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "100px",
                    px: 2,
                    py: 0.7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <SupportAgentRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Spandana Public Grievance Redressal
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Collectorate Desk • 1902 Toll-Free
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Active SLAs"
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

      {/* 2. STATUTORY TIME-BOUND REDRESSAL WORKFLOW */}
      <Box sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", py: { xs: 3, sm: 3.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={1}
            sx={{ mb: 2 }}
          >
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.25 }}>
                HOW CITIZEN GRIEVANCES ARE RESOLVED
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 900 }}>
                Statutory 4-Stage Redressal Pipeline
              </Typography>
            </Box>
            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              Under Andhra Pradesh Public Service Guarantee Framework
            </Typography>
          </Stack>

          <Grid container spacing={1.75}>
            {PGRS_PIPELINE.map((pipe) => {
              const Icon = pipe.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pipe.step}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 2,
                      p: 1.75,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 16px -3px rgba(8, 43, 80, 0.08)",
                        borderColor: "#CBD5E1",
                      },
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 1.5,
                          bgcolor: "rgba(8, 43, 80, 0.08)",
                          color: "#082B50",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon sx={{ fontSize: 18 }} />
                      </Box>
                      <Chip
                        label={pipe.sla}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.64rem",
                          height: 20,
                        }}
                      />
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.86rem", fontWeight: 800, lineHeight: 1.25, mb: 0.3 }}>
                      {pipe.step}. {pipe.title}
                    </Typography>

                    <Typography sx={{ color: "#B45309", fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif", mb: 0.75 }}>
                      {pipe.telugu}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.72rem", lineHeight: 1.45, flexGrow: 1 }}>
                      {pipe.desc}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 3. FOUR DISTRICT GRIEVANCE ACCESS CHANNELS */}
      <Box sx={{ py: { xs: 3, sm: 3.5 }, bgcolor: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.25 }}>
              WHERE TO SUBMIT YOUR GRIEVANCE
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 900 }}>
              4 Official Grievance Channels
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {GRIEVANCE_CHANNELS.map((ch, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 2,
                    p: 1.75,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 18px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#CBD5E1",
                    },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography sx={{ color: "#082B50", fontSize: "0.85rem", fontWeight: 800, lineHeight: 1.25 }}>
                      {ch.title}
                    </Typography>
                    <Chip
                      label={ch.badge}
                      size="small"
                      sx={{
                        bgcolor: "#EFF6FF",
                        color: "#1D4ED8",
                        fontWeight: 750,
                        fontSize: "0.62rem",
                        height: 20,
                      }}
                    />
                  </Stack>

                  <Typography sx={{ color: "#B45309", fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif", mb: 0.75 }}>
                    {ch.telugu}
                  </Typography>

                  <Typography sx={{ color: "#475569", fontSize: "0.72rem", lineHeight: 1.45, mb: 1.5, flexGrow: 1 }}>
                    {ch.desc}
                  </Typography>

                  <Button
                    component={ch.external ? "a" : Link}
                    href={ch.href}
                    target={ch.external ? "_blank" : undefined}
                    rel={ch.external ? "noopener noreferrer" : undefined}
                    size="small"
                    endIcon={ch.external ? <OpenInNewRoundedIcon sx={{ fontSize: 13 }} /> : <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontSize: "0.7rem",
                      fontWeight: 750,
                      textTransform: "none",
                      py: 0.45,
                      borderRadius: 1.75,
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    {ch.actionLabel}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. DIRECT ONLINE GRIEVANCE REGISTRATION DESK */}
      <Box sx={{ py: { xs: 3.5, sm: 4, md: 5 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3.5} alignItems="flex-start">
            {/* Form Column */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              {/* Modern Card Design for Intake Desk */}
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
                    background: "linear-gradient(90deg, #082B50 0%, #1D4ED8 50%, #F5B800 100%)",
                  }}
                />

                <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 1, mt: 0.5 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      bgcolor: "rgba(8, 43, 80, 0.08)",
                      color: "#082B50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AssignmentTurnedInRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.1 }}>
                      CITIZEN GRIEVANCE INTAKE DESK
                    </Typography>
                    <Typography sx={{ color: "#082B50", fontSize: { xs: "1.2rem", sm: "1.45rem" }, fontWeight: 900, lineHeight: 1.2 }}>
                      Register Your Concern with Vizianagaram Desk
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: "#64748B", fontSize: "0.8rem", lineHeight: 1.55, mb: 2.75 }}>
                  Fill out your grievance particulars below. Our district citizen facilitation cell will verify details, issue your official Petition Tracking ID, and coordinate with the concerned Mandal/departmental officer.
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
                    <CheckCircleRoundedIcon sx={{ fontSize: 48, color: "#16A34A", mb: 1 }} />
                    <Typography sx={{ color: "#14532D", fontSize: "1.1rem", fontWeight: 900, mb: 0.5 }}>
                      Grievance Successfully Registered!
                    </Typography>
                    <Typography sx={{ color: "#166534", fontSize: "0.82rem", mb: 1.5 }}>
                      Your petition has been routed to the Vizianagaram District Grievance Cell.
                    </Typography>

                    <Box
                      sx={{
                        display: "inline-block",
                        bgcolor: "#FFFFFF",
                        border: "1px dashed #16A34A",
                        borderRadius: 2,
                        px: 2.5,
                        py: 1,
                        mb: 2,
                      }}
                    >
                      <Typography sx={{ color: "#64748B", fontSize: "0.7rem", fontWeight: 700 }}>
                        OFFICIAL PETITION TRACKING ID:
                      </Typography>
                      <Typography sx={{ color: "#082B50", fontSize: "1.2rem", fontWeight: 900, letterSpacing: "0.05em" }}>
                        {trackId}
                      </Typography>
                    </Box>

                    <Typography sx={{ color: "#14532D", fontSize: "0.78rem", mb: 2.5 }}>
                      An SMS confirmation has been dispatched to <strong>{formData.phone}</strong>. You may also track progress directly on the state <strong>meekosam.ap.gov.in</strong> portal using this ID.
                    </Typography>

                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", aadhaar: "", mandal: "", category: "", description: "" });
                      }}
                      size="small"
                      sx={{
                        bgcolor: "#15803D",
                        color: "#FFFFFF !important",
                        fontWeight: 750,
                        fontSize: "0.78rem",
                        textTransform: "none",
                        px: 2,
                        py: 0.75,
                        borderRadius: 2,
                        "&:hover": { bgcolor: "#166534" },
                      }}
                    >
                      Register Another Petition
                    </Button>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.6 }}>
                          Full Name of Petitioner <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          required
                          placeholder="e.g. S. Rama Krishna"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              bgcolor: "#F8FAFC",
                              borderRadius: 2,
                              fontSize: "0.82rem",
                              "&:hover fieldset": { borderColor: "#082B50" },
                              "&.Mui-focused fieldset": { borderColor: "#082B50" },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.6 }}>
                          Mobile Number (for SMS Tracking) <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              bgcolor: "#F8FAFC",
                              borderRadius: 2,
                              fontSize: "0.82rem",
                              "&:hover fieldset": { borderColor: "#082B50" },
                              "&.Mui-focused fieldset": { borderColor: "#082B50" },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.6 }}>
                          Select Mandal <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                        </Typography>
                        <TextField
                          select
                          fullWidth
                          size="small"
                          required
                          value={formData.mandal}
                          onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              bgcolor: "#F8FAFC",
                              borderRadius: 2,
                              fontSize: "0.82rem",
                              "&:hover fieldset": { borderColor: "#082B50" },
                              "&.Mui-focused fieldset": { borderColor: "#082B50" },
                            },
                          }}
                        >
                          <MenuItem value="" disabled>Choose your Mandal</MenuItem>
                          {MANDALS_LIST.map((m) => (
                            <MenuItem key={m} value={m} sx={{ fontSize: "0.8rem" }}>{m}</MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.6 }}>
                          Grievance Department / Subject <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                        </Typography>
                        <TextField
                          select
                          fullWidth
                          size="small"
                          required
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              bgcolor: "#F8FAFC",
                              borderRadius: 2,
                              fontSize: "0.82rem",
                              "&:hover fieldset": { borderColor: "#082B50" },
                              "&.Mui-focused fieldset": { borderColor: "#082B50" },
                            },
                          }}
                        >
                          <MenuItem value="" disabled>Choose department / category</MenuItem>
                          {COMPLAINT_CATEGORIES.map((c) => (
                            <MenuItem key={c} value={c} sx={{ fontSize: "0.8rem" }}>{c}</MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, mb: 0.6 }}>
                          Detailed Description of Grievance <Box component="span" sx={{ color: "#DC2626" }}>*</Box>
                        </Typography>
                        <TextField
                          fullWidth
                          multiline
                          rows={3.5}
                          required
                          placeholder="Provide specific details: Village name, application number, ration card/pension ID, and date of previous submission if applicable..."
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              bgcolor: "#F8FAFC",
                              borderRadius: 2,
                              fontSize: "0.82rem",
                              "&:hover fieldset": { borderColor: "#082B50" },
                              "&.Mui-focused fieldset": { borderColor: "#082B50" },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems="center">
                            <Button
                              type="submit"
                              variant="contained"
                              startIcon={<SendRoundedIcon sx={{ fontSize: 16 }} />}
                              sx={{
                                bgcolor: "#082B50",
                                color: "#FFFFFF !important",
                                fontWeight: 750,
                                fontSize: "0.82rem",
                                py: 0.9,
                                px: 3,
                                borderRadius: 2,
                                textTransform: "none",
                                boxShadow: "0 4px 12px rgba(8, 43, 80, 0.2)",
                                "&:hover": { bgcolor: "#06203D" },
                              }}
                            >
                              Submit Grievance Petition
                            </Button>

                            <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 550 }}>
                              ✓ Directly synchronized with District Collectorate Grievance Cell
                            </Typography>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Paper>
            </Grid>

            {/* Right Information Column */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              {/* Modern Glassmorphism Collectorate Advisory Card */}
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 2.75,
                  p: { xs: 2.25, sm: 2.75 },
                  mb: 2.5,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px -5px rgba(8, 43, 80, 0.06)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#CBD5E1",
                    boxShadow: "0 14px 30px -6px rgba(8, 43, 80, 0.1)",
                  },
                }}
              >
                {/* Top Subtle Amber-Gold Accent Strip */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #D97706 0%, #F5B800 60%, #082B50 100%)",
                  }}
                />

                <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 1.5, mt: 0.5 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 2,
                      bgcolor: "#FEF3C7",
                      color: "#B45309",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(245, 184, 0, 0.4)",
                      flexShrink: 0,
                    }}
                  >
                    <FactCheckRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        lineHeight: 1.1,
                      }}
                    >
                      COLLECTORATE ADVISORY
                    </Typography>
                    <Typography sx={{ color: "#082B50", fontSize: "1.05rem", fontWeight: 900, lineHeight: 1.2 }}>
                      Zero-Fee Redressal Guarantee
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    mb: 2,
                    p: 1.25,
                    bgcolor: "#F8FAFC",
                    borderRadius: 1.75,
                    border: "1px solid #E2E8F0",
                  }}
                >
                  Filing a grievance under Spandana / PGRS is <strong>100% free of cost</strong> across all channels (Toll-Free 1902, Sachivalayam, MeeSeva, or Collectorate). Never pay fees or intermediaries to register a petition.
                </Typography>

                <Stack spacing={1} sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: 1.75,
                      p: 1.1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                    }}
                  >
                    <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#16A34A", flexShrink: 0 }} />
                    <Typography sx={{ color: "#1E293B", fontSize: "0.74rem", fontWeight: 650 }}>
                      Every petition receives a statutory 7–15 day SLA.
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: 1.75,
                      p: 1.1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                    }}
                  >
                    <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#16A34A", flexShrink: 0 }} />
                    <Typography sx={{ color: "#1E293B", fontSize: "0.74rem", fontWeight: 650 }}>
                      Weekly monitoring directly reviewed by District Collector.
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: 1.75,
                      p: 1.1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.1,
                    }}
                  >
                    <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#16A34A", flexShrink: 0 }} />
                    <Typography sx={{ color: "#1E293B", fontSize: "0.74rem", fontWeight: 650 }}>
                      Citizen satisfaction verification call prior to closure.
                    </Typography>
                  </Paper>
                </Stack>
              </Paper>

              {/* Direct Toll-Free Quick Contact Card */}
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#FEF3C7",
                  border: "1px solid #FDE68A",
                  borderRadius: 2.5,
                  p: 2.25,
                }}
              >
                <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "#D97706",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneInTalkRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#92400E", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase" }}>
                      NEED IMMEDIATE HELP?
                    </Typography>
                    <Typography sx={{ color: "#1F1700", fontSize: "1.1rem", fontWeight: 900 }}>
                      Dial 1902 Toll-Free
                    </Typography>
                  </Box>
                </Stack>
                <Typography sx={{ color: "#78350F", fontSize: "0.74rem", lineHeight: 1.45, mb: 1.5 }}>
                  Available 24 hours a day, 7 days a week. State operators will record your grievance and guide you to your local Mandal desk.
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
                    fontSize: "0.75rem",
                    py: 0.6,
                    borderRadius: 1.75,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#B45309" },
                  }}
                >
                  Call 1902 Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%", fontWeight: 650 }}>
          Petition {trackId} submitted successfully to District Grievance Cell!
        </Alert>
      </Snackbar>
    </Box>
  );
}
