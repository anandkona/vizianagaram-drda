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
  LinearProgress,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";

// State Vision Targets for One Family One Entrepreneur
const VISION_TARGETS = [
  { value: "1 Crore", label: "Statewide Entrepreneurs", sub: "AP State Horizon Target", color: "#082B50" },
  { value: "20 Lakh", label: "Formal Jobs Created", sub: "5-Year Employment Mission", color: "#D97706" },
  { value: "5 Lakh", label: "DWCRA Women Transformed", sub: "Into Micro-Business Owners", color: "#15803D" },
  { value: "27 Mandals", label: "Vizianagaram Saturation", sub: "777 Gram Panchayats Covered", color: "#7C3AED" },
];

// 4 Strategic Pillars
const STRATEGIC_PILLARS = [
  {
    step: "Pillar 01",
    title: "Household Profiling & Skill Mapping",
    teluguTitle: "కుటుంబ సర్వే & నైపుణ్యాల గుర్తింపు",
    desc: "Door-to-door enumeration by Grama Volunteers and Mandal Samakhyas to assess household trade skills, ancestral artisan heritage, and market readiness.",
    icon: <LightbulbRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
  {
    step: "Pillar 02",
    title: "Tailored Incubation & APSSDC Training",
    teluguTitle: "వ్యాపార శిక్షణ & నైపుణ్యాభివృద్ధి",
    desc: "Modular 15-day hands-on business incubation at MR College and ITDA Centers covering packaging, digital payments, quality standards, and statutory GST.",
    icon: <SchoolRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
  {
    step: "Pillar 03",
    title: "Collateral-Free Bank Linkage",
    teluguTitle: "హామీ లేని బ్యాంక్ రుణ సంధానం",
    desc: "Unlocking mudra loans, Stree Nidhi credit, and PMEGP capital subsidies up to ₹5 Lakhs per family without requiring third-party collateral security.",
    icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
  {
    step: "Pillar 04",
    title: "Wholesale & Digital Market Linkages",
    teluguTitle: "మార్కెట్ అనుసంధానం & విక్రయాలు",
    desc: "Onboarding products directly onto Vizianagaram District Mart, e-NAM agricultural trading network, and regional corporate supply chains.",
    icon: <StorefrontRoundedIcon sx={{ fontSize: 20, color: "#082B50" }} />,
  },
];

// District Enterprise Sectors
const ENTERPRISE_OPPORTUNITIES = [
  {
    title: "Agro-Produce Primary Processing",
    teluguTitle: "వ్యవసాయ ఉత్పత్తుల ప్రాథమిక ప్రాసెసింగ్",
    desc: "Cashew decortication, turmeric polishing, cold-pressed sesame oil, and desi pulses sorting with ₹50,000 to ₹2,00,000 initial outlay.",
    returns: "₹18,000 – ₹35,000 / month",
    suitableFor: "Farmers & Rural Families",
  },
  {
    title: "Eco-Friendly Fiber & Bamboo Craft",
    teluguTitle: "పర్యావరణ అనుకూల అరటి నార & వెదురు ఉత్పత్తులు",
    desc: "Handcrafted bamboo household articles, woven hill brooms, and banana pseudo-stem eco-carry bags for zero-plastic packaging markets.",
    returns: "₹15,000 – ₹28,000 / month",
    suitableFor: "Tribal Artisans & Women SHGs",
  },
  {
    title: "Livestock, Dairy & Poultry Hubs",
    teluguTitle: "పాడి పరిశ్రమ & నాటుకోళ్ల పెంపకం",
    desc: "Mini-dairy units with 2-4 milch animals, automated country chicken rearing incubators, and hygienic organic egg delivery.",
    returns: "₹20,000 – ₹42,000 / month",
    suitableFor: "Smallholder Rural Households",
  },
  {
    title: "Local Services & Electric Mobility",
    teluguTitle: "స్థానిక సేవలు & విద్యుత్ మొబిలిటీ వ్యాపారాలు",
    desc: "Solar mobile charging, two-wheeler mechanical workshops, mobile agricultural sprayers, and EV last-mile freight e-autos.",
    returns: "₹22,000 – ₹45,000 / month",
    suitableFor: "Educated Youth & Technicians",
  },
];

export default function OneFamilyOneEntrepreneurPage() {
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
          {/* Breadcrumbs */}
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
            <Link href="/livelihoods" style={{ color: "#64748B", textDecoration: "none" }}>
              Rural Livelihoods
            </Link>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.75rem" }}>
              One Family One Entrepreneur
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Summary */}
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
                AP STATE ECONOMIC EMPOWERMENT MISSION
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
                One Family, One Entrepreneur
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
                ఒక కుటుంబం - ఒక పారిశ్రామికవేత్త: ప్రతి ఇంటికీ స్థిరమైన ఆర్థిక స్వావలంబన
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
                A transformative policy vision to nurture at least one sustainable enterprise in every household across Vizianagaram. Pairing micro-credit, business skills, machinery grants, and direct market linkage to build resilient family wealth and dignity.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/schemes"
                  variant="contained"
                  startIcon={<BusinessCenterRoundedIcon sx={{ fontSize: 15 }} />}
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
                  Apply for Enterprise Credit
                </Button>

                <Button
                  component={Link}
                  href="/women-entrepreneurship"
                  variant="outlined"
                  startIcon={<GroupsRoundedIcon sx={{ fontSize: 15 }} />}
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
                  View Women Entrepreneurship Desk
                </Button>
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
                  src="/images/drda-women-shg-outdoor.jpg"
                  alt="Rural Family Enterprise Supported by DRDA"
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
                    <LightbulbRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Enterprise Incubation Mission
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Every Household an Independent Producer
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="State Vision"
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

      {/* 2. VISION METRICS OVERVIEW BAR */}
      <Box sx={{ bgcolor: "#F8FAFC", py: 2, borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {VISION_TARGETS.map((stat, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    borderRadius: "12px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ color: stat.color, fontSize: "1.1rem", fontWeight: 900, lineHeight: 1.2 }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontSize: "0.74rem", fontWeight: 750, mt: 0.3 }}>
                    {stat.label}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.64rem", fontWeight: 600 }}>
                    {stat.sub}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. 4 STRATEGIC PILLARS */}
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
              IMPLEMENTATION ROADMAP
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              The 4 Pillars of Household Enterprise Incubation
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {STRATEGIC_PILLARS.map((pillar, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, lg: 3 }}>
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
                    transition: "all 0.2s ease",
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
                        {pillar.icon}
                      </Box>
                      <Chip
                        label={pillar.step}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 800, mb: 0.3 }}>
                      {pillar.title}
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
                      {pillar.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45 }}>
                      {pillar.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. SECTORS SUITABLE FOR HOUSEHOLD ENTERPRISES */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
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
              OPPORTUNITY BLUEPRINT
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Viable Household Enterprise Models in Vizianagaram
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {ENTERPRISE_OPPORTUNITIES.map((opp, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6 }}>
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
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#082B50",
                      bgcolor: "#FFFFFF",
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.8 }}>
                      <Chip
                        label={opp.suitableFor}
                        size="small"
                        sx={{
                          bgcolor: "#EFF6FF",
                          color: "#1D4ED8",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Typography sx={{ color: "#15803D", fontSize: "0.72rem", fontWeight: 800 }}>
                        {opp.returns}
                      </Typography>
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.96rem", fontWeight: 850, mb: 0.3 }}>
                      {opp.title}
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
                      {opp.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.76rem", lineHeight: 1.45, mb: 1.5 }}>
                      {opp.desc}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 1, borderTop: "1px solid #E2E8F0" }}>
                    <Button
                      component={Link}
                      href="/contact"
                      size="small"
                      endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />}
                      sx={{
                        color: "#082B50",
                        fontSize: "0.72rem",
                        fontWeight: 750,
                        textTransform: "none",
                        p: 0,
                        "&:hover": { color: "#D97706" },
                      }}
                    >
                      Consult Mandal Enterprise Cell →
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. FOOTER EXTENSION */}
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
                  DISTRICT CITIZEN ENTREPRENEURSHIP INTAKE
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Register Your Family Enterprise Concept
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Meet the Mandal Programme Manager (Livelihoods) at your local MPDO office or Village Secretariat to enroll your household for bank linkage, subsidized equipment, and technical DPR support.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component="a"
                    href="tel:08922236966"
                    variant="contained"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 14 }} />}
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
                    Call Enterprise Helpline: 08922-236966
                  </Button>

                  <Button
                    component={Link}
                    href="/schemes"
                    variant="outlined"
                    startIcon={<BusinessCenterRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Explore Available Bank Subsidies
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