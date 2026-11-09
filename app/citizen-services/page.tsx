"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Chip,
  TextField,
  InputAdornment,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

// Authentic Core Citizen Services for Vizianagaram District & DRDA
const CITIZEN_SERVICES = [
  {
    id: "explore-schemes",
    title: "Explore Schemes",
    telugu: "ప్రభుత్వ సంక్షేమ పథకాలు",
    desc: "Browse 100+ government welfare schemes across women empowerment, farmers, youth livelihoods, and social security.",
    href: "/schemes",
    img: "/images/hero-rural-community.jpg",
    badge: "100+ Schemes",
    badgeColor: "#1D4ED8",
    badgeBg: "#EFF6FF",
    icon: AccountBalanceRoundedIcon,
    category: "schemes",
    highlights: ["Women SHG Stree Nidhi & YSR Aasara", "Rythu Bharosa & PM-Kisan Support", "Youth Skill & Employment Subsidy"],
    actionText: "Explore Schemes",
  },
  {
    id: "share-concern-pgrs",
    title: "Share Your Concern (PGRS)",
    telugu: "మీ సమస్యను తెలపండి (ప్రజా ఫిర్యాదులు)",
    desc: "Have a grievance, delay, or requirement? Submit directly to the District Public Grievance Redressal System (PGRS).",
    href: "/pgrs",
    img: "/images/service-concern.jpg",
    badge: "24/7 Redressal",
    badgeColor: "#4338CA",
    badgeBg: "#EEF2FF",
    icon: SupportAgentRoundedIcon,
    category: "grievance",
    highlights: ["Direct Collectorate Escalation", "Spandana Tracking ID Generation", "Regular Mandal Resolution Days"],
    actionText: "File Grievance",
  },
  {
    id: "knowledge-center",
    title: "Knowledge Center",
    telugu: "జ్ఞాన కేంద్రం & మార్గదర్శకాలు",
    desc: "Step-by-step citizen guides, application checklists, DWCRA training modules, and government gazettes in plain language.",
    href: "/knowledge-center",
    img: "/images/service-learning.jpg",
    badge: "Public Guides",
    badgeColor: "#15803D",
    badgeBg: "#F0FDF4",
    icon: MenuBookRoundedIcon,
    category: "schemes",
    highlights: ["Scheme Eligibility Verification", "Required Document Checklists", "FPO & Micro-Enterprise Toolkits"],
    actionText: "Access Guides",
  },
  {
    id: "ivrs-services",
    title: "IVRS Services (1902)",
    telugu: "టోల్-ఫ్రీ IVRS సేవలు",
    desc: "Toll-free interactive voice response and telephone helplines available round the clock in Telugu and English.",
    href: "/ivrs",
    img: "/images/vzm-collectorate-gathering-official.jpg",
    badge: "Toll-Free 1902",
    badgeColor: "#7E22CE",
    badgeBg: "#FAF5FF",
    icon: PhoneInTalkRoundedIcon,
    category: "grievance",
    highlights: ["Instant Automated Status Checking", "Telugu & English Voice Assistance", "Free from Any Mobile Network"],
    actionText: "Explore IVRS",
  },
  {
    id: "events-training",
    title: "Events & Training",
    telugu: "శిక్షణ కార్యక్రమాలు & ఈవెంట్లు",
    desc: "Upcoming skill-development schedules, artisan bootcamps, job fairs, and village awareness campaigns across all 27 mandals.",
    href: "/events",
    img: "/images/maharaja-college.jpg",
    badge: "Skill Programs",
    badgeColor: "#B45309",
    badgeBg: "#FEF3C7",
    icon: EventAvailableRoundedIcon,
    category: "schemes",
    highlights: ["DRDA Livelihood Workshops", "DWCRA Tailoring & Craft Centers", "District Job Melas & Expos"],
    actionText: "View Events",
  },
  {
    id: "contact-directory",
    title: "Contact Directory",
    telugu: "జిల్లా అధికారుల చిరునామాలు",
    desc: "Verified telephone directory, office addresses, and nodal contact emails for DRDA officers, MPDOs, and department heads.",
    href: "/directory",
    img: "/images/vizianagaram-administrative-headquarters.jpg",
    badge: "27 Mandals",
    badgeColor: "#92400E",
    badgeBg: "#FFFBEB",
    icon: ContactPhoneRoundedIcon,
    category: "transparency",
    highlights: ["Mandal Development Officers (MPDO)", "DRDA Project Directors & APOs", "Collectorate Emergency Helplines"],
    actionText: "Open Directory",
  },
  {
    id: "announcements",
    title: "Announcements & Tenders",
    telugu: "ప్రకటనలు మరియు టెండర్లు",
    desc: "Latest official administrative notifications, public recruitment releases, DWCRA procurement notices, and tenders.",
    href: "/announcements",
    img: "/images/vizianagaram-city-landmark-vzm.jpg",
    badge: "Live Notices",
    badgeColor: "#0369A1",
    badgeBg: "#F0F9FF",
    icon: CampaignRoundedIcon,
    category: "transparency",
    highlights: ["Procurement Tenders & RFPs", "DRDA Recruitment Results", "Public Awareness Notifications"],
    actionText: "View Notices",
  },
  {
    id: "feedback",
    title: "Citizen Feedback",
    telugu: "పౌర సలహాలు & అభిప్రాయం",
    desc: "Rate our services and share suggestions to help the district administration improve public delivery and citizen transparency.",
    href: "/feedback",
    img: "/images/drda-women-shg.jpg",
    badge: "Citizen Voice",
    badgeColor: "#BE185D",
    badgeBg: "#FDF2F8",
    icon: RateReviewRoundedIcon,
    category: "grievance",
    highlights: ["Service Delivery Ratings", "Transparent Citizen Inputs", "Continuous Portal Enhancements"],
    actionText: "Share Feedback",
  },
  {
    id: "rti-services",
    title: "Right to Information (RTI)",
    telugu: "సమాచార హక్కు చట్టం (RTI)",
    desc: "Access voluntary disclosures, Public Information Officers (PIO) details, and appellate authority listings under the RTI Act 2005.",
    href: "/about/rti",
    img: "/images/maharaja-admin-building.jpg",
    badge: "RTI Act 2005",
    badgeColor: "#047857",
    badgeBg: "#ECFDF5",
    icon: VerifiedUserRoundedIcon,
    category: "transparency",
    highlights: ["Designated PIO & Appellate Contacts", "Proactive Public Disclosure Docs", "Standard Application Formats"],
    actionText: "Access RTI",
  },
];

