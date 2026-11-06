"use client";

import Image from "next/image";
import { Box, Container, Typography, Grid, Chip, Paper, Button, Stack } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

export default function LivelihoodsPage() {
  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#FAFAFA", pb: 0 }}>
      {/* 1. EDITORIAL TOP HERO SECTION (MATCHING /about/district & /schemes/social EXACTLY) */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
          pb: { xs: 7, sm: 8, md: 9 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {/* Soft Gold Decorative Backdrop Blur Circle */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: { xs: "-10%", sm: "0%", md: "6%" },
            width: { xs: 340, sm: 460, md: 540 },
            height: { xs: 340, sm: 460, md: 540 },
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
          <Grid container spacing={{ xs: 3.5, md: 5 }} alignItems="center">
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 6.8 }}>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: { xs: "0.72rem", sm: "0.8rem" },
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 0.8,
                }}
              >
                COMMUNITY ENTERPRISE &amp; SUSTAINABLE EMPLOYMENT
              </Typography>

              <Typography
                component="h1"
                sx={{
                  color: "#082B50",
                  fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem" },
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  mb: 1.5,
                }}
              >
                Livelihood Projects
              </Typography>

              <Typography
                sx={{
                  color: "#B45309",
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  fontWeight: 700,
                  mb: 2,
                  fontFamily: "'Segoe UI', 'Noto Sans Telugu', sans-serif",
                }}
              >
                విజయనగరం జిల్లా జీవనోపాధి ప్రాజెక్టులు &amp; సమగ్ర గ్రామీణాభివృద్ధి
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: 620,
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                Enterprise projects creating sustainable employment, recurring household income, and financial independence for SHG women, tribal communities, and smallholder farmers across Vizianagaram.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/schemes"
                  sx={{
                    bgcolor: "#F5B800",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3.2,
                    py: 1.1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(245, 184, 0, 0.3)",
                    "&:hover": { bgcolor: "#D49D00" },
                  }}
                >
                  Explore Support Schemes
                </Button>
                <Button
                  component={Link}
                  href="/fpos"
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #CBD5E1",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3,
                    py: 1.1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#F8FAFC", borderColor: "#082B50" },
                  }}
                >
                  View 24 FPOs Network
                </Button>
              </Stack>
            </Grid>

            {/* Right Column: Fort & Livelihood Real Photo */}
            <Grid size={{ xs: 12, md: 5.2 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 320, md: 380 },
                  borderRadius: { xs: "24px", sm: "32px" },
                  overflow: "hidden",
                  boxShadow: "0 20px 45px -12px rgba(8, 43, 80, 0.18)",
                  border: "4px solid #FFFFFF",
                  bgcolor: "#FEF9C3",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/images/enterprise-cashew.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Category Pills Section */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 4 }, bgcolor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            {[
              { icon: "🤝", title: "SERP Corner", href: "/serp-corner", bgcolor: "#FEF3C7", borderColor: "#FDE68A", count: "Overview" },
              { icon: "🏕️", title: "Community Tourism", href: "/community-tourism", bgcolor: "#DCFCE7", borderColor: "#BBF7D0", count: "6 Destinations" },
              { icon: "👩", title: "Women Entrepreneurship", href: "/women-entrepreneurship", bgcolor: "#FCE7F3", borderColor: "#FBCFE8", count: "12 Projects" },
              { icon: "🌾", title: "FPOs Network", href: "/fpos", bgcolor: "#E0F2FE", borderColor: "#BAE6FD", count: "24 FPOs" },
              { icon: "👨‍👩‍👧‍👦", title: "Family Entrepreneur", href: "/one-family-one-entrepreneur", bgcolor: "#F3E8FF", borderColor: "#E9D5FF", count: "Initiative" },
              { icon: "🏺", title: "Artisans & Crafts", href: "/mart", bgcolor: "#F1F5F9", borderColor: "#CBD5E1", count: "Showcase" },
            ].map((cat, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                <Paper
                  component={Link}
                  href={cat.href}
                  elevation={0}
                  sx={{
                    alignItems: "center",
                    bgcolor: cat.bgcolor,
                    border: `1px solid ${cat.borderColor}`,
                    borderRadius: "14px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    minHeight: { xs: 104, sm: 114, md: 122 },
                    p: { xs: 1.5, sm: 1.75, md: 2 },
                    textAlign: "center",
                    textDecoration: "none",
                    transition: "all 0.22s ease",
                    "&:hover": {
                      borderColor: "#F59E0B",
                      boxShadow: "0 8px 18px -4px rgba(0, 0, 0, 0.08)",
                      transform: "translateY(-3px)",
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      fontSize: { xs: "1.6rem", sm: "1.85rem", md: "2rem" },
                      height: { xs: 34, sm: 38 },
                      justifyContent: "center",
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {cat.icon}
                  </Box>
                  <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: { xs: "0.76rem", sm: "0.8rem" },
                        fontWeight: 750,
                        lineHeight: 1.25,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {cat.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: { xs: "0.64rem", sm: "0.68rem" },
                      fontWeight: 650,
                      mt: 0.6,
                    }}
                  >
                    {cat.count}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Grid Section */}
      <Box sx={{ pt: { xs: 2.5, sm: 3, md: 3.5, lg: 4 }, pb: { xs: 4, md: 5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              Projects
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Featured Livelihoods
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "1rem", fontWeight: 500 }}>
              Flagship initiatives driving economic growth in Vizianagaram
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={2}>
            {[
              {
                category: "Startup Showcase",
                title: "Vizianagaram Cafe",
                desc: "A women-run tribal products cafe selling millet products, cashew, and dry fruits. Generates monthly profit and employment for tribal women.",
                location: "ITDA Petrol Bunk",
                stats: "₹1.5L Sales / mo",
                img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "Value Chain Enterprise",
                title: "Cashew Processing Unit",
                desc: "Processing raw cashew nuts into marketable finished products. Generates high sales and employs 20 tribal youth in value addition.",
                location: "Market Yard",
                stats: "₹77.6L Total Sales",
                img: "https://images.unsplash.com/photo-1596484552993-86d1a1081515?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "Flagship Project",
                title: "Hill Broom Manufacturing",
                desc: "Large-scale tribal enterprise manufacturing hill brooms. Creates direct employment for 450 rural women and benefits 2,500 farmers.",
                location: "Multiple Mandals",
                stats: "64.8L Brooms/yr",
                img: "https://images.unsplash.com/photo-1616422285623-14d2417eeb88?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "100% Achievement",
                title: "Bamboo Mission",
                desc: "Bamboo cultivation across Bhamini and Seethampeta mandals. Versatile crop used in construction, furniture, and handicrafts.",
                location: "Bhamini & Seethampeta",
                stats: "28,860 Plants",
                img: "https://images.unsplash.com/photo-1582260662234-8c83e2003d76?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "Circular Economy",
                title: "Banana Fiber Extraction",
                desc: "Transforming agricultural waste into livelihood opportunity. Processing pseudo-stems into fiber for textiles and eco-products.",
                location: "District-wide",
                stats: "5,500 Hectares",
                img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "Innovation Project",
                title: "Exotic Vegetable Project",
                desc: "Tribal farmers growing high-value exotic vegetables (colored capsicum, broccoli) targeting premium urban markets.",
                location: "Komarada FPO",
                stats: "Premium Market",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "Integrated Farming",
                title: "Integrated Farming Clusters",
                desc: "Combining paddy, horticulture, fishery, and kitchen gardens on the same farm to multiply income sources.",
                location: "15 Mandals",
                stats: "45 IFCs",
                img: "https://images.unsplash.com/photo-1593483316242-efb5420596ca?w=600&q=80&auto=format&fit=crop"
              },
              {
                category: "Biodiversity",
                title: "Desi Seed Banks",
                desc: "Community-managed desi seed banks preserving native varieties free from commercial dependence.",
                location: "6 Mandals",
                stats: "Multiple Seeds",
                img: "/images/enterprise-millets.jpg"
              }
            ].map((project, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box 
                  component={Link} 
                  href="#"
                  sx={{ 
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    bgcolor: "white", 
                    borderRadius: "16px", 
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px -2px rgba(15,23,42,0.04)",
                    transition: "all 0.28s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 24px -4px rgba(0,0,0,0.08)",
                      borderColor: "#CBD5E1",
                      "& .project-img": { transform: "scale(1.05)" },
                      "& .project-arrow": { transform: "translateX(4px)" }
                    }
                  }}
                >
                  <Box sx={{ position: "relative", height: { xs: 160, sm: 150, md: 160 }, overflow: "hidden", borderBottom: "1px solid #F1F5F9" }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="project-img"
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box sx={{ 
                      position: "absolute", top: 8, right: 8, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)",
                      color: "#1E293B", fontSize: "0.6rem", fontWeight: 800, px: 1, py: 0.2, borderRadius: 10,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textTransform: "uppercase", letterSpacing: "0.05em"
                    }}>
                      {project.category}
                    </Box>
                  </Box>
                  <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                      <Typography sx={{ fontSize: "0.6rem", color: "#64748B", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        📍 {project.location}
                      </Typography>
                      <Typography sx={{ color: "#D97706", fontSize: "0.65rem", fontWeight: 800 }}>
                        {project.stats}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "#1E293B", fontWeight: 800, fontSize: "0.95rem", mb: 0.75, lineHeight: 1.3 }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: "#475569", fontSize: "0.75rem", lineHeight: 1.5, mb: 1.5, flexGrow: 1, fontWeight: 500 }}>
                      {project.desc}
                    </Typography>
                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#1E293B", fontSize: "0.7rem", fontWeight: 800, mt: "auto" }}>
                      Explore Project <ArrowForwardIcon className="project-arrow" sx={{ fontSize: 14, transition: "transform 0.2s ease" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        component="section"
        sx={{
          bgcolor: "#FFC107",
          borderTop: "1px solid rgba(180, 83, 9, 0.25)",
          color: "#1F1700",
          overflow: "hidden",
          position: "relative",
          py: { xs: 2.2, md: 2.8 },
          textAlign: "center",
        }}
      >
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: "#1F1700",
              fontSize: { xs: "1.35rem", sm: "1.65rem", md: "1.85rem" },
              fontWeight: 850,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Support a Livelihood Project
          </Typography>
          <Typography
            sx={{
              color: "rgba(31, 23, 0, 0.88)",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: 540,
              mt: 0.75,
              mx: "auto",
            }}
          >
            Want to partner, invest in, or learn more? Contact DRDA Vizianagaram or explore registered FPO networks.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1.25}
            sx={{
              mt: 1.75,
              mx: "auto",
            }}
          >
            <Button
              component={Link}
              href="tel:08954220123"
              startIcon={<PhoneRoundedIcon sx={{ fontSize: "15px !important" }} />}
              sx={{
                background: "#161102",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.15)",
                color: "#FFFFFF !important",
                fontSize: "0.8rem",
                fontWeight: 700,
                minHeight: 38,
                px: 2.5,
                py: 0.75,
                textTransform: "none",
                transition: "all 0.2s ease",
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: 300, sm: "none" },
                "&:hover": {
                  background: "#000000",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                  transform: "translateY(-1px)",
                },
              }}
              variant="contained"
            >
              Contact DRDA
            </Button>
            <Button
              component={Link}
              href="/fpos"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
              sx={{
                background: "#0F172A",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.15)",
                color: "#FFFFFF !important",
                fontSize: "0.8rem",
                fontWeight: 700,
                minHeight: 38,
                px: 2.5,
                py: 0.75,
                textTransform: "none",
                transition: "all 0.2s ease",
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: 300, sm: "none" },
                "&:hover": {
                  background: "#000000",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                  transform: "translateY(-1px)",
                },
              }}
              variant="contained"
            >
              View FPOs
            </Button>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
}
