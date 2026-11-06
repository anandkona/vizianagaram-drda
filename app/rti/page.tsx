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
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

// RTI 4-Step statutory filing pipeline
const RTI_STEPS = [
  {
    num: "01",
    title: "Draft Application",
    teluguTitle: "దరఖాస్తు రూపకల్పన",
    desc: "Submit a plain application in Telugu or English specifying the records, orders, or files required. No official reason or motive is required to be disclosed.",
    icon: <DescriptionRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
  {
    num: "02",
    title: "Statutory Fee (₹10)",
    teluguTitle: "చట్టబద్ధ రుసుము",
    desc: "Pay ₹10 fee via Treasury Challan, Indian Postal Order (IPO), DD, or court-fee stamp. Below Poverty Line (BPL / White Card) holders are 100% exempted.",
    icon: <CurrencyRupeeRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
  {
    num: "03",
    title: "Submit to PIO Desk",
    teluguTitle: "అధికారికి సమర్పణ",
    desc: "Submit physically or by registered post to the Assistant Project Director (PIO), DRDA Vizianagaram or Mandal Sachivalayam facilitation desk.",
    icon: <SendRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
  {
    num: "04",
    title: "Statutory 30-Day SLA",
    teluguTitle: "30 రోజుల్లో ప్రత్యుత్తరం",
    desc: "Mandatory statutory response provided within 30 days of receipt. Emergency matters regarding life or personal liberty receive resolution within 48 hours.",
    icon: <AccessTimeRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
];

// Designated Officers Database (Vizianagaram Collectorate & DRDA)
const DESIGNATED_OFFICERS = [
  {
    role: "Public Information Officer (PIO)",
    teluguRole: "పబ్లిక్ ఇన్ఫర్మేషన్ అధికారి",
    designation: "Assistant Project Director (Administration), DRDA",
    dept: "District Rural Development Agency (DRDA), Vizianagaram",
    phone: "08922-276720 / 08922-220123",
    email: "pio-drda-vzm@ap.gov.in",
    office: "DRDA Administrative Complex, Near Collectorate, Vizianagaram — 535003",
    sla: "Initial 30 Days Disposal",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
  },
  {
    role: "First Appellate Authority (FAA)",
    teluguRole: "మొదటి అప్పిలేట్ అధికారి",
    designation: "Project Director (PD), DRDA Vizianagaram",
    dept: "DRDA & SERP Administration, Vizianagaram",
    phone: "08922-276721 / 08922-220100",
    email: "pd-drda-vzm@ap.gov.in",
    office: "Office of the Project Director, Collectorate Compound, Vizianagaram",
    sla: "Appeals disposal within 30–45 days",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
  },
  {
    role: "Collectorate Appellate Oversight",
    teluguRole: "జిల్లా కలెక్టరేట్ అప్పీల్ పర్యవేక్షణ",
    designation: "District Revenue Officer (DRO) & Addl. District Magistrate",
    dept: "Collectorate Revenue Administration, Vizianagaram",
    phone: "08922-276701",
    email: "dro-vzm@ap.gov.in",
    office: "Room No. 104, Collectorate Main Complex, Vizianagaram",
    sla: "District Magisterial Review",
    badgeColor: "#1D4ED8",
    badgeBg: "#EFF6FF",
  },
];

// Section 4(1)(b) Proactive Disclosures
const PROACTIVE_DISCLOSURES = [
  {
    code: "Manual 01",
    title: "Particulars of Organization, Functions & Duties",
    teluguTitle: "సంస్థ యొక్క విధులు మరియు బాధ్యతల వివరణ",
    desc: "Organizational organogram of DRDA Vizianagaram, administrative jurisdictions across 27 Mandals, and SHG development frameworks.",
    fileSize: "1.2 MB",
  },
  {
    code: "Manual 02",
    title: "Powers and Duties of Officers and Employees",
    teluguTitle: "అధికారులు మరియు సిబ్బంది అధికారాలు",
    desc: "Administrative and financial delegation of Project Director, APDs, Mandal Samakhya coordinators, and field community mobilizers.",
    fileSize: "840 KB",
  },
  {
    code: "Manual 03",
    title: "Decision Making Norms, Supervision & Accountability",
    teluguTitle: "నిర్ణయాధికార ప్రక్రియ మరియు పర్యవేక్షణ",
    desc: "Channel of supervision for bank linkage sanctioning, PMFME enterprise selection, and YSR Sunna Vaddi disbursals.",
    fileSize: "960 KB",
  },
  {
    code: "Manual 04",
    title: "Directory of Officers & Monthly Remunerations",
    teluguTitle: "అధికారుల చిరునామాలు మరియు వేతన వివరాలు",
    desc: "Official mobile numbers, landline extensions, email coordinates, and pay matrices of all cadre employees as per AP Revised Scales.",
    fileSize: "1.5 MB",
  },
  {
    code: "Manual 05",
    title: "Budget Allocations, Plans & Subsidies Register",
    teluguTitle: "బడ్జెట్ కేటాయింపులు మరియు సబ్సిడీల నివేదిక",
    desc: "Financial audit of ₹40.97 Crores disbursed to 4,030 micro-enterprises, tribal development grants, and SHG livelihood infrastructure.",
    fileSize: "2.1 MB",
  },
  {
    code: "Manual 06",
    title: "Subsidy Beneficiary Lists & Allotment Registers",
    teluguTitle: "సబ్సిడీ లబ్ధిదారుల జాబితా మరియు కేటాయింపులు",
    desc: "Gram Panchayat-wise lists of PMFME food processing units, solar dryer beneficiaries, and animal husbandry cluster support.",
    fileSize: "3.4 MB",
  },
];

// RTI FAQs
const RTI_FAQS = [
  {
    q: "Can I submit my RTI application online for Vizianagaram District?",
    a: "Yes. Citizens can register their RTI applications online directly on the official Andhra Pradesh RTI Portal (aprti.ap.gov.in) with online payment of the statutory ₹10 fee via Net Banking, UPI, or Debit Card.",
  },
  {
    q: "What is the fee exemption criteria for BPL applicants?",
    a: "Applicants holding an active Below Poverty Line (BPL) White Ration Card or Antyodaya Anna Yojana (AAY) card are 100% exempted from paying application fees and copying charges up to 50 pages upon attaching a self-attested card photocopy.",
  },
  {
    q: "What happens if the PIO fails to furnish information within 30 days?",
    a: "If the Public Information Officer fails to provide a decision or furnish documents within the statutory 30 days, the applicant is entitled to receive the requested information completely free of charge and can file a First Appeal before the First Appellate Authority (Project Director, DRDA).",
  },
  {
    q: "Can I inspect physical records or civil works under RTI?",
    a: "Yes. Section 2(j)(i) of the RTI Act grants every citizen the right to physically inspect office files, work registers, and ongoing DRDA civil works (such as FPO godowns or processing centres) upon advance intimation with free inspection for the first hour and ₹5 per additional hour.",
  },
];

export default function RTIPage() {
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
        {/* Soft Gold Backdrop Blur Circle */}
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
              Right to Information (RTI Act 2005)
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Summary */}
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
                PUBLIC ACCESS TO INFORMATION • ACT NO. 22 OF 2005
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
                Right to Information (RTI)
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
                సమాచార హక్కు చట్టం 2005 - పారదర్శక పరిపాలన మరియు ప్రజా సాధికారత
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
                Empowering every citizen to inspect public records, obtain certified government orders, and track public welfare expenditures under the District Rural Development Agency (DRDA) and Vizianagaram District Collectorate.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component="a"
                  href="https://aprti.ap.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />}
                  sx={{
                    bgcolor: "#082B50",
                    color: "#FFFFFF !important",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    px: 2.5,
                    py: 1,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#06203D" },
                  }}
                >
                  File RTI Online (AP RTI Portal)
                </Button>

                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  startIcon={<HelpOutlineRoundedIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    borderColor: "#CBD5E1",
                    color: "#082B50",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    px: 2.5,
                    py: 1,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { borderColor: "#082B50", bgcolor: "#FFFFFF" },
                  }}
                >
                  PIO Contact Directory
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Badge */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, sm: 240, md: 260 },
                  borderRadius: { xs: "18px", sm: "22px", md: "24px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
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
                  src="/images/vizianagaram-administrative-headquarters.jpg"
                  alt="Vizianagaram Collectorate RTI Facilitation Desk"
                  fill
                  className="hero-photo"
                  priority
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

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
                    <PolicyRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Statutory RTI Cell • DRDA
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        30-Day Mandatory SLA Guarantee
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Act 2005"
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

      {/* 2. STATUTORY 4-STEP FILING PIPELINE */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack sx={{ mb: 2.2 }}>
            <Typography
              sx={{
                color: "#D97706",
                fontSize: "0.68rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 0.3,
              }}
            >
              PROCEDURE & COMPLIANCE
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              How to File an RTI Application in 4 Steps
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {RTI_STEPS.map((step) => (
              <Grid key={step.num} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "10px",
                          bgcolor: "#F1F5F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Typography sx={{ color: "#CBD5E1", fontSize: "1.15rem", fontWeight: 900 }}>
                        {step.num}
                      </Typography>
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 800, mb: 0.3 }}>
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 1,
                      }}
                    >
                      {step.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. DESIGNATED RTI OFFICERS (COMPACT 3-COLUMN CARDS) */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack sx={{ mb: 2.2 }}>
            <Typography
              sx={{
                color: "#D97706",
                fontSize: "0.68rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 0.3,
              }}
            >
              STATUTORY AUTHORITIES • DRDA & DISTRICT COLLECTORATE
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Designated Public Information & Appellate Officers
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {DESIGNATED_OFFICERS.map((officer, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -6px rgba(8, 43, 80, 0.08)",
                      borderColor: officer.badgeColor,
                    },
                  }}
                >
                  {/* Top Colored Accent Stripe */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3.5px",
                      bgcolor: officer.badgeColor,
                    }}
                  />

                  <Box sx={{ pt: 0.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Chip
                        label={officer.role}
                        size="small"
                        sx={{
                          bgcolor: officer.badgeBg,
                          color: officer.badgeColor,
                          fontWeight: 800,
                          fontSize: "0.64rem",
                          height: 22,
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      />
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 700 }}>
                        {officer.sla}
                      </Typography>
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.95rem", fontWeight: 850, mb: 0.3, lineHeight: 1.3 }}>
                      {officer.designation}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 0.6,
                      }}
                    >
                      {officer.teluguRole}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.74rem", fontWeight: 600, mb: 1.5 }}>
                      {officer.dept}
                    </Typography>

                    {/* Contact Details Grid */}
                    <Stack spacing={1} sx={{ bgcolor: "#FFFFFF", p: 1.5, borderRadius: "10px", border: "1px solid #E2E8F0", mb: 1.5 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <PhoneRoundedIcon sx={{ fontSize: 14, color: "#082B50" }} />
                        <Typography sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 700 }}>
                          {officer.phone}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <MailRoundedIcon sx={{ fontSize: 14, color: "#082B50" }} />
                        <Typography sx={{ color: "#475569", fontSize: "0.72rem", fontWeight: 600 }}>
                          {officer.email}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="flex-start" spacing={1}>
                        <LocationOnRoundedIcon sx={{ fontSize: 14, color: "#D97706", mt: 0.2 }} />
                        <Typography sx={{ color: "#64748B", fontSize: "0.7rem", lineHeight: 1.35 }}>
                          {officer.office}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>

                  <Button
                    component="a"
                    href={`mailto:${officer.email}`}
                    size="small"
                    fullWidth
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #CBD5E1",
                      color: "#082B50",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      py: 0.6,
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#F1F5F9", borderColor: "#082B50" },
                    }}
                  >
                    Direct Official Email
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. SECTION 4(1)(b) PROACTIVE DISCLOSURES (COMPACT 3-COLUMN GRID) */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack sx={{ mb: 2.2 }}>
            <Typography
              sx={{
                color: "#D97706",
                fontSize: "0.68rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 0.3,
              }}
            >
              MANDATORY STATUTORY REGISTERS • SECTION 4(1)(b)
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Proactive Disclosures & Citizen Transparency Handbooks
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {PROACTIVE_DISCLOSURES.map((item) => (
              <Grid key={item.code} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Chip
                        label={item.code}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 700 }}>
                        PDF ({item.fileSize})
                      </Typography>
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.88rem", fontWeight: 800, mb: 0.3, lineHeight: 1.3 }}>
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 1,
                      }}
                    >
                      {item.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.74rem", lineHeight: 1.45, mb: 1.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>

                  <Button
                    component="a"
                    href="https://vizianagaram.ap.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    size="small"
                    startIcon={<FileDownloadRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      py: 0.6,
                      borderRadius: "8px",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Download Handbook
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. STATUTORY FEE STRUCTURE & RTI FAQS ACCORDION */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 2.5, md: 4 }}>
            {/* Left Column: Fees & SLA Table */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  bgcolor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  height: "100%",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                  <CurrencyRupeeRoundedIcon sx={{ color: "#082B50", fontSize: 20 }} />
                  <Typography sx={{ color: "#082B50", fontSize: "1.05rem", fontWeight: 850 }}>
                    Statutory Fee Structure
                  </Typography>
                </Stack>

                <Typography sx={{ color: "#475569", fontSize: "0.78rem", mb: 2, lineHeight: 1.45 }}>
                  Prescribed under Andhra Pradesh Right to Information (Regulation of Fee and Cost) Rules:
                </Typography>

                <Stack spacing={1.2}>
                  {[
                    { label: "Application Fee (Initial Submission)", val: "₹10 per request" },
                    { label: "Document Photocopying (A4 / A3)", val: "₹2 per page" },
                    { label: "Inspection of Records (First Hour)", val: "100% Free" },
                    { label: "Inspection (Subsequent Hours)", val: "₹5 per hour" },
                    { label: "Electronic Media (CD / Pen Drive)", val: "₹50 per disc" },
                    { label: "BPL / White Card Applicants", val: "100% EXEMPTED" },
                  ].map((row, idx) => (
                    <Stack
                      key={idx}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        py: 0.8,
                        px: 1,
                        bgcolor: idx === 5 ? "#FEF3C7" : "#FFFFFF",
                        borderRadius: "6px",
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      <Typography sx={{ color: idx === 5 ? "#92400E" : "#334155", fontSize: "0.74rem", fontWeight: idx === 5 ? 800 : 600 }}>
                        {row.label}
                      </Typography>
                      <Typography sx={{ color: idx === 5 ? "#92400E" : "#082B50", fontSize: "0.76rem", fontWeight: 800 }}>
                        {row.val}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            {/* Right Column: Interactive RTI FAQ Accordion */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.3,
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 1.5 }}>
                Citizen Clarifications & Appeals Framework
              </Typography>

              <Stack spacing={1}>
                {RTI_FAQS.map((faq, index) => (
                  <Accordion
                    key={index}
                    elevation={0}
                    defaultExpanded={index === 0}
                    sx={{
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px !important",
                      "&:before": { display: "none" },
                      bgcolor: "#FFFFFF",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreRoundedIcon sx={{ color: "#082B50" }} />}
                      sx={{ py: 0.5, px: 2, minHeight: 46 }}
                    >
                      <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.84rem" }}>
                        {faq.q}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
                      <Typography sx={{ color: "#475569", fontSize: "0.78rem", lineHeight: 1.55 }}>
                        {faq.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. BOTTOM EXTENSION BANNER */}
      <Box sx={{ bgcolor: "#F8FAFC", borderTop: "1px solid #E2E8F0", py: { xs: 3.5, sm: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              borderRadius: "16px",
              p: { xs: 2.2, sm: 3, md: 3.5 },
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 0.4,
                  }}
                >
                  DISTRICT CITIZEN ASSISTANCE DESK
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Need Assistance Drafting an RTI Application?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Citizens can visit any of the 777 Village / Ward Secretariats (Grama Sachivalayams) across Vizianagaram or call the Collectorate Public Information Desk for guidance on drafting requests in Telugu or English.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component="a"
                    href="https://aprti.ap.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.75,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Open AP RTI Online Portal
                  </Button>

                  <Button
                    component={Link}
                    href="/pgrs"
                    variant="outlined"
                    startIcon={<PolicyRoundedIcon sx={{ fontSize: 15 }} />}
                    sx={{
                      borderColor: "#CBD5E1",
                      color: "#082B50",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.75,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { borderColor: "#082B50", bgcolor: "#FFFFFF" },
                    }}
                  >
                    File Public Grievance (Spandana 1902)
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}