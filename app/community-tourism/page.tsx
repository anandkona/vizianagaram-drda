"use client";

import Image from "next/image";
import { Box, Container, Typography, Grid, Breadcrumbs, Paper, Chip } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CommunityTourismPage() {
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
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Link href="/livelihoods" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Livelihoods</Link>
            <Typography sx={{ color: "#2B2100", fontWeight: 700, fontSize: "0.8rem" }}>Community Tourism</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Community Led Tourism
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Discover Vizianagaram through its forests, tribal culture, waterfalls, and authentic village experiences — while supporting local livelihoods.
          </Typography>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ py: { xs: 2, md: 2.5 }, bgcolor: "#0F172A", color: "white", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }, gap: 2, textAlign: "center" }}>
            {[
              { value: "22", label: "Livelihood Members", sub: "Active Participants" },
              { value: "₹11 Lakhs", label: "Loan Support", sub: "Disbursed amount" },
              { value: "10", label: "Bike Riders", sub: "Trained guides" },
              { value: "45+", label: "Jobs Created", sub: "Direct employment" }
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
                <Typography sx={{ fontSize: { xs: "1.75rem", sm: "2rem" }, fontWeight: 900, lineHeight: 1, color: "#FFC107" }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: "0.7rem", mt: 1, color: "rgba(255,255,255,0.9)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</Typography>
                <Typography sx={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", mt: 0.25 }}>{stat.sub}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Main Section */}
      <Box sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 3, md: 4 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ display: "inline-block", bgcolor: "#FFF8E1", color: "#B45309", px: 1.5, py: 0.5, borderRadius: 1, fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", mb: 2 }}>
                About the Initiative
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, color: "#1E293B", mb: 4, fontSize: { xs: "1.8rem", md: "2.4rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Empowering locals through Community-Led Tourism.
              </Typography>
              
              <Box sx={{ pl: 3, borderLeft: "4px solid #FFC107", mb: 4 }}>
                <Typography sx={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 600, mb: 2 }}>
                  Unlike conventional tourism, here the benefits flow directly to local families, tribal artisans, and village homestay providers.
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Run entirely by SHG members and local youth under DRDA's guidance, this program creates sustainable income while sharing Vizianagaram's rich cultural and natural heritage.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {["Homestays", "Village Tourism", "Eco Tourism", "Cultural Tourism", "Handicrafts", "Food Trails"].map((tag, idx) => (
                  <Chip key={idx} label={tag} sx={{
                    bgcolor: "transparent", color: "#1E293B", fontWeight: 700, fontSize: "0.75rem",
                    border: "1px solid #CBD5E1", borderRadius: 8, transition: "all 0.2s",
                    "&:hover": { bgcolor: "#F8FAFC", borderColor: "#94A3B8" }
                  }} />
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ bgcolor: "#F8FAFC", borderRadius: 4, p: { xs: 3, md: 4 }, border: "1px solid #E2E8F0" }}>
                <Typography sx={{ fontWeight: 900, color: "#1E293B", mb: 3, fontSize: "1.3rem" }}>Why Visit Vizianagaram?</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
                  {[
                    { icon: "🌳", text: "Dense forests & rich biodiversity" },
                    { icon: "🌊", text: "Scenic waterfalls & trails" },
                    { icon: "🎭", text: "6 distinct tribal cultures" },
                    { icon: "🍱", text: "Authentic millet & forest cuisine" },
                    { icon: "🧶", text: "Handmade bamboo & cane crafts" },
                    { icon: "🏡", text: "Genuine tribal homestays" }
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ bgcolor: "white", p: 2, borderRadius: 3, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 1, transition: "transform 0.2s", "&:hover": { transform: "translateY(-2px)", borderColor: "#CBD5E1", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" } }}>
                      <Typography sx={{ fontSize: "1.75rem", lineHeight: 1 }}>{item.icon}</Typography>
                      <Typography sx={{ color: "#1E293B", fontWeight: 700, fontSize: "0.85rem", lineHeight: 1.4 }}>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Experiences Section */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 14px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px",
            }}>
              Experiences
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 1.5, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
              Tourism Experiences
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "0.95rem" }}>
              Authentic, community-led, and responsible tourism options
            </Typography>
          </Box>

          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2
          }}>
            {[
              { icon: "🏡", title: "Homestays", desc: "Experience tribal life by staying with local families in authentic village settings." },
              { icon: "🌿", title: "Eco Tourism", desc: "Forest trails, waterfalls, and biodiversity experiences in the Eastern Ghats." },
              { icon: "🎭", title: "Cultural Tourism", desc: "Tribal dances, art, music, festivals, and traditional crafts experiences." },
              { icon: "🏞️", title: "Village Tourism", desc: "Guided tours through tribal villages showcasing traditional lifestyle and community life." },
              { icon: "🧶", title: "Handicrafts", desc: "Visit artisan communities and buy authentic bamboo, cane, and terracotta crafts." },
              { icon: "🍱", title: "Food Trails", desc: "Traditional tribal cuisine experiences — from forest produce to millets to tribal delicacies." }
            ].map((exp, idx) => (
              <Box key={idx} sx={{
                bgcolor: "white", p: 1.5, borderRadius: 2, border: "1px solid #E2E8F0",
                display: "flex", alignItems: "flex-start", gap: 1.5,
                transition: "all 0.2s", cursor: "pointer", height: "100%",
                "&:hover": { transform: "translateY(-2px)", borderColor: "#FFC107", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }
              }}>
                <Box sx={{ fontSize: "1.5rem", lineHeight: 1, mt: 0.25 }}>{exp.icon}</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 0.25, fontSize: "0.9rem" }}>{exp.title}</Typography>
                  <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.4 }}>{exp.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Destinations */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFF8E1", color: "#D97706",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 14px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px",
            }}>
              Destinations
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
              Tourism Spots
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "1rem" }}>
              Curated experiences across Vizianagaram
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 5, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2
          }}>
            {[
              { title: "Thandava Waterfalls", tag: "Nature", location: "Kurupam Mandal", desc: "Scenic waterfall accessible via tribal village trail — a popular eco-tourism spot.", img: "https://images.unsplash.com/photo-1543881476-805177263be9?w=600&q=80&auto=format&fit=crop" },
              { title: "Borra Caves Region", tag: "Heritage", location: "Anantagiri Mandal", desc: "Ancient cave system with cultural significance and trekking opportunities.", img: "https://images.unsplash.com/photo-1518218141444-46ac203af70c?w=600&q=80&auto=format&fit=crop" },
              { title: "Kondh Tribal Village", tag: "Cultural", location: "Seethampeta Mandal", desc: "Authentic Kondh tribal community offering homestay and cultural immersion experiences.", img: "https://images.unsplash.com/photo-1621255855217-1a48c47101de?w=600&q=80&auto=format&fit=crop" },
              { title: "Bamboo Forest Trail", tag: "Eco", location: "Bhamini Mandal", desc: "Walk through the Bamboo Mission plantation area — a green corridor in the Eastern Ghats.", img: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=600&q=80&auto=format&fit=crop" },
              { title: "Vizianagaram Cafe Experience", tag: "Food", location: "Vizianagaram Mandal", desc: "Taste authentic tribal millet products, cashew, and home-made chocolates at Vizianagaram Cafe.", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80&auto=format&fit=crop" },
              { title: "Cashew Harvest Trail", tag: "Agri", location: "Vizianagaram Mandal", desc: "Visit the cashew processing unit and experience the cashew harvest and processing journey.", img: "https://images.unsplash.com/photo-1596484552993-86d1a1081515?w=600&q=80&auto=format&fit=crop" }
            ].map((spot, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box 
                  component={Link} 
                  href="#"
                  sx={{ 
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    bgcolor: "white", 
                    borderRadius: 2, 
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px -5px rgba(0,0,0,0.08)",
                      borderColor: "#FFC107",
                      "& .spot-img": { transform: "scale(1.05)" },
                      "& .spot-arrow": { transform: "translateX(4px)" }
                    }
                  }}
                >
                  <Box sx={{ position: "relative", height: 130, overflow: "hidden", borderBottom: "1px solid #F1F5F9" }}>
                    <Image
                      src={spot.img}
                      alt={spot.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="spot-img"
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box sx={{ 
                      position: "absolute", top: 8, right: 8, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)",
                      color: "#D97706", fontSize: "0.6rem", fontWeight: 800, px: 1, py: 0.2, borderRadius: 10,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textTransform: "uppercase", letterSpacing: "0.05em"
                    }}>
                      {spot.tag}
                    </Box>
                  </Box>
                  <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography sx={{ fontSize: "0.6rem", color: "#64748B", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5 }}>
                      📍 {spot.location}
                    </Typography>
                    <Typography sx={{ color: "#1E293B", fontWeight: 800, fontSize: "0.95rem", mb: 0.75, lineHeight: 1.3 }}>
                      {spot.title}
                    </Typography>
                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.5, mb: 1.5, flexGrow: 1, fontWeight: 500 }}>
                      {spot.desc}
                    </Typography>
                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#1E293B", fontSize: "0.7rem", fontWeight: 800, mt: "auto" }}>
                      View Experience <ArrowForwardIcon className="spot-arrow" sx={{ fontSize: 14, transition: "transform 0.2s ease" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ bgcolor: "#FFC107", color: "#000000", py: { xs: 2, md: 2.5 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.5rem", md: "2rem" }, letterSpacing: "-0.02em" }}>
            Plan Your Visit
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.8)", fontSize: "0.95rem", mb: 3, maxWidth: 600, mx: "auto", fontWeight: 600 }}>
            Contact us to plan a community tourism experience and support tribal livelihoods.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box component={Link} href="tel:08954220123" sx={{
              bgcolor: "#000000", color: "white !important", px: 3, py: 1.25, borderRadius: 8, fontSize: "0.9rem", fontWeight: 800, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }
            }}>
              Call DRDA for Tourism Inquiry <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
