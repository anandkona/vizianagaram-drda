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
    authorDept: "Department of Agriculture & ITDA Vizianagaram",
    summary: "Complete standard operating procedure for high-curcumin Lakadong and local turmeric cultivation across Salur and agency mandals. Details natural pest defense, harvesting, boiling, and sun-drying to meet APEDA export standards.",
    keyPoints: [
      "Soil preparation and seed rhizome selection for maximum curcumin yield.",
      "Organic mulching techniques preserving soil moisture across hill slopes.",
      "Direct buy-back protocols through GCC and local Farmer Producer Organizations (FPOs)."
    ],
    pdfAvailable: true,
    image: "/images/farmer-support-real.jpg",
    tag: "High Curcumin Standard",
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
      "Leveraging 35% capital subsidy up to ₹10 Lakhs through District Industries Centre.",
      "Branding, barcode issuance, and retail distribution via D-Mart and Rythu Bazaars."
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
      "Calculating credit ceiling: 1:4 and 1:8 loan-to-savings ratios with lead commercial banks.",
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
    authorDept: "Horticulture Department & MSME Promotion Council",
    summary: "Technical guide on managing cashew nut drying, boiler steaming, cutting, peeling, and colour grading (W180, W240, W320) to maximize value realization for local grower clusters in Vizianagaram.",
    keyPoints: [
      "Optimal moisture content (< 8%) for preventing fungal spoilage during warehouse storage.",
      "Automated peeling vs. manual knife peeling cost-benefit analysis for SHG clusters.",
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
    authorDept: "District Industries Centre (DIC) & Lead Bank Desk",
    summary: "Clear instructions for aspiring youth and rural entrepreneurs on preparing Detailed Project Reports (DPR), choosing between Shishu, Kishore, and Tarun MUDRA loans, and claiming 15%–35% margin money grants.",
    keyPoints: [
      "Project cost caps: ₹50 Lakhs for manufacturing and ₹20 Lakhs for service units.",
      "Online portal upload steps: Aadhaar, EDP training certificate, and caste credentials.",
      "District Task Force Committee (DTFC) interview preparation and bank sanction follow-up."
    ],
    pdfAvailable: true,
    image: "/images/vizianagaram-administrative-headquarters.jpg",
    tag: "Loan & Grant Blueprint",
  },
  {
    id: "ntr-bharosa-pension-rules",
    category: "schemes",
    categoryLabel: "Government Schemes",
    title: "NTR Bharosa Social Security Pension: Eligibility & Verification Norms",
    teluguTitle: "ఎన్టీఆర్ భరోసా సామాజిక భద్రతా పింఛన్ల అర్హతలు మరియు పరిశీలన ప్రక్రియ",
    readTime: "5 min read",
    authorDept: "Department of Social Welfare & Panchayat Raj",
    summary: "Authoritative handbook outlining statutory eligibility criteria for Old Age Pensions (₹4,000/mo), Disabled Pensions (₹6,000/mo), and Chronic Illness allowances, along with Sachivalayam verification norms.",
    keyPoints: [
      "Land ownership limits, power consumption thresholds (< 300 units/mo), and 4-wheeler criteria.",
      "Aadhaar biometric seeding, NPCI bank linkage, and doorstep delivery protocols.",
      "Social audit timelines, Grievance Redressal (1902), and appeals before the MPDO desk."
    ],
    pdfAvailable: true,
    image: "/images/service-concern.jpg",
    tag: "Statutory Guidelines",
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
      "Accessing collateral-free Stree Nidhi credit up to ₹1.5 Lakhs within 48 hours.",
      "Digital accounting, UPI QR installation, and customer ledger maintenance."
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
    authorDept: "Collectorate Administrative Monitoring Cell",
    summary: "Clear instructions on registering public grievances via 1902 toll-free, MeeSeva counters, or Monday Spandana camps at the Collectorate, tracking petition numbers and understanding statutory SLAs.",
    keyPoints: [
      "7-day to 30-day resolution benchmarks across Revenue, Civil Supplies, and Police depts.",
      "How to access weekly Mandal Tahsildar and MPDO hearing sessions.",
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
    authorDept: "Lead District Bank & SERP Financial Inclusion Cell",
    summary: "User manual explaining Aadhaar-enabled Payment Systems (AePS), doorstep cash withdrawal, direct pension disbursement, and DBT account validation powered by 812 Bank Sakhis across 777 Gram Panchayats.",
    keyPoints: [
      "Zero-fee biometric cash withdrawal for PM-KISAN, Pensions, and NREGS wages.",
      "Avoiding fraud: PIN security, SMS alert verification, and printed transaction slips.",
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
      {/* 1. MASTER EDITORIAL HERO SECTION (MATCHING /about/district & /schemes/social EXACTLY) */}
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
        {/* Soft Gold Decorative Backdrop Blur Circle */}
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
            <Link href="/citizen-services" style={{ color: "#64748B", textDecoration: "none" }}>
              Citizen Services
            </Link>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.78rem" }}>
              Knowledge Center
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 3.5, md: 5 }} alignItems="center">
            {/* Left Column: Title & Description */}
            <Grid size={{ xs: 12, md: 7 }}>
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
                DISTRICT KNOWLEDGE REPOSITORY & EXTENSION GUIDES
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
                District Knowledge Center
              </Typography>

              {/* Telugu Subtitle */}
              <Typography
                sx={{
                  color: "#B45309",
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  fontWeight: 700,
                  fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                  mb: 2,
                }}
              >
                వ్యవసాయం, స్వయం సహాయక సంఘాలు, జీవనోపాధి మరియు సంక్షేమ పథకాల సమగ్ర సమాచార వేదిక
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.92rem", sm: "1rem" },
                  lineHeight: 1.65,
                  maxWidth: 680,
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                Official field manuals, standard operating procedures, scheme compliance blueprints, and agribusiness handbooks published by the Vizianagaram District Administration, DRDA, SERP, and Agriculture Departments for citizen empowerment.
              </Typography>

              {/* Live Search Bar */}
              <Paper
                elevation={0}
                sx={{
                  p: "4px 8px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 580,
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: 2.5,
                  boxShadow: "0 4px 12px rgba(8, 43, 80, 0.05)",
                  "&:focus-within": { borderColor: "#082B50" },
                }}
              >
                <SearchRoundedIcon sx={{ color: "#64748B", ml: 1, mr: 1 }} />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Search by topic, scheme, crop or department (e.g. Millets, SHG, PMEGP, Pension)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "0.9rem", color: "#082B50", fontWeight: 550 },
                  }}
                />
                {searchQuery && (
                  <Button
                    size="small"
                    onClick={() => setSearchQuery("")}
                    sx={{ color: "#64748B", fontSize: "0.75rem", textTransform: "none", minWidth: 40 }}
                  >
                    Clear
                  </Button>
                )}
              </Paper>
            </Grid>

            {/* Right Column: Floating District Quick Facts Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#082B50",
                  color: "white",
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 3.5,
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 20px 40px -10px rgba(8, 43, 80, 0.35)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    bgcolor: "rgba(245, 184, 0, 0.1)",
                    pointerEvents: "none",
                  }}
                />

                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: "rgba(245, 184, 0, 0.2)",
                      color: "#F5B800",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MenuBookRoundedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#F5B800", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      DISTRICT KNOWLEDGE REPOSITORY
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "1.1rem", fontWeight: 900 }}>
                      Empowering 27 Mandals
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", lineHeight: 1.55, mb: 2.5 }}>
                  Curated technical manuals and citizen handbooks designed to support self-help collectives, youth entrepreneurs, and farmers across all 777 Gram Panchayats.
                </Typography>

                {/* 4 Floating Metrics */}
                <Grid container spacing={1.5} sx={{ pt: 1, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <Grid size={{ xs: 6 }}>
                    <Typography sx={{ color: "#F5B800", fontSize: "1.25rem", fontWeight: 900, lineHeight: 1 }}>
                      24+ Manuals
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem", fontWeight: 650, mt: 0.25 }}>
                      Bilingual Guides
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Typography sx={{ color: "#F5B800", fontSize: "1.25rem", fontWeight: 900, lineHeight: 1 }}>
                      100% Free
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem", fontWeight: 650, mt: 0.25 }}>
                      Public Download
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Typography sx={{ color: "#F5B800", fontSize: "1.25rem", fontWeight: 900, lineHeight: 1 }}>
                      24 FPOs
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem", fontWeight: 650, mt: 0.25 }}>
                      Producer Clusters
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Typography sx={{ color: "#F5B800", fontSize: "1.25rem", fontWeight: 900, lineHeight: 1 }}>
                      1902 Support
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem", fontWeight: 650, mt: 0.25 }}>
                      Toll-Free Guidance
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. CATEGORY PILL FILTER BAR (MATCHING /schemes/social & /livelihoods) */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          py: 1.75,
          position: "sticky",
          top: 52,
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction="row"
            spacing={1.25}
            sx={{
              overflowX: "auto",
              pb: { xs: 0.5, md: 0 },
              "&::-webkit-scrollbar": { height: 4 },
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
                  startIcon={<Icon sx={{ fontSize: 18 }} />}
                  sx={{
                    px: 2,
                    py: 0.85,
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    whiteSpace: "nowrap",
                    bgcolor: isSelected ? "#082B50" : "#F8FAFC",
                    color: isSelected ? "#FFFFFF !important" : "#475569",
                    border: isSelected ? "1.5px solid #082B50" : "1.5px solid #E2E8F0",
                    boxShadow: isSelected ? "0 4px 10px rgba(8, 43, 80, 0.15)" : "none",
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
                      ml: 1,
                      fontSize: "0.72rem",
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

      {/* 3. MAIN ARTICLES DIRECTORY */}
      <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, bgcolor: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Section Header */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={1.5}
            sx={{ mb: 3.5 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.5,
                }}
              >
                AVAILABLE EXTENSION GUIDES & MANUALS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.4rem", sm: "1.75rem" }, fontWeight: 900 }}>
                {selectedCategory === "all" ? "All Curated Guides" : KNOWLEDGE_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "1.1rem", ml: 1 }}>
                  ({filteredArticles.length} {filteredArticles.length === 1 ? "Guide" : "Guides"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.82rem", fontWeight: 600 }}>
              Updated for FY 2026-27 • Government of Andhra Pradesh
            </Typography>
          </Stack>

          {/* Cards Grid */}
          <Grid container spacing={3}>
            {filteredArticles.map((article) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 3.5,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 28px -6px rgba(8, 43, 80, 0.1)",
                      borderColor: "#CBD5E1",
                      "& .guide-img": { transform: "scale(1.04)" },
                      "& .arrow-cta": { transform: "translateX(4px)" },
                    },
                  }}
                >
                  {/* Real Image Header */}
                  <Box sx={{ position: "relative", height: 190, width: "100%", overflow: "hidden", bgcolor: "#E2E8F0" }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="guide-img"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(8, 43, 80, 0.2) 0%, rgba(8, 43, 80, 0.7) 100%)",
                      }}
                    />

                    {/* Badge top-left */}
                    <Box sx={{ position: "absolute", top: 14, left: 14, zIndex: 2 }}>
                      <Chip
                        label={article.categoryLabel}
                        size="small"
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF",
                          fontWeight: 800,
                          fontSize: "0.7rem",
                          border: "1px solid rgba(255, 255, 255, 0.25)",
                        }}
                      />
                    </Box>

                    {/* Tag top-right */}
                    <Box sx={{ position: "absolute", top: 14, right: 14, zIndex: 2 }}>
                      <Chip
                        label={article.tag}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.68rem",
                          border: "1px solid rgba(245, 184, 0, 0.4)",
                        }}
                      />
                    </Box>

                    {/* Read time bottom-left */}
                    <Box sx={{ position: "absolute", bottom: 12, left: 14, zIndex: 2, display: "flex", alignItems: "center", gap: 0.75 }}>
                      <Typography sx={{ color: "white", fontSize: "0.75rem", fontWeight: 700 }}>
                        {article.readTime}
                      </Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.75rem" }}>•</Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.72rem", fontWeight: 600 }}>
                        {article.authorDept}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Body Content */}
                  <Box sx={{ p: 2.75, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        lineHeight: 1.35,
                        mb: 0.75,
                      }}
                    >
                      {article.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 1.5,
                      }}
                    >
                      {article.teluguTitle}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.84rem",
                        lineHeight: 1.55,
                        mb: 2,
                        flexGrow: 1,
                      }}
                    >
                      {article.summary}
                    </Typography>

                    {/* Key takeaways bullet points */}
                    <Box sx={{ bgcolor: "#F8FAFC", p: 1.75, borderRadius: 2, border: "1px solid #E2E8F0", mb: 2.5 }}>
                      <Typography sx={{ color: "#082B50", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.75 }}>
                        Key Takeaways:
                      </Typography>
                      <Stack spacing={0.6}>
                        {article.keyPoints.map((point, pIdx) => (
                          <Stack key={pIdx} direction="row" spacing={0.75} alignItems="flex-start">
                            <CheckCircleRoundedIcon sx={{ fontSize: 14, color: "#16A34A", mt: 0.25, flexShrink: 0 }} />
                            <Typography sx={{ color: "#334155", fontSize: "0.76rem", lineHeight: 1.45, fontWeight: 550 }}>
                              {point}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>

                    {/* Footer Actions */}
                    <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between" sx={{ pt: 1.5, borderTop: "1px solid #F1F5F9" }}>
                      <Button
                        component={Link}
                        href="/contact"
                        size="small"
                        endIcon={<ArrowForwardRoundedIcon className="arrow-cta" sx={{ fontSize: 16, transition: "transform 0.2s" }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          px: 2,
                          py: 0.75,
                          borderRadius: 20,
                          fontSize: "0.78rem",
                          fontWeight: 750,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Request Training / Manual
                      </Button>

                      <Button
                        component={Link}
                        href="https://vizianagaram.ap.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          color: "#64748B",
                          fontSize: "0.74rem",
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
      <Box sx={{ bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", py: { xs: 5, sm: 6 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: 3.5,
              p: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.75 }}>
                  DISTRICT FIELD EXTENSION DESK
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.4rem", sm: "1.8rem" }, fontWeight: 900, mb: 1 }}>
                  Need Custom Field Training or Technical Extension?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 700 }}>
                  The DRDA Livelihoods Cell, APSSDC Skill Hubs, and Agriculture Extension Officers conduct free cluster workshops for SHGs, Rythu Bharosa Kendras (RBKs), and youth collectives across all 27 Mandals.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1.5}>
                  <Button
                    component={Link}
                    href="/events"
                    variant="contained"
                    startIcon={<SchoolRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.84rem",
                      py: 1.1,
                      borderRadius: 2.5,
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
                    startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      borderColor: "#CBD5E1",
                      color: "#082B50",
                      fontWeight: 750,
                      fontSize: "0.84rem",
                      py: 1.1,
                      borderRadius: 2.5,
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
