"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CastleRoundedIcon from "@mui/icons-material/CastleRounded";
import TempleHinduRoundedIcon from "@mui/icons-material/TempleHinduRounded";
import TheaterComedyRoundedIcon from "@mui/icons-material/TheaterComedyRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import TerrainRoundedIcon from "@mui/icons-material/TerrainRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import PhishingRoundedIcon from "@mui/icons-material/PhishingRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import Link from "next/link";

// 1. Quick Facts 6 Metrics (Exact mockup data & styling)
const quickFacts = [
  { value: "19.30 Lakh", label: "Population", icon: <GroupsRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
  { value: "3", label: "Revenue Divisions", icon: <AccountBalanceRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
  { value: "27", label: "Mandals", icon: <LocationCityRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
  { value: "982", label: "Villages", icon: <HomeWorkRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
  { value: "53.21%", label: "Literacy Rate", icon: <BarChartRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
  { value: "4124 Sq. Km.", label: "Area", icon: <OpenInFullRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
];

// 2. History & Heritage 5 Cards
const heritageCards = [
  {
    title: "Vizianagaram Fort",
    desc: "Historic fort of Vizianagaram",
    image: "/images/vizianagaram-fort.jpg",
    icon: <CastleRoundedIcon sx={{ color: "#F59E0B", fontSize: 16 }} />,
    href: "/tourism",
  },
  {
    title: "Ramatheertham",
    desc: "Sacred temple town",
    image: "/images/ramatheertham-temple.jpg",
    icon: <TempleHinduRoundedIcon sx={{ color: "#F59E0B", fontSize: 16 }} />,
    href: "/tourism",
  },
  {
    title: "Cultural Heritage",
    desc: "Rich cultural legacy",
    image: "/images/cultural-heritage.jpg",
    icon: <TheaterComedyRoundedIcon sx={{ color: "#F59E0B", fontSize: 16 }} />,
    href: "/tourism",
  },
  {
    title: "Maharaja College",
    desc: "Prestigious institution",
    image: "/images/maharaja-college.jpg",
    icon: <SchoolRoundedIcon sx={{ color: "#F59E0B", fontSize: 16 }} />,
    href: "/about/district",
  },
  {
    title: "Famous Personalities",
    desc: "Pride of Vizianagaram",
    image: "/images/maharaja-personality.jpg",
    icon: <PersonRoundedIcon sx={{ color: "#F59E0B", fontSize: 16 }} />,
    href: "/about/whos-who",
  },
];

// 3. Geography 6 Cards
const geographyCards = [
  {
    title: "Location",
    desc: "North-Eastern Andhra Pradesh between 17°15' to 19°15' N and 83°00' to 83°45' E.",
    icon: <LocationOnRoundedIcon sx={{ color: "#F59E0B", fontSize: 22 }} />,
  },
  {
    title: "Boundaries",
    desc: "Bounded by Srikakulam on the East, Visakhapatnam & Bay of Bengal on the South, and Manyam on the North.",
    icon: <LayersRoundedIcon sx={{ color: "#F59E0B", fontSize: 22 }} />,
  },
  {
    title: "Hills & Ranges",
    desc: "Flanked by the scenic Eastern Ghats hill ranges and verdant undulating forest valleys.",
    icon: <TerrainRoundedIcon sx={{ color: "#F59E0B", fontSize: 22 }} />,
  },
  {
    title: "Rivers",
    desc: "Nourished by the perennial Nagavali, Vegavathi, Gomukhi, Champavathi, and Gosthani rivers.",
    icon: <WaterDropRoundedIcon sx={{ color: "#F59E0B", fontSize: 22 }} />,
  },
  {
    title: "Climate",
    desc: "Tropical coastal climate with normal annual rainfall of ~1,131 mm from dual monsoons.",
    icon: <WbSunnyRoundedIcon sx={{ color: "#F59E0B", fontSize: 22 }} />,
  },
  {
    title: "Forest Resources",
    desc: "Covers 18%+ of geographical area with sal, teak, bamboo, and medicinal biodiversity.",
    icon: <ForestRoundedIcon sx={{ color: "#F59E0B", fontSize: 22 }} />,
  },
];

// 4. Agriculture & Economy Cards
const economicCards = [
  {
    title: "Agriculture",
    stat: "70%+ Workforce",
    desc: "Paddy, sugarcane, groundnut, maize, ragi and pulses fostered by extensive minor and medium irrigation networks.",
    icon: <AgricultureRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} />,
  },
  {
    title: "Livestock",
    stat: "Dairy & Rearing",
    desc: "Flourishing dairy and sheep holdings supported by women SHG federations and breed enhancement programs.",
    icon: <PetsRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} />,
  },
  {
    title: "Forest Resources",
    stat: "Timber & Produce",
    desc: "Rich minor forest produce including bamboo, beedi leaves, tamarind and herbs collected by tribal communities.",
    icon: <ForestRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} />,
  },
  {
    title: "Marine Resources",
    stat: "28 Km Coast",
    desc: "Active marine fisheries in coastal mandals alongside inland fish culture in district tanks.",
    icon: <PhishingRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} />,
  },
  {
    title: "Minerals",
    stat: "Manganese Hub",
    desc: "Extensive reserves of manganese ore, lime kankar, quartz and granite supplying ferro-alloys units.",
    icon: <LayersRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} />,
  },
];

// 5. Explore Connected Portals
const exploreCards = [
  { title: "Administrative Setup", desc: "Collectorate, Mandals & Villages", href: "/about/structure", icon: <AccountBalanceRoundedIcon sx={{ color: "#082B50" }} /> },
  { title: "Who's Who", desc: "Leadership and key officials", href: "/about/whos-who", icon: <PersonRoundedIcon sx={{ color: "#082B50" }} /> },
  { title: "District Map", desc: "Interactive GIS and mandal borders", href: "/map", icon: <MapRoundedIcon sx={{ color: "#082B50" }} /> },
  { title: "Departments", desc: "Official district departmental portals", href: "/about/drda", icon: <BusinessRoundedIcon sx={{ color: "#082B50" }} /> },
  { title: "Tourism", desc: "Forts, waterfalls, and scenic places", href: "/tourism", icon: <CastleRoundedIcon sx={{ color: "#082B50" }} /> },
  { title: "Citizen Services", desc: "Apply for certificates and schemes", href: "/citizen-services", icon: <GroupsRoundedIcon sx={{ color: "#082B50" }} /> },
];

export default function DistrictProfilePage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      {/* 1. TOP HERO SECTION WITH SCULPTURES AND MAP CARD (MATCHING /map PAGE EXACTLY) */}
      <Box
        component="section"
        sx={{
          bgcolor: "#FFFFFF",
          background: "linear-gradient(135deg, #FFFFFF 0%, #FFFDF5 60%, #FEF9C3 100%)",
          pt: { xs: 2.5, sm: 3, md: 3.5 },
          pb: { xs: 8, sm: 9, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft yellow organic backdrop circle */}
        <Box
          aria-hidden="true"
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

        {/* Temple Architecture Line Scripture / Sculpture Watermark (from /map) */}
        <Box
          aria-hidden="true"
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

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Breadcrumb: Home > About District > District Profile */}
          <Breadcrumbs
            aria-label="Breadcrumb"
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
              <MuiLink component={Link} href="/" sx={{ color: "#082B50", textDecoration: "none", fontWeight: 700, "&:hover": { textDecoration: "underline" } }}>
                Home
              </MuiLink>
            </Stack>
            <MuiLink component={Link} href="/about/district" sx={{ color: "#64748B", textDecoration: "none", "&:hover": { color: "#082B50" } }}>
              About District
            </MuiLink>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.78rem" }}>
              District Profile
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            {/* Left Column: Title & Descriptions */}
            <Grid size={{ xs: 12, md: 6.5 }}>
              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "2.3rem", sm: "3.1rem", md: "3.6rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.08,
                  mb: 1.5,
                }}
              >
                About Vizianagaram
                <br />
                District
              </Typography>
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  lineHeight: 1.6,
                  fontWeight: 500,
                  maxWidth: 520,
                  mb: 3,
                }}
              >
                Discover the history, geography, culture and development journey of Vizianagaram.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/map"
                  sx={{
                    bgcolor: "#F5B800",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3.2,
                    py: 1.1,
                    fontSize: "0.88rem",
                    fontWeight: 900,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(245, 184, 0, 0.3)",
                    "&:hover": { bgcolor: "#D49D00" },
                  }}
                >
                  Explore District Map
                </Button>
                <Button
                  component={Link}
                  href="/about/drda"
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
                  View DRDA Profile
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: Hero High-Resolution Photography with Official Survey Badge (From /map) */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 310, md: 360 },
                  borderRadius: { xs: "24px", sm: "32px", md: "38px" },
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
                    backgroundImage: "url('/images/vizianagaram-fort.jpg')",
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

      {/* 2. FLOATING QUICK FACTS CARD (OVERLAPPING HERO EXACTLY LIKE MOCKUP) */}
      <Container maxWidth="xl" sx={{ mt: { xs: -5, sm: -6, md: -7 }, position: "relative", zIndex: 10, mb: { xs: 5, md: 6.5 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "22px",
            p: { xs: 2.5, sm: 3, md: 3.2 },
            boxShadow: "0 20px 45px -10px rgba(8, 43, 80, 0.12), 0 4px 12px rgba(0,0,0,0.03)",
            border: "1px solid rgba(226, 232, 240, 0.9)",
          }}
        >
          {/* Quick Facts Header */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ width: 22, height: 4, backgroundColor: "#FFC107", borderRadius: "2px", mb: 0.8 }} />
            <Typography
              sx={{
                color: "#082B50",
                fontSize: "1.02rem",
                fontWeight: 850,
                letterSpacing: "-0.01em",
              }}
            >
              Quick Facts
            </Typography>
          </Box>

          {/* 6 Equal Stats Columns */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(6, 1fr)",
              },
              gap: { xs: 2, md: 0 },
            }}
          >
            {quickFacts.map((fact, idx) => (
              <Box
                key={fact.label}
                sx={{
                  textAlign: "center",
                  px: { xs: 1, md: 2 },
                  borderRight: {
                    md: idx !== quickFacts.length - 1 ? "1px solid #E2E8F0" : "none",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 0.8 }}>
                  {fact.icon}
                </Box>
                <Typography
                  sx={{
                    color: "#082B50",
                    fontSize: { xs: "1.25rem", sm: "1.4rem" },
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}
                >
                  {fact.value}
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "0.72rem",
                    fontWeight: 650,
                    mt: 0.4,
                  }}
                >
                  {fact.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* 3. ABOUT THE DISTRICT (TWO-COLUMN WITH WIDE ROUNDED FORT LANDSCAPE) */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: { xs: 6, md: 7.5 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.46fr 0.54fr" },
            gap: { xs: 3.5, md: 5 },
            alignItems: "center",
          }}
        >
          {/* Left Text Column */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <Box sx={{ width: 14, height: 14, borderRadius: "3px", backgroundColor: "#FFC107" }} />
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                ABOUT THE DISTRICT
              </Typography>
            </Stack>

            <Typography
              component="h2"
              sx={{
                color: "#082B50",
                fontSize: { xs: "1.85rem", md: "2.3rem" },
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              About Vizianagaram District
            </Typography>

            <Typography
              sx={{
                color: "#475569",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Vizianagaram is a district of immense heritage and vibrant communities. My commitment is to ensure that every welfare scheme reaches every household, and every citizen has access to government services with ease and dignity.
            </Typography>

            <Button
              component={Link}
              href="/about/drda"
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
              sx={{
                backgroundColor: "#FFC107",
                color: "#082B50 !important",
                fontWeight: 850,
                fontSize: "0.85rem",
                px: 3,
                py: 1.15,
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 6px 18px rgba(245, 158, 11, 0.35)",
                "&:hover": {
                  backgroundColor: "#FFD54F",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Know More
            </Button>
          </Box>

          {/* Right Wide Fort Landscape Image */}
          <Box>
            <Box
              sx={{
                width: "100%",
                height: { xs: 230, sm: 270, md: 290 },
                borderRadius: "22px",
                overflow: "hidden",
                backgroundImage: 'url("/images/vizianagaram-fort-walls.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 16px 36px rgba(8, 43, 80, 0.12)",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* 4. COLLECTOR MESSAGE (ONE WIDE HORIZONTAL WHITE CARD WITH 28% / 72% RATIO) */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: { xs: 6, md: 7.5 } }}>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "22px",
            p: { xs: 3, md: 4 },
            border: "1px solid #E2E8F0",
            boxShadow: "0 12px 32px rgba(8, 43, 80, 0.05)",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.26fr 0.74fr" },
            gap: { xs: 3, md: 4.5 },
            alignItems: "center",
          }}
        >
          {/* Left: Collector Portrait & Action Pills */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 130,
                height: 130,
                borderRadius: "18px",
                overflow: "hidden",
                mx: "auto",
                mb: 1.5,
                border: "2px solid #E2E8F0",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
                backgroundImage: 'url("/leaders/collector.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            />
            <Typography sx={{ color: "#082B50", fontSize: "0.95rem", fontWeight: 850 }}>
              Sri S. Ram Sundar Reddy, I.A.S.
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.75rem", fontWeight: 600, mb: 1.5 }}>
              District Collector &amp; Magistrate
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
              <Button
                size="small"
                startIcon={<CallRoundedIcon sx={{ fontSize: "14px !important", color: "#FFFFFF !important" }} />}
                sx={{
                  backgroundColor: "#082B50",
                  color: "#FFFFFF !important",
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  textTransform: "none",
                  px: 1.8,
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#0C3C6E" },
                }}
              >
                Office
              </Button>
              <Button
                size="small"
                startIcon={<BusinessRoundedIcon sx={{ fontSize: "14px !important", color: "#082B50 !important" }} />}
                sx={{
                  backgroundColor: "#F1F5F9",
                  color: "#082B50 !important",
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  textTransform: "none",
                  px: 1.8,
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#E2E8F0" },
                }}
              >
                Collectorate
              </Button>
            </Stack>
          </Box>

          {/* Right: Message, Highlighted Vision, and 4 Check Priorities */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.2 }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "8px",
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D97706",
                }}
              >
                <BusinessRoundedIcon sx={{ fontSize: 17 }} />
              </Box>
              <Typography sx={{ color: "#082B50", fontSize: "1.25rem", fontWeight: 850 }}>
                Message from the Collector
              </Typography>
            </Stack>

            <Typography sx={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.65, mb: 2 }}>
              Vizianagaram is a district of immense heritage and vibrant communities. My commitment is to ensure that every welfare scheme reaches every household, and every citizen has access to government services with ease and dignity.
            </Typography>

            {/* Vision Highlight Banner */}
            <Box
              sx={{
                backgroundColor: "#FFFDF5",
                borderLeft: "4px solid #FFC107",
                borderRadius: "8px",
                p: 1.8,
                mb: 2.2,
              }}
            >
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.4,
                }}
              >
                VISION FOR THE DISTRICT
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: "0.88rem", fontStyle: "italic", lineHeight: 1.5, fontWeight: 600 }}>
                &ldquo;A vibrant coastal district where development is inclusive, education is universal, and heritage is preserved.&rdquo;
              </Typography>
            </Box>

            {/* 2x2 Priorities Check Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 1.2,
              }}
            >
              {[
                "Quality Education for All",
                "Agricultural Prosperity",
                "Accessible Citizen Services",
                "Heritage Conservation",
              ].map((item) => (
                <Stack key={item} direction="row" alignItems="center" spacing={1}>
                  <CheckCircleRoundedIcon sx={{ color: "#F59E0B", fontSize: 18 }} />
                  <Typography sx={{ color: "#334155", fontSize: "0.82rem", fontWeight: 650 }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* 5. HISTORY & HERITAGE (5 CARDS IN ONE ROW MATCHING MOCKUP) */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: { xs: 6, md: 7.5 } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.5 }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.6 }}>
              <Box sx={{ width: 14, height: 14, borderRadius: "3px", backgroundColor: "#FFC107" }} />
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                HISTORY &amp; HERITAGE
              </Typography>
            </Stack>
            <Typography
              component="h2"
              sx={{
                color: "#082B50",
                fontSize: { xs: "1.55rem", md: "1.95rem" },
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              A land of rich culture and glorious past.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/tourism"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "14px !important", color: "#D97706 !important" }} />}
            sx={{
              color: "#D97706 !important",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "none",
              display: { xs: "none", sm: "inline-flex" },
              "&:hover": { backgroundColor: "rgba(245, 158, 11, 0.08)" },
            }}
          >
            View All Heritage →
          </Button>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
          }}
        >
          {heritageCards.map((card) => (
            <Card
              key={card.title}
              component={Link}
              href={card.href}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(8, 43, 80, 0.03)",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "#F59E0B",
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 28px rgba(8, 43, 80, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  height: 125,
                  backgroundImage: `url("${card.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#E2E8F0",
                }}
              />
              <Box sx={{ p: 1.8, display: "flex", flex: 1, flexDirection: "column" }}>
                <Stack direction="row" alignItems="center" spacing={0.8} sx={{ mb: 0.4 }}>
                  {card.icon}
                  <Typography sx={{ color: "#082B50", fontSize: "0.88rem", fontWeight: 800 }}>
                    {card.title}
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#64748B", fontSize: "0.72rem", lineHeight: 1.45, mb: 1.5 }}>
                  {card.desc}
                </Typography>
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    mt: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.4,
                  }}
                >
                  Know More →
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>

      {/* 6. GEOGRAPHY (3x2 GRID ON LIGHT CANVAS) */}
      <Box sx={{ backgroundColor: "#F1F5F9", py: { xs: 5, md: 7 }, mb: { xs: 6, md: 7.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            component="span"
            sx={{
              color: "#D97706",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              mb: 0.4,
            }}
          >
            GEOGRAPHY
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#082B50",
              fontSize: { xs: "1.55rem", md: "1.95rem" },
              fontWeight: 900,
              letterSpacing: "-0.03em",
              mb: 3,
            }}
          >
            A diverse landscape of natural beauty.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {geographyCards.map((geo) => (
              <Box
                key={geo.title}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  p: 2.4,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(8, 43, 80, 0.03)",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "10px",
                      backgroundColor: "rgba(245, 158, 11, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {geo.icon}
                  </Box>
                  <Typography sx={{ color: "#082B50", fontSize: "0.98rem", fontWeight: 800 }}>
                    {geo.title}
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#64748B", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  {geo.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 7. AGRICULTURE & ECONOMY */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: { xs: 6, md: 7.5 } }}>
        <Typography
          component="span"
          sx={{
            color: "#D97706",
            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "block",
            mb: 0.4,
          }}
        >
          AGRICULTURE &amp; ECONOMY
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: "#082B50",
            fontSize: { xs: "1.55rem", md: "1.95rem" },
            fontWeight: 900,
            letterSpacing: "-0.03em",
            mb: 3,
          }}
        >
          Economic Pillars &amp; Rural Enterprises
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(5, 1fr)",
            },
          }}
        >
          {economicCards.map((eco) => (
            <Card
              key={eco.title}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                p: 2.2,
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 8px rgba(8, 43, 80, 0.03)",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "#F59E0B",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 20px rgba(8, 43, 80, 0.08)",
                },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    backgroundColor: "rgba(245, 158, 11, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {eco.icon}
                </Box>
                <Typography sx={{ color: "#D97706", fontSize: "0.68rem", fontWeight: 800, backgroundColor: "#FEF3C7", px: 0.8, py: 0.3, borderRadius: "6px" }}>
                  {eco.stat}
                </Typography>
              </Stack>
              <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 800, mb: 0.8 }}>
                {eco.title}
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.55 }}>
                {eco.desc}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>

      {/* 8. EXPLORE VIZIANAGARAM */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "22px",
            p: { xs: 3, md: 4 },
            border: "1px solid #E2E8F0",
            boxShadow: "0 8px 24px rgba(8, 43, 80, 0.04)",
          }}
        >
          <Typography
            component="span"
            sx={{
              color: "#D97706",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              mb: 0.4,
            }}
          >
            EXPLORE VIZIANAGARAM
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#082B50",
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              fontWeight: 900,
              letterSpacing: "-0.03em",
              mb: 3,
            }}
          >
            Connected Administrative &amp; Public Portals
          </Typography>

          <Grid container spacing={2}>
            {exploreCards.map((card) => (
              <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  component={Link}
                  href={card.href}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    p: 2,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#FFFDF5",
                      borderColor: "#F59E0B",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(245, 158, 11, 0.15)",
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 0.5 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {card.icon}
                      <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 800 }}>
                        {card.title}
                      </Typography>
                    </Stack>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: "#D97706" }} />
                  </Stack>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.5, pl: 3.5 }}>
                    {card.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
