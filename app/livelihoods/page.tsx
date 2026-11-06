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
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import NaturePeopleRoundedIcon from "@mui/icons-material/NaturePeopleRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

// Authentic 5 Livelihood Sub-Categories
const LIVELIHOOD_CATEGORIES = [
  { icon: "🌾", title: "FPOs Network", href: "/fpos", desc: "15 Producer Collectives across Mandals", count: "30,430 Farmers", color: "#15803D", bg: "#DCFCE7", border: "#BBF7D0" },
  { icon: "👩‍💼", title: "Women Entrepreneurship", href: "/women-entrepreneurship", desc: "4,030 Micro-Enterprises & PMFME Hubs", count: "₹40.97 Cr Disbursed", color: "#D97706", bg: "#FEF3C7", border: "#FDE68A" },
  { icon: "👨‍👩‍👧‍👦", title: "One Family One Entrepreneur", href: "/one-family-one-entrepreneur", desc: "Cluster-based household enterprises", count: "32,840 SHGs", color: "#7C3AED", bg: "#F3E8FF", border: "#E9D5FF" },
  { icon: "🤝", title: "SERP & NRLM Welfare", href: "/serp-corner", desc: "Vaddi Leni Runalu & Community Recovery", count: "98.59% Repayment", color: "#1D4ED8", bg: "#EFF6FF", border: "#BFDBFE" },
  { icon: "🏺", title: "Artisans & Handloom Mart", href: "/mart", desc: "Bobbili Veenas, Jute Craft & Tribal Honey", count: "District Mart", color: "#C026D3", bg: "#FAE8FF", border: "#F5D0FE" },
];

// Authentic Livelihood Projects in Vizianagaram District
const LIVELIHOOD_PROJECTS = [
  {
    id: "cashew-processing-cluster",
    category: "Value Addition & Processing",
    title: "Cashew Processing & Mechanized Shelling Cluster",
    teluguTitle: "జీడిపప్పు ప్రాసెసింగ్ మరియు ఎగుమతి క్లస్టర్",
    desc: "Empowering 20 tribal youth with automated multi-tier solar dryers and nitrogen flushing packaging for premium W-240 kernel export.",
    location: "Bobbili & Makkuva Market Yards",
    mandal: "Bobbili",
    stats: "₹77.60 Lakh Revenue",
    progress: 92,
    beneficiaries: "20 Core Staff • 450 Cashew Farmers",
    img: "/images/enterprise-cashew.jpg",
    statusBadge: "High Export Margin",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
  },
  {
    id: "millet-processing-unit",
    category: "Nutri-Cereal Innovation",
    title: "Tribal Millets & De-Stoning Enterprise Unit",
    teluguTitle: "చిరుధాన్యాల ప్రాసెసింగ్ మరియు పోషకాహార యూనిట్",
    desc: "Community-managed grading, de-husking, and value addition for Finger Millet (Ragi), Foxtail, and Kodo Rice directly linked to AP Agros.",
    location: "Gummalaxmipuram & Jiyyammavalasa",
    mandal: "Gummalaxmipuram",
    stats: "₹1.50 Lakh Monthly Sales",
    progress: 88,
    beneficiaries: "350 SHG Women Farmers",
    img: "/images/enterprise-millets.jpg",
    statusBadge: "PMFME Supported",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
  },
  {
    id: "hill-broom-tribal-mission",
    category: "Tribal Forestry & Craft",
    title: "Hill Broom Processing & Direct Value Chain",
    teluguTitle: "కొండ చీపుర్ల తయారీ మరియు గిరిజన జీవనోపాధి ప్రాజెక్ట్",
    desc: "Large-scale tribal enterprise manufacturing durable hill brooms, eliminating middlemen and securing direct retail tie-ups across AP and Odisha.",
    location: "Seethampeta & Pachipenta Tracts",
    mandal: "Seethampeta",
    stats: "64.80 Lakh Brooms/Year",
    progress: 95,
    beneficiaries: "450 Rural Women • 2,500 Harvesters",
    img: "/images/shg-outdoor-real.jpg",
    statusBadge: "100% Target Met",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
  },
  {
    id: "bamboo-mission-plantations",
    category: "National Bamboo Mission",
    title: "Commercial Bamboo Mission & Agro-Forestry",
    teluguTitle: "జాతీయ వెదురు సాగు మిషన్ మరియు ఫర్నిచర్ కేంద్రం",
    desc: "Commercial bamboo sapling establishment across 481 smallholder plots supplying high-tensile canes for furniture and scaffolding.",
    location: "Bhamini & Kurupam Agency Tracts",
    mandal: "Bhamini",
    stats: "28,860 Plants Established",
    progress: 100,
    beneficiaries: "481 Smallholder Tribal Families",
    img: "/images/hero-rural-community.jpg",
    statusBadge: "100% Target Met",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
  },
  {
    id: "exotic-vegetable-clusters",
    category: "High-Value Horticulture",
    title: "Tribal Exotic Vegetable Polyhouse Farming",
    teluguTitle: "గిరిజన ప్రాంతాల్లో హై-వాల్యూ విదేశీ కూరగాయల సాగు",
    desc: "Cultivation of export-grade colored capsicum, broccoli, and cherry tomatoes in climate-controlled polyhouses supplying metropolitan markets.",
    location: "Kandivalasa & Kummarigunta",
    mandal: "Komarada",
    stats: "Premium Market Margins",
    progress: 84,
    beneficiaries: "120 Tribal Farmers",
    img: "/images/farmer-support-real.jpg",
    statusBadge: "High Income Track",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
  },
  {
    id: "banana-pseudo-stem-fiber",
    category: "Circular Bio-Economy",
    title: "Banana Pseudo-Stem Fiber Extraction Plants",
    teluguTitle: "అరటి వ్యర్థాల నుంచి పర్యావరణ అనుకూల నార తయారీ",
    desc: "Converting agricultural post-harvest banana stems into biodegradable textile-grade fiber and organic liquid bio-fertilizer for local farms.",
    location: "Seethanagaram & Bobbili Valley",
    mandal: "Seethanagaram",
    stats: "5,500 Hectares Covered",
    progress: 79,
    beneficiaries: "80 SHG Fiber Artisans",
    img: "/images/agri-tractor.jpg",
    statusBadge: "Eco Enterprise",
    badgeColor: "#1D4ED8",
    badgeBg: "#EFF6FF",
  },
];

