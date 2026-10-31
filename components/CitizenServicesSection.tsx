"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Link from "next/link";
import { citizenServices } from "@/src/data/home";
import { PortalIcon } from "@/components/Icon";

export default function CitizenServicesSection() {
  return (
    <Box component="section" id="services" sx={{ background: "#F7F8FA", py: { xs: 2, md: 2.5 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "flex-end" }} justifyContent="space-between" spacing={2.5} sx={{ mb: { xs: 3.2, md: 4.5 } }}>
          <Box sx={{ flex: 1, pr: { md: 4 } }}>
            <Typography component="p" sx={{ color: "#9A6700", fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
              Citizen services
            </Typography>
            <Typography component="h2" sx={{ color: "#20252D", fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" }, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1.1, mt: 0.9 }}>
              Everything you need to take the first step
            </Typography>
            <Typography sx={{ color: "#6B6254", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: 1.7, mt: 1.2 }}>
              Find a service, understand a process or connect with the right district office. Start with the doorway that fits your need.
            </Typography>
          </Box>
          <Button component={Link} endIcon={<ArrowForwardIcon />} href="/services" sx={{ color: "#6B4300", flexShrink: 0, fontSize: "0.8rem", fontWeight: 850 }} variant="outlined">
            View all services
          </Button>
        </Stack>

        <Box sx={{ display: "grid", gap: { xs: 1.5, sm: 2 }, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))", lg: "repeat(5, minmax(0, 1fr))" } }}>
          {citizenServices.map((service) => (
            <Card
              key={service.title}
              component={Link}
              href={service.href}
              sx={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 1,
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: { xs: 320, sm: 300 },
                overflow: "hidden",
                textDecoration: "none",
                transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                "&:hover": { borderColor: "#D9A62A", boxShadow: "0 16px 34px rgba(32,37,45,0.1)", transform: "translateY(-5px)" },
              }}
            >
              <Box sx={{ backgroundImage: `linear-gradient(180deg, rgba(32,37,45,0.04), rgba(32,37,45,0.68)), url("${service.image}")`, backgroundPosition: service.imagePosition ?? "center", backgroundSize: "cover", height: { xs: 138, sm: 126 }, position: "relative" }}>
                <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 1.7, color: "#000000", display: "flex", height: 40, justifyContent: "center", left: 16, position: "absolute", top: 16, width: 40 }}>
                  <PortalIcon name={service.icon} sx={{ fontSize: 21 }} />
                </Box>
              </Box>
              <Box sx={{ display: "flex", flex: 1, flexDirection: "column", p: { xs: 1.8, sm: 2 } }}>
                <Typography sx={{ color: "#9A6700", fontSize: "0.65rem", fontWeight: 850, letterSpacing: "0.08em", textTransform: "uppercase" }}>{service.tag}</Typography>
                <Typography component="h3" sx={{ color: "#20252D", fontSize: "1rem", fontWeight: 850, lineHeight: 1.25, mt: 0.7 }}>{service.title}</Typography>
                <Typography sx={{ color: "#6B6254", fontSize: "0.78rem", lineHeight: 1.6, mt: 0.8 }}>{service.description}</Typography>
                <Stack direction="row" alignItems="center" spacing={0.6} sx={{ color: "#6B4300", mt: "auto", pt: 1.8 }}>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 850 }}>Open service</Typography>
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Stack>
              </Box>
            </Card>
          ))}
        </Box>

        <Box sx={{ alignItems: { xs: "flex-start", sm: "center" }, background: "#20252D", borderRadius: 1, color: "#FFFFFF", display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.4, justifyContent: "space-between", mt: 2.2, p: { xs: 2, md: 2.3 } }}>
          <Stack direction="row" alignItems="center" spacing={1.2}>
            <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 1.7, color: "#000000", display: "flex", height: 42, justifyContent: "center", width: 42 }}><HeadsetMicIcon /></Box>
            <Box>
              <Typography sx={{ color: "#FFFFFF", fontSize: "0.87rem", fontWeight: 800 }}>Need help choosing a service?</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.74rem", lineHeight: 1.5, mt: 0.25 }}>Call the district IVRS or browse the complete service directory.</Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1.2} sx={{ flexShrink: 0 }}>
            <Button component="a" href="tel:1902" sx={{ background: "#F9A825", color: "#20252D", fontSize: "0.76rem", fontWeight: 850, "&:hover": { background: "#FFD54F" } }}>Call 1902</Button>
            <Button component={Link} href="/directory" sx={{ color: "#FFFFFF", fontSize: "0.76rem" }} variant="outlined">Directory</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
