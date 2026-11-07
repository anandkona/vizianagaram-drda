"use client";

import React, { useState } from "react";
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
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import NaturePeopleRoundedIcon from "@mui/icons-material/NaturePeopleRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

// Authentic Community & Eco-Tourism Initiatives in Vizianagaram District
const COMMUNITY_CIRCUITS = [
  {
    title: "Thatipudi Eco-Village Circuit",
    mandal: "Gantyada Mandal",
    tag: "Eco & Lake Tourism",
    image: "/images/pure-scenery-check.jpg",
    description: "Nestled along the Thatipudi Reservoir and Gosthani river basin. Village self-help federations host day trails, traditional boating, and bamboo craft workshops.",
    highlights: ["Reservoir Boating managed by DWCRA", "Gosthani River Nature Trail", "Freshwater Fishery SHG Stalls"],
    involvement: "3 SHG Federations • 42 Artisan Families",
  },
  {
    title: "Bobbili Handloom & Heritage Village",
    mandal: "Bobbili Mandal",
    tag: "Artisan Weaving Experience",
    image: "/images/cultural-heritage.jpg",
    description: "Live experience of authentic Bobbili veena crafting and fine cotton loom weaving. Visitors interact directly with master craft families and buy genuine handlooms.",
    highlights: ["Saraswati Veena Carving Live Demo", "Traditional Pit Loom Weaving", "Artisan Producer Market"],
    involvement: "5 Weaver Societies • 120+ Artisans",
  },
  {
    title: "Gosthani River Agro-Tourism Trail",
    mandal: "S.Kota & Jami Mandals",
    tag: "Agro & Farm Experience",
    image: "/images/river-valley.jpg",
    description: "Farmer Producer Organizations (FPOs) welcome visitors to cashew orchards, natural millet fields, and organic vegetable cultivation with traditional Andhra rustic dining.",
    highlights: ["Organic Cashew Processing Walk", "Millet Processing & Tasting", "Rural Farmstay & Cart Rides"],
    involvement: "2 Primary FPOs • 28 Farming Clusters",
  },
  {
    title: "Ramatheertham Sacred Hills Trail",
    mandal: "Nellimarla Mandal",
    tag: "Heritage & Trekking",
    image: "/images/ramatheertham-temple.jpg",
    description: "Centuries-old hillock temples and historical Jain rock-cut caves. Village youth cooperatives serve as registered guides for pilgrims and trekking enthusiasts.",
    highlights: ["1000-year-old Bodikonda Caves", "Panchamukha Anjaneya Temple", "Youth Eco-Guide Cooperative"],
    involvement: "1 Youth Eco-Guide Society • 25 Certified Guides",
  },
];

const COMMUNITY_BENEFITS = [
  {
    icon: <VolunteerActivismRoundedIcon sx={{ fontSize: 26, color: "#D97706" }} />,
    title: "Direct Rural Income",
    desc: "100% of tour guiding, culinary services, and handloom sales go directly to village self-help groups without intermediary cuts.",
  },
  {
    icon: <NaturePeopleRoundedIcon sx={{ fontSize: 26, color: "#16A34A" }} />,
    title: "Ecological Conservation",
    desc: "Community guidelines preserve reservoir watersheds, forest bio-diversity, and native flora in the Eastern Ghats foothill pockets.",
  },
  {
    icon: <GroupsRoundedIcon sx={{ fontSize: 26, color: "#0284C7" }} />,
    title: "Cultural Preservation",
    desc: "Protects hereditary arts including Bobbili veena woodwork, brass bell metal crafts, and Sirimanotsavam folklore traditions.",
  },
];

