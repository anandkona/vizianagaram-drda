"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  TextField,
  InputAdornment,
  Chip,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import AccessibleForwardRoundedIcon from "@mui/icons-material/AccessibleForwardRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// Official Welfare Categories matching /schemes/[category] and vizianagaram.ap.gov.in
const SCHEME_SECTORS = [
  {
    id: "women",
    title: "Women & SHG Livelihoods",
    telugu: "మహిళా సాధికారత & పొదుపు సంఘాలు",
    desc: "NRLM Revolving Funds, Community Investment Funds (CIF), Sunna Vaddi 0% interest, and Stree Nidhi credit cooperatives.",
    href: "/schemes/women",
    count: "8 Schemes",
    accent: "#BE185D",
    bg: "#FCE7F3",
    icon: <GroupsRoundedIcon sx={{ fontSize: 24, color: "#BE185D" }} />,
    image: "/images/drda-women-shg.jpg",
  },
  {
    id: "farmers",
    title: "Agriculture & Farmer Welfare",
    telugu: "రైతు సంక్షేమం & వ్యవసాయ పథకాలు",
    desc: "PM-KISAN direct cash support, APMIP micro-irrigation (up to 90% subsidy), Soil Health cards, and 24 FPO producer linkages.",
    href: "/schemes/farmers",
    count: "12 Schemes",
    accent: "#15803D",
    bg: "#DCFCE7",
    icon: <AgricultureRoundedIcon sx={{ fontSize: 24, color: "#15803D" }} />,
    image: "/images/farmer-support-real.jpg",
  },
  {
    id: "youth",
    title: "Youth Skilling & Employment",
    telugu: "యువత నైపుణ్యాభివృద్ధి & ఉపాధి కల్పన",
    desc: "DDU-GKY residential certified vocational training, PMKVY academies, and corporate campus placement drives across Vizianagaram.",
    href: "/schemes/youth",
    count: "7 Schemes",
    accent: "#0369A1",
    bg: "#E0F2FE",
    icon: <SchoolRoundedIcon sx={{ fontSize: 24, color: "#0369A1" }} />,
    image: "/images/hero-rural-community.jpg",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs & MSME Credit",
    telugu: "పరిశ్రమలు & పారిశ్రామికవేత్తల ప్రోత్సాహకాలు",
    desc: "PMEGP capital subsidies up to 35%, MUDRA enterprise loans, OFOE machinery grants, and single-desk industrial clearances.",
    href: "/schemes/entrepreneurs",
    count: "6 Schemes",
    accent: "#D97706",
    bg: "#FEF3C7",
    icon: <BusinessCenterRoundedIcon sx={{ fontSize: 24, color: "#D97706" }} />,
    image: "/images/enterprise-cashew.jpg",
  },
  {
    id: "tribal",
    title: "Tribal (ITDA) Livelihoods",
    telugu: "గిరిజన సంక్షేమం & ఐటీడీఏ జీవనోపాధి",
    desc: "Van Dhan Vikas Kendras, NTFP minor forest produce collection, hill-broom units, and Girijan Cooperative Federation marketing.",
    href: "/schemes/tribal",
    count: "9 Schemes",
    accent: "#047857",
    bg: "#D1FAE5",
    icon: <Diversity1RoundedIcon sx={{ fontSize: 24, color: "#047857" }} />,
    image: "/images/cultural-heritage.jpg",
  },
  {
    id: "social",
    title: "Senior Citizens & Social Pensions",
    telugu: "సామాజిక భద్రతా పింఛన్లు (ఎన్టీఆర్ భరోసా)",
    desc: "NTR Bharosa doorstep pensions (Old Age, Widow, Differently-Abled, Weavers, Fishermen, and CKD Dialysis support).",
    href: "/schemes/social",
    count: "6 Schemes",
    accent: "#7E22CE",
    bg: "#F3E8FF",
    icon: <AccessibleForwardRoundedIcon sx={{ fontSize: 24, color: "#7E22CE" }} />,
    image: "/images/service-concern.jpg",
  },
];

