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
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

interface MediaArticle {
  id: string;
  category: "Press Release" | "News Clipping" | "Official Brief";
  title: string;
  teluguTitle: string;
  source: string;
  date: string;
  location: string;
  summary: string;
  readTime: string;
  image: string;
  badgeColor: string;
  badgeBg: string;
}

const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: "collectorate-district-coordination",
    category: "Official Brief",
    title: "District Administration Holds Coordination Review on Rural Schemes & Winter Readiness",
    teluguTitle: "గ్రామీణ పథకాల అమలు, ముందస్తు చర్యలపై జిల్లా కలెక్టరేట్ సమన్వయ సమావేశం",
    source: "District Information & Public Relations (I&PR)",
    date: "04 Nov 2026",
    location: "Collectorate Conference Hall, Vizianagaram",
    summary: "District Collector reviewed Spandana grievance SLA adherence, paddy procurement center arrangements, and DRDA women enterprise bank linkages.",
    readTime: "3 min read",
    image: "/images/vzm-collectorate-gathering-official.jpg",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
  },
  {
    id: "shg-credit-linkage-milestone",
    category: "News Clipping",
    title: "DRDA Crosses ₹40.97 Crore SHG Bank Linkage Milestone with 110.5% Target Achievement",
    teluguTitle: "మహిళా స్వయం సహాయక సంఘాల రుణ సంధానంలో ₹40.97 కోట్ల రికార్డు ప్రగతి",
    source: "Eenadu / Sakshi State Dailies",
    date: "28 Oct 2026",
    location: "DRDA Administrative Wing, Vizianagaram",
    summary: "Over 4,030 women micro-enterprises launched across 27 mandals under PMFME and NRLM with prompt repayment rate of 98.59%.",
    readTime: "4 min read",
    image: "/images/women-entrepreneurship-real.jpg",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
  },
  {
    id: "pydithalli-sirimanotsavam-coverage",
    category: "Press Release",
    title: "Lakhs of Devotees Congregate for Sri Pydithalli Ammavari Sirimanotsavam Festival",
    teluguTitle: "శ్రీ పైడితల్లి అమ్మవారి సిరిమానోత్సవం - భక్తుల జనసందోహం నడుమ వైభవోపేతం",
    source: "I&PR District Desk",
    date: "20 Oct 2026",
    location: "Vizianagaram Historic Fort Quarters",
    summary: "Smooth conduct of the celestial Sirimanotsavam procession with foolproof crowd management, drone surveillance, and 24x7 emergency medical desks.",
    readTime: "3 min read",
    image: "/images/vzm-temple-sirimanotsavam-official.jpg",
    badgeColor: "#1D4ED8",
    badgeBg: "#EFF6FF",
  },
  {
    id: "bobbili-veena-artisan-symposium",
    category: "Official Brief",
    title: "State Handcrafts Symposium Promotes GI-Tagged Bobbili Saraswati Veenas to Global Markets",
    teluguTitle: "బొబ్బిలి సరస్వతి వీణ కళాకారులకు అంతర్జాతీయ మార్కెట్ కల్పనపై సదస్సు",
    source: "Andhra Jyothy / The Hindu",
    date: "14 Oct 2026",
    location: "Bobbili Royal Cultural Complex",
    summary: "DRDA and Industries Cell introduce e-commerce onboarding and export packaging support for century-old artisan families crafting jackwood veenas.",
    readTime: "2 min read",
    image: "/images/cultural-heritage.jpg",
    badgeColor: "#C026D3",
    badgeBg: "#FAE8FF",
  },
  {
    id: "apssdc-mega-job-mela",
    category: "Press Release",
    title: "APSSDC & DRDA Mega Placement Drive: 850 Youth Selected Across Industrial Corridors",
    teluguTitle: "మెగా జాబ్ మేళాలో 850 మంది నిరుద్యోగ యువతకు ఉద్యోగ నియామక పత్రాలు అందజేత",
    source: "District Skill Development Agency",
    date: "05 Oct 2026",
    location: "MR College Campus Grounds, Vizianagaram",
    summary: "Top manufacturing, pharma, and IT recruiters participate in the district youth placement drive with spot offer letters handed over by district dignitaries.",
    readTime: "3 min read",
    image: "/images/maharaja-college.jpg",
    badgeColor: "#15803D",
    badgeBg: "#DCFCE7",
  },
  {
    id: "thotapalli-barrage-modernization",
    category: "News Clipping",
    title: "Water Resources Dept Initiates Thotapalli Left Main Canal Modernization Drive",
    teluguTitle: "తోటపల్లి ఎడమ ప్రధాన కాలువ ఆధునీకరణ పనులు ముమ్మరం - ఆయకట్టు స్థిరీకరణ",
    source: "Prajasakti / Andhra Prabha",
    date: "26 Sep 2026",
    location: "Garividi & Cheepurupalli Ayacut",
    summary: "Extensive desilting and lining works underway ensuring irrigation water reaches tail-end agricultural fields across 45 Gram Panchayats.",
    readTime: "2 min read",
    image: "/images/river-valley.jpg",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
  },
];

