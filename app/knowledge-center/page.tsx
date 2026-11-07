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
  TextField,
  Breadcrumbs,
  Chip,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";

// Knowledge Categories matching official district areas
const KNOWLEDGE_CATEGORIES = [
  { id: "all", label: "All Resources", icon: AutoStoriesRoundedIcon, count: "24 Guides" },
  { id: "agriculture", label: "Agriculture & FPO", icon: AgricultureRoundedIcon, count: "6 Guides" },
  { id: "entrepreneurship", label: "Enterprise & MSME", icon: BusinessCenterRoundedIcon, count: "5 Guides" },
  { id: "schemes", label: "Government Schemes", icon: AccountBalanceRoundedIcon, count: "5 Guides" },
  { id: "women", label: "Women & SHG Federations", icon: GroupsRoundedIcon, count: "4 Guides" },
  { id: "finance", label: "Financial Literacy & Credit", icon: CurrencyRupeeRoundedIcon, count: "4 Guides" },
];

interface GuideArticle {
  id: string;
  category: "agriculture" | "entrepreneurship" | "schemes" | "women" | "finance";
  categoryLabel: string;
  title: string;
  teluguTitle: string;
  readTime: string;
  authorDept: string;
  summary: string;
  keyPoints: string[];
  pdfAvailable: boolean;
  image: string;
  tag: string;
}

