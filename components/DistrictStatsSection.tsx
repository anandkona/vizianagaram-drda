"use client";

import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { PortalIcon } from "@/components/Icon";
import { districtGlanceStats, institutionNetwork } from "@/src/data/home";

export default function DistrictStatsSection() {
  return (
    <Box
      component="section"
      id="glance"
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 4, sm: 5, md: 6 },
        borderBottom: "1px solid #ECE4D0",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header Matching Mockup */}
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
              District at a glance
            </Typography>
            <Typography
              sx={{
                color: "#64748B",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
                mt: 0.5,
              }}
            >
              A quick view of Vizianagaram&apos;s population, administration and infrastructure.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/about/district"
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
            View Detailed Statistics
          </Button>
        </Stack>

        {/* 6 Top White Metric Cards */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 1.5, sm: 2 },
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(6, minmax(0, 1fr))",
            },
          }}
        >
          {districtGlanceStats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                p: { xs: 1.8, sm: 2.2 },
                boxShadow: "0 4px 12px rgba(8, 43, 80, 0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "#F59E0B",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 24px rgba(245, 158, 11, 0.15)",
                },
              }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  borderRadius: "12px",
                  color: "#D97706",
                  display: "flex",
                  height: 44,
                  justifyContent: "center",
                  width: 44,
                  mb: 1.5,
                }}
              >
                <PortalIcon name={stat.icon} sx={{ fontSize: 22 }} />
              </Box>
              <Typography
                component="p"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "1.35rem", sm: "1.65rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                <CountUp
                  decimals={stat.decimals}
                  suffix={stat.label === "Population" ? " Lakh" : stat.label === "Literacy rate" ? "%" : ""}
                  value={stat.value}
                />
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: "#64748B",
                  fontSize: "0.75rem",
                  fontWeight: 650,
                  mt: 0.5,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* District Highlights Banner (Warm Cream with Temple Illustration) */}
        <Paper
          sx={{
            background: "linear-gradient(135deg, #FFFDF5 0%, #FEF9E7 50%, #FFF8E1 100%)",
            border: "1.5px solid #FDE68A",
            borderRadius: "20px",
            mt: 3,
            p: { xs: 2.5, md: 3 },
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(245, 158, 11, 0.08)",
          }}
        >
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "flex-start", lg: "center" }}
            justifyContent="space-between"
            spacing={3}
          >
            {/* Left Title & Description */}
            <Box sx={{ maxWidth: 440 }}>
              <Typography
                component="h3"
                sx={{
                  color: "#D97706",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mb: 0.5,
                }}
              >
                District Highlights
              </Typography>
              <Typography
                sx={{
                  color: "#082B50",
                  fontSize: "1.15rem",
                  fontWeight: 850,
                  mb: 0.8,
                }}
              >
                Local institutions, one connected network.
              </Typography>
              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                }}
              >
                Our district administration works closely with people, communities and stakeholders for inclusive and sustainable development.
              </Typography>
            </Box>

            {/* Middle Stats Columns */}
            <Box
              sx={{
                display: "grid",
                flex: 1,
                gap: 2,
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(4, minmax(0, 1fr))",
                },
                maxWidth: 600,
                width: "100%",
              }}
            >
              {institutionNetwork.map((item) => (
                <Box key={item.label} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      color: "#082B50",
                      fontSize: "1.35rem",
                      fontWeight: 900,
                      lineHeight: 1.1,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      mt: 0.4,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Right Action Button */}
            <Button
              component={Link}
              href="/about/district"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
              sx={{
                backgroundColor: "#FFC107",
                color: "#082B50 !important",
                fontWeight: 850,
                fontSize: "0.82rem",
                px: 2.8,
                py: 1.1,
                borderRadius: "50px",
                textTransform: "none",
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: "#FFD54F",
                },
              }}
            >
              Explore More
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
