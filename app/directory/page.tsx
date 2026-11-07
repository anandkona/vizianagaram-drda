"use client";

import React, { useState, useEffect, Suspense, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Breadcrumbs,
  Chip,
  TextField,
  Avatar,
  CircularProgress,
  Pagination,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { departments, hospitals, officers, Department, Hospital, Officer } from "@/src/data/district";

// Authentic 27 Mandals of Vizianagaram District
const DISTRICT_MANDALS_COUNT = 27;

function DirectoryContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab")?.toLowerCase();

  const [activeTab, setActiveTab] = useState<"officers" | "departments" | "hospitals">("officers");
  const [searchQuery, setSearchQuery] = useState("");
  const [deptPage, setDeptPage] = useState(1);
  const DEPT_PAGE_SIZE = 9;

  useEffect(() => {
    if (tabParam === "departments") {
      setActiveTab("departments");
    } else if (tabParam === "hospitals") {
      setActiveTab("hospitals");
    } else {
      setActiveTab("officers");
    }
  }, [tabParam]);

  useEffect(() => {
    setDeptPage(1);
  }, [searchQuery, activeTab]);

  const normalized = searchQuery.trim().toLowerCase();

  const filteredOfficers = useMemo(() => {
    return officers.filter((officer) =>
      `${officer.name} ${officer.designation} ${officer.department} ${officer.phone} ${officer.email}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);

  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) =>
      `${dept.name} ${dept.description} ${dept.services}`.toLowerCase().includes(normalized)
    );
  }, [normalized]);

  const totalDeptPages = Math.ceil(filteredDepartments.length / DEPT_PAGE_SIZE);
  const pagedDepartments = filteredDepartments.slice(
    (deptPage - 1) * DEPT_PAGE_SIZE,
    deptPage * DEPT_PAGE_SIZE
  );

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hosp) =>
      `${hosp.name} ${hosp.type} ${hosp.location} ${hosp.phone} ${hosp.services}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* 1. MASTER EDITORIAL HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 3, sm: 3.5, md: 4 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* Soft Gold Backdrop Blur Circle */}
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: { xs: "-10%", sm: "0%", md: "6%" },
            width: { xs: 320, sm: 420, md: 500 },
            height: { xs: 320, sm: 420, md: 500 },
            borderRadius: "50%",
            bgcolor: "#FEF08A",
            opacity: 0.65,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Traditional Temple Scripture Watermark Accent */}
        <Box
          sx={{
            position: "absolute",
            top: "14%",
            right: { xs: "28%", md: "38%", lg: "42%" },
            width: { xs: 180, sm: 240, md: 300 },
            height: { xs: 150, sm: 200, md: 240 },
            backgroundImage: "url('/images/temple-scripture-clean.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.22,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            aria-label="Breadcrumb navigation"
            separator="›"
            sx={{
              color: "#64748B",
              fontSize: "0.75rem",
              fontWeight: 650,
              mb: { xs: 1.2, sm: 1.5 },
              "& .MuiBreadcrumbs-separator": { color: "#CBD5E1", mx: 0.6 },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <HomeRoundedIcon sx={{ fontSize: 15, color: "#082B50" }} />
              <Link href="/" style={{ color: "#082B50", textDecoration: "none", fontWeight: 700 }}>
                Home
              </Link>
            </Stack>
            <Link href="/about/district" style={{ color: "#64748B", textDecoration: "none" }}>
              District Administration
            </Link>
            <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "0.75rem" }}>
              Official Contact Directory
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            {/* Left Column: Heading & Live Filter */}
            <Grid size={{ xs: 12, md: 6.5 }}>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.6,
                }}
              >
                OFFICIAL DISTRICT ADMINISTRATION TELE-DIRECTORY
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.75rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1,
                }}
              >
                District Contact Directory
              </Typography>

              <Typography
                sx={{
                  color: "#B45309",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  fontWeight: 700,
                  fontFamily: "var(--font-telugu), 'Gautami', 'Inter', sans-serif",
                  mb: 1.2,
                }}
              >
                విజయనగరం జిల్లా కలెక్టరేట్, DRDA అధికారులు, శాఖలు మరియు ప్రజా ఆరోగ్య కేంద్రాల డైరెక్టరీ
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  lineHeight: 1.55,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 2.2,
                }}
              >
                Official contact coordinates, landlines, and institutional emails for the District Collectorate, DRDA, Line Departments, Block Programme Managers, and Area Hospitals across all 27 Mandals.
              </Typography>

              {/* Compact Search Bar */}
              <Paper
                elevation={0}
                sx={{
                  p: "4px 10px",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 480,
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  borderRadius: 2.5,
                  boxShadow: "0 2px 6px rgba(8, 43, 80, 0.04)",
                  "&:focus-within": { borderColor: "#082B50" },
                }}
              >
                <SearchRoundedIcon sx={{ color: "#64748B", mr: 1, fontSize: 18 }} />
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder={
                    activeTab === "departments"
                      ? "Search department or public service..."
                      : activeTab === "hospitals"
                      ? "Search hospital, CHC, or location..."
                      : "Search by officer name, designation, or department..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "0.82rem", color: "#082B50", fontWeight: 550 },
                  }}
                />
                {searchQuery && (
                  <Button
                    size="small"
                    onClick={() => setSearchQuery("")}
                    sx={{ color: "#64748B", fontSize: "0.7rem", textTransform: "none", minWidth: 32, p: 0 }}
                  >
                    Clear
                  </Button>
                )}
              </Paper>
            </Grid>

            {/* Right Column: Hero Real Photography with Floating Official Badge */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 310, md: 360 },
                  borderRadius: { xs: "24px", sm: "32px", md: "38px" },
                  overflow: "hidden",
                  boxShadow: "0 14px 32px -8px rgba(8, 43, 80, 0.16)",
                  border: "4px solid #FFFFFF",
                  bgcolor: "#FEF9C3",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px -6px rgba(8, 43, 80, 0.22)",
                    "& .hero-photo": { transform: "scale(1.03)" },
                  },
                }}
              >
                <Image
                  src="/images/vizianagaram-administrative-headquarters.jpg"
                  alt="Vizianagaram Collectorate Administrative Headquarters"
                  fill
                  className="hero-photo"
                  priority
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(8, 43, 80, 0.05) 0%, rgba(8, 43, 80, 0.75) 100%)",
                  }}
                />

                {/* Floating Official Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    bgcolor: "rgba(8, 43, 80, 0.90)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "100px",
                    px: 2,
                    py: 0.7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ContactPhoneRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                    <Box>
                      <Typography sx={{ color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, lineHeight: 1.15 }}>
                        District Governance Exchange
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.65rem", fontWeight: 550 }}>
                        27 Mandals • 777 Sachivalayams
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label="Active EPABX"
                    size="small"
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50",
                      fontWeight: 800,
                      fontSize: "0.65rem",
                      height: 20,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. THREE KEY HELPLINES STRIP */}
      <Box sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", py: 1.5 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={1.5}>
            {[
              {
                phone: "08922-236966",
                title: "DRDA Main Office EPABX",
                hours: "Mon–Sat, 10:00 AM – 5:30 PM",
                badge: "Direct Administrative Line",
                color: "#15803D",
                bg: "#DCFCE7",
              },
              {
                phone: "1902",
                title: "Spandana / PGRS Citizen Desk",
                hours: "24/7 Toll-Free Citizen Grievance Support",
                badge: "Toll-Free 24x7",
                color: "#D97706",
                bg: "#FEF3C7",
              },
              {
                phone: "1800-425-0808",
                title: "Collectorate Citizen Advisory",
                hours: "Mon–Sat, 9:00 AM – 6:00 PM",
                badge: "Public Advisory Cell",
                color: "#1D4ED8",
                bg: "#EFF6FF",
              },
            ].map((item, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#082B50",
                      bgcolor: "#FFFFFF",
                      boxShadow: "0 4px 12px rgba(8, 43, 80, 0.06)",
                    },
                  }}
                >
                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.3 }}>
                      <Typography sx={{ color: "#082B50", fontSize: "0.98rem", fontWeight: 850 }}>
                        {item.phone}
                      </Typography>
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          bgcolor: item.bg,
                          color: item.color,
                          fontWeight: 800,
                          fontSize: "0.6rem",
                          height: 18,
                        }}
                      />
                    </Stack>
                    <Typography sx={{ color: "#334155", fontSize: "0.75rem", fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.68rem" }}>
                      {item.hours}
                    </Typography>
                  </Box>

                  <Button
                    component="a"
                    href={`tel:${item.phone.replace(/\D/g, "")}`}
                    size="small"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 13 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Call
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. STICKY TAB NAVIGATION BAR */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          py: 1,
          position: "sticky",
          top: 52,
          zIndex: 10,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack direction="row" spacing={1} alignItems="center">
            {[
              {
                id: "officers",
                label: "Officers Directory",
                count: officers.length,
                icon: <BadgeRoundedIcon sx={{ fontSize: 15 }} />,
              },
              {
                id: "departments",
                label: "Government Departments",
                count: departments.length,
                icon: <BusinessRoundedIcon sx={{ fontSize: 15 }} />,
              },
              {
                id: "hospitals",
                label: "Hospitals & Health Units",
                count: hospitals.length,
                icon: <LocalHospitalRoundedIcon sx={{ fontSize: 15 }} />,
              },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  startIcon={tab.icon}
                  sx={{
                    px: 1.8,
                    py: 0.5,
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: 750,
                    fontSize: "0.76rem",
                    whiteSpace: "nowrap",
                    bgcolor: isSelected ? "#082B50" : "#F8FAFC",
                    color: isSelected ? "#FFFFFF !important" : "#475569",
                    border: isSelected ? "1.5px solid #082B50" : "1.5px solid #E2E8F0",
                    boxShadow: isSelected ? "0 3px 8px rgba(8, 43, 80, 0.12)" : "none",
                    "&:hover": {
                      bgcolor: isSelected ? "#06203D" : "#F1F5F9",
                      borderColor: isSelected ? "#06203D" : "#CBD5E1",
                    },
                  }}
                >
                  {tab.label}
                  <Typography
                    component="span"
                    sx={{
                      ml: 0.6,
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      color: isSelected ? "#F5B800" : "#64748B",
                    }}
                  >
                    ({tab.count})
                  </Typography>
                </Button>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* 4. MAIN DIRECTORY LISTINGS (COMPACT 3-COLUMN CARDS) */}
      <Box sx={{ py: { xs: 3, sm: 3.5, md: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Section Heading */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={1}
            sx={{ mb: 2.2 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.3,
                }}
              >
                {activeTab === "departments"
                  ? "DISTRICT WIDE LINE DEPARTMENTS"
                  : activeTab === "hospitals"
                  ? "DISTRICT PUBLIC HEALTH INFRASTRUCTURE"
                  : "KEY ADMINISTRATIVE AUTHORITIES"}
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900 }}>
                {activeTab === "departments"
                  ? "Vizianagaram District Departments"
                  : activeTab === "hospitals"
                  ? "Government General Hospital & CHCs"
                  : "DRDA & District Officers Directory"}
                <Typography component="span" sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.92rem", ml: 1 }}>
                  ({activeTab === "departments"
                    ? filteredDepartments.length
                    : activeTab === "hospitals"
                    ? filteredHospitals.length
                    : filteredOfficers.length} Available)
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
              Collectorate Compound, Vizianagaram
            </Typography>
          </Stack>

          {/* TAB 1: OFFICERS DIRECTORY */}
          {activeTab === "officers" && (
            <Grid container spacing={2}>
              {filteredOfficers.map((person, idx) => (
                <Grid key={idx} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "14px",
                      p: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                        borderColor: "#082B50",
                      },
                    }}
                  >
                    <Box>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
                        <Avatar
                          sx={{
                            width: 42,
                            height: 42,
                            bgcolor: "#082B50",
                            color: "#F5B800",
                            fontWeight: 800,
                            fontSize: "0.88rem",
                            borderRadius: "10px",
                          }}
                        >
                          {person.initials}
                        </Avatar>

                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 850, lineHeight: 1.25 }}>
                            {person.name}
                          </Typography>
                          <Typography sx={{ color: "#D97706", fontSize: "0.74rem", fontWeight: 750, mt: 0.2 }}>
                            {person.designation}
                          </Typography>
                          <Chip
                            label={person.department}
                            size="small"
                            sx={{
                              bgcolor: "#F1F5F9",
                              color: "#475569",
                              fontWeight: 700,
                              fontSize: "0.62rem",
                              height: 18,
                              mt: 0.5,
                            }}
                          />
                        </Box>
                      </Stack>

                      <Stack spacing={0.8} sx={{ bgcolor: "#F8FAFC", p: 1.25, borderRadius: "8px", border: "1px solid #E2E8F0", mb: 1.5 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <PhoneRoundedIcon sx={{ fontSize: 13, color: "#082B50" }} />
                          <Typography
                            component="a"
                            href={`tel:${person.phone.replace(/\D/g, "")}`}
                            sx={{ color: "#082B50", fontSize: "0.75rem", fontWeight: 750, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                          >
                            {person.phone}
                          </Typography>
                        </Stack>

                        {person.email && (
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <MailRoundedIcon sx={{ fontSize: 13, color: "#082B50" }} />
                            <Typography
                              component="a"
                              href={`mailto:${person.email}`}
                              sx={{
                                color: "#475569",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                "&:hover": { color: "#082B50" },
                              }}
                            >
                              {person.email}
                            </Typography>
                          </Stack>
                        )}
                      </Stack>
                    </Box>

                    <Stack direction="row" spacing={1}>
                      <Button
                        component="a"
                        href={`tel:${person.phone.replace(/\D/g, "")}`}
                        fullWidth
                        size="small"
                        startIcon={<PhoneRoundedIcon sx={{ fontSize: 13 }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.5,
                          borderRadius: "6px",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Call Officer
                      </Button>

                      {person.email && (
                        <Button
                          component="a"
                          href={`mailto:${person.email}`}
                          size="small"
                          sx={{
                            minWidth: 36,
                            width: 36,
                            height: 30,
                            p: 0,
                            borderRadius: "6px",
                            border: "1px solid #CBD5E1",
                            color: "#082B50",
                            "&:hover": { bgcolor: "#F1F5F9" },
                          }}
                        >
                          <MailRoundedIcon sx={{ fontSize: 15 }} />
                        </Button>
                      )}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}

          {/* TAB 2: DEPARTMENTS DIRECTORY */}
          {activeTab === "departments" && (
            <Box>
              <Grid container spacing={2}>
                {pagedDepartments.map((dept, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        bgcolor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "14px",
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                          borderColor: "#082B50",
                        },
                      }}
                    >
                      <Box>
                        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1 }}>
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              bgcolor: "#FEF3C7",
                              color: "#92400E",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <BusinessRoundedIcon sx={{ fontSize: 18 }} />
                          </Box>
                          <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 850, lineHeight: 1.25 }}>
                            {dept.name}
                          </Typography>
                        </Stack>

                        <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1.5 }}>
                          {dept.description}
                        </Typography>
                      </Box>

                      <Box sx={{ pt: 1.2, borderTop: "1px solid #F1F5F9" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Chip
                            label={dept.services}
                            size="small"
                            sx={{
                              bgcolor: "#F8FAFC",
                              color: "#64748B",
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              height: 22,
                              maxWidth: "80%",
                            }}
                          />
                          <ArrowForwardRoundedIcon sx={{ fontSize: 15, color: "#94A3B8" }} />
                        </Stack>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {totalDeptPages > 1 && (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3.5 }}>
                  <Pagination
                    count={totalDeptPages}
                    page={deptPage}
                    onChange={(_, page) => {
                      setDeptPage(page);
                      window.scrollTo({ top: 320, behavior: "smooth" });
                    }}
                    sx={{
                      "& .MuiPaginationItem-root": { fontWeight: 700, fontSize: "0.82rem", borderRadius: "8px" },
                      "& .Mui-selected": { bgcolor: "#082B50 !important", color: "#FFFFFF" },
                    }}
                  />
                </Box>
              )}
            </Box>
          )}

          {/* TAB 3: HOSPITALS & HEALTH UNITS */}
          {activeTab === "hospitals" && (
            <Grid container spacing={2}>
              {filteredHospitals.map((hosp, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "14px",
                      p: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 20px -4px rgba(8, 43, 80, 0.08)",
                        borderColor: "#082B50",
                      },
                    }}
                  >
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.2 }}>
                        <Stack direction="row" spacing={1.25} alignItems="center">
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              bgcolor: "#EFF6FF",
                              color: "#1D4ED8",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <LocalHospitalRoundedIcon sx={{ fontSize: 18 }} />
                          </Box>
                          <Box>
                            <Typography sx={{ color: "#082B50", fontSize: "0.92rem", fontWeight: 850, lineHeight: 1.25 }}>
                              {hosp.name}
                            </Typography>
                            <Typography sx={{ color: "#D97706", fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase" }}>
                              {hosp.type}
                            </Typography>
                          </Box>
                        </Stack>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={0.6} sx={{ mb: 1 }}>
                        <LocationOnRoundedIcon sx={{ fontSize: 14, color: "#64748B" }} />
                        <Typography sx={{ color: "#64748B", fontSize: "0.74rem", fontWeight: 600 }}>
                          {hosp.location}
                        </Typography>
                      </Stack>

                      <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.45, mb: 1.5 }}>
                        {hosp.services}
                      </Typography>
                    </Box>

                    <Box sx={{ pt: 1.2, borderTop: "1px solid #F1F5F9" }}>
                      <Button
                        component="a"
                        href={`tel:${hosp.phone.replace(/\D/g, "")}`}
                        fullWidth
                        size="small"
                        startIcon={<PhoneRoundedIcon sx={{ fontSize: 13 }} />}
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF !important",
                          fontSize: "0.72rem",
                          fontWeight: 750,
                          py: 0.5,
                          borderRadius: "6px",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#06203D" },
                        }}
                      >
                        Emergency Call: {hosp.phone}
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Empty State */}
          {((activeTab === "officers" && filteredOfficers.length === 0) ||
            (activeTab === "departments" && filteredDepartments.length === 0) ||
            (activeTab === "hospitals" && filteredHospitals.length === 0)) && (
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "#FFFFFF",
                borderRadius: 3,
                border: "1px dashed #CBD5E1",
              }}
            >
              <Typography sx={{ color: "#082B50", fontWeight: 800, fontSize: "1rem", mb: 0.5 }}>
                No directory results found for &ldquo;{searchQuery}&rdquo;
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.8rem", mb: 2 }}>
                Try adjusting your search query or check spelling.
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setSearchQuery("")}
                sx={{
                  borderColor: "#082B50",
                  color: "#082B50",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              >
                Clear Search
              </Button>
            </Paper>
          )}
        </Container>
      </Box>

      {/* 5. BOTTOM REACH US CARD */}
      <Box sx={{ bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", py: { xs: 3.5, sm: 4 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: "16px",
              p: { xs: 2.2, sm: 3, md: 3.5 },
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 0.4,
                  }}
                >
                  DISTRICT ADMINISTRATION HEADQUARTERS
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: { xs: "1.15rem", sm: "1.35rem" }, fontWeight: 900, mb: 0.6 }}>
                  Office of the Collector & District Magistrate, Vizianagaram
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.5, maxWidth: 650 }}>
                  Collectorate Complex, Near Cantonment, Vizianagaram — 535003. Working Hours: Monday to Saturday, 10:00 AM – 5:30 PM (except second Saturday & public holidays).
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    component="a"
                    href="tel:08922236966"
                    variant="contained"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF !important",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.8,
                      px: 2,
                      borderRadius: 2,
                      textTransform: "none",
                      flex: 1,
                      "&:hover": { bgcolor: "#06203D" },
                    }}
                  >
                    Call: 08922-236966
                  </Button>

                  <Button
                    component="a"
                    href="mailto:collectorate.vzm@ap.gov.in"
                    variant="outlined"
                    startIcon={<MailRoundedIcon sx={{ fontSize: 14 }} />}
                    sx={{
                      borderColor: "#CBD5E1",
                      color: "#082B50",
                      fontWeight: 750,
                      fontSize: "0.76rem",
                      py: 0.8,
                      px: 2,
                      borderRadius: 2,
                      textTransform: "none",
                      flex: 1,
                      "&:hover": { borderColor: "#082B50", bgcolor: "#FFFFFF" },
                    }}
                  >
                    Email Collectorate
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense
      fallback={
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#F8FAFC" }}>
          <CircularProgress sx={{ color: "#082B50" }} />
        </Box>
      }
    >
      <DirectoryContent />
    </Suspense>
  );
}