// Highlighted Schemes for Quick Table
const POPULAR_SCHEMES_DIRECTORY = [
  {
    name: "NTR Bharosa Social Security Pension (OAP / Widow / Disabled)",
    telugu: "ఎన్టీఆర్ భరోసా సామాజిక భద్రతా పింఛను",
    category: "Senior Citizens & Pensions",
    dept: "Panchayat Raj & Rural Development",
    benefit: "₹4,000 to ₹15,000 monthly direct cash doorstep delivery on 1st of every month",
    eligibility: "Senior citizens (60+ yrs), widows, differently-abled (40%+ SADAREM)",
    sla: "1st of Every Month",
    href: "/schemes/social",
  },
  {
    name: "NRLM – National Rural Livelihoods Mission (SERP)",
    telugu: "జాతీయ గ్రామీణ జీవనోపాధి మిషన్",
    category: "Women & SHG",
    dept: "DRDA / SERP Andhra Pradesh",
    benefit: "₹15,000 Revolving Fund, ₹50,000 Community Investment Fund (CIF), Sunna Vaddi 0% interest",
    eligibility: "Rural BPL women organized into registered Self Help Groups",
    sla: "15 Days Sanction",
    href: "/schemes/women",
  },
  {
    name: "PM-KISAN Samman Nidhi & Farmer Credit Linkage",
    telugu: "పీఎం కిసాన్ సమ్మాన్ నిధి",
    category: "Farmers & Agriculture",
    dept: "Department of Agriculture",
    benefit: "Direct annual financial support of ₹6,000 transferred in 3 DBT installments + state top-up",
    eligibility: "All small and marginal landholding farmer families with e-KYC",
    sla: "Seasonal DBT",
    href: "/schemes/farmers",
  },
  {
    name: "APMIP Micro-Irrigation Drip & Sprinkler Subsidy",
    telugu: "ఆంధ్రప్రదేశ్ సూక్ష్మ నీటిపారుదల పథకం",
    category: "Farmers & Agriculture",
    dept: "Horticulture Department",
    benefit: "Up to 90% subsidy for SC/ST small farmers and 70% for BC/General on ISI certified equipment",
    eligibility: "Farmers with cultivable land cultivating horticulture/cash crops",
    sla: "21 Working Days",
    href: "/schemes/farmers",
  },
  {
    name: "PMEGP – Prime Minister's Employment Generation Programme",
    telugu: "ప్రధాన మంత్రి ఉపాధి కల్పన పథకం",
    category: "Entrepreneurs & MSME",
    dept: "District Industries Centre (DIC) / KVIC",
    benefit: "Bank loans up to ₹50 Lakhs for manufacturing with 15% to 35% margin capital subsidy",
    eligibility: "Individuals aged 18+ establishing new micro-enterprises",
    sla: "30 Working Days",
    href: "/schemes/entrepreneurs",
  },
  {
    name: "DDU-GKY Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    telugu: "దీన్ దయాళ్ ఉపాధ్యాయ గ్రామీణ కౌశల్య యోజన",
    category: "Youth & Skills",
    dept: "APSSDC / Ministry of Rural Development",
    benefit: "100% free residential training, uniforms, boarding, and guaranteed corporate placement",
    eligibility: "Rural youth aged 15–35 years from BPL / SHG families",
    sla: "Quarterly Batches",
    href: "/schemes/youth",
  },
];

