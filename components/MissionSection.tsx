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
        backgroundImage: 'linear-gradient(rgba(8, 43, 80, 0.45), rgba(8, 43, 80, 0.65)), url("/images/mission-family-ultrawide.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, sm: 8, md: 10 },
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Left Text Banner */}
          <Box>
            <Typography
              component="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              One family.
              <br />
              One stronger Vizianagaram.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              A mission-driven district for better opportunities, stronger communities and a brighter future.
            </Typography>
          </Box>

          {/* Right Floating White Glass Card */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: 3,
                width: "100%",
                maxWidth: 380,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                color: "#082B50",
              }}
            >
              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
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
                  fontSize: "0.82rem",
                  py: 1,
                  borderRadius: "50px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#FFD54F" },
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
