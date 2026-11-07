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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import DialpadRoundedIcon from "@mui/icons-material/DialpadRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";

// IVRS Dialpad Key Flow
const IVRS_KEY_OPTIONS = [
  {
    key: "1",
    label: "Welfare Schemes & Direct Benefits",
    telugu: "సంక్షేమ పథకాలు & లబ్ధి సమాచారం",
    dept: "SERP / Panchayat Raj / Civil Supplies",
    desc: "Information regarding NTR Bharosa social pensions, Deepam 2.0 cooking gas subsidy, Rice card eligibility, and farmer crop insurance.",
    action: "Instant Voice Prompt + SMS Summary",
  },
  {
    key: "2",
    label: "Grievance Registration (Spandana)",
    telugu: "ప్రజా సమస్యల ఫిర్యాదు నమోదు",
    dept: "District Collectorate Grievance Desk",
    desc: "Connect directly to a live call operator to lodge administrative, revenue, drinking water, or civic complaints and generate a unique tracking ID.",
    action: "Live Executive Hand-off (24/7)",
  },
  {
    key: "3",
    label: "Petition & Application Status Tracking",
    telugu: "దరఖాస్తు & పిటిషన్ ప్రస్తుత స్థితి",
    dept: "State Grievance Monitoring System",
    desc: "Enter your 10-digit mobile number or petition reference number using your phone keypad to listen to live resolution updates and departmental remarks.",
    action: "Automated IVR Status Readout",
  },
  {
    key: "4",
    label: "MeeSeva & Sachivalayam Services",
    telugu: "మీసేవ & గ్రామ సచివాలయాల సేవలు",
    dept: "GSWS Citizen Service Delivery Cell",
    desc: "Guidelines for Integrated Caste, Income, Residence, Birth & Death certificates, and local Village Secretariat operating timings across 777 GPs.",
    action: "SMS Service Checklist Dispatched",
  },
  {
    key: "5",
    label: "SHG Loans, Stree Nidhi & Sunna Vaddi",
    telugu: "మహిళా సంఘాల రుణాలు & సున్నా వడ్డీ",
    dept: "DRDA Livelihoods & Financial Inclusion",
    desc: "Check group bank linkage status, quarterly interest reimbursement (Sunna Vaddi) credit records, and emergency micro-finance from Stree Nidhi.",
    action: "VO Coordinator Assistance",
  },
  {
    key: "6",
    label: "Farmer Support & Rythu Bharosa Kendras",
    telugu: "రైతు భరోసా & పంట ఉత్పత్తుల మద్దతు",
    dept: "Agriculture & Horticulture Department",
    desc: "Soil testing records, seed distribution schedules, e-Crop booking confirmation, and Minimum Support Price (MSP) procurement centers.",
    action: "Mandal Agri Officer Routing",
  },
];

// District Emergency & Public Helplines
const DISTRICT_HELPLINES = [
  {
    number: "1902",
    title: "Andhra Pradesh State Integrated Helpline",
    telugu: "రాష్ట్ర సమగ్ర పౌర సేవల హెల్ప్‌లైన్",
    scope: "Spandana Grievances, Welfare Scheme Queries & Sachivalayam Support",
    type: "Toll-Free (24/7)",
    badge: "Primary IVRS",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    number: "08922-276720",
    title: "Vizianagaram Collectorate Control Room",
    telugu: "విజయనగరం కలెక్టరేట్ ప్రజా సమాచార కేంద్రం",
    scope: "Administrative Enquiries, Natural Calamity & Revenue Matters",
    type: "District Desk (10 AM – 6 PM)",
    badge: "Collectorate",
    color: "#082B50",
    bg: "#EFF6FF",
  },
  {
    number: "112",
    title: "National Emergency Response System",
    telugu: "జాతీయ అత్యవసర ప్రతిస్పందన నంబర్",
    scope: "Police, Fire, Ambulance & Urgent Disaster Response",
    type: "Toll-Free (24/7)",
    badge: "Emergency",
    color: "#DC2626",
    bg: "#FEE2E2",
  },
  {
    number: "181",
    title: "Women & Child Protection Helpline",
    telugu: "మహిళా & శిశు సంరక్షణ హెల్ప్‌లైన్",
    scope: "Women Safety, Domestic Assistance & Child Welfare Support",
    type: "Toll-Free (24/7)",
    badge: "Women Safety",
    color: "#7C3AED",
    bg: "#F3E8FF",
  },
];

