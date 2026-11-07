"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { citizenServices } from "@/src/data/home";
import { assetPath } from "@/src/lib/assetPath";
import { PortalIcon } from "@/components/Icon";

export default function CitizenServicesSection() {
  return (
    <Box
      component="section"
      id="services"
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
              component="span"
              sx={{
                color: "#D97706",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                mb: 0.5,
              }}
            >
              Citizen Services
            </Typography>
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
              Everything you need to take the first step
            </Typography>
            <Typography
              sx={{
                color: "#64748B",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
                mt: 0.5,
              }}
            >
              Access key citizen services, submit applications and track your requests — all in one place.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/citizen-services"
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
            View All Services
          </Button>
        </Stack>

        {/* 5 Service Image Cards */}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(5, minmax(0, 1fr))",
            },
          }}
        >
          {citizenServices.map((service) => (
            <Card
              key={service.title}
              component={Link}
              href={service.href}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(8, 43, 80, 0.03)",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "#F59E0B",
                  boxShadow: "0 12px 28px rgba(8, 43, 80, 0.1)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url("${assetPath(service.image)}")`,
                  backgroundPosition: service.imagePosition ?? "center",
                  backgroundSize: "cover",
                  height: 140,
                  position: "relative",
                  backgroundColor: "#E2E8F0",
                }}
              />
              <Box sx={{ p: 2, display: "flex", flex: 1, flexDirection: "column" }}>
                <Stack direction="row" alignItems="center" spacing={0.8} sx={{ mb: 0.5 }}>
                  <PortalIcon name={service.icon} sx={{ fontSize: 18, color: "#082B50" }} />
                  <Typography
                    component="h3"
                    sx={{
                      color: "#082B50",
                      fontSize: "0.92rem",
                      fontWeight: 800,
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.5, mb: 1.5 }}>
                  {service.description}
                </Typography>
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    mt: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  Open service →
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Yellow Banner Below Cards: "Multiple services for your district" */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #FEF9E7 0%, #FFF8E1 100%)",
            border: "1.5px solid #FDE68A",
            borderRadius: "16px",
            p: { xs: 2, md: 2.5 },
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                backgroundColor: "#FFC107",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#082B50",
              }}
            >
              <PortalIcon name="dashboard" sx={{ fontSize: 20 }} />
            </Box>
            <Box>
              <Typography sx={{ color: "#082B50", fontSize: "0.95rem", fontWeight: 850 }}>
                Multiple services for your district
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.78rem" }}>
                Access all district services in one place
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1.2}>
            <Button
              component={Link}
              href="/citizen-services"
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #CBD5E1",
                color: "#082B50 !important",
                fontSize: "0.78rem",
                fontWeight: 800,
                px: 2.2,
                py: 0.8,
                borderRadius: "50px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#F8FAFC" },
              }}
            >
              Our Services →
            </Button>
            <Button
              component={Link}
              href="/map"
              sx={{
                backgroundColor: "#082B50",
                color: "#FFFFFF !important",
                fontSize: "0.78rem",
                fontWeight: 800,
                px: 2.2,
                py: 0.8,
                borderRadius: "50px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#0C3C6E" },
              }}
            >
              View Map →
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
