"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  InputBase,
  Breadcrumbs,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SquareFootRoundedIcon from "@mui/icons-material/SquareFootRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import CastleRoundedIcon from "@mui/icons-material/CastleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

interface MandalInfo {
  id: string;
  name: string;
  teluguName: string;
  division: "Vizianagaram" | "Bobbili" | "Cheepurupalle";
  headquarters: string;
  villagesCount: number;
  populationApprox: string;
  keyFeature: string;
}

const revenueDivisions = [
  {
    name: "Vizianagaram Division",
    teluguName: "విజయనగరం రెవెన్యూ డివిజన్",
    hq: "Vizianagaram",
    mandalsCount: 11,
    villagesCount: 395,
    areaDesc: "Administrative, industrial, educational, and major commercial urban agglomeration.",
    rdoOffice: "RDO Office, Near Fort Gate, Vizianagaram",
    color: "#082B50",
  },
  {
    name: "Bobbili Division",
    teluguName: "బొబ్బిలి రెవెన్యూ డివిజన్",
    hq: "Bobbili",
    mandalsCount: 8,
    villagesCount: 312,
    areaDesc: "Historic royal town, handloom GI veena artisans, agriculture, and cashew processing hub.",
    rdoOffice: "RDO Office, Rajah Street, Bobbili",
    color: "#D97706",
  },
  {
    name: "Cheepurupalle Division",
    teluguName: "చీపురుపల్లి రెవెన్యూ డివిజన్",
    hq: "Cheepurupalle",
    mandalsCount: 8,
    villagesCount: 275,
    areaDesc: "Rail junction, agricultural hinterland, rural women SHG enterprises, and mineral reserves.",
    rdoOffice: "RDO Office, Main Road, Cheepurupalle",
    color: "#15803D",
  },
];

