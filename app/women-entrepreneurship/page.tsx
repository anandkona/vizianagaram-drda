"use client";

import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupIcon from "@mui/icons-material/Group";

const PROGRAMS = [
  {
    title: "PMEGP – Prime Minister's Employment Generation Programme",
    desc: "Subsidized loans for micro-enterprises — 125 units against a target of 100. 125% achievement.",
    target: "100", achieved: "125", completion: 100, completionLabel: "125%",
  },
  {
    title: "PMFME – PM Formalisation of Micro Food Enterprises",
    desc: "Formalisation of micro food processing enterprises — 34 units achieved, scaling up.",
    target: "100", achieved: "34", completion: 34, completionLabel: "34%",
  },
  {
    title: "Seed Capital Assistance",
    desc: "223 units sanctioned of 230 target. 98.59% loan recovery rate — outstanding financial discipline.",
    target: "230", achieved: "223", completion: 97, completionLabel: "96.96%",
  },
  {
    title: "AGEY – AGEY Livelihood Program",
    desc: "Phase 1: 9 units. Phase 2: 17 units. Focus: Egg Carts, Rural Transport, Livelihood Mobility.",
    target: "26", achieved: "26", completion: 100, completionLabel: "100%",
  },
];

export default function WomenEntrepreneurshipPage() {
  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>

      {/* Hero Section */}
      <Box sx={{
        position: "relative", overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700", py: { xs: 2, md: 2.5 }
      }}>
        <Box sx={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.4)", display: "none", pointerEvents: "none"
        }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Link href="/livelihoods" style={{ color: "inherit", textDecoration: "none" }}>Livelihoods</Link>
            <Typography sx={{ color: "#2B2100", fontWeight: 700, fontSize: "0.8rem" }}>Women Entrepreneurship</Typography>
          </Breadcrumbs>
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Women Entrepreneurship
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            4,030 women-led enterprises. Rs.40.97 Crore mobilised. 110.56% of target achieved. Vizianagaram women are leading the way.
          </Typography>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ py: { xs: 1.5, md: 1.75 }, bgcolor: "#0F172A", color: "white", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }, gap: 1.5, textAlign: "center" }}>
            {[
              { value: "4,030", label: "Units Achieved", sub: "Target: 3645" },
              { value: "110.56%", label: "Achievement", sub: "Exceeded target" },
              { value: "Rs.40.97 Cr", label: "Amount Mobilised", sub: "Target: Rs.40.11 Cr" },
              { value: "385+", label: "Units Over Target", sub: "Surplus achievement" },
            ].map((stat, idx) => (
              <Box key={idx} sx={{ 
                  bgcolor: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.1)",
                  p: { xs: 1, md: 1.25 }, 
                  borderRadius: 2, 
                  textAlign: "center", 
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    bgcolor: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,193,7,0.5)",
                    "&::after": { opacity: 1 }
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0, left: 0, right: 0, height: "2px",
                    background: "linear-gradient(90deg, transparent, #FFC107, transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }
              }}>
                <Typography sx={{ fontSize: { xs: "1.35rem", sm: "1.55rem" }, fontWeight: 900, lineHeight: 1.1, color: "#FFC107" }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: "0.68rem", mt: 0.5, color: "rgba(255,255,255,0.9)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}>{stat.label}</Typography>
                <Typography sx={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.5)", mt: 0.25 }}>{stat.sub}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Achievement by Program */}
      <Box sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 4, md: 5 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Box sx={{ display: "inline-block", background: "#E8F5E9", color: "#2E7D32", fontSize: "0.72rem", fontWeight: 700, px: 2, py: 0.5, borderRadius: 10, textTransform: "uppercase", letterSpacing: "0.08em", mb: 2 }}>
              Program Breakdown
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: { xs: "1.6rem", md: "2rem" }, letterSpacing: "-0.02em" }}>
              Achievement by Program
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "0.95rem" }}>
              Every program contributing to women's economic empowerment
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
            {PROGRAMS.map((prog, idx) => (
              <Box key={idx} sx={{
                bgcolor: "white", p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0",
                display: "flex", flexDirection: "column", gap: 1,
                transition: "all 0.2s", cursor: "pointer", height: "100%",
                "&:hover": { transform: "translateY(-2px)", borderColor: "#FFC107", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
              }}>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: "1.05rem", mb: 0.5, lineHeight: 1.2 }}>
                    {prog.title}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.8rem", lineHeight: 1.4, mb: 1.5, minHeight: 36 }}>
                    {prog.desc}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 1 }}>
                    <Box>
                      <Typography sx={{ fontSize: "0.6rem", color: "#94A3B8", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.25 }}>Target vs Achieved</Typography>
                      <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: "1rem" }}>
                        {prog.achieved} <span style={{ color: "#94A3B8", fontSize: "0.8rem", fontWeight: 600 }}>/ {prog.target}</span>
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography sx={{ fontWeight: 900, color: "#D97706", fontSize: "1.2rem", lineHeight: 1 }}>{prog.completionLabel}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%", bgcolor: "#F1F5F9", borderRadius: 10, height: 4, overflow: "hidden" }}>
                    <Box sx={{ bgcolor: "#FFC107", width: `${Math.min(prog.completion, 100)}%`, borderRadius: 10, height: "100%" }} />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* AGEY Special Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Box sx={{ display: "inline-block", background: "#E8F5E9", color: "#2E7D32", fontSize: "0.72rem", fontWeight: 700, px: 2, py: 0.5, borderRadius: 10, textTransform: "uppercase", letterSpacing: "0.08em", mb: 2 }}>
              AGEY Program
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: { xs: "1.6rem", md: "2rem" }, letterSpacing: "-0.02em" }}>
              AGEY Special Livelihood Focus
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "0.95rem" }}>
              Innovative livelihood units for rural mobility and income
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2, mb: 3 }}>
            {[
              { icon: "Egg Carts", title: "Egg Carts", desc: "Mobile egg vending for rural households and markets" },
              { icon: "Rural Transport", title: "Rural Transport", desc: "Last-mile connectivity for rural communities" },
              { icon: "Livelihood Mobility", title: "Livelihood Mobility", desc: "Two-wheeler based livelihood for rural youth" },
            ].map((item, idx) => (
              <Box key={idx} sx={{
                bgcolor: "white", p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0",
                display: "flex", alignItems: "flex-start", gap: 1.5,
                transition: "all 0.2s", cursor: "pointer", height: "100%",
                "&:hover": { transform: "translateY(-2px)", borderColor: "#FFC107", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
              }}>
                <Box sx={{ fontSize: "1.5rem", lineHeight: 1, mt: 0.25 }}>{["🥚","🚗","🛵"][idx]}</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 0.25, fontSize: "0.9rem" }}>{item.title}</Typography>
                  <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.4 }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, maxWidth: 300, mx: "auto", textAlign: "center" }}>
            <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2, border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1, color: "#D97706" }}>9</Typography>
              <Typography sx={{ fontSize: "0.7rem", mt: 0.75, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "#475569" }}>Phase 1 Units</Typography>
            </Box>
            <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2, border: "1px solid #E2E8F0", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1, color: "#D97706" }}>17</Typography>
              <Typography sx={{ fontSize: "0.7rem", mt: 0.75, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "#475569" }}>Phase 2 Units</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Seed Capital CTA & Action Buttons */}
      <Box sx={{ py: { xs: 3, md: 4 }, background: "#FFC107", color: "#1E293B", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 0.5, color: "#1F1700", letterSpacing: "-0.02em", fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
            Seed Capital — Outstanding Recovery
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.8)", fontSize: "0.9rem", mb: 2, fontWeight: 600, maxWidth: 600, mx: "auto" }}>
            223 units sanctioned. 98.59% loan recovery — a testament to the financial discipline of women entrepreneurs.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 4 }, justifyContent: "center", mb: 2.5 }}>
            {[
              { value: "223", label: "Units Sanctioned" },
              { value: "96.96%", label: "Target Achievement" },
              { value: "98.59%", label: "Loan Recovery" },
            ].map((stat, idx) => (
              <Box key={idx} sx={{ textAlign: "center", minWidth: 100, px: 1 }}>
                <Typography sx={{ fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.2, color: "#000000" }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: "0.7rem", mt: 0.25, color: "rgba(0,0,0,0.7)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            <Box
              component={Link}
              href="/success-stories"
              sx={{
                bgcolor: "#000000", color: "white !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              <GroupIcon sx={{ fontSize: 18 }} /> Meet Women Entrepreneurs
            </Box>
            <Box
              component={Link}
              href="/one-family-one-entrepreneur"
              sx={{
                bgcolor: "#000000", color: "white !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              One Family One Entrepreneur <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
