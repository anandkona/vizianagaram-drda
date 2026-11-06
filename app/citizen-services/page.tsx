"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";

export default function CitizenServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      id: "explore-schemes",
      title: "Explore Schemes",
      desc: "Browse 100+ government welfare schemes across women, farmers, youth, entrepreneurs, and social-security categories.",
      href: "/schemes",
      img: "/images/vizianagaram-administrative-headquarters.jpg",
      badge: "100+ Schemes",
      badgeBg: "#EFF6FF",
      badgeColor: "#1D4ED8",
      icon: AccountBalanceRoundedIcon,
      accentColor: "#082B50",
      ctaText: "Explore Schemes",
    },
    {
      id: "knowledge-center",
      title: "Knowledge Center",
      desc: "Practical guides and best practices on agriculture, entrepreneurship, financial literacy, and government schemes.",
      href: "/knowledge-center",
      img: "/images/service-learning.jpg",
      badge: "Guides",
      badgeBg: "#F0FDF4",
      badgeColor: "#15803D",
      icon: MenuBookRoundedIcon,
      accentColor: "#059669",
      ctaText: "Access Guides",
    },
    {
      id: "events-training",
      title: "Events & Training",
      desc: "Upcoming skill-development programs, workshops, job melas, and training calendars across the district. Register and upskill.",
      href: "/events",
      img: "/images/maharaja-college.jpg",
      badge: "Enroll Now",
      badgeBg: "#FEF3C7",
      badgeColor: "#B45309",
      icon: EventAvailableRoundedIcon,
      accentColor: "#D97706",
      ctaText: "View Events",
    },
    {
      id: "share-concern-pgrs",
      title: "Share Your Concern (PGRS)",
      desc: "Have a problem or a suggestion? Tell us your issue and our team will personally contact and support you.",
      href: "/pgrs",
      img: "/images/service-concern.jpg",
      badge: "24/7 Redressal",
      badgeBg: "#EEF2FF",
      badgeColor: "#4338CA",
      icon: SupportAgentRoundedIcon,
      accentColor: "#2563EB",
      ctaText: "File Grievance",
    },
    {
      id: "ivrs-services",
      title: "IVRS Services (1902)",
      desc: "Call-based citizen services available round the clock in Telugu and English — scheme info, application guidance, and more.",
      href: "/ivrs",
      img: "/images/vzm-collectorate-gathering-official.jpg",
      badge: "Free • 1902",
      badgeBg: "#FAF5FF",
      badgeColor: "#7E22CE",
      icon: PhoneInTalkRoundedIcon,
      accentColor: "#7C3AED",
      ctaText: "Explore IVRS",
    },
    {
      id: "feedback",
      title: "Feedback",
      desc: "Rate our services and share suggestions. Your feedback helps DRDA improve citizen service delivery across Vizianagaram.",
      href: "/feedback",
      img: "/images/drda-women-shg.jpg",
      badge: "4.8★ Rated",
      badgeBg: "#FDF2F8",
      badgeColor: "#BE185D",
      icon: RateReviewRoundedIcon,
      accentColor: "#DB2777",
      ctaText: "Give Feedback",
    },
    {
      id: "contact-directory",
      title: "Contact Directory",
      desc: "Find phone numbers, emails and office locations for DRDA officers and block programme managers across all 27 mandals.",
      href: "/directory",
      img: "/images/vizianagaram-administrative-headquarters.jpg",
      badge: "27 Mandals",
      badgeBg: "#FFFBEB",
      badgeColor: "#92400E",
      icon: ContactPhoneRoundedIcon,
      accentColor: "#082B50",
      ctaText: "Open Directory",
    },
  ];

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return services;
    const query = searchQuery.toLowerCase();
    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.desc.toLowerCase().includes(query) ||
        s.badge.toLowerCase().includes(query)
    );
  }, [searchQuery, services]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", color: "#1E293B" }}>
      {/* 2. PREMIUM HERO SECTION */}
      <Box
        component="section"
        sx={{
          bgcolor: "#F8FAFC",
          background: "linear-gradient(135deg, #FFFFFF 0%, #EDF5FC 60%, #E2EDF8 100%)",
          borderBottom: "1px solid #E2E8F0",
          py: { xs: 4, sm: 5, md: 6 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative background circles */}
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 184, 0, 0.12) 0%, rgba(245, 184, 0, 0) 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: "20%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(8, 43, 80, 0.05) 0%, rgba(8, 43, 80, 0) 70%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 3.5, md: 5 }} alignItems="center">
            {/* Left Column: 55% */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box>
                {/* Yellow pill */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    bgcolor: "#FEF3C7",
                    color: "#92400E",
                    px: 1.75,
                    py: 0.5,
                    borderRadius: "100px",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    border: "1px solid rgba(245, 184, 0, 0.4)",
                    mb: 2,
                  }}
                >
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#D97706" }} />
                  Citizen Services Portal
                </Box>

                {/* Main Heading */}
                <Typography
                  component="h1"
                  sx={{
                    color: "#082B50",
                    fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                    fontWeight: 900,
                    lineHeight: { xs: 1.15, md: 1.12 },
                    letterSpacing: "-0.03em",
                    mb: 2,
                  }}
                >
                  All Citizen Services in{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#082B50",
                      position: "relative",
                      whiteSpace: "nowrap",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: 0,
                        width: "100%",
                        height: 6,
                        bgcolor: "rgba(245, 184, 0, 0.45)",
                        borderRadius: "3px",
                        zIndex: -1,
                      },
                    }}
                  >
                    One Place
                  </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                    lineHeight: 1.6,
                    maxWidth: 620,
                    mb: 3.5,
                    fontWeight: 500,
                  }}
                >
                  Everything you need from Vizianagaram District Administration &amp; DRDA — schemes, knowledge,
                  trainings, grievance support, helplines, and more. Available 24/7, in Telugu and English.
                </Typography>

                {/* Action Buttons */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    component="a"
                    href="#services-grid"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "#082B50",
                      color: "#FFFFFF",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.25,
                      fontSize: "0.88rem",
                      fontWeight: 800,
                      textTransform: "none",
                      boxShadow: "0 6px 20px rgba(8, 43, 80, 0.25)",
                      "&:hover": { bgcolor: "#051A30", transform: "translateY(-2px)" },
                      transition: "all 0.2s ease",
                    }}
                  >
                    Explore Services
                  </Button>
                  <Button
                    component="a"
                    href="#helpline-cta"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "#FFFFFF",
                      color: "#082B50",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.25,
                      fontSize: "0.88rem",
                      fontWeight: 750,
                      textTransform: "none",
                      border: "1.5px solid #CBD5E1",
                      "&:hover": { bgcolor: "#F8FAFC", borderColor: "#082B50" },
                      transition: "all 0.2s ease",
                    }}
                  >
                    Contact Support
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Right Column: 45% (Hero Image) */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: "relative" }}>
                {/* Decorative border frame */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "28px",
                    border: "2px dashed rgba(245, 184, 0, 0.45)",
                    pointerEvents: "none",
                    display: { xs: "none", sm: "block" },
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 240, sm: 300, md: 340 },
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 20px 45px rgba(8, 43, 80, 0.15)",
                    border: "4px solid #FFFFFF",
                    bgcolor: "#F1F5F9",
                  }}
                >
                  <Image
                    src="/images/hero-rural-community.jpg"
                    alt="Citizen services and community support in Vizianagaram"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  />

                  {/* Floating Trust Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      bgcolor: "rgba(8, 43, 80, 0.94)",
                      backdropFilter: "blur(8px)",
                      color: "#FFFFFF",
                      borderRadius: "14px",
                      px: 2,
                      py: 1,
                      border: "1px solid rgba(245, 184, 0, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25,
                      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                    }}
                  >
                    <CheckCircleRoundedIcon sx={{ color: "#F5B800", fontSize: 20 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: "0.8rem", color: "#FFFFFF", lineHeight: 1.2 }}>
                        Verified District Portal
                      </Typography>
                      <Typography sx={{ color: "#FDE68A", fontSize: "0.68rem", fontWeight: 600 }}>
                        24/7 Citizen Assistance
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. SERVICE INTRODUCTION & SEARCH */}
      <Box id="services-grid" sx={{ pt: { xs: 4, sm: 5, md: 6 }, pb: 2 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", maxWidth: 680, mx: "auto", mb: { xs: 3, sm: 4 } }}>
            {/* Small pill */}
            <Box
              sx={{
                display: "inline-block",
                bgcolor: "#FEF3C7",
                color: "#92400E",
                fontSize: "0.72rem",
                fontWeight: 800,
                px: 2,
                py: 0.5,
                borderRadius: "100px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                mb: 1.5,
                border: "1px solid rgba(245, 184, 0, 0.4)",
              }}
            >
              Choose a Service
            </Box>

            {/* Heading */}
            <Typography
              component="h2"
              sx={{
                fontWeight: 900,
                color: "#082B50",
                fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.4rem" },
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              How Can We Help You Today?
            </Typography>

            {/* Subtitle */}
            <Typography sx={{ color: "#64748B", fontSize: { xs: "0.95rem", sm: "1.02rem" }, fontWeight: 500 }}>
              Tap any service to get started.
            </Typography>

            {/* Golden Divider */}
            <Box sx={{ mt: 1.5, mx: "auto", width: 48, height: 3.5, bgcolor: "#F5B800", borderRadius: 2 }} />

            {/* Optional Fast Search Filter */}
            <Box sx={{ mt: 3, maxWidth: 440, mx: "auto" }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search citizen services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRoundedIcon sx={{ color: "#94A3B8", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: "100px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "100px",
                    "& fieldset": { borderColor: "#E2E8F0" },
                    "&:hover fieldset": { borderColor: "#CBD5E1" },
                    "&.Mui-focused fieldset": { borderColor: "#082B50", borderWidth: 1.5 },
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 4. BALANCED 3-COLUMN SERVICE CATEGORY GRID */}
      <Box sx={{ pb: { xs: 5, sm: 6, md: 7 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                  <Box
                    component={Link}
                    href={service.href}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      bgcolor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 4px 18px rgba(8, 43, 80, 0.05)",
                      overflow: "hidden",
                      textDecoration: "none",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 14px 32px rgba(8, 43, 80, 0.12)",
                        borderColor: "#F5B800",
                        "& .service-img": { transform: "scale(1.04)" },
                        "& .service-arrow": { transform: "translateX(4px)" },
                        "& .service-open-btn": { color: "#082B50", fontWeight: 800 },
                      },
                    }}
                  >
                    {/* Top Image + Floating Badge */}
                    <Box sx={{ position: "relative", height: { xs: 160, sm: 180, md: 190 }, overflow: "hidden", bgcolor: "#E2E8F0" }}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="service-img"
                        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(8, 43, 80, 0.4) 0%, rgba(0,0,0,0) 60%)",
                        }}
                      />

                      {/* Top-Right Floating Pill Badge */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 14,
                          right: 14,
                          bgcolor: "rgba(255, 255, 255, 0.96)",
                          backdropFilter: "blur(6px)",
                          color: service.badgeColor,
                          border: "1px solid rgba(226, 232, 240, 0.9)",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          px: 1.5,
                          py: 0.45,
                          borderRadius: "100px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {service.badge}
                      </Box>
                    </Box>

                    {/* Card Content */}
                    <Box sx={{ p: { xs: 2.25, sm: 2.75 }, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                      <Box>
                        {/* Title with small icon */}
                        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 1 }}>
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "8px",
                              bgcolor: "#F8FAFC",
                              border: "1px solid #E2E8F0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#082B50",
                              flexShrink: 0,
                            }}
                          >
                            <IconComponent sx={{ fontSize: 18 }} />
                          </Box>
                          <Typography
                            component="h3"
                            sx={{
                              fontWeight: 850,
                              fontSize: { xs: "1.05rem", sm: "1.12rem" },
                              color: "#082B50",
                              lineHeight: 1.25,
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Stack>

                        {/* Description */}
                        <Typography
                          sx={{
                            color: "#64748B",
                            fontSize: "0.85rem",
                            lineHeight: 1.6,
                            mb: 2.5,
                            fontWeight: 500,
                          }}
                        >
                          {service.desc}
                        </Typography>
                      </Box>

                      {/* Bottom Action Pill */}
                      <Box
                        sx={{
                          pt: 1.5,
                          borderTop: "1px solid #F1F5F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          className="service-open-btn"
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.75,
                            color: "#1765A5",
                            fontSize: "0.82rem",
                            fontWeight: 750,
                            transition: "all 0.2s ease",
                          }}
                        >
                          <span>Open</span>
                          <ArrowForwardRoundedIcon className="service-arrow" sx={{ fontSize: 15, transition: "transform 0.25s ease" }} />
                        </Box>

                        <Chip
                          label="Official Service"
                          size="small"
                          sx={{
                            height: 20,
                            fontSize: "0.62rem",
                            fontWeight: 700,
                            bgcolor: "#F8FAFC",
                            color: "#94A3B8",
                            border: "1px solid #E2E8F0",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 5. CITIZEN SERVICES AT A GLANCE (METRICS) */}
      <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={{ color: "#D97706", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                District Metrics
              </Typography>
              <Typography sx={{ color: "#082B50", fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.2 }}>
                Citizen Services at a Glance
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <Grid container spacing={2}>
                {[
                  { value: "100+", label: "Government Schemes", detail: "Active in District", icon: VolunteerActivismRoundedIcon },
                  { value: "24/7", label: "Citizen Support", detail: "Grievance Redressal", icon: SupportAgentRoundedIcon },
                  { value: "1902", label: "Toll-Free Helpline", detail: "Telugu & English", icon: PhoneInTalkRoundedIcon },
                  { value: "27", label: "Revenue Mandals", detail: "100% Saturation", icon: AutoGraphRoundedIcon },
                ].map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                      <Box
                        sx={{
                          p: 2,
                          bgcolor: "#F8FAFC",
                          borderRadius: "14px",
                          border: "1px solid #E2E8F0",
                          textAlign: "center",
                        }}
                      >
                        <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#FEF3C7", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 1 }}>
                          <StatIcon sx={{ fontSize: 16 }} />
                        </Box>
                        <Typography sx={{ color: "#082B50", fontSize: "1.45rem", fontWeight: 900, lineHeight: 1.1 }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: "#1E293B", fontSize: "0.76rem", fontWeight: 750, mt: 0.5 }}>
                          {stat.label}
                        </Typography>
                        <Typography sx={{ color: "#64748B", fontSize: "0.68rem" }}>
                          {stat.detail}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. FEATURED CITIZEN HELPLINE CTA */}
      <Box id="helpline-cta" sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              bgcolor: "#082B50",
              borderRadius: { xs: "20px", sm: "24px" },
              p: { xs: 3, sm: 4, md: 5 },
              border: "1px solid #0B3A6B",
              borderTop: "4px solid #F5B800",
              boxShadow: "0 16px 40px rgba(8, 43, 80, 0.2)",
              color: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background subtle watermark circles */}
            <Box
              sx={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245, 184, 0, 0.15) 0%, rgba(245, 184, 0, 0) 70%)",
                pointerEvents: "none",
              }}
            />

            <Grid container spacing={3} alignItems="center" justifyContent="space-between" sx={{ position: "relative", zIndex: 1 }}>
              {/* Left Column: Heading + Description */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: "rgba(245, 184, 0, 0.15)",
                    color: "#FDE68A",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    px: 1.5,
                    py: 0.4,
                    borderRadius: "100px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 1.25,
                    border: "1px solid rgba(245, 184, 0, 0.3)",
                  }}
                >
                  24/7 Helpline Support
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 900,
                    color: "#FFFFFF",
                    fontSize: { xs: "1.5rem", sm: "1.9rem", md: "2.1rem" },
                    letterSpacing: "-0.02em",
                    mb: 1,
                  }}
                >
                  Prefer to Talk to Us?
                </Typography>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.85)", fontSize: { xs: "0.9rem", sm: "0.98rem" }, lineHeight: 1.6, maxWidth: 540 }}>
                  Reach our citizen helplines any time — available round the clock in Telugu and English. Our support executives will assist you with schemes, grievances, and department guidance.
                </Typography>
              </Grid>

              {/* Right Column: Prominent Action Buttons */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                  <Button
                    component="a"
                    href="tel:1902"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 18, color: "#082B50" }} />}
                    sx={{
                      bgcolor: "#F5B800",
                      color: "#082B50 !important",
                      borderRadius: "100px",
                      px: 3.5,
                      py: 1.4,
                      fontSize: "0.9rem",
                      fontWeight: 850,
                      textTransform: "none",
                      boxShadow: "0 6px 18px rgba(245, 184, 0, 0.4)",
                      "&:hover": { bgcolor: "#E0A315", transform: "translateY(-2px)" },
                      transition: "all 0.2s ease",
                    }}
                  >
                    IVRS: 1902 (Free)
                  </Button>
                  <Button
                    component="a"
                    href="tel:08922276606"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.12)",
                      color: "#FFFFFF !important",
                      border: "1.5px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "100px",
                      px: 3,
                      py: 1.4,
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      textTransform: "none",
                      backdropFilter: "blur(6px)",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.22)", borderColor: "#FFFFFF" },
                      transition: "all 0.2s ease",
                    }}
                  >
                    DRDA: 08922-276606
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 7. RELATED DISTRICT SERVICES (EXPLORE MORE) */}
      <Box sx={{ pb: { xs: 5, sm: 6, md: 7 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ borderTop: "1px solid #E2E8F0", pt: { xs: 3.5, md: 4.5 } }}>
            <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between" spacing={2} sx={{ mb: 2.5 }}>
              <Box>
                <Typography sx={{ color: "#D97706", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  More Portals
                </Typography>
                <Typography sx={{ color: "#082B50", fontSize: "1.2rem", fontWeight: 850 }}>
                  Explore More District Resources
                </Typography>
              </Box>
            </Stack>

            <Grid container spacing={2}>
              {[
                { label: "Welfare Schemes", href: "/schemes", icon: VolunteerActivismRoundedIcon, desc: "Explore 100+ public schemes" },
                { label: "Downloads & Forms", href: "/knowledge-center", icon: FileDownloadRoundedIcon, desc: "Applications and guidelines" },
                { label: "Grievances (PGRS)", href: "/pgrs", icon: SupportAgentRoundedIcon, desc: "Spandana citizen portal" },
                { label: "Success Stories", href: "/success-stories", icon: EmojiEventsRoundedIcon, desc: "Impact stories across mandals" },
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <Box
                      component={Link}
                      href={item.href}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.75,
                        p: 2,
                        bgcolor: "#FFFFFF",
                        borderRadius: "14px",
                        border: "1px solid #E2E8F0",
                        textDecoration: "none",
                        color: "#082B50",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#F5B800",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 18px rgba(8, 43, 80, 0.08)",
                          "& .related-arrow": { transform: "translateX(3px)", color: "#D97706" },
                        },
                      }}
                    >
                      <Box sx={{ width: 38, height: 38, borderRadius: "10px", bgcolor: "#EFF6FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <ItemIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                        <Typography sx={{ fontWeight: 850, fontSize: "0.88rem", color: "#082B50", lineHeight: 1.25 }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ color: "#64748B", fontSize: "0.72rem" }}>
                          {item.desc}
                        </Typography>
                      </Box>
                      <ArrowForwardRoundedIcon className="related-arrow" sx={{ fontSize: 16, color: "#94A3B8", transition: "all 0.2s ease" }} />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
