"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function OneFamilyOneEntrepreneurPage() {
  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* Hero Section */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700",
        py: { xs: 2, md: 2.5 }
      }}>
        <Box sx={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.4)", display: "none", pointerEvents: "none"
        }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700", lineHeight: 1.2 }}>
            One Family, One Entrepreneur
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.9rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.5, fontWeight: 500 }}>
            A transformative vision to nurture <strong>an entrepreneur in every family</strong>, building a self-reliant Andhra Pradesh where every household has its own source of income and dignity.
          </Typography>
        </Container>
      </Box>

      {/* The State Vision Section */}
      <Box sx={{ bgcolor: "#0F172A", py: { xs: 2, md: 2.5 }, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, mb: 1.5 }}>
            The State Vision — Andhra Pradesh
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: 3, md: 6 } }}>
            {[
              { value: "1 Crore", label: "Entrepreneurs to be nurtured" },
              { value: "20 Lakh", label: "Jobs in next 5 years" },
              { value: "5 Lakh", label: "DWCRA women → entrepreneurs" }
            ].map((stat, idx) => (
              <Box key={idx} sx={{
                bgcolor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                p: { xs: 1.5, md: 2 },
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-4px)",
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
                },
                flex: { xs: "1 1 100%", sm: "1 1 0" },
                minWidth: "200px"
              }}>
                <Typography sx={{ fontSize: "1.75rem", fontWeight: 900, mb: 0.75, color: "#FFC107", lineHeight: 1 }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: "0.65rem", fontWeight: 800, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
          <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", mt: 1.5 }}>
            Source: Govt of AP · “One Family – One Entrepreneur” policy
          </Typography>
        </Container>
      </Box>

      {/* Our District Mission */}
      <Box sx={{ pt: { xs: 2.5, sm: 3, md: 3.5, lg: 4 }, pb: { xs: 4, md: 5 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 14px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px",
            }}>
              Vizianagaram
            </span>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "#1E293B", mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, letterSpacing: "-0.02em" }}>
              Our District Mission — This Year
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "1rem", fontWeight: 500 }}>
              DRDA Vizianagaram's contribution to the Chief Minister's vision in the current year
            </Typography>
          </Box>

          {/* Unified Stat Ribbon */}
          <Box sx={{ display: "flex", flexWrap: "wrap", bgcolor: "white", borderRadius: 4, border: "1px solid #E2E8F0", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)", mb: 5, overflow: "hidden" }}>
            <Box sx={{ flex: { xs: "1 1 100%", md: 1 }, p: { xs: 3, md: 4 }, textAlign: "center", borderRight: { md: "1px solid #E2E8F0" }, borderBottom: { xs: "1px solid #E2E8F0", md: "none" } }}>
              <Typography sx={{ fontSize: "3rem", fontWeight: 900, color: "#D97706", lineHeight: 1 }}>2,500</Typography>
              <Typography sx={{ fontWeight: 800, color: "#1E293B", mt: 1, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Entrepreneurs Targeted</Typography>
              <Typography sx={{ fontSize: "0.7rem", color: "#94A3B8", mt: 0.5 }}>Current year</Typography>
            </Box>
            <Box sx={{ flex: { xs: "1 1 100%", md: 1 }, p: { xs: 3, md: 4 }, textAlign: "center", borderRight: { md: "1px solid #E2E8F0" }, borderBottom: { xs: "1px solid #E2E8F0", md: "none" } }}>
              <Typography sx={{ fontSize: "3rem", fontWeight: 900, color: "#D97706", lineHeight: 1 }}>2,500</Typography>
              <Typography sx={{ fontWeight: 800, color: "#1E293B", mt: 1, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Enterprises Grounded</Typography>
              <Typography sx={{ fontSize: "0.7rem", color: "#94A3B8", mt: 0.5 }}>Achieved so far</Typography>
            </Box>
            <Box sx={{ flex: { xs: "1 1 100%", md: 1 }, p: { xs: 3, md: 4 }, textAlign: "center" }}>
              <Typography sx={{ fontSize: "3rem", fontWeight: 900, color: "#D97706", lineHeight: 1 }}>44%</Typography>
              <Typography sx={{ fontWeight: 800, color: "#1E293B", mt: 1, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Target Progress</Typography>
              <Box sx={{ width: "100%", maxWidth: 200, mx: "auto", bgcolor: "#F1F5F9", borderRadius: 10, height: 6, mt: 1.5, overflow: "hidden" }}>
                <Box sx={{ bgcolor: "#FFC107", width: "44%", borderRadius: 10, height: "100%" }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ background: "#FFC107", borderRadius: 4, p: { xs: 3, sm: 4 }, color: "#000000" }}>
            <Typography sx={{ textAlign: "center", color: "rgba(0,0,0,0.6)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, mb: 3 }}>
              Built on a Strong Foundation
            </Typography>
            <Grid container spacing={4} textAlign="center">
              {[
                { val: "2,050+", label: "Women entrepreneurs already active" },
                { val: "777", label: "Gram Panchayats and VOs" },
                { val: "19.30 L", label: "District citizen reach" }
              ].map((item, idx) => (
                <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                  <Typography sx={{ fontSize: "2.25rem", fontWeight: 900, lineHeight: 1 }}>{item.val}</Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.8)", mt: 1.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* How it Works Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 14px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px",
            }}>
              How It Works
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
              From Family to Enterprise
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "1rem" }}>
              A clear pathway DRDA follows to turn every willing family into an entrepreneurial one
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 5, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Box sx={{ position: "relative" }}>
            {/* Timeline line */}
            <Box sx={{ position: "absolute", left: { xs: 24, sm: 28 }, top: 0, bottom: 0, width: 2, bgcolor: "#FFE082", display: { xs: "none", sm: "block" } }} />

            {[
              { num: "01", title: "Identify the Family", desc: "Every household with entrepreneurial potential is identified through SHG and Village Organisation networks.", icon: <HomeIcon /> },
              { num: "02", title: "Find the Idea", desc: "A viable enterprise idea is matched to the family's skills and local market demand, with DRDA mentoring.", icon: <LightbulbIcon /> },
              { num: "03", title: "Build the Enterprise", desc: "Credit linkage, skill training, seed capital and handholding turn the idea into a running business.", icon: <BusinessCenterIcon /> },
              { num: "04", title: "Grow & Generate Jobs", desc: "The enterprise scales, creating income for the family and employment for the community.", icon: <TrendingUpIcon /> }
            ].map((step, idx) => (
              <Box key={idx} sx={{ display: "flex", gap: { xs: 3, sm: 4 }, mb: 4, position: "relative", zIndex: 1 }}>
                <Box sx={{
                  bgcolor: "#FFC107", width: 56, height: 56, borderRadius: "50%",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  color: "#000000", flexShrink: 0, boxShadow: "0 4px 10px rgba(0,0,0,0.1)", zIndex: 2
                }}>
                  {step.icon}
                </Box>
                <Box sx={{ background: "linear-gradient(135deg, #ffffff 0%, #FFFDF5 100%)", p: 3, borderRadius: 4, flex: 1, border: "1px solid #FFE082", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 1, fontSize: "1.1rem" }}>{step.title}</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6 }}>{step.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Priority Sectors */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 14px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px",
            }}>
              Enterprise Sectors
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
              Priority Livelihood Sectors
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "1rem" }}>
              Sectors with strong local resource base and market demand in Vizianagaram
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 5, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={2}>
            {[
              { icon: "🍱", title: "Food Processing", desc: "Millet products, pickles, papads, sweets, bakery" },
              { icon: "🌾", title: "Agriculture & Horticulture", desc: "Exotic vegetables, flowers, organic turmeric, ginger" },
              { icon: "🐄", title: "Livestock & Dairy", desc: "Goat rearing, poultry, fishery, dairy units" },
              { icon: "🛒", title: "Trade & Commerce", desc: "Kirana stores, agri input shops, mobile recharge" },
              { icon: "✂️", title: "Services", desc: "Tailoring, beauty parlours, repair services" },
              { icon: "🌿", title: "Forest & Tribal Products", desc: "MFP collection, bamboo crafts, honey, herbal products" },
              { icon: "🚗", title: "Transport & Mobility", desc: "Auto rickshaws, e-vehicles, rural transport, delivery" },
              { icon: "🏡", title: "Tourism & Hospitality", desc: "Homestays, food trails, eco-guides, cultural tours" }
            ].map((sector, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box sx={{
                  bgcolor: "white", p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0",
                  display: "flex", alignItems: "flex-start", gap: 1.5,
                  transition: "all 0.2s", cursor: "pointer", height: "100%",
                  "&:hover": { transform: "translateY(-2px)", borderColor: "#FFC107", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
                }}>
                  <Box sx={{ fontSize: "1.5rem", lineHeight: 1, mt: 0.25 }}>{sector.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 0.25, fontSize: "0.9rem" }}>{sector.title}</Typography>
                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.4 }}>{sector.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 3, md: 4 }, background: "#FFC107", color: "#000000", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, letterSpacing: "-0.02em", fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
            Want to Become an Entrepreneur?
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.8)", mb: 2.5, fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.5 }}>
            If you have an idea or the will to start, DRDA will support you with training, credit, and mentoring. Reach out to your Block Programme Manager.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            <Box component={Link} href="tel:08954220123" sx={{
              bgcolor: "#000000", color: "white !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
            }}>
              Call DRDA: 08954-220123
            </Box>
            <Box component={Link} href="/contact" sx={{
              bgcolor: "#000000", color: "white !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
            }}>
              Find Your BPM →
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
