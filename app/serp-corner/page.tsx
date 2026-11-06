"use client";

import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SerpPage() {
  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: { xs: 8, md: 0 } }}>
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
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            SERP Corner
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.5, fontWeight: 600 }}>
            Society for Elimination of Rural Poverty — building a grassroots SHG ecosystem across 15 mandals of Vizianagaram.
          </Typography>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ py: { xs: 2.5, md: 3 }, bgcolor: "#0F172A", color: "white", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(5, 1fr)" }, gap: 2, textAlign: "center" }}>
            {[
              { value: "1", label: "Zilla Samakhya", sub: "District Apex" },
              { value: "15", label: "Mandal Samakhyas", sub: "Federations" },
              { value: "567", label: "Village Orgs", sub: "Clusters" },
              { value: "19,918", label: "SHGs", sub: "Groups" },
              { value: "2.2L+", label: "Members", sub: "Women empowered" }
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
                  }
              }}>
                <Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" }, fontWeight: 900, lineHeight: 1, color: "#FFC107" }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: "0.7rem", mt: 1, color: "rgba(255,255,255,0.9)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</Typography>
                <Typography sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", mt: 0.25 }}>{stat.sub}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 3, md: 4 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ display: "inline-block", bgcolor: "#FFF8E1", color: "#B45309", px: 1.5, py: 0.5, borderRadius: 1, fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", mb: 2 }}>
                About
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, color: "#1E293B", mb: 4, fontSize: { xs: "1.5rem", md: "2rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                What is SERP?
              </Typography>
              
              <Box sx={{ pl: 3, borderLeft: "4px solid #FFC107", mb: 4 }}>
                <Typography sx={{ color: "#334155", fontSize: "1rem", lineHeight: 1.7, fontWeight: 600, mb: 2 }}>
                  SERP is the state nodal agency of Andhra Pradesh implementing the National Rural Livelihoods Mission (NRLM).
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  In Vizianagaram, SERP has built a massive institution network. These community institutions are the foundation for women entrepreneurship, bank linkage, livelihood promotion, and social capital building across the district's rural communities.
                </Typography>
              </Box>

              <Box component="a" href="https://www.serp.ap.gov.in" target="_blank" rel="noopener noreferrer" sx={{
                display: "inline-flex", alignItems: "center", gap: 1, color: "#0F172A", fontWeight: 800, fontSize: "0.85rem", textDecoration: "none",
                "&:hover": { color: "#D97706" }
              }}>
                Visit SERP Official Website <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ bgcolor: "#F8FAFC", borderRadius: 4, p: { xs: 3, md: 4 }, border: "1px solid #E2E8F0" }}>
                <Typography sx={{ fontWeight: 900, color: "#1E293B", mb: 3, fontSize: "1.1rem" }}>District Impact</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
                  {[
                    { icon: "👩", text: "2,20,759 Women Members" },
                    { icon: "🤝", text: "19,918 Self Help Groups" },
                    { icon: "🏛️", text: "567 Village Organisations" },
                    { icon: "🏢", text: "15 Mandal Samakhyas" }
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ bgcolor: "white", p: 2, borderRadius: 2, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 1, transition: "transform 0.2s", "&:hover": { transform: "translateY(-2px)", borderColor: "#CBD5E1", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" } }}>
                      <Typography sx={{ fontSize: "1.5rem", lineHeight: 1 }}>{item.icon}</Typography>
                      <Typography sx={{ color: "#1E293B", fontWeight: 700, fontSize: "0.85rem", lineHeight: 1.4 }}>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SHG Ecosystem (Hierarchy) */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.7rem", fontWeight: 800, padding: "4px 12px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px",
            }}>
              SHG Ecosystem
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 1, fontSize: { xs: "1.4rem", md: "1.8rem" } }}>
              Community to District Federation
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "0.85rem", fontWeight: 500 }}>
              The SHG ecosystem builds from individual members to district-wide governance
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            {[
              { title: "Zilla Samakhya", desc: "1 district-level apex body", width: { xs: "100%", sm: "14rem" }, bg: "#0F172A", color: "#FFC107" },
              { title: "Mandal Samakhyas", desc: "15 mandal-level federations", width: { xs: "100%", sm: "16rem" }, bg: "#1E293B", color: "white" },
              { title: "Village Organisations", desc: "567 VOs managing SHG clusters", width: { xs: "100%", sm: "18rem" }, bg: "#334155", color: "white" },
              { title: "Self Help Groups", desc: "19,918 SHGs across 967 villages", width: { xs: "100%", sm: "20rem" }, bg: "#475569", color: "white" },
              { title: "SHG Members", desc: "2,20,759 women members", width: { xs: "100%", sm: "22rem" }, bg: "#64748B", color: "white" }
            ].map((node, idx) => (
              <Box key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                {idx > 0 && <Box sx={{ width: "2px", height: "1rem", bgcolor: "rgba(100,116,139,0.3)" }} />}
                <Box sx={{ 
                  bgcolor: node.bg, color: node.color, width: node.width, borderRadius: 2, p: 1.5, textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  border: idx === 0 ? "1px solid #FFC107" : "1px solid transparent"
                }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "0.9rem" }}>{node.title}</Typography>
                  <Typography sx={{ fontSize: "0.7rem", mt: 0.25, fontWeight: 500, opacity: 0.9 }}>{node.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SERP Initiatives */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.7rem", fontWeight: 800, padding: "4px 12px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px",
            }}>
              Programs
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 1, fontSize: { xs: "1.4rem", md: "1.8rem" } }}>
              SERP Initiatives in Vizianagaram
            </Typography>
          </Box>

          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2
          }}>
            {[
              { icon: "🏦", title: "SHG Bank Linkage", desc: "Facilitating formal credit access for 19,918 SHGs to fund micro-enterprises and livelihood activities." },
              { icon: "🏛️", title: "Village Organisations", desc: "567 VOs managing collective decision-making, community investment funds, and social entitlements." },
              { icon: "🏢", title: "Mandal Samakhyas", desc: "15 Mandal Samakhyas providing second-tier support to VOs across the district." },
              { icon: "📊", title: "Zilla Samakhya", desc: "1 Zilla Samakhya coordinating district-level SHG activities, policy advocacy, and enterprise support." },
              { icon: "🌾", title: "Livelihood Activities", desc: "Support for agriculture, animal husbandry, food processing, bamboo, cashew, and tribal enterprise." },
              { icon: "📱", title: "Financial Inclusion", desc: "Insurance, digital banking literacy, and PMJDY linkage for all 2,20,759 SHG members." }
            ].map((initiative, idx) => (
              <Box key={idx} sx={{
                bgcolor: "white", p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0",
                display: "flex", alignItems: "flex-start", gap: 1.5,
                transition: "all 0.2s", cursor: "pointer", height: "100%",
                "&:hover": { transform: "translateY(-2px)", borderColor: "#FFC107", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
              }}>
                <Typography sx={{ fontSize: "1.75rem", lineHeight: 1 }}>{initiative.icon}</Typography>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 0.25, fontSize: "0.9rem" }}>{initiative.title}</Typography>
                  <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.4 }}>{initiative.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
