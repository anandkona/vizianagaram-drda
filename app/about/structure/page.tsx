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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";

// Authentic Revenue Divisions & Mandals from https://vizianagaram.ap.gov.in/
const REVENUE_DIVISIONS = [
  {
    id: "all",
    name: "All Divisions",
    mandalsCount: 27,
    villagesCount: 982,
    headquarters: "Vizianagaram",
  },
  {
    id: "vizianagaram",
    name: "Vizianagaram Revenue Division",
    mandalsCount: 11,
    villagesCount: 326,
    headquarters: "Vizianagaram City",
    officer: "Revenue Divisional Officer (RDO), Vizianagaram",
    contact: "08922-276380",
    mandals: [
      { name: "Vizianagaram (Urban & Rural)", telugu: "విజయనగరం", villages: 15, hq: "Vizianagaram", type: "City & Mandal" },
      { name: "Gantyada", telugu: "గంట్యాడ", villages: 45, hq: "Gantyada", type: "Rural Mandal" },
      { name: "Pusapatirega", telugu: "పూసపాటిరేగ", villages: 37, hq: "Pusapatirega", type: "Coastal Mandal" },
      { name: "Denkada", telugu: "డెంకాడ", villages: 27, hq: "Denkada", type: "Rural Mandal" },
      { name: "Bhogapuram", telugu: "భోగాపురం", villages: 21, hq: "Bhogapuram", type: "Airport & Coastal Corridor" },
      { name: "Srungavarapukota (S.Kota)", telugu: "శృంగవరపుకోట", villages: 40, hq: "S.Kota", type: "Valley & Hills" },
      { name: "Jami", telugu: "జామి", villages: 28, hq: "Jami", type: "Rural Mandal" },
      { name: "Vepada", telugu: "వేపాడ", villages: 39, hq: "Vepada", type: "Rural Mandal" },
      { name: "Lakkavarapukota (L.Kota)", telugu: "లక్కవరపుకోట", villages: 32, hq: "L.Kota", type: "Rural Mandal" },
      { name: "Kothavalasa", telugu: "కొత్తవలస", villages: 26, hq: "Kothavalasa", type: "Industrial Hub" },
      { name: "Nellimarla", telugu: "నెల్లిమర్ల", villages: 31, hq: "Nellimarla", type: "Semi-Urban Mandal" },
    ],
  },
  {
    id: "cheepurupalli",
    name: "Cheepurupalli Revenue Division",
    mandalsCount: 8,
    villagesCount: 310,
    headquarters: "Cheepurupalli",
    officer: "Revenue Divisional Officer (RDO), Cheepurupalli",
    contact: "08952-243222",
    mandals: [
      { name: "Cheepurupalli", telugu: "చీపురుపల్లి", villages: 31, hq: "Cheepurupalli", type: "Mandal & Division HQ" },
      { name: "Garividi", telugu: "గరివిడి", villages: 34, hq: "Garividi", type: "Manganese & Ferro Alloys" },
      { name: "Gurla", telugu: "గుర్ల", villages: 39, hq: "Gurla", type: "Agriculture Cluster" },
      { name: "Merakamudidam", telugu: "మెరకముడిదం", villages: 41, hq: "Merakamudidam", type: "Rural Mandal" },
      { name: "Rajam", telugu: "రాజాం", villages: 26, hq: "Rajam", type: "Industrial & Textile Hub" },
      { name: "Vangara", telugu: "వంగర", villages: 37, hq: "Vangara", type: "Rural River Basin" },
      { name: "Regidi Amadalavalasa", telugu: "రేగిడి ఆమదాలవలస", villages: 51, hq: "Regidi", type: "Paddy & Sugarcane" },
      { name: "Santhakaviti", telugu: "సంతకవిటి", villages: 51, hq: "Santhakaviti", type: "Agriculture Cluster" },
    ],
  },
  {
    id: "bobbili",
    name: "Bobbili Revenue Division",
    mandalsCount: 8,
    villagesCount: 346,
    headquarters: "Bobbili",
    officer: "Revenue Divisional Officer (RDO), Bobbili",
    contact: "08944-255340",
    mandals: [
      { name: "Bobbili", telugu: "బొబ్బిలి", villages: 42, hq: "Bobbili", type: "Historic Fort & Division HQ" },
      { name: "Ramabhadrapuram", telugu: "రామభద్రపురం", villages: 32, hq: "Ramabhadrapuram", type: "Agriculture Junction" },
      { name: "Badangi", telugu: "బాడాంగి", villages: 29, hq: "Badangi", type: "Rural Mandal" },
      { name: "Therlam", telugu: "తెర్లాం", villages: 50, hq: "Therlam", type: "Rural Mandal" },
      { name: "Mentada", telugu: "మెంటాడ", villages: 37, hq: "Mentada", type: "Forest Border Mandal" },
      { name: "Gajapathinagaram", telugu: "గజపతినగరం", villages: 35, hq: "Gajapathinagaram", type: "Trading & Commercial" },
      { name: "Dattirajeru", telugu: "దత్తిరాజేరు", villages: 46, hq: "Dattirajeru", type: "Rural Mandal" },
      { name: "Bondapalli", telugu: "బొండపల్లి", villages: 33, hq: "Bondapalli", type: "Agriculture Mandal" },
    ],
  },
];

