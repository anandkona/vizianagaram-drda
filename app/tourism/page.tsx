"use client";

import { useState } from "react";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import NatureIcon from "@mui/icons-material/Nature";
import GroupsIcon from "@mui/icons-material/Groups";
import ShieldIcon from "@mui/icons-material/Shield";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CastleIcon from "@mui/icons-material/Fort";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import TourismCard from "@/components/TourismCard";
import { tourismPlaces } from "@/src/data/district";
import PageIntro from "@/components/PageIntro";

const travelNotes = [
  {
    title: "Travel respectfully",
    text: "Follow local guidance, protect heritage monuments, and seek permission before photographing people or temple rituals.",
    icon: ShieldIcon,
    badge: "Heritage"
  },
  {
    title: "Support local livelihoods",
    text: "Choose local guides, artisan craft workshops, regional cuisine, and local transport so visits directly empower communities.",
    icon: GroupsIcon,
    badge: "Community"
  },
  {
    title: "Leave places pristine",
    text: "Carry back all waste, preserve water reservoirs, and keep scenic forest routes quiet, sustainable, and low-impact.",
    icon: NatureIcon,
    badge: "Eco-tourism"
  },
];

const highlights = [
  { icon: CastleIcon, label: "Historic Forts", count: "3 Sites", desc: "Vizianagaram & Bobbili" },
  { icon: TempleHinduIcon, label: "Pilgrimage Sites", count: "Sacred Shrines", desc: "Pydithalli Ammavari" },
  { icon: WaterDropIcon, label: "Lakes & Reservoirs", count: "Nature Havens", desc: "Thatipudi & Gosthani" },
  { icon: AutoStoriesIcon, label: "Music & Sanskrit", count: "Living Arts", desc: "Centuries of Tradition" },
];

const categories = ["All Places", "Heritage", "Landmark", "Culture", "Architecture", "Nature", "Pilgrimage", "Education"];