const ARTICLES_DATABASE: GuideArticle[] = [
  {
    id: "organic-turmeric-fpo",
    category: "agriculture",
    categoryLabel: "Agriculture & FPO",
    title: "Organic Turmeric Cultivation & Processing for Tribal Agency Tracts",
    teluguTitle: "గిరిజన ప్రాంతాల్లో సేంద్రీయ పసుపు సాగు మరియు నాణ్యతా ప్రమాణాలు",
    readTime: "6 min read",
    authorDept: "Department of Agriculture & ITDA",
    summary: "Complete standard operating procedure for high-curcumin Lakadong and local turmeric cultivation across Salur and agency mandals. Details natural pest defense, harvesting, boiling, and sun-drying to meet APEDA export standards.",
    keyPoints: [
      "Soil preparation and seed rhizome selection for maximum curcumin yield.",
      "Direct buy-back protocols through GCC and local Farmer Producer Organizations (FPOs)."
    ],
    pdfAvailable: true,
    image: "/images/farmer-support-real.jpg",
    tag: "Export Standard",
  },
  {
    id: "millet-processing-shg",
    category: "entrepreneurship",
    categoryLabel: "Enterprise & MSME",
    title: "Setting Up Micro Millet Processing & Packing Units at Village Level",
    teluguTitle: "గ్రామ స్థాయిలో చిరుధాన్యాల ప్రాసెసింగ్ యూనిట్ల ఏర్పాటు మార్గదర్శకాలు",
    readTime: "7 min read",
    authorDept: "DRDA Livelihoods & PMFME Cell",
    summary: "Comprehensive guide for SHG federations and rural entrepreneurs to launch de-hulling, pulverising, and vacuum-packing units for Ragi, Foxtail, and Little Millets under the PMFME subsidy scheme.",
    keyPoints: [
      "Machinery sizing, 3-phase power requirements, and FSSAI hygiene guidelines.",
      "35% capital subsidy up to ₹10 Lakhs through District Industries Centre."
    ],
    pdfAvailable: true,
    image: "/images/enterprise-millets.jpg",
    tag: "PMFME Supported",
  },
  {
    id: "shg-bank-linkage-sop",
    category: "finance",
    categoryLabel: "Financial Literacy & Credit",
    title: "SHG Bank Linkage & Sunna Vaddi (Zero Interest) Compliance SOP",
    teluguTitle: "స్వయం సహాయక సంఘాల బ్యాంకు లింకేజ్ మరియు సున్నా వడ్డీ అర్హత నిబంధనలు",
    readTime: "5 min read",
    authorDept: "Society for Elimination of Rural Poverty (SERP)",
    summary: "Step-by-step documentation manual for Village Organizations (VOs) to prepare SHG credit linkage files, maintain Pancha Sutras, and secure 100% interest subvention under Andhra Pradesh state mandates.",
    keyPoints: [
      "Grading matrix: A-Grade criteria, audit books, and regular weekly thrift compliance.",
      "Quarterly interest reimbursement timeline directly into group savings accounts."
    ],
    pdfAvailable: true,
    image: "/images/drda-women-shg.jpg",
    tag: "Zero Interest SOP",
  },
  {
    id: "cashew-processing-clusters",
    category: "agriculture",
    categoryLabel: "Agriculture & FPO",
    title: "Raw Cashew Grading, Steam Roasting & Quality Benchmarks",
    teluguTitle: "జీడిమామిడి ప్రాసెసింగ్, ఆవిరి ఉడికించడం మరియు మార్కెటింగ్ మార్గదర్శి",
    readTime: "8 min read",
    authorDept: "Horticulture Department & MSME Desk",
    summary: "Technical guide on managing cashew nut drying, boiler steaming, cutting, peeling, and colour grading (W180, W240, W320) to maximize value realization for local grower clusters in Vizianagaram.",
    keyPoints: [
      "Optimal moisture content (< 8%) for preventing fungal spoilage during warehouse storage.",
      "Forward linkage contracts with export aggregators and major confectionery hubs."
    ],
    pdfAvailable: true,
    image: "/images/enterprise-cashew.jpg",
    tag: "Value Addition",
  },
  {
    id: "pmegp-mudra-guide",
    category: "entrepreneurship",
    categoryLabel: "Enterprise & MSME",
    title: "PMEGP & Pradhan Mantri MUDRA Yojana Application Blueprint",
    teluguTitle: "పీఎంఈజీపీ మరియు ముద్ర రుణాల దరఖాస్తు సమగ్ర సమాచార పత్రం",
    readTime: "6 min read",
    authorDept: "District Industries Centre (DIC)",
    summary: "Clear instructions for aspiring youth and rural entrepreneurs on preparing Detailed Project Reports (DPR), choosing between Shishu, Kishore, and Tarun MUDRA loans, and claiming 15%–35% margin money grants.",
    keyPoints: [
      "Project cost caps: ₹50 Lakhs for manufacturing and ₹20 Lakhs for service units.",
      "District Task Force Committee (DTFC) interview preparation and bank sanction follow-up."
    ],
    pdfAvailable: true,
    image: "/images/vizianagaram-administrative-headquarters.jpg",
    tag: "Loan Blueprint",
  },
  {
    id: "ntr-bharosa-pension-rules",
    category: "schemes",
    categoryLabel: "Government Schemes",
    title: "NTR Bharosa Social Security Pension: Eligibility & Verification Norms",
    teluguTitle: "ఎన్టీఆర్ భరోసా సామాజిక భద్రతా పింఛన్ల అర్హతలు మరియు పరిశీలన ప్రక్రియ",
    readTime: "5 min read",
    authorDept: "Social Welfare & Panchayat Raj",
    summary: "Authoritative handbook outlining statutory eligibility criteria for Old Age Pensions (₹4,000/mo), Disabled Pensions (₹6,000/mo), and Chronic Illness allowances, along with Sachivalayam verification norms.",
    keyPoints: [
      "Land ownership limits, power consumption thresholds (< 300 units/mo), and verification rules.",
      "Aadhaar biometric seeding, NPCI bank linkage, and doorstep delivery protocols."
    ],
    pdfAvailable: true,
    image: "/images/service-concern.jpg",
    tag: "Statutory Rules",
  },
  {
    id: "women-ofoe-enterprise",
    category: "women",
    categoryLabel: "Women & SHG Federations",
    title: "One Family One Entrepreneur (OFOE) Livelihood Incubation Guide",
    teluguTitle: "ఒక కుటుంబం ఒక పారిశ్రామికవేత్త పథకం - జీవనోపాధి పెంపుదల సూచనలు",
    readTime: "7 min read",
    authorDept: "DRDA Women Enterprise Division",
    summary: "Incubation blueprint detailing how SHG women can graduate from wage-earning to micro-enterprise ownership in apparel manufacturing, hill-broom production, bio-fertilizers, and rural catering collectives.",
    keyPoints: [
      "Viability assessment of 12 localized business models suited for Vizianagaram mandals.",
      "Accessing collateral-free Stree Nidhi credit up to ₹1.5 Lakhs within 48 hours."
    ],
    pdfAvailable: true,
    image: "/images/women-entrepreneurship-real.jpg",
    tag: "OFOE Incubation",
  },
  {
    id: "spandana-pgrs-guide",
    category: "schemes",
    categoryLabel: "Government Schemes",
    title: "Citizen Guide to Spandana / PGRS Grievance Redressal & SLAs",
    teluguTitle: "స్పందన ప్రజా సమస్యల పరిష్కార వేదిక - పౌరుల మార్గదర్శక కరదీపిక",
    readTime: "4 min read",
    authorDept: "Collectorate Administrative Cell",
    summary: "Clear instructions on registering public grievances via 1902 toll-free, MeeSeva counters, or Monday Spandana camps at the Collectorate, tracking petition numbers and understanding statutory SLAs.",
    keyPoints: [
      "7-day to 30-day resolution benchmarks across Revenue, Civil Supplies, and Police depts.",
      "Escalation hierarchy: From Village Secretariat up to District Collector level."
    ],
    pdfAvailable: true,
    image: "/images/vzm-collectorate-gathering-official.jpg",
    tag: "Citizen Charter",
  },
  {
    id: "digital-banking-sakhi",
    category: "finance",
    categoryLabel: "Financial Literacy & Credit",
    title: "Doorstep Banking & Micro-ATM Services via Village Bank Sakhis",
    teluguTitle: "బ్యాంక్ సఖీల ద్వారా ఇంటి వద్దకే మైక్రో-ఏటీఎం డిజిటల్ బ్యాంకింగ్ సేవలు",
    readTime: "5 min read",
    authorDept: "Lead District Bank & SERP",
    summary: "User manual explaining Aadhaar-enabled Payment Systems (AePS), doorstep cash withdrawal, direct pension disbursement, and DBT account validation powered by 812 Bank Sakhis across 777 Gram Panchayats.",
    keyPoints: [
      "Zero-fee biometric cash withdrawal for PM-KISAN, Pensions, and NREGS wages.",
      "Opening Jan Dhan zero-balance savings accounts with embedded RuPay insurance."
    ],
    pdfAvailable: true,
    image: "/images/shg-outdoor-real.jpg",
    tag: "Digital Inclusion",
  },
];

