"use client";

import { Box, Container, Grid, Typography, Stack, Button, Breadcrumbs, Chip, Link as MuiLink } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";

const responsibilities = [
  {
    title: "Rural Development",
    description: "Implementing central and state government schemes for rural infrastructure, housing, and basic amenities.",
    icon: "government",
  },
  {
    title: "Livelihood Promotion",
    description: "Facilitating income generation and economic empowerment through diverse livelihood programs.",
    icon: "trendingUp",
  },
  {
    title: "Women Empowerment",
    description: "Organizing women into Self-Help Groups and providing them with financial access and entrepreneurship opportunities.",
    icon: "users",
  },
  {
    title: "Skill Development",
    description: "Conducting vocational training programs to equip rural youth with market-relevant skills.",
    icon: "shield",
  },
  {
    title: "Financial Inclusion",
    description: "Promoting bank linkages, micro-credit, and insurance coverage for rural households.",
    icon: "target",
  },
  {
    title: "Monitoring Welfare Schemes",
    description: "Ensuring effective implementation and tracking of all welfare program outcomes at the ground level.",
    icon: "eye",
  },
];

const stats = [
  { label: "Active SHGs", value: "32,450" },
  { label: "Total Beneficiaries", value: "3,15,400+" },
  { label: "Mandals Covered", value: "27" },
  { label: "Villages Reached", value: "982" },
];

