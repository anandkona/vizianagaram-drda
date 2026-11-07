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
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

// Sub-item icons
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

type SubItem = {
  label: string;
  desc?: string;
  href: string;
  icon: any;
};

type MenuItemType = {
  label: string;
  href: string;
  icon: any;
  items?: SubItem[];
};

// Clean unified navigation items with icons & descriptions for modern card dropdowns
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
      {
        label: "District Profile",
        desc: "History, demographics, and geography",
        href: "/about/district",
        icon: PlaceRoundedIcon,
      },
      {
        label: "About DRDA",
        desc: "Vision, mission, and rural initiatives",
        href: "/about/drda",
        icon: CorporateFareRoundedIcon,
      },
      {
        label: "Organizational Structure",
        desc: "Department hierarchy and divisions",
        href: "/about/structure",
        icon: AccountTreeRoundedIcon,
      },
      {
        label: "Who's Who (Leadership)",
        desc: "District officers and governing body",
        href: "/about/whos-who",
        icon: PeopleRoundedIcon,
      },
      {
        label: "Contact Directory",
        desc: "Key helpline and office contacts",
        href: "/directory",
        icon: ContactPhoneRoundedIcon,
      },
    ],
  },
  {
    label: "Citizen Services",
    href: "/citizen-services",
    icon: HandshakeRoundedIcon,
    items: [
      {
        label: "All Citizen Services",
        desc: "Online portal and public utilities",
        href: "/citizen-services",
        icon: HandshakeRoundedIcon,
      },
      {
        label: "Share Concern (PGRS)",
        desc: "Public grievance redressal system",
        href: "/pgrs",
        icon: SupportAgentRoundedIcon,
      },
      {
        label: "Announcements & Updates",
        desc: "District circulars and notifications",
        href: "/announcements",
        icon: CampaignRoundedIcon,
      },
      {
        label: "Tenders & Quotations",
        desc: "Procurements, auctions, and bids",
        href: "/tenders",
        icon: DescriptionRoundedIcon,
      },
      {
        label: "Knowledge Center",
        desc: "Guides, reports, and manuals",
        href: "/knowledge-center",
        icon: SchoolRoundedIcon,
      },
      {
        label: "Events & Training",
        desc: "Capacity workshops and programs",
        href: "/events",
        icon: EventAvailableRoundedIcon,
      },
    ],
  },
  {
    label: "Schemes",
    href: "/schemes",
    icon: AccountBalanceRoundedIcon,
    items: [
      {
        label: "All Welfare Schemes",
        desc: "Central and AP state rural schemes",
        href: "/schemes",
        icon: AccountBalanceRoundedIcon,
      },
      {
        label: "Women & SHG Schemes",
        desc: "DWCRA self-help group funding",
        href: "/schemes/women",
        icon: FemaleRoundedIcon,
      },
      {
        label: "Farmers & Agriculture",
        desc: "Kisan credit, inputs, and subsidies",
        href: "/schemes/farmers",
        icon: AgricultureRoundedIcon,
      },
      {
        label: "Youth & Skill Development",
        desc: "Vocational training and placement",
        href: "/schemes/youth",
        icon: PsychologyRoundedIcon,
      },
      {
        label: "MSME & Entrepreneurs",
        desc: "Micro-business seed capital",
        href: "/schemes/entrepreneurs",
        icon: BusinessCenterRoundedIcon,
      },
      {
        label: "Tribal Welfare (ITDA)",
        desc: "Sub-plan schemes for agency areas",
        href: "/schemes/tribal",
        icon: Diversity1RoundedIcon,
      },
      {
        label: "Social Security Pensions",
        desc: "Old age, widow, and disability support",
        href: "/schemes/social",
        icon: VolunteerActivismRoundedIcon,
      },
    ],
  },
  {
    label: "Livelihoods",
    href: "/livelihoods",
    icon: WorkOutlineRoundedIcon,
    items: [
      {
        label: "Livelihood Programs",
        desc: "Rural livelihood action framework",
        href: "/livelihoods",
        icon: WorkOutlineRoundedIcon,
      },
      {
        label: "Women Entrepreneurship",
        desc: "SHG federations and micro-enterprises",
        href: "/women-entrepreneurship",
        icon: GroupsRoundedIcon,
      },
      {
        label: "FPOs Network",
        desc: "Farmer Producer Organizations",
        href: "/fpos",
        icon: HubRoundedIcon,
      },
      {
        label: "One Family One Entrepreneur",
        desc: "Household enterprise acceleration",
        href: "/one-family-one-entrepreneur",
        icon: LightbulbRoundedIcon,
      },
      {
        label: "Success Stories",
        desc: "Inspiring journeys from the district",
        href: "/success-stories",
        icon: EmojiEventsRoundedIcon,
      },
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
    }, 160);
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
        boxShadow: "0 2px 10px rgba(8, 43, 80, 0.05)",
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

      {/* 2. Unified Header Row: Logo + Clean Horizontal Menu + Action Button */}
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
          {/* Left: District Emblem & Name */}
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

          {/* Center: Clean Modern Desktop Navigation Items */}
          <Box
            component="nav"
            aria-label="Main Navigation"
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.6,
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
                            color: active || isMenuOpen ? "#082B50 !important" : "#94A3B8 !important",
                            transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                            ml: -0.4,
                          }}
                        />
                      ) : undefined
                    }
                    sx={{
                      color: active ? "#082B50 !important" : isMenuOpen ? "#082B50 !important" : "#475569 !important",
                      backgroundColor: active
                        ? "#F5B800 !important"
                        : isMenuOpen
                        ? "#F1F5F9 !important"
                        : "transparent",
                      fontWeight: active ? 850 : 650,
                      fontSize: "0.85rem",
                      py: 0.9,
                      px: 1.8,
                      borderRadius: "8px",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease",
                      boxShadow: active ? "0 2px 8px rgba(245, 184, 0, 0.35)" : "none",
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

          {/* Right Action: District Map & Mobile Toggle */}
          <Stack direction="row" alignItems="center" spacing={1.2}>
            <Button
              component={Link}
              href="/map"
              startIcon={<MapRoundedIcon sx={{ fontSize: "16px !important", color: "#FFFFFF !important" }} />}
              sx={{
                backgroundColor: "#082B50",
                color: "#FFFFFF !important",
                fontWeight: 800,
                fontSize: "0.8rem",
                px: 2,
                py: 0.85,
                borderRadius: "8px",
                textTransform: "none",
                display: { xs: "none", sm: "inline-flex" },
                boxShadow: "0 2px 8px rgba(8, 43, 80, 0.2)",
                transition: "all 0.15s ease",
                "&:hover": {
                  backgroundColor: "#0c3b6d",
                  transform: "translateY(-1px)",
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

      {/* 3. Modern Card Dropdowns with Mini-Icons & Descriptions */}
      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl && openMenu?.items)}
        placement="bottom-start"
        sx={{ zIndex: (theme) => theme.zIndex.modal + 30 }}
      >
        <Paper
          elevation={6}
          onMouseEnter={handleCancelClose}
          onMouseLeave={handleScheduleClose}
          sx={{
            mt: 1,
            width: 320,
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 18px 40px -8px rgba(8, 43, 80, 0.16)",
            p: 1.2,
          }}
        >
          <Box sx={{ px: 1, pb: 0.8, pt: 0.4 }}>
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", color: "#94A3B8", letterSpacing: "0.06em" }}>
              {openMenu?.label} Categories
            </Typography>
          </Box>
          <Stack spacing={0.4}>
            {openMenu?.items?.map((sub) => {
              const isSubActive = pathname === sub.href;
              const SubIcon = sub.icon;

              return (
                <MenuItem
                  key={sub.label}
                  component={Link}
                  href={sub.href}
                  onClick={handleImmediateClose}
                  sx={{
                    borderRadius: "10px",
                    p: 1,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    backgroundColor: isSubActive ? "#FFF9E6" : "transparent",
                    transition: "all 0.15s ease",
                    "&:hover": {
                      backgroundColor: "#F8FAFC",
                      "& .sub-title": { color: "#D97706" },
                      "& .sub-icon-box": { backgroundColor: "#FFF9E6", color: "#D97706" },
                    },
                  }}
                >
                  <Box
                    className="sub-icon-box"
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "8px",
                      backgroundColor: isSubActive ? "#FFF0C2" : "#F1F5F9",
                      color: isSubActive ? "#B45309" : "#64748B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.2,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <SubIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      className="sub-title"
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: isSubActive ? 800 : 700,
                        color: isSubActive ? "#082B50" : "#1E293B",
                        lineHeight: 1.25,
                        transition: "color 0.15s ease",
                      }}
                    >
                      {sub.label}
                    </Typography>
                    {sub.desc && (
                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          color: "#64748B",
                          lineHeight: 1.3,
                          mt: 0.2,
                        }}
                      >
                        {sub.desc}
                      </Typography>
                    )}
                  </Box>
                </MenuItem>
              );
            })}
          </Stack>
        </Paper>
      </Popper>

      {/* 4. Left-Sliding Mobile Drawer */}
      <Drawer
        anchor="left"
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
                      fontWeight: active ? 850 : 650,
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

              // Collapsible Group
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

                  {/* Sub-items */}
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box sx={{ py: 0.5, px: 1, backgroundColor: "#FAFCFF" }}>
                      {item.items?.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        const SubIcon = sub.icon;

                        return (
                          <Button
                            key={sub.label}
                            component={Link}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            fullWidth
                            startIcon={<SubIcon sx={{ fontSize: 17, color: isSubActive ? "#082B50" : "#94A3B8" }} />}
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
            startIcon={<MapRoundedIcon sx={{ color: "#FFFFFF !important" }} />}
            sx={{
              backgroundColor: "#082B50",
              color: "#FFFFFF !important",
              fontWeight: 800,
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
