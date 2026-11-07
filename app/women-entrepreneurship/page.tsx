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
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";

const PROGRAMS = [
  {
    title: "PMEGP – Prime Minister's Employment Generation",
    teluguTitle: "ప్రధాన మంత్రి ఉపాధి కల్పన పథకం (PMEGP)",
    desc: "Heavily subsidized credit-linked capital assistance for micro-enterprises and manufacturing workshops with credit guarantee support.",
    target: "100 Units",
    achieved: "125 Units",
    completion: 100,
    completionLabel: "125% Achievement",
    highlight: "Surplus Target",
    color: "#15803D",
    bg: "#DCFCE7",
  },
  {
    id: "pmfme",
    title: "PMFME – Micro Food Processing Enterprises",
    teluguTitle: "పీఎం మైక్రో ఫుడ్ ప్రాసెసింగ్ పథకం (PMFME)",
    desc: "Upgradation of traditional food ventures (millet flour mills, spice grinding, cashew shelling, bakery) into formal FSSAI-compliant units.",
    target: "100 Units",
    achieved: "34 Units",
    completion: 34,
    completionLabel: "34% Progress",
    highlight: "Scaling Phase",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    id: "seed-capital",
    title: "Seed Capital & Community Investment Fund (CIF)",
    teluguTitle: "ప్రారంభ మూలధనం & సీడ్ క్యాపిటల్ సహాయం",
    desc: "Revolving micro-capital grants of ₹40,000 per SHG member for raw material purchasing, toolkits, and working operational funds.",
    target: "230 Units",
    achieved: "223 Units",
    completion: 97,
    completionLabel: "96.96% Completed",
    highlight: "98.59% Recovery",
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    id: "agey-program",
    title: "AGEY – Rural Mobility & Livelihood Carts",
    teluguTitle: "గ్రామీణ జీవనోపాధి రవాణా & ఈ-కార్టుల పంపిణీ",
    desc: "Deploying solar-powered egg carts, perishable vegetable vending e-autos, and refrigerated micro-delivery vans across rural mandals.",
    target: "26 Units",
    achieved: "26 Units",
    completion: 100,
    completionLabel: "100% Saturated",
    highlight: "Fully Completed",
    color: "#7C3AED",
    bg: "#F3E8FF",
  },
];

const SUCCESS_SECTORS = [
  {
    title: "Cashew & Agro-Processing",
    count: "1,240 Units",
    revenue: "₹14.2 Cr Mobilised",
    icon: <SpaRoundedIcon sx={{ fontSize: 20, color: "#15803D" }} />,
    desc: "Primary grading, roasting, and export packing of raw cashew kernels across Bobbili and Makkuva clusters.",
  },
  {
    title: "Millet Value Addition & Cafes",
    count: "890 Units",
    revenue: "₹8.8 Cr Mobilised",
    icon: <FastfoodRoundedIcon sx={{ fontSize: 20, color: "#D97706" }} />,
    desc: "Millet bakery goods, nutritious ragi malt, and unpolished grain packaging operated by village samakhyas.",
  },
  {
    title: "Dairy, Poultry & Livestock",
    count: "1,150 Units",
    revenue: "₹11.5 Cr Mobilised",
    icon: <PrecisionManufacturingRoundedIcon sx={{ fontSize: 20, color: "#1D4ED8" }} />,
    desc: "Bulk milk cooling units, country chicken hatcheries, and hygienic fodder feed production centres.",
  },
  {
    title: "Handlooms, Jute & Rural Craft",
    count: "750 Units",
    revenue: "₹6.4 Cr Mobilised",
    icon: <StorefrontRoundedIcon sx={{ fontSize: 20, color: "#7C3AED" }} />,
    desc: "Bobbili veena accessories, jute conference bags, and eco-friendly leaf plates direct-linked to AP Mart.",
  },
];

