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
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";

// SERP 4-Tier Institutional Architecture
const SERP_TIERS = [
  {
    level: "Tier 1",
    title: "Zilla Samakhya (Apex)",
    teluguTitle: "జిల్లా సమాఖ్య (శిఖరాగ్ర సంస్థ)",
    scope: "District-Wide Apex Body",
    desc: "Governed by democratically elected SHG women representatives, managing district credit planning, bank negotiations, and community disaster recovery funds.",
    coverage: "1 District Apex • All 27 Mandals",
    color: "#082B50",
    bg: "#EFF6FF",
  },
  {
    level: "Tier 2",
    title: "Mandal Samakhyas",
    teluguTitle: "మండల సమాఖ్యలు",
    scope: "Sub-District Federations",
    desc: "Mandal level administrative bodies providing bookkeeping auditing, CIF (Community Investment Fund) rotation, and Vaddi Leni Runalu reconciliation.",
    coverage: "27 Mandal Federations",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    level: "Tier 3",
    title: "Village Organizations (VOs)",
    teluguTitle: "గ్రామ సమాఖ్యలు",
    scope: "Gram Panchayat Clusters",
    desc: "Federating 15 to 30 SHGs per revenue village, coordinating health nutrition funds, collective crop input buying, and social security pensions.",
    coverage: "777 Gram Panchayats • 850 VOs",
    color: "#15803D",
    bg: "#DCFCE7",
  },
  {
    level: "Tier 4",
    title: "Self Help Groups (SHGs)",
    teluguTitle: "స్వయం సహాయక సంఘాలు (పొదుపు సంఘాలు)",
    scope: "Neighborhood Affinity Collectives",
    desc: "10 to 15 women practicing weekly internal thrift, panchasutras (regular meetings, savings, credit, repayment, books), and micro-enterprise development.",
    coverage: "32,840 Active Groups • 3.5L+ Women",
    color: "#7C3AED",
    bg: "#F3E8FF",
  },
];

// Core SERP Programs in Vizianagaram
const SERP_PROGRAMS = [
  {
    id: "vaddi-leni-runalu",
    title: "YSR Sunna Vaddi (Zero-Interest Credit)",
    teluguTitle: "వైఎస్సార్ సున్నా వడ్డీ పథకం",
    desc: "100% interest subvention credited directly into SHG bank accounts upon prompt monthly repayment. Over ₹40.97 Crores disbursed across 27 Mandals.",
    stats: "98.59% Prompt Recovery",
    progress: 98,
    badge: "100% Interest Free",
    color: "#15803D",
    bg: "#DCFCE7",
  },
  {
    id: "ysr-asara",
    title: "YSR Aasara Debt Redemption",
    teluguTitle: "వైఎస్సార్ ఆసరా రుణ విముక్తి",
    desc: "Reimbursement of outstanding SHG bank loan balances in 4 phased tranches, restoring bank creditworthiness and enabling secondary enterprise investments.",
    stats: "32,840 SHGs Benefited",
    progress: 96,
    badge: "Debt Freedom",
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    id: "ysr-cheyutha",
    title: "YSR Cheyutha Livelihood Convergence",
    teluguTitle: "వైఎస్సార్ చేయూత జీవనోపాధి సంధానం",
    desc: "Direct financial grant of ₹75,000 (over 4 years) for women aged 45–60 years from SC, ST, BC, and Minority communities for setting up grocery, dairy, and livestock units.",
    stats: "4,030 Units Established",
    progress: 91,
    badge: "Women Enterprise",
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    id: "bima-social-security",
    title: "YSR Bima & Community Social Security",
    teluguTitle: "వైఎస్సార్ బీమా సామాజిక భద్రత",
    desc: "Universal accidental and natural death insurance cover for primary breadwinners of rural SHG households with claim settlements disbursed within 21 days.",
    stats: "100% Free Coverage",
    progress: 94,
    badge: "Social Shield",
    color: "#C026D3",
    bg: "#FAE8FF",
  },
];

