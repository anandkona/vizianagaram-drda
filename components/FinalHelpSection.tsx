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
      <Container maxWidth="lg">
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
          Jump straight to what matters
        </Typography>
        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            mb: 3.5,
          }}
        >
          Quick links to key services, schemes and resources to help you move forward.
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1.5}
        >
          {quickJumpLinks.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.href}
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "14px !important", color: "#D97706 !important" }} />}
              sx={{
                backgroundColor: "#FFFDF5",
                border: "1.5px solid #FDE68A",
                color: "#92400E !important",
                fontSize: "0.82rem",
                fontWeight: 750,
                px: 2.4,
                py: 1,
                borderRadius: "50px",
                textTransform: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#FEF3C7",
                  borderColor: "#F59E0B",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