export default function WomenEntrepreneurshipPage() {
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
                MICRO-ENTERPRISE DEVELOPMENT • DRDA & SERP VIZIANAGARAM
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
                Women Entrepreneurship
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
                మహిళా సాధికారత - 4,030 స్వయం ఉపాధి యూనిట్లతో ₹40.97 కోట్ల రికార్డు ప్రగతి
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
                4,030 women-led micro-enterprises established against a target of 3,645 (110.56% achievement) with ₹40.97 Crores mobilized in bank linkage across all 27 Mandals of Vizianagaram. 98.59% prompt loan recovery rate setting state benchmarks.
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
                  Explore PMEGP & PMFME Subsidies
                </Button>

                <Button
                  component={Link}
                  href="/mart"
                  variant="outlined"
                  startIcon={<StorefrontRoundedIcon sx={{ fontSize: 15 }} />}
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
                  Browse SHG Products on Mart
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
                  src="/images/women-entrepreneurship-real.jpg"
                  alt="Vizianagaram Women Entrepreneurs Managing Micro-Enterprise"
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
                    <WorkspacePremiumRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        4,030 Micro-Enterprises
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        ₹40.97 Cr Total Mobilisation
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="110.56% Target"
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

      {/* 2. CORE STATS BAR */}
      <Box sx={{ bgcolor: "#F8FAFC", py: 2, borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {[
              { label: "Units Established", val: "4,030 Units", sub: "Annual Target: 3,645", color: "#15803D" },
              { label: "Target Achievement", val: "110.56%", sub: "385+ Units Over Target", color: "#D97706" },
              { label: "Capital Disbursed", val: "₹40.97 Crores", sub: "Target: ₹40.11 Crores", color: "#082B50" },
              { label: "Bank Recovery SLA", val: "98.59%", sub: "District Benchmark Rate", color: "#7C3AED" },
            ].map((stat, idx) => (
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
                    {stat.val}
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

      {/* 3. PROGRAMMES PIPELINE & PERFORMANCE BARS */}
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
              CENTRAL & STATE ENTERPRISE INITIATIVES
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Performance Across Flagship Credit Lines
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {PROGRAMS.map((prog, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6 }}>
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
                      borderColor: prog.color,
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Chip
                        label={prog.highlight}
                        size="small"
                        sx={{
                          bgcolor: prog.bg,
                          color: prog.color,
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Typography sx={{ color: "#082B50", fontSize: "0.74rem", fontWeight: 800 }}>
                        {prog.achieved} / {prog.target}
                      </Typography>
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.96rem", fontWeight: 850, mb: 0.3 }}>
                      {prog.title}
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
                      {prog.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.76rem", lineHeight: 1.45, mb: 1.5 }}>
                      {prog.desc}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography sx={{ color: "#64748B", fontSize: "0.64rem", fontWeight: 700 }}>
                        Progress Completion
                      </Typography>
                      <Typography sx={{ color: prog.color, fontSize: "0.7rem", fontWeight: 850 }}>
                        {prog.completionLabel}
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={prog.completion > 100 ? 100 : prog.completion}
                      sx={{
                        height: 5,
                        borderRadius: 3,
                        bgcolor: "#E2E8F0",
                        "& .MuiLinearProgress-bar": { bgcolor: prog.color, borderRadius: 3 },
                      }}
                    />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. KEY ENTERPRISE SECTORS IN VIZIANAGARAM */}
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
              DISTRICT PRODUCTION CLUSTERS
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Primary Enterprise Sectors Powered by SHGs
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {SUCCESS_SECTORS.map((sector, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, lg: 3 }}>
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
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1.2 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "8px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid #E2E8F0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {sector.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#082B50", fontSize: "0.88rem", fontWeight: 850, lineHeight: 1.25 }}>
                          {sector.title}
                        </Typography>
                        <Typography sx={{ color: "#D97706", fontSize: "0.68rem", fontWeight: 800 }}>
                          {sector.count}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography sx={{ color: "#475569", fontSize: "0.74rem", lineHeight: 1.45, mb: 1.5 }}>
                      {sector.desc}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 1, borderTop: "1px solid #E2E8F0" }}>
                    <Typography sx={{ color: "#082B50", fontSize: "0.72rem", fontWeight: 800 }}>
                      Financial Impact: {sector.revenue}
                    </Typography>
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
                  DISTRICT SHG ENTERPRISE CELL
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Want to Launch a New Women-Led Enterprise?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  SHG members can visit their Mandal Samakhya or Grama Sachivalayam to apply for subsidized PMEGP credit lines, PMFME food processing equipment subsidies, and zero-interest bank loans.
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
                    Call DRDA Enterprise Desk
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
                    Visit District Mart
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