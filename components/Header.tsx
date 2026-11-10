"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
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
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import { assetPath } from "@/src/lib/assetPath";

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
          { label: "Official Downloads", href: "/downloads" },
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
  },
  {
    label: "Success Stories",
    href: "/success-stories",
  },
  {
    label: "Downloads",
    href: "/downloads",
  },
  {
    label: "District Mart",
    href: "/mart",
    hasDropdown: true,
    children: [
      { label: "Products Catalog", href: "/mart" },
      { label: "Wishlist", href: "/mart/wishlist" },
      { label: "Cart", href: "/cart" },
    ],
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
                src={assetPath("/emblem-of-andhra-pradesh.jpg")}
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
                gap: { lg: 1, xl: 1.5 },
              }}
            >
              {headerNavItems.map((item) => {
                const active = pathIsActive(pathname, item.href);

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
                              color: active ? "#082B50 !important" : "#64748B !important",
                              ml: -0.4,
                            }}
                          />
                        ) : undefined
                      }
                      sx={{
                        color: active ? "#082B50 !important" : "#082B50 !important",
                        backgroundColor: active ? "#F5B800 !important" : "transparent",
                        fontWeight: active ? 850 : 700,
                        fontSize: "0.82rem",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        textTransform: "none",
                        px: active ? 2 : 1,
                        py: active ? 0.6 : 0.4,
                        borderRadius: active ? "100px" : "6px",
                        boxShadow: active ? "0 4px 14px rgba(245, 184, 0, 0.35)" : "none",
                        transition: "all 0.18s ease",
                        "&:hover": {
                          backgroundColor: active ? "#F5B800" : "rgba(8, 43, 80, 0.04)",
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
                  backgroundColor: "#F5B800",
                  color: "#082B50 !important",
                  fontWeight: 850,
                  fontSize: "0.78rem",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  px: 2,
                  py: 0.8,
                  borderRadius: "100px",
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(245, 184, 0, 0.35)",
                  display: { xs: "none", sm: "inline-flex" },
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#D49D00",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Vizianagaram Map →
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
        sx={{ zIndex: (theme) => theme.zIndex.modal }}
      >
        <Box
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          role="menu"
          sx={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderTop: "3px solid #F5B800",
            borderRadius: "0 0 12px 12px",
            boxShadow: "0 20px 45px -4px rgba(8, 43, 80, 0.18)",
            minWidth: 240,
            py: 1,
            px: 0.5,
            mt: 0.5,
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
                      fontWeight: 600,
                      cursor: "pointer",
                      borderRadius: "8px",
                      mx: 0.5,
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

                  {/* Nested Flyout Menu List (Exact drdamanyam implementation) */}
                  <Box
                    className="flyout-submenu"
                    sx={{
                      display: "none",
                      opacity: 0,
                      visibility: "hidden",
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      ml: "-2px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderLeft: "3px solid #F5B800",
                      borderRadius: "12px",
                      boxShadow: "0 20px 45px -4px rgba(8, 43, 80, 0.2)",
                      minWidth: 230,
                      py: 1,
                      px: 0.5,
                      zIndex: 100,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {child.items.map((sub) => (
                      <MenuItem
                        key={`${sub.href}-${sub.label}`}
                        component={Link}
                        href={sub.href}
                        onClick={closeMenu}
                        sx={{
                          borderRadius: "8px",
                          color: "#1E293B",
                          fontSize: "0.82rem",
                          fontWeight: 550,
                          py: 0.85,
                          px: 2,
                          mx: 0.5,
                          "&:hover": {
                            backgroundColor: "#FFFDF5",
                            color: "#D97706",
                          },
                        }}
                      >
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Box>
                </Box>
              );
            }

            return (
              <MenuItem
                key={`${child.href}-${child.label}`}
                component={Link}
                href={child.href || "#"}
                onClick={closeMenu}
                sx={{
                  borderRadius: "8px",
                  color: "#1E293B",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  py: 1,
                  px: 2,
                  mx: 0.5,
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
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: "85%", maxWidth: 360, backgroundColor: "#FFFFFF", p: 2.5 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.5 }}>
          <Typography sx={{ color: "#082B50", fontSize: "1rem", fontWeight: 900 }}>
            Vizianagaram Portal
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} size="small">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ mb: 2 }} />

        <Stack spacing={0.5}>
          {headerNavItems.map((item) => {
            const active = pathIsActive(pathname, item.href);
            return (
              <Box key={item.label}>
                <Button
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    color: active ? "#082B50 !important" : "#334155 !important",
                    backgroundColor: active ? "#F5B800 !important" : "transparent",
                    fontWeight: active ? 850 : 700,
                    fontSize: "0.85rem",
                    py: 1,
                    px: 1.5,
                    borderRadius: "10px",
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
                {item.children?.flatMap((child, cIdx) => {
                  if ("items" in child && child.items) {
                    return child.items.map((sub, sIdx) => (
                      <Button
                        key={`${item.label}-${child.label}-${sub.href}-${sIdx}`}
                        component={Link}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          color: "#64748B !important",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          py: 0.6,
                          pl: 3.5,
                          textTransform: "none",
                          "&:hover": { color: "#082B50 !important" },
                        }}
                      >
                        {sub.label}
                      </Button>
                    ));
                  }
                  if ("href" in child && child.href) {
                    return (
                      <Button
                        key={`${item.label}-${child.href}-${cIdx}`}
                        component={Link}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          color: "#64748B !important",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          py: 0.6,
                          pl: 3.5,
                          textTransform: "none",
                          "&:hover": { color: "#082B50 !important" },
                        }}
                      >
                        {child.label}
                      </Button>
                    );
                  }
                  return null;
                })}
              </Box>
            );
          })}
        </Stack>

        <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #E2E8F0" }}>
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
              borderRadius: "50px",
              py: 1,
              textTransform: "none",
            }}
          >
            Vizianagaram Map →
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
