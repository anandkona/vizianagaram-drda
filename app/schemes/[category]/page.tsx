"use client";

import React, { use, useState } from "react";
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
  Breadcrumbs,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import AccessibleForwardRoundedIcon from "@mui/icons-material/AccessibleForwardRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

// Scheme Category Pill Definitions with Matching Icons and Routes
const SCHEME_CATEGORIES = [
  { id: "all", label: "All Schemes", href: "/schemes", icon: AccountBalanceRoundedIcon },
  { id: "women", label: "Women & SHG", href: "/schemes/women", icon: GroupsRoundedIcon, accent: "#BE185D", bg: "#FCE7F3", heroImg: "/images/drda-women-shg.jpg" },
  { id: "farmers", label: "Farmers & Agri", href: "/schemes/farmers", icon: AgricultureRoundedIcon, accent: "#15803D", bg: "#DCFCE7", heroImg: "/images/farmer-support-real.jpg" },
  { id: "youth", label: "Youth & Skills", href: "/schemes/youth", icon: SchoolRoundedIcon, accent: "#0369A1", bg: "#E0F2FE", heroImg: "/images/hero-rural-community.jpg" },
  { id: "entrepreneurs", label: "Entrepreneurs", href: "/schemes/entrepreneurs", icon: BusinessCenterRoundedIcon, accent: "#D97706", bg: "#FEF3C7", heroImg: "/images/enterprise-cashew.jpg" },
  { id: "tribal", label: "Tribal (ITDA)", href: "/schemes/tribal", icon: Diversity1RoundedIcon, accent: "#047857", bg: "#D1FAE5", heroImg: "/images/cultural-heritage.jpg" },
  { id: "social", label: "Senior Citizens & Pensions", href: "/schemes/social", icon: AccessibleForwardRoundedIcon, accent: "#7E22CE", bg: "#F3E8FF", heroImg: "/images/service-concern.jpg" },
];

