"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "next/link";

const quickJumpLinks = [
  { label: "Citizen Services", href: "/citizen-services" },
  { label: "Schemes", href: "/schemes/social" },
  { label: "Downloads", href: "/downloads" },
  { label: "Grievances", href: "/services/grievance" },
  { label: "Contact Us", href: "/contact" },
];

export default function FinalHelpSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 4, sm: 5, md: 6 },
        borderTop: "1px solid #ECE4D0",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          component="h2"
          sx={{
            color: "#082B50",
            fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.5rem" },
            fontWeight: 900,
            letterSpacing: "-0.035em",
            mb: 0.8,
          }}
        >
          Quick Citizen Navigation
        </Typography>
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            mb: 3.5,
          }}
        >
          Direct gateways to key services, schemes, downloads, and grievance portals.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
            justifyContent: "center",
            gap: { xs: 1.5, sm: 2 },
            width: "100%",
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          {quickJumpLinks.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.href}
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "15px !important", color: "#D97706 !important" }} />}
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: 0 },
                backgroundColor: "#FFFDF5",
                border: "1.5px solid #FDE68A",
                color: "#082B50 !important",
                fontSize: { xs: "0.85rem", sm: "0.88rem" },
                fontWeight: 800,
                py: { xs: 1.3, sm: 1.5 },
                px: { xs: 2, sm: 1.5 },
                borderRadius: "16px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(245, 158, 11, 0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor: "#FEF3C7",
                  borderColor: "#F59E0B",
                  boxShadow: "0 8px 20px rgba(245, 158, 11, 0.22)",
                  transform: "translateY(-3px)",
                  color: "#082B50 !important",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