const allMandals: MandalInfo[] = [
  // Vizianagaram Division
  { id: "vzm-urban", name: "Vizianagaram (Urban)", teluguName: "విజయనగరం (పట్టణ)", division: "Vizianagaram", headquarters: "Vizianagaram", villagesCount: 1, populationApprox: "2.35 Lakh", keyFeature: "District Headquarters, Historic Fort, Moti Mahal" },
  { id: "vzm-rural", name: "Vizianagaram (Rural)", teluguName: "విజయనగరం (గ్రామీణ)", division: "Vizianagaram", headquarters: "Vizianagaram", villagesCount: 34, populationApprox: "88,000", keyFeature: "Industrial Estate, Agricultural Markets" },
  { id: "gantyada", name: "Gantyada", teluguName: "గంట్యాడ", division: "Vizianagaram", headquarters: "Gantyada", villagesCount: 42, populationApprox: "72,500", keyFeature: "Thatipudi Reservoir, Dairy Farming Co-ops" },
  { id: "pusapatirega", name: "Pusapatirega", teluguName: "పూసపాటిరేగ", division: "Vizianagaram", headquarters: "Pusapatirega", villagesCount: 38, populationApprox: "69,000", keyFeature: "Coastal Fisheries, Coconut & Cashew Plantations" },
  { id: "bhogapuram", name: "Bhogapuram", teluguName: "భోగాపురం", division: "Vizianagaram", headquarters: "Bhogapuram", villagesCount: 31, populationApprox: "64,000", keyFeature: "Greenfield International Airport Precinct, National Highway 16" },
  { id: "denkada", name: "Denkada", teluguName: "డెంకాడ", division: "Vizianagaram", headquarters: "Denkada", villagesCount: 36, populationApprox: "58,000", keyFeature: "Jute Mills, Horticultural Farms, Champavathi River" },
  { id: "nellimarla", name: "Nellimarla", teluguName: "నెల్లిమర్ల", division: "Vizianagaram", headquarters: "Nellimarla", villagesCount: 39, populationApprox: "76,000", keyFeature: "Ramatheertham Temple Complex & Monastic Remnants" },
  { id: "bondapalli", name: "Bondapalli", teluguName: "బొండపల్లి", division: "Vizianagaram", headquarters: "Bondapalli", villagesCount: 35, populationApprox: "52,000", keyFeature: "Millets & Sugarcane Cultivation" },
  { id: "gajapathinagaram", name: "Gajapathinagaram", teluguName: "గజపతినగరం", division: "Vizianagaram", headquarters: "Gajapathinagaram", villagesCount: 46, populationApprox: "79,000", keyFeature: "Commercial Rail Hub, Cashew Processing Units" },
  { id: "dattirajeru", name: "Dattirajeru", teluguName: "దత్తిరాజేరు", division: "Vizianagaram", headquarters: "Dattirajeru", villagesCount: 44, populationApprox: "54,000", keyFeature: "Organic Farming Clusters & Mango Orchards" },
  { id: "mentada", name: "Mentada", teluguName: "మెంటాడ", division: "Vizianagaram", headquarters: "Mentada", villagesCount: 49, populationApprox: "51,000", keyFeature: "Forest Livelihoods, Minor Forest Produce" },

  // Bobbili Division
  { id: "bobbili", name: "Bobbili", teluguName: "బొబ్బిలి", division: "Bobbili", headquarters: "Bobbili", villagesCount: 48, populationApprox: "1.20 Lakh", keyFeature: "Historical Fort, GI-Tagged Bobbili Veena Guilds" },
  { id: "badangi", name: "Badangi", teluguName: "బాడంగి", division: "Bobbili", headquarters: "Badangi", villagesCount: 33, populationApprox: "49,000", keyFeature: "Historic Airstrip, Rice Mills, PDS Hub" },
  { id: "therlam", name: "Therlam", teluguName: "తెర్లాం", division: "Bobbili", headquarters: "Therlam", villagesCount: 41, populationApprox: "55,000", keyFeature: "Jute Cultivation & Rural Handlooms" },
  { id: "balijipeta", name: "Balijipeta", teluguName: "బలిజిపేట", division: "Bobbili", headquarters: "Balijipeta", villagesCount: 37, populationApprox: "58,000", keyFeature: "Venkateswara Swamy Hill Shrine, Agro Processing" },
  { id: "salur", name: "Salur", teluguName: "సాలూరు", division: "Bobbili", headquarters: "Salur", villagesCount: 45, populationApprox: "1.05 Lakh", keyFeature: "Tribal Gateway, Vegavathi River, NTFP Trading" },
  { id: "pachipenta", name: "Pachipenta", teluguName: "పాచిపెంట", division: "Bobbili", headquarters: "Pachipenta", villagesCount: 39, populationApprox: "46,000", keyFeature: "Eastern Ghats Foothills, Coffee & Spices Plantations" },
  { id: "makkuva", name: "Makkuva", teluguName: "మక్కువ", division: "Bobbili", headquarters: "Makkuva", villagesCount: 35, populationApprox: "42,000", keyFeature: "Riverbed Cultivation & Tribal Welfare Schools" },
  { id: "ramabhadrapuram", name: "Ramabhadrapuram", teluguName: "రామభద్రపురం", division: "Bobbili", headquarters: "Ramabhadrapuram", villagesCount: 34, populationApprox: "53,000", keyFeature: "Major Road Junction connecting Rayagada & VZM" },

  // Cheepurupalle Division
  { id: "cheepurupalle", name: "Cheepurupalle", teluguName: "చీపురుపల్లి", division: "Cheepurupalle", headquarters: "Cheepurupalle", villagesCount: 38, populationApprox: "82,000", keyFeature: "Major Railway Junction, Manganese Ore Logistics" },
  { id: "garividi", name: "Garividi", teluguName: "గరివిడి", division: "Cheepurupalle", headquarters: "Garividi", villagesCount: 32, populationApprox: "68,000", keyFeature: "Ferro Alloys Manufacturing Plants & Industrial Township" },
  { id: "gurla", name: "Gurla", teluguName: "గుర్ల", division: "Cheepurupalle", headquarters: "Gurla", villagesCount: 41, populationApprox: "57,000", keyFeature: "Champavathi River Basin, Pulse Cultivation" },
  { id: "garbham", name: "Merakamudidam", teluguName: "మెరకముడిదాం", division: "Cheepurupalle", headquarters: "Merakamudidam", villagesCount: 37, populationApprox: "51,000", keyFeature: "Rural SHG Enterprises & Livestock Rearing" },
  { id: "rajapuram", name: "Vepada", teluguName: "వేపాడ", division: "Cheepurupalle", headquarters: "Vepada", villagesCount: 34, populationApprox: "48,000", keyFeature: "Horticulture, Papaya, Banana & Cashew Orchards" },
  { id: "kothavalasa", name: "Kothavalasa", teluguName: "కొత్తవలస", division: "Cheepurupalle", headquarters: "Kothavalasa", villagesCount: 33, populationApprox: "75,000", keyFeature: "Strategic Railway Freight Node & Industrial Zone" },
  { id: "lakkavarapukota", name: "Lakkavarapukota", teluguName: "లక్కవరపుకోట", division: "Cheepurupalle", headquarters: "Lakkavarapukota", villagesCount: 31, populationApprox: "54,000", keyFeature: "Historic Fort Ruins, Granite Quarrying" },
  { id: "srungavarapukota", name: "S. Kota (Srungavarapukota)", teluguName: "శృంగవరపుకోట", division: "Cheepurupalle", headquarters: "S. Kota", villagesCount: 29, populationApprox: "86,000", keyFeature: "Punyagiri Devotional Shrine & Foothills of Ananthagiri" },
];

