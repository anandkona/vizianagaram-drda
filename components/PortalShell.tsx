"use client";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import FloatingHelpButton from "@/components/FloatingHelpButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePortalUI } from "@/components/PortalUIContext";

const mobileNavigation = [
  { label: "Home", href: "/", icon: HomeRoundedIcon },
  { label: "Schemes", href: "/schemes", icon: VolunteerActivismRoundedIcon },
  { label: "Services", href: "/services", icon: GridViewRoundedIcon },
  { label: "Directory", href: "/directory", icon: PeopleAltRoundedIcon },
];

function pathIsActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileBottomNavigation() {
  const pathname = usePathname();
  const { openConcern } = usePortalUI();

  return (
    <Paper
      aria-label="Primary mobile navigation"
      component="nav"
      elevation={16}
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bottom: 0,
        display: { xs: "block", lg: "none" },
        left: 0,
        pb: "env(safe-area-inset-bottom, 0px)",
        position: "fixed",
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar - 1,
      }}
    >
      <Stack
        direction="row"
        sx={{ margin: "0 auto", maxWidth: 620, minHeight: 68, px: 0.35 }}
      >
        {mobileNavigation.map((item) => {
          const active = pathIsActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Button
              key={item.href}
              aria-current={active ? "page" : undefined}
              component={Link}
              href={item.href}
              sx={{
                color: active ? "primary.dark" : "text.secondary",
                flex: 1,
                flexDirection: "column",
                fontSize: "0.62rem",
                fontWeight: active ? 850 : 650,
                gap: 0.25,
                lineHeight: 1.1,
                minHeight: 66,
                minWidth: 0,
                px: 0.2,
                py: 0.7,
                position: "relative",
                "&::before": active
                  ? {
                      background: "#FFC107",
                      borderRadius: 2,
                      content: '""',
                      height: 3,
                      left: "28%",
                      position: "absolute",
                      right: "28%",
                      top: 0,
                    }
                  : undefined,
                "&:hover": { background: "rgba(255,193,7,0.09)" },
              }}
            >
              <Icon sx={{ fontSize: 22 }} />
              {item.label}
            </Button>
          );
        })}
        <Button
          aria-haspopup="dialog"
          onClick={openConcern}
          sx={{
            color: "text.secondary",
            flex: 1,
            flexDirection: "column",
            fontSize: "0.62rem",
            fontWeight: 650,
            gap: 0.25,
            lineHeight: 1.1,
            minHeight: 66,
            minWidth: 0,
            px: 0.2,
            py: 0.7,
            "&:hover": { background: "rgba(255,193,7,0.09)" },
          }}
        >
          <SupportAgentRoundedIcon sx={{ fontSize: 22 }} />
          Help
        </Button>
      </Stack>
    </Paper>
  );
}

export default function PortalShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Box
        component="a"
        href="#main-content"
        sx={{
          background: "#FFC107",
          border: "2px solid #2B2100",
          borderRadius: 1.5,
          color: "#2B2100",
          fontSize: "0.82rem",
          fontWeight: 850,
          left: 12,
          padding: "10px 15px",
          position: "fixed",
          top: -100,
          zIndex: 2000,
          "&:focus": { top: 12 },
        }}
      >
        Skip to main content
      </Box>

      <Header />
      <Box
        id="main-content"
        component="main"
        tabIndex={-1}
        sx={{ minHeight: "60vh", overflow: "hidden", pb: { xs: "76px", lg: 0 } }}
      >
        {children}
      </Box>
      <Footer />
      <MobileBottomNavigation />
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <FloatingHelpButton />
      </Box>
    </>
  );
}
