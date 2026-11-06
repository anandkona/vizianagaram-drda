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
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import TempleHinduRoundedIcon from "@mui/icons-material/TempleHinduRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// Event Categories
const EVENT_CATEGORIES = [
  { id: "all", label: "All Events", icon: CalendarMonthRoundedIcon, count: "12 Events" },
  { id: "job-mela", label: "Job Melas & Skilling", icon: WorkRoundedIcon, count: "3 Drives" },
  { id: "agriculture", label: "Agri & Farmer Expos", icon: AgricultureRoundedIcon, count: "3 Camps" },
  { id: "shg-enterprise", label: "SHG & Women Melas", icon: GroupsRoundedIcon, count: "3 Melas" },
  { id: "festival", label: "Festivals & Utsavams", icon: TempleHinduRoundedIcon, count: "3 Utsavams" },
];

interface DistrictEvent {
  id: string;
  category: "job-mela" | "agriculture" | "shg-enterprise" | "festival";
  categoryLabel: string;
  title: string;
  teluguTitle: string;
  date: string;
  time: string;
  venue: string;
  mandal: string;
  organizer: string;
  registrationStatus: "Open" | "Pre-Registration" | "Walk-in Free" | "Annual Utsavam";
  statusColor: string;
  statusBg: string;
  seatsCapacity: string;
  description: string;
  targetAudience: string;
  image: string;
  actionType: "register" | "call" | "view";
  phone?: string;
  officialLink?: string;
}

