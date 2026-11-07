"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { featuredSuccessStories } from "@/src/data/home";

const storyImages: Record<string, string> = {
  "lakshmi-shg": "/images/drda-women-shg-outdoor.jpg",
  "ramana-fpo": "/images/farmer-support-real.jpg",
  "suresh-skill": "/images/service-learning.jpg",
};

export default function SuccessStoriesSection() {
  return (
    <Box
      component="section"
      id="success-stories"
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 4, sm: 5, md: 6 },
        borderBottom: "1px solid #ECE4D0",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Section Header */}
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ mb: { xs: 2.5, md: 3.5 } }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                color: "#082B50",
                fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.5rem" },
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
              }}
            >
              Real people. Practical progress.
            </Typography>
            <Typography
              sx={{
                color: "#64748B",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
                mt: 0.5,
              }}
            >
              Stories from our communities that are building a stronger Vizianagaram.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/success-stories"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important", color: "#D97706 !important" }} />}
            sx={{
              color: "#D97706 !important",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "none",
              display: { xs: "none", sm: "inline-flex" },
              "&:hover": { backgroundColor: "rgba(245, 158, 11, 0.08)" },
            }}
          >
            View All Stories
          </Button>
        </Stack>

        {/* 3 Story Cards with Photos */}
        <Box
          sx={{
            display: "grid",
            gap: 2.5,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          }}
        >
          {featuredSuccessStories.map((story) => {
            const img = storyImages[story.id] || "/images/drda-women-shg.jpg";
            return (
              <Card
                key={story.id}
                component={Link}
                href={`/success-stories#${story.id}`}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(8, 43, 80, 0.03)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#F59E0B",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 28px rgba(8, 43, 80, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    backgroundImage: `url("${img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#E2E8F0",
                  }}
                />
                <Box sx={{ p: 2.5, display: "flex", flex: 1, flexDirection: "column" }}>
                  <Typography
                    component="h3"
                    sx={{
                      color: "#082B50",
                      fontSize: "1.05rem",
                      fontWeight: 850,
                      lineHeight: 1.3,
                      mb: 0.8,
                    }}
                  >
                    {story.person}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {story.story}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#D97706",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      mt: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    Read more →
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
