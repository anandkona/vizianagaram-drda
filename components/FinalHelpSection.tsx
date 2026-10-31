"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePortalUI } from "@/components/PortalUIContext";

export default function FinalHelpSection() {
  const { openConcern } = usePortalUI();

  return (
    <Box
      component="section"
      sx={{
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        borderTop: "1px solid rgba(180, 83, 9, 0.15)",
        color: "#1F1700",
        py: { xs: 2, md: 2.5 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.1, pointerEvents: "none", position: "absolute" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: "#1F1700",
            fontSize: { xs: "1.35rem", sm: "1.65rem", md: "1.85rem" },
            fontWeight: 850,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Need help? We&apos;re here for you.
        </Typography>
        <Typography
          sx={{
            color: "rgba(31, 23, 0, 0.88)",
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
            fontWeight: 550,
            lineHeight: 1.5,
            maxWidth: 540,
            mt: 0.75,
            mx: "auto",
          }}
        >
          Share a concern, find a service or connect with a district office. Start with one clear next step.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={1.25}
          sx={{
            mt: 1.75,
            mx: "auto",
          }}
        >
          <Button
            onClick={openConcern}
            startIcon={<CampaignRoundedIcon sx={{ fontSize: "16px !important" }} />}
            sx={{
              background: "#161102",
              color: "#FFFFFF !important",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(22, 17, 2, 0.25)",
              fontSize: "0.8rem",
              fontWeight: 750,
              minHeight: 38,
              px: 2.5,
              py: 0.75,
              textTransform: "none",
              transition: "all 0.2s ease",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: 300, sm: "none" },
              "&:hover": {
                background: "#000000",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
                transform: "translateY(-1px)",
              },
            }}
            variant="contained"
          >
            Share your concern
          </Button>
          <Button
            component={Link}
            href="/services"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "16px !important" }} />}
            sx={{
              background: "rgba(255, 255, 255, 0.85)",
              color: "#161102 !important",
              border: "1px solid rgba(180, 83, 9, 0.3)",
              backdropFilter: "blur(6px)",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(180, 83, 9, 0.15)",
              fontSize: "0.8rem",
              fontWeight: 750,
              minHeight: 38,
              px: 2.5,
              py: 0.75,
              textTransform: "none",
              transition: "all 0.2s ease",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: 300, sm: "none" },
              "&:hover": {
                background: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(180, 83, 9, 0.25)",
                color: "#000000 !important",
                transform: "translateY(-1px)",
              },
            }}
            variant="contained"
          >
            Explore citizen services
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