export default function SchemesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPopular = POPULAR_SCHEMES_DIRECTORY.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.telugu.includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.dept.toLowerCase().includes(q)
    );
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. EDITORIAL TOP HERO SECTION (MATCHING /schemes/women & /about/district EXACTLY) */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
          pb: { xs: 7, sm: 8, md: 9 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* Soft Gold Decorative Backdrop Circle */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: { xs: "-10%", sm: "0%", md: "6%" },
            width: { xs: 340, sm: 460, md: 540 },
            height: { xs: 340, sm: 460, md: 540 },
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
              fontSize: "0.78rem",
              fontWeight: 650,
              mb: { xs: 1.5, sm: 2 },
              "& .MuiBreadcrumbs-separator": { color: "#CBD5E1", mx: 0.6 },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <HomeRoundedIcon sx={{ fontSize: 16, color: "#082B50" }} />
              <Link href="/" style={{ color: "#082B50", textDecoration: "none", fontWeight: 700 }}>
                Home
              </Link>
            </Stack>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.78rem" }}>
              Government Schemes
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 3.5, md: 5 }} alignItems="center">
            {/* Left Column: Title & Description */}
            <Grid size={{ xs: 12, md: 6.8 }}>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: { xs: "0.72rem", sm: "0.8rem" },
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.8,
                }}
              >
                WELFARE &amp; FINANCIAL INCLUSION · GOVERNMENT OF ANDHRA PRADESH
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1.5,
                }}
              >
                Government Schemes Portal
              </Typography>

              {/* Telugu Subtitle */}
              <Typography
                sx={{
                  color: "#B45309",
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  fontWeight: 700,
                  mb: 2,
                  fontFamily: "'Segoe UI', 'Noto Sans Telugu', sans-serif",
                }}
              >
                విజయనగరం జిల్లా సంక్షేమ పథకాలు, సబ్సిడీలు &amp; ఆర్థిక సహాయం
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                Discover public welfare programs, zero-interest loans, direct cash transfers, capital subsidies, and institutional bank linkages offered across Vizianagaram district for women, farmers, youth, MSMEs, tribal communities, and senior citizens.
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href="https://vizianagaram.ap.gov.in/schemes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#F5B800",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3.2,
                    py: 1.1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(245, 184, 0, 0.3)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#D49D00",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Official AP Schemes Source
                </Button>

                <Button
                  component={Link}
                  href="/schemes/social"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #CBD5E1",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3,
                    py: 1.1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#F8FAFC",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  View Social Security Pensions
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Real Hero Photo Card */}
            <Grid size={{ xs: 12, md: 5.2 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 310, md: 360 },
                  borderRadius: { xs: "24px", sm: "32px" },
                  overflow: "hidden",
                  boxShadow: "0 20px 45px -12px rgba(8, 43, 80, 0.18)",
                  border: "4px solid #FFFFFF",
                  bgcolor: "#FEF9C3",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/images/drda-women-shg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.6s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    bgcolor: "rgba(8, 43, 80, 0.9)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "100px",
                    px: 1.8,
                    py: 0.6,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <AccountBalanceRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                  <Typography sx={{ color: "#FFFFFF", fontSize: "0.72rem", fontWeight: 700 }}>
                    100% Welfare Delivery at Citizen Doorstep
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. FLOATING QUICK FACTS BAR */}
      <Box sx={{ mt: { xs: -4, sm: -5, md: -6 }, position: "relative", zIndex: 10, mb: { xs: 4, sm: 5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: { xs: "18px", sm: "24px" },
              boxShadow: "0 10px 30px -4px rgba(8, 43, 80, 0.08)",
              border: "1px solid #E2E8F0",
              p: { xs: 2, sm: 2.5, md: 3 },
            }}
          >
            <Grid container spacing={{ xs: 2, sm: 2.5 }} alignItems="center">
              {[
                { value: "48+ Schemes", label: "Active Government Programs", icon: <AccountBalanceRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "₹40.97 Cr+", label: "Annual Livelihood Disbursal", icon: <CurrencyRupeeRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "3.2 Lakh", label: "Direct Pension Beneficiaries", icon: <GroupsRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "100% Saturation", label: "27 Mandals Full Coverage", icon: <CheckCircleRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
              ].map((fact, idx) => (
                <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                  <Box
                    sx={{
                      p: { xs: 1.2, sm: 1.6 },
                      borderRadius: "16px",
                      bgcolor: "#F8FAFC",
                      border: "1px solid #F1F5F9",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#FEF3C7",
                        borderColor: "#FDE68A",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 0.5 }}>{fact.icon}</Box>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
                        fontWeight: 900,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                      }}
                    >
                      {fact.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: { xs: "0.72rem", sm: "0.78rem" },
                        fontWeight: 700,
                        mt: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {fact.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 3. 6 MAIN SECTOR CARDS */}
      <Box sx={{ py: 3 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              TARGETED BENEFICIARY WINGS
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
              Explore Schemes by Category
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {SCHEME_SECTORS.map((sector) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sector.id}>
                <Paper
                  component={Link}
                  href={sector.href}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    border: "1px solid #E2E8F0",
                    bgcolor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textDecoration: "none",
                    transition: "all 0.22s ease",
                    "&:hover": {
                      borderColor: sector.accent,
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 30px -6px rgba(8, 43, 80, 0.12)",
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        bgcolor: sector.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {sector.icon}
                    </Box>
                    <Chip
                      label={sector.count}
                      size="small"
                      sx={{
                        bgcolor: sector.bg,
                        color: sector.accent,
                        fontWeight: 850,
                        fontSize: "0.72rem",
                      }}
                    />
                  </Stack>

                  <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.15rem", mb: 0.5 }}>
                    {sector.title}
                  </Typography>
                  <Typography sx={{ color: "#D97706", fontSize: "0.80rem", fontWeight: 700, mb: 1.5 }}>
                    {sector.telugu}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.55, flexGrow: 1, mb: 2.5 }}>
                    {sector.desc}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: sector.accent, fontWeight: 800, fontSize: "0.84rem" }}>
                    <span>Browse {sector.title.split(" ")[0]} Schemes</span>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. MASTER SCHEMES DIRECTORY TABLE */}
      <Box sx={{ py: 4, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", md: "center" }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                STATE &amp; CENTRAL FLAGSHIPS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
                Popular Welfare Programs Directory
              </Typography>
            </Box>

            <TextField
              size="small"
              placeholder="Search scheme name, benefit, eligibility..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon sx={{ color: "#94A3B8", fontSize: 18 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                width: { xs: "100%", md: 380 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                  bgcolor: "#F8FAFC",
                  fontSize: "0.82rem",
                  "&:hover fieldset": { borderColor: "#082B50" },
                  "&.Mui-focused fieldset": { borderColor: "#082B50" },
                },
              }}
            />
          </Stack>

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              maxHeight: 580,
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              overflow: "auto",
              boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
              "&::-webkit-scrollbar": { width: 8, height: 8 },
              "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 4 },
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                    Scheme Name &amp; Telugu Title
                  </TableCell>
                  <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                    Target Sector &amp; Department
                  </TableCell>
                  <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                    Entitlement &amp; Financial Benefits
                  </TableCell>
                  <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                    Eligibility Criteria
                  </TableCell>
                  <TableCell align="right" sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPopular.map((scheme) => (
                  <TableRow
                    key={scheme.name}
                    hover
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      transition: "background-color 0.15s ease",
                    }}
                  >
                    <TableCell sx={{ py: 1.8, maxWidth: 300 }}>
                      <Typography sx={{ fontWeight: 850, color: "#082B50", fontSize: "0.95rem", lineHeight: 1.25 }}>
                        {scheme.name}
                      </Typography>
                      <Typography sx={{ color: "#D97706", fontSize: "0.78rem", fontWeight: 650, mt: 0.3 }}>
                        {scheme.telugu}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ py: 1.8, maxWidth: 220 }}>
                      <Chip
                        label={scheme.category}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.68rem",
                          height: 22,
                          mb: 0.5,
                        }}
                      />
                      <Typography sx={{ color: "#64748B", fontSize: "0.74rem" }}>
                        {scheme.dept}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ py: 1.8, maxWidth: 320 }}>
                      <Typography sx={{ color: "#334155", fontSize: "0.80rem", lineHeight: 1.45 }}>
                        {scheme.benefit}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ py: 1.8, maxWidth: 260 }}>
                      <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.4 }}>
                        {scheme.eligibility}
                      </Typography>
                    </TableCell>

                    <TableCell align="right" sx={{ py: 1.8 }}>
                      <Button
                        component={Link}
                        href={scheme.href}
                        size="small"
                        endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />}
                        sx={{
                          bgcolor: "#082B50 !important",
                          color: "#FFFFFF !important",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#0F3A66 !important" },
                        }}
                      >
                        Explore
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* 5. APPLICATION STEPS */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              SEAMLESS CITIZEN JOURNEY
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900 }}>
              4 Easy Steps to Apply for Schemes in Vizianagaram
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {[
              { step: "01", title: "Review Eligibility", desc: "Select your sector (Women, Farmers, Youth, MSME, Pension) and check the prescribed income and document criteria." },
              { step: "02", title: "Visit Village Secretariat", desc: "Submit your application at your local Grama / Ward Sachivalayam along with your Aadhaar and bank account details." },
              { step: "03", title: "Field Verification", desc: "Welfare Assistant and Mandal Samakhya team verify records with biometric authentication to eliminate middlemen." },
              { step: "04", title: "Direct Benefit Transfer", desc: "Sanctioned financial subsidies, revolving funds, or pensions are credited directly into your Aadhaar-seeded bank account." },
            ].map((st, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "18px",
                    p: 3,
                    height: "100%",
                  }}
                >
                  <Typography sx={{ fontSize: "1.8rem", fontWeight: 900, color: "#F5B800", lineHeight: 1, mb: 1.5 }}>
                    {st.step}
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.05rem", mb: 0.8 }}>
                    {st.title}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.55 }}>
                    {st.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