export default function DRDAAboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section (Matching District Profile Hero style, padding & color) */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 2.5, sm: 3, md: 3.5 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Breadcrumbs
            aria-label="Breadcrumb"
            separator="/"
            sx={{
              color: "rgba(43, 33, 0, 0.72)",
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              fontWeight: 600,
              mb: 1,
              "& .MuiBreadcrumbs-ol": { flexWrap: "wrap" },
            }}
          >
            <MuiLink
              component={Link}
              href="/"
              sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#1F1700" } }}
            >
              Home
            </MuiLink>
            <MuiLink
              component={Link}
              href="/about"
              sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#2B2100" } }}
            >
              About Us
            </MuiLink>
            <Typography sx={{ color: "#2B2100", fontWeight: 700, fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>
              About DRDA
            </Typography>
          </Breadcrumbs>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                background: "#18181B",
                color: "#FACC15",
                px: { xs: 1, sm: 1.25 },
                py: 0.4,
                borderRadius: 20,
                fontSize: { xs: "0.68rem", sm: "0.72rem" },
                fontWeight: 700,
              }}
            >
              <CorporateFareRoundedIcon sx={{ fontSize: 13 }} /> Nodal Agency · SERP
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                background: "rgba(0,0,0,0.08)",
                color: "#18181B",
                border: "1px solid rgba(0,0,0,0.12)",
                px: { xs: 1, sm: 1.25 },
                py: 0.4,
                borderRadius: 20,
                fontSize: { xs: "0.68rem", sm: "0.72rem" },
                fontWeight: 600,
              }}
            >
              <PortalIcon name="location" sx={{ fontSize: 14 }} /> DRDA, Vizianagaram
            </Box>
          </Stack>

          <Box sx={{ maxWidth: 850 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 1,
                fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.25rem", lg: "2.5rem" },
                letterSpacing: "-0.02em",
                color: "#1F1700",
                lineHeight: 1.2,
              }}
            >
              District Rural Development Agency
            </Typography>
            <Typography
              sx={{
                color: "rgba(31, 23, 0, 0.88)",
                fontSize: { xs: "0.82rem", sm: "0.92rem", md: "1rem" },
                maxWidth: 680,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              Driving rural prosperity, livelihood transformation, and women-led community enterprise through participatory convergence in Vizianagaram.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Leadership Showcase Card - Floating with portrait photo, matching /about/district */}
      <Box
        sx={{
          pt: 0,
          pb: 0,
          px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
          position: "relative",
          zIndex: 10,
          mt: { xs: -1, sm: -1.5, md: -2 },
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Box
            sx={{
              background: "#FFFFFF",
              borderRadius: { xs: "16px", sm: "20px", md: "24px" },
              boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              overflow: "hidden",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {/* Left Column (Rich Dark Gold/Brown Portrait Block) */}
            <Box
              sx={{
                width: { xs: "100%", md: "300px", lg: "320px" },
                background: "#3F3210",
                p: { xs: 2.5, sm: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: 130, sm: 150, md: 160 },
                  aspectRatio: "3/4",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "4px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  mb: { xs: 2, sm: 2.5, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/leaders/project-director.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                  mb: 0.25,
                  letterSpacing: "-0.01em",
                }}
              >
                Sri A. Kalyan Chakravarthi
              </Typography>
              <Typography
                sx={{
                  color: "#FACC15",
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  fontWeight: 600,
                  mb: { xs: 2, sm: 2.5, md: 3 },
                }}
              >
                Project Director, DRDA
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ width: "100%", maxWidth: { xs: 260, md: "100%" } }}>
                <Button
                  component="a"
                  href="tel:08922276606"
                  fullWidth
                  variant="outlined"
                  startIcon={<PhoneRoundedIcon sx={{ fontSize: "14px !important", color: "#FFFFFF !important" }} />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#FFFFFF !important",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: 650,
                    textTransform: "none",
                    py: 0.75,
                    background: "rgba(255,255,255,0.06)",
                    "&:hover": {
                      borderColor: "#FACC15",
                      background: "rgba(250, 204, 21, 0.15)",
                      color: "#FACC15 !important",
                      "& .MuiSvgIcon-root": { color: "#FACC15 !important" }
                    },
                  }}
                >
                  Contact
                </Button>
                <Button
                  component="a"
                  href="mailto:pddrdavzm@gmail.com"
                  fullWidth
                  variant="outlined"
                  startIcon={<EmailRoundedIcon sx={{ fontSize: "14px !important", color: "#FFFFFF !important" }} />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#FFFFFF !important",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: 650,
                    textTransform: "none",
                    py: 0.75,
                    background: "rgba(255,255,255,0.06)",
                    "&:hover": {
                      borderColor: "#FACC15",
                      background: "rgba(250, 204, 21, 0.15)",
                      color: "#FACC15 !important",
                      "& .MuiSvgIcon-root": { color: "#FACC15 !important" }
                    },
                  }}
                >
                  Email
                </Button>
              </Stack>
            </Box>

            {/* Right Column (Message & Priorities) */}
            <Box sx={{ flex: 1, p: { xs: 2.5, sm: 3.5, md: 4, lg: 5 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#D97706",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 2 },
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <PortalIcon name="support" sx={{ fontSize: 16 }} />
                Message from Project Director
              </Box>

              <Box sx={{ position: "relative" }}>
                <FormatQuoteRoundedIcon
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: -15,
                    fontSize: { xs: 40, sm: 50 },
                    color: "rgba(250,204,21,0.15)",
                    zIndex: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#1E293B",
                    fontSize: { xs: "0.92rem", sm: "1rem", md: "1.08rem" },
                    lineHeight: 1.6,
                    mb: { xs: 2, sm: 2.5, md: 3 },
                    fontWeight: 500,
                    position: "relative",
                    zIndex: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  DRDA Vizianagaram works to transform rural livelihoods by federating community institutions, scaling women-led micro-enterprises, and ensuring convergence of all government welfare initiatives at the grassroots.
                </Typography>
              </Box>

              <Box sx={{ borderLeft: "3px solid #FACC15", pl: 2, mb: { xs: 2, sm: 2.5, md: 3 } }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#D97706",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    mb: 0.5,
                    textTransform: "uppercase",
                  }}
                >
                  Mission for DRDA Vizianagaram
                </Typography>
                <Typography
                  sx={{
                    color: "#475569",
                    fontStyle: "italic",
                    fontSize: { xs: "0.85rem", sm: "0.92rem" },
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Building resilient rural households where every woman is economically empowered, every village is self-reliant, and every livelihood opportunity is accessible.&rdquo;
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {["Community-Driven Livelihoods", "Women Enterprise & SHG Scaling", "Inclusive Scheme Convergence", "Vocational Skilling for Youth"].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#334155",
                        fontWeight: 500,
                        fontSize: { xs: "0.8rem", sm: "0.85rem" },
                      }}
                    >
                      <CheckCircleRoundedIcon sx={{ color: "#FACC15", fontSize: 18 }} />
                      {item}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Vision & Mission Cards */}
      <Box component="section" sx={{ py: { xs: 2.5, sm: 3, md: 3.5 }, background: "#FAFAFA" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Our Vision Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  p: { xs: 2, sm: 2.5 },
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "#FFC107",
                  },
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "#CBD5E1",
                    boxShadow: "0 10px 22px -4px rgba(15, 23, 42, 0.08)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        background: "#FEF9C3",
                        border: "1px solid #FEF08A",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#CA8A04",
                        flexShrink: 0,
                      }}
                    >
                      <VisibilityRoundedIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A", fontSize: "1rem", letterSpacing: "-0.01em" }}>
                      Our Vision
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#FEF9C3",
                      color: "#CA8A04",
                      border: "1px solid #FEF08A",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      px: 1.2,
                      py: 0.25,
                      borderRadius: "20px",
                    }}
                  >
                    Future Outlook
                  </Box>
                </Box>

                <Typography sx={{ color: "#475569", lineHeight: 1.55, fontSize: "0.82rem", fontWeight: 500 }}>
                  To promote sustainable rural livelihoods and improve the quality of life of rural households in Vizianagaram through participatory and convergent development approaches that uplift every family.
                </Typography>
              </Box>
            </Grid>

            {/* Our Mission Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  p: { xs: 2, sm: 2.5 },
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "#FFC107",
                  },
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "#CBD5E1",
                    boxShadow: "0 10px 22px -4px rgba(15, 23, 42, 0.08)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        background: "#FEF9C3",
                        border: "1px solid #FEF08A",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#CA8A04",
                        flexShrink: 0,
                      }}
                    >
                      <TrackChangesRoundedIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A", fontSize: "1rem", letterSpacing: "-0.01em" }}>
                      Our Mission
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#FEF9C3",
                      color: "#CA8A04",
                      border: "1px solid #FEF08A",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      px: 1.2,
                      py: 0.25,
                      borderRadius: "20px",
                    }}
                  >
                    Action Plan
                  </Box>
                </Box>

                <Typography sx={{ color: "#475569", lineHeight: 1.55, fontSize: "0.82rem", fontWeight: 500 }}>
                  Enable economic empowerment through convergence of government programs and community participation. Ensure every eligible citizen receives welfare benefits and every village advances toward economic self-sufficiency.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Roles & Responsibilities Section */}
      <Box component="section" sx={{ py: { xs: 3, sm: 3.5, md: 4 }, background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box
              sx={{
                display: "inline-block",
                background: "#FEF9C3",
                border: "1px solid #FEF08A",
                color: "#CA8A04",
                fontSize: "0.7rem",
                fontWeight: 800,
                px: 1.5,
                py: 0.35,
                borderRadius: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 0.8,
              }}
            >
              Operational Domain
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 850, color: "#0F172A", mb: 0.8, letterSpacing: "-0.02em", fontSize: { xs: "1.35rem", sm: "1.65rem" } }}>
              Roles & Responsibilities
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: "560px", mx: "auto", fontSize: "0.82rem", lineHeight: 1.5 }}>
              DRDA Vizianagaram serves as the nodal administrative agency executing rural development across the district.
            </Typography>
            <Box sx={{ mt: 1.2, height: "3px", width: "44px", background: "#FFC107", borderRadius: "2px", mx: "auto" }} />
          </Box>

          <Grid container spacing={2}>
            {responsibilities.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    background: "#FFFFFF",
                    borderRadius: "14px",
                    border: "1px solid #E2E8F0",
                    p: 2,
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 20px -4px rgba(15, 23, 42, 0.08)",
                      borderColor: "#CBD5E1",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      background: "#FEF9C3",
                      border: "1px solid #FEF08A",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#CA8A04",
                      flexShrink: 0,
                    }}
                  >
                    <PortalIcon name={item.icon} sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#0F172A", mb: 0.4, fontSize: "0.9rem" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* DRDA at a Glance - Impact Numbers */}
      <Box component="section" sx={{ py: { xs: 3, sm: 3.5 }, background: "#FAFAFA", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2.5 }}>
            <Box
              sx={{
                display: "inline-block",
                background: "#FEF9C3",
                border: "1px solid #FEF08A",
                color: "#CA8A04",
                fontSize: "0.7rem",
                fontWeight: 800,
                px: 1.5,
                py: 0.35,
                borderRadius: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 0.8,
              }}
            >
              Ground Reach
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 850, color: "#0F172A", mb: 0.6, letterSpacing: "-0.02em", fontSize: { xs: "1.35rem", sm: "1.65rem" } }}>
              DRDA at a Glance
            </Typography>
            <Box sx={{ mt: 1, height: "3px", width: "44px", background: "#FFC107", borderRadius: "2px", mx: "auto" }} />
          </Box>

          <Grid container spacing={2}>
            {stats.map((stat, idx) => (
              <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                <Box
                  sx={{
                    background: "#FFFFFF",
                    borderRadius: "14px",
                    border: "1px solid #E2E8F0",
                    borderTop: "3px solid #FFC107",
                    boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
                    p: { xs: 2, sm: 2.4 },
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 20px -4px rgba(250, 204, 21, 0.2)",
                      borderColor: "#FFC107",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.9rem" }, fontWeight: 850, mb: 0.5, color: "#B45309", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.78rem", fontWeight: 650 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Navigation Quick Links */}
      <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 2.5, sm: 3 }, borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "Org Structure", href: "/about/structure" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "SERP Corner", href: "/serp-corner" },
            ].map((link, idx) => (
              <Button
                key={idx}
                component={Link}
                href={link.href}
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "14px !important" }} />}
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #FFC107",
                  borderRadius: "100px",
                  color: "#1F1700",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  px: 2.4,
                  py: 0.75,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "#FFC107",
                    color: "#181102",
                    transform: "translateY(-1px)",
                  },
                }}
                variant="outlined"
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
