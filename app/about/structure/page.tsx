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
  Chip,
  Breadcrumbs,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import TerrainRoundedIcon from "@mui/icons-material/TerrainRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";

export default function OrgStructurePage() {
  const [activeTab, setActiveTab] = useState<"collectorate" | "drda">("collectorate");

  // 8 Official Collectorate Sections from https://vizianagaram.ap.gov.in/administrative-setup/
  const collectorateSections = [
    { section: "Section A", title: "Establishment & Office Procedures", desc: "Service matters, staff establishment, ministerial cadre transfers, and office logistics.", icon: <AssignmentRoundedIcon sx={{ color: "#D97706", fontSize: 22 }} /> },
    { section: "Section B", title: "Accounts & Audit", desc: "Budget allocations, treasury reconciliation, departmental disbursements, and CAG audit compliance.", icon: <MonetizationOnRoundedIcon sx={{ color: "#059669", fontSize: 22 }} /> },
    { section: "Section C", title: "Magisterial & Legal Affairs", desc: "Court matters, law & order oversight, statutory magisterial inquiries, and arms license administration.", icon: <GavelRoundedIcon sx={{ color: "#2563EB", fontSize: 22 }} /> },
    { section: "Section D", title: "Land Revenue & Relief", desc: "Collection of land cess, irrigation revenue, disaster relief allocations, and drought/cyclone management.", icon: <TerrainRoundedIcon sx={{ color: "#DC2626", fontSize: 22 }} /> },
    { section: "Section E", title: "Land Administration", desc: "Government land inventories, assignment to landless poor, alienation, and patta distribution.", icon: <AccountBalanceRoundedIcon sx={{ color: "#7C3AED", fontSize: 22 }} /> },
    { section: "Section F", title: "Land Reforms & Tenancy", desc: "Implementation of agricultural land ceilings, tenancy protections, and inam settlement records.", icon: <ShieldRoundedIcon sx={{ color: "#0891B2", fontSize: 22 }} /> },
    { section: "Section G", title: "Land Acquisition", desc: "Acquisition of private land for public infrastructure (Bhogapuram Airport, National Highways, irrigation).", icon: <LocationCityRoundedIcon sx={{ color: "#EA580C", fontSize: 22 }} /> },
    { section: "Section H", title: "Protocol, Elections & Grievances", desc: "VVIP protocol, general/Panchayat elections management, PGRS public grievance monitoring.", icon: <GroupsRoundedIcon sx={{ color: "#4F46E5", fontSize: 22 }} /> },
  ];

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
            <Link href="/about/district" style={{ color: "#64748B", textDecoration: "none" }}>
              About District
            </Link>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.78rem" }}>
              Administrative Setup
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
                GOVERNANCE FRAMEWORK &amp; ORGANISATIONAL STRUCTURE
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
                Administrative Setup
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
                కలెక్టరేట్ పాలనా విభాగాలు, శాఖల బాధ్యతలు &amp; వ్యవస్థాగత నిర్మాణం
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
                Official administrative structure of Vizianagaram district under the Government of Andhra Pradesh. Headed by the District Collector &amp; Magistrate, assisted by the Joint Collector, Superintendent of Police, District Revenue Officer, and 8 specialized Collectorate functional sections.
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href="https://vizianagaram.ap.gov.in/administrative-setup/"
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
                  Official AP Portal Source
                </Button>

                <Button
                  component={Link}
                  href="/about/whos-who"
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
                  Key Officials Directory
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Real Headquarters Photo Card */}
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
                    backgroundImage: "url('/images/vizianagaram-administrative-headquarters.jpg')",
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
                    Collectorate &amp; District Administration Headquarters
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
                { value: "8 Sections", label: "Collectorate Wings (A to H)", icon: <AssignmentRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "3 Divisions", label: "Revenue Divisions", icon: <AccountBalanceRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "27 Mandals", label: "Tahsildar Jurisdictions", icon: <LocationCityRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "982 Villages", label: "Decentralized Secretariats", icon: <GroupsRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
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
                        fontSize: { xs: "1.3rem", sm: "1.7rem", md: "1.9rem" },
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

      {/* 3. VIEW TOGGLE BAR */}
      <Box sx={{ py: 2.5, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ORGANISATIONAL ARCHITECTURE
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
                {activeTab === "collectorate" ? "District Collectorate Functional Wings" : "DRDA Agency Hierarchical Tree"}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button
                onClick={() => setActiveTab("collectorate")}
                sx={{
                  borderRadius: "100px",
                  px: 2.5,
                  py: 0.8,
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  textTransform: "none",
                  border: activeTab === "collectorate" ? "1.5px solid #082B50" : "1px solid #CBD5E1",
                  bgcolor: activeTab === "collectorate" ? "#082B50" : "#FFFFFF",
                  color: activeTab === "collectorate" ? "#FFFFFF !important" : "#334155",
                  boxShadow: activeTab === "collectorate" ? "0 4px 12px rgba(8, 43, 80, 0.2)" : "none",
                }}
              >
                Collectorate 8 Sections
              </Button>
              <Button
                onClick={() => setActiveTab("drda")}
                sx={{
                  borderRadius: "100px",
                  px: 2.5,
                  py: 0.8,
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  textTransform: "none",
                  border: activeTab === "drda" ? "1.5px solid #082B50" : "1px solid #CBD5E1",
                  bgcolor: activeTab === "drda" ? "#082B50" : "#FFFFFF",
                  color: activeTab === "drda" ? "#FFFFFF !important" : "#334155",
                  boxShadow: activeTab === "drda" ? "0 4px 12px rgba(8, 43, 80, 0.2)" : "none",
                }}
              >
                DRDA Hierarchy Tree
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* 4. MAIN CONTENT AREA */}
      <Box sx={{ py: { xs: 4, sm: 5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {activeTab === "collectorate" ? (
            /* TAB 1: 8 OFFICIAL COLLECTORATE SECTIONS (Exact vizianagaram.ap.gov.in content) */
            <Box>
              {/* Executive Tier Cards */}
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                EXECUTIVE GOVERNANCE HEADS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900, mb: 3 }}>
                District Administrative Officers
              </Typography>

              <Grid container spacing={2.5} sx={{ mb: 6 }}>
                {[
                  {
                    role: "HEAD OF DISTRICT ADMINISTRATION",
                    title: "District Collector & District Magistrate (IAS)",
                    name: "Sri S. Ram Sundar Reddy, I.A.S.",
                    desc: "Statutory head of district governance, planning, law and order, general elections, and disaster relief.",
                    accent: "#082B50",
                    bg: "#E2E8F0",
                  },
                  {
                    role: "REVENUE & DEVELOPMENT",
                    title: "Joint Collector & Addl. District Magistrate (IAS)",
                    name: "Sri Sedhu Madhavan S, I.A.S.",
                    desc: "Revenue court enactments, civil supplies oversight, land administration, mines & minerals, and welfare delivery.",
                    accent: "#2563EB",
                    bg: "#EFF6FF",
                  },
                  {
                    role: "LAW & ORDER",
                    title: "Superintendent of Police (IPS)",
                    name: "Sri A. R. Damodhar, IPS",
                    desc: "Commanding the district police force, civic peace, law enforcement, traffic management, and citizen safety.",
                    accent: "#059669",
                    bg: "#ECFDF5",
                  },
                  {
                    role: "COLLECTORATE GENERAL ADMIN",
                    title: "District Revenue Officer (DRO)",
                    name: "Sri Ch. Sattibabu",
                    desc: "Special Grade Deputy Collector supervising day-to-day functions and public service across all 8 Collectorate sections.",
                    accent: "#D97706",
                    bg: "#FEF3C7",
                  },
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "18px",
                        p: 2.5,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 24px -4px rgba(8, 43, 80, 0.08)",
                          borderColor: "#CBD5E1",
                        },
                      }}
                    >
                      <Chip
                        label={item.role}
                        size="small"
                        sx={{
                          alignSelf: "flex-start",
                          bgcolor: item.bg,
                          color: item.accent,
                          fontWeight: 900,
                          fontSize: "0.66rem",
                          mb: 1.5,
                        }}
                      />
                      <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.05rem", mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#D97706", fontWeight: 750, fontSize: "0.82rem", mb: 1 }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5, flexGrow: 1 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* 8 Collectorate Sections Grid */}
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                INTERNAL COLLECTORATE DIVISIONS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900, mb: 3 }}>
                8 Collectorate Sections Designated by Government of Andhra Pradesh
              </Typography>

              <Grid container spacing={2.5}>
                {collectorateSections.map((sec) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={sec.section}>
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "18px",
                        p: 2.5,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#F5B800",
                          boxShadow: "0 10px 25px -4px rgba(8, 43, 80, 0.08)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                        <Chip
                          label={sec.section}
                          size="small"
                          sx={{
                            bgcolor: "#FEF3C7",
                            color: "#92400E",
                            fontWeight: 900,
                            fontSize: "0.72rem",
                          }}
                        />
                        {sec.icon}
                      </Stack>
                      <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "0.98rem", mb: 0.8 }}>
                        {sec.title}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.80rem", lineHeight: 1.5, flexGrow: 1 }}>
                        {sec.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            /* TAB 2: DRDA ORGANISATIONAL TREE (Matching drdamanyam.vercel.app/about/structure) */
            <Box sx={{ maxWidth: 880, mx: "auto" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                {/* Level 1: Project Director */}
                <Box
                  sx={{
                    width: 280,
                    bgcolor: "#082B50",
                    color: "#FFFFFF",
                    borderRadius: "16px",
                    p: 2.5,
                    textAlign: "center",
                    boxShadow: "0 10px 25px -5px rgba(8, 43, 80, 0.3)",
                    border: "2px solid #F5B800",
                  }}
                >
                  <Typography sx={{ fontWeight: 850, fontSize: "1.05rem" }}>Project Director (PD)</Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "#FDE68A", mt: 0.5 }}>
                    DRDA Vizianagaram
                  </Typography>
                </Box>

                {/* Connector */}
                <Box sx={{ width: 2, height: 28, bgcolor: "#082B50" }} />

                {/* Level 2: Additional Project Director */}
                <Box
                  sx={{
                    width: 280,
                    bgcolor: "#1E3A8A",
                    color: "#FFFFFF",
                    borderRadius: "16px",
                    p: 2.2,
                    textAlign: "center",
                    boxShadow: "0 8px 20px -4px rgba(30, 58, 138, 0.2)",
                  }}
                >
                  <Typography sx={{ fontWeight: 850, fontSize: "1rem" }}>Additional Project Director</Typography>
                  <Typography sx={{ fontSize: "0.74rem", color: "#BFDBFE", mt: 0.5 }}>
                    DRDA Administration
                  </Typography>
                </Box>

                {/* Connector */}
                <Box sx={{ width: 2, height: 28, bgcolor: "#64748B" }} />

                {/* Level 3: 4 DPM Wings */}
                <Box sx={{ width: "100%", pt: 1 }}>
                  <Grid container spacing={2}>
                    {[
                      { title: "DPM — NRLM", sub: "Livelihoods & SHG", icon: <TrendingUpRoundedIcon sx={{ fontSize: 18 }} /> },
                      { title: "DPM — Infrastructure", sub: "Rural Assets & Halls", icon: <LocationCityRoundedIcon sx={{ fontSize: 18 }} /> },
                      { title: "DPM — Skill Dev.", sub: "Training & Placements", icon: <SchoolRoundedIcon sx={{ fontSize: 18 }} /> },
                      { title: "Finance Officer", sub: "Accounts & Audit", icon: <MonetizationOnRoundedIcon sx={{ fontSize: 18 }} /> },
                    ].map((dpm, idx) => (
                      <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                        <Box
                          sx={{
                            bgcolor: "#FFFFFF",
                            border: "1.5px solid #CBD5E1",
                            borderRadius: "14px",
                            p: 2,
                            textAlign: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: "#F5B800",
                              bgcolor: "#FFFDF5",
                            },
                          }}
                        >
                          <Typography sx={{ fontWeight: 800, fontSize: "0.86rem", color: "#082B50" }}>
                            {dpm.title}
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#64748B", mt: 0.5 }}>
                            {dpm.sub}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Connector */}
                <Box sx={{ width: 2, height: 28, bgcolor: "#64748B" }} />

                {/* Level 4: Grassroots Operations */}
                <Grid container spacing={2.5} sx={{ width: "100%" }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        bgcolor: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        borderRadius: "16px",
                        p: 3,
                        textAlign: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: "2.2rem", fontWeight: 900, color: "#082B50", lineHeight: 1 }}>
                        27
                      </Typography>
                      <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#1E293B", mt: 0.8 }}>
                        Block Programme Managers (BPMs)
                      </Typography>
                      <Typography sx={{ fontSize: "0.75rem", color: "#64748B", mt: 0.5 }}>
                        Covering all 27 Mandals of Vizianagaram
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        bgcolor: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        borderRadius: "16px",
                        p: 3,
                        textAlign: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: "2.2rem", fontWeight: 900, color: "#082B50", lineHeight: 1 }}>
                        250+
                      </Typography>
                      <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#1E293B", mt: 0.8 }}>
                        Cluster Coordinators (CCs)
                      </Typography>
                      <Typography sx={{ fontSize: "0.75rem", color: "#64748B", mt: 0.5 }}>
                        Cluster Federations &amp; Micro-Units
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Connector */}
                <Box sx={{ width: 2, height: 28, bgcolor: "#64748B" }} />

                {/* Level 5: SHG & Community Foundation */}
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#FFFBEB",
                    border: "1.5px solid #FDE68A",
                    borderRadius: "16px",
                    p: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 850, color: "#082B50", fontSize: "1rem" }}>
                    SHG / Village Organisations / Community Resource Persons
                  </Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: "#92400E", mt: 0.8, fontWeight: 650 }}>
                    982 Villages · 777 Gram Panchayats · 22,000+ SHGs · Field-Level Saturation
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* Governance Pillars Section */}
          <Box sx={{ mt: 8 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              INSTITUTIONAL FOUNDATION
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900, mb: 3 }}>
              Key Operational Pillars
            </Typography>

            <Grid container spacing={2.5}>
              {[
                {
                  title: "Statutory Governance",
                  desc: "Governed by a statutory General Body chaired by the District Collector & District Magistrate, with periodic statutory review.",
                  icon: <AccountBalanceRoundedIcon sx={{ fontSize: 24, color: "#082B50" }} />,
                },
                {
                  title: "Decentralized Operations",
                  desc: "Block Programme Managers oversee grassroots execution across 27 mandals, coordinated through Cluster Coordinators and Village Animators.",
                  icon: <HubRoundedIcon sx={{ fontSize: 24, color: "#D97706" }} />,
                },
                {
                  title: "Inter-Agency Convergence",
                  desc: "Seamless synchronization across Agriculture, Horticulture, Health, Tribal Welfare, and Panchayati Raj for unified public delivery.",
                  icon: <BusinessRoundedIcon sx={{ fontSize: 24, color: "#059669" }} />,
                },
              ].map((pillar, idx) => (
                <Grid size={{ xs: 12, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "18px",
                      p: 3,
                      height: "100%",
                    }}
                  >
                    <Box sx={{ mb: 1.5 }}>{pillar.icon}</Box>
                    <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.05rem", mb: 0.8 }}>
                      {pillar.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.6 }}>
                      {pillar.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
