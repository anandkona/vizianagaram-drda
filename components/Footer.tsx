"use client";

import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FacebookRoundedIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { siteConfig } from "@/src/data/district";

const quickLinksCol = [
  { label: "Home", href: "/" },
  { label: "About District", href: "/about/district" },
  { label: "Citizen Services", href: "/citizen-services" },
  { label: "Schemes", href: "/schemes/social" },
  { label: "Downloads", href: "/downloads" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

const citizenServicesCol = [
  { label: "Grievance Redressal", href: "/services/grievance" },
  { label: "Public Services", href: "/citizen-services" },
  { label: "RTI Services", href: "/about/rti" },
  { label: "Tenders", href: "/downloads" },
  { label: "Notices", href: "/media" },
  { label: "District Portal", href: "/" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#082038",
        color: "#FFFFFF",
        pt: { xs: 5, md: 6 },
        pb: 3,
        borderTop: "3px solid #FFC107",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Column 1: District Info & Contacts */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 850,
                fontSize: "1.05rem",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                mb: 0.5,
              }}
            >
              VIZIANAGARAM DISTRICT
            </Typography>
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: "0.8rem",
                mb: 2.5,
              }}
            >
              Government of Andhra Pradesh
            </Typography>

            <Stack spacing={1.5} sx={{ mb: 2.5 }}>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <LocationOnRoundedIcon sx={{ color: "#FFC107", fontSize: 18, mt: 0.2 }} />
                <Typography sx={{ color: "#CBD5E1", fontSize: "0.8rem", lineHeight: 1.5 }}>
                  Collectorate, Vizianagaram District,
                  <br />
                  Andhra Pradesh — 535002
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.2} alignItems="center">
                <CallRoundedIcon sx={{ color: "#FFC107", fontSize: 18 }} />
                <MuiLink
                  href={`tel:${siteConfig.phone}`}
                  sx={{
                    color: "#CBD5E1",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    "&:hover": { color: "#FFC107" },
                  }}
                >
                  {siteConfig.phone}
                </MuiLink>
              </Stack>

              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailRoundedIcon sx={{ color: "#FFC107", fontSize: 18 }} />
                <MuiLink
                  href={`mailto:${siteConfig.email}`}
                  sx={{
                    color: "#CBD5E1",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    "&:hover": { color: "#FFC107" },
                  }}
                >
                  {siteConfig.email}
                </MuiLink>
              </Stack>
            </Stack>

            {/* Toll Free IVRS pill */}
            <Box
              component="a"
              href={`tel:${siteConfig.ivrs}`}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#FFC107",
                color: "#082B50",
                fontWeight: 850,
                fontSize: "0.78rem",
                px: 2,
                py: 0.8,
                borderRadius: "50px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#FFE082",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <CallRoundedIcon sx={{ fontSize: 16 }} />
              TOLL-FREE : {siteConfig.ivrs}
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 6, sm: 6, md: 2.5 }}>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.88rem",
                mb: 2,
                textTransform: "capitalize",
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinksCol.map((item) => (
                <MuiLink
                  key={item.label}
                  component={Link}
                  href={item.href}
                  underline="hover"
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    "&:hover": { color: "#FFC107" },
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Citizen Services */}
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.88rem",
                mb: 2,
                textTransform: "capitalize",
              }}
            >
              Citizen Services
            </Typography>
            <Stack spacing={1}>
              {citizenServicesCol.map((item) => (
                <MuiLink
                  key={item.label}
                  component={Link}
                  href={item.href}
                  underline="hover"
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    "&:hover": { color: "#FFC107" },
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Social Icons */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.88rem",
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                { icon: <FacebookRoundedIcon fontSize="small" />, href: "https://facebook.com" },
                { icon: <YouTubeIcon fontSize="small" />, href: "https://youtube.com" },
                { icon: <InstagramIcon fontSize="small" />, href: "https://instagram.com" },
              ].map((soc, idx) => (
                <IconButton
                  key={idx}
                  component="a"
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#CBD5E1",
                    borderRadius: "50%",
                    p: 0.9,
                    "&:hover": {
                      borderColor: "#FFC107",
                      color: "#FFC107",
                      backgroundColor: "rgba(255, 193, 7, 0.1)",
                    },
                  }}
                >
                  {soc.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mt: 5, mb: 3 }} />

        {/* Bottom Sub-footer */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
          sx={{ color: "#94A3B8", fontSize: "0.75rem" }}
        >
          <Typography sx={{ fontSize: "0.75rem", color: "#94A3B8" }}>
            © 2026 Vizianagaram District, All rights Reserved.
          </Typography>

          <Stack direction="row" spacing={2.5} flexWrap="wrap">
            <MuiLink
              component={Link}
              href="/privacy-policy"
              underline="hover"
              sx={{ color: "#94A3B8", fontSize: "0.75rem", "&:hover": { color: "#FFFFFF" } }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              href="/terms"
              underline="hover"
              sx={{ color: "#94A3B8", fontSize: "0.75rem", "&:hover": { color: "#FFFFFF" } }}
            >
              Terms of Use
            </MuiLink>
            <MuiLink
              component={Link}
              href="/sitemap"
              underline="hover"
              sx={{ color: "#94A3B8", fontSize: "0.75rem", "&:hover": { color: "#FFFFFF" } }}
            >
              Sitemap
            </MuiLink>
          </Stack>

          <Typography sx={{ fontSize: "0.72rem", color: "#94A3B8" }}>
            Powered By: <span style={{ color: "#FFFFFF", fontWeight: 700 }}>NIC</span>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
