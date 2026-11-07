"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { missionMetrics } from "@/src/data/home";
import { assetPath } from "@/src/lib/assetPath";

export default function MissionSection() {
  return (
    <Box
      component="section"
      id="mission"
      sx={{
        position: "relative",
        backgroundImage: 'linear-gradient(90deg, rgba(8, 43, 80, 0.25) 0%, rgba(8, 43, 80, 0.45) 45%, rgba(8, 43, 80, 0.75) 100%), url("${assetPath("/images/mission-family-ultrawide.jpg")}")',
        backgroundSize: "cover",
        backgroundPosition: { xs: "left center", md: "left 25%" },
        py: { xs: 3, sm: 3.5, md: 4 },
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr", lg: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "center",
          }}
        >
          {/* Invisible spacer on the left to leave the family photo completely uncovered */}
          <Box sx={{ display: { xs: "none", md: "block" }, minHeight: 1 }} />

          {/* Right Area: Text + Numbers Card Side-by-Side or Stacked */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: { xs: "flex-start", lg: "center" },
              justifyContent: "space-between",
              gap: { xs: 3, lg: 3.5 },
              width: "100%",
            }}
          >
            {/* Mission Headline & Description */}
            <Box sx={{ maxWidth: { xs: "100%", lg: 380 } }}>
              <Typography
                component="h2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "1.85rem", sm: "2.3rem", md: "2.6rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.15,
                  mb: 1.2,
                  textShadow: "0 2px 14px rgba(0,0,0,0.65)",
                }}
              >
                One family.
                <br />
                One stronger Vizianagaram.
              </Typography>

              <Box sx={{ width: 44, height: 4, backgroundColor: "#FFC107", borderRadius: "2px", mb: 1.4 }} />

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: { xs: "0.88rem", sm: "0.95rem" },
                  lineHeight: 1.6,
                  textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                }}
              >
                A mission-driven district for better opportunities, stronger communities and a brighter future.
              </Typography>
            </Box>

            {/* Compact White Floating Card */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: { xs: 2.2, sm: 2.5 },
                width: "100%",
                maxWidth: { xs: "100%", sm: 340 },
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.35)",
                color: "#082B50",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  color: "#082B50",
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  textAlign: "center",
                  letterSpacing: "-0.01em",
                  mb: 1.8,
                }}
              >
                District Empowerment in Numbers
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1,
                  textAlign: "center",
                  mb: 2,
                }}
              >
                {missionMetrics.map((metric) => (
                  <Box key={metric.label}>
                    <Typography
                      sx={{
                        color: "#082B50",
                        fontSize: { xs: "1.2rem", sm: "1.3rem" },
                        fontWeight: 900,
                        lineHeight: 1.1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.65rem",
                        fontWeight: 650,
                        mt: 0.3,
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
                endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important", color: "#082B50 !important" }} />}
                fullWidth
                sx={{
                  backgroundColor: "#FFC107",
                  color: "#082B50 !important",
                  fontWeight: 850,
                  fontSize: "0.82rem",
                  py: 0.9,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
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