export default function CommunityTourismPage() {
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
        {/* Soft Gold Backdrop Blur Accent */}
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
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Subtitle */}
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
                RURAL LIVELIHOODS & COMMUNITY TOURISM INITIATIVES
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
                Community Tourism
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
                గ్రామీణ మహిళా సంఘాలు మరియు రైతు సమూహాల నిర్వహణలో పర్యాటక అనుభవాలు
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
                Experience the authentic soul of Vizianagaram through community-led rural circuits. Managed directly by DWCRA self-help groups, Bobbili weavers, and farmer producer federations, our eco-trails foster direct livelihood generation and cultural conservation.
              </Typography>

              {/* Action Badges */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                <Chip
                  icon={<GroupsRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
                  label="100% Community Operated"
                  sx={{
                    bgcolor: "#FFF9E6",
                    color: "#082B50",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                    border: "1px solid #F5B800",
                    py: 1.8,
                    px: 0.5,
                  }}
                />
                <Chip
                  icon={<NaturePeopleRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
                  label="4 Dedicated Eco & Artisan Circuits"
                  sx={{
                    bgcolor: "#F1F5F9",
                    color: "#334155",
                    fontWeight: 750,
                    fontSize: "0.78rem",
                    py: 1.8,
                    px: 0.5,
                  }}
                />
              </Stack>
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
                }}
              >
                <Image
                  src="/images/pure-scenery-check.jpg"
                  alt="Thatipudi Eco-Village and Reservoir Circuit"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />

                {/* Glassmorphic Official Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: { xs: 16, sm: "auto" },
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: "16px",
                    px: 2,
                    py: 1.2,
                    boxShadow: "0 8px 24px rgba(8, 43, 80, 0.2)",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "10px",
                        bgcolor: "#F5B800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#082B50",
                        flexShrink: 0,
                      }}
                    >
                      <ForestRoundedIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "0.85rem", lineHeight: 1.2 }}>
                        Thatipudi Eco-Village
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.72rem", fontWeight: 600 }}>
                        Gantyada Mandal • SHG Community Tourism Trail
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. THREE KEY COMMUNITY PILLARS */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 }, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3}>
            {COMMUNITY_BENEFITS.map((b) => (
              <Grid key={b.title} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: "18px",
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      bgcolor: "#FFFFFF",
                      boxShadow: "0 10px 24px rgba(8, 43, 80, 0.06)",
                    },
                  }}
                >
                  <Box sx={{ mb: 1.5 }}>{b.icon}</Box>
                  <Typography sx={{ color: "#082B50", fontWeight: 850, fontSize: "1.05rem", mb: 0.8 }}>
                    {b.title}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.6 }}>
                    {b.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. FOUR COMMUNITY TOURISM CIRCUITS */}
      <Box sx={{ py: { xs: 3.5, sm: 4, md: 5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: "#D97706",
                fontSize: "0.74rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 0.5,
              }}
            >
              EXPLORE ACTIVE COMMUNITY TRAILS
            </Typography>
            <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: { xs: "1.4rem", sm: "1.8rem" } }}>
              Authentic Rural Experiences Across 4 Mandals
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {COMMUNITY_CIRCUITS.map((circuit) => (
              <Grid key={circuit.title} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 16px rgba(8, 43, 80, 0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 30px rgba(8, 43, 80, 0.1)",
                      borderColor: "#CBD5E1",
                    },
                  }}
                >
                  {/* Photo Frame */}
                  <Box sx={{ position: "relative", width: "100%", height: 220 }}>
                    <Image
                      src={circuit.image}
                      alt={circuit.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <Chip
                      label={circuit.tag}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        bgcolor: "rgba(8, 43, 80, 0.88)",
                        color: "#FFFFFF",
                        fontWeight: 750,
                        fontSize: "0.7rem",
                        backdropFilter: "blur(6px)",
                        borderRadius: "6px",
                      }}
                    />
                    <Chip
                      icon={<LocationOnRoundedIcon sx={{ fontSize: "14px !important", color: "#082B50 !important" }} />}
                      label={circuit.mandal}
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        bgcolor: "#F5B800",
                        color: "#082B50",
                        fontWeight: 800,
                        fontSize: "0.7rem",
                        borderRadius: "6px",
                      }}
                    />
                  </Box>

                  {/* Body Content */}
                  <Box sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
                    <Typography sx={{ color: "#082B50", fontWeight: 900, fontSize: "1.2rem", mb: 1 }}>
                      {circuit.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.84rem", lineHeight: 1.55, mb: 2 }}>
                      {circuit.description}
                    </Typography>

                    {/* Highlights */}
                    <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.04em", mb: 1 }}>
                      Key Activities & Highlights:
                    </Typography>
                    <Stack spacing={0.8} sx={{ mb: 2.5 }}>
                      {circuit.highlights.map((h) => (
                        <Box key={h} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#16A34A" }} />
                          <Typography sx={{ fontSize: "0.82rem", color: "#334155", fontWeight: 650 }}>
                            {h}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* Community Involvement Tag */}
                    <Box
                      sx={{
                        mt: "auto",
                        p: 1.5,
                        borderRadius: "10px",
                        bgcolor: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>
                          Community Beneficiaries
                        </Typography>
                        <Typography sx={{ fontSize: "0.82rem", color: "#082B50", fontWeight: 800 }}>
                          {circuit.involvement}
                        </Typography>
                      </Box>
                      <Button
                        component={Link}
                        href="/contact"
                        size="small"
                        sx={{
                          bgcolor: "#F5B800",
                          color: "#082B50 !important",
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          borderRadius: "6px",
                          textTransform: "none",
                          px: 1.5,
                          "&:hover": { bgcolor: "#E0A800" },
                        }}
                      >
                        Plan Visit
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. FACILITATION & BOOKING CTA */}
      <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: "#082B50", color: "#FFFFFF" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography sx={{ color: "#F5B800", fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", mb: 1 }}>
            DIRECT COMMUNITY FACILITATION
          </Typography>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: "1.6rem", md: "2.1rem" }, mb: 1.5 }}>
            Interested in a Custom Rural or Artisan Trail?
          </Typography>
          <Typography sx={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 600, mx: "auto", mb: 3.5 }}>
            Our DRDA Livelihood Cell connects educational groups, cultural researchers, and eco-tourists directly with registered DWCRA village hosts and artisan societies.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon sx={{ color: "#082B50" }} />}
              sx={{
                bgcolor: "#F5B800",
                color: "#082B50 !important",
                fontWeight: 850,
                fontSize: "0.88rem",
                px: 3.5,
                py: 1.2,
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": { bgcolor: "#E0A800" },
              }}
            >
              Contact Community Tourism Cell
            </Button>
            <Button
              component={Link}
              href="/tourism"
              variant="outlined"
              sx={{
                borderColor: "rgba(255, 255, 255, 0.4)",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.88rem",
                px: 3,
                py: 1.2,
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)", borderColor: "#FFFFFF" },
              }}
            >
              Explore General Tourism Attractions
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

