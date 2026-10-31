"use client";

import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import Link from "next/link";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

export default function OrgStructurePage() {
  const dpmWings = [
    {
      title: "DPM — NRLM",
      subtitle: "Livelihoods & SHGs",
      role: "Micro-enterprises & financial linkage",
      tag: "LIVELIHOODS",
      icon: <TrendingUpRoundedIcon sx={{ fontSize: 18 }} />,
      accent: "#D97706",
      bg: "rgba(245, 158, 11, 0.1)",
    },
    {
      title: "DPM — Infrastructure",
      subtitle: "Community Assets",
      role: "Watershed & rural community halls",
      tag: "INFRASTRUCTURE",
      icon: <LocationCityRoundedIcon sx={{ fontSize: 18 }} />,
      accent: "#2563EB",
      bg: "rgba(37, 99, 235, 0.1)",
    },
    {
      title: "DPM — Skill Dev.",
      subtitle: "Youth Placements",
      role: "Vocational drives & DDU-GKY courses",
      tag: "SKILLS",
      icon: <SchoolRoundedIcon sx={{ fontSize: 18 }} />,
      accent: "#7C3AED",
      bg: "rgba(124, 58, 237, 0.1)",
    },
    {
      title: "Finance Officer",
      subtitle: "Accounts & Audit",
      role: "Fund audits & district disbursements",
      tag: "ACCOUNTS",
      icon: <MonetizationOnRoundedIcon sx={{ fontSize: 18 }} />,
      accent: "#059669",
      bg: "rgba(5, 150, 105, 0.1)",
    },
  ];

  const operationalPillars = [
    {
      title: "Executive Governance",
      badge: "DISTRICT OVERSIGHT",
      icon: <VerifiedUserRoundedIcon sx={{ fontSize: 20, color: "#D97706" }} />,
      desc: "Governed by a General Body headed by the District Collector with periodic statutory monitoring.",
    },
    {
      title: "Field Operations & Clusters",
      badge: "GRASSROOTS DELIVERY",
      icon: <HubRoundedIcon sx={{ fontSize: 20, color: "#2563EB" }} />,
      desc: "Block Programme Managers oversee 27 mandals, coordinating Cluster Coordinators (CCs) and village animators.",
    },
    {
      title: "Inter-Agency Convergence",
      badge: "CROSS-DEPARTMENT SYNERGY",
      icon: <BusinessRoundedIcon sx={{ fontSize: 20, color: "#059669" }} />,
      desc: "Synchronizes programs across Agriculture, Health, Tribal Welfare, and Panchayati Raj for seamless delivery.",
    },
  ];

  return (
    <>
      {/* Hero Banner (Matching standard portal PageIntro style & size) */}
      <Box
        component="section"
        sx={{
          background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
          color: "#1F1700",
          overflow: "hidden",
          position: "relative",
          py: { xs: 2, md: 2.5 },
        }}
      >
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs
            aria-label="Breadcrumb"
            separator="/"
            sx={{
              color: "rgba(43, 33, 0, 0.72)",
              fontSize: "0.8rem",
              fontWeight: 600,
              mb: 1,
              "& .MuiBreadcrumbs-ol": { flexWrap: "wrap" },
            }}
          >
            <Typography
              component={Link}
              href="/"
              sx={{ color: "inherit", textDecoration: "none", fontSize: "0.8rem", "&:hover": { color: "#FFD54F" } }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              href="/about"
              sx={{ color: "inherit", textDecoration: "none", fontSize: "0.8rem", "&:hover": { color: "#FFD54F" } }}
            >
              About Us
            </Typography>
            <Typography sx={{ color: "#1F1700", fontSize: "0.8rem", fontWeight: 700 }}>
              Organisational Structure
            </Typography>
          </Breadcrumbs>

          <Box sx={{ maxWidth: 760 }}>
            <Chip
              icon={<AccountTreeRoundedIcon sx={{ fontSize: "14px !important", color: "#8A6500 !important" }} />}
              label="ADMINISTRATIVE HIERARCHY"
              size="small"
              sx={{
                background: "#FFFDE7",
                border: "1px solid #FFE082",
                color: "#8A6500",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                mb: 1,
                textTransform: "uppercase",
              }}
            />
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "#1F1700",
                fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" },
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              Organisational Structure
            </Typography>
            <Typography
              sx={{
                color: "rgba(31, 23, 0, 0.88)",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                fontWeight: 500,
                lineHeight: 1.4,
                maxWidth: 650,
              }}
            >
              The administrative chain of command, divisional oversight, and institutional operational framework of the District Rural Development Agency (DRDA), Vizianagaram.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Structure Hierarchy Canvas - Compact & Well-proportioned */}
      <Box
        component="section"
        sx={{
          background: "#F8FAFC",
          py: { xs: 3, sm: 4, md: 4.5 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 2.5, md: 3 }, textAlign: "center" }}>
            <Box
              sx={{
                background: "#FEF9C3",
                border: "1px solid #FEF08A",
                borderRadius: "20px",
                color: "#CA8A04",
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                mb: 0.8,
                px: 1.5,
                py: 0.35,
                textTransform: "uppercase",
              }}
            >
              Administrative Hierarchy
            </Box>
            <Typography
              component="h2"
              sx={{
                color: "#0F172A",
                fontSize: { xs: "1.45rem", sm: "1.75rem", md: "1.95rem" },
                fontWeight: 850,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              DRDA Operational Hierarchy
            </Typography>
            <Typography
              sx={{
                color: "#64748B",
                fontSize: "0.84rem",
                fontWeight: 500,
                maxWidth: 580,
                mt: 0.6,
                mx: "auto",
              }}
            >
              Clear chain of command from District Executive Leadership to Mandal and Village units.
            </Typography>
            <Box sx={{ bgcolor: "#FFC107", borderRadius: 2, height: 3, mt: 1.2, mx: "auto", width: 44 }} />
          </Box>

          {/* HIERARCHY FLOW */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 900, mx: "auto" }}>
            
            {/* LEVEL 1: Project Director (Compact Card) */}
            <Box
              sx={{
                background: "#0F172A",
                border: "1px solid #1E293B",
                borderRadius: "14px",
                boxShadow: "0 10px 24px -4px rgba(15, 23, 42, 0.22)",
                color: "#FFFFFF",
                maxWidth: 340,
                px: 2.2,
                py: 1.6,
                position: "relative",
                textAlign: "center",
                transition: "all 0.25s ease",
                width: "100%",
                "&:hover": {
                  boxShadow: "0 14px 28px -4px rgba(15, 23, 42, 0.3)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Chip
                label="LEVEL 1 • HEAD OF AGENCY"
                size="small"
                sx={{
                  background: "rgba(255, 193, 7, 0.15)",
                  border: "1px solid rgba(255, 193, 7, 0.3)",
                  color: "#FFC107",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  height: 22,
                  letterSpacing: "0.05em",
                  mb: 0.8,
                }}
              />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.08rem",
                  fontWeight: 900,
                  letterSpacing: "-0.01em",
                }}
              >
                Project Director (PD)
              </Typography>
              <Typography sx={{ color: "#FDE68A", fontSize: "0.78rem", fontWeight: 750, mt: 0.2 }}>
                DRDA Vizianagaram
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.7rem", mt: 0.4 }}>
                Statutory reporting to <strong>District Collector & Magistrate</strong>
              </Typography>
            </Box>

            {/* Connecting Stem 1 */}
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
              <Box sx={{ background: "#FFC107", borderRadius: "50%", boxShadow: "0 0 0 3px rgba(255, 193, 7, 0.2)", height: 8, width: 8 }} />
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
            </Box>

            {/* LEVEL 2: Additional PD (Compact Card) */}
            <Box
              sx={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",
                maxWidth: 320,
                px: 2,
                py: 1.5,
                position: "relative",
                textAlign: "center",
                transition: "all 0.25s ease",
                width: "100%",
                "&:hover": {
                  borderColor: "#FFC107",
                  boxShadow: "0 10px 20px -3px rgba(0, 0, 0, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Chip
                label="LEVEL 2 • PROGRAM OPERATIONS"
                size="small"
                sx={{
                  background: "#FEF9C3",
                  border: "1px solid #FEF08A",
                  color: "#CA8A04",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  height: 22,
                  letterSpacing: "0.05em",
                  mb: 0.6,
                }}
              />
              <Typography sx={{ color: "#0F172A", fontSize: "0.98rem", fontWeight: 850 }}>
                Additional Project Director (APD)
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600, mt: 0.2 }}>
                Program Execution & Mandal Coordination
              </Typography>
            </Box>

            {/* Connecting Fork Stem */}
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", width: "100%" }}>
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
              <Box sx={{ background: "#FFC107", borderRadius: "50%", boxShadow: "0 0 0 3px rgba(255, 193, 7, 0.2)", height: 8, width: 8 }} />
              <Box sx={{ background: "#CBD5E1", height: 14, width: 2 }} />

              {/* Horizontal Trunk Line */}
              <Box
                sx={{
                  background: { xs: "transparent", md: "#CBD5E1" },
                  height: 2,
                  position: "relative",
                  width: { xs: "0%", md: "75%" },
                }}
              >
                <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", inset: 0 }}>
                  <Box sx={{ background: "#CBD5E1", height: 14, position: "absolute", left: "0%", top: 0, width: 2 }} />
                  <Box sx={{ background: "#CBD5E1", height: 14, position: "absolute", left: "33.3%", top: 0, width: 2 }} />
                  <Box sx={{ background: "#CBD5E1", height: 14, position: "absolute", left: "66.6%", top: 0, width: 2 }} />
                  <Box sx={{ background: "#CBD5E1", height: 14, position: "absolute", right: "0%", top: 0, width: 2 }} />
                </Box>
              </Box>
            </Box>

            {/* LEVEL 3: 4 DPM Departmental Wings (Compact Size) */}
            <Box sx={{ pt: { xs: 1, md: 1.8 }, width: "100%" }}>
              <Box
                sx={{
                  display: "grid",
                  gap: 1.5,
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                }}
              >
                {dpmWings.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "14px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                      p: 1.6,
                      position: "relative",
                      transition: "all 0.22s ease",
                      "&:hover": {
                        borderColor: item.accent,
                        boxShadow: `0 8px 18px -4px ${item.accent}30`,
                        transform: "translateY(-3px)",
                        "& .wing-icon-box": {
                          background: item.accent,
                          color: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <Box>
                      <Box
                        className="wing-icon-box"
                        sx={{
                          alignItems: "center",
                          background: item.bg,
                          borderRadius: "10px",
                          color: item.accent,
                          display: "flex",
                          height: 34,
                          justifyContent: "center",
                          mb: 1,
                          transition: "all 0.2s ease",
                          width: 34,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ color: "#0F172A", fontSize: "0.88rem", fontWeight: 800 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: item.accent, fontSize: "0.72rem", fontWeight: 700, mt: 0.2 }}>
                        {item.subtitle}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.68rem", lineHeight: 1.35, mt: 0.5 }}>
                        {item.role}
                      </Typography>
                    </Box>

                    <Box sx={{ borderTop: "1px solid #F1F5F9", mt: 1.2, pt: 0.8 }}>
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          background: item.bg,
                          color: item.accent,
                          fontSize: "0.58rem",
                          fontWeight: 800,
                          height: 20,
                          letterSpacing: "0.04em",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Connecting Stem to Field Level */}
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", my: 1.2 }}>
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
              <Box sx={{ background: "#FFC107", borderRadius: "50%", boxShadow: "0 0 0 3px rgba(255, 193, 7, 0.2)", height: 8, width: 8 }} />
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
            </Box>

            {/* LEVEL 4: Mandal & Cluster Field Executives (Compact) */}
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "grid",
                  gap: 1.5,
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                }}
              >
                {/* 27 BPMs */}
                <Box
                  sx={{
                    alignItems: "center",
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.03)",
                    display: "flex",
                    gap: 1.6,
                    p: 1.8,
                    transition: "all 0.22s ease",
                    "&:hover": {
                      borderColor: "#FFC107",
                      boxShadow: "0 8px 18px -4px rgba(0, 0, 0, 0.07)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      background: "#FEF9C3",
                      border: "1px solid #FEF08A",
                      borderRadius: "10px",
                      color: "#CA8A04",
                      display: "flex",
                      flexShrink: 0,
                      fontSize: "1.25rem",
                      fontWeight: 900,
                      height: 48,
                      justifyContent: "center",
                      minWidth: 52,
                      px: 0.8,
                    }}
                  >
                    27
                  </Box>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Chip
                      label="MANDAL TIER"
                      size="small"
                      sx={{
                        background: "#F1F5F9",
                        color: "#475569",
                        fontSize: "0.58rem",
                        fontWeight: 800,
                        height: 18,
                        mb: 0.3,
                      }}
                    />
                    <Typography sx={{ color: "#0F172A", fontSize: "0.9rem", fontWeight: 800 }}>
                      Block Programme Managers (BPMs)
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.72rem", mt: 0.2, lineHeight: 1.35 }}>
                      27 rural mandals oversight & inter-departmental convergence.
                    </Typography>
                  </Box>
                </Box>

                {/* 200+ Cluster Coordinators */}
                <Box
                  sx={{
                    alignItems: "center",
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.03)",
                    display: "flex",
                    gap: 1.6,
                    p: 1.8,
                    transition: "all 0.22s ease",
                    "&:hover": {
                      borderColor: "#FFC107",
                      boxShadow: "0 8px 18px -4px rgba(0, 0, 0, 0.07)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      background: "#EEF2FF",
                      border: "1px solid #C7D2FE",
                      borderRadius: "10px",
                      color: "#4338CA",
                      display: "flex",
                      flexShrink: 0,
                      fontSize: "1.05rem",
                      fontWeight: 900,
                      height: 48,
                      justifyContent: "center",
                      letterSpacing: "-0.02em",
                      minWidth: 54,
                      px: 0.8,
                      whiteSpace: "nowrap",
                    }}
                  >
                    200+
                  </Box>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Chip
                      label="CLUSTER TIER"
                      size="small"
                      sx={{
                        background: "#F1F5F9",
                        color: "#475569",
                        fontSize: "0.58rem",
                        fontWeight: 800,
                        height: 18,
                        mb: 0.3,
                      }}
                    />
                    <Typography sx={{ color: "#0F172A", fontSize: "0.9rem", fontWeight: 800 }}>
                      Cluster Coordinators (CCs)
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.72rem", mt: 0.2, lineHeight: 1.35 }}>
                      Village Organisations (VOs), Community Resource Persons & SHGs.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Connecting Stem to Grassroots */}
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", my: 1.2 }}>
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
              <Box sx={{ background: "#FFC107", borderRadius: "50%", boxShadow: "0 0 0 3px rgba(255, 193, 7, 0.2)", height: 8, width: 8 }} />
              <Box sx={{ background: "#CBD5E1", height: 16, width: 2 }} />
            </Box>

            {/* LEVEL 5: Grassroots Community Base (Compact) */}
            <Box
              sx={{
                background: "#FFFFFF",
                border: "1px solid #BBF7D0",
                borderRadius: "14px",
                boxShadow: "0 3px 12px rgba(0, 0, 0, 0.03)",
                px: { xs: 2, sm: 2.5 },
                py: 1.5,
                textAlign: "center",
                transition: "all 0.22s ease",
                width: "100%",
                "&:hover": {
                  borderColor: "#10B981",
                  boxShadow: "0 8px 18px -4px rgba(16, 185, 129, 0.15)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Chip
                label="LEVEL 5 • GRASSROOTS INSTITUTIONS"
                size="small"
                sx={{
                  background: "#DCFCE7",
                  border: "1px solid #BBF7D0",
                  color: "#15803D",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  height: 20,
                  letterSpacing: "0.05em",
                  mb: 0.6,
                }}
              />
              <Typography sx={{ color: "#0F172A", fontSize: { xs: "0.92rem", sm: "1.02rem" }, fontWeight: 850 }}>
                Self-Help Groups (SHGs) • Village Organisations (VOs) • Resource Persons (CRPs)
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 0.6, sm: 2 }}
                sx={{ color: "#475569", fontSize: "0.75rem", fontWeight: 600, mt: 0.4 }}
              >
                <span>982 Revenue Villages</span>
                <span>•</span>
                <span>32,450+ Active SHGs</span>
                <span>•</span>
                <span>Frontline Community Welfare Delivery</span>
              </Stack>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* Operational Pillars (Compact Sizing) */}
      <Box
        component="section"
        sx={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          borderTop: "1px solid #E2E8F0",
          py: { xs: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            }}
          >
            {operationalPillars.map((card, idx) => (
              <Box
                key={idx}
                sx={{
                  background: "#FAFAFA",
                  border: "1px solid #E2E8F0",
                  borderRadius: "14px",
                  p: 2.2,
                  transition: "all 0.22s ease",
                  "&:hover": {
                    background: "#FFFFFF",
                    borderColor: "#FFC107",
                    boxShadow: "0 8px 18px -4px rgba(0, 0, 0, 0.06)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.2 }}>
                  <Box
                    sx={{
                      alignItems: "center",
                      background: "#FEF9C3",
                      border: "1px solid #FEF08A",
                      borderRadius: "10px",
                      display: "flex",
                      height: 38,
                      justifyContent: "center",
                      width: 38,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Chip
                    label={card.badge}
                    size="small"
                    sx={{
                      background: "rgba(255, 193, 7, 0.14)",
                      color: "#A16207",
                      fontSize: "0.58rem",
                      fontWeight: 800,
                      height: 20,
                    }}
                  />
                </Stack>
                <Typography sx={{ color: "#0F172A", fontSize: "0.98rem", fontWeight: 800, mb: 0.5 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5 }}>
                  {card.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Navigation Quick Links (Compact & Polished) */}
      <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 3, sm: 3.5 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "SERP Corner", href: "/serp" },
            ].map((link, idx) => (
              <Button
                key={idx}
                component={Link}
                href={link.href}
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "14px !important" }} />}
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #FFC107",
                  borderRadius: "100px",
                  color: "#1F1700",
                  fontSize: "0.78rem",
                  fontWeight: 750,
                  px: 2.4,
                  py: 0.75,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "#FFC107",
                    color: "#181102",
                    transform: "translateY(-1px)",
                  },
                }}
                variant="outlined"
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
