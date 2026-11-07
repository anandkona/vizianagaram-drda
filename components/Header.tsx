"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";

// Clean, direct, non-nested navigation links (No confusing dropdowns)
const simpleNavItems = [
  { label: "Home", href: "/", icon: HomeRoundedIcon },
  { label: "About District", href: "/about/district", icon: InfoRoundedIcon },
  { label: "About DRDA", href: "/about/drda", icon: CorporateFareRoundedIcon },
  { label: "Schemes", href: "/schemes", icon: AccountBalanceRoundedIcon },
  { label: "Citizen Services", href: "/citizen-services", icon: HandshakeRoundedIcon },
  { label: "Livelihoods", href: "/livelihoods", icon: WorkOutlineRoundedIcon },
  { label: "District Mart", href: "/mart", icon: StorefrontRoundedIcon },
  { label: "Contact", href: "/directory", icon: ContactPhoneRoundedIcon },
];

function pathIsActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  const cleanHref = href.split(/[?#]/)[0];
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <AppBar
      component="header"
      elevation={0}
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: "#082B50",
        color: "#FFFFFF",
        zIndex: (theme) => theme.zIndex.appBar,
        boxShadow: "0 4px 14px rgba(8, 43, 80, 0.2)",
      }}
    >
      {/* 1. Official National Tri-Color Accent Bar */}
      <Box
        sx={{
          height: 3,
          width: "100%",
          background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        }}
      />

      {/* 2. Top Branding Bar (Navy Blue with High Contrast White/Gold) */}
      <Box
        sx={{
          backgroundColor: "#082B50",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          py: { xs: 1, sm: 1.2 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1440,
            mx: "auto",
            width: "100%",
          }}
        >
          {/* Left: District Emblem & Typography */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                width: { xs: 40, sm: 46 },
                height: { xs: 40, sm: 46 },
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #FFC107",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}
            >
              <Box
                alt="Emblem of Andhra Pradesh"
                component="img"
                src="/emblem-of-andhra-pradesh.jpg"
                sx={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "1rem", sm: "1.18rem" },
                  fontWeight: 900,
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                VIZIANAGARAM DISTRICT
              </Typography>
              <Typography
                sx={{
                  color: "#F5B800",
                  fontSize: { xs: "0.68rem", sm: "0.75rem" },
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  lineHeight: 1.2,
                }}
              >
                District Rural Development Agency (DRDA) • Govt. of AP
              </Typography>
            </Box>
          </Link>

          {/* Right Header Controls */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            {/* Direct Map CTA Button */}
            <Button
              component={Link}
              href="/map"
              startIcon={<MapRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
              sx={{
                backgroundColor: "#F5B800",
                color: "#082B50 !important",
                fontWeight: 850,
                fontSize: "0.82rem",
                px: 2.2,
                py: 0.75,
                borderRadius: "6px",
                textTransform: "none",
                display: { xs: "none", sm: "inline-flex" },
                boxShadow: "0 2px 8px rgba(245, 184, 0, 0.4)",
                "&:hover": {
                  backgroundColor: "#E0A800",
                },
              }}
            >
              District Map
            </Button>

            {/* Mobile Hamburger Menu */}
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                color: "#FFFFFF",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                borderRadius: "8px",
                p: 0.8,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.22)",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* 3. Direct Desktop Horizontal Menu Bar (Clean Navy row with Gold Highlights) */}
      <Box
        component="nav"
        aria-label="Main Navigation"
        sx={{
          display: { xs: "none", lg: "block" },
          backgroundColor: "#051F3B",
          borderBottom: "2px solid #F5B800",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1440,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 0.5,
          }}
        >
          {simpleNavItems.map((item) => {
            const active = pathIsActive(pathname, item.href);

            return (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: active ? "#F5B800 !important" : "#E2E8F0 !important",
                  backgroundColor: active ? "rgba(245, 184, 0, 0.12)" : "transparent",
                  fontWeight: active ? 850 : 600,
                  fontSize: "0.86rem",
                  py: 1.1,
                  px: 2,
                  borderRadius: 0,
                  textTransform: "none",
                  position: "relative",
                  transition: "all 0.15s ease",
                  borderBottom: active ? "3px solid #F5B800" : "3px solid transparent",
                  mb: "-2px",
                  "&:hover": {
                    color: "#FFFFFF !important",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Box>

      {/* 4. Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: 340,
            backgroundColor: "#FFFFFF",
            p: 0,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "#082B50",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "3px solid #F5B800",
          }}
        >
          <Box>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 900 }}>
              Vizianagaram Portal
            </Typography>
            <Typography sx={{ color: "#F5B800", fontSize: "0.7rem", fontWeight: 700 }}>
              DRDA Government of AP
            </Typography>
          </Box>
          <IconButton
            onClick={() => setMobileOpen(false)}
            size="small"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.12)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
            }}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Drawer Menu List */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 1.5 }}>
          <Stack spacing={0.6}>
            {simpleNavItems.map((item) => {
              const active = pathIsActive(pathname, item.href);
              const IconComponent = item.icon;

              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  fullWidth
                  startIcon={
                    <IconComponent
                      sx={{
                        fontSize: 20,
                        color: active ? "#082B50" : "#64748B",
                      }}
                    />
                  }
                  sx={{
                    justifyContent: "flex-start",
                    color: active ? "#082B50 !important" : "#1E293B !important",
                    backgroundColor: active ? "#F5B800" : "#F8FAFC",
                    boxShadow: active ? "0 2px 6px rgba(245, 184, 0, 0.35)" : "none",
                    fontWeight: active ? 850 : 600,
                    fontSize: "0.88rem",
                    py: 1.1,
                    px: 2,
                    borderRadius: "8px",
                    textTransform: "none",
                    border: "1px solid",
                    borderColor: active ? "#F5B800" : "#E2E8F0",
                    transition: "all 0.15s ease",
                    "&:hover": {
                      backgroundColor: active ? "#F5B800" : "#EDF2F7",
                      color: "#082B50 !important",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>
        </Box>

        {/* Drawer Footer CTA */}
        <Box sx={{ p: 2, borderTop: "1px solid #E2E8F0", backgroundColor: "#F8FAFC" }}>
          <Button
            component={Link}
            href="/map"
            fullWidth
            onClick={() => setMobileOpen(false)}
            startIcon={<MapRoundedIcon sx={{ color: "#082B50 !important" }} />}
            sx={{
              backgroundColor: "#F5B800",
              color: "#082B50 !important",
              fontWeight: 850,
              fontSize: "0.88rem",
              borderRadius: "8px",
              py: 1,
              textTransform: "none",
            }}
          >
            Open Interactive Map →
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