const mapFacts = [
  { value: "4,124 Sq. Km.", label: "Total District Area", icon: SquareFootRoundedIcon },
  { value: "3 Divisions", label: "VZM, Bobbili, Cheepurupalle", icon: AccountTreeRoundedIcon },
  { value: "27 Mandals", label: "Revenue Administrations", icon: MapRoundedIcon },
  { value: "982 Villages", label: "Gram Panchayats & Hamlets", icon: PeopleAltRoundedIcon },
];

export default function DistrictMapPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMandals = useMemo(() => {
    return allMandals.filter((mandal) => {
      const matchesDiv =
        selectedDivision === "all" ||
        mandal.division.toLowerCase() === selectedDivision.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        mandal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mandal.teluguName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mandal.headquarters.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mandal.keyFeature.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDiv && matchesSearch;
    });
  }, [selectedDivision, searchQuery]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. EDITORIAL TOP HERO SECTION (MATCHING ABOUT/WHO'S WHO DESIGN SYSTEM) */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 7, sm: 8, md: 9 },
          overflow: "hidden",
        }}
      >
        {/* Soft yellow organic backdrop circle */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: { xs: "-10%", sm: "0%", md: "5%" },
            width: { xs: 320, sm: 440, md: 520 },
            height: { xs: 320, sm: 440, md: 520 },
            borderRadius: "50%",
            bgcolor: "#FEF08A",
            opacity: 0.65,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Temple Architecture Line Scripture Watermark */}
        <Box
          sx={{
            position: "absolute",
            top: "14%",
            right: { xs: "28%", md: "36%", lg: "40%" },
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

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 2.5, sm: 3.5, md: 5 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            {/* Left Column: Title & Descriptions */}
            <Grid size={{ xs: 12, md: 6.5 }}>
              <Breadcrumbs
                separator="/"
                sx={{
                  color: "#64748B",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  mb: { xs: 1, sm: 1.5 },
                  "& a": { color: "#082B50", textDecoration: "none" },
                }}
              >
                <Link href="/">Home</Link>
                <Link href="/about/district">About District</Link>
                <Typography sx={{ color: "#D97706", fontWeight: 700, fontSize: "0.82rem" }}>
                  District Administrative Map
                </Typography>
              </Breadcrumbs>

              {/* Tag Pill */}
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: { xs: "0.72rem", sm: "0.78rem" },
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.5,
                }}
              >
                OFFICIAL GEOGRAPHICAL & REVENUE BOUNDARIES
              </Typography>

              {/* Page Title */}
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
                Vizianagaram District Map
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: 580,
                  fontWeight: 500,
                  mb: 2.5,
                }}
              >
                Explore the official administrative boundaries, 3 Revenue Divisions, 27 Mandals, and 982 Revenue Villages of Vizianagaram district — highlighting road, rail networks, and key regional landmarks.
              </Typography>

              {/* Dual Action Buttons */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" gap={1}>
                <Button
                  component="a"
                  href="/images/vzm-district-map-official.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<DownloadRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#F5B800",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3,
                    py: 1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(245, 184, 0, 0.3)",
                    "&:hover": { bgcolor: "#D49D00" },
                  }}
                >
                  Download High-Res Map (JPG)
                </Button>
                <Button
                  component="a"
                  href="#mandal-directory"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #CBD5E1",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3,
                    py: 1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#F8FAFC", borderColor: "#082B50" },
                  }}
                >
                  View 27 Mandals Directory
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: Hero High-Resolution Photography */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 320, md: 380 },
                  borderRadius: { xs: "24px", sm: "32px", md: "40px" },
                  overflow: "hidden",
                  boxShadow: "0 20px 45px -12px rgba(8, 43, 80, 0.18)",
                  border: "4px solid #FFFFFF",
                  bgcolor: "#FEF9C3",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 28px 55px -10px rgba(8, 43, 80, 0.28)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/images/vzm-district-map-official.jpeg')",
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
                    bgcolor: "rgba(8, 43, 80, 0.90)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "100px",
                    px: 2,
                    py: 0.7,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <MapRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                  <Typography sx={{ color: "#FFFFFF", fontSize: "0.75rem", fontWeight: 700 }}>
                    Official Survey of India District Boundaries (2026)
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. FLOATING GEOGRAPHICAL STATS BAR */}
      <Box sx={{ mt: { xs: -4, sm: -5, md: -6 }, position: "relative", zIndex: 10, mb: { xs: 4, sm: 5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 3.5, md: 5 } }}>
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
              {mapFacts.map((fact, idx) => {
                const IconComponent = fact.icon;
                return (
                  <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                    <Box
                      sx={{
                        p: { xs: 1.4, sm: 1.8 },
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
                      <Box
                        sx={{
                          display: "inline-flex",
                          p: 1,
                          borderRadius: "10px",
                          bgcolor: "#FFFFFF",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                          mb: 1,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 20, color: "#082B50" }} />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: { xs: "1.15rem", sm: "1.3rem" },
                          color: "#082B50",
                          lineHeight: 1.2,
                        }}
                      >
                        {fact.value}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: { xs: "0.72rem", sm: "0.78rem" },
                          fontWeight: 600,
                          mt: 0.4,
                        }}
                      >
                        {fact.label}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 3. REVENUE DIVISIONS OVERVIEW CARDS */}
      <Container maxWidth="xl" sx={{ py: 3, px: { xs: 2.5, sm: 3.5, md: 5 } }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              color: "#D97706",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 0.5,
            }}
          >
            ADMINISTRATIVE STRUCTURE
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 900, color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.6rem" } }}>
            3 Revenue Divisions of Vizianagaram
          </Typography>
          <Typography sx={{ color: "#64748B", fontSize: "0.88rem", mt: 0.5 }}>
            Headed by Revenue Divisional Officers (Sub-Collectors) coordinating mandal revenue administrations and public safety.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {revenueDivisions.map((div, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "20px",
                  border: "1.5px solid #E2E8F0",
                  bgcolor: "#FFFFFF",
                  p: 3,
                  boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#082B50",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 30px rgba(8, 43, 80, 0.10)",
                  },
                }}
              >
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <AccountTreeRoundedIcon sx={{ fontSize: 20, color: div.color }} />
                    <Chip
                      label={`${div.mandalsCount} Mandals`}
                      size="small"
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        bgcolor: "#FEF3C7",
                        color: "#B45309",
                        border: "1px solid #FDE68A",
                      }}
                    />
                    <Chip
                      label={`${div.villagesCount} Villages`}
                      size="small"
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        bgcolor: "#F8FAFC",
                        color: "#475569",
                        border: "1px solid #E2E8F0",
                      }}
                    />
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 850, color: "#082B50", fontSize: "1.15rem", mb: 0.3 }}>
                    {div.name}
                  </Typography>
                  <Typography sx={{ color: "#1D4ED8", fontSize: "0.82rem", fontWeight: 700, mb: 1.5 }}>
                    {div.teluguName}
                  </Typography>

                  <Typography sx={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.55, mb: 2 }}>
                    {div.areaDesc}
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #F1F5F9" }}>
                  <Typography sx={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>
                    Divisional Office Location
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#082B50", fontWeight: 800 }}>
                    {div.rdoOffice}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 4. INTERACTIVE HIGH-RES MAP VIEWER SECTION */}
      <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2.5, sm: 3.5, md: 5 } }}>
        <Card
          sx={{
            borderRadius: "24px",
            border: "1.5px solid #E2E8F0",
            bgcolor: "#FFFFFF",
            overflow: "hidden",
            boxShadow: "0 10px 32px rgba(8, 43, 80, 0.08)",
          }}
        >
          {/* Header Bar */}
          <Box
            sx={{
              p: { xs: 2, sm: 2.5 },
              bgcolor: "#082B50",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            <Box>
              <Typography sx={{ color: "#F5B800", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                OFFICIAL CARTOGRAPHIC SURVEY
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 850, color: "#FFFFFF", fontSize: "1.15rem" }}>
                Vizianagaram District Reference Map
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button
                component="a"
                href="/images/vzm-district-map-official.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<ZoomInRoundedIcon sx={{ color: "#FFFFFF !important" }} />}
                sx={{
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: "#FFFFFF !important",
                  borderRadius: "100px",
                  px: 2,
                  py: 0.6,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "none",
                  border: "1px solid rgba(255,255,255,0.25)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
                }}
              >
                <Typography component="span" sx={{ color: "#FFFFFF !important", fontWeight: 700, fontSize: "0.78rem" }}>
                  Open Fullscreen
                </Typography>
              </Button>
              <Button
                component="a"
                href="/images/vzm-district-map-official.jpeg"
                download="Vizianagaram_District_Official_Map.jpeg"
                startIcon={<DownloadRoundedIcon sx={{ color: "#082B50 !important" }} />}
                sx={{
                  bgcolor: "#F5B800",
                  color: "#082B50 !important",
                  borderRadius: "100px",
                  px: 2.5,
                  py: 0.6,
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#D49D00" },
                }}
              >
                <Typography component="span" sx={{ color: "#082B50 !important", fontWeight: 800, fontSize: "0.78rem" }}>
                  Download Map
                </Typography>
              </Button>
            </Stack>
          </Box>

          {/* Map Display Container */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 340, sm: 480, md: 620 },
              bgcolor: "#F8FAFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/images/vzm-district-map-official.jpeg"
              alt="Official Vizianagaram District Administrative Map"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                p: { xs: 1, sm: 2 },
              }}
            />
          </Box>

          <Box sx={{ p: 2, bgcolor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
            <Typography sx={{ color: "#64748B", fontSize: "0.76rem", lineHeight: 1.5 }}>
              Source: National Informatics Centre (NIC) Vizianagaram District Centre & Survey of India records. Incorporates post-bifurcation territorial boundaries, railway corridors, National Highway 16/26 linkages, and river networks.
            </Typography>
          </Box>
        </Card>
      </Container>

      {/* 5. 27 MANDALS DIRECTORY WITH SEARCH & DIVISION FILTER */}
      <Container id="mandal-directory" maxWidth="xl" sx={{ py: 4, px: { xs: 2.5, sm: 3.5, md: 5 } }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              color: "#D97706",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 0.5,
            }}
          >
            REVENUE DIRECTORY
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 900, color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.6rem" } }}>
            All 27 Revenue Mandals of Vizianagaram
          </Typography>
          <Typography sx={{ color: "#64748B", fontSize: "0.88rem", mt: 0.5 }}>
            Filter by Revenue Division or search by mandal name, headquarters, or key developmental characteristics.
          </Typography>
        </Box>

        {/* Filter & Search Bar */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
            border: "1.5px solid #E2E8F0",
            p: 2,
            mb: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            {/* Division Pill Buttons */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.5}>
                {[
                  { key: "all", label: "All Mandals", count: allMandals.length },
                  { key: "vizianagaram", label: "Vizianagaram Division", count: allMandals.filter((m) => m.division === "Vizianagaram").length },
                  { key: "bobbili", label: "Bobbili Division", count: allMandals.filter((m) => m.division === "Bobbili").length },
                  { key: "cheepurupalle", label: "Cheepurupalle Division", count: allMandals.filter((m) => m.division === "Cheepurupalle").length },
                ].map((item) => {
                  const isSelected = selectedDivision === item.key;
                  return (
                    <Button
                      key={item.key}
                      onClick={() => setSelectedDivision(item.key)}
                      sx={{
                        bgcolor: isSelected ? "#082B50 !important" : "#F8FAFC",
                        color: isSelected ? "#FFFFFF !important" : "#082B50",
                        border: isSelected ? "1.5px solid #082B50" : "1.5px solid #E2E8F0",
                        borderRadius: "100px",
                        px: 2,
                        py: 0.5,
                        fontSize: "0.78rem",
                        fontWeight: 750,
                        textTransform: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: isSelected ? "#082B50 !important" : "#FEF3C7",
                          borderColor: isSelected ? "#082B50" : "#FDE68A",
                        },
                      }}
                    >
                      <Typography component="span" sx={{ color: isSelected ? "#FFFFFF !important" : "#082B50", fontSize: "0.78rem", fontWeight: 750 }}>
                        {item.label}
                      </Typography>
                      <Chip
                        size="small"
                        label={item.count}
                        sx={{
                          ml: 0.8,
                          height: 18,
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          bgcolor: isSelected ? "#F5B800" : "#E2E8F0",
                          color: isSelected ? "#082B50" : "#475569",
                        }}
                      />
                    </Button>
                  );
                })}
              </Stack>
            </Grid>

            {/* Search Box */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#F8FAFC",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: "100px",
                  px: 2,
                  py: 0.6,
                  transition: "all 0.2s ease",
                  "&:hover, &:focus-within": {
                    borderColor: "#082B50",
                    bgcolor: "#FFFFFF",
                    boxShadow: "0 0 0 3px rgba(8, 43, 80, 0.08)",
                  },
                }}
              >
                <SearchRoundedIcon sx={{ color: "#64748B", fontSize: "1.2rem", mr: 1 }} />
                <InputBase
                  placeholder="Search mandal, headquarters, or key landmark..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                  sx={{
                    fontSize: "0.85rem",
                    color: "#1E293B",
                    fontWeight: 500,
                    "& input::placeholder": { color: "#94A3B8", opacity: 1 },
                  }}
                />
                {searchQuery && (
                  <IconButton size="small" onClick={() => setSearchQuery("")} sx={{ p: 0.3 }}>
                    <CloseRoundedIcon sx={{ fontSize: "1rem", color: "#64748B" }} />
                  </IconButton>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Mandals Table */}
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "18px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 16px rgba(8, 43, 80, 0.03)",
            maxHeight: 560,
          }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  #
                </TableCell>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  Mandal Name & Telugu Title
                </TableCell>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  Revenue Division
                </TableCell>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  Headquarters
                </TableCell>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  Revenue Villages
                </TableCell>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  Approx Population
                </TableCell>
                <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.8rem", py: 1.5 }}>
                  Key Landmarks & Economic Profile
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMandals.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} sx={{ textAlign: "center", py: 6 }}>
                    <Typography sx={{ color: "#64748B", fontWeight: 700 }}>
                      No mandals found matching &quot;{searchQuery}&quot;
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedDivision("all");
                      }}
                      sx={{ mt: 1.5, borderRadius: "100px", textTransform: "none" }}
                    >
                      Reset Filter
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                filteredMandals.map((m, idx) => (
                  <TableRow
                    key={m.id}
                    hover
                    sx={{
                      "&:nth-of-type(even)": { bgcolor: "#F8FAFC" },
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell sx={{ color: "#64748B", fontSize: "0.78rem", fontWeight: 700 }}>
                      {idx + 1}
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontWeight: 800, color: "#082B50", fontSize: "0.86rem" }}>
                        {m.name}
                      </Typography>
                      <Typography sx={{ fontSize: "0.76rem", color: "#1D4ED8", fontWeight: 650 }}>
                        {m.teluguName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={m.division}
                        size="small"
                        sx={{
                          height: "20px",
                          fontSize: "0.68rem",
                          fontWeight: 750,
                          bgcolor:
                            m.division === "Vizianagaram"
                              ? "#EFF6FF"
                              : m.division === "Bobbili"
                              ? "#FEF3C7"
                              : "#F0FDF4",
                          color:
                            m.division === "Vizianagaram"
                              ? "#1D4ED8"
                              : m.division === "Bobbili"
                              ? "#B45309"
                              : "#15803D",
                          border: "1px solid",
                          borderColor:
                            m.division === "Vizianagaram"
                              ? "#BFDBFE"
                              : m.division === "Bobbili"
                              ? "#FDE68A"
                              : "#BBF7D0",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600 }}>
                      {m.headquarters}
                    </TableCell>
                    <TableCell sx={{ color: "#082B50", fontSize: "0.82rem", fontWeight: 800 }}>
                      {m.villagesCount} Villages
                    </TableCell>
                    <TableCell sx={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600 }}>
                      {m.populationApprox}
                    </TableCell>
                    <TableCell sx={{ color: "#475569", fontSize: "0.78rem", lineHeight: 1.45, maxWidth: 300 }}>
                      {m.keyFeature}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* 6. EDITORIAL HELPDESK CARD */}
      <Container maxWidth="xl" sx={{ pb: 6, px: { xs: 2.5, sm: 3.5, md: 5 } }}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#FFFFFF",
            border: "1.5px solid #E2E8F0",
            borderRadius: { xs: "20px", sm: "28px" },
            p: { xs: 3, sm: 4, md: 4.5 },
            boxShadow: "0 10px 30px -4px rgba(8, 43, 80, 0.06)",
            overflow: "hidden",
          }}
        >
          {/* Subtle decorative background circle */}
          <Box
            sx={{
              position: "absolute",
              top: -30,
              right: -30,
              width: 180,
              height: 180,
              borderRadius: "50%",
              bgcolor: "#FEF9C3",
              opacity: 0.6,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
            {/* Left Column: Icon & Descriptive Info */}
            <Grid size={{ xs: 12, md: 8 }}>
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
                  <CastleRoundedIcon sx={{ fontSize: 24 }} />
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
                    DISTRICT REVENUE & SURVEY WING • COLLECTORATE
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.76rem", fontWeight: 650 }}>
                    Official Cadastral Boundaries & GIS Mapping Cell
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
                Need Cadastral Maps or Village Revenue Boundary Records?
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.88rem", sm: "0.95rem" },
                  lineHeight: 1.6,
                  maxWidth: 680,
                }}
              >
                For village FMB (Field Measurement Book) sketches, mandal maps, survey settlement inquiries, or subdivision records, contact the District Survey and Land Records Wing at the Collectorate or the Tahsildar office of your respective mandal.
              </Typography>

              {/* Sub-pills for accredited services */}
              <Stack direction="row" spacing={1} sx={{ mt: 2.2, flexWrap: "wrap", gap: 1 }}>
                {[
                  "FMB Survey Copies",
                  "Mandal Revenue Boundaries",
                  "GIS Geo-Tagged Data",
                  "Panchayat Cadastral Maps",
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

            {/* Right Column: Direct Action Box */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "20px",
                  p: { xs: 2.2, sm: 2.5 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 800 }}>
                  Contact Revenue Officials
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5 }}>
                  Access direct contact numbers and office addresses of Tahsildars and RDOs across all mandals.
                </Typography>
                <Button
                  component={Link}
                  href="/directory"
                  variant="contained"
                  sx={{
                    bgcolor: "#F5B800",
                    color: "#082B50 !important",
                    textTransform: "none",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    py: 1,
                    px: 3,
                    borderRadius: "100px",
                    boxShadow: "0 4px 14px rgba(245, 184, 0, 0.3)",
                    "&:hover": {
                      bgcolor: "#D49D00",
                      color: "#082B50 !important",
                    },
                  }}
                >
                  <Typography component="span" sx={{ color: "#082B50 !important", fontWeight: 800 }}>
                    View Official Directory →
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* 7. STANDARDIZED BOTTOM QUICK NAVIGATION PILLS */}
      <Box sx={{ bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", py: 4 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 3.5, md: 5 } }}>
          <Typography
            sx={{
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "#64748B",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 2,
            }}
          >
            RELATED DISTRICT PORTAL SECTIONS
          </Typography>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "Administrative Setup", href: "/about/structure" },
              { label: "Who's Who Leadership", href: "/about/whos-who" },
              { label: "District Directory", href: "/directory" },
              { label: "Photo & Video Gallery", href: "/media" },
              { label: "Citizen Services", href: "/services" },
              { label: "Welfare Schemes", href: "/schemes" },
              { label: "Public Grievances (PGRS)", href: "/pgrs" },
            ].map((pill) => (
              <Button
                key={pill.href}
                component={Link}
                href={pill.href}
                variant="outlined"
                sx={{
                  bgcolor: "#FFFFFF",
                  borderColor: "#CBD5E1",
                  color: "#082B50 !important",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  px: 2.2,
                  py: 0.8,
                  borderRadius: "100px",
                  "&:hover": {
                    borderColor: "#082B50",
                    bgcolor: "rgba(8, 43, 80, 0.04)",
                    color: "#082B50 !important",
                  },
                }}
              >
                <Typography component="span" sx={{ color: "#082B50 !important", fontWeight: 700, fontSize: "0.85rem" }}>
                  {pill.label}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
