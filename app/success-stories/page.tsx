"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import { successStories } from "@/src/data/district";

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        color: "#1F1700",
        py: { xs: 2.2, md: 2.8 },
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)"
      }}>
        {/* Glow Spheres */}
        {/* Dotted pattern overlay */}
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1.2, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-amber-300">Home</Link>
            <Typography component="span" sx={{ fontSize: "0.75rem", color: "rgba(255, 193, 7, 0.6)" }}>/</Typography>
            <Typography sx={{ color: "#1F1700", fontSize: "0.8rem", fontWeight: 700 }}>Success Stories</Typography>
          </Stack>
          <Typography component="h1" variant="h3" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Vizianagaram Changemakers
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", maxWidth: "672px", fontSize: { xs: "0.85rem", sm: "0.95rem" }, lineHeight: 1.5, fontWeight: 450 }}>
            Real women. Real enterprises. Real transformation — the human face of rural development in Vizianagaram.
          </Typography>
        </Container>
      </Box>

      {/* Stories Section */}
      <Box component="section" sx={{ py: { xs: 2, md: 2.5 }, background: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography component="span" sx={{ display: "inline-block", background: "#FFF8E1", color: "#F57F17", fontSize: "0.75rem", fontWeight: 700, px: 1.5, py: 0.5, borderRadius: 5, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              {successStories.length} Stories
            </Typography>
            <Typography component="h2" variant="h4" sx={{ fontWeight: 800, color: "#1E293B", mb: 1, fontSize: { xs: "1.5rem", sm: "1.875rem" } }}>
              Stories of Transformation
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: "672px", mx: "auto", fontSize: { xs: "0.875rem", sm: "0.95rem" }, lineHeight: 1.5 }}>
              Every story is proof that when communities are supported, they transform their own lives
            </Typography>
            <Box sx={{ mt: 1.5, height: 3.5, width: 56, background: "#FBC02D", borderRadius: 2, mx: "auto" }} />
          </Box>

          <Grid container spacing={3}>
            {successStories.map((story) => (
              <Grid size={{ xs: 12, md: 6 }} key={story.id}>
                <SuccessStoryCard story={story} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Bottom Call to Action Section */}
      <Box component="section" sx={{ py: { xs: 3, md: 4 }, background: "#FFC107", color: "white", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography component="h2" variant="h5" sx={{ fontWeight: 800, mb: 1.5, color: "#1F1700" }}>
            Share Your Story
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.8)", fontSize: "0.875rem", mb: 3, fontWeight: 500 }}>
            Are you a beneficiary who transformed your life through DRDA or NRLM programs? We would love to feature your story.
          </Typography>
          <Link href="/feedback" passHref style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "#0F172A",
                color: "#FFFFFF !important",
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: 5,
                textTransform: "none",
                fontSize: "0.875rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:hover": {
                  background: "#000000",
                  boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
                }
              }}
            >
              Submit via Feedback
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
}
