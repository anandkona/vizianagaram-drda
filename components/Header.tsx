"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Popper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePortalUI } from "@/components/PortalUIContext";
import { navigation, siteConfig, type NavItem } from "@/src/data/district";

function pathIsActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  const pathOnly = href.split(/[?#]/)[0];
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

function navigationSlug(href: string) {
  return href.replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "") || "home";
}

function BrandIdentity({ compact = false }: { compact?: boolean }) {
  return (
    <Stack direction="row" alignItems="center" spacing={{ xs: 0.9, sm: 1.3 }} sx={{ minWidth: 0 }}>
      <Box
        sx={{
          alignItems: "center",
          background: "#FFFFFF",
          border: { xs: "2px solid rgba(255,255,255,0.95)", sm: "3px solid rgba(255,255,255,0.95)" },
          borderRadius: "50%",
          boxShadow: "0 7px 18px rgba(55,37,0,0.22)",
          display: "flex",
          flexShrink: 0,
          height: compact ? 42 : { xs: 46, sm: 54 },
          justifyContent: "center",
          overflow: "hidden",
          width: compact ? 42 : { xs: 46, sm: 54 },
        }}
      >
        <Box
          alt="Government of Andhra Pradesh emblem"
          component="img"
          src="/emblem-of-andhra-pradesh.jpg"
          sx={{ height: "100%", objectFit: "contain", width: "100%" }}
        />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography
          noWrap
          sx={{
            color: "#4F3900",
            fontSize: compact ? "0.50rem" : { xs: "0.48rem", sm: "0.58rem" },
            fontWeight: 800,
            letterSpacing: "0.07em",
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          Government of Andhra Pradesh
        </Typography>
        <Typography
          noWrap
          sx={{
            color: "#2F2308",
            fontSize: compact ? "0.85rem" : { xs: "0.80rem", sm: "1.05rem" },
            fontWeight: 900,
            letterSpacing: "0.02em",
            lineHeight: 1.2,
            mt: 0.25,
          }}
        >
          VIZIANAGARAM DISTRICT
        </Typography>
        <Typography
          noWrap
          sx={{
            color: "rgba(47,35,8,0.75)",
            display: compact ? "none" : { xs: "none", sm: "block" },
            fontSize: "0.60rem",
            fontWeight: 650,
            lineHeight: 1.25,
            mt: 0.2,
          }}
        >
          District Rural Development Agency (DRDA)
        </Typography>
      </Box>
    </Stack>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [menuItem, setMenuItem] = useState<NavItem | null>(null);

  // State for nested flyout
  const [nestedAnchor, setNestedAnchor] = useState<HTMLElement | null>(null);
  const [nestedItem, setNestedItem] = useState<any | null>(null);

  const closeTimer = useRef<number | null>(null);
  const nestedCloseTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const cancelNestedClose = () => {
    if (nestedCloseTimer.current !== null) {
      window.clearTimeout(nestedCloseTimer.current);
      nestedCloseTimer.current = null;
    }
  };

  const closeMenu = () => {
    cancelClose();
    cancelNestedClose();
    setMenuAnchor(null);
    setMenuItem(null);
    setNestedAnchor(null);
    setNestedItem(null);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setMenuAnchor(null);
      setMenuItem(null);
      setNestedAnchor(null);
      setNestedItem(null);
      closeTimer.current = null;
    }, 150);
  };

  const scheduleNestedClose = () => {
    cancelNestedClose();
    nestedCloseTimer.current = window.setTimeout(() => {
      setNestedAnchor(null);
      setNestedItem(null);
      nestedCloseTimer.current = null;
    }, 100);
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>, item: NavItem) => {
    cancelClose();
    cancelNestedClose();
    setMenuItem(item);
    setMenuAnchor(event.currentTarget);
    setNestedItem(null);
    setNestedAnchor(null);
  };

  const openNestedMenu = (event: React.MouseEvent<HTMLElement>, child: any) => {
    cancelClose();
    cancelNestedClose();
    if (child.children?.length) {
      setNestedItem(child);
      setNestedAnchor(event.currentTarget);
    } else {
      setNestedItem(null);
      setNestedAnchor(null);
    }
  };

  const toggleMenu = (event: React.MouseEvent<HTMLElement>, item: NavItem) => {
    if (menuItem?.href === item.href && menuAnchor) {
      closeMenu();
      return;
    }
    openMenu(event, item);
  };

  useEffect(() => {
    closeMenu();
    return () => cancelClose();
  }, [pathname]);

  return (
    <>
      <Box
        component="nav"
        aria-label="Primary navigation"
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={0}
          flexWrap="wrap"
          sx={{ minHeight: 50, overflow: "visible", width: "100%" }}
        >
          {navigation.map((item) => {
            const active = pathIsActive(pathname, item.href);
            const hasChildren = Boolean(item.children?.length);
            const menuOpen = menuItem?.href === item.href && Boolean(menuAnchor);

            if (hasChildren) {
              return (
                <Box
                  key={item.href}
                  onMouseEnter={(event) => openMenu(event, item)}
                  onMouseLeave={scheduleClose}
                  sx={{ alignItems: "center", display: "flex", height: 50 }}
                >
                  <Button
                    aria-current={active ? "page" : undefined}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: active ? "#2B2100" : "rgba(43,33,0,0.82)",
                      fontSize: "0.7rem",
                      fontWeight: active ? 850 : 700,
                      minHeight: 50,
                      minWidth: 0,
                      px: { lg: 0.65, xl: 0.75 },
                      position: "relative",
                      whiteSpace: "nowrap",
                      "&::after": {
                        background: "#FFC107",
                        borderRadius: 2,
                        bottom: 3,
                        content: '""',
                        height: 3,
                        left: 9,
                        position: "absolute",
                        right: 9,
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center",
                        transition: "transform 180ms ease",
                      },
                      "&:hover": {
                        background: "rgba(43,33,0,0.08)",
                        color: "#2B2100",
                        "&::after": { transform: "scaleX(1)" },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  <IconButton
                    aria-controls={menuOpen ? `submenu-${navigationSlug(item.href)}` : undefined}
                    aria-expanded={menuOpen}
                    aria-haspopup="menu"
                    aria-label={`${menuOpen ? "Close" : "Open"} ${item.label} submenu`}
                    id={`submenu-toggle-${navigationSlug(item.href)}`}
                    onClick={(event) => toggleMenu(event, item)}
                    size="small"
                    sx={{
                      color: active ? "#8A6500" : "rgba(43,33,0,0.68)",
                      height: 36,
                      ml: "-5px",
                      width: 30,
                      "&:hover": { background: "rgba(43,33,0,0.1)", color: "#8A6500" },
                    }}
                  >
                    <ExpandMoreRoundedIcon
                      sx={{
                        fontSize: 18,
                        transform: menuOpen ? "rotate(180deg)" : "none",
                        transition: "transform 180ms ease",
                      }}
                    />
                  </IconButton>
                </Box>
              );
            }

            return (
              <Button
                key={item.href}
                aria-current={active ? "page" : undefined}
                component={Link}
                href={item.href}
                sx={{
                  color: active ? "#2B2100" : "rgba(43,33,0,0.82)",
                  fontSize: "0.7rem",
                  fontWeight: active ? 850 : 700,
                  minHeight: 50,
                  minWidth: 0,
                  px: { lg: 0.65, xl: 0.75 },
                  position: "relative",
                  whiteSpace: "nowrap",
                  "&::after": {
                    background: "#FFC107",
                    borderRadius: 2,
                    bottom: 3,
                    content: '""',
                    height: 3,
                    left: 10,
                    position: "absolute",
                    right: 10,
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 180ms ease",
                  },
                  "&:hover": {
                    background: "rgba(43,33,0,0.08)",
                    color: "#2B2100",
                    "&::after": { transform: "scaleX(1)" },
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}

          {(() => {
            const isMartActive = pathIsActive(pathname, "/mart");
            return (
              <Button
                aria-current={isMartActive ? "page" : undefined}
                component={Link}
                href="/mart"
                startIcon={
                  <ShoppingBagOutlinedIcon
                    sx={{
                      color: "#FACC15 !important",
                      fontSize: "17px !important",
                      transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />
                }
                sx={{
                  alignItems: "center",
                  background: isMartActive
                    ? "linear-gradient(135deg, #111827 0%, #030712 100%)"
                    : "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
                  border: isMartActive
                    ? "1.5px solid #F59E0B"
                    : "1.5px solid rgba(245, 158, 11, 0.6)",
                  borderRadius: "9999px",
                  boxShadow: isMartActive
                    ? "0 0 0 2px rgba(245, 158, 11, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3)"
                    : "0 2px 8px rgba(17, 24, 39, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  color: "#FFFFFF !important",
                  flexShrink: 0,
                  fontSize: "0.75rem",
                  fontWeight: 750,
                  letterSpacing: "0.02em",
                  ml: "auto",
                  minHeight: 36,
                  px: { lg: 1.6, xl: 2 },
                  py: 0.5,
                  textTransform: "none",
                  transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    background: "linear-gradient(135deg, #030712 0%, #000000 100%)",
                    borderColor: "#FBBF24",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.35), 0 0 14px rgba(245, 158, 11, 0.35)",
                    color: "#FFFFFF !important",
                    transform: "translateY(-1px)",
                    "& .MuiButton-startIcon": {
                      transform: "scale(1.15) rotate(-6deg)",
                    },
                  },
                  "&:active": {
                    transform: "translateY(0)",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: "#FFFFFF !important",
                    fontSize: "0.75rem",
                    fontWeight: 750,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                  }}
                >
                  Vizianagaram Mart
                </Typography>
                <Box
                  component="span"
                  sx={{
                    bgcolor: "rgba(245, 158, 11, 0.2)",
                    border: "1px solid rgba(245, 158, 11, 0.5)",
                    borderRadius: "9999px",
                    color: "#FDE68A !important",
                    fontSize: "0.58rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    lineHeight: 1,
                    ml: 0.8,
                    px: 0.65,
                    py: 0.3,
                    textTransform: "uppercase",
                  }}
                >
                  DRDA
                </Box>
              </Button>
            );
          })()}
        </Stack>
      </Box>

      <Popper
        anchorEl={menuAnchor}
        modifiers={[{ options: { offset: [0, 6] } }]}
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
            border: "1px solid #E8D9B6",
            borderTop: "2px solid #D5A623",
            borderRadius: 0.25,
            boxShadow: "0 16px 38px rgba(39,33,22,0.18)",
            minWidth: 235,
            p: 0.7,
          }}
        >
          {menuItem?.children?.map((child) => {
            const hasSub = Boolean(child.children?.length);
            return (
              <MenuItem
                key={`${child.href}-${child.label}`}
                component={hasSub ? "div" : Link}
                href={hasSub ? undefined : child.href}
                onClick={hasSub ? undefined : closeMenu}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => openNestedMenu(e, child)}
                onMouseLeave={scheduleNestedClose}
                sx={{
                  borderRadius: 0.25,
                  color: "text.primary",
                  fontSize: "0.82rem",
                  gap: 0.8,
                  justifyContent: "space-between",
                  background: nestedItem === child ? "rgba(0,0,0,0.04)" : "transparent",
                }}
              >
                {child.label}
                {hasSub && <ExpandMoreRoundedIcon sx={{ fontSize: 16, transform: "rotate(-90deg)" }} />}
              </MenuItem>
            );
          })}
        </Box>
      </Popper>

      <Popper
        anchorEl={nestedAnchor}
        modifiers={[{ options: { offset: [5, -4] } }]}
        open={Boolean(nestedAnchor)}
        placement="right-start"
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
      >
        <Box
          onMouseEnter={() => { cancelClose(); cancelNestedClose(); }}
          onMouseLeave={scheduleClose}
          role="menu"
          sx={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8D9B6",
            borderTop: "2px solid #D5A623",
            borderRadius: 0.25,
            boxShadow: "0 16px 38px rgba(39,33,22,0.18)",
            minWidth: 220,
            p: 0.7,
          }}
        >
          {nestedItem?.children?.map((subChild: any) => (
            <MenuItem
              key={`${subChild.href}-${subChild.label}`}
              component={Link}
              href={subChild.href}
              onClick={closeMenu}
              sx={{ borderRadius: 0.25, color: "text.primary", fontSize: "0.82rem", gap: 0.8 }}
            >
              {subChild.label}
            </MenuItem>
          ))}
        </Box>
      </Popper>
    </>
  );
}

function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    onClose();
    setExpanded(null);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "#FFFBF2",
            width: { xs: "min(92vw, 390px)", sm: 390 },
          },
        },
      }}
    >
      <Box
        component="section"
        sx={{
          background: "#FFF9C4",
          borderBottom: "1px solid rgba(91,67,0,0.2)",
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <BrandIdentity compact />
          <IconButton aria-label="Close navigation" onClick={onClose}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
      </Box>

      <Box component="nav" aria-label="Mobile navigation" sx={{ flex: 1, overflowY: "auto", px: 1.4, py: 1.2 }}>
        {navigation.map((item) => {
          const active = pathIsActive(pathname, item.href);
          const hasChildren = Boolean(item.children?.length);
          const isExpanded = expanded === item.href;
          const slug = navigationSlug(item.href);
          const labelId = `mobile-nav-label-${slug}`;
          const panelId = `mobile-nav-panel-${slug}`;

          return (
            <Box key={item.href} sx={{ mb: 0.35 }}>
              <Stack direction="row" alignItems="stretch" sx={{ borderRadius: 2 }}>
                <Box
                  aria-current={active ? "page" : undefined}
                  component={Link}
                  href={item.href}
                  id={labelId}
                  onClick={onClose}
                  sx={{
                    alignItems: "center",
                    borderRadius: 2,
                    color: active ? "primary.dark" : "text.primary",
                    display: "flex",
                    flex: 1,
                    fontSize: "0.86rem",
                    fontWeight: active ? 850 : 700,
                    minWidth: 0,
                    px: 1.5,
                    py: 1.2,
                    "&:hover": { background: "rgba(255,193,7,0.14)" },
                    ...(active
                      ? {
                        background: "rgba(255,193,7,0.18)",
                        boxShadow: "inset 3px 0 0 #8A6500",
                      }
                      : {}),
                  }}
                >
                  <Box component="span" sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.label}
                  </Box>
                </Box>
                {hasChildren ? (
                  <IconButton
                    aria-controls={panelId}
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                    aria-labelledby={`${labelId} ${slug}-mobile-toggle`}
                    id={`${slug}-mobile-toggle`}
                    onClick={() => setExpanded(isExpanded ? null : item.href)}
                    sx={{
                      alignSelf: "stretch",
                      borderLeft: "1px solid",
                      borderColor: "divider",
                      borderRadius: 0,
                      color: "primary.main",
                      width: 46,
                    }}
                  >
                    <ExpandMoreRoundedIcon
                      sx={{
                        transform: isExpanded ? "rotate(180deg)" : "none",
                        transition: "transform 180ms ease",
                      }}
                    />
                  </IconButton>
                ) : null}
              </Stack>

              {hasChildren ? (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box
                    aria-labelledby={labelId}
                    id={panelId}
                    role="region"
                    sx={{ borderLeft: "2px solid #D5A623", ml: 2.2, mt: 0.3, pl: 0.8, pb: 0.7 }}
                  >
                    {item.children?.map((child) => {
                      const hasSub = Boolean(child.children?.length);
                      return (
                        <Box key={`${child.href}-${child.label}`}>
                          <Box
                            component={hasSub ? "div" : Link}
                            href={hasSub ? undefined : child.href}
                            onClick={hasSub ? undefined : onClose}
                            sx={{
                              alignItems: "center",
                              borderRadius: 1.5,
                              color: "text.secondary",
                              display: "flex",
                              fontSize: "0.78rem",
                              gap: 0.7,
                              minHeight: 38,
                              px: 1.1,
                              py: 0.7,
                              "&:hover": { background: "#FFF3C4", color: "text.primary" },
                            }}
                          >
                            {child.label}
                          </Box>
                          {hasSub && (
                            <Box sx={{ borderLeft: "2px solid rgba(213,166,35,0.4)", ml: 2, mt: 0.2, pl: 0.8, pb: 0.5 }}>
                              {child.children?.map((subChild: any) => (
                                <Box
                                  component={Link}
                                  href={subChild.href}
                                  key={`${subChild.href}-${subChild.label}`}
                                  onClick={onClose}
                                  sx={{
                                    alignItems: "center",
                                    borderRadius: 1.5,
                                    color: "text.secondary",
                                    display: "flex",
                                    fontSize: "0.75rem",
                                    gap: 0.7,
                                    minHeight: 34,
                                    px: 1.1,
                                    py: 0.5,
                                    "&:hover": { background: "#FFF3C4", color: "text.primary" },
                                  }}
                                >
                                  {subChild.label}
                                </Box>
                              ))}
                            </Box>
                          )}
                        </Box>
                      );
                    })}
                  </Box>
                </Collapse>
              ) : null}
            </Box>
          );
        })}

        <Divider sx={{ my: 1.5 }} />
        <Button
          component={Link}
          href="/mart"
          fullWidth
          onClick={onClose}
          startIcon={<ShoppingBagOutlinedIcon sx={{ color: "#FACC15 !important" }} />}
          sx={{
            background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
            border: "1.5px solid rgba(245, 158, 11, 0.6)",
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.16)",
            color: "#FFFFFF !important",
            fontSize: "0.85rem",
            fontWeight: 750,
            letterSpacing: "0.02em",
            mb: 1.2,
            px: 1.5,
            py: 1.1,
            textTransform: "none",
            transition: "all 0.2s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #030712 0%, #000000 100%)",
              borderColor: "#FBBF24",
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.25)",
              color: "#FFFFFF !important",
            },
          }}
        >
          <Box component="span" sx={{ color: "#FFFFFF !important", flex: 1, textAlign: "left" }}>
            Vizianagaram Mart
          </Box>
          <Box
            component="span"
            sx={{
              bgcolor: "rgba(245, 158, 11, 0.2)",
              border: "1px solid rgba(245, 158, 11, 0.5)",
              borderRadius: "9999px",
              color: "#FDE68A !important",
              fontSize: "0.58rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
              lineHeight: 1,
              px: 0.65,
              py: 0.3,
              textTransform: "uppercase",
            }}
          >
            DRDA
          </Box>
        </Button>
        <Button
          component={Link}
          href="/services"
          fullWidth
          onClick={onClose}
          startIcon={<PhoneInTalkRoundedIcon />}
          variant="outlined"
        >
          Citizen Help Center
        </Button>
      </Box>

      <Box sx={{ background: "#FFFFFF", borderTop: "1px solid", borderColor: "divider", p: 2 }}>
        <Typography sx={{ color: "text.secondary", fontSize: "0.74rem" }}>
          District office: {siteConfig.phone}
        </Typography>
        <Typography sx={{ color: "primary.main", fontSize: "0.74rem", fontWeight: 800, mt: 0.4 }}>
          IVRS / Helpline: {siteConfig.ivrs}
        </Typography>
      </Box>
    </Drawer>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, wishlistCount, openCart } = usePortalUI();

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
        background: "transparent",
        color: "inherit",
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Box sx={{ background: "#FFFDE7", borderBottom: "1px solid rgba(0,0,0,0.1)", color: "#423B00" }}>
        <Container maxWidth="lg">
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={0.6}
            sx={{ minHeight: { xs: 42, sm: 44 } }}
          >
            <Stack direction="row" alignItems="center" spacing={0.8} sx={{ display: { xs: "none", md: "flex" }, minWidth: 0 }}>
              <Box sx={{ background: "#FFC107", borderRadius: "50%", height: 7, width: 7 }} />
              <Typography noWrap sx={{ fontSize: "0.68rem", fontWeight: 650, opacity: 0.86 }}>
                APGOV · District Citizen Services Portal
              </Typography>
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
              spacing={{ xs: 0.15, sm: 0.5 }}
              sx={{ ml: "auto" }}
            >
              <Button
                component="a"
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                startIcon={<PhoneInTalkRoundedIcon sx={{ fontSize: "15px !important" }} />}
                sx={{
                  color: "#423B00",
                  fontSize: "0.66rem",
                  minHeight: 32,
                  minWidth: 34,
                  p: 0.45,
                  "&:hover": { background: "rgba(0,0,0,0.05)" },
                }}
              >
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  Office
                </Box>
              </Button>
              <Button
                component="a"
                href={`tel:${siteConfig.ivrs}`}
                sx={{
                  color: "#F57F17",
                  fontSize: "0.66rem",
                  fontWeight: 800,
                  minHeight: 32,
                  minWidth: 0,
                  p: 0.5,
                  "&:hover": { background: "rgba(0,0,0,0.05)" },
                }}
              >
                IVRS {siteConfig.ivrs}
              </Button>
              <LanguageSwitcher tone="light" variant="full" />
              <Tooltip title="Wishlist">
                <Badge
                  badgeContent={wishlistCount}
                  color="error"
                  max={99}
                  sx={{ "& .MuiBadge-badge": { border: "2px solid #FFF59D", fontSize: "0.56rem", minWidth: 17, right: 3, top: 3 } }}
                >
                  <IconButton
                    aria-label={`Open wishlist with ${wishlistCount} ${wishlistCount === 1 ? "item" : "items"}`}
                    component={Link}
                    href="/mart/wishlist"
                    size="small"
                    sx={{ color: "rgba(66,59,0,0.86)", height: 34, width: 34 }}
                  >
                    <FavoriteBorderRoundedIcon sx={{ fontSize: 19 }} />
                  </IconButton>
                </Badge>
              </Tooltip>
              <Badge
                badgeContent={cartCount}
                color="secondary"
                max={99}
                sx={{
                  "& .MuiBadge-badge": {
                    border: "2px solid #FFF59D",
                    color: "#2B2100",
                    fontSize: "0.58rem",
                    fontWeight: 850,
                    height: 18,
                    minWidth: 18,
                    right: 3,
                    top: 3,
                  },
                }}
              >
                <IconButton
                  aria-label={`Open cart with ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                  onClick={openCart}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(255,193,7,0.12)",
                    color: "#FFC107",
                    height: 34,
                    width: 36,
                    "&:hover": { backgroundColor: "rgba(255,193,7,0.22)" },
                  }}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Badge>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          background: "#FFFDE7",
          borderBottom: "1px solid rgba(91,67,0,0.22)",
          boxShadow: "0 3px 12px rgba(48,33,0,0.12)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 1, minHeight: { xs: 60, sm: 70 } }}>
            <Button
              aria-label="Vizianagaram District home"
              component={Link}
              href="/"
              onClick={() => setMobileOpen(false)}
              sx={{
                color: "inherit",
                flex: "1 1 auto",
                justifyContent: "flex-start",
                maxWidth: "calc(100% - 52px)",
                minWidth: 0,
                overflow: "hidden",
                p: 0,
                textAlign: "left",
                "&:hover": { background: "transparent" },
              }}
            >
              <BrandIdentity />
            </Button>
            <IconButton
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              sx={{
                background: "rgba(255,255,255,0.54)",
                color: "#3D2D08",
                display: { lg: "none" },
                flexShrink: 0,
                height: 44,
                width: 44,
                "&:hover": { background: "#FFFFFF" },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </Box>

      <Box
        sx={{
          background: "#FFFDE7",
          borderBottom: "3px solid #FFF59D",
          boxShadow: "0 5px 16px rgba(32,22,0,0.18)",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Container maxWidth="lg">
          <DesktopNav />
        </Container>
      </Box>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </AppBar>
  );
}
