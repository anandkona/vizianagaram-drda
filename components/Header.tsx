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

type SubItem = {
  label: string;
  href: string;
};

type MenuItemType = {
  label: string;
  href: string;
  items?: SubItem[];
};

// Pure clean text navigation items (NO icons)
const navMenuData: MenuItemType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/district",
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
    items: [
      { label: "All Citizen Services", href: "/citizen-services" },
      { label: "Share Concern (PGRS)", href: "/pgrs" },
      { label: "Announcements & Updates", href: "/announcements" },
      { label: "Tenders & Quotations", href: "/tenders" },
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Events & Training", href: "/events" },
    ],
  },
  {
    label: "Schemes",
    href: "/schemes",
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
    items: [
      { label: "Livelihood Programs", href: "/livelihoods" },
      { label: "Women Entrepreneurship", href: "/women-entrepreneurship" },
      { label: "FPOs Network", href: "/fpos" },
      { label: "One Family One Entrepreneur", href: "/one-family-one-entrepreneur" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    label: "District Mart",
    href: "/mart",
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

  // Desktop dropdown state
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
        backgroundColor: "#FFFFFF",
        color: "#082B50",
        zIndex: (theme) => theme.zIndex.appBar,
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0 2px 8px rgba(8, 43, 80, 0.04)",
      }}
    >
      {/* 1. Official Tri-Color Accent Line */}
      <Box
        sx={{
          height: 3,
          width: "100%",
          background: "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        }}
      />

      {/* 2. Header Container: Emblem + Clean Text Menu Bar */}
      <Box
        sx={{
          py: 0.8,
          px: { xs: 2, sm: 3, md: 4 },
          maxWidth: 1480,
          mx: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            minHeight: { xs: 52, md: 60 },
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
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: { xs: 42, sm: 46 },
                height: { xs: 42, sm: 46 },
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #F5B800",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(8, 43, 80, 0.1)",
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
                  color: "#082B50",
                  fontSize: { xs: "0.95rem", sm: "1.08rem" },
                  fontWeight: 900,
                  letterSpacing: "0.01em",
                  lineHeight: 1.15,
                  whiteSpace: "nowrap",
                }}
              >
                VIZIANAGARAM DISTRICT
              </Typography>
              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: { xs: "0.65rem", sm: "0.72rem" },
                  fontWeight: 650,
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                DRDA • Government of Andhra Pradesh
              </Typography>
            </Box>
          </Link>

          {/* Center: Clean Text Navigation Bar (No icons) */}
          <Box
            component="nav"
            aria-label="Main Navigation"
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
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
                            fontSize: "15px !important",
                            color: active || isMenuOpen ? "#082B50 !important" : "#94A3B8 !important",
                            transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                            ml: -0.3,
                          }}
                        />
                      ) : undefined
                    }
                    sx={{
                      color: active ? "#082B50 !important" : isMenuOpen ? "#082B50 !important" : "#334155 !important",
                      backgroundColor: active
                        ? "#F5B800 !important"
                        : isMenuOpen
                        ? "#F1F5F9 !important"
                        : "transparent",
                      fontWeight: active ? 850 : 650,
                      fontSize: "0.86rem",
                      py: 0.9,
                      px: 1.8,
                      borderRadius: "6px",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease",
                      "&:hover": {
                        backgroundColor: active ? "#F5B800" : "#F8FAFC",
                        color: "#082B50 !important",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              );
            })}
          </Box>

          {/* Right Action: District Map Button & Mobile Menu Toggle */}
          <Stack direction="row" alignItems="center" spacing={1.2}>
            <Button
              component={Link}
              href="/map"
              sx={{
                backgroundColor: "#082B50",
                color: "#FFFFFF !important",
                fontWeight: 800,
                fontSize: "0.82rem",
                px: 2,
                py: 0.85,
                borderRadius: "6px",
                textTransform: "none",
                display: { xs: "none", sm: "inline-flex" },
                boxShadow: "0 2px 8px rgba(8, 43, 80, 0.2)",
                transition: "all 0.15s ease",
                "&:hover": {
                  backgroundColor: "#0c3b6d",
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
                color: "#082B50",
                backgroundColor: "#F1F5F9",
                borderRadius: "8px",
                p: 0.8,
                "&:hover": {
                  backgroundColor: "#E2E8F0",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* 3. Clean Text-Only Dropdown Menu List (NO icons) */}
      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl && openMenu?.items)}
        placement="bottom-start"
        sx={{ zIndex: (theme) => theme.zIndex.modal + 30 }}
      >
        <Paper
          elevation={5}
          onMouseEnter={handleCancelClose}
          onMouseLeave={handleScheduleClose}
          sx={{
            mt: 0.5,
            minWidth: 240,
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderTop: "3px solid #F5B800",
            boxShadow: "0 12px 28px rgba(8, 43, 80, 0.12)",
            py: 0.6,
            px: 0.5,
          }}
        >
          <Stack spacing={0.2}>
            {openMenu?.items?.map((sub) => {
              const isSubActive = pathname === sub.href;

              return (
                <MenuItem
                  key={sub.label}
                  component={Link}
                  href={sub.href}
                  onClick={handleImmediateClose}
                  sx={{
                    borderRadius: "6px",
                    py: 1,
                    px: 1.8,
                    fontSize: "0.85rem",
                    fontWeight: isSubActive ? 800 : 550,
                    color: isSubActive ? "#082B50" : "#334155",
                    backgroundColor: isSubActive ? "#FFF9E6" : "transparent",
                    transition: "all 0.15s ease",
                    "&:hover": {
                      backgroundColor: "#F8FAFC",
                      color: "#082B50",
                      fontWeight: 650,
                    },
                  }}
                >
                  {sub.label}
                </MenuItem>
              );
            })}
          </Stack>
        </Paper>
      </Popper>

      {/* 4. Left-Sliding Mobile Drawer (Clean Text-Only, NO icons) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: 320,
            backgroundColor: "#FFFFFF",
            p: 0,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Mobile Header */}
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
              DRDA • Government of Andhra Pradesh
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

        {/* Mobile Menu List (Pure Text, NO icons) */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 1.5 }}>
          <Stack spacing={0.6}>
            {navMenuData.map((item) => {
              const active = isLinkActive(pathname, item.href);
              const hasSubItems = Boolean(item.items && item.items.length > 0);
              const isExpanded = Boolean(mobileExpanded[item.label]);

              if (!hasSubItems) {
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      color: active ? "#082B50 !important" : "#1E293B !important",
                      backgroundColor: active ? "#F5B800" : "#F8FAFC",
                      fontWeight: active ? 850 : 650,
                      fontSize: "0.88rem",
                      py: 1.1,
                      px: 2,
                      borderRadius: "6px",
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

              // Collapsible Group
              return (
                <Paper
                  key={item.label}
                  elevation={0}
                  sx={{
                    borderRadius: "6px",
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
                    <Typography
                      sx={{
                        fontSize: "0.88rem",
                        fontWeight: active ? 850 : 650,
                        color: active ? "#082B50" : "#1E293B",
                      }}
                    >
                      {item.label}
                    </Typography>
                    <IconButton size="small" sx={{ p: 0.2 }}>
                      {isExpanded ? (
                        <KeyboardArrowUpRoundedIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowDownRoundedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Box>

                  {/* Sub-items (Pure text list, NO icons) */}
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
                              borderRadius: "4px",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: isSubActive ? "#F5B800" : "#F1F5F9",
                                color: "#082B50 !important",
                              },
                            }}
                          >
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
            sx={{
              backgroundColor: "#082B50",
              color: "#FFFFFF !important",
              fontWeight: 800,
              fontSize: "0.88rem",
              borderRadius: "6px",
              py: 1,
              textTransform: "none",
            }}
          >
            District Map →
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