const MEDIA_CATEGORIES = ["All Coverage", "Official Brief", "Press Release", "News Clipping"];

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Coverage");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return MEDIA_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Coverage" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.teluguTitle.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.source.toLowerCase().includes(q) ||
        article.location.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
          {/* Breadcrumbs */}
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
              Media Coverage & Press Releases
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Live Filter */}
            <Grid size={{ xs: 12, md: 7 }}>
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
                OFFICIAL PRESS INFORMATION BUREAU & DISTRICT RELEASES
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
                Media & Press Coverage
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
                విజయనగరం జిల్లా పత్రికా ప్రకటనలు, మీడియా ముఖ్యాంశాలు మరియు అధికారిక సమాచార నివేదికలు
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
                Official press releases, newspaper coverage, photographic archives, and public communications published by the District Collectorate and Information & Public Relations (I&PR) Department, Vizianagaram.
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
                  placeholder="Search articles by headline, topic, or source (e.g. SHG, Pydithalli, Job Mela)..."
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
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, sm: 240, md: 260 },
                  borderRadius: { xs: "18px", sm: "22px", md: "24px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
                  border: "3px solid #FFFFFF",
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
                  src="/images/vzm-collectorate-gathering-official.jpg"
                  alt="Vizianagaram Collectorate Official Media Briefing Gathering"
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
                    <CampaignRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        I&PR District Media Cell
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        Authenticated Press Bulletins
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Official Press"
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

      {/* 2. STICKY CATEGORY FILTER BAR */}
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
            {MEDIA_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "All Coverage"
                  ? MEDIA_ARTICLES.length
                  : MEDIA_ARTICLES.filter((a) => a.category === cat).length;
              return (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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

      {/* 3. COMPACT 3-COLUMN CARD GRID */}
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
                PUBLIC INFORMATION ARCHIVE
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {selectedCategory === "All Coverage" ? "All Media Reports & Press Releases" : `${selectedCategory} Bulletins`}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({filteredArticles.length} {filteredArticles.length === 1 ? "Item" : "Items"})
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              Updated Regularly • vizianagaram.ap.gov.in
            </Typography>
          </Stack>

          {/* Compact 3-Column Grid */}
          <Grid container spacing={2}>
            {filteredArticles.map((article) => (
              <Grid key={article.id} size={{ xs: 12, sm: 6, lg: 4 }}>
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
                      "& .article-photo": { transform: "scale(1.04)" },
                    },
                  }}
                >
                  {/* Photo Thumbnail */}
                  <Box sx={{ position: "relative", height: 140, width: "100%", overflow: "hidden", bgcolor: "#FEF9C3" }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="article-photo"
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

                    {/* Floating Badges */}
                    <Box sx={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Chip
                        label={article.category}
                        size="small"
                        sx={{
                          bgcolor: article.badgeBg,
                          color: article.badgeColor,
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                          border: "1px solid rgba(0,0,0,0.06)",
                        }}
                      />
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.66rem", fontWeight: 700 }}>
                        {article.readTime}
                      </Typography>
                    </Box>

                    {/* Date on photo */}
                    <Box sx={{ position: "absolute", bottom: 8, left: 10, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <CalendarTodayRoundedIcon sx={{ fontSize: 13, color: "#F5B800" }} />
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.7rem", fontWeight: 750 }}>
                        {article.date} • {article.source}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                      <Typography sx={{ color: "#082B50", fontSize: "0.94rem", fontWeight: 850, lineHeight: 1.3, mb: 0.4 }}>
                        {article.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#B45309",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                          mb: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.teluguTitle}
                      </Typography>

                      <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1.5 }}>
                        {article.summary}
                      </Typography>

                      <Stack direction="row" alignItems="center" spacing={0.6} sx={{ mb: 1.5 }}>
                        <LocationOnRoundedIcon sx={{ fontSize: 13, color: "#D97706" }} />
                        <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 650 }}>
                          {article.location}
                        </Typography>
                      </Stack>
                    </Box>

                    <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                          component={Link}
                          href="https://vizianagaram.ap.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                          size="small"
                          endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 14 }} />}
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
                          Read Official Bulletin
                        </Button>

                        <Button
                          component={Link}
                          href="/announcements"
                          size="small"
                          sx={{
                            minWidth: 36,
                            width: 36,
                            height: 32,
                            p: 0,
                            borderRadius: "8px",
                            border: "1px solid #CBD5E1",
                            color: "#082B50",
                            "&:hover": { bgcolor: "#F1F5F9" },
                          }}
                        >
                          <CampaignRoundedIcon sx={{ fontSize: 16 }} />
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. FOOTER EXTENSION: I&PR PRESS FACILITATION DESK */}
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
                  ACCREDITATION & PRESS RELEASES
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  District Information & Public Relations (I&PR) Desk
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Accredited journalists, media correspondents, and broadcast teams can obtain authenticated press statements, official photographs, and event briefing passes directly from the I&PR District Office, Collectorate Complex.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href="/announcements"
                    variant="contained"
                    startIcon={<CampaignRoundedIcon sx={{ fontSize: 14 }} />}
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
                    View Gazettes & Announcements
                  </Button>

                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    startIcon={<NewspaperRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Contact Media Officer
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