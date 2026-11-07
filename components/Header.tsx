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
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Popper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

type NavSubItem = {
  label: string;
  href: string;
};

type NavGroupItem = {
  label: string;
  href?: string;
  items?: NavSubItem[];
};

type NavItemType = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  twoLines?: boolean;
  children?: (NavSubItem | NavGroupItem)[];
};

// Exact navbar menu lists and items aligned with drdamanyam & official Vizianagaram governance
const headerNavItems: NavItemType[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/district",
    hasDropdown: true,
    children: [
      { label: "About District Profile", href: "/about/district" },
      { label: "About DRDA", href: "/about/drda" },
      { label: "Org Structure", href: "/about/structure" },
      { label: "Who's Who", href: "/about/whos-who" },
      { label: "District Map", href: "/map" },
    ],
  },
  {
    label: "Citizen Services",
    href: "/citizen-services",
    hasDropdown: true,
    children: [
      { label: "All Citizen Services", href: "/citizen-services" },
      {
        label: "Schemes & Learning",
        items: [
          { label: "Explore Schemes", href: "/schemes" },
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: "Events & Training", href: "/events" },
        ],
      },
      {
        label: "Grievance & Support",
        items: [
          { label: "Share Your Concern (PGRS)", href: "/pgrs" },
          { label: "IVRS Services (1902)", href: "/ivrs" },
          { label: "Feedback", href: "/feedback" },
        ],
      },
      {
        label: "Information & Transparency",
        items: [
          { label: "Announcements & Latest Updates", href: "/announcements" },
          { label: "Tenders & Notices", href: "/tenders" },
          { label: "RTI", href: "/rti" },
        ],
      },
      { label: "Contact Directory", href: "/directory" },
    ],
  },
  {
    label: "Schemes",
    href: "/schemes",
    hasDropdown: true,
    children: [
      { label: "All Schemes", href: "/schemes" },
      { label: "Women & SHG", href: "/schemes/women" },
      { label: "Farmers & Agriculture", href: "/schemes/farmers" },
      { label: "Youth & Skills", href: "/schemes/youth" },
      { label: "Entrepreneurs & MSME", href: "/schemes/entrepreneurs" },
      { label: "Tribal Welfare (ITDA)", href: "/schemes/tribal" },
      { label: "Senior Citizens & Social Pensions", href: "/schemes/social" },
    ],
  },
  {
    label: "Livelihoods",
    href: "/livelihoods",
    hasDropdown: true,
    children: [
      { label: "FPOs Network", href: "/fpos" },
      { label: "Women Entrepreneurship", href: "/women-entrepreneurship" },
      { label: "One Family One Entrepreneur", href: "/one-family-one-entrepreneur" },
      { label: "Livelihood Projects", href: "/livelihoods" },
      { label: "SERP Corner", href: "/serp-corner" },
    ],
  },
  {
    label: "Tourism",
    href: "/tourism",
  },
  {
    label: "Media",
    href: "/media",
    hasDropdown: true,
    children: [
      { label: "Press Releases & News", href: "/media" },
      { label: "Announcements", href: "/announcements" },
    ],
  },
  {
    label: "Success Stories",
    href: "/success-stories",
  },
  {
    label: "District Mart",
    href: "/mart",
  },
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
  const [expandedMobileItems, setExpandedMobileItems] = useState<Record<string, boolean>>({
    About: true,
    "Citizen Services": false,
    Schemes: false,
    Livelihoods: false,
    Media: false,
  });

  const toggleMobileExpand = (label: string) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Popper dropdown state
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [activeItem, setActiveItem] = useState<NavItemType | null>(null);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeMenu = () => {
    cancelClose();
    setMenuAnchor(null);
    setActiveItem(null);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      closeMenu();
    }, 150);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, item: NavItemType) => {
    if (!item.children || item.children.length === 0) return;
    cancelClose();
    setActiveItem(item);
    setMenuAnchor(event.currentTarget);
  };

  useEffect(() => {
    closeMenu();
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
        borderBottom: "1px solid #ECE4D0",
      }}
    >
      {/* MAIN HEADER & NAV BAR */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 0.5, md: 0.8 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: { xs: 52, md: 56 } }}>
          {/* Left: District Circular Logo & Single-Line Title */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #FFC107",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(8, 43, 80, 0.08)",
                flexShrink: 0,
              }}
            >
              <Box
                alt="Government of Andhra Pradesh emblem"
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
                  fontSize: { xs: "0.62rem", sm: "0.68rem" },
                  fontWeight: 550,
                  lineHeight: 1.2,
                  mt: 0.1,
                  whiteSpace: "nowrap",
                }}
              >
                Government of Andhra Pradesh
              </Typography>
            </Box>
          </Link>

            {/* Middle: Desktop Navigation Items */}
            <Box
              component="nav"
              aria-label="Main Navigation"
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                py: "4px",
                px: "6px",
                borderRadius: "50px",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 2px 10px rgba(8, 43, 80, 0.04)",
              }}
            >
              {headerNavItems.map((item) => {
                const active = pathIsActive(pathname, item.href);
                const isHovered = activeItem?.label === item.label;

                return (
                  <Box
                    key={item.label}
                    onMouseEnter={(e) => handleOpenMenu(e, item)}
                    onMouseLeave={scheduleClose}
                    sx={{ position: "relative" }}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      endIcon={
                        item.hasDropdown ? (
                          <KeyboardArrowDownRoundedIcon
                            sx={{
                              fontSize: "15px !important",
                              color: active
                                ? "#082B50 !important"
                                : isHovered
                                ? "#082B50 !important"
                                : "#94A3B8 !important",
                              ml: -0.4,
                              transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          />
                        ) : undefined
                      }
                      sx={{
                        color: active
                          ? "#082B50 !important"
                          : isHovered
                          ? "#082B50 !important"
                          : "#475569 !important",
                        backgroundColor: active
                          ? "#F5B800 !important"
                          : isHovered
                          ? "#F1F5F9 !important"
                          : "transparent",
                        fontWeight: active ? 850 : 600,
                        fontSize: "0.82rem",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        textTransform: "none",
                        px: 1.6,
                        py: 0.85,
                        borderRadius: "50px",
                        boxShadow: active ? "0 2px 8px rgba(245, 184, 0, 0.35)" : "none",
                        transition: "all 0.18s ease",
                        "&:hover": {
                          backgroundColor: active ? "#F5B800" : "#F1F5F9",
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

            {/* Right: Golden Pill "Vizianagaram Map →" Button */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button
                component={Link}
                href="/map"
                startIcon={<MapRoundedIcon sx={{ fontSize: "16px !important", color: "#082B50 !important" }} />}
                sx={{
                  backgroundColor: "#082B50",
                  color: "#FFFFFF !important",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  px: 2,
                  py: 0.85,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 3px 10px rgba(8, 43, 80, 0.2)",
                  border: "1px solid #082B50",
                  display: { xs: "none", sm: "inline-flex" },
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#0c3b6d",
                    boxShadow: "0 5px 15px rgba(8, 43, 80, 0.3)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                District Map →
              </Button>

              {/* Mobile Hamburger Menu Toggle */}
              <IconButton
                aria-label="Open mobile menu"
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { lg: "none" },
                  color: "#082B50",
                  backgroundColor: "#F1F5F9",
                  borderRadius: "10px",
                  p: 0.8,
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Stack>
        </Box>
      </Box>

      {/* Dropdown Popper for Submenus */}
      <Popper
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        placement="bottom-start"
        sx={{ zIndex: (theme) => theme.zIndex.modal + 10 }}
      >
        <Box
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          role="menu"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            borderRadius: "16px",
            boxShadow: "0 20px 45px -10px rgba(8, 43, 80, 0.18), 0 2px 8px rgba(8, 43, 80, 0.05)",
            minWidth: 250,
            py: 1,
            px: 0.8,
            mt: 1.2,
          }}
        >
          {activeItem?.children?.map((child, idx) => {
            if ("items" in child && child.items) {
              return (
                <Box
                  key={child.label || idx}
                  sx={{
                    position: "relative",
                    "&:hover > .flyout-submenu": {
                      display: "block",
                      opacity: 1,
                      visibility: "visible",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 2,
                      py: 1,
                      color: "#1E293B",
                      fontSize: "0.84rem",
                      fontWeight: 650,
                      cursor: "pointer",
                      borderRadius: "10px",
                      mx: 0.5,
                      my: 0.2,
                      transition: "all 0.15s ease",
                      "&:hover": {
                        backgroundColor: "#FFFDF5",
                        color: "#D97706",
                      },
                    }}
                  >
                    <span>{child.label}</span>
                    <ChevronRightRoundedIcon sx={{ fontSize: 16, color: "#94A3B8" }} />
                  </Box>

                  {/* Nested Flyout Menu List */}
                  <Box
                    className="flyout-submenu"
                    sx={{
                      display: "none",
                      opacity: 0,
                      visibility: "hidden",
                      position: "absolute",
                      top: -6,
                      left: "100%",
                      ml: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.98)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                      borderLeft: "3px solid #F5B800",
                      borderRadius: "14px",
                      boxShadow: "0 20px 45px -10px rgba(8, 43, 80, 0.2)",
                      minWidth: 240,
                      py: 1,
                      px: 0.8,
                      zIndex: 100,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {child.items.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <MenuItem
                          key={`${sub.href}-${sub.label}`}
                          component={Link}
                          href={sub.href}
                          onClick={closeMenu}
                          sx={{
                            borderRadius: "8px",
                            color: isSubActive ? "#082B50" : "#1E293B",
                            backgroundColor: isSubActive ? "#FFF9E6" : "transparent",
                            fontSize: "0.82rem",
                            fontWeight: isSubActive ? 800 : 550,
                            py: 0.85,
                            px: 2,
                            mx: 0.3,
                            my: 0.2,
                            "&:hover": {
                              backgroundColor: "#FFFDF5",
                              color: "#D97706",
                            },
                          }}
                        >
                          {sub.label}
                        </MenuItem>
                      );
                    })}
                  </Box>
                </Box>
              );
            }

            const isChildActive = pathname === child.href;

            return (
              <MenuItem
                key={`${child.href}-${child.label}`}
                component={Link}
                href={child.href || "#"}
                onClick={closeMenu}
                sx={{
                  borderRadius: "10px",
                  color: isChildActive ? "#082B50" : "#1E293B",
                  backgroundColor: isChildActive ? "#FFF9E6" : "transparent",
                  fontSize: "0.84rem",
                  fontWeight: isChildActive ? 800 : 600,
                  py: 1,
                  px: 2,
                  mx: 0.3,
                  my: 0.2,
                  transition: "all 0.15s ease",
                  "&:hover": {
                    backgroundColor: "#FFFDF5",
                    color: "#D97706",
                  },
                }}
              >
                {child.label}
              </MenuItem>
            );
          })}
        </Box>
      </Popper>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "88%",
            maxWidth: 380,
            backgroundColor: "#F8FAFC",
            p: 0,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            p: 2.2,
            backgroundColor: "#082B50",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "3px solid #F5B800",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              component="img"
              src="/images/ap-govt-logo.png"
              alt="AP Emblem"
              sx={{ width: 34, height: 34, objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
            <Box>
              <Typography sx={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 900, lineHeight: 1.2 }}>
                Vizianagaram Portal
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", fontWeight: 600 }}>
                DRDA • Government of Andhra Pradesh
              </Typography>
            </Box>
          </Stack>
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
        <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          <Stack spacing={1}>
            {headerNavItems.map((item) => {
              const active = pathIsActive(pathname, item.href);
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = Boolean(expandedMobileItems[item.label]);

              const getItemIcon = (label: string) => {
                switch (label) {
                  case "Home":
                    return <HomeRoundedIcon sx={{ fontSize: 18 }} />;
                  case "About":
                    return <InfoRoundedIcon sx={{ fontSize: 18 }} />;
                  case "Citizen Services":
                    return <HandshakeRoundedIcon sx={{ fontSize: 18 }} />;
                  case "Schemes":
                    return <AccountBalanceRoundedIcon sx={{ fontSize: 18 }} />;
                  case "Livelihoods":
                    return <WorkOutlineRoundedIcon sx={{ fontSize: 18 }} />;
                  case "Tourism":
                    return <LandscapeRoundedIcon sx={{ fontSize: 18 }} />;
                  case "Media":
                    return <NewspaperRoundedIcon sx={{ fontSize: 18 }} />;
                  case "Success Stories":
                    return <EmojiEventsRoundedIcon sx={{ fontSize: 18 }} />;
                  case "District Mart":
                    return <StorefrontRoundedIcon sx={{ fontSize: 18 }} />;
                  default:
                    return null;
                }
              };

              if (!hasChildren) {
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                    startIcon={getItemIcon(item.label)}
                    sx={{
                      justifyContent: "flex-start",
                      color: active ? "#082B50 !important" : "#1E293B !important",
                      backgroundColor: active ? "#F5B800" : "#FFFFFF",
                      boxShadow: active
                        ? "0 4px 12px rgba(245, 184, 0, 0.35)"
                        : "0 1px 3px rgba(15, 23, 42, 0.05)",
                      fontWeight: active ? 850 : 700,
                      fontSize: "0.88rem",
                      py: 1.1,
                      px: 2,
                      borderRadius: "12px",
                      textTransform: "none",
                      border: "1px solid",
                      borderColor: active ? "#F5B800" : "#E2E8F0",
                      transition: "all 0.15s ease",
                      "&:hover": {
                        backgroundColor: active ? "#F5B800" : "#FFFDF5",
                        borderColor: "#F5B800",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              }

              // Dropdown Group with Collapsible Accordion-style Card
              return (
                <Paper
                  key={item.label}
                  elevation={0}
                  sx={{
                    borderRadius: "14px",
                    border: "1px solid",
                    borderColor: isExpanded || active ? "#CBD5E1" : "#E2E8F0",
                    backgroundColor: "#FFFFFF",
                    overflow: "hidden",
                    boxShadow: isExpanded
                      ? "0 4px 14px rgba(8, 43, 80, 0.06)"
                      : "0 1px 3px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  {/* Category Header Row */}
                  <Box
                    onClick={() => toggleMobileExpand(item.label)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 1.15,
                      px: 2,
                      cursor: "pointer",
                      backgroundColor: isExpanded ? "#F8FAFC" : "#FFFFFF",
                      borderBottom: isExpanded ? "1px solid #E2E8F0" : "none",
                      transition: "background-color 0.15s ease",
                      "&:hover": {
                        backgroundColor: "#F1F5F9",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1.3} alignItems="center">
                      <Box
                        sx={{
                          color: active ? "#082B50" : "#475569",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {getItemIcon(item.label)}
                      </Box>
                      <Typography
                        sx={{
                          color: active ? "#082B50" : "#0F172A",
                          fontWeight: active ? 850 : 750,
                          fontSize: "0.88rem",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={0.8} alignItems="center">
                      <Typography
                        component={Link}
                        href={item.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#0284C7",
                          textDecoration: "none",
                          px: 1,
                          py: 0.25,
                          borderRadius: "6px",
                          backgroundColor: "#F0F9FF",
                          "&:hover": {
                            backgroundColor: "#E0F2FE",
                          },
                        }}
                      >
                        Visit
                      </Typography>
                      <IconButton size="small" sx={{ color: "#64748B", p: 0.5 }}>
                        {isExpanded ? (
                          <KeyboardArrowUpRoundedIcon fontSize="small" />
                        ) : (
                          <KeyboardArrowDownRoundedIcon fontSize="small" />
                        )}
                      </IconButton>
                    </Stack>
                  </Box>

                  {/* Collapsible Submenu Items */}
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box sx={{ py: 1, px: 1.5, backgroundColor: "#FAFCFF" }}>
                      {item.children?.flatMap((child, idx) => {
                        // Nested Sub-Group
                        if ("items" in child && child.items) {
                          return (
                            <Box key={`${item.label}-${child.label}-${idx}`} sx={{ my: 0.8 }}>
                              <Typography
                                sx={{
                                  fontSize: "0.7rem",
                                  fontWeight: 800,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.06em",
                                  color: "#94A3B8",
                                  px: 1.5,
                                  pt: 0.5,
                                  pb: 0.3,
                                }}
                              >
                                {child.label}
                              </Typography>
                              {child.items.map((sub, sIdx) => {
                                const isSubActive = pathname === sub.href;
                                return (
                                  <Button
                                    key={`${item.label}-${child.label}-${sub.href}-${sIdx}`}
                                    component={Link}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    fullWidth
                                    sx={{
                                      justifyContent: "flex-start",
                                      alignItems: "center",
                                      color: isSubActive ? "#082B50 !important" : "#334155 !important",
                                      backgroundColor: isSubActive ? "#F5B800 !important" : "transparent",
                                      fontSize: "0.8rem",
                                      fontWeight: isSubActive ? 800 : 550,
                                      py: 0.75,
                                      px: 1.5,
                                      my: 0.2,
                                      borderRadius: "8px",
                                      textTransform: "none",
                                      transition: "all 0.15s ease",
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
                          );
                        }

                        // Direct Child Link
                        if ("href" in child && child.href) {
                          const isSubActive = pathname === child.href;
                          return (
                            <Button
                              key={`${item.label}-${child.href}-${idx}`}
                              component={Link}
                              href={child.href}
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
                                my: 0.25,
                                borderRadius: "8px",
                                textTransform: "none",
                                transition: "all 0.15s ease",
                                "&:hover": {
                                  backgroundColor: isSubActive ? "#F5B800" : "#F1F5F9",
                                  color: "#082B50 !important",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  backgroundColor: isSubActive ? "#082B50" : "#CBD5E1",
                                  mr: 1.5,
                                  flexShrink: 0,
                                }}
                              />
                              {child.label}
                            </Button>
                          );
                        }
                        return null;
                      })}
                    </Box>
                  </Collapse>
                </Paper>
              );
            })}
          </Stack>
        </Box>

        {/* Drawer Footer CTA */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #E2E8F0",
          }}
        >
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
              borderRadius: "12px",
              py: 1.1,
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(245, 184, 0, 0.4)",
              "&:hover": {
                backgroundColor: "#E0A800",
              },
            }}
          >
            Interactive District Map →
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
