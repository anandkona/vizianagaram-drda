"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

type SubItem = {
  label: string;
  href: string;
};

type MenuItemType = {
  label: string;
  href: string;
  icon: any;
  items?: SubItem[];
};

// 6 Core Menus with Clean Sub-Items
const navMenuData: MenuItemType[] = [
  {
    label: "Home",
    href: "/",
    icon: HomeRoundedIcon,
  },
  {
    label: "About",
    href: "/about/district",
    icon: InfoRoundedIcon,
    items: [
      { label: "District Profile", href: "/about/district" },
      { label: "About DRDA", href: "/about/drda" },
      { label: "Organizational Structure", href: "/about/structure" },
      { label: "Who's Who (Leadership)", href: "/about/whos-who" },
      { label: "Contact Directory", href: "/directory" },
    ],
  },
  {
    label: "Citizen Services",
    href: "/citizen-services",
    icon: HandshakeRoundedIcon,
    items: [
      { label: "All Citizen Services", href: "/citizen-services" },
      { label: "Share Your Concern (PGRS)", href: "/pgrs" },
      { label: "IVRS Toll-Free (1902)", href: "/ivrs" },
      { label: "Announcements & Updates", href: "/announcements" },
      { label: "Tenders & Quotations", href: "/tenders" },
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Events & Training", href: "/events" },
    ],
  },
  {
    label: "Schemes",
    href: "/schemes",
    icon: AccountBalanceRoundedIcon,
    items: [
      { label: "All Welfare Schemes", href: "/schemes" },
      { label: "Women & SHG Schemes", href: "/schemes/women" },
      { label: "Farmers & Agriculture", href: "/schemes/farmers" },
      { label: "Youth & Skill Development", href: "/schemes/youth" },
      { label: "MSME & Entrepreneurs", href: "/schemes/entrepreneurs" },
      { label: "Tribal Welfare (ITDA)", href: "/schemes/tribal" },
      { label: "Social Security Pensions", href: "/schemes/social" },
    ],
  },
  {
    label: "Livelihoods",
    href: "/livelihoods",
    icon: WorkOutlineRoundedIcon,
    items: [
      { label: "Livelihood Programs", href: "/livelihoods" },
      { label: "Women Entrepreneurship", href: "/women-entrepreneurship" },
      { label: "FPOs Network", href: "/fpos" },
      { label: "One Family One Entrepreneur", href: "/one-family-one-entrepreneur" },
      { label: "SERP Initiatives", href: "/serp-corner" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    label: "District Mart",
    href: "/mart",
    icon: StorefrontRoundedIcon,
  },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const cleanHref = href.split(/[?#]/)[0];
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    About: true,
  });

  // Desktop dropdown popper state
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuItemType | null>(null);
  const closeTimer = useRef<number | null>(null);

  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>, item: MenuItemType) => {
    if (!item.items || item.items.length === 0) return;
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setAnchorEl(event.currentTarget);
    setOpenMenu(item);
  };

  const handleScheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setAnchorEl(null);
      setOpenMenu(null);
    }, 150);
  };

  const handleCancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleImmediateClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    handleImmediateClose();
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
        boxShadow: "0 4px 16px rgba(8, 43, 80, 0.25)",
      }}
    >
      {/* 1. Official National Tri-Color Accent Line */}
      <Box
        sx={{
          height: 3,
          width: "100%",
          background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        }}
      />

      {/* 2. Top Branding Row */}
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
          {/* Left: District Emblem & Text */}
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

          {/* Right Header Buttons */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
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

      {/* 3. Horizontal Menu Bar with Dropdown Sub-Items */}
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
          {navMenuData.map((item) => {
            const active = isLinkActive(pathname, item.href);
            const isMenuOpen = openMenu?.label === item.label;
            const hasSubItems = Boolean(item.items && item.items.length > 0);

            return (
              <Box
                key={item.label}
                onMouseEnter={(e) => handleOpenDropdown(e, item)}
                onMouseLeave={handleScheduleClose}
                sx={{ position: "relative" }}
              >
                <Button
                  component={Link}
                  href={item.href}
                  endIcon={
                    hasSubItems ? (
                      <KeyboardArrowDownRoundedIcon
                        sx={{
                          fontSize: "16px !important",
                          color: active || isMenuOpen ? "#F5B800 !important" : "#94A3B8 !important",
                          transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          ml: -0.3,
                        }}
                      />
                    ) : undefined
                  }
                  sx={{
                    color: active || isMenuOpen ? "#F5B800 !important" : "#E2E8F0 !important",
                    backgroundColor: active || isMenuOpen ? "rgba(245, 184, 0, 0.12)" : "transparent",
                    fontWeight: active ? 850 : 600,
                    fontSize: "0.88rem",
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
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Desktop Simple Clean Dropdown Menu */}
      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl && openMenu?.items)}
        placement="bottom-start"
        sx={{ zIndex: (theme) => theme.zIndex.modal + 20 }}
      >
        <Paper
          elevation={8}
          onMouseEnter={handleCancelClose}
          onMouseLeave={handleScheduleClose}
          sx={{
            mt: 0.5,
            minWidth: 240,
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderTop: "3px solid #F5B800",
            boxShadow: "0 12px 30px rgba(8, 43, 80, 0.2)",
            py: 0.8,
            px: 0.5,
          }}
        >
          {openMenu?.items?.map((sub) => {
            const isSubActive = pathname === sub.href;

            return (
              <MenuItem
                key={sub.label}
                component={Link}
                href={sub.href}
                onClick={handleImmediateClose}
                sx={{
                  color: isSubActive ? "#082B50" : "#334155",
                  backgroundColor: isSubActive ? "#FFF9E6" : "transparent",
                  fontWeight: isSubActive ? 800 : 550,
                  fontSize: "0.85rem",
                  py: 1,
                  px: 2,
                  borderRadius: "6px",
                  mx: 0.5,
                  my: 0.2,
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.15s ease",
                  "&:hover": {
                    backgroundColor: "#F8FAFC",
                    color: "#082B50",
                    fontWeight: 650,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: isSubActive ? "#F5B800" : "#CBD5E1",
                    mr: 1.5,
                    flexShrink: 0,
                  }}
                />
                {sub.label}
              </MenuItem>
            );
          })}
        </Paper>
      </Popper>

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
        {/* Mobile Drawer Header */}
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

        {/* Mobile Drawer Menu List */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 1.5 }}>
          <Stack spacing={0.8}>
            {navMenuData.map((item) => {
              const active = isLinkActive(pathname, item.href);
              const hasSubItems = Boolean(item.items && item.items.length > 0);
              const isExpanded = Boolean(mobileExpanded[item.label]);
              const IconComponent = item.icon;

              if (!hasSubItems) {
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                    startIcon={<IconComponent sx={{ fontSize: 20, color: active ? "#082B50" : "#64748B" }} />}
                    sx={{
                      justifyContent: "flex-start",
                      color: active ? "#082B50 !important" : "#1E293B !important",
                      backgroundColor: active ? "#F5B800" : "#F8FAFC",
                      fontWeight: active ? 850 : 600,
                      fontSize: "0.88rem",
                      py: 1.1,
                      px: 2,
                      borderRadius: "8px",
                      textTransform: "none",
                      border: "1px solid",
                      borderColor: active ? "#F5B800" : "#E2E8F0",
                      "&:hover": {
                        backgroundColor: active ? "#F5B800" : "#EDF2F7",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              }

              // Collapsible Group for Items with Sub-Menus
              return (
                <Paper
                  key={item.label}
                  elevation={0}
                  sx={{
                    borderRadius: "8px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Box
                    onClick={() => toggleMobileGroup(item.label)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 1.1,
                      px: 2,
                      cursor: "pointer",
                      backgroundColor: isExpanded ? "#F8FAFC" : "#FFFFFF",
                      borderBottom: isExpanded ? "1px solid #E2E8F0" : "none",
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconComponent sx={{ fontSize: 20, color: active ? "#082B50" : "#64748B" }} />
                      <Typography
                        sx={{
                          fontSize: "0.88rem",
                          fontWeight: active ? 850 : 650,
                          color: active ? "#082B50" : "#1E293B",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Stack>
                    <IconButton size="small" sx={{ p: 0.2 }}>
                      {isExpanded ? (
                        <KeyboardArrowUpRoundedIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownRoundedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Box>

                  {/* Sub-Items List */}
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box sx={{ py: 0.5, px: 1, backgroundColor: "#FAFCFF" }}>
                      {item.items?.map((sub) => {
                        const isSubActive = pathname === sub.href;

                        return (
                          <Button
                            key={sub.label}
                            component={Link}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            fullWidth
                            sx={{
                              justifyContent: "flex-start",
                              alignItems: "center",
                              color: isSubActive ? "#082B50 !important" : "#334155 !important",
                              backgroundColor: isSubActive ? "#F5B800 !important" : "transparent",
                              fontSize: "0.82rem",
                              fontWeight: isSubActive ? 800 : 550,
                              py: 0.8,
                              px: 1.5,
                              my: 0.2,
                              borderRadius: "6px",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: isSubActive ? "#F5B800" : "#F1F5F9",
                                color: "#082B50 !important",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                backgroundColor: isSubActive ? "#082B50" : "#94A3B8",
                                mr: 1.5,
                                flexShrink: 0,
                              }}
                            />
                            {sub.label}
                          </Button>
                        );
                      })}
                    </Box>
                  </Collapse>
                </Paper>
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