const EVENTS_DATABASE: DistrictEvent[] = [
  {
    id: "apssdc-mega-job-mela",
    category: "job-mela",
    categoryLabel: "Job Melas & Skilling",
    title: "APSSDC District Mega Job Mela 2026",
    teluguTitle: "ఆంధ్రప్రదేశ్ రాష్ట్ర నైపుణ్యాభివృద్ధి సంస్థ (APSSDC) మెగా జాబ్ మేళా",
    date: "18 June 2026",
    time: "09:30 AM – 04:30 PM",
    venue: "Maharajah's (M.R.) Autonomous College Grounds",
    mandal: "Vizianagaram Urban",
    organizer: "District Employment Exchange & APSSDC Naipunyam Cell",
    registrationStatus: "Open",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    seatsCapacity: "45 Corporate Recruiters • 1,200+ Openings",
    description: "Multi-sector recruitment drive for SSC, Intermediate, ITI, Diploma, and Graduate candidates across manufacturing, retail, pharma, and IT service companies.",
    targetAudience: "Unemployed youth aged 18–32 from all 27 Mandals",
    image: "/images/maharaja-college.jpg",
    actionType: "register",
    phone: "08922-276720",
    officialLink: "https://naipunyam.ap.gov.in",
  },
  {
    id: "sirimanotsavam-2026",
    category: "festival",
    categoryLabel: "Festivals & Utsavams",
    title: "Sri Pydithalli Ammavari Sirimanotsavam & Vizianagaram Utsavalu",
    teluguTitle: "శ్రీ పైడితల్లి అమ్మవారి సిరిమానోత్సవం & విజయనగరం ఉత్సవాలు",
    date: "First Tuesday after Vijayadashami 2026",
    time: "03:00 PM onwards",
    venue: "Fort Road to Pydithalli Ammavari Temple Complex",
    mandal: "Vizianagaram Town",
    organizer: "District Administration & Endowments Department",
    registrationStatus: "Annual Utsavam",
    statusColor: "#B45309",
    statusBg: "#FEF3C7",
    seatsCapacity: "Open Public Festival • Lakhs of Devotees",
    description: "The historic northern Andhra folk spiritual celebration featuring the sacred Sirimanu chariot, traditional Anjali Ratham, and week-long cultural concerts at Maharaja Music College.",
    targetAudience: "Open to general public and cultural pilgrims worldwide",
    image: "/images/vzm-temple-sirimanotsavam-official.jpg",
    actionType: "view",
    officialLink: "https://vizianagaram.ap.gov.in",
  },
  {
    id: "shg-credit-linkage-mela",
    category: "shg-enterprise",
    categoryLabel: "SHG & Women Melas",
    title: "District SHG Bank-Linkage & Stree Nidhi Credit Camp",
    teluguTitle: "జిల్లా మహిళా సంఘాల బ్యాంకు లింకేజ్ మరియు స్త్రీ నిధి రుణ పంపిణీ మేళా",
    date: "24 June 2026",
    time: "10:00 AM – 03:00 PM",
    venue: "Collectorate Meeting Hall (Auditorium)",
    mandal: "Vizianagaram Collectorate",
    organizer: "DRDA / SERP Andhra Pradesh & Lead District Bank",
    registrationStatus: "Pre-Registration",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
    seatsCapacity: "₹45 Crores Disbursal • 2,400 SHG Collectives",
    description: "Direct sanction and credit disbursement camp for self-help groups graduating into micro-enterprises under Sunna Vaddi (zero-interest) and Stree Nidhi cooperative credit lines.",
    targetAudience: "SHG leaders, Village Organizations (VOs) & bank coordinators",
    image: "/images/drda-women-shg.jpg",
    actionType: "call",
    phone: "1902",
  },
  {
    id: "millet-food-expo",
    category: "agriculture",
    categoryLabel: "Agri & Farmer Expos",
    title: "Kisan Millet Conclave & Cashew Value-Addition Expo",
    teluguTitle: "రైతు చిరుధాన్యాల సదస్సు & జీడిమామిడి విలువల పెంపుదల ప్రదర్శన",
    date: "02 July 2026",
    time: "09:00 AM – 05:00 PM",
    venue: "Agricultural Market Committee Yard",
    mandal: "Bobbili Mandal",
    organizer: "Agriculture Department & FPO Promotion Consortium",
    registrationStatus: "Walk-in Free",
    statusColor: "#047857",
    statusBg: "#D1FAE5",
    seatsCapacity: "24 FPOs Exhibiting • 800+ Farmers",
    description: "Exhibition showcasing modern de-hulling machines, solar dry beds, certified organic desi seeds, and direct B2B buyer-seller agreements for cashew and millets.",
    targetAudience: "Smallholders, FPO directors, and organic farm collectives",
    image: "/images/enterprise-millets.jpg",
    actionType: "view",
  },
  {
    id: "ddu-gky-residential-batch",
    category: "job-mela",
    categoryLabel: "Job Melas & Skilling",
    title: "DDU-GKY Free Residential Skilling Batch Orientation",
    teluguTitle: "దీన్ దయాళ్ ఉపాధ్యాయ గ్రామీణ కౌశల్య యోజన ఉచిత వసతి శిక్షణ నమోదు",
    date: "08 July 2026",
    time: "10:00 AM – 01:00 PM",
    venue: "DRDA Skill Training Hub, Cantonment Road",
    mandal: "Vizianagaram Urban",
    organizer: "DRDA Skill Cell & Ministry of Rural Development",
    registrationStatus: "Open",
    statusColor: "#15803D",
    statusBg: "#DCFCE7",
    seatsCapacity: "120 Seats • 100% Placement Guaranteed",
    description: "Orientation and document screening for free 3-month residential technical training in Solar PV Installation, Healthcare Assistance, and Logistics Operations with free food and lodging.",
    targetAudience: "Rural youth (18–35 yrs) from BPL / Antyodaya households",
    image: "/images/vizianagaram-administrative-headquarters.jpg",
    actionType: "register",
    phone: "08922-276720",
  },
  {
    id: "bobbili-veena-artisan-workshop",
    category: "festival",
    categoryLabel: "Festivals & Utsavams",
    title: "Bobbili Saraswati Veena Heritage Craft Symposium",
    teluguTitle: "బొబ్బిలి సరస్వతి వీణ కళాకారుల జాతీయ వారసత్వ సదస్సు",
    date: "15 July 2026",
    time: "10:30 AM – 04:00 PM",
    venue: "Bobbili Royal Palace Heritage Pavilion",
    mandal: "Bobbili Town",
    organizer: "Department of Handlooms & Textiles & District Tourism Council",
    registrationStatus: "Walk-in Free",
    statusColor: "#047857",
    statusBg: "#D1FAE5",
    seatsCapacity: "GI Tag Showcase • Master Craftsmen Live Demos",
    description: "Celebration of the world-famous Geographical Indication (GI) Bobbili Saraswati Veena craft, live jackwood carving demonstrations, and artisan financial support announcements.",
    targetAudience: "Artisans, music lovers, students, and cultural tourists",
    image: "/images/cultural-heritage.jpg",
    actionType: "view",
  },
  {
    id: "women-entrepreneurship-summit",
    category: "shg-enterprise",
    categoryLabel: "SHG & Women Melas",
    title: "One Family One Entrepreneur (OFOE) District Business Summit",
    teluguTitle: "ఒక కుటుంబం ఒక పారిశ్రామికవేత్త (OFOE) జిల్లా స్థాయి మహిళా వ్యాపార సదస్సు",
    date: "22 July 2026",
    time: "09:30 AM – 03:30 PM",
    venue: "Zilla Parishad Conference Hall",
    mandal: "Vizianagaram City",
    organizer: "DRDA MSME Cell & DIC Vizianagaram",
    registrationStatus: "Pre-Registration",
    statusColor: "#1D4ED8",
    statusBg: "#EFF6FF",
    seatsCapacity: "350 Women Entrepreneurs • Bank Counters",
    description: "Practical mentoring, FSSAI on-the-spot registration desks, packaging workshops, and trade licensing assistance for SHG-promoted micro units across all 27 Mandals.",
    targetAudience: "Women entrepreneurs, SHG group leaders, and OFOE beneficiaries",
    image: "/images/women-entrepreneurship-real.jpg",
    actionType: "call",
    phone: "1902",
  },
  {
    id: "natural-farming-camp",
    category: "agriculture",
    categoryLabel: "Agri & Farmer Expos",
    title: "Andhra Pradesh Community Natural Farming (APCNF) Field Camp",
    teluguTitle: "రైతు భరోసా కేంద్రాల ఆధ్వర్యంలో ప్రకృతి వ్యవసాయ క్షేత్ర శిక్షణ",
    date: "28 July 2026",
    time: "08:30 AM – 01:00 PM",
    venue: "Rythu Bharosa Kendram (RBK) Model Farm",
    mandal: "Cheepurupalli Mandal",
    organizer: "Department of Agriculture & Rythu Sadhikara Samstha",
    registrationStatus: "Walk-in Free",
    statusColor: "#047857",
    statusBg: "#D1FAE5",
    seatsCapacity: "Live Field Demonstration • 250 Farmers",
    description: "Hands-on preparation of Jeevamrutham, Beejamrutham, and Kashayams for chemical-free paddy, sugarcane, and groundnut farming without chemical dependency.",
    targetAudience: "Farmers registered under PM-KISAN & Rythu Bharosa Kendras",
    image: "/images/farmer-support-real.jpg",
    actionType: "view",
  },
  {
    id: "itda-tribal-produce-mela",
    category: "shg-enterprise",
    categoryLabel: "SHG & Women Melas",
    title: "Agency Tribal Forest Produce & Handloom Fair (ITDA)",
    teluguTitle: "గిరిజన ఉత్పత్తుల అమ్మకాలు & అటవీ జీవనోపాధి ప్రదర్శన మేళా",
    date: "05 August 2026",
    time: "10:00 AM – 08:00 PM",
    venue: "Collectorate Open Exhibition Grounds",
    mandal: "Vizianagaram Town",
    organizer: "ITDA Vizianagaram & Girijan Cooperative Corporation (GCC)",
    registrationStatus: "Walk-in Free",
    statusColor: "#047857",
    statusBg: "#D1FAE5",
    seatsCapacity: "60 Agency Stalls • Honey, Cashew & Hill Brooms",
    description: "Direct exhibition and sale of raw forest honey, organic turmeric, handmade bamboo baskets, and handloom fabrics harvested by tribal women collectives in agency tracts.",
    targetAudience: "Open to all citizens and wholesale buyers",
    image: "/images/shg-outdoor-real.jpg",
    actionType: "view",
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return EVENTS_DATABASE.filter((event) => {
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.teluguTitle.toLowerCase().includes(q) ||
        event.venue.toLowerCase().includes(q) ||
        event.mandal.toLowerCase().includes(q) ||
        event.organizer.toLowerCase().includes(q);
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
              Events & Training
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
                OFFICIAL DISTRICT CALENDAR • VIZIANAGARAM
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
                Events & Training Calendar
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
                ఉపాధి మేళాలు, నైపుణ్య శిక్షణలు, రైతు సదస్సులు మరియు అధికారిక ఉత్సవాల వేదిక
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
                Official schedule of APSSDC Job Melas, DRDA SHG credit camps, agriculture demonstrations, and historic cultural festivals organized by the Vizianagaram District Administration across all 27 Mandals.
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
                  placeholder="Search events, venues, mandals or keywords (e.g. Job Mela, Sirimanu, SHG)..."
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

            {/* Right Column: Hero High-Resolution Real Photography with Official Floating Badge */}
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
                  src="/images/vzm-collectorate-gathering-official.jpg"
                  alt="Vizianagaram District Events & Public Coordination"
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
                    <EventAvailableRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Official Administrative Events Desk
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Collectorate & 27 Mandals Covered
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Live Calendar"
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
            {EVENT_CATEGORIES.map((cat) => {
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

      {/* 3. MAIN EVENTS DIRECTORY (COMPACT 3/4 COLUMN CARDS) */}
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
                SCHEDULED SESSIONS & CONCLAVES
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedCategory === "all" ? "All Upcoming District Events" : EVENT_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.95rem", ml: 1 }}>
                  ({filteredEvents.length} {filteredEvents.length === 1 ? "Program" : "Programs"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.75rem", fontWeight: 600 }}>
              Official Notice Board • Government of Andhra Pradesh
            </Typography>
          </Stack>

          {/* Compact Cards Grid (3 Columns on desktop for rich event metadata) */}
          <Grid container spacing={2}>
            {filteredEvents.map((event) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
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
                      "& .event-img": { transform: "scale(1.04)" },
                      "& .arrow-cta": { transform: "translateX(2px)" },
                    },
                  }}
                >
                  {/* Compact Real Image Header (125px) */}
                  <Box sx={{ position: "relative", height: 125, width: "100%", overflow: "hidden", bgcolor: "#E2E8F0" }}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="event-img"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        label={event.categoryLabel}
                        size="small"
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      />
                    </Box>

                    {/* Status badge top-right */}
                    <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
                      <Chip
                        label={event.registrationStatus}
                        size="small"
                        sx={{
                          bgcolor: event.statusBg,
                          color: event.statusColor,
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                      />
                    </Box>

                    {/* Organizer bottom-left */}
                    <Box sx={{ position: "absolute", bottom: 6, left: 8, right: 8, zIndex: 2 }}>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.95)",
                          fontSize: "0.65rem",
                          fontWeight: 650,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {event.organizer}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Body Content */}
                  <Box sx={{ p: 1.75, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: "0.92rem",
                        fontWeight: 800,
                        lineHeight: 1.25,
                        mb: 0.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "2.3rem",
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#B45309",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                        mb: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.teluguTitle}
                    </Typography>

                    {/* Event Logistics Info Box */}
                    <Box sx={{ bgcolor: "#F8FAFC", p: 1.2, borderRadius: 1.5, border: "1px solid #E2E8F0", mb: 1.25 }}>
                      <Stack spacing={0.5}>
                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <CalendarMonthRoundedIcon sx={{ fontSize: 13, color: "#D97706" }} />
                          <Typography sx={{ color: "#1E293B", fontSize: "0.72rem", fontWeight: 700 }}>
                            {event.date}
                          </Typography>
                          <Typography sx={{ color: "#94A3B8", fontSize: "0.7rem" }}>|</Typography>
                          <AccessTimeRoundedIcon sx={{ fontSize: 13, color: "#64748B" }} />
                          <Typography sx={{ color: "#475569", fontSize: "0.7rem", fontWeight: 600 }}>
                            {event.time}
                          </Typography>
                        </Stack>

                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <PlaceRoundedIcon sx={{ fontSize: 13, color: "#DC2626" }} />
                          <Typography
                            sx={{
                              color: "#334155",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {event.venue} ({event.mandal})
                          </Typography>
                        </Stack>

                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <GroupsRoundedIcon sx={{ fontSize: 13, color: "#2563EB" }} />
                          <Typography
                            sx={{
                              color: "#082B50",
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {event.seatsCapacity}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.74rem",
                        lineHeight: 1.45,
                        mb: 1.5,
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {event.description}
                    </Typography>

                    {/* Footer Actions */}
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ pt: 1.25, borderTop: "1px solid #F1F5F9" }}>
                      {event.actionType === "register" ? (
                        <Button
                          component="a"
                          href={event.phone ? `tel:${event.phone}` : "tel:08922276720"}
                          size="small"
                          startIcon={<HowToRegRoundedIcon sx={{ fontSize: 14 }} />}
                          endIcon={<ArrowForwardRoundedIcon className="arrow-cta" sx={{ fontSize: 13, transition: "transform 0.2s" }} />}
                          sx={{
                            bgcolor: "#082B50",
                            color: "#FFFFFF !important",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 20,
                            fontSize: "0.72rem",
                            fontWeight: 750,
                            textTransform: "none",
                            "&:hover": { bgcolor: "#06203D" },
                          }}
                        >
                          Enroll Now
                        </Button>
                      ) : event.actionType === "call" ? (
                        <Button
                          component="a"
                          href="tel:1902"
                          size="small"
                          startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: 14 }} />}
                          sx={{
                            bgcolor: "#15803D",
                            color: "#FFFFFF !important",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 20,
                            fontSize: "0.72rem",
                            fontWeight: 750,
                            textTransform: "none",
                            "&:hover": { bgcolor: "#166534" },
                          }}
                        >
                          Dial 1902 Support
                        </Button>
                      ) : (
                        <Button
                          component={Link}
                          href="/contact"
                          size="small"
                          endIcon={<ArrowForwardRoundedIcon className="arrow-cta" sx={{ fontSize: 13, transition: "transform 0.2s" }} />}
                          sx={{
                            bgcolor: "#082B50",
                            color: "#FFFFFF !important",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 20,
                            fontSize: "0.72rem",
                            fontWeight: 750,
                            textTransform: "none",
                            "&:hover": { bgcolor: "#06203D" },
                          }}
                        >
                          View Details
                        </Button>
                      )}

                      <Button
                        component={Link}
                        href="https://vizianagaram.ap.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<OpenInNewRoundedIcon sx={{ fontSize: 12 }} />}
                        sx={{
                          color: "#64748B",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { color: "#082B50" },
                        }}
                      >
                        Official Circular
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
                  DISTRICT CITIZEN MOBILISATION DESK
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.4rem" }, fontWeight: 900, mb: 0.6 }}>
                  Host a Village Level Skill Camp or Awareness Session?
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.5, maxWidth: 700 }}>
                  Gram Panchayats, Village Secretariats (Grama Sachivalayams), and FPO cooperatives can submit requests for customized training camps, financial literacy seminars, and recruiter interviews directly to the DRDA Project Director desk.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    startIcon={<HowToRegRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Contact DRDA PD Desk
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
                    Call 1902 Toll-Free Help
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
