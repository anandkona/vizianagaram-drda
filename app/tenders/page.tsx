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
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

// Authentic Tenders Categories from vizianagaram.ap.gov.in & apeprocurement
const TENDER_CATEGORIES = [
  { id: "all", label: "All Tenders", count: 8 },
  { id: "works", label: "Civil & Works", count: 3 },
  { id: "goods", label: "Goods & Machinery", count: 3 },
  { id: "services", label: "Services & Logistics", count: 2 },
];

interface TenderItem {
  id: string;
  category: "works" | "goods" | "services";
  categoryLabel: string;
  dept: string;
  title: string;
  teluguTitle: string;
  tenderNoticeNo: string;
  estValue: string;
  publishedDate: string;
  closingDate: string;
  daysLeft: number;
  emdAmount: string;
  status: "Closing Soon" | "Live Bid" | "Under Evaluation" | "Awarded";
  statusBg: string;
  statusColor: string;
  portalUrl: string;
  fileSize: string;
}

const TENDERS_DATABASE: TenderItem[] = [
  {
    id: "tender-solar-dryers",
    category: "goods",
    categoryLabel: "Goods & Machinery",
    dept: "DRDA Vizianagaram / PMFME Cell",
    title: "Supply, Installation & Commissioning of Multi-Tier Solar Poly Dryers for Cashew & Spice Clusters",
    teluguTitle: "జీడిపప్పు మరియు సుగంధ ద్రవ్యాల ప్రాసెసింగ్ యూనిట్లకు సోలార్ డ్రయ్యర్ల సరఫరా",
    tenderNoticeNo: "DRDA/VZM/PMFME/2026/041",
    estValue: "₹18.50 Lakh",
    publishedDate: "28 Oct 2026",
    closingDate: "18 Nov 2026",
    daysLeft: 12,
    emdAmount: "₹37,000",
    status: "Live Bid",
    statusBg: "#DCFCE7",
    statusColor: "#15803D",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "1.6 MB",
  },
  {
    id: "tender-fpo-storage-shed",
    category: "works",
    categoryLabel: "Civil & Works",
    dept: "DRDA Infrastructure & Engineering Wing",
    title: "Construction of 500 MT Capacity Primary Aggregation & Storage Shed for Salur FPO Cluster",
    teluguTitle: "సాలూరు రైతు ఉత్పత్తిదారుల సంఘం (FPO) 500 మెట్రిక్ టన్నుల గోడౌన్ నిర్మాణం",
    tenderNoticeNo: "DRDA/VZM/WORKS/2026/039",
    estValue: "₹42.00 Lakh",
    publishedDate: "22 Oct 2026",
    closingDate: "12 Nov 2026",
    daysLeft: 6,
    emdAmount: "₹84,000",
    status: "Closing Soon",
    statusBg: "#FEF3C7",
    statusColor: "#D97706",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "2.4 MB",
  },
  {
    id: "tender-packaging-machinery",
    category: "goods",
    categoryLabel: "Goods & Machinery",
    dept: "AP Food Processing Society & DRDA",
    title: "Supply of Nitrogen Flushing Packaging Machinery & De-Stoners for Millet Enterprise Clusters",
    teluguTitle: "చిరుధాన్యాల ప్రాసెసింగ్ యూనిట్లకు నైట్రోజన్ ప్యాకేజింగ్ యంత్రాల సరఫరా",
    tenderNoticeNo: "APFPS/VZM/MILLET/2026/18",
    estValue: "₹24.80 Lakh",
    publishedDate: "15 Oct 2026",
    closingDate: "09 Nov 2026",
    daysLeft: 3,
    emdAmount: "₹50,000",
    status: "Closing Soon",
    statusBg: "#FEE2E2",
    statusColor: "#DC2626",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "1.9 MB",
  },
  {
    id: "tender-vehicle-hiring",
    category: "services",
    categoryLabel: "Services & Logistics",
    dept: "Collectorate General Administration / Transport",
    title: "Hiring of Inspection Utility Vehicles (Bolero/Innova) for District Field Officers (Annual Rate Contract)",
    teluguTitle: "జిల్లా అధికారుల తనిఖీలకు వాహనాల వార్షిక అద్దె ఒప్పందం",
    tenderNoticeNo: "COLL/VZM/TRANSPORT/2026/12",
    estValue: "₹28.00 Lakh",
    publishedDate: "05 Oct 2026",
    closingDate: "25 Oct 2026",
    daysLeft: 0,
    emdAmount: "₹56,000",
    status: "Under Evaluation",
    statusBg: "#EFF6FF",
    statusColor: "#1D4ED8",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "1.1 MB",
  },
  {
    id: "tender-shg-training-material",
    category: "goods",
    categoryLabel: "Goods & Machinery",
    dept: "DRDA Training Wing & SERP",
    title: "Printing & Supply of Bilingual Financial Literacy & Bookkeeping Manuals for 32,840 SHG VO Groups",
    teluguTitle: "32,840 స్వయం సహాయక సంఘాలకు ఆర్థిక అక్షరాస్యత మాన్యువల్స్ ముద్రణ",
    tenderNoticeNo: "DRDA/VZM/PRINT/2026/05",
    estValue: "₹8.40 Lakh",
    publishedDate: "30 Sep 2026",
    closingDate: "20 Oct 2026",
    daysLeft: 0,
    emdAmount: "₹16,800",
    status: "Awarded",
    statusBg: "#F1F5F9",
    statusColor: "#475569",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "980 KB",
  },
  {
    id: "tender-chc-civil-works",
    category: "works",
    categoryLabel: "Civil & Works",
    dept: "APMSIDC Vizianagaram Division",
    title: "Civil & Electrical Renovation of Mother & Child Care Wing at Community Health Centre, Bobbili",
    teluguTitle: "బొబ్బిలి సామాజిక ఆరోగ్య కేంద్రంలో మాతా శిశు సంరక్షణ విభాగం ఆధునీకరణ పనులు",
    tenderNoticeNo: "APMSIDC/VZM/2026/CW-88",
    estValue: "₹65.00 Lakh",
    publishedDate: "01 Nov 2026",
    closingDate: "24 Nov 2026",
    daysLeft: 18,
    emdAmount: "₹1,30,000",
    status: "Live Bid",
    statusBg: "#DCFCE7",
    statusColor: "#15803D",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "3.2 MB",
  },
  {
    id: "tender-itda-borewells",
    category: "works",
    categoryLabel: "Civil & Works",
    dept: "Tribal Welfare Engineering / ITDA",
    title: "Drilling & Energisation of 25 Agricultural Borewells for Tribal Cashew Farmers in Bhamini Tract",
    teluguTitle: "భామిని గిరిజన ప్రాంతాల్లో 25 వ్యవసాయ బోర్ల తవ్వకం మరియు విద్యుదీకరణ",
    tenderNoticeNo: "ITDA/TWED/VZM/2026/74",
    estValue: "₹34.50 Lakh",
    publishedDate: "26 Oct 2026",
    closingDate: "16 Nov 2026",
    daysLeft: 10,
    emdAmount: "₹69,000",
    status: "Live Bid",
    statusBg: "#DCFCE7",
    statusColor: "#15803D",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "2.1 MB",
  },
  {
    id: "tender-it-support-services",
    category: "services",
    categoryLabel: "Services & Logistics",
    dept: "District Collectorate IT Cell",
    title: "Facility Management & Comprehensive AMC of Desktop Hardware & LAN at 27 Mandal Secretariats",
    teluguTitle: "27 మండల కార్యాలయాలలో కంప్యూటర్ నెట్‌వర్క్ వార్షిక నిర్వహణ (AMC) ఒప్పందం",
    tenderNoticeNo: "COLL/VZM/IT/AMC/2026/09",
    estValue: "₹15.20 Lakh",
    publishedDate: "18 Sep 2026",
    closingDate: "08 Oct 2026",
    daysLeft: 0,
    emdAmount: "₹30,400",
    status: "Awarded",
    statusBg: "#F1F5F9",
    statusColor: "#475569",
    portalUrl: "https://tender.apeprocurement.gov.in",
    fileSize: "1.4 MB",
  },
];