export default function CitizenServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = useMemo(() => {
    return CITIZEN_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.telugu.toLowerCase().includes(query) ||
        service.desc.toLowerCase().includes(query) ||
        service.badge.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. MASTER EDITORIAL HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2.5, sm: 3, md: 3.5 },
          pb: { xs: 3.5, sm: 4, md: 4.5 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* Soft Gold Backdrop Accent Circle */}
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
            top: "12%",
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
            {/* Left Column: Heading, Telugu Text & Search */}
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
                GOVERNMENT OF ANDHRA PRADESH • DRDA VIZIANAGARAM
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.85rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1,
                }}
              >
                Citizen Services Portal
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
                ప్రజలందరికీ సులభంగా మరియు పారదర్శకంగా పౌర సేవలు
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2.5,
                }}
              >
                Access all government welfare schemes, grievance redressal (PGRS), IVRS 1902 assistance, training schedules, directory records, and public information services across all 27 mandals of Vizianagaram.
              </Typography>

              {/* Fast Inline Search Filter */}
              <Paper
                elevation={0}
                sx={{
                  p: "4px 12px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 480,
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(8, 43, 80, 0.04)",
                  "&:focus-within": { borderColor: "#082B50" },
                }}
              >
                <SearchRoundedIcon sx={{ color: "#64748B", mr: 1, fontSize: 18 }} />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Search services (e.g. Schemes, PGRS, IVRS, Directory, Training)..."
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
                  height: { xs: 240, sm: 290, md: 330 },
                  borderRadius: { xs: "20px", sm: "28px", md: "32px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
                  border: "4px solid #FFFFFF",
                  bgcolor: "#FEF9C3",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px -6px rgba(8, 43, 80, 0.22)",
                  },
                }}
              >
                <Image
                  src="/images/vizianagaram-administrative-headquarters.jpg"
                  alt="Vizianagaram District Collectorate Administrative Headquarters"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
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
                    bottom: 14,
                    left: 14,
                    right: { xs: 14, sm: "auto" },
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: "14px",
                    px: 2,
                    py: 1,
                    boxShadow: "0 8px 24px rgba(8, 43, 80, 0.2)",
                  }}
                >
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        bgcolor: "#F5B800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#082B50",
                        flexShrink: 0,
                      }}
                    >
                      <VerifiedUserRoundedIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "0.78rem", lineHeight: 1.2 }}>
                        Integrated Citizen Support Center
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 650 }}>
                        Collectorate Complex, Vizianagaram
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. STATS & SATURATION METRICS BAR */}
      <Box sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", py: 2 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            {[
              { val: "100+", label: "Government Schemes", desc: "Active welfare programs" },
              { val: "27", label: "Revenue Mandals", desc: "Complete district coverage" },
              { val: "1902", label: "Toll-Free Helpline", desc: "24/7 Voice & IVRS Support" },
              { val: "100%", label: "PGRS Saturation", desc: "Collectorate grievance track" },
            ].map((metric, idx) => (
              <Grid key={idx} size={{ xs: 6, sm: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: "10px",
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    textAlign: "center",
                    transition: "all 0.2s ease",
                    "&:hover": { bgcolor: "#FFFFFF", borderColor: "#F5B800", transform: "translateY(-2px)" },
                  }}
                >
                  <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.25rem", lineHeight: 1.1 }}>
                    {metric.val}
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontWeight: 750, fontSize: "0.74rem", mt: 0.3 }}>
                    {metric.label}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.66rem" }}>
                    {metric.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. CATEGORY TABS & FILTER BAR */}
      <Box sx={{ pt: 3.5, pb: 1 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                DIRECT CITIZEN CHANNELS
              </Typography>
              <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: { xs: "1.3rem", sm: "1.6rem" } }}>
                Official Public Services Directory
              </Typography>
            </Box>

            {/* Filter Pills */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {[
                { id: "all", label: "All Services" },
                { id: "schemes", label: "Welfare & Livelihoods" },
                { id: "grievance", label: "Grievances & Help" },
                { id: "transparency", label: "Transparency & RTI" },
              ].map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <Chip
                    key={cat.id}
                    label={cat.label}
                    onClick={() => setSelectedCategory(cat.id)}
                    sx={{
                      fontWeight: isActive ? 850 : 650,
                      fontSize: "0.75rem",
                      bgcolor: isActive ? "#082B50" : "#FFFFFF",
                      color: isActive ? "#FFFFFF" : "#475569",
                      border: isActive ? "1px solid #082B50" : "1px solid #CBD5E1",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: isActive ? "#051A30" : "#F1F5F9",
                      },
                    }}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* 4. BALANCED CITIZEN SERVICES GRID */}
      <Box sx={{ pb: { xs: 4, sm: 5, md: 6 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 2, sm: 2.5 }}>
            {filteredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 10px rgba(8, 43, 80, 0.04)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 28px rgba(8, 43, 80, 0.1)",
                        borderColor: "#F5B800",
                        "& .service-img": { transform: "scale(1.05)" },
                        "& .service-btn": { bgcolor: "#E0A800" },
                      },
                    }}
                  >
                    {/* Photo Header */}
                    <Box sx={{ position: "relative", width: "100%", height: 160, overflow: "hidden" }}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="service-img"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(8, 43, 80, 0.5) 0%, rgba(0,0,0,0) 60%)",
                        }}
                      />
                      {/* Floating Badge */}
                      <Chip
                        label={service.badge}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          bgcolor: service.badgeBg,
                          color: service.badgeColor,
                          fontWeight: 800,
                          fontSize: "0.68rem",
                          border: "1px solid rgba(226, 232, 240, 0.8)",
                          backdropFilter: "blur(4px)",
                          height: 22,
                          borderRadius: "5px",
                        }}
                      />
                    </Box>

                    {/* Card Body */}
                    <Box sx={{ p: 2, display: "flex", flexDirection: "column", flex: 1 }}>
                      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 0.5 }}>
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "6px",
                            bgcolor: "#F8FAFC",
                            border: "1px solid #E2E8F0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#082B50",
                            flexShrink: 0,
                          }}
                        >
                          <IconComp sx={{ fontSize: 16 }} />
                        </Box>
                        <Box sx={{ minWidth: 0 }}>
                          <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.02rem", lineHeight: 1.25 }}>
                            {service.title}
                          </Typography>
                          <Typography sx={{ color: "#B45309", fontSize: "0.68rem", fontWeight: 700, fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif" }}>
                            {service.telugu}
                          </Typography>
                        </Box>
                      </Stack>

                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: "0.78rem",
                          lineHeight: 1.5,
                          mt: 1,
                          mb: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {service.desc}
                      </Typography>

                      {/* Highlights */}
                      <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.04em", mb: 0.6 }}>
                        Service Highlights:
                      </Typography>
                      <Stack spacing={0.5} sx={{ mb: 2 }}>
                        {service.highlights.map((h, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 0.8 }}>
                            <CheckCircleRoundedIcon sx={{ fontSize: 13, color: "#16A34A", mt: 0.25, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.74rem", color: "#334155", fontWeight: 600, lineHeight: 1.35 }}>
                              {h}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>

                      {/* Bottom Action Footer */}
                      <Box
                        sx={{
                          mt: "auto",
                          pt: 1.2,
                          borderTop: "1px solid #F1F5F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          component={Link}
                          href={service.href}
                          className="service-btn"
                          size="small"
                          endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />}
                          sx={{
                            bgcolor: "#F5B800",
                            color: "#082B50 !important",
                            fontWeight: 800,
                            fontSize: "0.74rem",
                            borderRadius: "6px",
                            textTransform: "none",
                            px: 1.6,
                            py: 0.45,
                            transition: "all 0.2s ease",
                            "&:hover": { bgcolor: "#E0A800" },
                          }}
                        >
                          {service.actionText}
                        </Button>

                        <Typography sx={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 650 }}>
                          Official Channel
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 5. REDESIGNED HELPLINE CTA BANNER */}
      <Box sx={{ py: { xs: 4, md: 5 }, position: "relative", overflow: "hidden" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: { xs: "20px", md: "28px" },
              overflow: "hidden",
              bgcolor: "#082B50",
              border: "1px solid rgba(245, 184, 0, 0.25)",
              boxShadow: "0 20px 48px -10px rgba(8, 43, 80, 0.28)",
              p: { xs: 3.5, sm: 4.5, md: 5 },
            }}
          >
            {/* Background Ambience & Motifs */}
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245, 184, 0, 0.18) 0%, rgba(245, 184, 0, 0) 70%)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: 20,
                bottom: 0,
                width: { xs: 160, sm: 220, md: 280 },
                height: { xs: 130, sm: 180, md: 230 },
                backgroundImage: "url('/images/temple-scripture-clean.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                opacity: 0.12,
                pointerEvents: "none",
              }}
            />

            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#F5B800",
                      boxShadow: "0 0 10px #F5B800",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#F5B800",
                      fontWeight: 800,
                      fontSize: { xs: "0.74rem", sm: "0.8rem" },
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    24/7 CITIZEN ASSISTANCE HELPLINE
                  </Typography>
                </Stack>

                <Typography
                  component="h2"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 900,
                    fontSize: { xs: "1.6rem", sm: "2rem", md: "2.3rem" },
                    lineHeight: 1.2,
                    letterSpacing: "-0.025em",
                    mb: 1.5,
                  }}
                >
                  Prefer to Speak to Our Support Team?
                </Typography>

                <Typography
                  sx={{
                    color: "#E2E8F0",
                    fontSize: { xs: "0.86rem", sm: "0.92rem" },
                    lineHeight: 1.6,
                    maxWidth: 580,
                    fontWeight: 450,
                  }}
                >
                  Reach our citizen helplines any time in Telugu or English. Support officers will assist with welfare schemes, applications, grievances, and department guidance across Vizianagaram.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4.5 }}>
                <Stack spacing={1.5} sx={{ width: "100%" }}>
                  <Button
                    component="a"
                    href="tel:1902"
                    variant="contained"
                    startIcon={<PhoneRoundedIcon sx={{ color: "#082B50", fontSize: 18 }} />}
                    endIcon={<ArrowForwardRoundedIcon sx={{ color: "#082B50", fontSize: 18 }} />}
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50 !important",
                      fontWeight: 850,
                      fontSize: "0.9rem",
                      py: 1.4,
                      px: 2.5,
                      borderRadius: "12px",
                      textTransform: "none",
                      boxShadow: "0 6px 18px rgba(245, 184, 0, 0.35)",
                      display: "flex",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "#FFFFFF",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 24px rgba(245, 184, 0, 0.45)",
                      },
                    }}
                  >
                    IVRS: 1902 (Toll-Free)
                  </Button>

                  <Button
                    component="a"
                    href="tel:08922276606"
                    variant="outlined"
                    startIcon={<PhoneRoundedIcon sx={{ color: "rgba(255,255,255,0.85)", fontSize: 18 }} />}
                    endIcon={<ArrowForwardRoundedIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }} />}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.06)",
                      borderColor: "rgba(255, 255, 255, 0.22)",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.85rem",
                      py: 1.3,
                      px: 2.2,
                      borderRadius: "12px",
                      textTransform: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      backdropFilter: "blur(6px)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.12)",
                        borderColor: "#FFFFFF",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    DRDA Office: 08922-276606
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
