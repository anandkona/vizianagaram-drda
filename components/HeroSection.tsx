"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Link from "next/link";
import { usePortalUI } from "@/components/PortalUIContext";

export default function HeroSection() {
  const { openConcern } = usePortalUI();

  return (
    <Box
      component="section"
      aria-label="Vizianagaram district portal hero"
      sx={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(circle at 62% 28%, rgba(254, 215, 102, 0.45) 0%, rgba(254, 240, 138, 0.22) 18%, rgba(255, 255, 255, 0) 42%),
          linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 60%, #FEF9E7 100%)
        `,
        position: "relative",
        overflow: "hidden",
        pt: { xs: 4, sm: 5, md: 7 },
        pb: { xs: 5, sm: 6, md: 8 },
        borderBottom: "1px solid #ECE4D0",
      }}
    >
      {/* Decorative Sun Halo Behind Temple (Matching Reference Mockup) */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: "8%", md: "6%" },
          right: { xs: "2%", md: "18%", lg: "22%" },
          width: { xs: 240, sm: 340, md: 440 },
          height: { xs: 240, sm: 340, md: 440 },
          borderRadius: "50%",
          background: "radial-gradient(circle, #FDE047 0%, #FBBF24 55%, rgba(251, 191, 36, 0.05) 75%, transparent 100%)",
          opacity: 0.85,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Decorative Monument Silhouette / Backdrop Illustration */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          right: { xs: "-10%", sm: "2%", md: "8%", lg: "12%" },
          top: { xs: "12%", md: "8%" },
          width: { xs: 320, sm: 460, md: 540, lg: 620 },
          height: { xs: 320, sm: 440, md: 520, lg: 580 },
          backgroundImage: 'url("/images/hero-temple.jpg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          opacity: 0.32,
          mixBlendMode: "multiply",
          zIndex: 0,
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse at 60% 50%, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 60% 50%, black 40%, transparent 75%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
            gap: { xs: 4, sm: 5, lg: 6 },
            alignItems: "center",
          }}
        >
          {/* Left Column: Heading, Subtitle, Description & Action Buttons */}
          <Box>
            {/* Golden Eyebrow */}
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                color: "#D97706",
                fontWeight: 800,
                fontSize: { xs: "0.75rem", sm: "0.82rem" },
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                mb: 1.2,
              }}
            >
              WELCOME TO
            </Typography>

            {/* Main District Title */}
            <Typography
              component="h1"
              sx={{
                color: "#082B50",
                fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem", lg: "4.4rem" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.06,
                mb: 1,
              }}
            >
              Vizianagaram District
            </Typography>

            {/* Amber Tagline */}
            <Typography
              component="p"
              sx={{
                color: "#D97706",
                fontSize: { xs: "1.15rem", sm: "1.35rem", md: "1.55rem" },
                fontWeight: 800,
                letterSpacing: "-0.01em",
                mb: 2.2,
              }}
            >
              People. Progress. Prosperity.
            </Typography>

            {/* Body Description */}
            <Typography
              sx={{
                color: "#475569",
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.65,
                maxWidth: 560,
                mb: 3.5,
              }}
            >
              A unified platform for district services, government schemes, citizen welfare
              initiatives and development programs to build a stronger Vizianagaram.
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.8}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              {/* Primary Gold CTA */}
              <Button
                component={Link}
                href="/citizen-services"
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "18px !important", color: "#082B50 !important" }} />}
                sx={{
                  background: "linear-gradient(135deg, #FFC107 0%, #FFB300 100%)",
                  color: "#082B50 !important",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  px: 3.2,
                  py: 1.35,
                  borderRadius: "50px",
                  boxShadow: "0 6px 20px -3px rgba(245, 158, 11, 0.45)",
                  textTransform: "none",
                  transition: "all 0.25s ease",
                  "& .MuiButton-endIcon": {
                    color: "#082B50 !important",
                    transition: "transform 0.2s ease",
                  },
                  "&:hover": {
                    background: "linear-gradient(135deg, #FFD54F 0%, #FFC107 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 24px -2px rgba(245, 158, 11, 0.55)",
                    "& .MuiButton-endIcon": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
                variant="contained"
              >
                Explore Citizen Services
              </Button>

              {/* Secondary Share Concern CTA */}
              <Button
                onClick={openConcern}
                startIcon={<CampaignRoundedIcon sx={{ color: "#082B50 !important", fontSize: "19px !important" }} />}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  color: "#082B50 !important",
                  fontWeight: 750,
                  fontSize: "0.92rem",
                  px: 2.8,
                  py: 1.3,
                  borderRadius: "50px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  textTransform: "none",
                  transition: "all 0.25s ease",
                  "& .MuiButton-startIcon": {
                    color: "#082B50 !important",
                  },
                  "&:hover": {
                    backgroundColor: "#F8FAFC",
                    borderColor: "#082B50",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(8, 43, 80, 0.12)",
                  },
                }}
                variant="outlined"
              >
                Share Your Concern
              </Button>
            </Stack>
          </Box>

          {/* Right Column: Floating White District Stats Card */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-end" } }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 420,
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: { xs: 2.5, sm: 3 },
                boxShadow: "0 20px 40px -12px rgba(8, 43, 80, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                position: "relative",
              }}
            >
              {/* Card Header */}
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.5 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      background: "rgba(8, 43, 80, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#082B50",
                    }}
                  >
                    <AccountBalanceRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.95rem" }}>
                    A Connected District
                  </Typography>
                </Stack>
                <Link
                  href="/about/district"
                  style={{
                    color: "#64748B",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  View More <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />
                </Link>
              </Stack>

              {/* 4-Metric Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                {/* Population */}
                <Box
                  sx={{
                    p: 1.8,
                    borderRadius: "14px",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.6 }}>
                    <GroupsRoundedIcon sx={{ fontSize: 18, color: "#0284C7" }} />
                    <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#082B50", lineHeight: 1 }}>
                      19.30 Lakh
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>
                    Population
                  </Typography>
                </Box>

                {/* Mandals */}
                <Box
                  sx={{
                    p: 1.8,
                    borderRadius: "14px",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.6 }}>
                    <LocationCityRoundedIcon sx={{ fontSize: 18, color: "#F59E0B" }} />
                    <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#082B50", lineHeight: 1 }}>
                      27
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>
                    Mandals
                  </Typography>
                </Box>

                {/* Gram Panchayats */}
                <Box
                  sx={{
                    p: 1.8,
                    borderRadius: "14px",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.6 }}>
                    <AccountBalanceRoundedIcon sx={{ fontSize: 18, color: "#F59E0B" }} />
                    <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#082B50", lineHeight: 1 }}>
                      882
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>
                    Gram Panchayats
                  </Typography>
                </Box>

                {/* Literacy Rate */}
                <Box
                  sx={{
                    p: 1.8,
                    borderRadius: "14px",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.6 }}>
                    <MenuBookRoundedIcon sx={{ fontSize: 18, color: "#0284C7" }} />
                    <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#082B50", lineHeight: 1 }}>
                      53.21%
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>
                    Literacy Rate
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2, borderColor: "#E2E8F0" }} />

              {/* Quick Links Section with Services Badge */}
              <Box>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 800, color: "#082B50" }}>
                    Quick Links
                  </Typography>
                  <Chip
                    label="27 Services →"
                    component={Link}
                    href="/citizen-services"
                    clickable
                    size="small"
                    sx={{
                      backgroundColor: "rgba(245, 158, 11, 0.12)",
                      color: "#B45309",
                      fontWeight: 800,
                      fontSize: "0.68rem",
                      height: 22,
                      borderRadius: "6px",
                      "&:hover": {
                        backgroundColor: "rgba(245, 158, 11, 0.22)",
                      },
                    }}
                  />
                </Stack>

                <Stack direction="row" spacing={1.2}>
                  {/* MeeSeva Services Pill */}
                  <Button
                    component="a"
                    href="https://meeseva.ap.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: "13px !important", color: "#475569 !important" }} />}
                    sx={{
                      flex: 1,
                      backgroundColor: "#F1F5F9",
                      color: "#334155 !important",
                      fontSize: "0.75rem",
                      fontWeight: 750,
                      textTransform: "none",
                      py: 0.9,
                      px: 1.4,
                      borderRadius: "10px",
                      justifyContent: "space-between",
                      "& .MuiButton-endIcon": {
                        color: "#475569 !important",
                      },
                      "&:hover": {
                        backgroundColor: "#E2E8F0",
                      },
                    }}
                  >
                    MeeSeva Services
                  </Button>

                  {/* Apply for Certificates Pill */}
                  <Button
                    component={Link}
                    href="/citizen-services"
                    sx={{
                      flex: 1,
                      backgroundColor: "#FEF3C7",
                      color: "#92400E !important",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      textTransform: "none",
                      py: 0.9,
                      px: 1.4,
                      borderRadius: "10px",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#FDE68A",
                      },
                    }}
                  >
                    Apply for Certificates
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
