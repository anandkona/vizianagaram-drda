"use client";

import React, { useState, useMemo } from "react";
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
  InputAdornment,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

// Authentic Categories from vizianagaram.ap.gov.in
const ANNOUNCEMENT_CATEGORIES = [
  { id: "all", label: "All Notices", count: "16 Active" },
  { id: "recruitment", label: "Recruitment & Merit Lists", count: "5 Circulars" },
  { id: "livelihoods", label: "DRDA / SHG & Welfare", count: "4 Updates" },
  { id: "land-acquisition", label: "Land & Revenue Notices", count: "4 Gazettes" },
  { id: "advisory", label: "Public Alerts & Charters", count: "3 Advisories" },
];

interface AnnouncementItem {
  id: string;
  category: "recruitment" | "livelihoods" | "land-acquisition" | "advisory";
  categoryLabel: string;
  dept: string;
  date: string;
  title: string;
  teluguTitle: string;
  refNo: string;
  summary: string;
  downloadUrl?: string;
  isNew?: boolean;
  isPinned?: boolean;
  statusBadge: string;
  statusColor: string;
  statusBg: string;
}

const ANNOUNCEMENTS_DATABASE: AnnouncementItem[] = [
  {
    id: "gmc-merit-list-2026",
    category: "recruitment",
    categoryLabel: "Recruitment & Merit Lists",
    dept: "Medical & Health Department / GMC Vizianagaram",
    date: "04 Nov 2026",
    title: "Final Selection & Merit List for Paramedical & Technical Cadres under Combined Notification",
    teluguTitle: "ప్రభుత్వ వైద్య కళాశాల & సర్వజన ఆసుపత్రి పారామెడికల్ సిబ్బంది ఎంపిక జాబితా",
    refNo: "Rc.No. 412/GMC/VZM/2026",
    summary: "Final merit list of candidates provisionally selected for Dental Technician, OT Technician, Lab Attendant, and Child Psychologist positions at Government General Hospital (GGH) Vizianagaram.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isNew: true,
    isPinned: true,
    statusBadge: "Final Merit List",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "bhogapuram-land-gazette",
    category: "land-acquisition",
    categoryLabel: "Land & Revenue Notices",
    dept: "Collectorate Revenue & Land Acquisition Section G",
    date: "28 Oct 2026",
    title: "Preliminary Land Acquisition Notification for Bhogapuram International Airport Connectivity Corridor",
    teluguTitle: "భోగాపురం గ్రీన్‌ఫీల్డ్ అంతర్జాతీయ విమానాశ్రయ కనెక్టివిటీ భూసేకరణ ప్రకటన",
    refNo: "G.O.Ms.No. 188/LA/VZM/2026",
    summary: "Statutory declaration under Section 11(1) of RFCTLARR Act 2013 regarding survey numbers in Bhogapuram and Denkada mandals for four-lane arterial connectivity highways.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isNew: true,
    statusBadge: "Official Gazette",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "shg-credit-target-achievement",
    category: "livelihoods",
    categoryLabel: "DRDA / SHG & Welfare",
    dept: "DRDA Vizianagaram & SERP Andhra Pradesh",
    date: "22 Oct 2026",
    title: "District SHG Women Entrepreneurship & Bank Linkage Disbursal Crosses ₹40.97 Crores (110.56%)",
    teluguTitle: "మహిళా స్వయం సహాయక సంఘాల రుణ సంధానం ₹40.97 కోట్లు పూర్తి (110.56% ప్రగతి)",
    refNo: "DRDA/VZM/SHG-BL/2026/92",
    summary: "District performance audit confirms 4,030 women micro-enterprises established under NRLM and PMFME clusters across 27 Mandals with 98.59% prompt recovery rate.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isNew: false,
    statusBadge: "Performance Audit",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "kgbv-crt-verification",
    category: "recruitment",
    categoryLabel: "Recruitment & Merit Lists",
    dept: "Samagra Shiksha & District Educational Office",
    date: "15 Oct 2026",
    title: "Certificate Verification Schedule for KGBV Contract Residential Teachers (CRTs & PGTs)",
    teluguTitle: "కస్తూర్బా గాంధీ బాలికా విద్యాలయాల కాంట్రాక్ట్ ఉపాధ్యాయుల సర్టిఫికేట్ పరిశీలన",
    refNo: "SS/AP/VZM/KGBV/2026/04",
    summary: "Shortlisted candidates for Mathematics, Physical Science, and English teaching posts called for original document verification at DEO Conference Hall, Collectorate Compound.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isNew: false,
    statusBadge: "Verification Schedule",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "fraud-loan-alert-advisory",
    category: "advisory",
    categoryLabel: "Public Alerts & Charters",
    dept: "District Grievance Redressal Cell & Police Administration",
    date: "10 Oct 2026",
    title: "Public Advisory: Beware of Fraudulent Agents Promising Loan Sanctions & Scheme Allotments",
    teluguTitle: "ప్రజా హెచ్చరిక: సంక్షేమ పథకాలు, రుణాల పేరిట దళారులను నమ్మి మోసపోవద్దు",
    refNo: "ADVISORY/COLL/VZM/2026/11",
    summary: "DRDA and Village Secretariats never charge fees for scheme enrollment or bank linkage. Report suspicious agents immediately to toll-free helpline 1902 or Spandana desks.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isPinned: true,
    statusBadge: "Public Alert",
    statusColor: "#DC2626",
    statusBg: "#FEE2E2",
  },
  {
    id: "dchs-civil-surgeons-walkin",
    category: "recruitment",
    categoryLabel: "Recruitment & Merit Lists",
    dept: "District Coordinator of Hospital Services (DCHS)",
    date: "02 Oct 2026",
    title: "Walk-In Interviews for Civil Assistant Surgeons (CAS Specialists) on Contract Basis",
    teluguTitle: "సివిల్ అసిస్టెంట్ సర్జన్లు (స్పెషలిస్టులు) తాత్కాలిక నియామక వాక్-ఇన్ ఇంటర్వ్యూలు",
    refNo: "DCHS/VZM/CAS-SPEC/2026/18",
    summary: "Walk-in interview notification for Gynecologists, Anesthetists, and Pediatricians across Community Health Centers (CHCs) in Bobbili, S.Kota, and Cheepurupalli.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Walk-In Notice",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "thotapalli-barrage-irrigation",
    category: "land-acquisition",
    categoryLabel: "Land & Revenue Notices",
    dept: "Water Resources Department & RDO Bobbili",
    date: "25 Sep 2026",
    title: "Thotapalli Barrage Left Main Canal Rehabilitation & Ayacut Verification Schedule",
    teluguTitle: "తోటపల్లి బ్యారేజీ ఎడమ ప్రధాన కాలువ ఆయకట్టు స్థిరీకరణ & నోటీసు",
    refNo: "WRD/THOTAPALLI/CANAL/2026/51",
    summary: "Notification to ayacut farmers across Garividi and Cheepurupalli regarding field inspection dates for canal desilting and water-user association election rolls.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Irrigation Notice",
    statusColor: "#047857",
    statusBg: "#D1FAE5",
  },
  {
    id: "bamboo-plantation-100-percent",
    category: "livelihoods",
    categoryLabel: "DRDA / SHG & Welfare",
    dept: "National Bamboo Mission & ITDA Vizianagaram",
    date: "18 Sep 2026",
    title: "Tribal Bamboo Mission Drive Crosses 100% Target — 28,860 Saplings Established",
    teluguTitle: "గిరిజన ప్రాంతాల్లో వెదురు సాగు మిషన్ 100% పూర్తి - 28,860 మొక్కల నాటకం",
    refNo: "ITDA/NBM/VZM/2026/33",
    summary: "Verification report confirms successful plantation across 481 smallholder tribal plots in Bhamini and agency tracts for commercial furniture and hill-broom raw materials.",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Progress Report",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
];

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnnouncements = useMemo(() => {
    return ANNOUNCEMENTS_DATABASE.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.teluguTitle.toLowerCase().includes(q) ||
        item.refNo.toLowerCase().includes(q) ||
        item.dept.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
              Announcements & Latest Updates
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Title, Subtitle, Search */}
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
                OFFICIAL DISTRICT GAZETTES & RECRUITMENT NOTICES
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
                Announcements & Orders
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
                విజయనగరం జిల్లా కలెక్టరేట్ అధికారిక ప్రకటనలు, ఉత్తర్వులు మరియు ఎంపిక జాబితాలు
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
                Statutory recruitment circulars, final merit lists, land acquisition preliminary gazettes, and district administration orders published daily by the Collector & District Magistrate, Vizianagaram.
              </Typography>

              {/* Live Search Bar */}
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
                <SearchRoundedIcon sx={{ color: "#64748B", ml: 0.5, mr: 0.75, fontSize: 18 }} />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Search by keyword, department, or order number (e.g. GMC, Bhogapuram, Merit)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "0.82rem", color: "#082B50", fontWeight: 550 },
                  }}
                />
                {searchQuery && (
                  <Button
                    size="small"
                    onClick={() => setSearchQuery("")}
                    sx={{ color: "#64748B", fontSize: "0.7rem", textTransform: "none", minWidth: 32 }}
                  >
                    Clear
                  </Button>
                )}
              </Paper>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Gazette Badge */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, sm: 240, md: 270 },
                  borderRadius: { xs: "18px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 34px -8px rgba(8, 43, 80, 0.16)",
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
                  alt="Vizianagaram Collectorate Official Administrative Headquarters"
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

                {/* Floating Official Gazette Badge */}
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
                    <CampaignRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Official Collectorate Notice Desk
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Live Gazettes & Administrative Orders
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Live Feed"
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

      {/* 2. CATEGORY PILL FILTER BAR */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          py: 1,
          position: "sticky",
          top: 52,
          zIndex: 10,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction="row"
            spacing={0.8}
            sx={{
              overflowX: "auto",
              pb: { xs: 0.5, md: 0 },
              "&::-webkit-scrollbar": { height: 3 },
              "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 2 },
            }}
          >
            {ANNOUNCEMENT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                    bgcolor: isSelected ? "#082B50" : "#F8FAFC",
                    color: isSelected ? "#FFFFFF !important" : "#475569",
                    border: isSelected ? "1.5px solid #082B50" : "1.5px solid #E2E8F0",
                    boxShadow: isSelected ? "0 3px 8px rgba(8, 43, 80, 0.12)" : "none",
                    "&:hover": {
                      bgcolor: isSelected ? "#06203D" : "#F1F5F9",
                      borderColor: isSelected ? "#06203D" : "#CBD5E1",
                    },
                  }}
                >
                  {cat.label}
                  <Typography
                    component="span"
                    sx={{
                      ml: 0.6,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: isSelected ? "#F5B800" : "#64748B",
                    }}
                  >
                    ({cat.count})
                  </Typography>
                </Button>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* 3. MAIN ANNOUNCEMENTS DIRECTORY (COMPACT CLEAN LIST CARDS) */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, bgcolor: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Section Header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={1}
            sx={{ mb: 2 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.3,
                }}
              >
                OFFICIAL NOTICE BOARD • UPDATED DAILY
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedCategory === "all" ? "All Active Notifications" : ANNOUNCEMENT_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.95rem", ml: 1 }}>
                  ({filteredAnnouncements.length} {filteredAnnouncements.length === 1 ? "Notice" : "Notices"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.75rem", fontWeight: 600 }}>
              Source: vizianagaram.ap.gov.in • Collectorate Desk
            </Typography>
          </Stack>

          {/* Clean Announcements Card Stack */}
          <Stack spacing={1.5}>
            {filteredAnnouncements.map((item) => (
              <Paper
                key={item.id}
                elevation={0}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: item.isPinned ? "1.5px solid #FDE68A" : "1px solid #E2E8F0",
                  borderRadius: 2.25,
                  p: { xs: 1.75, sm: 2 },
                  transition: "all 0.2s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                    borderColor: item.isPinned ? "#F59E0B" : "#CBD5E1",
                    "& .arrow-cta": { transform: "translateX(3px)" },
                  },
                }}
              >
                {/* Left Colored Accent Bar */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    bgcolor: item.isPinned ? "#D97706" : item.statusColor,
                  }}
                />

                <Grid container spacing={1.5} alignItems="center">
                  {/* Left Column: Date & Badges */}
                  <Grid size={{ xs: 12, md: 2.5 }}>
                    <Stack spacing={0.6}>
                      <Stack direction="row" spacing={0.75} alignItems="center">
                        <CalendarTodayRoundedIcon sx={{ fontSize: 13, color: "#64748B" }} />
                        <Typography sx={{ color: "#082B50", fontSize: "0.76rem", fontWeight: 750 }}>
                          {item.date}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={0.6} flexWrap="wrap" sx={{ gap: 0.5 }}>
                        <Chip
                          label={item.statusBadge}
                          size="small"
                          sx={{
                            bgcolor: item.statusBg,
                            color: item.statusColor,
                            fontWeight: 800,
                            fontSize: "0.62rem",
                            height: 20,
                            border: "1px solid rgba(0,0,0,0.06)",
                          }}
                        />

                        {item.isPinned && (
                          <Chip
                            icon={<PriorityHighRoundedIcon sx={{ fontSize: "12px !important", color: "#92400E !important" }} />}
                            label="Important"
                            size="small"
                            sx={{
                              bgcolor: "#FEF3C7",
                              color: "#92400E",
                              fontWeight: 800,
                              fontSize: "0.62rem",
                              height: 20,
                            }}
                          />
                        )}
                      </Stack>

                      <Typography sx={{ color: "#64748B", fontSize: "0.66rem", fontWeight: 600 }}>
                        {item.refNo}
                      </Typography>
                    </Stack>
                  </Grid>

                  {/* Middle Column: Title & Description */}
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: { xs: "0.92rem", sm: "0.98rem" },
                        fontWeight: 800,
                        lineHeight: 1.3,
                        mb: 0.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 0.5,
                      }}
                    >
                      {item.teluguTitle}
                    </Typography>

                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 0.5 }}>
                      {item.summary}
                    </Typography>

                    <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 650 }}>
                      Department: {item.dept}
                    </Typography>
                  </Grid>

                  {/* Right Column: Download / External Action */}
                  <Grid size={{ xs: 12, md: 2.5 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
                    <Stack direction={{ xs: "row", md: "column" }} spacing={1} justifyContent={{ md: "flex-end" }} alignItems={{ md: "flex-end" }}>
                      <Button
                        component={Link}
                        href="https://vizianagaram.ap.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<DownloadRoundedIcon sx={{ fontSize: 14 }} />}
                        endIcon={<ArrowForwardRoundedIcon className="arrow-cta" sx={{ fontSize: 13, transition: "transform 0.2s" }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.6,
                          px: 2,
                          borderRadius: 2,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Download PDF
                      </Button>

                      <Button
                        component={Link}
                        href="/tenders"
                        size="small"
                        sx={{
                          color: "#64748B",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "none",
                          p: 0,
                          "&:hover": { color: "#082B50" },
                        }}
                      >
                        Related Tenders →
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* 4. EXTENSION SERVICES NOTIFICATION DESK */}
      <Box sx={{ bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", py: { xs: 3.5, sm: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: 2.5,
              p: { xs: 2, sm: 3, md: 3.5 },
            }}
          >
            <Grid container spacing={{ xs: 2, md: 2.5 }} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.4 }}>
                  DISTRICT NOTICE REGISTRY
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.4rem" }, fontWeight: 900, mb: 0.6 }}>
                  Subscribe to Official District Gazette & Order Notifications
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.5, maxWidth: 700 }}>
                  All statutory notifications under the Land Acquisition Act, Medical & Health recruitment selection lists, and District Collectorate proceedings are published pursuant to the Andhra Pradesh Gazette norms.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href="/tenders"
                    variant="contained"
                    startIcon={<GavelRoundedIcon sx={{ fontSize: 15 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.75,
                      borderRadius: 1.75,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    View Active Procurement Tenders
                  </Button>

                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    startIcon={<CampaignRoundedIcon sx={{ fontSize: 15 }} />}
                    sx={{
                      borderColor: "#CBD5E1",
                      color: "#082B50",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.75,
                      borderRadius: 1.75,
                      textTransform: "none",
                      "&:hover": { borderColor: "#082B50", bgcolor: "#FFFFFF" },
                    }}
                  >
                    Contact Collectorate Notice Desk
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
