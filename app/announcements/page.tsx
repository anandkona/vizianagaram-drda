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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TerrainRoundedIcon from "@mui/icons-material/TerrainRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

// Authentic Categories from vizianagaram.ap.gov.in
const ANNOUNCEMENT_CATEGORIES = [
  { id: "all", label: "All Notices", count: 8 },
  { id: "recruitment", label: "Recruitment & Merit Lists", count: 3 },
  { id: "land-acquisition", label: "Land & Revenue Gazettes", count: 2 },
  { id: "livelihoods", label: "DRDA / Welfare Updates", count: 2 },
  { id: "advisory", label: "Public Alerts", count: 1 },
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
  fileSize: string;
  downloadUrl: string;
  isNew?: boolean;
  isUrgent?: boolean;
  statusBadge: string;
  statusColor: string;
  statusBg: string;
}

const ANNOUNCEMENTS_DATABASE: AnnouncementItem[] = [
  {
    id: "gmc-merit-list-2026",
    category: "recruitment",
    categoryLabel: "Recruitment & Merit Lists",
    dept: "Medical & Health / GMC Vizianagaram",
    date: "04 Nov 2026",
    title: "Final Selection & Merit List for Paramedical & Technical Cadres",
    teluguTitle: "ప్రభుత్వ వైద్య కళాశాల & సర్వజన ఆసుపత్రి పారామెడికల్ సిబ్బంది ఎంపిక జాబితా",
    refNo: "Rc.No. 412/GMC/VZM/2026",
    summary: "Provisional merit list for Dental Tech, OT Tech, Lab Attendant & Child Psychologist posts at GGH Vizianagaram.",
    fileSize: "1.4 MB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isNew: true,
    statusBadge: "Final Merit List",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "bhogapuram-land-gazette",
    category: "land-acquisition",
    categoryLabel: "Land & Revenue Gazettes",
    dept: "Collectorate Revenue Section G",
    date: "28 Oct 2026",
    title: "Preliminary Land Acquisition Notification for Bhogapuram Airport Corridors",
    teluguTitle: "భోగాపురం గ్రీన్‌ఫీల్డ్ అంతర్జాతీయ విమానాశ్రయ కనెక్టివిటీ భూసేకరణ ప్రకటన",
    refNo: "G.O.Ms.No. 188/LA/VZM/2026",
    summary: "Statutory Section 11(1) declaration of survey numbers in Bhogapuram & Denkada mandals for 4-lane arterial highways.",
    fileSize: "2.8 MB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isNew: true,
    isUrgent: true,
    statusBadge: "Official Gazette",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "fraud-loan-alert-advisory",
    category: "advisory",
    categoryLabel: "Public Alerts",
    dept: "District Grievance Redressal & Police",
    date: "10 Oct 2026",
    title: "Public Advisory: Beware of Fraudulent Agents Promising Scheme Loans",
    teluguTitle: "ప్రజా హెచ్చరిక: సంక్షేమ పథకాలు, రుణాల పేరిట దళారులను నమ్మి మోసపోవద్దు",
    refNo: "ADVISORY/COLL/VZM/2026/11",
    summary: "DRDA and Secretariats never charge fees for scheme enrollment. Report illicit middlemen to toll-free 1902.",
    fileSize: "680 KB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    isUrgent: true,
    statusBadge: "Public Alert",
    statusColor: "#DC2626",
    statusBg: "#FEE2E2",
  },
  {
    id: "kgbv-crt-verification",
    category: "recruitment",
    categoryLabel: "Recruitment & Merit Lists",
    dept: "Samagra Shiksha & DEO Office",
    date: "15 Oct 2026",
    title: "Certificate Verification Schedule for KGBV Residential Teachers (CRTs)",
    teluguTitle: "కస్తూర్బా గాంధీ బాలికా విద్యాలయాల కాంట్రాక్ట్ ఉపాధ్యాయుల సర్టిఫికేట్ పరిశీలన",
    refNo: "SS/AP/VZM/KGBV/2026/04",
    summary: "Shortlisted candidates for Maths, Physics, and English called for verification at DEO Conference Hall.",
    fileSize: "920 KB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Verification Schedule",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "shg-credit-target-achievement",
    category: "livelihoods",
    categoryLabel: "DRDA / Welfare Updates",
    dept: "DRDA Vizianagaram & SERP AP",
    date: "22 Oct 2026",
    title: "District SHG Bank Linkage Disbursal Crosses ₹40.97 Crores (110.5%)",
    teluguTitle: "మహిళా స్వయం సహాయక సంఘాల రుణ సంధానం ₹40.97 కోట్లు పూర్తి (110.56%)",
    refNo: "DRDA/VZM/SHG-BL/2026/92",
    summary: "Performance report confirming 4,030 women micro-enterprises established under PMFME clusters across 27 Mandals.",
    fileSize: "1.1 MB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Performance Audit",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "dchs-civil-surgeons-walkin",
    category: "recruitment",
    categoryLabel: "Recruitment & Merit Lists",
    dept: "DCHS Vizianagaram",
    date: "02 Oct 2026",
    title: "Walk-In Interviews for Civil Assistant Surgeons (CAS Specialists)",
    teluguTitle: "సివిల్ అసిస్టెంట్ సర్జన్లు (స్పెషలిస్టులు) తాత్కాలిక నియామక వాక్-ఇన్ ఇంటర్వ్యూలు",
    refNo: "DCHS/VZM/CAS-SPEC/2026/18",
    summary: "Walk-in interviews for Gynecologists, Anesthetists, and Pediatricians across CHCs in Bobbili and S.Kota.",
    fileSize: "850 KB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Walk-In Notice",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "thotapalli-barrage-irrigation",
    category: "land-acquisition",
    categoryLabel: "Land & Revenue Gazettes",
    dept: "Water Resources & RDO Bobbili",
    date: "25 Sep 2026",
    title: "Thotapalli Barrage Left Main Canal Rehabilitation & Ayacut Notice",
    teluguTitle: "తోటపల్లి బ్యారేజీ ఎడమ ప్రధాన కాలువ ఆయకట్టు స్థిరీకరణ & నోటీసు",
    refNo: "WRD/THOTAPALLI/2026/51",
    summary: "Inspection dates for canal desilting and water-user association voter rolls in Garividi and Cheepurupalli.",
    fileSize: "1.9 MB",
    downloadUrl: "https://vizianagaram.ap.gov.in",
    statusBadge: "Irrigation Notice",
    statusColor: "#047857",
    statusBg: "#D1FAE5",
  },
  {
    id: "bamboo-plantation-100-percent",
    category: "livelihoods",
    categoryLabel: "DRDA / Welfare Updates",
    dept: "National Bamboo Mission & ITDA",
    date: "18 Sep 2026",
    title: "Tribal Bamboo Mission Drive Crosses 100% Target — 28,860 Saplings",
    teluguTitle: "గిరిజన ప్రాంతాల్లో వెదురు సాగు మిషన్ 100% పూర్తి - 28,860 మొక్కలు",
    refNo: "ITDA/NBM/VZM/2026/33",
    summary: "Successful plantation verification across 481 smallholder tribal plots in Bhamini for commercial craft raw materials.",
    fileSize: "740 KB",
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
            {/* Left Column: Heading & Live Filter */}
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
                OFFICIAL DISTRICT GAZETTES & RECRUITMENT NOTICES
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
                Announcements & Orders
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

              {/* Compact Search Bar */}
              <Paper
                elevation={0}
                sx={{
                  p: "4px 10px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 480,
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: 2.5,
                  boxShadow: "0 2px 6px rgba(8, 43, 80, 0.04)",
                  "&:focus-within": { borderColor: "#082B50" },
                }}
              >
                <SearchRoundedIcon sx={{ color: "#64748B", mr: 1, fontSize: 18 }} />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Filter by keyword, department, or order number..."
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
                    sx={{ color: "#64748B", fontSize: "0.7rem", textTransform: "none", minWidth: 32, p: 0 }}
                  >
                    Clear
                  </Button>
                )}
              </Paper>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Gazette Badge */}
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
                  src="/images/vizianagaram-administrative-headquarters.jpg"
                  alt="Vizianagaram Collectorate Official Administrative Headquarters"
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

                {/* Floating Official Notice Desk Badge */}
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

      {/* 2. STATS STRIP & CATEGORY FILTER */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          py: 1.25,
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
            alignItems="center"
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
                    py: 0.45,
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
                      fontWeight: 750,
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

      {/* 3. URGENT PUBLIC ADVISORY STRIP */}
      <Box sx={{ bgcolor: "#FFFBEB", borderBottom: "1px solid #FDE68A", py: 1 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between" spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PriorityHighRoundedIcon sx={{ fontSize: 17, color: "#D97706" }} />
              <Typography sx={{ color: "#92400E", fontSize: "0.75rem", fontWeight: 700 }}>
                Collectorate Notice: All recruitment lists and gazettes published here are authenticated by the District Magistrate. Never pay middlemen for recruitment or scheme enrollment.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ color: "#B45309", fontSize: "0.7rem", fontWeight: 750, whiteSpace: "nowrap" }}>
                Toll-Free Helpline: 1902
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* 4. COMPACT 3-COLUMN CARD GRID */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Header */}
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
                PUBLIC ARCHIVE & GAZETTES
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedCategory === "all" ? "All Active Notifications" : ANNOUNCEMENT_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({filteredAnnouncements.length} {filteredAnnouncements.length === 1 ? "Item" : "Items"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              Updated Daily • vizianagaram.ap.gov.in
            </Typography>
          </Stack>

          {/* Compact 3-Column Grid */}
          <Grid container spacing={2}>
            {filteredAnnouncements.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: item.isUrgent ? "1.5px solid #FCD34D" : "1px solid #E2E8F0",
                    borderRadius: "14px",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.22s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -6px rgba(8, 43, 80, 0.1)",
                      borderColor: item.isUrgent ? "#F59E0B" : "#CBD5E1",
                      "& .download-btn": { bgcolor: "#06203D" },
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
                      bgcolor: item.isUrgent ? "#D97706" : item.statusColor,
                    }}
                  />

                  {/* Card Content Top */}
                  <Box sx={{ pt: 0.5 }}>
                    {/* Date & Category Badges */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Stack direction="row" alignItems="center" spacing={0.6}>
                        <CalendarTodayRoundedIcon sx={{ fontSize: 13, color: "#64748B" }} />
                        <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 700 }}>
                          {item.date}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={0.5}>
                        <Chip
                          label={item.statusBadge}
                          size="small"
                          sx={{
                            bgcolor: item.statusBg,
                            color: item.statusColor,
                            fontWeight: 800,
                            fontSize: "0.62rem",
                            height: 20,
                            border: "1px solid rgba(0,0,0,0.05)",
                          }}
                        />
                        {item.isNew && (
                          <Chip
                            label="NEW"
                            size="small"
                            sx={{
                              bgcolor: "#FEF08A",
                              color: "#854D0E",
                              fontWeight: 900,
                              fontSize: "0.58rem",
                              height: 20,
                            }}
                          />
                        )}
                      </Stack>
                    </Stack>

                    {/* Title */}
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: "0.92rem",
                        fontWeight: 850,
                        lineHeight: 1.32,
                        mb: 0.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "2.64em",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Telugu Subtitle */}
                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.teluguTitle}
                    </Typography>

                    {/* Summary Description */}
                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.74rem",
                        lineHeight: 1.45,
                        mb: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "2.9em",
                      }}
                    >
                      {item.summary}
                    </Typography>
                  </Box>

                  {/* Card Bottom Meta & Actions */}
                  <Box sx={{ pt: 1.2, borderTop: "1px solid #F1F5F9" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: "0.66rem",
                          fontWeight: 650,
                          maxWidth: "60%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.dept}
                      </Typography>

                      <Typography sx={{ color: "#94A3B8", fontSize: "0.64rem", fontWeight: 700 }}>
                        {item.refNo}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        component={Link}
                        href={item.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        size="small"
                        className="download-btn"
                        startIcon={<FileDownloadRoundedIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.65,
                          borderRadius: "8px",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Download PDF ({item.fileSize})
                      </Button>

                      <Button
                        component={Link}
                        href="https://vizianagaram.ap.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          minWidth: 36,
                          width: 36,
                          height: 32,
                          p: 0,
                          borderRadius: "8px",
                          border: "1px solid #CBD5E1",
                          color: "#082B50",
                          "&:hover": { bgcolor: "#F1F5F9", borderColor: "#082B50" },
                        }}
                      >
                        <OpenInNewRoundedIcon sx={{ fontSize: 15 }} />
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {filteredAnnouncements.length === 0 && (
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "#FFFFFF",
                borderRadius: 3,
                border: "1px dashed #CBD5E1",
              }}
            >
              <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "1rem", mb: 0.5 }}>
                No notifications match your query
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.8rem", mb: 2 }}>
                Try adjusting your search terms or select "All Notices" from the category bar.
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                sx={{
                  borderColor: "#082B50",
                  color: "#082B50",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              >
                Reset Filters
              </Button>
            </Paper>
          )}
        </Container>
      </Box>

      {/* 5. OFFICIAL GAZETTE ARCHIVE & TENDERS LINKAGE */}
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
                  DISTRICT NOTICE REGISTRY & STATUTORY REPOSITORY
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Statutory Gazette Archive & Procurement Linkage
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  All statutory notifications under the RFCTLARR Act 2013, Medical & Health paramedical selection lists, and District Collectorate administrative orders are archived pursuant to Andhra Pradesh Gazette standards.
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
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    View Active Procurement Tenders
                  </Button>

                  <Button
                    component={Link}
                    href="/pgrs"
                    variant="outlined"
                    startIcon={<CampaignRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Lodge Grievance on Spandana (1902)
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