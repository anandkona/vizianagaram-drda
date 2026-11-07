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
  Breadcrumbs,
  Chip,
  Avatar,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { successStories, SuccessStory } from "@/src/data/district";

const STORY_METRICS = [
  { val: "32,840", label: "Empowered SHGs", sub: "District Collectives", color: "#082B50" },
  { val: "4,030+", label: "Micro-Enterprises", sub: "Established & Thriving", color: "#D97706" },
  { val: "₹40.97 Cr", label: "Credit Linkage", sub: "Zero-Interest Subsidized", color: "#15803D" },
  { val: "98.59%", label: "Prompt Repayment", sub: "Setting State Standards", color: "#7C3AED" },
];

export default function SuccessStoriesPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Cashew", "Millets", "Nutrition", "Crafts", "FPO"];

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
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Summary */}
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
                GRASSROOTS ECONOMIC TRANSFORMATION
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
                Vizianagaram Changemakers
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
                గ్రామీణ విజయగాథలు - స్వయం సహాయక సంఘాల మహిళల ఆర్థిక స్వావలంబన
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
                Real women. Real enterprises. Real transformation. Discover how micro-credit, cashew processing units, millet collectives, and organic horticulture are lifting thousands of households out of rural poverty into dignified financial independence.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/mart"
                  variant="contained"
                  startIcon={<StorefrontRoundedIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    bgcolor: "#082B50",
                    color: "#FFFFFF !important",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    px: 2.5,
                    py: 1,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#06203D" },
                  }}
                >
                  Shop Products on District Mart
                </Button>

                <Button
                  component={Link}
                  href="/feedback"
                  variant="outlined"
                  startIcon={<StarRoundedIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    borderColor: "#CBD5E1",
                    color: "#082B50",
                    fontSize: "0.78rem",
                    fontWeight: 750,
                    px: 2.5,
                    py: 1,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { borderColor: "#082B50", bgcolor: "#FFFFFF" },
                  }}
                >
                  Share Your Story
                </Button>
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
                  src="/images/drda-women-shg-mockup.jpg"
                  alt="Vizianagaram Successful SHG Women Collective"
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
                    bottom: 16,
                    left: 16,
                    bgcolor: "rgba(8, 43, 80, 0.90)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "100px",
                    px: 2,
                    py: 0.7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <VerifiedRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        4,030+ Thriving Enterprises
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        From Wage Laborers to Business Owners
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Real Impact"
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

      {/* 2. STATS STRIP */}
      <Box sx={{ bgcolor: "#F8FAFC", py: 2, borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {STORY_METRICS.map((stat, idx) => (
              <Grid key={idx} size={{ xs: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    borderRadius: "12px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ color: stat.color, fontSize: "1.1rem", fontWeight: 900, lineHeight: 1.2 }}>
                    {stat.val}
                  </Typography>
                  <Typography sx={{ color: "#082B50", fontSize: "0.74rem", fontWeight: 750, mt: 0.3 }}>
                    {stat.label}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.64rem", fontWeight: 600 }}>
                    {stat.sub}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. STORIES DIRECTORY (COMPACT 3-COLUMN CARDS) */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack sx={{ mb: 2.2 }}>
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
              AUTHENTIC CASE STUDIES
            </Typography>
            <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
              Stories of Transformation & Enterprise
              <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                ({successStories.length} Featured Changemakers)
              </Typography>
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {successStories.map((story) => (
              <Grid key={story.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.22s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -6px rgba(8, 43, 80, 0.1)",
                      borderColor: "#082B50",
                    },
                  }}
                >
                  {/* Top Colored Accent Stripe */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3.5px",
                      bgcolor: "#D97706",
                    }}
                  />

                  <Box sx={{ pt: 0.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.2 }}>
                      <Chip
                        label={story.category}
                        size="small"
                        sx={{
                          bgcolor: "#FEF3C7",
                          color: "#92400E",
                          fontWeight: 800,
                          fontSize: "0.62rem",
                          height: 20,
                        }}
                      />
                      <Typography sx={{ color: "#64748B", fontSize: "0.7rem", fontWeight: 700 }}>
                        {story.location}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1 }}>
                      <Avatar
                        sx={{
                          width: 38,
                          height: 38,
                          bgcolor: "#082B50",
                          color: "#F5B800",
                          fontWeight: 850,
                          fontSize: "0.9rem",
                          borderRadius: "8px",
                        }}
                      >
                        {story.initial}
                      </Avatar>
                      <Box>
                        <Typography sx={{ color: "#082B50", fontSize: "0.94rem", fontWeight: 850, lineHeight: 1.25 }}>
                          {story.person}
                        </Typography>
                        <Typography sx={{ color: "#D97706", fontSize: "0.7rem", fontWeight: 750 }}>
                          {story.program || "DRDA Livelihood Scheme"}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1.5 }}>
                      &ldquo;{story.story}&rdquo;
                    </Typography>

                    {/* Financial Progress Grid */}
                    {(story.beforeIncome || story.afterIncome) && (
                      <Grid container spacing={1} sx={{ mb: 1.5 }}>
                        <Grid size={{ xs: 6 }}>
                          <Box sx={{ p: 0.8, bgcolor: "#F8FAFC", borderRadius: "6px", border: "1px solid #E2E8F0" }}>
                            <Typography sx={{ color: "#64748B", fontSize: "0.6rem", fontWeight: 700 }}>
                              Before Income:
                            </Typography>
                            <Typography sx={{ color: "#64748B", fontSize: "0.76rem", fontWeight: 800 }}>
                              {story.beforeIncome}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <Box sx={{ p: 0.8, bgcolor: "#DCFCE7", borderRadius: "6px", border: "1px solid #BBF7D0" }}>
                            <Typography sx={{ color: "#15803D", fontSize: "0.6rem", fontWeight: 700 }}>
                              Current Income:
                            </Typography>
                            <Typography sx={{ color: "#15803D", fontSize: "0.76rem", fontWeight: 850 }}>
                              {story.afterIncome}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    )}
                  </Box>

                  <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography sx={{ color: "#082B50", fontSize: "0.7rem", fontWeight: 800 }}>
                        ✓ {story.result}
                      </Typography>
                      {story.loan && (
                        <Typography sx={{ color: "#D97706", fontSize: "0.68rem", fontWeight: 750 }}>
                          {story.loan}
                        </Typography>
                      )}
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. BOTTOM ACTION CTA */}
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
                  HAVE YOU BENEFITED FROM DRDA INITIATIVES?
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Share Your Journey With Vizianagaram District
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 680 }}>
                  Are you an SHG member, tribal entrepreneur, or youth artisan who transformed your livelihood? Submit your story to inspire thousands of families across our 27 Mandals.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href="/feedback"
                    variant="contained"
                    startIcon={<StarRoundedIcon sx={{ fontSize: 14 }} />}
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
                    Submit Beneficiary Story
                  </Button>

                  <Button
                    component={Link}
                    href="/mart"
                    variant="outlined"
                    startIcon={<StorefrontRoundedIcon sx={{ fontSize: 15 }} />}
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
                    Browse District Mart
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