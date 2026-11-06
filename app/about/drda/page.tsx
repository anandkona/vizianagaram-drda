"use client";

import { Box, Container, Grid, Typography, Stack, Button, Link as MuiLink } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import HolidayVillageRoundedIcon from "@mui/icons-material/HolidayVillageRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import Face3RoundedIcon from "@mui/icons-material/Face3Rounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import Link from "next/link";
import Image from "next/image";

// 1. DRDA Quick Facts matching Mockup
const quickFacts = [
  { value: "32,450", label: "Active SHGs", icon: GroupsRoundedIcon, color: "#D97706", bg: "#FEF3C7" },
  { value: "3,15,400+", label: "Total Beneficiaries", icon: PeopleAltRoundedIcon, color: "#D97706", bg: "#FEF3C7" },
  { value: "27", label: "Mandals Covered", icon: LocationOnRoundedIcon, color: "#D97706", bg: "#FEF3C7" },
  { value: "982", label: "Villages Reached", icon: HolidayVillageRoundedIcon, color: "#D97706", bg: "#FEF3C7" }
];

// 2. Roles & Responsibilities 6 cards matching Mockup
const roles = [
  {
    title: "Rural Development",
    desc: "Implementing central and state government schemes.",
    icon: SpaRoundedIcon,
  },
  {
    title: "Livelihood Promotion",
    desc: "Promoting sustainable livelihoods for rural communities.",
    icon: HandshakeRoundedIcon,
  },
  {
    title: "Women Empowerment",
    desc: "Empowering women through SHG and skill development.",
    icon: Face3RoundedIcon,
  },
  {
    title: "Skill Development",
    desc: "Enhancing skills for better employment opportunities.",
    icon: SettingsSuggestRoundedIcon,
  },
  {
    title: "Financial Inclusion",
    desc: "Ensuring access to financial services for all.",
    icon: AccountBalanceRoundedIcon,
  },
  {
    title: "Monitoring Welfare Schemes",
    desc: "Ensuring effective implementation of welfare schemes.",
    icon: AssignmentTurnedInRoundedIcon,
  },
];

// 3. Rural Development Programmes with real photographs matching Mockup
const programmes = [
  {
    title: "Women Entrepreneurship",
    image: "/images/women-entrepreneurship-real.jpg",
  },
  {
    title: "Skill Development",
    image: "/images/service-learning.jpg",
  },
  {
    title: "Farmer Support",
    image: "/images/farmer-support-real.jpg",
  },
  {
    title: "Self Help Groups",
    image: "/images/shg-outdoor-real.jpg",
  },
];

