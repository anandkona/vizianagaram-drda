"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { missionMetrics } from "@/src/data/home";

export default function MissionSection() {
  return (
    <Box
      component="section"
      id="mission"
      sx={{
        position: "relative",
        backgroundImage: 'linear-gradient(90deg, rgba(8, 43, 80, 0.72) 0%, rgba(8, 43, 80, 0.45) 50%, rgba(8, 43, 80, 0.65) 100%), url("/images/mission-family-ultrawide.jpg")',
        backgroundSize: "cover",
        backgroundPosition: { xs: "center center", md: "25% center" },
        py: { xs: 7, sm: 9, md: 11 },
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left Text Banner - shifted slightly right with pl offset so it never overlaps the background family faces */}
          <Box
            sx={{
              pl: { xs: 0, md: 4, lg: 6 },
              maxWidth: 620,
            }}
          >
            {/* Golden Eyebrow Pill */}
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                color: "#FDE047",
                fontSize: { xs: "0.75rem", sm: "0.82rem" },
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                mb: 1.5,
                background: "rgba(0, 0, 0, 0.25)",
                px: 1.5,
                py: 0.5,
                borderRadius: "50px",
                border: "1px solid rgba(253, 224, 71, 0.4)",
              }}
            >
              DRDA STATE &amp; DISTRICT VISION
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "2.1rem", sm: "2.7rem", md: "3.4rem" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                mb: 2,
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              One family.
              <br />
              One stronger Vizianagaram.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.95)",
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.7,
                maxWidth: 540,
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              A mission-driven district for better opportunities, stronger communities and a brighter future.
            </Typography>
          </Box>

          {/* Right Floating White Glass Card - shifted right with generous spacing */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, pr: { xs: 0, lg: 2 } }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                p: { xs: 3, sm: 3.5 },
                width: "100%",
                maxWidth: 390,
                boxShadow: "0 24px 50px rgba(0, 0, 0, 0.28)",
                color: "#082B50",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.75rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 2,
                }}
              >
                District Empowerment in Numbers
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1.5,
                  textAlign: "center",
                  mb: 2.5,
                }}
              >
                {missionMetrics.map((metric) => (
                  <Box key={metric.label}>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: "1.35rem",
                        fontWeight: 900,
                        lineHeight: 1.1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.68rem",
                        fontWeight: 650,
                        mt: 0.4,
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                component={Link}
                href="/one-family-one-entrepreneur"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important", color: "#082B50 !important" }} />}
                fullWidth
                sx={{
                  backgroundColor: "#FFC107",
                  color: "#082B50 !important",
                  fontWeight: 850,
                  fontSize: "0.85rem",
                  py: 1.1,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 6px 18px rgba(245, 158, 11, 0.35)",
                  "&:hover": { backgroundColor: "#FFD54F", transform: "translateY(-1px)" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
