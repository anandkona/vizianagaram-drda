"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import HowToVoteRoundedIcon from "@mui/icons-material/HowToVoteRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Link from "next/link";

// 1. Featured District Collector & District Magistrate (from vizianagaram.ap.gov.in)
const collectorData = {
  name: "Sri S. Ram Sundar Reddy, I.A.S.",
  designation: "Collector & District Magistrate",
  department: "District Administration",
  address: "Collectorate, Vizianagaram — 535002",
  phone: "08922-276720",
  email: "collector_vznm@ap.gov.in",
  image: "/leaders/collector-portrait.jpg",
  badge: "HEAD OF DISTRICT ADMINISTRATION",
  vision:
    "Dedicated to transparent, citizen-centric administration, saturation of welfare initiatives, and inclusive development across all 27 mandals of Vizianagaram.",
};

// 2. District Administration Officials (matching https://vizianagaram.ap.gov.in/about-district/whos-who/)
const districtAdministration = [
  {
    name: "Sri Sedhu Madhavan S, I.A.S.",
    designation: "Joint Collector & Addl. District Magistrate",
    department: "District Administration",
    address: "Collectorate, Vizianagaram",
    phone: "08922-276658",
    email: "jc_vznm@ap.gov.in",
    image: "/leaders/sedhu-madhavan-official.jpg",
    badge: "REVENUE & DEVELOPMENT",
    icon: AccountBalanceRoundedIcon,
    accent: "#2563EB",
    bg: "#EFF6FF",
    role: "Heading district revenue administration, land records, welfare delivery, and public distribution oversight.",
  },
  {
    name: "Sri A. R. Damodhar, IPS",
    designation: "Superintendent of Police",
    department: "District Police",
    address: "Superintendent of Police Office, Vizianagaram",
    phone: "08922-276163",
    email: "spvzm@appolice.gov.in",
    image: "/leaders/damodhar-sp.jpg",
    badge: "LAW & ORDER",
    icon: ShieldRoundedIcon,
    accent: "#082B50",
    bg: "#F1F5F9",
    role: "Commanding the district police force, maintaining civic peace, citizen protection, and crime prevention.",
  },
  {
    name: "Sri Ch. Sattibabu",
    designation: "District Revenue Officer",
    department: "Revenue Department",
    address: "Collectorate, Vizianagaram",
    phone: "9491012012 / 08922-275560",
    email: "dro_vznm@ap.gov.in",
    image: "/leaders/sattibabu-dro.jpg",
    badge: "REVENUE ADMINISTRATION",
    icon: BadgeRoundedIcon,
    accent: "#059669",
    bg: "#ECFDF5",
    role: "Managing district registry records, land administration, statutory citizen certificates, and disaster relief.",
  },
  {
    name: "Sri A. Kalyan Chakravarthi",
    designation: "Project Director",
    department: "DRDA, Vizianagaram",
    address: "Marrichennareddy Bhavan, DRDA, Vizianagaram",
    phone: "08922-276606",
    email: "pddrdavzm@gmail.com",
    image: "",
    initials: "KC",
    badge: "RURAL LIVELIHOODS",
    icon: GroupsRoundedIcon,
    accent: "#D97706",
    bg: "#FEF3C7",
    role: "Spearheading self-help groups, community-managed enterprises, rural livelihoods, and SERP convergence.",
  },
];

// 3. Revenue Divisional Officers (RDOs from official portal)
const revenueDivisions = [
  {
    name: "Sri D. Venkateswar Rao (FAC)",
    designation: "Revenue Divisional Officer",
    division: "Vizianagaram Division",
    address: "Revenue Divisional Office, Cantonment, Vizianagaram",
    phone: "9491012021",
    email: "rdovzm@gmail.com",
    initials: "DV",
    icon: LocationCityRoundedIcon,
    accent: "#082B50",
    bg: "#F1F5F9",
  },
  {
    name: "Sri J.V.S.S. Rama Mohana Rao",
    designation: "Revenue Divisional Officer",
    division: "Bobbili Division",
    address: "Revenue Divisional Officer, Bobbili Division, Vizianagaram",
    phone: "8333813256",
    email: "rdo.bobbili@gmail.com",
    image: "/leaders/rama-mohana-rao-rdo.jpg",
    initials: "JR",
    icon: LocationCityRoundedIcon,
    accent: "#059669",
    bg: "#ECFDF5",
  },
  {
    name: "Smt. M. Sudha Rani",
    designation: "Revenue Divisional Officer",
    division: "Cheepurupalli Division",
    address: "Revenue Divisional Officer, Cheepurupalli Division, Vizianagaram",
    phone: "9441567771",
    email: "rdocheepurupalli@gmail.com",
    initials: "MS",
    icon: LocationCityRoundedIcon,
    accent: "#D97706",
    bg: "#FEF3C7",
  },
];

