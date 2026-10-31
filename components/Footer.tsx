"use client";

import CallRoundedIcon from "@mui/icons-material/CallRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { footerServices, helplines, quickLinks, siteConfig } from "@/src/data/district";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <MuiLink
      component={Link}
      href={href}
      underline="hover"
      sx={{
        alignItems: "center",
        color: "rgba(255,255,255,0.76)",
        display: "inline-flex",
        fontSize: "0.8rem",
        fontWeight: 600,
        gap: 0.6,
        lineHeight: 1.45,
        transition: "color 180ms ease, transform 180ms ease",
        "&:hover": { color: "#FFE082", transform: "translateX(3px)" },
      }}
    >
      <ChevronRightRoundedIcon sx={{ color: "#FFC107", fontSize: 17 }} />
      {children}
    </MuiLink>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: "#0C1B2A", color: "#FFFFFF" }}>
      <Box
        aria-label="Emergency helplines"
        role="region"
        sx={{ background: "linear-gradient(90deg, #8F181B, #B3261E)", borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <Container maxWidth="lg">
          <Stack
            alignItems="center"
            direction={{ xs: "column", lg: "row" }}
            justifyContent="center"
            spacing={1}
            sx={{ py: 0.15, minHeight: 28 }}
          >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ display: "none" }}>
              <Box sx={{ background: "#FFFFFF", borderRadius: "50%", height: 8, width: 8 }} />
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.04em" }}>
                Emergency &amp; citizen helplines
              </Typography>
            </Stack>
            <Stack
              component="nav"
              aria-label="Emergency numbers"
              direction="row"
              flexWrap="wrap"
              gap={{ xs: 0.25, sm: 0.5 }}
            >
              {helplines.map((line) => (
                <Button
                  key={line.value}
                  component="a"
                  href={line.href}
                  size="small"
                  startIcon={<CallRoundedIcon sx={{ fontSize: 13, color: "#FFFFFF" }} />}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "none",
                    py: 0.1,
                    px: 0.75,
                    minHeight: "unset",
                    lineHeight: 1.2,
                    "&:hover": { background: "rgba(255,255,255,0.15)" },
                  }}
                >
                  {line.label}: {line.value}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Column 1: District Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.05rem", mb: 0.5 }}>
              {siteConfig.title}
            </Typography>
            <Typography sx={{ color: "#FFC107", fontWeight: 700, fontSize: "0.78rem", mb: 1.5 }}>
              {siteConfig.subtitle}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", lineHeight: 1.6, mb: 2 }}>
              {siteConfig.description}
            </Typography>
            <Stack spacing={1} sx={{ mb: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnRoundedIcon sx={{ color: "#FFC107", fontSize: 18 }} />
                <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem" }}>
                  {siteConfig.address}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailRoundedIcon sx={{ color: "#FFC107", fontSize: 18 }} />
                <MuiLink
                  href={`mailto:${siteConfig.email}`}
                  sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem", textDecoration: "none", "&:hover": { color: "#FFE082" } }}
                >
                  {siteConfig.email}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <CallRoundedIcon sx={{ color: "#FFC107", fontSize: 18 }} />
                <MuiLink
                  href={`tel:${siteConfig.phone}`}
                  sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem", textDecoration: "none", "&:hover": { color: "#FFE082" } }}
                >
                  {siteConfig.phone}
                </MuiLink>
              </Stack>
            </Stack>
            <Button
              component="a"
              href={`tel:${siteConfig.ivrs}`}
              startIcon={<CallRoundedIcon sx={{ color: "#000000 !important" }} />}
              sx={{
                background: "#FFC107 !important",
                color: "#000000 !important",
                fontWeight: 800,
                fontSize: "0.8rem",
                marginTop: 1,
                transition: "background-color 180ms ease, color 180ms ease, transform 180ms ease",
                "&:hover": { background: "#FFE082 !important", color: "#000000 !important", transform: "translateY(-1px)" },
                "& *": { color: "#000000 !important" },
              }}
              variant="contained"
            >
              Call IVRS {siteConfig.ivrs}
            </Button>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{ color: "#FFFFFF", fontWeight: 750, fontSize: "0.88rem", mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Citizen Services */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{ color: "#FFFFFF", fontWeight: 750, fontSize: "0.88rem", mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Citizen Services
            </Typography>
            <Stack spacing={1}>
              {footerServices.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.13)", mt: 4 }} />
        <Box
          component="nav"
          aria-label="Official government links"
          sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", py: 2.2 }}
        >
          <Stack direction="row" alignItems="center" flexWrap="wrap" gap={{ xs: 1, sm: 2.2 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.48)", fontSize: "0.68rem", fontWeight: 750, mr: 0.5, textTransform: "uppercase" }}>
              Official links
            </Typography>
            {[
              { label: "Government of Andhra Pradesh", href: "https://www.ap.gov.in/" },
              { label: "MeeSeva", href: "https://meeseva.ap.gov.in/" },
              { label: "PGRS", href: "https://pgrs.ap.gov.in/" },
            ].map((item) => (
              <MuiLink
                key={item.href}
                component="a"
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                underline="hover"
                sx={{
                  alignItems: "center",
                  color: "rgba(255,255,255,0.64)",
                  display: "inline-flex",
                  fontSize: "0.7rem",
                  gap: 0.4,
                  transition: "color 180ms ease, transform 180ms ease",
                  "&:hover": { color: "#FFE082", transform: "translateX(3px)" },
                }}
              >
                {item.label}
                <OpenInNewRoundedIcon sx={{ fontSize: 13 }} />
              </MuiLink>
            ))}
          </Stack>
        </Box>

        <Stack
          alignItems={{ xs: "flex-start", md: "center" }}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={1.2}
          sx={{ color: "rgba(255,255,255,0.5)", py: 2.3 }}
        >
          <Typography sx={{ fontSize: "0.68rem" }}>
            © 2026 Vizianagaram District Administration · Government of Andhra Pradesh
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={{ xs: 1.2, sm: 2 }}>
            <MuiLink component={Link} href="/accessibility" underline="hover" sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem", "&:hover": { color: "#FFFFFF" } }}>
              Accessibility
            </MuiLink>
            <MuiLink component={Link} href="/media" underline="hover" sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem", "&:hover": { color: "#FFFFFF" } }}>
              Media centre
            </MuiLink>
            <Typography sx={{ fontSize: "0.68rem" }}>
              Last refreshed: {siteConfig.updated}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
