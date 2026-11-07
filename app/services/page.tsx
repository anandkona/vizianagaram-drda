"use client";

import React, { useState } from "react";
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
  Chip,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

// Official Citizen Services from https://vizianagaram.ap.gov.in/service/
const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "certificates", label: "Statutory Certificates" },
  { id: "revenue", label: "Revenue & Land Records" },
  { id: "pds", label: "Civil Supplies & Ration" },
  { id: "grievance", label: "Grievance & Public Services" },
];

const CITIZEN_SERVICES = [
  {
    id: "integrated-caste",
    title: "Integrated Certificate (Caste & Residence)",
    telugu: "కుల, నివాస సమగ్ర ధృవీకరణ పత్రం",
    category: "certificates",
    dept: "Revenue Department (MeeSeva)",
    sla: "7 Working Days",
    fee: "₹45 (MeeSeva)",
    doc: "Aadhaar Card, Ration Card, School Certificate",
    portal: "MeeSeva / Village Secretariat",
    url: "https://meeseva.ap.gov.in/",
  },
  {
    id: "income-cert",
    title: "Income Certificate",
    telugu: "ఆదాయ ధృవీకరణ పత్రం",
    category: "certificates",
    dept: "Revenue Department (MeeSeva)",
    sla: "7 Working Days",
    fee: "₹45 (MeeSeva)",
    doc: "Salary Slip / IT Return / Self Declaration, Aadhaar",
    portal: "MeeSeva / Grama Sachivalayam",
    url: "https://meeseva.ap.gov.in/",
  },
  {
    id: "birth-death",
    title: "Late Registration of Birth / Death",
    telugu: "జనన / మరణ ఆలస్య నమోదు ధృవీకరణ",
    category: "certificates",
    dept: "Revenue & Municipal Administration",
    sla: "15 Working Days",
    fee: "₹65",
    doc: "Non-Availability Certificate, Hospital Note, Affidavit",
    portal: "MeeSeva Portal",
    url: "https://meeseva.ap.gov.in/",
  },
  {
    id: "family-member",
    title: "Family Member Certificate",
    telugu: "కుటుంబ సభ్యుల ధృవీకరణ పత్రం",
    category: "certificates",
    dept: "Revenue Department",
    sla: "15 Working Days",
    fee: "₹45",
    doc: "Death Certificate of Head, Aadhaar Cards of Members",
    portal: "Grama Sachivalayam",
    url: "https://meeseva.ap.gov.in/",
  },
  {
    id: "meebhumi-land",
    title: "Meebhumi — 1B & Adangal Records",
    telugu: "మీభూమి — అడంగల్ & 1-బి పట్టాదారు పాస్ పుస్తకం",
    category: "revenue",
    dept: "Survey, Settlement & Land Records",
    sla: "Instant Download",
    fee: "Free Online / ₹25 Certified",
    doc: "Survey Number, Pattadar Name, Aadhaar",
    portal: "AP Meebhumi Portal",
    url: "https://meebhumi.ap.gov.in/",
  },
  {
    id: "land-conversion",
    title: "Agricultural to Non-Agricultural Land Conversion (NALA)",
    telugu: "వ్యవసాయేతర భూ మార్పిడి దరఖాస్తు (నాల)",
    category: "revenue",
    dept: "Revenue Divisional Office (RDO)",
    sla: "30 Working Days",
    fee: "Statutory 3% to 5% Value",
    doc: "Registered Title Deed, Encumbrance, Survey Sketch",
    portal: "AP Revenue Portal",
    url: "https://vizianagaram.ap.gov.in/service/",
  },
  {
    id: "ration-card",
    title: "New Smart Ration Card / Member Addition",
    telugu: "కొత్త రేషన్ కార్డు / కుటుంబ సభ్యుల నమోదు",
    category: "pds",
    dept: "Civil Supplies Department",
    sla: "14 Working Days",
    fee: "Free via Sachivalayam",
    doc: "Aadhaar Card, Gas Connection Details, Electricity Bill",
    portal: "AP ePDS Portal",
    url: "https://epds2.ap.gov.in/",
  },
  {
    id: "spandana-pgrs",
    title: "PGRS Spandana Public Grievance Registration",
    telugu: "స్పందన ప్రజా సమస్యల పరిష్కార వేదిక",
    category: "grievance",
    dept: "District Collectorate Grievance Cell",
    sla: "7 to 15 Days Action",
    fee: "Free Service",
    doc: "Grievance petition, Aadhaar Card, Location Details",
    portal: "AP Spandana Portal",
    url: "/pgrs",
  },
  {
    id: "sub-registrar-ec",
    title: "Encumbrance Certificate (EC) & Market Valuation",
    telugu: "భూమి రిజిస్ట్రేషన్ ఈసీ & మార్కెట్ విలువ శోధన",
    category: "revenue",
    dept: "Registration & Stamps Department",
    sla: "Instant Online / 24 Hours",
    fee: "₹200 Online",
    doc: "Document Number, Survey Number, Property Boundaries",
    portal: "AP IGRS Portal",
    url: "https://registration.ap.gov.in/",
  },
  {
    id: "vzm-water-tax",
    title: "Municipal Property Tax & Water Charges Payment",
    telugu: "పురపాలక సంఘం ఆస్తి పన్ను & తాగునీటి రుసుము చెల్లింపు",
    category: "grievance",
    dept: "Vizianagaram Municipal Corporation (VMC)",
    sla: "Instant Receipt",
    fee: "Actual Assessment",
    doc: "Assessment Number, Owner Aadhaar",
    portal: "CDMA Portal",
    url: "https://cdma.ap.gov.in/",
  },
];

