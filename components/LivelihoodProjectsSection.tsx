"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { livelihoodProjects } from "@/src/data/home";
import { assetPath } from "@/src/lib/assetPath";

export default function LivelihoodProjectsSection() {
  return (
    <Box
      component="section"
      id="livelihoods"
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 2.5, sm: 3, md: 3.5 },
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
              Value chains with a local future
            </Typography>
            <Typography
              sx={{
                color: "#64748B",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
                mt: 0.5,
              }}
            >
              Explore support schemes for farmers, entrepreneurs, traders and young people.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/livelihoods"
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
            View All Schemes →
          </Button>
        </Stack>

        {/* 4 Cards with Images & Highlights */}
        <Box
          sx={{
            display: "grid",
            gap: 2.5,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
          }}
        >
          {livelihoodProjects.map((project) => (
            <Card
              key={project.title}
              component={Link}
              href="/livelihoods"
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
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
                  height: 160,
                  backgroundImage: `url("${assetPath(project.image)}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#E2E8F0",
                }}
              />
              <Box sx={{ p: 2.2, display: "flex", flex: 1, flexDirection: "column" }}>
                <Typography
                  component="h3"
                  sx={{
                    color: "#082B50",
                    fontSize: "0.95rem",
                    fontWeight: 850,
                    lineHeight: 1.3,
                    mb: 0.8,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}
                >
                  {project.achieved}
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "0.72rem",
                    fontWeight: 650,
                    mb: 1.5,
                  }}
                >
                  {project.target}
                </Typography>
                <Typography
                  sx={{
                    color: "#0284C7",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    mt: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.4,
                  }}
                >
                  View Details →
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