export default function TourismPage() {
  const [selectedTag, setSelectedTag] = useState("All Places");

  const filteredPlaces = selectedTag === "All Places"
    ? tourismPlaces
    : tourismPlaces.filter((p) => p.tag.toLowerCase() === selectedTag.toLowerCase());

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* 1. District Hero Section */}
      <PageIntro
        eyebrow="Discover Vizianagaram"
        title="Heritage, Sacred Traditions & Natural Wonder"
        description="Explore ancient forts of Vizianagaram and Bobbili, revered temples, centuries-old Sanskrit and Carnatic music colleges, and picturesque reservoir landscapes."
        icon="location"
        crumb="Tourism & Culture"
      />

      {/* 2. District Highlights Overview Bar - Reduced Height & Width */}
      <Box sx={{ bgcolor: "#0F172A", color: "white", py: { xs: 1, md: 1.25 }, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 1.5, sm: 2.5, md: 3 }} justifyContent="center">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box
                    sx={{
                      bgcolor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 1.5,
                      px: 0.75,
                      py: 0.6,
                      textAlign: "center",
                      maxWidth: { xs: "100%", sm: 140 },
                      mx: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        bgcolor: "rgba(255,255,255,0.07)",
                        borderColor: "rgba(255,193,7,0.5)",
                        boxShadow: "0 4px 10px -2px rgba(0,0,0,0.3)",
                        "& .highlight-icon-box": {
                          bgcolor: "#FFC107",
                          color: "#1F1700",
                          transform: "scale(1.06)",
                        },
                        "&::after": {
                          opacity: 1,
                        }
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #FFC107, transparent)",
                        opacity: 0,
                        transition: "opacity 0.2s ease",
                      }
                    }}
                  >
                    <Box
                      className="highlight-icon-box"
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: 1,
                        bgcolor: "rgba(255,193,7,0.15)",
                        color: "#FFC107",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 0.25,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Icon sx={{ fontSize: 12 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.72rem", sm: "0.76rem" },
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: "#FFC107",
                        letterSpacing: "-0.01em",
                        mb: 0.1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%"
                      }}
                    >
                      {item.count}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.55rem",
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        lineHeight: 1.1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%"
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.5rem",
                        color: "rgba(255,255,255,0.5)",
                        mt: 0.05,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%"
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 3. Hero Story & District Narrative Section */}
      <Box component="section" sx={{ py: { xs: 2.25, md: 2.75 }, bgcolor: "#1F1700", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 2.5, lg: 3 }} alignItems="center">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#B45309", fontSize: "0.72rem", fontWeight: 800, px: 1.5, py: 0.35, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1.25 }}>
                A District of Many Layers
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 900, color: "#0F172A", fontSize: { xs: "1.5rem", sm: "1.85rem", md: "2.1rem" }, letterSpacing: "-0.02em", mb: 1.5, lineHeight: 1.2 }}>
                Where Heritage Walks, Living Arts & Nature Come Alive
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, mb: 2, fontWeight: 500 }}>
                From royal palaces and clock towers in Vizianagaram town to the battlefield lore of Bobbili and the peaceful scenic waters of Thatipudi Reservoir, every trail connects the district&apos;s proud legacy with contemporary rural life.
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2.5 }}>
                {["Fort Architecture", "Carnatic Music", "Sanskrit Academies", "Reservoir Walks", "Sacred Shrines", "Artisans & Crafts"].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      color: "#1E293B",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      height: 24
                    }}
                  />
                ))}
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
                <Button
                  component={Link}
                  href="#destinations"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#1E293B",
                    color: "#FFFFFF !important",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    px: 2.5,
                    py: 0.85,
                    borderRadius: 8,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#0F172A" }
                  }}
                >
                  Explore Community Tourism
                </Button>
                <Button
                  component={Link}
                  href="/directory?tab=departments"
                  variant="outlined"
                  sx={{
                    borderColor: "#CBD5E1",
                    color: "#1E293B",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    px: 2,
                    py: 0.85,
                    borderRadius: 8,
                    textTransform: "none",
                    "&:hover": { borderColor: "#94A3B8", bgcolor: "#F8FAFC" }
                  }}
                >
                  Contact Tourism Officer
                </Button>
              </Stack>
            </Grid>

            {/* Feature Card in Hero Section - Ultra Compact */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  background: "linear-gradient(135deg, #1E293B 0%, #2B2100 60%, #B45309 100%)",
                  borderRadius: 3,
                  color: "#FFFFFF",
                  p: { xs: 2, sm: 2.25 },
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 20px -4px rgba(0,0,0,0.15)"
                }}
              >
                <Box sx={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", height: 180, position: "absolute", right: -40, top: -60, width: 180, pointerEvents: "none" }} />
                <Box sx={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "50%", bottom: -80, height: 180, position: "absolute", right: 30, width: 180, pointerEvents: "none" }} />

                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                  <Box
                    sx={{
                      alignItems: "center",
                      background: "#FFC107",
                      borderRadius: 1.75,
                      color: "#1F1700",
                      display: "flex",
                      height: 36,
                      justifyContent: "center",
                      width: 36,
                      flexShrink: 0
                    }}
                  >
                    <TravelExploreIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#FFC107", fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Heritage & Culture Hub
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#1F1700", fontSize: { xs: "1.1rem", sm: "1.25rem" }, fontWeight: 800, lineHeight: 1.2 }}>
                      Plan Your Exploration
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem", lineHeight: 1.45, mb: 1.5 }}>
                  10 verified destinations including fortified citadel complexes, classical arts, and natural reservoirs.
                </Typography>

                <Stack spacing={0.75}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, bgcolor: "rgba(255,255,255,0.08)", px: 1, py: 0.65, borderRadius: 1.25 }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#FFC107" }} />
                    <Typography sx={{ fontSize: "0.74rem", color: "#FFFFFF", fontWeight: 600 }}>
                      Vizianagaram & Bobbili Forts
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, bgcolor: "rgba(255,255,255,0.08)", px: 1, py: 0.65, borderRadius: 1.25 }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#FFC107" }} />
                    <Typography sx={{ fontSize: "0.74rem", color: "#FFFFFF", fontWeight: 600 }}>
                      Sri Pydithalli Ammavari Temple
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, bgcolor: "rgba(255,255,255,0.08)", px: 1, py: 0.65, borderRadius: 1.25 }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#FFC107" }} />
                    <Typography sx={{ fontSize: "0.74rem", color: "#FFFFFF", fontWeight: 600 }}>
                      Thatipudi Reservoir & Forest Trails
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Destinations / Living Heritage Map Grid */}
      <Box component="section" sx={{ py: { xs: 2.25, md: 2.75 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.68rem", fontWeight: 800, px: 1.25, py: 0.25, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5 }}>
              Places To Know
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0F172A", mb: 0.5, fontSize: { xs: "1.35rem", md: "1.65rem" }, letterSpacing: "-0.02em" }}>
              A Living Heritage Map
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 640, mx: "auto", fontSize: "0.82rem", lineHeight: 1.45 }}>
              Key cultural, historic, and natural destinations across Vizianagaram district. Check local timings before visiting.
            </Typography>
          </Box>

          {/* Filter Pills */}
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 0.6, mb: 2 }}>
            {categories.map((cat) => {
              const active = selectedTag === cat;
              return (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setSelectedTag(cat)}
                  size="small"
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.74rem",
                    cursor: "pointer",
                    bgcolor: active ? "#F5B800" : "#FFFCF4",
                    color: active ? "#082B50 !important" : "#B45309",
                    border: `1.5px solid ${active ? "#F5B800" : "#FDE68A"}`,
                    boxShadow: active ? "0 2px 8px rgba(245, 184, 0, 0.35)" : "none",
                    transition: "all 0.15s ease",
                    height: 28,
                    px: 0.5,
                    "&:hover": {
                      bgcolor: active ? "#D49D00" : "#FEF3C7",
                      borderColor: "#F5B800"
                    }
                  }}
                />
              );
            })}
          </Box>

          {/* Compact Cards Grid */}
          <Grid container spacing={1.5} alignItems="stretch">
            {filteredPlaces.map((place) => (
              <Grid key={place.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <TourismCard place={place} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. Responsible Travel Section */}
      <Box component="section" sx={{ py: { xs: 2.25, md: 2.75 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 2.5 }}>
            <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#B45309", fontSize: "0.68rem", fontWeight: 800, px: 1.25, py: 0.25, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.75 }}>
              Responsible Travel
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0F172A", mb: 0.75, fontSize: { xs: "1.4rem", md: "1.75rem" }, letterSpacing: "-0.02em" }}>
              Keep Vizianagaram Beautiful & Welcoming
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 640, mx: "auto", fontSize: "0.82rem" }}>
              Mindful choices that respect sacred traditions, local communities, and pristine natural ecology.
            </Typography>
          </Box>

          <Grid container spacing={1.5}>
            {travelNotes.map((note) => {
              const Icon = note.icon;
              return (
                <Grid key={note.title} size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 2.5,
                      height: "100%",
                      transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                      "&:hover": {
                        borderColor: "#FFC107",
                        boxShadow: "0 6px 16px -4px rgba(0,0,0,0.06)",
                        transform: "translateY(-2px)",
                      }
                    }}
                  >
                    <CardContent sx={{ p: 1.75, display: "flex", flexDirection: "column", height: "100%", "&:last-child": { pb: 1.75 } }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                        <Box
                          sx={{
                            alignItems: "center",
                            background: "#FFF8E1",
                            borderRadius: 1.75,
                            color: "#D97706",
                            display: "flex",
                            height: 34,
                            justifyContent: "center",
                            width: 34,
                            border: "1px solid #FDE68A"
                          }}
                        >
                          <Icon sx={{ fontSize: 18 }} />
                        </Box>
                        <Chip
                          label={note.badge}
                          size="small"
                          sx={{
                            bgcolor: "#FFFFFF",
                            border: "1px solid #CBD5E1",
                            color: "#475569",
                            fontSize: "0.64rem",
                            fontWeight: 700,
                            height: 20
                          }}
                        />
                      </Box>
                      <Typography component="h3" sx={{ color: "#0F172A", fontSize: "0.9rem", fontWeight: 800, mb: 0.5 }}>
                        {note.title}
                      </Typography>
                      <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, flexGrow: 1 }}>
                        {note.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Quick Notice Banner */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={1.5}
            sx={{
              background: "#FFFDE7",
              border: "1px solid #FFE082",
              borderRadius: 2,
              mt: 1.75,
              p: 1.5
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <NatureIcon sx={{ color: "#B45309", fontSize: 18 }} />
              <Typography sx={{ color: "#78350F", fontSize: "0.8rem", fontWeight: 600 }}>
                Plan locally, travel lightly, support local artisans, and preserve Vizianagaram&apos;s living heritage.
              </Typography>
            </Stack>
            <Button
              component={Link}
              href="/directory?tab=departments"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
              sx={{
                color: "#1F1700",
                fontWeight: 700,
                fontSize: "0.76rem",
                textTransform: "none",
                flexShrink: 0,
                py: 0.5,
                "&:hover": { bgcolor: "rgba(0,0,0,0.05)" }
              }}
            >
              Contact Tourism Office
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* 6. Directory Connect CTA Section - Perfectly Center-Aligned Card (Reduced Height) */}
      <Box sx={{ background: "#FFC107", color: "#1F1700", py: { xs: 1.75, md: 2.25 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            {/* Centered Top Icon */}
            <Box
              sx={{
                bgcolor: "#1F1700",
                color: "#FFC107",
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
                boxShadow: "0 2px 6px rgba(0,0,0,0.12)"
              }}
            >
              <DirectionsWalkIcon sx={{ fontSize: 20 }} />
            </Box>

            {/* Centered Heading */}
            <Typography
              variant="h2"
              sx={{
                color: "#1F1700",
                fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.4rem" },
                fontWeight: 900,
                mb: 0.5,
                letterSpacing: "-0.01em",
                lineHeight: 1.25
              }}
            >
              Need Assistance or Local Tourism Guidance?
            </Typography>

            {/* Centered Subtitle */}
            <Typography
              sx={{
                color: "rgba(31,23,0,0.85)",
                fontSize: { xs: "0.8rem", sm: "0.85rem" },
                maxWidth: 560,
                mb: 1.5,
                lineHeight: 1.45,
                fontWeight: 500
              }}
            >
              Contact the District Tourism &amp; Culture Officer, DRDA Vizianagaram for travel advisories, heritage walks, and community guides.
            </Typography>

            {/* Centered Action Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              alignItems="center"
              justifyContent="center"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                component={Link}
                href="tel:08992222710"
                startIcon={<PhoneIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "rgba(0,0,0,0.08)",
                  color: "#1F1700",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  px: 2,
                  py: 0.65,
                  borderRadius: 8,
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { bgcolor: "rgba(0,0,0,0.15)" }
                }}
              >
                08992-222710
              </Button>
              <Button
                component={Link}
                href="/directory"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#1F1700",
                  color: "#FFFFFF !important",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  px: 2.5,
                  py: 0.65,
                  borderRadius: 8,
                  textTransform: "none",
                  boxShadow: "none",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { bgcolor: "#332600", boxShadow: "0 4px 10px rgba(0,0,0,0.15)" }
                }}
              >
                Open District Directory
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      {/* Quick Navigation Pills (Matching Who's Who) */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 3.5 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Org Structure", href: "/about/structure" },
              { label: "Contact Directory", href: "/directory" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "Citizen Services", href: "/services" },
            ].map((link, idx) => (
              <Button
                key={idx}
                component={Link}
                href={link.href}
                endIcon={<ArrowForwardIcon className="nav-arrow" sx={{ fontSize: 13, transition: "transform 0.2s ease" }} />}
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
    </Box>
  );
}