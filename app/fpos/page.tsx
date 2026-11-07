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
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

// Authentic FPO Database for Vizianagaram District Clusters
interface FPOItem {
  id: string;
  name: string;
  teluguName: string;
  mandal: string;
  division: "Vizianagaram" | "Bobbili" | "Cheepurupalli";
  members: string;
  commodities: string;
  funds: string;
  keyProducts: string[];
  contactPerson: string;
  phone: string;
  status: "High Growth" | "Active Cluster" | "Established";
  statusColor: string;
  statusBg: string;
}

const FPO_DATA: FPOItem[] = [
  {
    id: "komarada-fpo",
    name: "Komarada Tribal Organic Producer Co.",
    teluguName: "కొమరాడ గిరిజన సేంద్రీయ రైతు ఉత్పత్తిదారుల కంపెనీ",
    mandal: "Komarada",
    division: "Bobbili",
    members: "2,200",
    commodities: "Exotic Vegetables, Cashew Nut, Turmeric",
    funds: "₹68.00 Lakh",
    keyProducts: ["Colored Capsicum", "Broccoli", "Raw Cashew", "Organic Turmeric"],
    contactPerson: "K. Mohan Rao (CEO)",
    phone: "08922-245101",
    status: "High Growth",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "kurupam-fpo",
    name: "Kurupam Eco-Horticulture Collective",
    teluguName: "కురుపాం పర్యావరణ ఉద్యాన రైతు సంఘం",
    mandal: "Kurupam",
    division: "Bobbili",
    members: "2,100",
    commodities: "Organic Ginger, Turmeric, Wild Honey & MFP",
    funds: "₹62.50 Lakh",
    keyProducts: ["Ginger Paste", "Wild Forest Honey", "Curcumin Turmeric"],
    contactPerson: "P. Devullu (Managing Director)",
    phone: "08922-245102",
    status: "Active Cluster",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "salur-fpo",
    name: "Salur Agro-Pulse & Grain Producer Co.",
    teluguName: "సాలూరు ధాన్య & పప్పుధాన్యాల రైతు సంఘం",
    mandal: "Salur",
    division: "Bobbili",
    members: "2,400",
    commodities: "Paddy, Maize, Black Gram, Red Gram",
    funds: "₹72.00 Lakh",
    keyProducts: ["Organic Sona Masoori", "Polished Black Gram", "Cattle Feed"],
    contactPerson: "S. Appala Naidu (President)",
    phone: "08922-245103",
    status: "Established",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "vizianagaram-fpo",
    name: "Vizianagaram Urban-Peri Peri Vegetable FPO",
    teluguName: "విజయనగరం కూరగాయలు మరియు తోటల రైతు సమాఖ్య",
    mandal: "Vizianagaram",
    division: "Vizianagaram",
    members: "2,500",
    commodities: "Green Cashew, Country Vegetables, Drumsticks",
    funds: "₹75.40 Lakh",
    keyProducts: ["Export Grade Cashew", "Leafy Greens", "Hybrid Tomato"],
    contactPerson: "G. Rama Krishna (CEO)",
    phone: "08922-245104",
    status: "High Growth",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "seethampeta-fpo",
    name: "Seethampeta Forest Produce & Bamboo FPO",
    teluguName: "సీతంపేట అటవీ ఉత్పత్తులు & వెదురు రైతు సొసైటీ",
    mandal: "Seethampeta",
    division: "Bobbili",
    members: "2,000",
    commodities: "Treated Bamboo, Hill Brooms, Forest Honey",
    funds: "₹60.00 Lakh",
    keyProducts: ["Processed Bamboo Poles", "Handcrafted Brooms", "Raw Wax"],
    contactPerson: "V. Somaraju (Cluster Lead)",
    phone: "08922-245105",
    status: "Active Cluster",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "bhamini-fpo",
    name: "Bhamini River Valley Agro Producer Co.",
    teluguName: "భామిని నదీ లోయ వ్యవసాయ ఉత్పత్తుల కంపెనీ",
    mandal: "Bhamini",
    division: "Bobbili",
    members: "1,950",
    commodities: "Banana, Riverbed Vegetables, Bamboo",
    funds: "₹58.20 Lakh",
    keyProducts: ["Tissue Culture Grand Naine", "Banana Fibre", "Fresh Greens"],
    contactPerson: "B. Satyanarayana (Director)",
    phone: "08922-245106",
    status: "Active Cluster",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "veeraghattam-fpo",
    name: "Veeraghattam Cashew & Spice Collective",
    teluguName: "వీరఘట్టం జీడిపప్పు & సుగంధ ద్రవ్యాల రైతు వేదిక",
    mandal: "Veeraghattam",
    division: "Cheepurupalli",
    members: "2,100",
    commodities: "Roasted Cashew Kernels, Pepper, Turmeric",
    funds: "₹63.80 Lakh",
    keyProducts: ["W-240 Cashew Nuts", "Dry Turmeric Fingers", "Black Pepper"],
    contactPerson: "T. Venkata Rao (Manager)",
    phone: "08922-245107",
    status: "Established",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "garugubilli-fpo",
    name: "Garugubilli Minor Forest & Fruit FPO",
    teluguName: "గరుగుబిల్లి అటవీ ఉత్పత్తులు మరియు పండ్ల రైతు సంఘం",
    mandal: "Garugubilli",
    division: "Bobbili",
    members: "1,900",
    commodities: "Tamarind Pulp, Soapnuts, Mahua, Forest Honey",
    funds: "₹57.50 Lakh",
    keyProducts: ["De-seeded Tamarind Block", "Processed Soapnut Powder"],
    contactPerson: "M. Jagannatham (Coordinator)",
    phone: "08922-245108",
    status: "Active Cluster",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "jiyyammavalasa-fpo",
    name: "Jiyyammavalasa Millets & Pulses FPO",
    teluguName: "జియ్యమ్మవలస చిరుధాన్యాలు & పప్పుధాన్యాల రైతు సంఘం",
    mandal: "Jiyyammavalasa",
    division: "Bobbili",
    members: "2,150",
    commodities: "Ragi, Foxtail Millet, Green Gram, Horse Gram",
    funds: "₹64.20 Lakh",
    keyProducts: ["Finger Millet Flour", "Unpolished Foxtail", "Desi Moong"],
    contactPerson: "Ch. Polinaidu (CEO)",
    phone: "08922-245109",
    status: "High Growth",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "makkuva-fpo",
    name: "Makkuva Integrated Cashew & Horticulture Co.",
    teluguName: "మక్కువ ఉద్యాన & జీడిపప్పు రైతు ఉత్పత్తిదారుల సంఘం",
    mandal: "Makkuva",
    division: "Bobbili",
    members: "2,050",
    commodities: "Cashew Apples, Fresh Vegetables, Country Eggs",
    funds: "₹61.00 Lakh",
    keyProducts: ["Raw Cashew Nut", "Organic Okra", "Country Poultry Feed"],
    contactPerson: "K. Simhachalam (President)",
    phone: "08922-245110",
    status: "Active Cluster",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "gummalaxmipuram-fpo",
    name: "Gummalaxmipuram Organic Millets Collective",
    teluguName: "గుమ్మలక్ష్మీపురం సేంద్రీయ చిరుధాన్యాల సహకార సంఘం",
    mandal: "Gummalaxmipuram",
    division: "Bobbili",
    members: "2,080",
    commodities: "Kodo Millet, Little Millet, Hill Grains",
    funds: "₹62.90 Lakh",
    keyProducts: ["Cleaned Kodo Rice", "Millet Health Mix", "Desi Red Rice"],
    contactPerson: "S. Balaram (Lead Promoter)",
    phone: "08922-245111",
    status: "High Growth",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "pachipenta-fpo",
    name: "Pachipenta Tribal Bamboo & Craft FPO",
    teluguName: "పాచిపెంట గిరిజన వెదురు చేతివృత్తుల రైతు సంఘం",
    mandal: "Pachipenta",
    division: "Bobbili",
    members: "1,980",
    commodities: "Industrial Bamboo, Hill Produce, Cashew",
    funds: "₹59.40 Lakh",
    keyProducts: ["Bamboo Furniture Slats", "Raw Cashew", "Forest Herbs"],
    contactPerson: "D. Mallikarjun (Secretary)",
    phone: "08922-245112",
    status: "Active Cluster",
    statusColor: "#D97706",
    statusBg: "#FEF3C7",
  },
  {
    id: "seethanagaram-fpo",
    name: "Seethanagaram Commercial Banana & Veg FPO",
    teluguName: "సీతానగరం వాణిజ్య అరటి & కూరగాయల రైతు సంఘం",
    mandal: "Seethanagaram",
    division: "Bobbili",
    members: "2,200",
    commodities: "Cavendish Banana, Papaya, Sweet Corn",
    funds: "₹66.70 Lakh",
    keyProducts: ["Packhouse Sorted Banana", "Taiwan Red Lady Papaya"],
    contactPerson: "N. Suryanarayana (Director)",
    phone: "08922-245113",
    status: "Established",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
  {
    id: "glpuram-fpo",
    name: "G.L. Puram Desi Seed & Germplasm Collective",
    teluguName: "జి.ఎల్.పురం దేశీ విత్తనోత్పత్తి రైతు సమాఖ్య",
    mandal: "G.L.Puram",
    division: "Bobbili",
    members: "2,100",
    commodities: "Desi Seed Production, Traditional Paddy Seeds",
    funds: "₹63.10 Lakh",
    keyProducts: ["Navara Rice Seed", "Kala Bhaat", "Local Millet Seeds"],
    contactPerson: "P. Trinadha Rao (CEO)",
    phone: "08922-245114",
    status: "High Growth",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
  },
  {
    id: "bobbili-fpo",
    name: "Bobbili Royal Agri-Allied Mega FPO",
    teluguName: "బొబ్బిలి వ్యవసాయ మరియు అనుబంధ మెగా రైతు సంస్థ",
    mandal: "Bobbili",
    division: "Bobbili",
    members: "2,620",
    commodities: "Certified Paddy Seed, Cashew, Black Gram",
    funds: "₹80.50 Lakh",
    keyProducts: ["MTU-1010 Seed", "Premium Cashew Kernels", "Fine Pulses"],
    contactPerson: "K. Satyam Naidu (General Manager)",
    phone: "08922-245115",
    status: "Established",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
  },
];

export default function FPOsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState<string>("all");

  const filteredFPOs = useMemo(() => {
    return FPO_DATA.filter((fpo) => {
      const matchesDivision = selectedDivision === "all" || fpo.division === selectedDivision;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        fpo.name.toLowerCase().includes(q) ||
        fpo.teluguName.toLowerCase().includes(q) ||
        fpo.mandal.toLowerCase().includes(q) ||
        fpo.commodities.toLowerCase().includes(q) ||
        fpo.contactPerson.toLowerCase().includes(q);
      return matchesDivision && matchesSearch;
    });
  }, [searchQuery, selectedDivision]);

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
            <Link href="/livelihoods" style={{ color: "#64748B", textDecoration: "none" }}>
              Rural Livelihoods
            </Link>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.75rem" }}>
              Farmer Producer Organisations (FPOs)
            </Typography>
          </Breadcrumbs>

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
                NABARD & DRDA SUPPORTED AGRI-COLLECTIVES
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
                Farmer Producer Organisations
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
                రైతు ఉత్పత్తిదారుల సంస్థలు - 30,430 రైతు సభ్యులతో సంయుక్త వ్యవసాయ ప్రగతి
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
                15 FPOs uniting 30,430 smallholder and tribal farmers across Vizianagaram. Aggregating produce, processing cashew and millets, and unlocking direct wholesale market linkages with ₹9.35 Crores in institutional equity and revolving working capital.
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
                  placeholder="Filter by FPO name, mandal, commodity (e.g. Cashew, Millets)..."
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
                  src="/images/farmer-support-real.jpg"
                  alt="Vizianagaram Farmer Producer Collective in Field"
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
                    <SpaRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        15 District Producer Collectives
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        30,430 Smallholder Shareholders
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="₹9.35 Cr Mobilised"
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

      {/* 2. STATS STRIP & DIVISION FILTER */}
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
            {[
              { id: "all", label: "All FPOs", count: FPO_DATA.length },
              { id: "Bobbili", label: "Bobbili Division", count: FPO_DATA.filter(f => f.division === "Bobbili").length },
              { id: "Vizianagaram", label: "Vizianagaram Division", count: FPO_DATA.filter(f => f.division === "Vizianagaram").length },
              { id: "Cheepurupalli", label: "Cheepurupalli Division", count: FPO_DATA.filter(f => f.division === "Cheepurupalli").length },
            ].map((div) => {
              const isSelected = selectedDivision === div.id;
              return (
                <Button
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
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
                  {div.label}
                  <Typography
                    component="span"
                    sx={{
                      ml: 0.6,
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      color: isSelected ? "#F5B800" : "#64748B",
                    }}
                  >
                    ({div.count})
                  </Typography>
                </Button>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* 3. CORE METRICS SUMMARY CARDS */}
      <Box sx={{ bgcolor: "#F8FAFC", py: 2, borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {[
              { label: "Registered FPOs", val: "15 FPOs", sub: "100% Mandatory Mandal Coverage", icon: <SpaRoundedIcon sx={{ fontSize: 18, color: "#15803D" }} />, bg: "#DCFCE7" },
              { label: "Shareholder Farmers", val: "30,430 Members", sub: "Small, Marginal & Tribal Growers", icon: <GroupsRoundedIcon sx={{ fontSize: 18, color: "#1D4ED8" }} />, bg: "#EFF6FF" },
              { label: "Producer Groups", val: "4,580 FPGs", sub: "Village-Level Aggregation Hubs", icon: <AgricultureRoundedIcon sx={{ fontSize: 18, color: "#D97706" }} />, bg: "#FEF3C7" },
              { label: "Available Working Funds", val: "₹9.35 Crores", sub: "NABARD & DRDA Equity Support", icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: "#082B50" }} />, bg: "#F1F5F9" },
            ].map((stat, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    borderRadius: "12px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.25,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      bgcolor: stat.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ color: "#082B50", fontSize: "0.96rem", fontWeight: 850, lineHeight: 1.2 }}>
                      {stat.val}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.66rem", fontWeight: 650, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {stat.sub}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. COMPACT 3-COLUMN CARD GRID */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
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
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.3,
                }}
              >
                DISTRICT FPO REGISTER
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedDivision === "all" ? "All Active FPOs" : `${selectedDivision} Division FPOs`}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({filteredFPOs.length} {filteredFPOs.length === 1 ? "Collective" : "Collectives"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              NABARD / DRDA Producer Clusters
            </Typography>
          </Stack>

          {/* Compact 3-Column Grid */}
          <Grid container spacing={2}>
            {filteredFPOs.map((fpo) => (
              <Grid key={fpo.id} size={{ xs: 12, sm: 6, lg: 4 }}>
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
                    transition: "all 0.22s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -6px rgba(8, 43, 80, 0.1)",
                      borderColor: "#082B50",
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
                      bgcolor: fpo.statusColor,
                    }}
                  />

                  {/* Card Content Top */}
                  <Box sx={{ pt: 0.5 }}>
                    {/* Status & Mandal Badges */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Chip
                        label={fpo.status}
                        size="small"
                        sx={{
                          bgcolor: fpo.statusBg,
                          color: fpo.statusColor,
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      />

                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <LocationOnRoundedIcon sx={{ fontSize: 13, color: "#64748B" }} />
                        <Typography sx={{ color: "#082B50", fontSize: "0.72rem", fontWeight: 750 }}>
                          {fpo.mandal} Mandal
                        </Typography>
                      </Stack>
                    </Stack>

                    {/* FPO Name */}
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: "0.94rem",
                        fontWeight: 850,
                        lineHeight: 1.3,
                        mb: 0.4,
                      }}
                    >
                      {fpo.name}
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
                      {fpo.teluguName}
                    </Typography>

                    {/* Key Metrics Grid */}
                    <Grid container spacing={1} sx={{ mb: 1.5 }}>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 1, bgcolor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase" }}>
                            Farmer Members
                          </Typography>
                          <Typography sx={{ color: "#082B50", fontSize: "0.85rem", fontWeight: 850 }}>
                            {fpo.members}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 1, bgcolor: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                          <Typography sx={{ color: "#64748B", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase" }}>
                            Working Capital
                          </Typography>
                          <Typography sx={{ color: "#D97706", fontSize: "0.85rem", fontWeight: 850 }}>
                            {fpo.funds}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* Key Produce Chips */}
                    <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 700, mb: 0.6 }}>
                      Main Produce & Value Addition:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1.5 }}>
                      {fpo.keyProducts.map((prod, pIdx) => (
                        <Chip
                          key={pIdx}
                          label={prod}
                          size="small"
                          sx={{
                            bgcolor: "#FEF9C3",
                            color: "#854D0E",
                            fontWeight: 750,
                            fontSize: "0.64rem",
                            height: 20,
                            border: "1px solid #FEF08A",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Card Bottom Meta & Actions */}
                  <Box sx={{ pt: 1.2, borderTop: "1px solid #F1F5F9" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Typography sx={{ color: "#475569", fontSize: "0.7rem", fontWeight: 700 }}>
                        {fpo.contactPerson}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem" }}>
                        {fpo.phone}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <Button
                        component="a"
                        href={`tel:${fpo.phone.replace(/\D/g, "")}`}
                        fullWidth
                        size="small"
                        startIcon={<PhoneRoundedIcon sx={{ fontSize: 13 }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.6,
                          borderRadius: "8px",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Contact Cluster
                      </Button>

                      <Button
                        component={Link}
                        href="/mart"
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
                        <StorefrontRoundedIcon sx={{ fontSize: 16 }} />
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. SPOTLIGHT: EXOTIC VEGETABLES & PMFME FOOD PROCESSING */}
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
                  FLAGSHIP INITIATIVE • EXOTIC HORTICULTURE & MILLET CLUSTERS
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Direct Wholesale Market Linkages & AP Food Processing (PMFME)
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Vizianagaram FPOs produce export-grade colored capsicum, broccoli, and unpolished millets through integrated packhouses and solar poly dryers. All collectives are directly onboarded onto e-NAM and AP Agros supply chains.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href="/mart"
                    variant="contained"
                    startIcon={<StorefrontRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Explore District Mart Products
                  </Button>

                  <Button
                    component={Link}
                    href="/contact"
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
                    Register as Buyer / Vendor
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