export default function DRDAPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. TOP HERO SECTION WITH TEMPLE SCULPTURE WATERMARK & VIBRANT COMMUNITY PHOTO */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
          pb: { xs: 8, sm: 9, md: 10 },
          overflow: "hidden",
        }}
      >
        {/* Soft yellow organic circular shape on right background */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: { xs: "-15%", sm: "-5%", md: "8%" },
            width: { xs: 320, sm: 460, md: 540 },
            height: { xs: 320, sm: 460, md: 540 },
            borderRadius: "50%",
            bgcolor: "#FEF08A",
            opacity: 0.65,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Temple Architecture Line Watermark matching mockup exactly */}
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            right: { xs: "32%", md: "42%", lg: "46%" },
            width: { xs: 180, sm: 240, md: 280 },
            height: { xs: 150, sm: 200, md: 230 },
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
            {/* Left Column: Heading and Intro */}
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
                Rural Development
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
                District Rural<br />Development Agency
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: 520,
                  fontWeight: 500,
                }}
              >
                Driving rural prosperity, livelihood transformation, and women-led community enterprise through participatory convergence in Vizianagaram.
              </Typography>
            </Grid>

            {/* Right Column: Hero Real Women SHG Photo */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 250, sm: 320, md: 380 },
                  borderRadius: { xs: "24px", sm: "32px", md: "40px" },
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
                    backgroundImage: "url('/images/drda-women-shg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.5s ease",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. FLOATING QUICK FACTS CARD */}
      <Box sx={{ mt: { xs: -5, sm: -6, md: -7 }, position: "relative", zIndex: 10, mb: { xs: 3, sm: 4, md: 5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: { xs: "20px", sm: "24px" },
              boxShadow: "0 12px 32px -4px rgba(8, 43, 80, 0.08)",
              border: "1px solid #E2E8F0",
              p: { xs: 2.5, sm: 3, md: 3.5 },
            }}
          >
            <Typography
              component="div"
              sx={{
                fontWeight: 800,
                color: "#082B50",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                mb: { xs: 2, sm: 2.5 },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="span" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#F5B800", display: "inline-block" }} />
              Quick Facts
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 2.5 }} alignItems="center">
              {quickFacts.map((fact, idx) => {
                const IconComp = fact.icon;
                return (
                  <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                    <Box
                      sx={{
                        textAlign: "center",
                        borderRight: {
                          xs: idx % 2 === 0 ? "1px solid #F1F5F9" : "none",
                          md: idx < 3 ? "1px solid #F1F5F9" : "none",
                        },
                        pr: { xs: idx % 2 === 0 ? 1 : 0, md: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          bgcolor: fact.bg,
                          color: fact.color,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 1,
                        }}
                      >
                        <IconComp sx={{ fontSize: 22 }} />
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: { xs: "1.3rem", sm: "1.45rem", md: "1.6rem" },
                          color: "#082B50",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                      >
                        {fact.value}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: { xs: "0.75rem", sm: "0.82rem" }, fontWeight: 600, mt: 0.5 }}>
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

      {/* 3. MESSAGE FROM PROJECT DIRECTOR SECTION */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 3.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: { xs: "20px", sm: "24px" },
              p: { xs: 2.5, sm: 3.5, md: 4 },
              border: "1px solid #E2E8F0",
              boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              {/* Left: Project Director Profile */}
              <Grid size={{ xs: 12, md: 3.2 }} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 150,
                    height: 175,
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "3px solid #F5B800",
                    mx: "auto",
                    mb: 1.5,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    bgcolor: "#FEF3C7",
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src="/leaders/project-director.jpg"
                    alt="Sri A. Kalyan Chakravarthi, Project Director, DRDA Vizianagaram"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", color: "#082B50" }}>
                  Sri A. Kalyan Chakravarthi
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, mb: 2 }}>
                  Project Director, DRDA
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center">
                  <Button
                    size="small"
                    component="a"
                    href="tel:08922276555"
                    startIcon={<PhoneIcon sx={{ fontSize: 14, color: "#082B50" }} />}
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
                    Contact
                  </Button>
                  <Button
                    size="small"
                    component="a"
                    href="mailto:pd-drda-vzm@ap.gov.in"
                    startIcon={<EmailIcon sx={{ fontSize: 14 }} />}
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

              {/* Right: Message & Vision */}
              <Grid size={{ xs: 12, md: 8.8 }}>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "#D97706", fontSize: "0.8rem", fontWeight: 800, mb: 1.5 }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CampaignRoundedIcon sx={{ fontSize: 16, color: "#D97706" }} />
                  </Box>
                  MESSAGE FROM PROJECT DIRECTOR
                </Box>

                <Typography sx={{ color: "#1E293B", fontSize: { xs: "0.95rem", sm: "1.05rem" }, lineHeight: 1.6, mb: 2.5, fontWeight: 500 }}>
                  DRDA Vizianagaram works to transform rural livelihoods by promoting community institutions, scaling women-led SHGs, and ensuring convergence of welfare schemes, and enhancing the lives of rural communities.
                </Typography>

                {/* Yellow Vision Callout */}
                <Box
                  sx={{
                    bgcolor: "#FFFBEB",
                    borderLeft: "4px solid #F5B800",
                    p: { xs: 1.75, sm: 2 },
                    borderRadius: "0 12px 12px 0",
                    mb: 2.5,
                  }}
                >
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 800, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5 }}>
                    VISION FOR DRDA VIZIANAGARAM
                  </Typography>
                  <Typography sx={{ color: "#475569", fontStyle: "italic", fontSize: { xs: "0.85rem", sm: "0.92rem" } }}>
                    &ldquo;A vibrant coastal district where development is inclusive, education is universal, and heritage is preserved.&rdquo;
                  </Typography>
                </Box>

                {/* 4 Bullet Points */}
                <Grid container spacing={1.5}>
                  {[
                    "Community-Driven Livelihoods",
                    "Women Entrepreneurship & SHG Scaling",
                    "Accessible Citizen Services",
                    "Inclusive Scheme Convergence"
                  ].map((item, idx) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#334155", fontWeight: 600, fontSize: "0.85rem" }}>
                        <CheckCircleIcon sx={{ color: "#F5B800", fontSize: 18 }} />
                        {item}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 4. OUR VISION & OUR MISSION TWO CARDS WITH EXACT ILLUSTRATIONS */}
      <Box sx={{ py: { xs: 1.5, sm: 2, md: 2.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Grid container spacing={2.5}>
            {/* Vision Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: { xs: "16px", sm: "20px" },
                  p: { xs: 2, sm: 2.5 },
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                  height: "100%",
                  minHeight: { xs: "auto", md: 145 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background Illustration of Vision in bottom-right (zoomed out & wider view) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: { xs: 130, sm: 160, md: 190 },
                    height: { xs: 55, sm: 65, md: 75 },
                    backgroundImage: "url('/images/vision_illustration_wide.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    opacity: 0.9,
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.25 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#FEF3C7", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <VisibilityIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#082B50", letterSpacing: "0.02em" }}>
                        OUR VISION
                      </Typography>
                    </Box>
                    <Box sx={{ bgcolor: "#FFFBEB", color: "#B45309", px: 1.2, py: 0.25, borderRadius: 20, fontSize: "0.64rem", fontWeight: 800, border: "1px solid #FDE68A" }}>
                      FUTURE OUTLOOK
                    </Box>
                  </Stack>
                  <Typography sx={{ color: "#475569", fontSize: { xs: "0.82rem", sm: "0.86rem" }, lineHeight: 1.55, fontWeight: 500, maxWidth: { xs: "100%", sm: "80%" } }}>
                    To promote sustainable rural livelihoods and ensure the holistic development of rural people in Vizianagaram through inclusive growth and community participation.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Mission Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: { xs: "16px", sm: "20px" },
                  p: { xs: 2, sm: 2.5 },
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
                  height: "100%",
                  minHeight: { xs: "auto", md: 145 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background Illustration of Mission in bottom-right (zoomed out & wider view) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: { xs: 140, sm: 180, md: 210 },
                    height: { xs: 55, sm: 65, md: 75 },
                    backgroundImage: "url('/images/mission_illustration_wide.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    opacity: 0.9,
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.25 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#FEF3C7", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <TrackChangesIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Typography sx={{ fontWeight: 850, fontSize: "0.92rem", color: "#082B50", letterSpacing: "0.02em" }}>
                        OUR MISSION
                      </Typography>
                    </Box>
                    <Box sx={{ bgcolor: "#FFFBEB", color: "#B45309", px: 1.2, py: 0.25, borderRadius: 20, fontSize: "0.64rem", fontWeight: 800, border: "1px solid #FDE68A" }}>
                      ACTION PLAN
                    </Box>
                  </Stack>
                  <Typography sx={{ color: "#475569", fontSize: { xs: "0.82rem", sm: "0.86rem" }, lineHeight: 1.55, fontWeight: 500, maxWidth: { xs: "100%", sm: "75%", md: "70%" } }}>
                    To ensure economic empowerment through convergence of government programs and community participation.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. ROLES & RESPONSIBILITIES */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box sx={{ mb: 2.5 }}>
            <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              ROLES & RESPONSIBILITIES
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900, mb: 0.5 }}>
              Roles & Responsibilities
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
              DRDA Vizianagaram serves as the nodal administrative agency executing rural development schemes at district level.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {roles.map((role, idx) => {
              const RoleIcon = role.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                      p: 2.5,
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.75,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#F5B800",
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 22px rgba(8, 43, 80, 0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "12px",
                        bgcolor: "#FEF3C7",
                        color: "#D97706",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <RoleIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: "0.95rem", color: "#082B50", mb: 0.5 }}>
                        {role.title}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.8rem", lineHeight: 1.5 }}>
                        {role.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 6. RURAL DEVELOPMENT PROGRAMMES WITH 4 PHOTO CARDS */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ mb: 2.5 }}>
            <Box>
              <Typography sx={{ color: "#D97706", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                RURAL DEVELOPMENT PROGRAMMES
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.35rem", sm: "1.65rem" }, fontWeight: 900 }}>
                Building Livelihoods, Empowering Communities
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/schemes"
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />}
              sx={{
                bgcolor: "#FEF3C7",
                color: "#082B50",
                borderRadius: "100px",
                px: 2.2,
                py: 0.6,
                fontSize: "0.78rem",
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: "#FDE68A" },
              }}
            >
              View All Programmes
            </Button>
          </Stack>

          <Grid container spacing={2}>
            {programmes.map((prog, idx) => (
              <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 24px rgba(8, 43, 80, 0.1)",
                      borderColor: "#F5B800",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 145,
                      width: "100%",
                      backgroundImage: `url('${prog.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "#F1F5F9",
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.88rem", color: "#082B50" }}>
                      {prog.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* QUICK NAVIGATION PILLS (MATCHING WHO'S WHO WITH SMOOTH HOVER EFFECTS) */}
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

      {/* 7. BOTTOM CTA CALLOUT BANNER (Matching mockup with authentic village house illustration) */}
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