export default function KnowledgeCenterPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATABASE.filter((article) => {
      const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.teluguTitle.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.authorDept.toLowerCase().includes(q) ||
        article.tag.toLowerCase().includes(q);
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
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Title, Subtitle, Search */}
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
                DISTRICT KNOWLEDGE REPOSITORY & EXTENSION GUIDES
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
                District Knowledge Center
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
                వ్యవసాయం, స్వయం సహాయక సంఘాలు, జీవనోపాధి మరియు సంక్షేమ పథకాల సమగ్ర సమాచార వేదిక
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Official field manuals, standard operating procedures, and agribusiness handbooks published by Vizianagaram District Administration, DRDA, SERP, and Agriculture Departments for citizen empowerment across all 27 Mandals.
              </Typography>

              {/* Compact Live Search Bar */}
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
                  placeholder="Search by topic, scheme, crop or department (e.g. Millets, SHG, MUDRA)..."
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

            {/* Right Column: Hero High-Resolution Real Photography with Official Badge */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, sm: 240, md: 270 },
                  borderRadius: { xs: "18px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 34px -8px rgba(8, 43, 80, 0.16)",
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
                  src="/images/service-learning.jpg"
                  alt="Vizianagaram District Knowledge Center & Extension Training"
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

                {/* Floating Official Floating Badge */}
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
                    <LibraryBooksRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Official Extension & Training Library
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        24+ Manuals • 27 Mandals Saturation
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Free Access"
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
            {KNOWLEDGE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  startIcon={<Icon sx={{ fontSize: 15 }} />}
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

      {/* 3. MAIN ARTICLES DIRECTORY WITH 4-COLUMN COMPACT SIZED CARDS */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, bgcolor: "#FAFAFA" }}>
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
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.3,
                }}
              >
                AVAILABLE EXTENSION GUIDES & MANUALS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedCategory === "all" ? "All Curated Guides" : KNOWLEDGE_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.95rem", ml: 1 }}>
                  ({filteredArticles.length} {filteredArticles.length === 1 ? "Guide" : "Guides"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.75rem", fontWeight: 600 }}>
              Updated for FY 2026-27 • Government of Andhra Pradesh
            </Typography>
          </Stack>

          {/* Cards Grid - 4 Columns on lg/xl, 3 on md, 2 on sm for compact card size */}
          <Grid container spacing={2}>
            {filteredArticles.map((article) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={article.id}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 2.25,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 18px -4px rgba(8, 43, 80, 0.08)",
                      borderColor: "#CBD5E1",
                      "& .guide-img": { transform: "scale(1.04)" },
                      "& .arrow-cta": { transform: "translateX(2px)" },
                    },
                  }}
                >
                  {/* Compact Real Image Header (120px) */}
                  <Box sx={{ position: "relative", height: 120, width: "100%", overflow: "hidden", bgcolor: "#E2E8F0" }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="guide-img"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(8, 43, 80, 0.1) 0%, rgba(8, 43, 80, 0.65) 100%)",
                      }}
                    />

                    {/* Badge top-left */}
                    <Box sx={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}>
                      <Chip
                        label={article.categoryLabel}
                        size="small"
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                          px: 0.5,
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      />
                    </Box>

                    {/* Tag top-right */}
                    <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
                      <Chip
                        label={article.tag}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.6rem",
                          height: 20,
                          px: 0.5,
                          border: "1px solid rgba(245, 184, 0, 0.35)",
                        }}
                      />
                    </Box>

                    {/* Read time bottom-left */}
                    <Box sx={{ position: "absolute", bottom: 6, left: 8, zIndex: 2, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Typography sx={{ color: "white", fontSize: "0.65rem", fontWeight: 700 }}>
                        {article.readTime}
                      </Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.65rem" }}>•</Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.64rem", fontWeight: 600 }}>
                        {article.authorDept}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Body Content - Ultra Compact */}
                  <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: "0.86rem",
                        fontWeight: 800,
                        lineHeight: 1.25,
                        mb: 0.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "2.15rem",
                      }}
                    >
                      {article.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 0.8,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {article.teluguTitle}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.74rem",
                        lineHeight: 1.45,
                        mb: 1.2,
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {article.summary}
                    </Typography>

                    {/* Key takeaways bullet points - 1 line bullet */}
                    <Box sx={{ bgcolor: "#F8FAFC", p: 1, borderRadius: 1.25, border: "1px solid #E2E8F0", mb: 1.25 }}>
                      <Stack spacing={0.3}>
                        {article.keyPoints.slice(0, 1).map((point, pIdx) => (
                          <Stack key={pIdx} direction="row" spacing={0.5} alignItems="flex-start">
                            <CheckCircleRoundedIcon sx={{ fontSize: 12, color: "#16A34A", mt: 0.2, flexShrink: 0 }} />
                            <Typography sx={{ color: "#334155", fontSize: "0.68rem", lineHeight: 1.35, fontWeight: 550, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                              {point}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>

                    {/* Footer Actions */}
                    <Stack direction="row" spacing={0.75} alignItems="center" justifyContent="space-between" sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                      <Button
                        component={Link}
                        href="/contact"
                        size="small"
                        endIcon={<ArrowForwardRoundedIcon className="arrow-cta" sx={{ fontSize: 13, transition: "transform 0.2s" }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          px: 1.25,
                          py: 0.4,
                          borderRadius: 20,
                          fontSize: "0.68rem",
                          fontWeight: 750,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Request
                      </Button>

                      <Button
                        component={Link}
                        href="https://vizianagaram.ap.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<OpenInNewRoundedIcon sx={{ fontSize: 12 }} />}
                        sx={{
                          color: "#64748B",
                          fontSize: "0.66rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { color: "#082B50" },
                        }}
                      >
                        Portal Docs
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. EXTENSION SERVICES SUPPORT SECTION */}
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
                  DISTRICT FIELD EXTENSION DESK
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.4rem" }, fontWeight: 900, mb: 0.6 }}>
                  Need Custom Field Training or Technical Extension?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.5, maxWidth: 700 }}>
                  The DRDA Livelihoods Cell, APSSDC Skill Hubs, and Agriculture Extension Officers conduct free cluster workshops for SHGs, Rythu Bharosa Kendras (RBKs), and youth collectives across all 27 Mandals.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href="/events"
                    variant="contained"
                    startIcon={<SchoolRoundedIcon sx={{ fontSize: 15 }} />}
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
                    View Upcoming Workshops
                  </Button>

                  <Button
                    component={Link}
                    href="/ivrs"
                    variant="outlined"
                    startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Call 1902 IVRS Guidance
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