// Rich Curated Schemes Data for each sector
const SCHEMES_DATABASE: Record<string, any[]> = {
  women: [
    {
      id: "nrlm",
      name: "NRLM – National Rural Livelihoods Mission (SERP)",
      teluguName: "జాతీయ గ్రామీణ జీవనోపాధి మిషన్ (వైఎస్సార్ ఆసరా & స్త్రీ నిధి)",
      dept: "DRDA / SERP Andhra Pradesh",
      targetGroup: "Rural BPL Women organized into Self Help Groups (SHGs)",
      benefit: "₹15,000 Revolving Fund, ₹50,000 Community Investment Fund (CIF), institutional bank linkage up to ₹20 Lakhs per group at low interest.",
      subsidy: "100% Interest Subvention (Sunna Vaddi)",
      status: "Live & Active 2026",
      sla: "15 Days Approval",
      href: "https://vizianagaram.ap.gov.in/scheme/national-rural-livelihood-mission/",
    },
    {
      id: "streenidhi",
      name: "Stree Nidhi Credit Cooperative Federation",
      teluguName: "స్త్రీ నిధి మహిళా సహకార బ్యాంకు రుణాలు",
      dept: "SERP & Stree Nidhi Credit Cooperative",
      targetGroup: "SHG Members in need of urgent micro-enterprise or emergency credit",
      benefit: "Credit disbursement directly to bank accounts within 48 hours up to ₹1,50,000 for poultry, dairy, vegetable vending, and hill-broom making.",
      subsidy: "Direct Bank Linkage",
      status: "Live & Active 2026",
      sla: "48 Hours Sanction",
      href: "https://vizianagaram.ap.gov.in/scheme/national-rural-livelihood-mission/",
    },
    {
      id: "sunna-vaddi",
      name: "Sunna Vaddi (Zero Interest SHG Loan Scheme)",
      teluguName: "సున్నా వడ్డీ పథకం - మహిళా పొదుపు సంఘాల ప్రోత్సాహం",
      dept: "Panchayat Raj & Rural Development",
      targetGroup: "All prompt repayment SHGs with active bank credit linkages",
      benefit: "Government directly reimburses the entire bank interest component back into the SHG savings account, reducing borrowing cost to 0%.",
      subsidy: "Full Interest Reimbursement",
      status: "Live & Active 2026",
      sla: "Quarterly Credit",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "ofoe-women",
      name: "One Family One Entrepreneur (OFOE) Women Enterprises",
      teluguName: "ఒక కుటుంబం ఒక పారిశ్రామికవేత్త - మహిళా యూనిట్లు",
      dept: "District Industries Centre & DRDA",
      targetGroup: "Aspiring rural women entrepreneurs starting value-addition food processing",
      benefit: "Machinery capital subsidy up to 35%, EDP skill training, FSSAI licensing facilitation, and APEDA marketplace access.",
      subsidy: "35% Capital Grant",
      status: "Live & Active 2026",
      sla: "30 Days Sanction",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "shakti",
      name: "Mission Shakti Women Empowerment Hub",
      teluguName: "మిషన్ శక్తి - మహిళా సాధికారత మరియు రక్షణ నెట్‌వర్క్",
      dept: "Women Development & Child Welfare (WDCW)",
      targetGroup: "Vulnerable women, rural artisans, and single-mother households",
      benefit: "Integrated legal aid, livelihood skills, micro-enterprise seed capital, and direct marketing linkages via DWCRA Marts.",
      subsidy: "Free Training & Grants",
      status: "Live & Active 2026",
      sla: "Immediate Access",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
  ],
  farmers: [
    {
      id: "pm-kisan",
      name: "PM-KISAN Samman Nidhi & Rythu Bharosa",
      teluguName: "పీఎం కిసాన్ సమ్మాన్ నిధి & రైతు భరోసా",
      dept: "Department of Agriculture",
      targetGroup: "All small and marginal landholding farmer families",
      benefit: "Direct financial support of ₹6,000/year in 3 installments + State top-up transferred through DBT to bank accounts.",
      subsidy: "Direct Cash Support",
      status: "Live & Active 2026",
      sla: "Seasonal Installments",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "micro-irrigation",
      name: "APMIP Micro-Irrigation Subsidy (Drip & Sprinkler)",
      teluguName: "ఆంధ్రప్రదేశ్ సూక్ష్మ నీటిపారుదల పథకం (డ్రిప్ & స్ప్రింక్లర్)",
      dept: "Horticulture Department",
      targetGroup: "Farmers cultivating cashew, mango, oil palm, and vegetables",
      benefit: "Up to 90% subsidy for SC/ST small farmers and 70% subsidy for BC/General farmers on ISI certified drip equipment.",
      subsidy: "70% to 90% Subsidy",
      status: "Live & Active 2026",
      sla: "21 Days Sanction",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
  ],
  youth: [
    {
      id: "ddu-gky",
      name: "DDU-GKY Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
      teluguName: "దీన్ దయాళ్ ఉపాధ్యాయ గ్రామీణ కౌశల్య యోజన",
      dept: "Ministry of Rural Development / APSSDC",
      targetGroup: "Rural youth aged 15–35 years from BPL / SHG households",
      benefit: "100% free residential training, uniforms, boarding, tablet devices, and mandatory corporate campus placement.",
      subsidy: "100% Free Training & Placement",
      status: "Live & Active 2026",
      sla: "Quarterly Batches",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
  ],
  entrepreneurs: [
    {
      id: "pmegp",
      name: "PMEGP – Prime Minister's Employment Generation Programme",
      teluguName: "ప్రధాన మంత్రి ఉపాధి కల్పన పథకం",
      dept: "KVIC / District Industries Centre (DIC)",
      targetGroup: "Any individual above 18 years setting up micro manufacturing/service units",
      benefit: "Bank-financed project loans up to ₹50 Lakhs for manufacturing and ₹20 Lakhs for services with 15% to 35% margin subsidy.",
      subsidy: "Up to 35% Capital Grant",
      status: "Live & Active 2026",
      sla: "30 Days Sanction",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
  ],
  tribal: [
    {
      id: "van-dhan",
      name: "Pradhan Mantri Van Dhan Vikas Yojana (ITDA)",
      teluguName: "వన్ ధన్ వికాస్ కేంద్రాల గిరిజన అభివృద్ధి పథకం",
      dept: "ITDA Vizianagaram / TRIFED",
      targetGroup: "Tribal forest gatherers in Bhamini, Seethampeta and Salur agency tracts",
      benefit: "Equipping tribal SHGs with honey processing, tamarind cake pressing, and packaging tools with direct Girijan Co-op sales.",
      subsidy: "100% Seed Capital & Equipment",
      status: "Live & Active 2026",
      sla: "Cluster Allotments",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
  ],
  social: [
    {
      id: "ntr-bharosa-oldage",
      name: "NTR Bharosa Social Security Pension — Old Age Pension (OAP)",
      teluguName: "ఎన్టీఆర్ భరోసా వృద్ధాప్య పింఛను పథకం",
      dept: "Society for Elimination of Rural Poverty (SERP) & Panchayat Raj",
      targetGroup: "Senior citizens aged 60 years and above from BPL households",
      benefit: "Monthly pension of ₹4,000 delivered directly to elderly citizens at their doorstep on the 1st of every month via biometric authentication.",
      subsidy: "100% Monthly Direct Cash Benefit",
      status: "Live & Active 2026",
      sla: "1st of Every Month",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "ntr-bharosa-widow",
      name: "NTR Bharosa Social Security Pension — Widow Pension",
      teluguName: "ఎన్టీఆర్ భరోసా వితంతు పింఛను పథకం",
      dept: "Panchayat Raj & Rural Development",
      targetGroup: "Widows aged 18 years and above belonging to below-poverty-line families",
      benefit: "Financial sustenance support of ₹4,000 per month credited directly to the beneficiary account or delivered in person.",
      subsidy: "100% Monthly Direct Benefit",
      status: "Live & Active 2026",
      sla: "Monthly Delivery",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "ntr-bharosa-disabled",
      name: "NTR Bharosa — Differently Abled & Severe Disability Pension",
      teluguName: "ఎన్టీఆర్ భరోసా దివ్యాంగుల పింఛను పథకం (సదరం సర్టిఫికేట్ ఆధారిత)",
      dept: "Disabled Welfare & Social Security",
      targetGroup: "Persons with certified physical or intellectual disabilities (SADAREM 40%+ to 100%)",
      benefit: "₹6,000 to ₹15,000 monthly pension based on certified disability level, plus aids & assistive appliances facilitation.",
      subsidy: "100% Monthly Benefit (₹6,000 - ₹15,000)",
      status: "Live & Active 2026",
      sla: "Doorstep Delivery",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "ntr-bharosa-weavers",
      name: "NTR Bharosa — Weavers & Artisans Pension",
      teluguName: "చేనేత కార్మికులు & సాంప్రదాయ వృత్తుల పింఛను",
      dept: "Handlooms & Textiles / PR&RD",
      targetGroup: "Traditional handloom weavers aged 50 years and above across Vizianagaram clusters",
      benefit: "Monthly pension of ₹4,000 providing livelihood security to elderly traditional weavers and rural artisans.",
      subsidy: "100% Monthly Benefit",
      status: "Live & Active 2026",
      sla: "1st of Every Month",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "ntr-bharosa-toddy",
      name: "NTR Bharosa — Toddy Tappers & Fishermen Pension",
      teluguName: "గీత కార్మికులు & మత్స్యకారుల పింఛను పథకం",
      dept: "Fisheries & Excise Welfare Cell",
      targetGroup: "Registered toddy tappers and traditional marine/inland fishermen aged 50+",
      benefit: "₹4,000 monthly livelihood protection transferred during non-fishing/off-season months.",
      subsidy: "100% Monthly Benefit",
      status: "Live & Active 2026",
      sla: "Monthly Delivery",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
    {
      id: "chronic-ailments",
      name: "Chronic Kidney Disease (CKD) & Severe Health Pension",
      teluguName: "దీర్ఘకాలిక వ్యాధిగ్రస్తులు & కిడ్నీ బాధితుల ప్రత్యేక పింఛను",
      dept: "Medical & Health Department / PR&RD",
      targetGroup: "Patients diagnosed with CKD stage III, IV, V or undergoing regular dialysis treatment",
      benefit: "Financial assistance of ₹10,000 per month for maintenance, dietary nutrition, and clinical travel support.",
      subsidy: "₹10,000 Monthly Medical Aid",
      status: "Live & Active 2026",
      sla: "Monthly Direct Transfer",
      href: "https://vizianagaram.ap.gov.in/schemes/",
    },
  ],
};

// Category Statistics
const CATEGORY_EYEBROWS: Record<string, string> = {
  women: "WOMEN EMPOWERMENT & SHG LIVELIHOODS",
  farmers: "AGRICULTURE & FARMER WELFARE SCHEMES",
  youth: "YOUTH SKILLING & EMPLOYMENT PROGRAMMES",
  entrepreneurs: "MSME ENTERPRISE & SELF-EMPLOYMENT INITIATIVES",
  tribal: "TRIBAL EMPOWERMENT & ITDA FOREST LIVELIHOODS",
  social: "SENIOR CITIZENS, PENSIONS & SOCIAL SECURITY",
  all: "GOVERNMENT WELFARE & SUBSIDY PORTAL",
};

const categoryStatsMap: Record<string, any[]> = {
  women: [
    { value: "4,030 Units", label: "Micro-Enterprises Funded" },
    { value: "₹40.97 Cr", label: "Annual Credit Disbursed" },
    { value: "98.59%", label: "Prompt Repayment Rate" },
    { value: "27 Mandals", label: "100% SHG Coverage" },
  ],
  farmers: [
    { value: "2.84 Lakh", label: "Farmers Enrolled in DBT" },
    { value: "90% Subsidy", label: "Micro-Irrigation APMIP" },
    { value: "100% Tested", label: "Soil Health Cards Issued" },
    { value: "24 FPOs", label: "Farmer Producer Networks" },
  ],
  youth: [
    { value: "12,400+", label: "Rural Youth Trained" },
    { value: "78% Ratio", label: "Corporate Job Placements" },
    { value: "100% Free", label: "Residential Academies" },
    { value: "250+ Roles", label: "Certified Technical Trades" },
  ],
  entrepreneurs: [
    { value: "₹50 Lakhs", label: "Max Manufacturing Loan" },
    { value: "35% Subsidy", label: "Capital Margin Support" },
    { value: "1,240 Units", label: "MSME Clusters Formed" },
    { value: "Single Window", label: "Fast-Track Clearances" },
  ],
  tribal: [
    { value: "28,860 Units", label: "Bamboo & Fruit Plantations" },
    { value: "481 Holdings", label: "Agency Smallholders Supported" },
    { value: "100% Survival", label: "Verified Sapling Growth" },
    { value: "ITDA Desk", label: "Tribal Marketing Linkage" },
  ],
  social: [
    { value: "₹4,000+", label: "Monthly Doorstep Pension" },
    { value: "1st of Month", label: "100% Punctual Delivery" },
    { value: "3.2 Lakh", label: "Elderly & Widow Beneficiaries" },
    { value: "Zero Paperwork", label: "Biometric Handheld Delivery" },
  ],
};

export function generateStaticParams() {
  return SCHEMES.map((scheme) => ({ category: scheme.id }));
}

export default function SchemeCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const categoryId = resolvedParams.category.toLowerCase();

  const currentCategory = SCHEME_CATEGORIES.find((c) => c.id === categoryId) || SCHEME_CATEGORIES[1];
  const schemesList = SCHEMES_DATABASE[categoryId] || SCHEMES_DATABASE.women;
  const currentStats = categoryStatsMap[categoryId] || categoryStatsMap.women;

  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchemes = schemesList.filter((scheme) => {
    const text = `${scheme.name} ${scheme.teluguName} ${scheme.dept} ${scheme.targetGroup} ${scheme.benefit}`.toLowerCase();
    return text.includes(searchQuery.toLowerCase());
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. EDITORIAL TOP HERO SECTION (MATCHING ABOUT/WHO'S WHO DESIGN) */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
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
                {CATEGORY_EYEBROWS[categoryId] || "GOVERNMENT WELFARE & SUBSIDY PORTAL"}
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
                {currentCategory.label} Schemes
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
                విజయనగరం జిల్లా సంక్షేమ పథకాలు & ఆర్థిక స్వావలంబన కార్యక్రమాలు
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
                Explore targeted government welfare programs, zero-interest credit linkages, capital subsidies, and institutional bank loan schemes designed to uplift beneficiaries in the {currentCategory.label.toLowerCase()} sector across Vizianagaram district.
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href="https://vizianagaram.ap.gov.in/schemes/"
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
                      boxShadow: "0 6px 18px rgba(245, 184, 0, 0.4)",
                    },
                  }}
                >
                  Official Schemes Portal
                </Button>

                <Button
                  component={Link}
                  href="/schemes"
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
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#F8FAFC",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  All Welfare Categories
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Distinct Photo Card with Authentic Vizianagaram Asset */}
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
                    backgroundImage: `url('${currentCategory.heroImg || "/images/drda-women-shg.jpg"}')`,
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
                    {currentCategory.label} • Vizianagaram Administration
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
              {currentStats.map((fact, idx) => (
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

      {/* 3. CATEGORY SWITCHER PILLS & SEARCH BAR */}
      <Box id="schemes-index" sx={{ py: 3, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
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
                ACTIVE BENEFICIARY SECTORS
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
                {currentCategory.label} Programs & Subsidies
              </Typography>
            </Box>

            {/* Search Input */}
            <TextField
              size="small"
              placeholder="Search scheme name, loan, subsidy, or Telugu..."
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

          {/* Interactive Sector Switcher Buttons with Exact Dynamic Counts */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {SCHEME_CATEGORIES.map((cat) => {
              const isSelected = categoryId === cat.id;
              const count =
                cat.id === "all"
                  ? Object.values(SCHEMES_DATABASE).flat().length
                  : (SCHEMES_DATABASE[cat.id] || []).length;
              return (
                <Button
                  key={cat.id}
                  component={Link}
                  href={cat.href}
                  sx={{
                    bgcolor: isSelected ? "#082B50 !important" : "#F8FAFC",
                    color: isSelected ? "#FFFFFF !important" : "#082B50",
                    border: isSelected ? "1.5px solid #082B50" : "1.5px solid #E2E8F0",
                    borderRadius: "100px",
                    px: 1.8,
                    py: 0.5,
                    fontSize: "0.75rem",
                    fontWeight: 750,
                    textTransform: "none",
                    boxShadow: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: isSelected ? "#082B50 !important" : "#FEF3C7",
                      borderColor: isSelected ? "#082B50" : "#FDE68A",
                      color: isSelected ? "#FFFFFF !important" : "#082B50",
                    },
                  }}
                >
                  {cat.label}
                  <Chip
                    size="small"
                    label={count}
                    sx={{
                      ml: 0.8,
                      height: 17,
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

      {/* 4. SCHEMES TABLE WITH FIXED MAX HEIGHT & STICKY HEADER */}
      <Box sx={{ py: { xs: 3.5, sm: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {filteredSchemes.length === 0 ? (
            <Paper sx={{ p: 4, textAlign: "center", borderRadius: "16px", bgcolor: "#FFFFFF", border: "1px dashed #CBD5E1" }}>
              <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "1.05rem", mb: 0.5 }}>
                No schemes matching &quot;{searchQuery}&quot;
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
                maxHeight: 560,
                border: "1px solid #E2E8F0",
                borderRadius: "20px",
                overflow: "auto",
                bgcolor: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
                "&::-webkit-scrollbar": {
                  width: 8,
                  height: 8,
                },
                "&::-webkit-scrollbar-thumb": {
                  bgcolor: "#CBD5E1",
                  borderRadius: 4,
                },
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Scheme Name & Telugu Title
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Department & Target Group
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Key Benefits & Subsidies
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Processing SLA
                    </TableCell>
                    <TableCell align="right" sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredSchemes.map((scheme) => (
                    <TableRow
                      key={scheme.id}
                      hover
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        transition: "background-color 0.15s ease",
                      }}
                    >
                      {/* Name & Telugu */}
                      <TableCell sx={{ py: 2, maxWidth: 320 }}>
                        <Typography sx={{ fontWeight: 850, color: "#082B50", fontSize: "0.95rem", lineHeight: 1.25 }}>
                          {scheme.name}
                        </Typography>
                        <Typography sx={{ color: "#D97706", fontSize: "0.78rem", fontWeight: 650, mt: 0.3 }}>
                          {scheme.teluguName}
                        </Typography>
                      </TableCell>

                      {/* Department & Group */}
                      <TableCell sx={{ py: 2, maxWidth: 260 }}>
                        <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.82rem" }}>
                          {scheme.dept}
                        </Typography>
                        <Typography sx={{ color: "#64748B", fontSize: "0.74rem", mt: 0.2 }}>
                          {scheme.targetGroup}
                        </Typography>
                      </TableCell>

                      {/* Benefits & Subsidy */}
                      <TableCell sx={{ py: 2, maxWidth: 340 }}>
                        <Typography sx={{ color: "#334155", fontSize: "0.8rem", lineHeight: 1.45, mb: 0.6 }}>
                          {scheme.benefit}
                        </Typography>
                        <Chip
                          label={scheme.subsidy}
                          size="small"
                          sx={{
                            bgcolor: "#DCFCE7",
                            color: "#15803D",
                            fontWeight: 800,
                            fontSize: "0.68rem",
                            height: 20,
                          }}
                        />
                      </TableCell>

                      {/* SLA */}
                      <TableCell sx={{ py: 2 }}>
                        <Chip
                          label={scheme.sla}
                          size="small"
                          sx={{
                            bgcolor: "#FEF3C7",
                            color: "#B45309",
                            fontWeight: 750,
                            fontSize: "0.7rem",
                            height: 22,
                          }}
                        />
                      </TableCell>

                      {/* Action Button */}
                      <TableCell align="right" sx={{ py: 2 }}>
                        <Button
                          component="a"
                          href={scheme.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 13 }} />}
                          sx={{
                            bgcolor: "#082B50 !important",
                            color: "#FFFFFF !important",
                            borderRadius: "100px",
                            px: 2,
                            py: 0.5,
                            fontSize: "0.72rem",
                            fontWeight: 750,
                            textTransform: "none",
                            boxShadow: "none",
                            transition: "all 0.2s ease",
                            "&, &:hover": { color: "#FFFFFF !important" },
                            "&:hover": {
                              bgcolor: "#0F3A66 !important",
                            },
                          }}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {/* 4 Step Application Process */}
          <Box sx={{ mt: 5 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              SEAMLESS CITIZEN ACCESS
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900, mb: 3 }}>
              4-Step Journey to Avail Government Benefits
            </Typography>

            <Grid container spacing={2.5}>
              {[
                {
                  step: "01",
                  title: "Village Secretariat Verification",
                  desc: "Visit your local Grama / Ward Sachivalayam. The Welfare Assistant will verify Aadhaar, caste, and income parameters.",
                  accent: "#082B50",
                  bg: "#E2E8F0",
                },
                {
                  step: "02",
                  title: "Document Submission & e-KYC",
                  desc: "Submit your bank passbook, SHG group resolution note, and biometric confirmation through the Sachivalayam portal.",
                  accent: "#15803D",
                  bg: "#DCFCE7",
                },
                {
                  step: "03",
                  title: "Mandal Samakhya Endorsement",
                  desc: "Applications are vetted by the Mandal Samakhya and DRDA scrutiny cell to ensure zero middleman interference.",
                  accent: "#BE185D",
                  bg: "#FCE7F3",
                },
                {
                  step: "04",
                  title: "Direct Account Disbursement",
                  desc: "Sanctioned revolving funds, bank linkages, or pensions are credited directly into beneficiary bank accounts via DBT.",
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
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#082B50",
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 24px rgba(8, 43, 80, 0.08)",
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ color: "#CBD5E1", fontSize: "1.3rem", fontWeight: 900, fontFamily: "monospace", mb: 1 }}>
                        {item.step}
                      </Typography>
                      <Typography sx={{ color: "#082B50", fontSize: "0.95rem", fontWeight: 800, mb: 0.8, lineHeight: 1.3 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 5. EDITORIAL HELPDESK & CITIZEN SUPPORT CARD */}
      <Box sx={{ py: { xs: 3.5, sm: 5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              bgcolor: "#FFFFFF",
              borderRadius: { xs: "22px", sm: "28px" },
              border: "1.5px solid #E2E8F0",
              boxShadow: "0 14px 40px -10px rgba(8, 43, 80, 0.08)",
              p: { xs: 3, sm: 4, md: 5 },
            }}
          >
            {/* Soft decorative background circles */}
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                bgcolor: "#FEF9C3",
                opacity: 0.6,
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -40,
                left: "35%",
                width: 160,
                height: 160,
                borderRadius: "50%",
                bgcolor: "#E0F2FE",
                opacity: 0.45,
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
              {/* Left Column: Icon & Descriptive Info */}
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "14px",
                      bgcolor: "#FEF3C7",
                      color: "#D97706",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #FDE68A",
                    }}
                  >
                    <SupportAgentRoundedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#D97706",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      SCHEME FACILITATION & DESK SUPPORT
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.76rem", fontWeight: 650 }}>
                      DRDA Livelihoods Cell & Grama Sachivalayam Network
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    color: "#082B50",
                    fontSize: { xs: "1.4rem", sm: "1.75rem", md: "1.95rem" },
                    fontWeight: 900,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.25,
                    mb: 1.2,
                  }}
                >
                  Need Help with {currentCategory.label} Enrollment?
                </Typography>

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: { xs: "0.88rem", sm: "0.95rem" },
                    lineHeight: 1.6,
                    maxWidth: 620,
                  }}
                >
                  Reach out to the DRDA Scheme Desk or visit your local Grama / Ward Sachivalayam. Beneficiaries can also call the 24/7 AP State Citizen Helpline for immediate application status tracking.
                </Typography>

                {/* Sub-pills for fast guidance */}
                <Stack direction="row" spacing={1} sx={{ mt: 2.2, flexWrap: "wrap", gap: 1 }}>
                  {[
                    "1902 Toll-Free (24/7)",
                    "Zero Application Fee",
                    "Aadhaar e-KYC Verification",
                    "Direct Bank Transfer (DBT)",
                  ].map((tag, idx) => (
                    <Chip
                      key={idx}
                      icon={<CheckCircleRoundedIcon sx={{ fontSize: 13, color: "#15803D !important" }} />}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        color: "#334155",
                        fontWeight: 650,
                        fontSize: "0.7rem",
                        height: 25,
                      }}
                    />
                  ))}
                </Stack>
              </Grid>

              {/* Right Column: Direct Contact Action Cards */}
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Box
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "20px",
                    p: { xs: 2.2, sm: 2.8 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {/* Phone Helpline Option */}
                  <Box
                    component="a"
                    href="tel:08922276188"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 1.8,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid #CBD5E1",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#FEF3C7",
                        borderColor: "#F5B800",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 16px rgba(245, 184, 0, 0.15)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.4 }}>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "10px",
                          bgcolor: "#E0F2FE",
                          color: "#0369A1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PhoneInTalkRoundedIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase" }}>
                          DRDA Scheme Desk
                        </Typography>
                        <Typography sx={{ color: "#082B50", fontSize: "0.98rem", fontWeight: 850 }}>
                          08922-276188
                        </Typography>
                      </Box>
                    </Box>
                    <ArrowOutwardRoundedIcon sx={{ fontSize: 18, color: "#082B50" }} />
                  </Box>

                  {/* Grievance Portal Link */}
                  <Button
                    component={Link}
                    href="/pgrs"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16, color: "#FFFFFF !important" }} />}
                    sx={{
                      bgcolor: "#082B50 !important",
                      color: "#FFFFFF !important",
                      borderRadius: "12px",
                      py: 1.2,
                      px: 2.5,
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      textTransform: "none",
                      boxShadow: "0 4px 12px rgba(8, 43, 80, 0.15)",
                      transition: "all 0.2s ease",
                      "&, &:hover, &:focus, &:active": {
                        color: "#FFFFFF !important",
                      },
                      "&:hover": {
                        bgcolor: "#0F3A66 !important",
                        transform: "translateY(-1px)",
                        boxShadow: "0 6px 18px rgba(8, 43, 80, 0.25)",
                      },
                    }}
                  >
                    <Typography component="span" sx={{ color: "#FFFFFF !important", fontWeight: 800, fontSize: "0.82rem" }}>
                      Track / Lodge Scheme Concern (PGRS)
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* 6. STANDARDIZED QUICK NAVIGATION PILLS (MATCHING ABOUT/WHO'S WHO DESIGN) */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 3.5 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {[
              { label: "All Schemes Overview", href: "/schemes" },
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "Citizen Services", href: "/services" },
              { label: "Public Grievances (PGRS)", href: "/pgrs" },
              { label: "Contact Directory", href: "/directory" },
              { label: "Official Downloads", href: "/downloads" },
            ].map((link, idx) => (
              <Button
                key={idx}
                component={Link}
                href={link.href}
                endIcon={<ArrowForwardRoundedIcon className="nav-arrow" sx={{ fontSize: 13, transition: "transform 0.2s ease" }} />}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  color: "#082B50",
                  borderRadius: "100px",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  px: 2.6,
                  py: 0.75,
                  textTransform: "none",
                  boxShadow: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#F8FAFC",
                    borderColor: "#082B50",
                    color: "#082B50",
                    boxShadow: "none",
                    "& .nav-arrow": {
                      transform: "translateX(3px)",
                    },
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
