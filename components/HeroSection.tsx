"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import Link from "next/link";
import { usePortalUI } from "@/components/PortalUIContext";
import { districtFootprint, heroSlides, heroStats } from "@/src/data/home";

const SLIDE_INTERVAL_MS = 5000;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { openConcern } = usePortalUI();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <Box
      component="section"
      aria-label="Vizianagaram district citizen services"
      sx={{
        backgroundColor: "#161102",
        backgroundImage: {
          xs: `linear-gradient(180deg, rgba(15, 11, 1, 0.96) 0%, rgba(15, 11, 1, 0.92) 50%, rgba(15, 11, 1, 0.75) 100%), url("${slide.image}")`,
          md: `linear-gradient(90deg, rgba(15, 11, 1, 0.95) 0%, rgba(15, 11, 1, 0.88) 44%, rgba(15, 11, 1, 0.55) 70%, rgba(15, 11, 1, 0.25) 100%), linear-gradient(180deg, rgba(15, 11, 1, 0.70) 0%, rgba(15, 11, 1, 0.15) 45%, rgba(15, 11, 1, 0.80) 100%), url("${slide.image}")`,
        },
        backgroundPosition: { xs: "center 20%", md: "right 20% center", lg: "right 30% center" },
        backgroundSize: "cover",
        color: "#FFFFFF",
        display: "flex",
        minHeight: "auto",
        overflow: "hidden",
        position: "relative",
        transition: "background-image 800ms ease-in-out",
      }}
    >
      <Box
        aria-hidden="true"
        className="portal-dotted-pattern"
        sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }}
      />
      <Box
        aria-hidden="true"
        sx={{
          background: "radial-gradient(circle, rgba(255, 193, 7, 0.2), transparent 68%)",
          borderRadius: "50%",
          height: { xs: 300, sm: 430, lg: 560 },
          position: "absolute",
          right: { xs: -150, sm: -70, lg: 30 },
          top: { xs: 20, lg: -40 },
          width: { xs: 300, sm: 430, lg: 560 },
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          background: "rgba(255, 193, 7, 0.1)",
          borderRadius: "50%",
          filter: "blur(36px)",
          height: 320,
          left: -170,
          position: "absolute",
          top: 210,
          width: 320,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            alignItems: "center",
            display: "grid",
            gap: { xs: 3, sm: 4, lg: 7 },
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            pb: { xs: 3, sm: 3.5, lg: 4 },
            pt: { xs: 2, sm: 3, lg: 4 },
          }}
        >
          <Box>
            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: { xs: 1.5, sm: 2.5 } }}>
              <Chip
                icon={<PublicRoundedIcon sx={{ fontSize: "14px !important" }} />}
                label="Andhra Pradesh"
                sx={{
                  background: "#FFC107",
                  color: "#2B2100",
                  fontSize: { xs: "0.68rem", sm: "0.72rem" },
                  fontWeight: 850,
                  height: { xs: 26, sm: 32 },
                  "& .MuiChip-icon": { color: "#2B2100" },
                }}
              />
              <Chip
                label="Vizianagaram District"
                sx={{
                  background: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#FFFFFF",
                  fontSize: { xs: "0.68rem", sm: "0.72rem" },
                  height: { xs: 26, sm: 32 },
                }}
              />
            </Stack>

            <Typography
              component="h1"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "1.75rem", sm: "2.4rem", md: "3.2rem", lg: "4.15rem" },
                fontWeight: 850,
                letterSpacing: { xs: "-0.03em", sm: "-0.045em", lg: "-0.055em" },
                lineHeight: { xs: 1.15, sm: 1.12, lg: 1.08 },
                maxWidth: 700,
                textShadow: "0 2px 16px rgba(0,0,0,0.85), 0 4px 30px rgba(0,0,0,0.6)",
              }}
            >
              Empowering rural communities of{" "}
              <Box component="span" sx={{ color: "#FFC107" }}>
                Vizianagaram.
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.85rem", sm: "0.95rem", lg: "1.08rem" },
                lineHeight: { xs: 1.55, sm: 1.7 },
                maxWidth: 610,
                mt: { xs: 1.2, sm: 2 },
                textShadow: "0 1px 8px rgba(0,0,0,0.8)",
              }}
            >
              A clear digital gateway to district services, government schemes, public utilities,
              livelihoods, tourism and development updates for every citizen.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: { xs: 2.5, sm: 3.5 }, maxWidth: 580 }}>
              <Button
                component={Link}
                href="/services"
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "19px !important", color: "#161102 !important", transition: "transform 0.25s ease" }} />}
                sx={{
                  background: "linear-gradient(135deg, #FFC107 0%, #FFB300 50%, #FFA000 100%)",
                  border: "1px solid rgba(255, 235, 59, 0.45)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px -4px rgba(255, 193, 7, 0.45), 0 2px 6px -1px rgba(255, 193, 7, 0.3)",
                  color: "#161102 !important",
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  minHeight: 48,
                  px: 2.8,
                  py: 1.25,
                  textTransform: "none",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: { xs: "100%", sm: "auto" },
                  "& .MuiButton-endIcon": {
                    color: "#161102 !important",
                  },
                  "&:hover": {
                    background: "linear-gradient(135deg, #FFD54F 0%, #FFC107 100%)",
                    boxShadow: "0 14px 32px -4px rgba(255, 193, 7, 0.6), 0 4px 14px -2px rgba(255, 193, 7, 0.4)",
                    color: "#161102 !important",
                    transform: "translateY(-2px)",
                    "& .MuiButton-endIcon": {
                      color: "#161102 !important",
                      transform: "translateX(4px)",
                    },
                  },
                  "&:active": {
                    boxShadow: "0 4px 12px rgba(255, 193, 7, 0.35)",
                    transform: "translateY(0)",
                  },
                }}
                variant="contained"
              >
                Explore citizen services
              </Button>
              <Button
                onClick={openConcern}
                startIcon={<CampaignRoundedIcon sx={{ color: "#FFC107 !important", fontSize: "20px !important", transition: "transform 0.25s ease" }} />}
                sx={{
                  backdropFilter: "blur(12px)",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.24)",
                  borderRadius: "12px",
                  color: "#FFFFFF !important",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  minHeight: 48,
                  px: 2.6,
                  py: 1.25,
                  textTransform: "none",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: { xs: "100%", sm: "auto" },
                  "& .MuiButton-startIcon": {
                    color: "#FFC107 !important",
                  },
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.16)",
                    borderColor: "rgba(255, 193, 7, 0.6)",
                    boxShadow: "0 10px 25px -4px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 193, 7, 0.2)",
                    color: "#FFF9C4 !important",
                    transform: "translateY(-2px)",
                    "& .MuiButton-startIcon": {
                      color: "#FFE082 !important",
                      transform: "scale(1.12)",
                    },
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
                variant="outlined"
              >
                Share your concern
              </Button>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={{ xs: 1.5, sm: 2.5 }}
              sx={{ color: "rgba(255,255,255,0.75)", mt: { xs: 2, sm: 3 } }}
            >
              <Stack direction="row" alignItems="center" spacing={0.6}>
                <CheckCircleRoundedIcon sx={{ color: "#FFC107", fontSize: 16 }} />
                <Typography sx={{ fontSize: { xs: "0.72rem", sm: "0.75rem" } }}>Clear and accountable</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={0.6}>
                <PeopleAltRoundedIcon sx={{ color: "#FFC107", fontSize: 16 }} />
                <Typography sx={{ fontSize: { xs: "0.72rem", sm: "0.75rem" } }}>Designed for every citizen</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ alignSelf: "center", width: "100%" }}>
            <Box
              sx={{
                backdropFilter: "blur(16px)",
                background: "linear-gradient(135deg, rgba(255, 238, 88, 0.28) 0%, rgba(255, 193, 7, 0.20) 45%, rgba(245, 158, 11, 0.12) 100%)",
                border: "1.5px solid rgba(255, 224, 130, 0.55)",
                borderRadius: 2.5,
                boxShadow: "0 24px 55px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.45)",
                p: { xs: 1.8, sm: 2.5 },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 238, 88, 0.4) 0%, transparent 70%)",
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%)",
                  pointerEvents: "none",
                },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ position: "relative", zIndex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      alignItems: "center",
                      background: "linear-gradient(135deg, #FFC107 0%, #FFB300 50%, #FFA000 100%)",
                      borderRadius: 1.5,
                      boxShadow: "0 4px 12px rgba(255, 193, 7, 0.4)",
                      color: "#161102",
                      display: "flex",
                      height: 38,
                      justifyContent: "center",
                      width: 38,
                    }}
                  >
                    <MapRoundedIcon sx={{ fontSize: 21 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "rgba(255, 236, 179, 0.85)", fontSize: "0.64rem", fontWeight: 800, letterSpacing: "0.09em", textTransform: "uppercase" }}>
                      District pulse
                    </Typography>
                    <Typography sx={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 850, mt: 0.25 }}>
                      A connected district
                    </Typography>
                  </Box>
                </Stack>
                <Chip
                  label="Citizen first"
                  size="small"
                  sx={{ background: "rgba(255, 193, 7, 0.2)", border: "1px solid rgba(255, 193, 7, 0.4)", color: "#FFD54F", fontSize: "0.62rem", fontWeight: 750 }}
                />
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gap: 1.1,
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  mt: { xs: 1.6, sm: 2.5 },
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {heroStats.map((stat) => (
                  <Box
                    key={stat.label}
                    sx={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      border: "1px solid rgba(255, 213, 79, 0.28)",
                      borderRadius: 2,
                      minWidth: 0,
                      p: { xs: 1.1, sm: 1.7 },
                      backdropFilter: "blur(8px)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "rgba(255, 213, 79, 0.6)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Typography sx={{ color: "#FFC107", fontSize: { xs: "1.15rem", sm: "1.5rem", lg: "1.65rem" }, fontWeight: 900, lineHeight: 1.05 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.78)", fontSize: "0.66rem", lineHeight: 1.35, mt: 0.4, fontWeight: 550 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ background: "rgba(0, 0, 0, 0.25)", border: "1px solid rgba(255, 213, 79, 0.2)", borderRadius: 2, mt: { xs: 1, sm: 1.3 }, p: { xs: 1.2, sm: 1.5 }, position: "relative", zIndex: 1 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                  <Stack direction="row" alignItems="center" spacing={0.8}>
                    <CampaignRoundedIcon sx={{ color: "#FFC107", fontSize: 18 }} />
                    <Typography sx={{ color: "#FFFFFF", fontSize: "0.75rem", fontWeight: 750 }}>
                      District footprint
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#FFE082", fontSize: "0.68rem", fontWeight: 750 }}>27 mandals</Typography>
                </Stack>
                <Box sx={{ background: "rgba(255,255,255,0.14)", borderRadius: 99, height: 7, mt: 1.5, overflow: "hidden" }}>
                  <Box sx={{ background: "linear-gradient(90deg, #FFC107 0%, #FFD54F 50%, #FFE082 100%)", borderRadius: 99, height: "100%", width: "86%" }} />
                </Box>
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 0.9 }}>
                  {districtFootprint.slice(0, 2).map((item) => (
                    <Typography key={item.label} sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.61rem", fontWeight: 500 }}>
                      {item.value} {item.label}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* Slide Controls & Location Tag */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                mt: 1.5,
                px: 1.8,
                py: 0.9,
                background: "rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(8px)",
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.68rem", fontWeight: 650 }}>
                {slide.eyebrow} · {slide.location}
              </Typography>
              <Stack direction="row" spacing={0.8} alignItems="center">
                {heroSlides.map((s, idx) => (
                  <Box
                    key={s.id}
                    onClick={() => setActiveSlide(idx)}
                    sx={{
                      cursor: "pointer",
                      width: activeSlide === idx ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      bgcolor: activeSlide === idx ? "#FFC107" : "rgba(255,255,255,0.35)",
                      transition: "all 0.3s ease",
                      "&:hover": { bgcolor: "#FFE082" },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>


    </Box>
  );
}