export default function CitizenServicesPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = CITIZEN_SERVICES.filter((svc) => {
    const matchesCat = selectedCat === "all" || svc.category === selectedCat;
    const matchesQuery =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.telugu.includes(searchQuery) ||
      svc.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.portal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. EDITORIAL TOP HERO SECTION (MATCHING SCHEMES/WOMEN & ABOUT/DISTRICT EXACTLY) */}
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
        {/* Soft Gold Decorative Backdrop Circle */}
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
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.78rem" }}>
              Citizen Services
            </Typography>
          </Breadcrumbs>

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
                PUBLIC SERVICE PORTAL · GOVERNMENT OF ANDHRA PRADESH
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
                All Citizen Services in One Place
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
                విజయనగరం జిల్లా పౌర సేవలు, మీసేవ ధృవీకరణ పత్రాలు &amp; భూమి రికార్డులు
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
                Access essential government-to-citizen (G2C) services across Vizianagaram district: MeeSeva certificates, land revenue records (Meebhumi), ration cards, civil registrations, municipal taxes, and 24/7 public grievances.
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href="https://meeseva.ap.gov.in/"
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
                    },
                  }}
                >
                  MeeSeva Online Portal
                </Button>

                <Button
                  component={Link}
                  href="/pgrs"
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
                    "&:hover": {
                      bgcolor: "#F8FAFC",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  PGRS Public Grievance
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Real Public Service Imagery */}
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
                    backgroundImage: "url('/images/vzm-collectorate-gathering-official.jpg')",
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
                  <VerifiedRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                  <Typography sx={{ color: "#FFFFFF", fontSize: "0.72rem", fontWeight: 700 }}>
                    Official District Citizen Service Centers
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
              {[
                { value: "100+ Services", label: "MeeSeva & Online G2C", icon: <AssignmentTurnedInRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "777 Secretariats", label: "Grama & Ward Sachivalayams", icon: <HouseRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "7-15 Days SLA", label: "Guaranteed Delivery Time", icon: <BadgeRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
                { value: "Toll Free: 1902", label: "24/7 Citizen Grievance Support", icon: <SupportAgentRoundedIcon sx={{ color: "#F59E0B", fontSize: 24 }} /> },
              ].map((fact, idx) => (
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
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 0.5 }}>{fact.icon}</Box>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
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

      {/* 3. CATEGORY SELECTOR & SEARCH BAR */}
      <Box sx={{ py: 3, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
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
                SERVICE DIRECTORY
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
                District Public Services Directory
              </Typography>
            </Box>

            {/* Fast Search Input */}
            <TextField
              size="small"
              placeholder="Search service, certificate, SLA, or Telugu..."
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

          {/* Filter Pills */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {SERVICE_CATEGORIES.map((cat) => {
              const isSelected = selectedCat === cat.id;
              return (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  sx={{
                    borderRadius: "100px",
                    px: 2.4,
                    py: 0.7,
                    fontSize: "0.80rem",
                    fontWeight: 750,
                    textTransform: "none",
                    border: isSelected ? "1.5px solid #082B50" : "1px solid #CBD5E1",
                    bgcolor: isSelected ? "#082B50" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF !important" : "#334155",
                    boxShadow: isSelected ? "0 4px 12px rgba(8, 43, 80, 0.2)" : "none",
                    "&:hover": {
                      bgcolor: isSelected ? "#0F3A66" : "#F8FAFC",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  {cat.label}
                </Button>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 4. OFFICIAL CITIZEN SERVICES TABLE */}
      <Box sx={{ py: { xs: 3.5, sm: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {filteredServices.length === 0 ? (
            <Paper sx={{ p: 4, textAlign: "center", borderRadius: "16px", bgcolor: "#FFFFFF", border: "1px dashed #CBD5E1" }}>
              <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "1.05rem", mb: 0.5 }}>
                No service matching &quot;{searchQuery}&quot;
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
                maxHeight: 620,
                border: "1px solid #E2E8F0",
                borderRadius: "20px",
                overflow: "auto",
                bgcolor: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
                "&::-webkit-scrollbar": { width: 8, height: 8 },
                "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 4 },
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Service Name &amp; Telugu Title
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Department &amp; Access Channel
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Statutory SLA &amp; User Fee
                    </TableCell>
                    <TableCell sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Required Documents
                    </TableCell>
                    <TableCell align="right" sx={{ bgcolor: "#082B50", color: "#FFFFFF", fontWeight: 800, fontSize: "0.82rem", py: 1.8 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredServices.map((svc) => (
                    <TableRow
                      key={svc.id}
                      hover
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        transition: "background-color 0.15s ease",
                      }}
                    >
                      {/* Name & Telugu */}
                      <TableCell sx={{ py: 1.8, maxWidth: 300 }}>
                        <Typography sx={{ fontWeight: 850, color: "#082B50", fontSize: "0.95rem", lineHeight: 1.25 }}>
                          {svc.title}
                        </Typography>
                        <Typography sx={{ color: "#D97706", fontSize: "0.78rem", fontWeight: 650, mt: 0.3 }}>
                          {svc.telugu}
                        </Typography>
                      </TableCell>

                      {/* Department & Channel */}
                      <TableCell sx={{ py: 1.8, maxWidth: 240 }}>
                        <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.82rem" }}>
                          {svc.dept}
                        </Typography>
                        <Chip
                          label={svc.portal}
                          size="small"
                          sx={{
                            mt: 0.5,
                            bgcolor: "#EFF6FF",
                            color: "#1D4ED8",
                            fontWeight: 750,
                            fontSize: "0.68rem",
                            height: 22,
                          }}
                        />
                      </TableCell>

                      {/* SLA & Fee */}
                      <TableCell sx={{ py: 1.8 }}>
                        <Chip
                          label={svc.sla}
                          size="small"
                          sx={{
                            bgcolor: "#FEF3C7",
                            color: "#92400E",
                            fontWeight: 800,
                            fontSize: "0.70rem",
                            height: 22,
                            mb: 0.4,
                          }}
                        />
                        <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
                          Fee: {svc.fee}
                        </Typography>
                      </TableCell>

                      {/* Documents */}
                      <TableCell sx={{ py: 1.8, maxWidth: 280 }}>
                        <Typography sx={{ color: "#334155", fontSize: "0.78rem", lineHeight: 1.45 }}>
                          {svc.doc}
                        </Typography>
                      </TableCell>

                      {/* Action */}
                      <TableCell align="right" sx={{ py: 1.8 }}>
                        <Button
                          component="a"
                          href={svc.url}
                          target={svc.url.startsWith("http") ? "_blank" : undefined}
                          rel={svc.url.startsWith("http") ? "noopener noreferrer" : undefined}
                          size="small"
                          endIcon={svc.url.startsWith("http") ? <OpenInNewRoundedIcon sx={{ fontSize: 13 }} /> : <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />}
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
                            "&:hover": { bgcolor: "#0F3A66 !important" },
                          }}
                        >
                          Apply Online
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {/* Citizen Delivery Network Pillars */}
          <Box sx={{ mt: 6 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
              PUBLIC SERVICE ACCESS CHANNELS
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.55rem" }, fontWeight: 900, mb: 3 }}>
              Decentralized Citizen Service Infrastructure
            </Typography>

            <Grid container spacing={2.5}>
              {[
                {
                  title: "Grama & Ward Sachivalayams",
                  badge: "LAST-MILE VILLAGE LEVEL",
                  desc: "777 Village Secretariats providing doorstep service delivery, certificate verification, and welfare saturation.",
                  icon: <HouseRoundedIcon sx={{ fontSize: 24, color: "#082B50" }} />,
                },
                {
                  title: "MeeSeva Centers",
                  badge: "URBAN & MANDAL HUBS",
                  desc: "Digital service centers across all 27 mandals offering revenue certificates, land registrations, and utility payments.",
                  icon: <AssignmentTurnedInRoundedIcon sx={{ fontSize: 24, color: "#D97706" }} />,
                },
                {
                  title: "Spandana 1902 PGRS",
                  badge: "24/7 GRIEVANCE HELPLINE",
                  desc: "Integrated public grievance redressal platform with strict officer time-bound resolution and SMS status tracking.",
                  icon: <SupportAgentRoundedIcon sx={{ fontSize: 24, color: "#059669" }} />,
                },
              ].map((channel, idx) => (
                <Grid size={{ xs: 12, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "18px",
                      p: 3,
                      height: "100%",
                    }}
                  >
                    <Box sx={{ mb: 1.5 }}>{channel.icon}</Box>
                    <Chip
                      label={channel.badge}
                      size="small"
                      sx={{
                        bgcolor: "#F1F5F9",
                        color: "#475569",
                        fontWeight: 850,
                        fontSize: "0.66rem",
                        mb: 1.2,
                      }}
                    />
                    <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.05rem", mb: 0.8 }}>
                      {channel.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.6 }}>
                      {channel.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
