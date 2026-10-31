"use client";

import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExploreIcon from "@mui/icons-material/Explore";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #FFF3C4, #FFF8E1)", minHeight: "65vh", py: { xs: 3, md: 4.5 } }}>
      <Container maxWidth="md">
        <Paper sx={{ background: "#FFFFFF", border: "1px solid #F0E4C6", borderRadius: 4, p: { xs: 3, md: 6 }, textAlign: "center" }}>
          <Box sx={{ alignItems: "center", background: "linear-gradient(135deg, #20252D, #C18400)", borderRadius: "50%", color: "#FFD54F", display: "inline-flex", height: 76, justifyContent: "center", width: 76 }}><ExploreIcon sx={{ fontSize: 38 }} /></Box>
          <Typography component="p" sx={{ color: "secondary.dark", fontSize: "0.75rem", fontWeight: 850, letterSpacing: "0.12em", mt: 3, textTransform: "uppercase" }}>Page not found</Typography>
          <Typography component="h1" variant="h2" sx={{ color: "text.primary", fontSize: { xs: "2rem", md: "2.7rem" }, mt: 1 }}>Let’s take you back to a useful path.</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 520, mx: "auto", mt: 1.5 }}>The address may have changed, or the page may not be part of this district portal.</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={1.3} sx={{ mt: 3 }}>
            <Button component={Link} href="/" variant="contained" startIcon={<ArrowBackIcon />}>Back to home</Button>
            <Button component={Link} href="/services" variant="outlined">Visit Citizen Services</Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