// 4. Political Administration / Public Representatives (from vizianagaram.ap.gov.in)
const politicalRepresentatives = [
  {
    name: "Sri Appala Naidu Kalisetti",
    designation: "Member of Parliament (Lok Sabha)",
    constituency: "3-Vizianagaram Parliamentary Constituency",
    image: "/leaders/mp-appala-naidu.jpg",
    badge: "MEMBER OF PARLIAMENT",
    phone: "Parliament House / Vizianagaram",
    email: "mp.vizianagaram@sansad.nic.in",
  },
  {
    name: "Sri Kondapalli Srinivas",
    designation: "Minister for MSME, SERP & NRI Relations / MLA",
    constituency: "16-Gajapathinagaram Constituency",
    image: "/leaders/kondapalli srinivas.jpg",
    badge: "CABINET MINISTER & MLA",
    phone: "Camp Office, Gajapathinagaram",
    email: "minister.msme@ap.gov.in",
  },
  {
    name: "Smt. Pusapati Aditi Vijayalakshmi Gajapathi Raju",
    designation: "Member of Legislative Assembly (MLA)",
    constituency: "18-Vizianagaram Assembly Constituency",
    image: "/leaders/mla-aditi-gajapathi.jpg",
    badge: "MLA - VIZIANAGARAM",
    phone: "Fort, Vizianagaram",
    email: "mla.vizianagaram@ap.gov.in",
  },
  {
    name: "Smt. Lokam Naga Madhavi",
    designation: "Member of Legislative Assembly (MLA)",
    constituency: "17-Nellimarla Assembly Constituency",
    image: "/leaders/mla-lokam-madhavi.jpg",
    badge: "MLA - NELLIMARLA",
    phone: "Nellimarla, Vizianagaram",
    email: "mla.nellimarla@ap.gov.in",
  },
  {
    name: "Smt. Lalitha Kumari Kolla",
    designation: "Member of Legislative Assembly (MLA)",
    constituency: "19-Srungavarapukota Assembly Constituency",
    image: "/leaders/mla-lalitha-kumari.jpg",
    badge: "MLA - S.KOTA",
    phone: "9490557029",
    email: "mla.skota@ap.gov.in",
  },
  {
    name: "Sri Kimidi Kala Venkata Rao",
    designation: "Member of Legislative Assembly (MLA)",
    constituency: "15-Cheepurupalli Assembly Constituency",
    image: "/leaders/mla-kalavenkatarao.jpg",
    badge: "MLA - CHEEPURUPALLI",
    phone: "9440352699",
    email: "mla.cheepurupalli@ap.gov.in",
  },
  {
    name: "Sri R.V.S.K.K. Ranga Rao",
    designation: "Member of Legislative Assembly (MLA)",
    constituency: "14-Bobbili Assembly Constituency",
    image: "/leaders/mla-ranga-rao.jpg",
    badge: "MLA - BOBBILI",
    phone: "Bobbili, Vizianagaram",
    email: "mla.bobbili@ap.gov.in",
  },
];