export default function IvrsPage() {
  const [activeFaq, setActiveFaq] = useState<string | false>("faq1");

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setActiveFaq(isExpanded ? panel : false);
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
            {/* Left Column: Title, Subtitle, Direct Dial CTAs */}
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
                INTERACTIVE VOICE RESPONSE SYSTEM • TOLL-FREE 1902
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
                IVRS Citizen Tele-Services
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
                1902 ఉచిత టోల్‌ఫ్రీ కాల్ ద్వారా 24/7 ప్రభుత్వ సేవలు మరియు ఫిర్యాదుల పరిష్కారం
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
                Access Andhra Pradesh state government welfare scheme eligibility, lodge Spandana grievances, check petition status, and obtain departmental assistance around the clock through a toll-free telephone call in Telugu or English.
              </Typography>

              {/* Direct Dial Banner */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ sm: "center" }}>
                <Button
                  component="a"
                  href="tel:1902"
                  variant="contained"
                  startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    bgcolor: "#D97706",
                    color: "#FFFFFF !important",
                    fontWeight: 750,
                    fontSize: "0.82rem",
                    py: 0.9,
                    px: 3,
                    borderRadius: 2.2,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(217, 119, 6, 0.3)",
                    "&:hover": { bgcolor: "#B45309" },
                  }}
                >
                  Dial 1902 Toll-Free
                </Button>

                <Button
                  component={Link}
                  href="/pgrs"
                  variant="outlined"
                  startIcon={<SupportAgentRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    borderColor: "#CBD5E1",
                    color: "#082B50",
                    fontWeight: 750,
                    fontSize: "0.82rem",
                    py: 0.9,
                    px: 2.5,
                    borderRadius: 2.2,
                    textTransform: "none",
                    bgcolor: "#FFFFFF",
                    "&:hover": { borderColor: "#082B50", bgcolor: "#F8FAFC" },
                  }}
                >
                  Online Grievance Desk
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: High-Resolution Photography with Floating IVRS Status Badge */}
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
                  src="/images/vzm-collectorate-gathering-official.jpg"
                  alt="Vizianagaram District Tele-Services & Citizen Support Call Center"
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

                {/* Floating Official IVRS Badge */}
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
                    <DialpadRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        1902 AP Govt Tele-Services Desk
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Toll-Free • 24/7 Operations • Telugu & English
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Toll-Free"
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

      {/* 2. STATUTORY CALL ARCHITECTURE (KEYPAD MENU OPTIONS) */}
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
                1902 PHONE KEYPAD DIRECTORY
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 900 }}>
                Press Corresponding Key After Language Selection
              </Typography>
            </Box>
            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              Press 1 for Telugu (తెలుగు) • Press 2 for English
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {IVRS_KEY_OPTIONS.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.key}>
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
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 18px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#CBD5E1",
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: 1.5,
                        bgcolor: "#082B50",
                        color: "#F5B800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {item.key}
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ color: "#082B50", fontSize: "0.86rem", fontWeight: 800, lineHeight: 1.25 }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ color: "#B45309", fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif" }}>
                        {item.telugu}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography sx={{ color: "#475569", fontSize: "0.74rem", lineHeight: 1.45, mb: 1.25, flexGrow: 1 }}>
                    {item.desc}
                  </Typography>

                  <Box sx={{ pt: 1, borderTop: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 600 }}>
                      {item.dept}
                    </Typography>
                    <Chip
                      label={item.action}
                      size="small"
                      sx={{
                        bgcolor: "#EFF6FF",
                        color: "#1D4ED8",
                        fontWeight: 750,
                        fontSize: "0.62rem",
                        height: 20,
                      }}
                    />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. FOUR DISTRICT EMERGENCY & TELE-ASSISTANCE LINES */}
      <Box sx={{ py: { xs: 3, sm: 3.5 }, bgcolor: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.25 }}>
              OFFICIAL DISTRICT CALL DIRECTORY
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 900 }}>
              Essential Citizen Helplines & Control Desks
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {DISTRICT_HELPLINES.map((line, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: 2.25,
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
                    <Chip
                      label={line.badge}
                      size="small"
                      sx={{
                        bgcolor: line.bg,
                        color: line.color,
                        fontWeight: 800,
                        fontSize: "0.65rem",
                        height: 20,
                      }}
                    />
                    <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 600 }}>
                      {line.type}
                    </Typography>
                  </Stack>

                  <Typography sx={{ color: line.color, fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1, mb: 0.5 }}>
                    {line.number}
                  </Typography>

                  <Typography sx={{ color: "#082B50", fontSize: "0.85rem", fontWeight: 800, lineHeight: 1.25, mb: 0.25 }}>
                    {line.title}
                  </Typography>

                  <Typography sx={{ color: "#B45309", fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif", mb: 0.75 }}>
                    {line.telugu}
                  </Typography>

                  <Typography sx={{ color: "#475569", fontSize: "0.72rem", lineHeight: 1.45, mb: 1.5, flexGrow: 1 }}>
                    {line.scope}
                  </Typography>

                  <Button
                    component="a"
                    href={`tel:${line.number.replace(/[^0-9]/g, "")}`}
                    size="small"
                    startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      textTransform: "none",
                      py: 0.5,
                      borderRadius: 1.75,
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Call {line.number}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. CALL PROCEDURE & CITIZEN CHARTER FAQ ACCORDION */}
      <Box sx={{ py: { xs: 3.5, sm: 4 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3.5} alignItems="flex-start">
            {/* Step-by-step guidance */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ color: "#D97706", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.4 }}>
                HOW TO USE THE 1902 SYSTEM
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.2rem", sm: "1.45rem" }, fontWeight: 900, mb: 0.8 }}>
                5 Simple Steps for Calling 1902
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.55, mb: 2 }}>
                The automated system is designed for every citizen with zero call charges from any mobile or landline network across Andhra Pradesh.
              </Typography>

              <Stack spacing={1.25}>
                {[
                  { step: "Step 1", text: "Dial 1902 from your mobile phone or landline (100% free of charge)." },
                  { step: "Step 2", text: "Select your preferred language: Press 1 for Telugu (తెలుగు) or Press 2 for English." },
                  { step: "Step 3", text: "Choose your subject by pressing the keypad number (1 for Welfare Schemes, 2 for Spandana Complaints, etc.)." },
                  { step: "Step 4", text: "Provide your details: Speak clearly with the executive or follow the keypad prompts for your Aadhaar/phone number." },
                  { step: "Step 5", text: "Note your SMS: An official acknowledgement SMS with your unique Petition Tracking ID is sent instantly." }
                ].map((s, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    sx={{
                      bgcolor: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 1.75,
                      p: 1.25,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#FEF3C7",
                        color: "#92400E",
                        fontWeight: 800,
                        fontSize: "0.68rem",
                        px: 1,
                        py: 0.35,
                        borderRadius: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.step}
                    </Box>
                    <Typography sx={{ color: "#1E293B", fontSize: "0.76rem", fontWeight: 600, lineHeight: 1.4 }}>
                      {s.text}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>

            {/* Common Citizen Queries Accordion */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ color: "#D97706", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.4 }}>
                FREQUENTLY ASKED QUESTIONS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.2rem", sm: "1.45rem" }, fontWeight: 900, mb: 0.8 }}>
                Citizen Clarifications & Service Scope
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.55, mb: 2 }}>
                Important answers regarding helpline hours, complaint tracking, and Mandal-level verification.
              </Typography>

              <Stack spacing={1}>
                <Accordion
                  expanded={activeFaq === "faq1"}
                  onChange={handleAccordionChange("faq1")}
                  elevation={0}
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px !important",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ fontSize: 18 }} />}>
                    <Typography sx={{ color: "#082B50", fontSize: "0.82rem", fontWeight: 750 }}>
                      Are calls to 1902 completely free of charge?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0 }}>
                    <Typography sx={{ color: "#475569", fontSize: "0.76rem", lineHeight: 1.5 }}>
                      Yes, 1902 is a government-notified national toll-free helpline number. Citizens can dial from any telecom provider (BSNL, Jio, Airtel, Vi) without any call charges or talk-time balance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={activeFaq === "faq2"}
                  onChange={handleAccordionChange("faq2")}
                  elevation={0}
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px !important",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ fontSize: 18 }} />}>
                    <Typography sx={{ color: "#082B50", fontSize: "0.82rem", fontWeight: 750 }}>
                      What happens after I register a complaint over the phone?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0 }}>
                    <Typography sx={{ color: "#475569", fontSize: "0.76rem", lineHeight: 1.5 }}>
                      Your grievance is entered into the state Spandana/PGRS database and routed to the concerned Mandal Tahsildar, MPDO, or Municipal Commissioner in Vizianagaram district within 24 hours. You receive an SMS tracking ID with a statutory 7–15 day resolution timeline.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={activeFaq === "faq3"}
                  onChange={handleAccordionChange("faq3")}
                  elevation={0}
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px !important",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreRoundedIcon sx={{ fontSize: 18 }} />}>
                    <Typography sx={{ color: "#082B50", fontSize: "0.82rem", fontWeight: 750 }}>
                      Can I track a complaint registered at the Collectorate Spandana camp via 1902?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0 }}>
                    <Typography sx={{ color: "#475569", fontSize: "0.76rem", lineHeight: 1.5 }}>
                      Yes. The 1902 IVRS system is linked directly with physical Spandana petitions. By selecting Option 3 on the keypad and entering your petition ID or registered phone number, you can listen to real-time status updates.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
