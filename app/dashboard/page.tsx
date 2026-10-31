"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs, Paper, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CountUp from "@/components/CountUp";

export default function DashboardPage() {
  // Top 4 Stat Counter Pills
  const topStats = [
    { label: "Total Credit Linkage", value: 1420, prefix: "₹", suffix: " Cr", subtext: "Disbursed to SHGs", color: "#CA8A04", bg: "#FEF9C3", border: "#FDE68A" },
    { label: "Active SHGs", value: 24500, prefix: "", suffix: "+", subtext: "2.65 Lakh Rural Women", color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
    { label: "Repayment Rate", value: 98.4, decimals: 1, prefix: "", suffix: "%", subtext: "Portfolio at Risk < 1.6%", color: "#16A34A", bg: "#DCFCE7", border: "#BBF7D0" },
    { label: "MSME Units", value: 5210, prefix: "", suffix: " Units", subtext: "115% Target Met", color: "#9333EA", bg: "#F3E8FF", border: "#E9D5FF" },
  ];

  // 6 Primary Performance Cards (Exact Services Page Photo Card Style)
  const dashboardCards = [
    {
      title: "Bank Linkage & Stree Nidhi Credit",
      desc: "₹1,420 Crores disbursed across commercial and cooperative banks to 24,500 women self-help collectives with interest subvention.",
      href: "/livelihoods",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      badge: "₹1,420 Cr Disbursed",
      metric: "98.4% Recovery Rate",
      highlight: "Financial Inclusion",
    },
    {
      title: "Rural Micro-Enterprises & MSME Clusters",
      desc: "5,210 women-owned micro-enterprises established in millets, handlooms, jute crafts, retail stores, and dairy aggregations.",
      href: "/women-entrepreneurship",
      img: "https://images.unsplash.com/photo-1609252285522-ed0ebdd43551?w=600&q=80&auto=format&fit=crop",
      badge: "5,210 Units Active",
      metric: "84% Women-Led",
      highlight: "OFOE & PMFME",
    },
    {
      title: "Farmer Producer Organizations (FPOs)",
      desc: "22 active FPO collectives covering 32,500 smallholder farmers in cashew, pulses, and organic millets with wholesale buyer tie-ups.",
      href: "/fpos",
      img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&q=80&auto=format&fit=crop",
      badge: "22 Registered FPOs",
      metric: "₹48.2 Cr Turnover",
      highlight: "Agri Value Chain",
    },
    {
      title: "Youth Skilling & Job Placements",
      desc: "5,920 rural youth trained and placed in organized sectors (retail, healthcare, logistics, and IT trades) through DDU-GKY and APSSDC.",
      href: "/schemes",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop",
      badge: "5,920 Placed",
      metric: "74% Placement Rate",
      highlight: "Skill Development",
    },
    {
      title: "YSR Bima & Social Security",
      desc: "Comprehensive social security net for 4.82 lakh unorganized workers and rural families with fast-track claim settlement under 21 days.",
      href: "/schemes/social",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
      badge: "4.82 Lakh Covered",
      metric: "< 21 Days Settlement",
      highlight: "Social Safety Net",
    },
    {
      title: "Doorstep Banking & Bank Sakhis",
      desc: "812 Bank Sakhis operating micro-ATMs and Aadhaar-enabled payment systems ensuring 100% banking saturation across 777 Gram Panchayats.",
      href: "/directory",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80&auto=format&fit=crop",
      badge: "777 GPs Covered",
      metric: "100% Saturation",
      highlight: "Digital Inclusion",
    },
  ];

  // Administrative Saturation Indicators
  const districtScale = [
    { label: "Revenue Mandals", value: "27", note: "100% Saturation" },
    { label: "Gram Panchayats", value: "777", note: "Active Local Units" },
    { label: "Revenue Villages", value: "982", note: "Habitations Reached" },
    { label: "Village Organizations", value: "777", note: "Active Gram Samakhyas" },
    { label: "Mandal Samakhyas", value: "27", note: "Federated Tier-2 Bodies" },
    { label: "Zilla Samakhya", value: "1", note: "Apex District Body" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC" }}>
      
      {/* 1. Hero Section (Warm Gold / Amber matching all other portal pages) */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700",
        py: { xs: 2, md: 2.5 }
      }}>
        {/* Ambient Background Glows */}
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: "0.8rem" }}>Performance Dashboard</Typography>
          </Breadcrumbs>

          <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={2.5}>
            <Box sx={{ maxWidth: 780 }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <Box sx={{
                  background: "#78350F",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  boxShadow: "0 0 8px rgba(120, 53, 15, 0.4)"
                }} />
                <Typography sx={{
                  color: "#78350F",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase"
                }}>
                  Government of Andhra Pradesh · DRDA Vizianagaram · Live MIS Telemetry
                </Typography>
              </Stack>
              <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
                Performance Dashboard
              </Typography>
              <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 680, lineHeight: 1.5, fontWeight: 500 }}>
                Official program KPIs, saturation benchmarks, and real-time impact metrics across 27 mandals, 777 gram panchayats, and 24,500+ self-help collectives.
              </Typography>
            </Box>

            {/* Quick Live Status Glass Badge */}
            <Paper elevation={0} sx={{
              background: "rgba(255, 255, 255, 0.65)",
              border: "1px solid rgba(180, 83, 9, 0.3)",
              borderRadius: 3,
              px: 2.2,
              py: 1.4,
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(180, 83, 9, 0.12)"
            }}>
              <Stack direction="row" alignItems="center" spacing={1.4}>
                <Box sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  bgcolor: "rgba(251, 192, 45, 0.25)",
                  border: "1.5px solid #F59E0B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B45309"
                }}>
                  <TrendingUpRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: "#78350F", fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Saturation Status
                  </Typography>
                  <Typography sx={{ color: "#1F1700", fontSize: "0.96rem", fontWeight: 850 }}>
                    100% Panchayats Active
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>

      {/* 2. Top Stats Counter Strip */}
      <Box sx={{ py: 3.5, bgcolor: "white", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {topStats.map((item, idx) => (
              <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: item.bg,
                    border: `1px solid ${item.border}`,
                    borderRadius: 3,
                    p: 2,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
                    }
                  }}
                >
                  <Typography sx={{ color: item.color, fontSize: { xs: "1.45rem", md: "1.85rem" }, fontWeight: 900, lineHeight: 1.1 }}>
                    {item.prefix}<CountUp decimals={item.decimals} suffix={item.suffix} value={item.value} />
                  </Typography>
                  <Typography sx={{ color: "#0F172A", fontSize: "0.8rem", fontWeight: 800, mt: 0.5, lineHeight: 1.2 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.68rem", fontWeight: 600, mt: 0.25 }}>
                    {item.subtext}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Cards Grid (Exact Services Page Structure: Photo, Title, Description, Arrow) */}
      <Box sx={{ pt: { xs: 3, md: 4.5 }, pb: { xs: 4, md: 5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          
          <Box sx={{ textAlign: "center", mb: 3.5 }}>
            <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#B45309", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1.5 }}>
              Program Milestones
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Key District Achievements
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.95rem", fontWeight: 500, maxWidth: 600, mx: "auto" }}>
              Tap on any sector to view comprehensive program pathways and field initiatives
            </Typography>
            <Box sx={{ mt: 2, mx: "auto", width: 64, height: 4, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={3}>
            {dashboardCards.map((card, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  component={Link}
                  href={card.href}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: "20px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                      borderColor: "#CBD5E1",
                      "& .dashboard-img": { transform: "scale(1.08)" },
                      "& .dashboard-arrow": { transform: "translateX(4px)" }
                    }
                  }}
                >
                  {/* Photo Header */}
                  <Box sx={{ position: "relative", height: 160, overflow: "hidden" }}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="dashboard-img"
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)"
                    }} />

                    {/* Top Right Floating Badge */}
                    <Box sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(4px)",
                      color: "#1E293B",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 10,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}>
                      {card.badge}
                    </Box>

                    {/* Bottom Floating Title */}
                    <Typography sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      color: "white",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                      lineHeight: 1.25
                    }}>
                      {card.title}
                    </Typography>
                  </Box>

                  {/* Body Text & Arrow Link */}
                  <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                      <Typography sx={{ fontSize: "0.65rem", color: "#CA8A04", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {card.highlight}
                      </Typography>
                      <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, bgcolor: "#F0FDF4", color: "#16A34A", px: 1, py: 0.25, borderRadius: "4px", fontSize: "0.68rem", fontWeight: 800 }}>
                        <CheckCircleRoundedIcon sx={{ fontSize: 13 }} />
                        {card.metric}
                      </Box>
                    </Box>

                    <Typography sx={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.6, mb: 2, flexGrow: 1, fontWeight: 500 }}>
                      {card.desc}
                    </Typography>

                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#1E293B", fontSize: "0.82rem", fontWeight: 800, pt: 1, borderTop: "1px solid #F1F5F9" }}>
                      View Details <ArrowForwardIcon className="dashboard-arrow" sx={{ fontSize: 16, transition: "transform 0.2s ease" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Administrative Scale Ribbon */}
      <Box sx={{ py: 4, bgcolor: "white", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography sx={{ fontSize: "0.72rem", fontWeight: 850, color: "#CA8A04", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              District Saturation
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 850, color: "#0F172A", fontSize: { xs: "1.2rem", md: "1.45rem" }, mt: 0.25 }}>
              Complete Geographic Coverage Across Vizianagaram
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {districtScale.map((item, idx) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: 3,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#1F1700",
                      borderColor: "#FFC107",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  <Typography sx={{ color: "#CA8A04", fontSize: "1.45rem", fontWeight: 900, lineHeight: 1.1 }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: "#0F172A", fontSize: "0.75rem", fontWeight: 800, mt: 0.5 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.62rem", fontWeight: 500, mt: 0.25 }}>
                    {item.note}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. Talk to Us CTA (Exact same component as Citizen Services page) */}
      <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: "#FFC107", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#000000", mb: 1, fontSize: { xs: "1.5rem", md: "1.75rem" }, letterSpacing: "-0.02em" }}>
            Need Assistance or Further Information?
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.8)", fontSize: "0.95rem", mb: 3, fontWeight: 500, maxWidth: 500, mx: "auto" }}>
            Reach the DRDA District Quality & Monitoring Cell any time.
          </Typography>
          
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            <Box 
              component="a" 
              href="tel:1902" 
              sx={{ 
                bgcolor: "#000000", color: "white !important", px: 4, py: 1.25, borderRadius: 8, fontSize: "0.9rem", fontWeight: 800, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              <PhoneIcon sx={{ fontSize: 18 }} /> IVRS: 1902 (Toll Free)
            </Box>
            <Box 
              component="a" 
              href="tel:08922276606" 
              sx={{ 
                bgcolor: "#000000", color: "white !important", px: 4, py: 1.25, borderRadius: 8, fontSize: "0.9rem", fontWeight: 800, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              <PhoneIcon sx={{ fontSize: 18 }} /> DRDA Office: 08922-276606
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