export default function TendersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTenders = useMemo(() => {
    return TENDERS_DATABASE.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.teluguTitle.toLowerCase().includes(q) ||
        item.tenderNoticeNo.toLowerCase().includes(q) ||
        item.dept.toLowerCase().includes(q) ||
        item.estValue.toLowerCase().includes(q);
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
                ANDHRA PRADESH e-PROCUREMENT GATEWAY
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
                Tenders & Quotations
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
                విజయనగరం జిల్లా అధికారిక టెండర్లు, కొటేషన్లు మరియు కాంట్రాక్ట్ నోటీసులు
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
                Official procurement notices, civil works, equipment tenders, and rate contracts from DRDA, Collectorate, ITDA, and line departments across Vizianagaram District. All bids are processed via the AP e-Procurement portal.
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
                  placeholder="Search by tender title, department, or notice number..."
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
                  src="/images/maharaja-admin-building.jpg"
                  alt="Vizianagaram Administrative Infrastructure & Procurement Cell"
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
                    <GavelRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        e-Procurement Portal Desk
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Transparent Public Tenders & Contracts
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="AP e-Proc"
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

      {/* 2. STATS BAR & CATEGORY FILTER */}
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
            {TENDER_CATEGORIES.map((cat) => {
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

      {/* 3. STATUTORY NOTICE BANNER */}
      <Box sx={{ bgcolor: "#FFFBEB", borderBottom: "1px solid #FDE68A", py: 1 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between" spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PriorityHighRoundedIcon sx={{ fontSize: 17, color: "#D97706" }} />
              <Typography sx={{ color: "#92400E", fontSize: "0.75rem", fontWeight: 700 }}>
                Official Notice: All commercial bids must be submitted online exclusively through the Government of Andhra Pradesh e-Procurement Portal (tender.apeprocurement.gov.in). Physical bids are strictly prohibited.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                component={Link}
                href="https://tender.apeprocurement.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 13 }} />}
                sx={{
                  color: "#92400E",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  textTransform: "none",
                  p: 0,
                  "&:hover": { color: "#78350F" },
                }}
              >
                AP e-Proc Portal →
              </Button>
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
                DISTRICT PROCUREMENT REGISTER
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedCategory === "all" ? "All Tender Notices" : TENDER_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({filteredTenders.length} {filteredTenders.length === 1 ? "Notice" : "Notices"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              Official e-Procurement Repository • Vizianagaram
            </Typography>
          </Stack>

          {/* Compact 3-Column Grid */}
          <Grid container spacing={2}>
            {filteredTenders.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: item.status === "Closing Soon" ? "1.5px solid #FCD34D" : "1px solid #E2E8F0",
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
                      borderColor: item.status === "Closing Soon" ? "#F59E0B" : "#CBD5E1",
                      "& .bid-btn": { bgcolor: "#06203D" },
                    },
                  }}
                >
                  {/* Top Colored Stripe */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3.5px",
                      bgcolor: item.statusColor,
                    }}
                  />

                  {/* Card Content Top */}
                  <Box sx={{ pt: 0.5 }}>
                    {/* Status & Deadline Badges */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Chip
                        label={item.status}
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

                      {item.daysLeft > 0 ? (
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          <AccessTimeRoundedIcon sx={{ fontSize: 13, color: item.daysLeft <= 3 ? "#DC2626" : "#D97706" }} />
                          <Typography
                            sx={{
                              color: item.daysLeft <= 3 ? "#DC2626" : "#D97706",
                              fontSize: "0.7rem",
                              fontWeight: 800,
                            }}
                          >
                            {item.daysLeft} days left
                          </Typography>
                        </Stack>
                      ) : (
                        <Typography sx={{ color: "#64748B", fontSize: "0.7rem", fontWeight: 700 }}>
                          Bid Closed
                        </Typography>
                      )}
                    </Stack>

                    {/* Tender Title */}
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
                        mb: 1.2,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.teluguTitle}
                    </Typography>

                    {/* Key Metrics Grid */}
                    <Grid container spacing={1} sx={{ mb: 1.5 }}>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 1, bgcolor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase" }}>
                            Est. Value
                          </Typography>
                          <Typography sx={{ color: "#082B50", fontSize: "0.82rem", fontWeight: 850 }}>
                            {item.estValue}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 1, bgcolor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase" }}>
                            EMD Amount
                          </Typography>
                          <Typography sx={{ color: "#082B50", fontSize: "0.82rem", fontWeight: 850 }}>
                            {item.emdAmount}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 0.8, bgcolor: "#FAFAFA", borderRadius: "6px" }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.6rem", fontWeight: 650 }}>
                            Published: {item.publishedDate}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 0.8, bgcolor: "#FAFAFA", borderRadius: "6px" }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.6rem", fontWeight: 650 }}>
                            Closing: {item.closingDate}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
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
                        {item.tenderNoticeNo}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        component={Link}
                        href={item.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        size="small"
                        className="bid-btn"
                        disabled={item.status === "Awarded"}
                        startIcon={<GavelRoundedIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.65,
                          borderRadius: "8px",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                          "&.Mui-disabled": { bgcolor: "#F1F5F9", color: "#94A3B8 !important" },
                        }}
                      >
                        {item.status === "Awarded" ? "Tender Finalized" : "View & Bid on AP e-Proc"}
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
                        <FileDownloadRoundedIcon sx={{ fontSize: 16 }} />
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {filteredTenders.length === 0 && (
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
                No tender notices match your query
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.8rem", mb: 2 }}>
                Try adjusting your search terms or select "All Tenders" from the category bar.
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

      {/* 5. AP e-PROCUREMENT INSTRUCTIONS & CONTACT HELPDESK */}
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
                  BIDDER GUIDELINES & STATUTORY COMPLIANCE
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  How to Submit Bids on Andhra Pradesh e-Procurement Portal
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Participating contractors and vendors must hold a valid Class-III Digital Signature Certificate (DSC) and an active account on the AP e-Procurement portal. Bid documents, commercial BOQs, and EMD payments must be submitted online before the closing hour.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component="a"
                    href="https://tender.apeprocurement.gov.in"
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
                    Open AP e-Procurement Portal
                  </Button>

                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    startIcon={<HelpOutlineRoundedIcon sx={{ fontSize: 15 }} />}
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
                    DRDA Procurement Helpdesk
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