export default function LivelihoodsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* 1. MASTER EDITORIAL TOP HERO SECTION */}
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
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.75rem" }}>
              Rural Livelihoods & Enterprise
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
                COMMUNITY ENTERPRISE & SUSTAINABLE EMPLOYMENT
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
                Livelihood Projects
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
                విజయనగరం జిల్లా జీవనోపాధి ప్రాజెక్టులు & సమగ్ర గ్రామీణాభివృద్ధి
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
                Catalyzing community-owned enterprises, value addition processing units, and sustainable income security for SHG women collectives, tribal artisans, and smallholder farmers across all 27 Mandals of Vizianagaram.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/schemes"
                  variant="contained"
                  startIcon={<AccountBalanceWalletRoundedIcon sx={{ fontSize: 15 }} />}
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
                  Explore Support Schemes
                </Button>

                <Button
                  component={Link}
                  href="/fpos"
                  variant="outlined"
                  startIcon={<SpaRoundedIcon sx={{ fontSize: 15 }} />}
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
                  View 15 FPOs Network
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
                  src="/images/enterprise-cashew.jpg"
                  alt="Cashew & Agro-Processing Enterprise Unit in Vizianagaram"
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
                    <PrecisionManufacturingRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        4,030 Micro-Enterprises
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        ₹40.97 Cr Bank Linkage Disbursal
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="110.5% Target"
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

      {/* 2. SUB-SECTOR NAVIGATION CARDS (5 COMPACT CARDS) */}
      <Box sx={{ py: { xs: 2.5, sm: 3 }, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {LIVELIHOOD_CATEGORIES.map((cat, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
                <Paper
                  component={Link}
                  href={cat.href}
                  elevation={0}
                  sx={{
                    bgcolor: cat.bg,
                    border: `1px solid ${cat.border}`,
                    borderRadius: "12px",
                    p: 1.5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 16px -2px rgba(8, 43, 80, 0.08)",
                      borderColor: cat.color,
                    },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "1.5rem", lineHeight: 1, mb: 0.8 }}>
                      {cat.icon}
                    </Typography>
                    <Typography sx={{ color: "#082B50", fontSize: "0.8rem", fontWeight: 850, lineHeight: 1.25, mb: 0.3 }}>
                      {cat.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.66rem", lineHeight: 1.35, mb: 1 }}>
                      {cat.desc}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: cat.color, fontSize: "0.68rem", fontWeight: 800 }}>
                    {cat.count} →
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. CORE LIVELIHOOD PROJECTS (COMPACT 3-COLUMN CARDS) */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Section Header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={1}
            sx={{ mb: 2.2 }}
          >
            <Box>
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
                FLAGSHIP DISTRICT ENTERPRISES
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                Featured Livelihood Initiatives
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({LIVELIHOOD_PROJECTS.length} Active Programmes)
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              DRDA & SERP Field Implementations
            </Typography>
          </Stack>

          {/* Compact 3-Column Grid */}
          <Grid container spacing={2}>
            {LIVELIHOOD_PROJECTS.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.22s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -6px rgba(8, 43, 80, 0.1)",
                      borderColor: "#082B50",
                      "& .project-photo": { transform: "scale(1.04)" },
                    },
                  }}
                >
                  {/* Photo Thumbnail */}
                  <Box sx={{ position: "relative", height: 140, width: "100%", overflow: "hidden", bgcolor: "#FEF9C3" }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="project-photo"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(8,43,80,0.1) 0%, rgba(8,43,80,0.65) 100%)",
                      }}
                    />

                    {/* Floating Badges */}
                    <Box sx={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.92)",
                          color: "#082B50",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Chip
                        label={project.statusBadge}
                        size="small"
                        sx={{
                          bgcolor: project.badgeBg,
                          color: project.badgeColor,
                          fontWeight: 800,
                          fontSize: "0.6rem",
                          height: 20,
                          border: "1px solid rgba(0,0,0,0.06)",
                        }}
                      />
                    </Box>

                    {/* Location on photo */}
                    <Box sx={{ position: "absolute", bottom: 8, left: 10, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <LocationOnRoundedIcon sx={{ fontSize: 13, color: "#F5B800" }} />
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.68rem", fontWeight: 750 }}>
                        {project.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontSize: "0.94rem", fontWeight: 850, lineHeight: 1.3, mb: 0.4 }}>
                        {project.title}
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
                        {project.teluguTitle}
                      </Typography>

                      <Typography sx={{ color: "#475569", fontSize: "0.74rem", lineHeight: 1.45, mb: 1.5 }}>
                        {project.desc}
                      </Typography>

                      {/* Performance Bar */}
                      <Box sx={{ mb: 1.5, p: 1, bgcolor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.64rem", fontWeight: 700, textTransform: "uppercase" }}>
                            Financial / Output Stats:
                          </Typography>
                          <Typography sx={{ color: "#082B50", fontSize: "0.72rem", fontWeight: 850 }}>
                            {project.stats}
                          </Typography>
                        </Stack>
                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                          sx={{
                            height: 5,
                            borderRadius: 3,
                            bgcolor: "#E2E8F0",
                            "& .MuiLinearProgress-bar": { bgcolor: "#D97706", borderRadius: 3 },
                          }}
                        />
                        <Typography sx={{ color: "#64748B", fontSize: "0.62rem", mt: 0.5 }}>
                          Impact: {project.beneficiaries}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Bottom Action */}
                    <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                          component={Link}
                          href="/fpos"
                          fullWidth
                          size="small"
                          startIcon={<SpaRoundedIcon sx={{ fontSize: 13 }} />}
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
                          View Cluster Details
                        </Button>

                        <Button
                          component={Link}
                          href="/mart"
                          size="small"
                          sx={{
                            minWidth: 36,
                            width: 36,
                            height: 32,
                            p: 0,
                            borderRadius: "8px",
                            border: "1px solid #CBD5E1",
                            color: "#082B50",
                            "&:hover": { bgcolor: "#F1F5F9" },
                          }}
                        >
                          <StorefrontRoundedIcon sx={{ fontSize: 16 }} />
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. FOOTER EXTENSION / CITIZEN PARTNERSHIP DESK */}
      <Box sx={{ bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", py: { xs: 3.5, sm: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F8FAFC",
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
                  DRDA LIVELIHOOD INCUBATION & MARKET PROMOTION
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Want to Partner with or Source from District Collectives?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Corporates, wholesale procurement buyers, and institutional partners can directly procure processed cashew, organic millets, hill brooms, and exotic vegetables through DRDA-facilitated MoUs.
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
                    Contact DRDA Livelihoods Desk
                  </Button>

                  <Button
                    component={Link}
                    href="/mart"
                    variant="outlined"
                    startIcon={<StorefrontRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Browse District Mart Catalog
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