// All Mandals flattened for universal search
const ALL_MANDALS = [
  ...(REVENUE_DIVISIONS[1]?.mandals || []).map((m) => ({ ...m, division: "Vizianagaram" })),
  ...(REVENUE_DIVISIONS[2]?.mandals || []).map((m) => ({ ...m, division: "Cheepurupalli" })),
  ...(REVENUE_DIVISIONS[3]?.mandals || []).map((m) => ({ ...m, division: "Bobbili" })),
];

export default function OrgStructurePage() {
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMandals = ALL_MANDALS.filter((mandal) => {
    const matchesDiv = selectedDivision === "all" || mandal.division.toLowerCase() === selectedDivision.toLowerCase();
    const matchesQuery =
      mandal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mandal.telugu.includes(searchQuery) ||
      mandal.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mandal.division.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiv && matchesQuery;
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. EDITORIAL TOP HERO SECTION (MATCHING SCHEMES/WOMEN & ABOUT/DISTRICT EXACTLY) */}
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
                DISTRICT GOVERNANCE & ADMINISTRATIVE DIVISIONS
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
                విజయనగరం జిల్లా రెవెన్యూ డివిజన్లు, మండలాలు &amp; గ్రామాల వివరాలు
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
                The administrative structure of Vizianagaram district consists of 3 Revenue Divisions (Vizianagaram, Cheepurupalli, Bobbili), 27 Mandals, and 982 Revenue Villages governed by transparent, decentralized public administration.
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component={Link}
                  href="/map"
                  startIcon={<MapRoundedIcon sx={{ fontSize: 18 }} />}
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
                  Interactive GIS Map
                </Button>

                <Button
                  component="a"
                  href="https://vizianagaram.ap.gov.in/administrative-setup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
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
                  Official District Portal
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Real Headquarters Photo Card */}
            <Grid size={{ xs: 12, md: 5.2 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 320, md: 380 },
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
                    District Collectorate &amp; Administrative Complex
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
                { value: "3", label: "Revenue Divisions", icon: <AccountBalanceRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "27", label: "Mandals", icon: <LocationCityRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "982", label: "Revenue Villages", icon: <HomeWorkRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "777", label: "Gram Panchayats", icon: <GroupsRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
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

      {/* 3. REVENUE DIVISION CARDS OVERVIEW */}
      <Box sx={{ py: 3, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 2.5 }}
          >
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                DECENTRALIZED ADMINISTRATION
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
                Revenue Divisions of Vizianagaram
              </Typography>
            </Box>

            {/* Search Input */}
            <TextField
              size="small"
              placeholder="Search mandal, division, or Telugu name..."
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

          {/* Division Selector Filter Pills */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {REVENUE_DIVISIONS.map((div) => {
              const isSelected = selectedDivision === div.id;
              return (
                <Button
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
                  sx={{
                    borderRadius: "100px",
                    px: 2.2,
                    py: 0.7,
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    textTransform: "none",
                    border: isSelected ? "1.5px solid #082B50" : "1px solid #CBD5E1",
                    bgcolor: isSelected ? "#082B50" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF !important" : "#334155",
                    boxShadow: isSelected ? "0 4px 12px rgba(8, 43, 80, 0.2)" : "none",
                    "&:hover": {
                      bgcolor: isSelected ? "#0F3A66" : "#F8FAFC",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  {div.name}
                  <Chip
                    label={`${div.mandalsCount} Mandals`}
                    size="small"
                    sx={{
                      ml: 0.8,
                      height: 18,
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      bgcolor: isSelected ? "rgba(255,255,255,0.2)" : "#E2E8F0",
                      color: isSelected ? "#FFFFFF" : "#475569",
                    }}
                  />
                </Button>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 4. MANDALS TABLE WITH DETAILED DIRECTORY DATA */}
      <Box sx={{ py: { xs: 3.5, sm: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {filteredMandals.length === 0 ? (
            <Paper sx={{ p: 4, textAlign: "center", borderRadius: "16px", bgcolor: "#FFFFFF", border: "1px dashed #CBD5E1" }}>
              <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "1.05rem", mb: 0.5 }}>
                No mandal matching &quot;{searchQuery}&quot;
              </Typography>
              <Button
                size="small"
                onClick={() => setSearchQuery("")}
                sx={{
                  bgcolor: "#082B50 !important",
                  color: "#FFFFFF !important",
                  borderRadius: "100px",
                  px: 2.5,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "none",
                  mt: 1,
                }}
              >
                Clear Search
              </Button>
            </Paper>
          ) : (
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                maxHeight: 600,
                border: "1px solid #E2E8F0",
                borderRadius: "20px",
                overflow: "auto",
                bgcolor: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
                "&::-webkit-scrollbar": { width: 8, height: 8 },
                "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 4 },
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Mandal Name &amp; Telugu Title
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Revenue Division
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Revenue Villages
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Administrative Classification
                    </TableCell>
                    <TableCell align="right" sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredMandals.map((mandal) => (
                    <TableRow
                      key={mandal.name}
                      hover
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        transition: "background-color 0.15s ease",
                      }}
                    >
                      {/* Name & Telugu */}
                      <TableCell sx={{ py: 1.8, maxWidth: 280 }}>
                        <Typography sx={{ fontWeight: 850, color: "#082B50", fontSize: "0.95rem", lineHeight: 1.25 }}>
                          {mandal.name}
                        </Typography>
                        <Typography sx={{ color: "#D97706", fontSize: "0.78rem", fontWeight: 650, mt: 0.3 }}>
                          {mandal.telugu}
                        </Typography>
                      </TableCell>

                      {/* Division */}
                      <TableCell sx={{ py: 1.8 }}>
                        <Chip
                          label={mandal.division}
                          size="small"
                          sx={{
                            bgcolor:
                              mandal.division === "Vizianagaram"
                                ? "#FEF3C7"
                                : mandal.division === "Cheepurupalli"
                                ? "#E0F2FE"
                                : "#DCFCE7",
                            color:
                              mandal.division === "Vizianagaram"
                                ? "#92400E"
                                : mandal.division === "Cheepurupalli"
                                ? "#0369A1"
                                : "#15803D",
                            fontWeight: 800,
                            fontSize: "0.72rem",
                            height: 24,
                          }}
                        />
                      </TableCell>

                      {/* Villages Count */}
                      <TableCell sx={{ py: 1.8 }}>
                        <Typography sx={{ fontWeight: 850, color: "#082B50", fontSize: "0.92rem" }}>
                          {mandal.villages} Villages
                        </Typography>
                        <Typography sx={{ color: "#64748B", fontSize: "0.72rem" }}>
                          HQ: {mandal.hq}
                        </Typography>
                      </TableCell>

                      {/* Type */}
                      <TableCell sx={{ py: 1.8 }}>
                        <Typography sx={{ color: "#334155", fontSize: "0.82rem", fontWeight: 600 }}>
                          {mandal.type}
                        </Typography>
                      </TableCell>

                      {/* Action */}
                      <TableCell align="right" sx={{ py: 1.8 }}>
                        <Button
                          component={Link}
                          href="/map"
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
                          View Map
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {/* Governance Hierarchy Cards */}
          <Box sx={{ mt: 6 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              ADMINISTRATIVE CHAIN OF COMMAND
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900, mb: 3 }}>
              Hierarchy of District Governance
            </Typography>

            <Grid container spacing={2.5}>
              {[
                {
                  tier: "LEVEL 01",
                  title: "District Administration",
                  officer: "District Collector & Magistrate (IAS)",
                  role: "Overall executive governance, developmental convergence, law & order, and citizen grievances.",
                  accent: "#082B50",
                  bg: "#E2E8F0",
                },
                {
                  tier: "LEVEL 02",
                  title: "Revenue Divisions",
                  officer: "Revenue Divisional Officers (RDOs)",
                  role: "Heading 3 divisions (Vizianagaram, Cheepurupalli, Bobbili), supervising revenue court matters and land admin.",
                  accent: "#15803D",
                  bg: "#DCFCE7",
                },
                {
                  tier: "LEVEL 03",
                  title: "Mandal Administration",
                  officer: "Tahsildar & MPDO",
                  role: "Managing 27 mandals with direct oversight of citizen certificates, agriculture, and welfare execution.",
                  accent: "#BE185D",
                  bg: "#FCE7F3",
                },
                {
                  tier: "LEVEL 04",
                  title: "Village Secretariats",
                  officer: "VRO & Panchayat Secretary",
                  role: "Decentralized last-mile public service delivery across 982 villages and 777 gram panchayats.",
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
                      label={item.tier}
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        bgcolor: item.bg,
                        color: item.accent,
                        fontWeight: 900,
                        fontSize: "0.68rem",
                        mb: 1.5,
                      }}
                    />
                    <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.05rem", mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#D97706", fontWeight: 750, fontSize: "0.78rem", mb: 1 }}>
                      {item.officer}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5, flexGrow: 1 }}>
                      {item.role}
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