export default function SerpPage() {
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
              SERP Corner
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
                SOCIETY FOR ELIMINATION OF RURAL POVERTY • ANDHRA PRADESH
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
                SERP Corner
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
                గ్రామీణ పేదరిక నిర్మూలన సంస్థ - మహిళా సాధికారత మరియు స్వయం సహాయక విప్లవం
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
                Building a formidable 4-tier community institution across 27 Mandals of Vizianagaram. Over 3.5 Lakh women organized into 32,840 SHGs, championing zero-interest credit linkages, livelihood diversification, and financial independence.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/women-entrepreneurship"
                  variant="contained"
                  startIcon={<WorkspacePremiumRoundedIcon sx={{ fontSize: 15 }} />}
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
                  Women Entrepreneurship Desk
                </Button>

                <Button
                  component={Link}
                  href="/schemes"
                  variant="outlined"
                  startIcon={<AccountBalanceWalletRoundedIcon sx={{ fontSize: 15 }} />}
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
                  Sunna Vaddi & Welfare Schemes
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
                  src="/images/drda-women-shg.jpg"
                  alt="Vizianagaram Women Self Help Group Collective Meeting"
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
                    <GroupsRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        32,840 Women SHGs
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        98.59% Prompt Bank Repayment
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="SERP AP"
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

      {/* 2. STATS BAR */}
      <Box sx={{ bgcolor: "#F8FAFC", py: 2, borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {[
              { label: "Zilla Samakhya", val: "1 Apex Body", sub: "District Governing Federation", color: "#082B50" },
              { label: "Mandal Samakhyas", val: "27 Federations", sub: "100% Mandal Coverage", color: "#D97706" },
              { label: "Village Organizations", val: "850 VOs", sub: "777 Gram Panchayats", color: "#15803D" },
              { label: "SHG Member Women", val: "3.5 Lakh+", sub: "32,840 Grassroot Groups", color: "#7C3AED" },
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

      {/* 3. SERP 4-TIER INSTITUTIONAL ARCHITECTURE */}
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
              COMMUNITY-LED GOVERNANCE FRAMEWORK
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              4-Tier Institutional Architecture of SERP
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {SERP_TIERS.map((tier, idx) => (
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
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: tier.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3.5px",
                      bgcolor: tier.color,
                    }}
                  />

                  <Box sx={{ pt: 0.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Chip
                        label={tier.level}
                        size="small"
                        sx={{
                          bgcolor: tier.bg,
                          color: tier.color,
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 700 }}>
                        {tier.scope}
                      </Typography>
                    </Stack>

                    <Typography sx={{ color: "#082B50", fontSize: "0.94rem", fontWeight: 850, lineHeight: 1.3, mb: 0.3 }}>
                      {tier.title}
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
                      {tier.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1.5 }}>
                      {tier.desc}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                    <Typography sx={{ color: tier.color, fontSize: "0.7rem", fontWeight: 750 }}>
                      ✓ {tier.coverage}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. CORE LIVELIHOOD & WELFARE PROGRAMMES */}
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
              STATE WELFARE & FINANCIAL INCLUSION CONVERGENCE
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Flagship SERP Programmes in Vizianagaram
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {SERP_PROGRAMS.map((prog) => (
              <Grid key={prog.id} size={{ xs: 12, sm: 6 }}>
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
                      borderColor: prog.color,
                      bgcolor: "#FFFFFF",
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Chip
                        label={prog.badge}
                        size="small"
                        sx={{
                          bgcolor: prog.bg,
                          color: prog.color,
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Typography sx={{ color: "#082B50", fontSize: "0.72rem", fontWeight: 800 }}>
                        {prog.stats}
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

                  <Box sx={{ pt: 1, borderTop: "1px solid #E2E8F0" }}>
                    <LinearProgress
                      variant="determinate"
                      value={prog.progress}
                      sx={{
                        height: 5,
                        borderRadius: 3,
                        bgcolor: "#CBD5E1",
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

      {/* 5. FOOTER EXTENSION: DRDA & SERP COORDINATION CELL */}
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
                  DISTRICT SHG FACILITATION & HELPDESK
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Need Assistance with SHG Bookkeeping or Bank Linkage?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Contact your local Mandal Samakhya office or the DRDA SERP Cell at the District Collectorate Complex, Vizianagaram. Free facilitation provided across all 777 Gram Panchayats.
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
                    Call SERP Cell: 08922-236966
                  </Button>

                  <Button
                    component={Link}
                    href="/directory"
                    variant="outlined"
                    startIcon={<GroupsRoundedIcon sx={{ fontSize: 15 }} />}
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
                    View Mandal Coordinators Directory
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