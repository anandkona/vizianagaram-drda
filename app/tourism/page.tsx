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
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CastleRoundedIcon from "@mui/icons-material/CastleRounded";
import TempleHinduRoundedIcon from "@mui/icons-material/TempleHinduRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import NaturePeopleRoundedIcon from "@mui/icons-material/NaturePeopleRounded";
import { tourismPlaces, TourismPlace } from "@/src/data/district";

const TOURISM_CATEGORIES = [
  "All Places",
  "Heritage",
  "Pilgrimage",
  "Nature",
  "Culture",
  "Architecture",
  "Education",
];

const HIGHLIGHTS = [
  { icon: <CastleRoundedIcon sx={{ fontSize: 20, color: "#F5B800" }} />, label: "Historic Forts", count: "Vizianagaram & Bobbili", sub: "1713 A.D. & 1757 Battle Sites" },
  { icon: <TempleHinduRoundedIcon sx={{ fontSize: 20, color: "#F5B800" }} />, label: "Pilgrimage Sites", count: "Pydithalli Ammavari", sub: "Sirimanotsavam & Ramatheertham" },
  { icon: <WaterDropRoundedIcon sx={{ fontSize: 20, color: "#F5B800" }} />, label: "Lakes & Reservoirs", count: "Thatipudi & Gosthani", sub: "Eastern Ghats Freshwater Haven" },
  { icon: <AutoStoriesRoundedIcon sx={{ fontSize: 20, color: "#F5B800" }} />, label: "Music & Culture", count: "Living Arts & Colleges", sub: "MR Music College & Saraswati Veena" },
];

