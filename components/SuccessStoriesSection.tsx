"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { featuredSuccessStories } from "@/src/data/home";

export default function SuccessStoriesSection() {
  return (
    <Box component="section" id="success-stories" sx={{ background: "#20252D", color: "#FFFFFF", overflow: "hidden", position: "relative", py: { xs: 2, md: 2.5 } }}>
      <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.06, position: "absolute" }} />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "flex-end" }} justifyContent="space-between" spacing={2.5} sx={{ mb: { xs: 3.2, md: 4.5 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#FFD54F" }}>
              <AutoAwesomeIcon sx={{ fontSize: 18 }} />
              <Typography component="p" sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
                Manyam changemakers · Vizianagaram stories
              </Typography>
            </Stack>
            <Typography component="h2" sx={{ color: "#FFFFFF", fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" }, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1.1, mt: 0.9 }}>
              Real people. Practical progress.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: 1.7, mt: 1.2 }}>
              Local initiative, practical support and visible outcomes from across the district. These are illustrative stories presented to help residents discover possible pathways.
            </Typography>
          </Box>
          <Button component={Link} endIcon={<ArrowForwardIcon />} href="/success-stories" sx={{ borderColor: "rgba(255,255,255,0.45)", color: "#FFFFFF", flexShrink: 0, fontSize: "0.8rem", fontWeight: 850, "&:hover": { background: "rgba(255,255,255,0.1)", borderColor: "#FFFFFF" } }} variant="outlined">
            View all stories
          </Button>
        </Stack>

        <Box sx={{ display: "grid", gap: { xs: 1.5, sm: 2 }, gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" } }}>
          {featuredSuccessStories.map((story) => (
            <Card
              key={story.id}
              component={Link}
              href={`/success-stories#${story.id}`}
              sx={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.045))",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 1,
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                minHeight: 390,
                overflow: "hidden",
                padding: { xs: 2.2, sm: 2.5 },
                textDecoration: "none",
                transition: "transform 220ms ease, border-color 220ms ease, background 220ms ease",
                "&:hover": { background: "linear-gradient(145deg, rgba(249,168,37,0.2), rgba(255,255,255,0.06))", borderColor: "rgba(249,168,37,0.75)", transform: "translateY(-5px)" },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: "50%", color: "#000000", display: "flex", fontSize: "1.1rem", fontWeight: 850, height: 48, justifyContent: "center", width: 48 }}>{story.initial}</Box>
                <Typography sx={{ color: "#FFD54F", fontSize: "0.65rem", fontWeight: 800, textAlign: "right" }}>{story.category}</Typography>
              </Stack>
              <Typography component="h3" sx={{ color: "#FFFFFF", fontSize: "1.12rem", fontWeight: 850, lineHeight: 1.25, mt: 2.2 }}>{story.person}</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "rgba(255,255,255,0.55)", mt: 0.6 }}>
                <LocationOnIcon sx={{ color: "#F9A825", fontSize: 15 }} />
                <Typography sx={{ fontSize: "0.7rem" }}>{story.location}</Typography>
              </Stack>
              <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.82rem", lineHeight: 1.65, mt: 1.6 }}>{story.story}</Typography>
              <Box sx={{ background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 1, mt: "auto", p: 1.5 }}>
                <Typography sx={{ color: "#FFD54F", fontSize: "0.62rem", fontWeight: 850, letterSpacing: "0.1em", textTransform: "uppercase" }}>{story.resultLabel}</Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "0.86rem", fontWeight: 750, lineHeight: 1.4, mt: 0.45 }}>{story.result}</Typography>
              </Box>
              <Stack direction="row" flexWrap="wrap" gap={0.6} sx={{ mt: 1.4 }}>
                {story.tags.map((tag) => <Typography key={tag} sx={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, color: "rgba(255,255,255,0.72)", fontSize: "0.62rem", fontWeight: 750, px: 1, py: 0.45 }}>{tag}</Typography>)}
              </Stack>
              <Stack direction="row" alignItems="center" spacing={0.6} sx={{ color: "#FFD54F", mt: 1.5 }}>
                <Typography sx={{ fontSize: "0.72rem", fontWeight: 850 }}>Read full story</Typography>
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Stack>
            </Card>
          ))}
        </Box>
        <Typography sx={{ color: "rgba(255,255,255,0.43)", fontSize: "0.68rem", lineHeight: 1.55, mt: 2.2 }}>
          Story entries on this demonstration portal are static examples. For verified individual case studies, please refer to the relevant district or programme office.
        </Typography>
      </Container>
    </Box>
  );
}