export default function WhosWhoPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. TOP HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 8, sm: 9, md: 10 },
          overflow: "hidden",
        }}
      >
        {/* Soft yellow organic backdrop */}
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

        {/* Temple Architecture Line Scripture Watermark */}
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

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 }, position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            {/* Left Column: Heading, */}
            <Grid size={{ xs: 12, md: 6 }}>
              {/* */}
              {/* Tag */}
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
                Administrative Leadership
              </Typography>

              {/* Title */}
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
                Who&apos;s Who
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: 520,
                  fontWeight: 500,
                  mb: 2.5,
                }}
              >
                Meet the dedicated officials and public representatives steering governance, rural prosperity, and public administration in Vizianagaram district.
              </Typography>

              <Stack direction="row" spacing={1.5}>
                <Button
                  component="a"
                  href="#collector"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
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
                  Explore Officials
                </Button>
                <Button
                  component={Link}
                  href="/directory"
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
                    "&:hover": { bgcolor: "#F8FAFC" },
                  }}
                >
                  Contact Directory
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: Hon'ble Chief Minister Sri Nara Chandrababu Naidu */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 280, sm: 340, md: 390 },
                  borderRadius: { xs: "24px", sm: "32px", md: "36px" },
                  overflow: "hidden",
                  boxShadow: "0 20px 45px -12px rgba(8, 43, 80, 0.22)",
                  border: "4px solid #FFFFFF",
                  bgcolor: "#F8FAFC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/leaders/N-CHandra-babu.jpg"
                  alt="Sri Nara Chandrababu Naidu, Hon'ble Chief Minister of Andhra Pradesh"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center center",
                    p: { xs: 1.5, sm: 2 },
                    transition: "transform 0.5s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 14, sm: 18 },
                    left: { xs: 14, sm: 18 },
                    bgcolor: "rgba(8, 43, 80, 0.92)",
                    backdropFilter: "blur(8px)",
                    color: "#FFFFFF",
                    borderRadius: "14px",
                    px: { xs: 1.75, sm: 2.25 },
                    py: 1,
                    border: "1px solid rgba(245, 184, 0, 0.4)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  }}
                >
                  <Typography sx={{ fontWeight: 850, fontSize: { xs: "0.82rem", sm: "0.92rem" }, color: "#FFFFFF", lineHeight: 1.2 }}>
                    Sri Nara Chandrababu Naidu
                  </Typography>
                  <Typography sx={{ color: "#FDE68A", fontSize: { xs: "0.7rem", sm: "0.76rem" }, fontWeight: 700, mt: 0.25 }}>
                    Hon&apos;ble Chief Minister, Government of Andhra Pradesh
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. FEATURED: DISTRICT COLLECTOR & MAGISTRATE */}
      <Box id="collector" sx={{ mt: { xs: -5, sm: -6, md: -7 }, position: "relative", zIndex: 10, mb: { xs: 4, sm: 5, md: 6 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: { xs: "20px", sm: "24px" },
              p: { xs: 2.5, sm: 3.5, md: 4 },
              border: "1px solid #E2E8F0",
              boxShadow: "0 8px 30px rgba(8, 43, 80, 0.06)",
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              {/* Left Column: Portrait */}
              <Grid size={{ xs: 12, md: 3.5 }} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 155,
                    height: 180,
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "3.5px solid #F5B800",
                    mx: "auto",
                    mb: 1.5,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    bgcolor: "#F8FAFC",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url('${collectorData.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                    }}
                  />
                </Box>

                <Typography sx={{ fontWeight: 800, fontSize: "1.08rem", color: "#082B50" }}>
                  {collectorData.name}
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, mb: 2 }}>
                  {collectorData.designation}
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="center">
                  <Button
                    size="small"
                    component="a"
                    href={`tel:${collectorData.phone.replace(/[^0-9]/g, "")}`}
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#F8FAFC",
                      color: "#082B50",
                      border: "1px solid #CBD5E1",
                      borderRadius: "100px",
                      px: 2.2,
                      py: 0.6,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#E2E8F0", borderColor: "#94A3B8" },
                    }}
                  >
                    {collectorData.phone}
                  </Button>
                  <Button
                    size="small"
                    component="a"
                    href={`mailto:${collectorData.email}`}
                    startIcon={<EmailRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      border: "1px solid #CBD5E1",
                      color: "#082B50",
                      borderRadius: "100px",
                      px: 2.2,
                      py: 0.6,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#F8FAFC" },
                    }}
                  >
                    Email
                  </Button>
                </Stack>
              </Grid>

              {/* Right Column: Statement, Address & Pillars */}
              <Grid size={{ xs: 12, md: 8.5 }}>
                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: "#FEF3C7",
                    color: "#B45309",
                    px: 2,
                    py: 0.35,
                    borderRadius: "100px",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mb: 1.5,
                  }}
                >
                  {collectorData.badge}
                </Box>

                <Typography sx={{ color: "#1E293B", fontSize: { xs: "0.95rem", sm: "1.05rem" }, lineHeight: 1.6, mb: 2, fontWeight: 500 }}>
                  Leading the district administration with executive authority over revenue, disaster response, public distribution, law & order convergence, and comprehensive welfare saturation across all 27 mandals.
                </Typography>

                {/* Yellow Vision Callout */}
                <Box
                  sx={{
                    bgcolor: "#FFFBEB",
                    borderLeft: "4px solid #F5B800",
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: "0 12px 12px 0",
                    mb: 2.5,
                  }}
                >
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 800, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5 }}>
                    ADMINISTRATIVE VISION FOR VIZIANAGARAM
                  </Typography>
                  <Typography sx={{ color: "#475569", fontStyle: "italic", fontSize: { xs: "0.85rem", sm: "0.92rem" } }}>
                    &ldquo;{collectorData.vision}&rdquo;
                  </Typography>
                </Box>

                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ fontSize: "0.8rem", color: "#64748B" }}>
                      <strong>Office:</strong> {collectorData.address}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{ fontSize: "0.8rem", color: "#64748B" }}>
                      <strong>Official Email:</strong> {collectorData.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 3. TABS SECTION: DISTRICT OFFICIALS, REVENUE DIVISIONS, AND PUBLIC REPRESENTATIVES */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          {/* Header & Tabs Navigation */}
          <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" sx={{ mb: 3.5 }}>
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                District Directory
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.45rem", sm: "1.75rem" }, fontWeight: 900 }}>
                Officials & Representatives
              </Typography>
            </Box>

            <Tabs
              value={activeTab}
              onChange={(_, val) => setActiveTab(val)}
              sx={{
                mt: { xs: 2, md: 0 },
                "& .MuiTabs-indicator": { bgcolor: "#F5B800", height: 3 },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 750,
                  fontSize: "0.84rem",
                  color: "#64748B",
                  "&.Mui-selected": { color: "#082B50" },
                },
              }}
            >
              <Tab label="District Administration (4)" />
              <Tab label="Revenue Divisional Officers (3)" />
              <Tab label="Public Representatives (7)" />
            </Tabs>
          </Stack>

          {/* TAB 0: DISTRICT ADMINISTRATION (MATCHING OFFICIAL PORTAL + REAL PHOTOS) */}
          {activeTab === 0 && (
            <Grid container spacing={2}>
              {districtAdministration.map((officer, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                      p: 2,
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#F5B800",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(8, 43, 80, 0.08)",
                      },
                    }}
                  >
                    <Box>
                      {/* Compact horizontal layout inside card */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.75, mb: 1.25 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 68,
                            borderRadius: "100px",
                            overflow: "hidden",
                            border: "2px solid #F5B800",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            bgcolor: "#F8FAFC",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {officer.image ? (
                            <Box
                              sx={{
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url('${officer.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center top",
                              }}
                            />
                          ) : (
                            <Box
                              sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyCenter: "center",
                                bgcolor: officer.bg || "#F1F5F9",
                                color: officer.accent || "#082B50",
                                fontWeight: 900,
                                fontSize: "1.1rem",
                                justifyContent: "center",
                              }}
                            >
                              {officer.initials || "KC"}
                            </Box>
                          )}
                        </Box>

                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Chip
                            label={officer.badge}
                            size="small"
                            sx={{
                              bgcolor: "#FEF9C3",
                              color: "#92400E",
                              fontWeight: 800,
                              fontSize: "0.62rem",
                              letterSpacing: "0.04em",
                              mb: 0.4,
                              height: 18,
                            }}
                          />
                          <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#082B50", lineHeight: 1.2, mb: 0.2 }}>
                            {officer.name}
                          </Typography>
                          <Typography sx={{ color: "#D97706", fontSize: "0.76rem", fontWeight: 750 }}>
                            {officer.designation}
                          </Typography>
                          <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 600 }}>
                            {officer.department}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {officer.role}
                      </Typography>
                    </Box>

                    {/* Bottom: Contact Bar */}
                    <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                        <Button
                          size="small"
                          component="a"
                          href={`tel:${officer.phone.replace(/[^0-9]/g, "")}`}
                          startIcon={<PhoneRoundedIcon sx={{ fontSize: 12 }} />}
                          sx={{
                            bgcolor: "#F8FAFC",
                            color: "#082B50",
                            border: "1px solid #CBD5E1",
                            borderRadius: "100px",
                            px: 1.25,
                            py: 0.3,
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            textTransform: "none",
                            "&:hover": { bgcolor: "#E2E8F0" },
                          }}
                        >
                          {officer.phone}
                        </Button>
                        <Button
                          size="small"
                          component="a"
                          href={`mailto:${officer.email}`}
                          startIcon={<EmailRoundedIcon sx={{ fontSize: 12 }} />}
                          sx={{
                            bgcolor: "#FFFFFF",
                            border: "1px solid #CBD5E1",
                            color: "#082B50",
                            borderRadius: "100px",
                            px: 1.25,
                            py: 0.3,
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            textTransform: "none",
                            "&:hover": { bgcolor: "#F8FAFC" },
                          }}
                        >
                          Email
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {/* TAB 1: REVENUE DIVISIONAL OFFICERS (3 DIVISIONS) */}
          {activeTab === 1 && (
            <Grid container spacing={2}>
              {revenueDivisions.map((rdo, idx) => (
                <Grid size={{ xs: 12, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                      p: 2,
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#F5B800",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(8, 43, 80, 0.08)",
                      },
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                        {rdo.image ? (
                          <Avatar
                            alt={rdo.name}
                            src={rdo.image}
                            sx={{ width: 50, height: 50, border: "2px solid #F5B800", flexShrink: 0 }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                              bgcolor: rdo.bg,
                              color: rdo.accent,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 900,
                              fontSize: "1rem",
                              border: "2px solid #E2E8F0",
                              flexShrink: 0,
                            }}
                          >
                            {rdo.initials}
                          </Box>
                        )}
                        <Box sx={{ minWidth: 0 }}>
                          <Chip
                            label={rdo.division}
                            size="small"
                            sx={{
                              bgcolor: "#FEF3C7",
                              color: "#B45309",
                              fontWeight: 800,
                              fontSize: "0.62rem",
                              letterSpacing: "0.04em",
                              mb: 0.3,
                              height: 18,
                            }}
                          />
                          <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#082B50", lineHeight: 1.2 }}>
                            {rdo.name}
                          </Typography>
                          <Typography sx={{ color: "#D97706", fontSize: "0.74rem", fontWeight: 700 }}>
                            {rdo.designation}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography sx={{ color: "#64748B", fontSize: "0.74rem", lineHeight: 1.4, mb: 1 }}>
                        <strong>Office:</strong> {rdo.address}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }} justifyContent="space-between" alignItems="center">
                      <Button
                        size="small"
                        component="a"
                        href={`tel:${rdo.phone}`}
                        startIcon={<PhoneRoundedIcon sx={{ fontSize: 12 }} />}
                        sx={{
                          bgcolor: "#F8FAFC",
                          color: "#082B50",
                          border: "1px solid #CBD5E1",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.3,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#E2E8F0" },
                        }}
                      >
                        {rdo.phone}
                      </Button>
                      <Button
                        size="small"
                        component="a"
                        href={`mailto:${rdo.email}`}
                        startIcon={<EmailRoundedIcon sx={{ fontSize: 12 }} />}
                        sx={{
                          bgcolor: "#FFFFFF",
                          border: "1px solid #CBD5E1",
                          color: "#082B50",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.3,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#F8FAFC" },
                        }}
                      >
                        Email
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          {/* TAB 2: PUBLIC REPRESENTATIVES (MPS & MLAS FROM OFFICIAL PORTAL) */}
          {activeTab === 2 && (
            <Grid container spacing={2}>
              {politicalRepresentatives.map((rep, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                      p: 2,
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#F5B800",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(8, 43, 80, 0.08)",
                      },
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                        <Avatar
                          alt={rep.name}
                          src={rep.image}
                          sx={{ width: 50, height: 50, border: "2px solid #F5B800", flexShrink: 0 }}
                        />
                        <Box sx={{ minWidth: 0 }}>
                          <Chip
                            label={rep.badge}
                            size="small"
                            sx={{
                              bgcolor: "#FEF3C7",
                              color: "#B45309",
                              fontWeight: 800,
                              fontSize: "0.62rem",
                              letterSpacing: "0.04em",
                              mb: 0.3,
                              height: 18,
                            }}
                          />
                          <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#082B50", lineHeight: 1.2 }}>
                            {rep.name}
                          </Typography>
                          <Typography sx={{ color: "#D97706", fontSize: "0.74rem", fontWeight: 700 }}>
                            {rep.designation}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography sx={{ color: "#64748B", fontSize: "0.74rem", lineHeight: 1.4, mb: 1 }}>
                        <strong>Constituency:</strong> {rep.constituency}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }} justifyContent="space-between" alignItems="center">
                      <Button
                        size="small"
                        component="a"
                        href={`tel:${rep.phone.replace(/[^0-9]/g, "")}`}
                        startIcon={<PhoneRoundedIcon sx={{ fontSize: 12 }} />}
                        sx={{
                          bgcolor: "#F8FAFC",
                          color: "#082B50",
                          border: "1px solid #CBD5E1",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.3,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#E2E8F0" },
                        }}
                      >
                        Contact
                      </Button>
                      <Button
                        size="small"
                        component="a"
                        href={`mailto:${rep.email}`}
                        startIcon={<EmailRoundedIcon sx={{ fontSize: 12 }} />}
                        sx={{
                          bgcolor: "#FFFFFF",
                          border: "1px solid #CBD5E1",
                          color: "#082B50",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.3,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#F8FAFC" },
                        }}
                      >
                        Email
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* 4. CONTACT DIRECTORY SECTION (IDENTICAL TO DRDAMANYAM STYLE) */}
      <Box component="section" sx={{ py: 6, bgcolor: "#F0FDF4", textAlign: "center", borderTop: "1px solid #DCFCE7", borderBottom: "1px solid #DCFCE7" }}>
        <Container maxWidth="sm" sx={{ px: 3 }}>
          <Typography
            sx={{
              color: "#475569",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              mb: 2.5,
              fontWeight: 500,
            }}
          >
            For the complete contact directory of all officers and departments, visit our Contact Directory page.
          </Typography>
          <Button
            component={Link}
            href="/directory"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important", color: "#FFFFFF !important" }} />}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#00695C",
              color: "#FFFFFF !important",
              fontWeight: 600,
              fontSize: "0.875rem",
              px: 3.5,
              py: 1.2,
              borderRadius: "100px",
              textTransform: "none",
              boxShadow: "0 2px 8px rgba(0, 105, 92, 0.2)",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "#004D40",
                color: "#FFFFFF !important",
                boxShadow: "0 4px 12px rgba(0, 105, 92, 0.3)",
              },
            }}
          >
            View Full Directory
          </Button>
        </Container>
      </Box>

      {/* 5. QUICK NAVIGATION PILLS (MATCHING EXACT CLEAN HOVER BEHAVIOR) */}
      <Box sx={{ py: { xs: 2, sm: 2.5, md: 3 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Org Structure", href: "/about/structure" },
              { label: "Contact Directory", href: "/directory" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "SERP Corner", href: "/serp-corner" },
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

      {/* 6. BOTTOM CALLOUT BANNER */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, pb: { xs: 6, sm: 7 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box
            sx={{
              bgcolor: "#FFFBEB",
              borderRadius: { xs: "20px", sm: "24px" },
              p: { xs: 2.5, sm: 3.5, md: 4 },
              border: "1px solid #FDE68A",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2.5,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left rural houses graphic extracted from reference mockup */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <Box
                component="img"
                src="/images/cta_houses_clean.png"
                alt="Rural community landscape from reference mockup"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: { sm: 130, md: 150 },
                  height: "auto",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 900, color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, mb: 0.5 }}>
                  Building stronger rural communities together.
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: { xs: "0.82rem", sm: "0.9rem" } }}>
                  Explore DRDA programmes, livelihood opportunities and rural development initiatives.
                </Typography>
              </Box>
            </Box>

            <Stack direction="row" spacing={1.5} flexShrink={0}>
              <Button
                component={Link}
                href="/schemes"
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
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
                Explore Programmes
              </Button>
              <Button
                component={Link}
                href="/schemes"
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1px solid #CBD5E1",
                  color: "#082B50",
                  borderRadius: "100px",
                  px: 3,
                  py: 1,
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#F8FAFC" },
                }}
              >
                View Schemes
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