export default function TourismPage() {
  const [selectedTag, setSelectedTag] = useState("All Places");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = useMemo(() => {
    return tourismPlaces.filter((p) => {
      const matchesCategory =
        selectedTag === "All Places" || p.tag.toLowerCase() === selectedTag.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.area.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* 1. MASTER EDITORIAL HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 3, sm: 3.5, md: 4 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* Soft Gold Backdrop Blur Circle */}
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
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.75rem" }}>
              District Tourism & Heritage
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Live Filter */}
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
                DISCOVER THE CITY OF VICTORY • HERITAGE & CULTURE
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.75rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1,
                }}
              >
                Tourism & Heritage
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
                విజయనగరం చారిత్రక కోటలు, ఆధ్యాత్మిక పుణ్యక్షేత్రాలు మరియు కళా వైభవం
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2.2,
                }}
              >
                Explore the magnificent 1713 A.D. stone fortresses, Sri Pydithalli Ammavari spiritual epicenter, ancient 1000-year-old Ramatheertham hills, Thatipudi freshwater reservoir, and the century-old Music & Sanskrit institutions.
              </Typography>

              {/* Compact Search Bar */}
              <Paper
                elevation={0}
                sx={{
                  p: "4px 10px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 480,
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: 2.5,
                  boxShadow: "0 2px 6px rgba(8, 43, 80, 0.04)",
                  "&:focus-within": { borderColor: "#082B50" },
                }}
              >
                <SearchRoundedIcon sx={{ color: "#64748B", mr: 1, fontSize: 18 }} />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Search destinations (e.g. Fort, Pydithalli, Bobbili, Reservoir)..."
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
                  height: { xs: 260, sm: 310, md: 360 },
                  borderRadius: { xs: "24px", sm: "32px", md: "38px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
                  border: "4px solid #FFFFFF",
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
                  src="/images/vizianagaram-official-fort-2026.jpg"
                  alt="Vizianagaram Historic Fort Entrance Gate"
                  fill
                  className="hero-photo"
                  priority
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
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
                    <CastleRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        Vizianagaram Fort (1713 A.D.)
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Founder: Maharaja Vijayarama Raju-I
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Heritage Site"
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

      {/* 2. STATS OVERVIEW BAR */}
      <Box sx={{ bgcolor: "#082B50", color: "white", py: 1.5, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {HIGHLIGHTS.map((item, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    p: 1.25,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.25,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      bgcolor: "rgba(245, 184, 0, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ color: "#FFFFFF", fontSize: "0.82rem", fontWeight: 800, lineHeight: 1.2 }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ color: "#F5B800", fontSize: "0.7rem", fontWeight: 750, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.count}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.62rem" }}>
                      {item.sub}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. STICKY CATEGORY FILTER BAR */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          py: 1.25,
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
            alignItems="center"
            sx={{
              overflowX: "auto",
              pb: { xs: 0.5, md: 0 },
              "&::-webkit-scrollbar": { height: 3 },
              "&::-webkit-scrollbar-thumb": { bgcolor: "#CBD5E1", borderRadius: 2 },
            }}
          >
            {TOURISM_CATEGORIES.map((cat) => {
              const isSelected = selectedTag === cat;
              const count =
                cat === "All Places"
                  ? tourismPlaces.length
                  : tourismPlaces.filter((p) => p.tag.toLowerCase() === cat.toLowerCase()).length;
              return (
                <Button
                  key={cat}
                  onClick={() => setSelectedTag(cat)}
                  sx={{
                    px: 1.5,
                    py: 0.45,
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
                  {cat}
                  <Typography
                    component="span"
                    sx={{
                      ml: 0.6,
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      color: isSelected ? "#F5B800" : "#64748B",
                    }}
                  >
                    ({count})
                  </Typography>
                </Button>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* 4. COMPACT 3-COLUMN CARD GRID */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
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
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.3,
                }}
              >
                DESTINATIONS OF VIZIANAGARAM
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedTag === "All Places" ? "All Tourist Destinations & Landmarks" : `${selectedTag} Destinations`}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({filteredPlaces.length} {filteredPlaces.length === 1 ? "Site" : "Sites"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              District Tourism Information Officer Desk
            </Typography>
          </Stack>

          {/* Compact 3-Column Grid */}
          <Grid container spacing={2}>
            {filteredPlaces.map((place, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.22s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -6px rgba(8, 43, 80, 0.1)",
                      borderColor: "#082B50",
                      "& .place-photo": { transform: "scale(1.04)" },
                    },
                  }}
                >
                  {/* Photo Thumbnail */}
                  <Box sx={{ position: "relative", height: 140, width: "100%", overflow: "hidden", bgcolor: "#FEF9C3" }}>
                    <Image
                      src={place.image || "/images/vizianagaram-official-fort-2026.jpg"}
                      alt={place.name}
                      fill
                      className="place-photo"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(8,43,80,0.1) 0%, rgba(8,43,80,0.7) 100%)",
                      }}
                    />

                    {/* Tag Badge */}
                    <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                      <Chip
                        label={place.tag}
                        size="small"
                        sx={{
                          bgcolor: "#F5B800",
                          color: "#082B50",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                    </Box>

                    {/* Location on photo */}
                    <Box sx={{ position: "absolute", bottom: 8, left: 10, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <LocationOnRoundedIcon sx={{ fontSize: 13, color: "#F5B800" }} />
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.72rem", fontWeight: 750 }}>
                        {place.area}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontSize: "0.94rem", fontWeight: 850, lineHeight: 1.3, mb: 0.6 }}>
                        {place.name}
                      </Typography>

                      <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1.5 }}>
                        {place.description}
                      </Typography>
                    </Box>

                    <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                      <Button
                        component={Link}
                        href="/contact"
                        fullWidth
                        size="small"
                        endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.6,
                          borderRadius: "8px",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Visitor Guidelines & Contact
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. VISITOR GUIDELINES & TOURISM HELPDESK */}
      <Box sx={{ bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", py: { xs: 3.5, sm: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: "16px",
              p: { xs: 2.2, sm: 3, md: 3.5 },
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 0.4,
                  }}
                >
                  DISTRICT TOURISM PROMOTION & INFORMATION CELL
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Plan Your Heritage Tour to Vizianagaram
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Vizianagaram is conveniently accessible via Vizianagaram Junction (VZM) rail terminal and NH-16 highway corridors. For heritage walk permissions, temple guest house bookings, or guide inquiries, reach the District Tourism Cell.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component="a"
                    href="tel:08992222710"
                    variant="contained"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.75,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Call Tourism Officer: 08992-222710
                  </Button>

                  <Button
                    component={Link}
                    href="/mart"
                    variant="outlined"
                    startIcon={<AutoStoriesRoundedIcon sx={{ fontSize: 15 }} />}
                    sx={{
                      borderColor: "#CBD5E1",
                      color: "#082B50",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.75,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { borderColor: "#082B50", bgcolor: "#FFFFFF" },
                    }}
                  >
                    Explore Bobbili Veena Handcrafts
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