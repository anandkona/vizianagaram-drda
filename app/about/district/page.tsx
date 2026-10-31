"use client";

import { Box, Card, CardContent, Container, Grid, Typography, Stack, Button, Breadcrumbs, Link as MuiLink } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExploreIcon from "@mui/icons-material/Explore";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";

// Vizianagaram Stats
const stats = [
  { value: "4,122 km²", label: "Geographical Area", icon: "map" },
  { value: "19,30,811", label: "Population (2011)", icon: "people" },
  { value: "3", label: "Revenue Divisions", icon: "accountTree" },
  { value: "27", label: "Mandals", icon: "map" },
  { value: "982", label: "Revenue Villages", icon: "village" },
  { value: "777", label: "Gram Panchayats", icon: "accountBalance" },
  { value: "53.21%", label: "Literacy Rate", icon: "school" },
  { value: "63.4%", label: "Urbanization", icon: "infrastructure" }
];

const SectionHeader = ({ title }: { title: string }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ width: 30, height: 4, bgcolor: "#FACC15", borderRadius: 2, mb: 1.5 }} />
    <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
      {title}
    </Typography>
  </Box>
);

export default function DistrictProfilePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        pt: { xs: 2, sm: 2.5, md: 3 },
        pb: { xs: 2.5, sm: 3, md: 3.5 },
        }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: { xs: "0.75rem", sm: "0.8rem" }, fontWeight: 600 }}>
            <MuiLink component={Link} href="/" sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "black" } }}>
              Home
            </MuiLink>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>District Profile</Typography>
          </Breadcrumbs>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, background: "#18181B", color: "#FACC15", px: { xs: 1, sm: 1.25 }, py: 0.4, borderRadius: 20, fontSize: { xs: "0.68rem", sm: "0.72rem" }, fontWeight: 700 }}>
              <CalendarTodayIcon sx={{ fontSize: 13 }} /> Formed 01 June 1979
            </Box>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, background: "rgba(0,0,0,0.08)", color: "#18181B", border: "1px solid rgba(0,0,0,0.12)", px: { xs: 1, sm: 1.25 }, py: 0.4, borderRadius: 20, fontSize: { xs: "0.68rem", sm: "0.72rem" }, fontWeight: 600 }}>
              <ExploreIcon sx={{ fontSize: 14 }} /> 18°07' N, 83°24' E
            </Box>
          </Stack>

          <Box sx={{ maxWidth: 850 }}>
            <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.25rem", lg: "2.5rem" }, letterSpacing: "-0.02em", color: "#1F1700", lineHeight: 1.2 }}>
              Vizianagaram District Profile
            </Typography>
            <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.82rem", sm: "0.92rem", md: "1rem" }, maxWidth: 680, lineHeight: 1.5, fontWeight: 500 }}>
              The land of royal heritage, agricultural abundance, and educational excellence — a vibrant coastal district of Andhra Pradesh.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Collector Message Section */}
      <Box sx={{ pt: 0, pb: 0, px: { xs: 1.5, sm: 2.5, md: 3, lg: 4 }, position: "relative", zIndex: 10, mt: { xs: -1, sm: -1.5, md: -2 } }}>
        <Container maxWidth="lg" disableGutters>
          <Box sx={{
            background: "#FFFFFF",
            borderRadius: { xs: "16px", sm: "20px", md: "24px" },
            boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            border: "1px solid rgba(0,0,0,0.04)"
          }}>
            {/* Left Column (Dark block) */}
            <Box sx={{
              width: { xs: "100%", md: "300px", lg: "320px" },
              background: "#3F3210",
              p: { xs: 2.5, sm: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              <Box sx={{
                width: "100%",
                maxWidth: { xs: 130, sm: 150, md: 160 },
                aspectRatio: "3/4",
                borderRadius: "16px",
                overflow: "hidden",
                border: "4px solid rgba(255,255,255,0.1)",
                mb: { xs: 2, sm: 2.5, md: 3 }
              }}>
                <Box sx={{
                  width: "100%", height: "100%",
                  backgroundImage: "url('/leaders/collector.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} />
              </Box>
              <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" }, mb: 0.25, letterSpacing: "-0.01em" }}>
                Sri S. Ram Sundar Reddy, I.A.S.
              </Typography>
              <Typography sx={{ color: "#FACC15", fontSize: { xs: "0.75rem", sm: "0.8rem" }, fontWeight: 600, mb: { xs: 2, sm: 2.5, md: 3 } }}>
                District Collector & Magistrate
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ width: "100%", maxWidth: { xs: 260, md: "100%" } }}>
                <Button fullWidth variant="outlined" startIcon={<PhoneIcon sx={{ fontSize: 14 }} />} sx={{ borderColor: "rgba(255,255,255,0.2)", color: "white", borderRadius: "100px", fontSize: "0.75rem", textTransform: "none", py: 0.75, "&:hover": { borderColor: "#FACC15" } }}>
                  Office
                </Button>
                <Button fullWidth variant="outlined" startIcon={<LanguageIcon sx={{ fontSize: 14 }} />} sx={{ borderColor: "rgba(255,255,255,0.2)", color: "white", borderRadius: "100px", fontSize: "0.75rem", textTransform: "none", py: 0.75, "&:hover": { borderColor: "#FACC15" } }}>
                  Collectorate
                </Button>
              </Stack>
            </Box>

            {/* Right Column (Message) */}
            <Box sx={{ flex: 1, p: { xs: 2.5, sm: 3.5, md: 4, lg: 5 } }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "#D97706", fontSize: { xs: "0.7rem", sm: "0.75rem" }, fontWeight: 700, mb: { xs: 1.5, sm: 2 }, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <PortalIcon name="support" sx={{ fontSize: 16 }} />
                Message from the Collector
              </Box>

              <Box sx={{ position: "relative" }}>
                <FormatQuoteIcon sx={{ position: "absolute", top: -15, left: -15, fontSize: { xs: 40, sm: 50 }, color: "rgba(250,204,21,0.15)", zIndex: 0 }} />
                <Typography sx={{ color: "#1E293B", fontSize: { xs: "0.92rem", sm: "1rem", md: "1.08rem" }, lineHeight: 1.6, mb: { xs: 2, sm: 2.5, md: 3 }, fontWeight: 500, position: "relative", zIndex: 1, letterSpacing: "-0.01em" }}>
                  Vizianagaram is a district of immense heritage and vibrant communities. My commitment is to ensure that every welfare scheme reaches every household, and every citizen has access to government services with ease and dignity.
                </Typography>
              </Box>

              <Box sx={{ borderLeft: "3px solid #FACC15", pl: 2, mb: { xs: 2, sm: 2.5, md: 3 } }}>
                <Typography sx={{ fontWeight: 700, color: "#D97706", fontSize: "0.7rem", letterSpacing: "0.1em", mb: 0.5, textTransform: "uppercase" }}>
                  Vision for the District
                </Typography>
                <Typography sx={{ color: "#475569", fontStyle: "italic", fontSize: { xs: "0.85rem", sm: "0.92rem" }, lineHeight: 1.5 }}>
                  "A vibrant coastal district where development is inclusive, education is universal, and heritage is preserved."
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {["Quality Education for All", "Agricultural Prosperity", "Accessible Citizen Services", "Heritage Conservation"].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#334155", fontWeight: 500, fontSize: { xs: "0.8rem", sm: "0.85rem" } }}>
                      <CheckCircleIcon sx={{ color: "#FACC15", fontSize: 18 }} />
                      {item}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 8 Stat Cards */}
      <Box sx={{ pt: { xs: 2, sm: 2.5, md: 3 }, pb: { xs: 1.5, sm: 2, md: 2.5 }, px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
            {stats.map((stat, idx) => (
              <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                <Box sx={{
                  background: "#FFFFFF",
                  borderRadius: { xs: "14px", sm: "18px", md: "20px" },
                  p: { xs: 1.75, sm: 2, md: 2.5 },
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(0,0,0,0.02)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    borderColor: "rgba(250,204,21,0.3)"
                  }
                }}>
                  <Box sx={{ color: "#FACC15", mb: 0.75 }}><PortalIcon name={stat.icon} sx={{ fontSize: { xs: 22, sm: 26 } }} /></Box>
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" }, color: "#0F172A", mb: 0.25, letterSpacing: "-0.01em" }}>{stat.value}</Typography>
                  <Typography sx={{ fontSize: { xs: "0.72rem", sm: "0.76rem", md: "0.78rem" }, color: "#64748B", fontWeight: 500 }}>{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Official District Identity & Boundaries */}
      <Box sx={{ py: { xs: 2, sm: 2.5, md: 3 }, background: "#F8FAFC", borderBottom: "1px solid rgba(0,0,0,0.03)", px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} alignItems="stretch">
            {/* Identity */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ background: "#FFFFFF", borderRadius: { xs: "18px", md: "24px" }, overflow: "hidden", height: "100%", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
                <Box sx={{ background: "linear-gradient(to right, #0F172A, #1E293B)", p: { xs: 2, sm: 2.5, md: 3 }, color: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box sx={{ width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }, background: "rgba(0,0,0,0.06)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <PortalIcon name="government" sx={{ fontSize: { xs: 20, sm: 24 } }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255,255,255,0.7)" }}>Official District Identity</Typography>
                      <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" }, fontWeight: 800, letterSpacing: "-0.01em" }}>Vizianagaram</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ background: "rgba(0,0,0,0.06)", px: { xs: 1.5, sm: 2 }, py: 0.5, borderRadius: "100px", fontSize: { xs: "0.65rem", sm: "0.7rem" }, fontWeight: 700, border: "1px solid rgba(0,0,0,0.1)" }}>AP - India</Box>
                </Box>
                <Box sx={{ p: { xs: 2, sm: 2.5, md: 3.5 }, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
                    {[
                      { label: "Headquarters", value: "Vizianagaram" },
                      { label: "Formed On", value: "01 June 1979" },
                      { label: "Revenue Divisions", value: "Vizianagaram · Cheepurupalli · Bobbili" },
                      { label: "Co-ordinates", value: "18°07' N, 83°24' E" },
                      { label: "Major Rivers", value: "Nagavali & Champavathi" },
                      { label: "Literacy Rate", value: "53.21%" },
                    ].map((item, idx) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                        <Box sx={{ borderBottom: "1px solid #F1F5F9", pb: 1, mb: 0.5 }}>
                          <Typography sx={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.25 }}>{item.label}</Typography>
                          <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.92rem", md: "0.95rem" }, color: "#1E293B", fontWeight: 700 }}>{item.value}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>

            {/* Boundaries */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{
                background: "linear-gradient(to bottom right, #0F172A, #1E293B)",
                borderRadius: { xs: "18px", md: "24px" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: { xs: 2.5, sm: 3, md: 3.5 },
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
              }}>
                <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Typography sx={{ color: "white", fontWeight: 800, fontSize: { xs: "1.1rem", sm: "1.25rem" }, display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                    <ExploreIcon sx={{ color: "#FACC15", fontSize: 22 }} /> District Boundaries
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: { xs: "0.8rem", sm: "0.85rem" } }}>Who we border, in every direction — hover the board to level it.</Typography>
                </Box>

                <Box sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  perspective: "1000px",
                  py: { xs: 2, sm: 1 },
                  "&:hover .boundary-board": { transform: "rotateX(0deg) rotateY(0deg)" }
                }}>
                  <Box className="boundary-board" sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: { xs: 230, sm: 260, md: 280 },
                    aspectRatio: "1/1",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: { xs: 1, sm: 1.5 },
                    transition: "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    transform: "rotateX(18deg) rotateY(-12deg)",
                    transformStyle: "preserve-3d",
                  }}>
                    {/* North (Vizianagaram) */}
                    <Box sx={{ gridColumn: 2, gridRow: 1, transform: "translateZ(18px)", transition: "all 0.3s" }}>
                      <Box sx={{ width: "100%", height: "100%", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 0.75, "&:hover": { background: "rgba(255,255,255,0.1)" } }}>
                        <Typography sx={{ color: "#FACC15", fontSize: "0.6rem", fontWeight: 800 }}>N</Typography>
                        <Typography sx={{ color: "white", fontSize: { xs: "0.65rem", sm: "0.7rem" }, fontWeight: 700, lineHeight: 1.2, my: 0.5 }}>Vizianagaram</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>District</Typography>
                      </Box>
                    </Box>
                    {/* East (Srikakulam) */}
                    <Box sx={{ gridColumn: 3, gridRow: 2, transform: "translateZ(18px)", transition: "all 0.3s" }}>
                      <Box sx={{ width: "100%", height: "100%", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 0.75, "&:hover": { background: "rgba(255,255,255,0.1)" } }}>
                        <Typography sx={{ color: "#FACC15", fontSize: "0.6rem", fontWeight: 800 }}>E</Typography>
                        <Typography sx={{ color: "white", fontSize: { xs: "0.65rem", sm: "0.7rem" }, fontWeight: 700, lineHeight: 1.2, my: 0.5 }}>Srikakulam</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>District</Typography>
                      </Box>
                    </Box>
                    {/* South (Bay of Bengal) */}
                    <Box sx={{ gridColumn: 2, gridRow: 3, transform: "translateZ(18px)", transition: "all 0.3s" }}>
                      <Box sx={{ width: "100%", height: "100%", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 0.75, "&:hover": { background: "rgba(255,255,255,0.1)" } }}>
                        <Typography sx={{ color: "#FACC15", fontSize: "0.6rem", fontWeight: 800 }}>S</Typography>
                        <Typography sx={{ color: "white", fontSize: { xs: "0.65rem", sm: "0.7rem" }, fontWeight: 700, lineHeight: 1.2, my: 0.5 }}>Bay of Bengal</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Coastline</Typography>
                      </Box>
                    </Box>
                    {/* West (Visakhapatnam) */}
                    <Box sx={{ gridColumn: 1, gridRow: 2, transform: "translateZ(18px)", transition: "all 0.3s" }}>
                      <Box sx={{ width: "100%", height: "100%", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 0.75, "&:hover": { background: "rgba(255,255,255,0.1)" } }}>
                        <Typography sx={{ color: "#FACC15", fontSize: "0.6rem", fontWeight: 800 }}>W</Typography>
                        <Typography sx={{ color: "white", fontSize: { xs: "0.65rem", sm: "0.7rem" }, fontWeight: 700, lineHeight: 1.2, my: 0.5 }}>Visakhapatnam</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>District</Typography>
                      </Box>
                    </Box>
                    {/* Center (Vizianagaram) */}
                    <Box sx={{ gridColumn: 2, gridRow: 2, transform: "translateZ(55px)", transition: "all 0.3s" }}>
                      <Box sx={{
                        width: "100%", height: "100%",
                        borderRadius: "16px",
                        background: "linear-gradient(to bottom right, #1E3A8A, #3B82F6)",
                        border: "2px solid rgba(250,204,21,0.5)",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
                        boxShadow: "0 20px 30px rgba(0,0,0,0.3)"
                      }}>
                        <ExploreIcon sx={{ color: "#FACC15", fontSize: { xs: 20, sm: 24 }, mb: 0.5 }} />
                        <Typography sx={{ color: "white", fontSize: { xs: "0.6rem", sm: "0.65rem" }, fontWeight: 800, lineHeight: 1.1 }}>Vizianagaram<br />District</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ pt: { xs: 2, sm: 2.5, md: 3 }, pb: { xs: 1.5, sm: 2, md: 2.5 }, px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Box sx={{ background: "#FFFFFF", borderRadius: { xs: "18px", md: "24px" }, overflow: "hidden", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
            <Box sx={{ p: { xs: 1.5, sm: 2 }, background: "#FAFAFA", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
              <Typography component="div" sx={{ fontWeight: 700, fontSize: { xs: "0.82rem", sm: "0.9rem" }, color: "#0F172A", display: "flex", alignItems: "center", gap: 1.25 }}>
                <Box component="span" sx={{ background: "#FACC15", width: 8, height: 8, borderRadius: "50%" }} /> Locate on Map
              </Typography>
              <MuiLink href="#" sx={{ color: "#475569", fontSize: { xs: "0.78rem", sm: "0.85rem" }, fontWeight: 500, textDecoration: "none", "&:hover": { color: "#0F172A" } }}>Open in Google Maps →</MuiLink>
            </Box>
            <Box sx={{ height: { xs: 260, sm: 320, md: 360 }, background: "#E2E8F0", position: "relative" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486047.6698947672!2d83.15170327315579!3d18.176461823901413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b8d6d6118d183%3A0xc34de7c80a0684f!2sVizianagaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 3 Highlights Cards */}
      <Box sx={{ pb: { xs: 2, sm: 2.5, md: 3 }, px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
            {["Maharaja's College & Educational Institutions", "Heritage Fort & Cultural Landmarks", "Ramanarayanam Spiritual Park"].map((text, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box sx={{
                  background: "#FFFFFF",
                  borderRadius: { xs: "16px", md: "20px" },
                  p: { xs: 2, sm: 2.5 },
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                    borderColor: "rgba(250,204,21,0.4)"
                  }
                }}>
                  <Box sx={{ background: "#FEF08A", p: 1, borderRadius: "12px", color: "#854D0E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircleIcon sx={{ fontSize: { xs: 20, sm: 22 } }} />
                  </Box>
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.85rem", sm: "0.92rem", md: "0.95rem" }, lineHeight: 1.4, color: "#1E293B" }}>{text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Rivers & Water */}
      <Box sx={{ py: { xs: 2, sm: 2.5, md: 3 }, px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ display: "inline-block", background: "#E8F5E9", color: "#2E7D32", fontSize: "0.75rem", fontWeight: 600, px: 1.5, py: 0.5, borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Lifelines
            </Typography>
            <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.75rem" }, fontWeight: 700, color: "#1E293B", mb: 0.5 }}>
              Rivers & Water
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.95rem" }, lineHeight: 1.5, maxWidth: 600 }}>
              The region is drained by major rivers flowing towards the Bay of Bengal.
            </Typography>
            <Box sx={{ mt: 1, height: 4, width: 64, background: "#FACC15", borderRadius: "100px" }} />
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            <Grid size={{ xs: 12, md: 5, lg: 4 }}>
              <Box sx={{ background: "linear-gradient(to bottom right, #0284C7, #0369A1)", color: "white", borderRadius: { xs: "18px", md: "24px" }, p: { xs: 2.5, sm: 3, md: 3.5 }, height: "100%", position: "relative", overflow: "hidden" }}>
                <Box sx={{ display: "inline-flex", alignItems: "center", px: 1.5, py: 0.5, borderRadius: "100px", fontSize: "0.75rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.15)", mb: 2 }}>
                  Major Rivers
                </Box>
                <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.45rem", md: "1.5rem" }, fontWeight: 800, mb: 1, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  Nagavali &<br />Champavathi
                </Typography>
                <Typography sx={{ color: "#E0F2FE", fontSize: { xs: "0.82rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
                  These primary rivers serve as lifelines for agriculture, irrigation, and drinking water across Vizianagaram district.
                </Typography>
                <PortalIcon name="water" sx={{ position: "absolute", bottom: -16, right: -16, fontSize: { xs: 90, sm: 110, md: 120 }, color: "rgba(255,255,255,0.1)", zIndex: 0 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7, lg: 8 }}>
              <Box sx={{ background: "#FFFFFF", borderRadius: { xs: "18px", md: "24px" }, p: { xs: 2.5, sm: 3, md: 3.5 }, border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", height: "100%" }}>
                <Typography sx={{ fontWeight: 700, color: "#1E293B", mb: 2, display: "flex", alignItems: "center", gap: 1, fontSize: { xs: "0.95rem", sm: "1.05rem" } }}>
                  <PortalIcon name="water" sx={{ color: "#0284C7", fontSize: 20 }} />
                  Reservoirs & Streams
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                  {["Gosthani", "Suvarnamukhi", "Vegavathi", "Gomukhi"].map((riv, i) => (
                    <Box key={i} sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, background: "#EFF6FF", color: "#0369A1", fontSize: { xs: "0.78rem", sm: "0.85rem" }, fontWeight: 600, px: { xs: 1.5, sm: 2 }, py: 0.6, borderRadius: "100px", border: "1px solid #BFDBFE" }}>
                      <PortalIcon name="water" sx={{ fontSize: 14 }} />
                      {riv}
                    </Box>
                  ))}
                </Stack>
                <Typography sx={{ color: "#64748B", fontSize: { xs: "0.82rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
                  The district features critical irrigation projects including the Thotapalli Barrage, Vengalaraya Sagar, Denkada Anicut, and Andra Reservoir, ensuring water security for agricultural lands.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Forests & Minerals */}
      <Box sx={{ py: { xs: 2, sm: 2.5, md: 3 }, background: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0", px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2.5, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography sx={{ display: "inline-block", background: "#E8F5E9", color: "#2E7D32", fontSize: "0.75rem", fontWeight: 600, px: 1.5, py: 0.5, borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Natural Wealth
            </Typography>
            <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.75rem" }, fontWeight: 700, color: "#1E293B", mb: 0.5 }}>
              Forests & Minerals
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.95rem" }, lineHeight: 1.5, maxWidth: 600 }}>
              A diverse ecological profile with valuable mineral resources.
            </Typography>
            <Box sx={{ mt: 1, height: 4, width: 64, background: "#FACC15", borderRadius: "100px" }} />
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} justifyContent="center" alignItems="stretch">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ background: "linear-gradient(to bottom right, #E8F5E9, #F0FDF4)", p: { xs: 2.5, sm: 3, md: 3.5 }, borderRadius: { xs: "18px", md: "24px" }, border: "1px solid #C8E6C9", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ background: "#2E7D32", color: "white", width: 40, height: 40, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ExploreIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "1rem", sm: "1.125rem" } }}>Forests</Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#64748B" }}>Eastern Ghats green cover</Typography>
                  </Box>
                </Box>
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ background: "white", p: { xs: 1.5, sm: 2 }, borderRadius: "12px", textAlign: "center", border: "1px solid #C8E6C9" }}>
                      <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.2rem", sm: "1.4rem" }, color: "#2E7D32" }}>734<span style={{ fontSize: "0.85rem" }}>km²</span></Typography>
                      <Typography sx={{ fontSize: "0.75rem", color: "#64748B", mt: 0.5 }}>Forest Area</Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ background: "white", p: { xs: 1.5, sm: 2 }, borderRadius: "12px", textAlign: "center", border: "1px solid #C8E6C9" }}>
                      <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.2rem", sm: "1.4rem" }, color: "#2E7D32" }}>17.8%</Typography>
                      <Typography sx={{ fontSize: "0.75rem", color: "#64748B", mt: 0.5 }}>of total area</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ background: "linear-gradient(to bottom right, #FFF8E1, #FFFDF5)", p: { xs: 2.5, sm: 3, md: 3.5 }, borderRadius: { xs: "18px", md: "24px" }, border: "1px solid #FFE082", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ background: "#D97706", color: "white", width: 40, height: 40, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <PortalIcon name="industry" sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "1rem", sm: "1.125rem" } }}>Minerals</Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#64748B" }}>Reserves across the district</Typography>
                  </Box>
                </Box>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {["Manganese Ore", "Quartzite", "Granite", "Lime Kankar", "Graphite"].map((min, i) => (
                    <Box key={i} sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 1.5, py: 0.6, background: "white", color: "#B45309", borderRadius: "100px", fontWeight: 600, fontSize: { xs: "0.78rem", sm: "0.85rem" }, border: "1px solid #FDE68A" }}>
                      <PortalIcon name="industry" sx={{ fontSize: 13 }} />
                      {min}
                    </Box>
                  ))}
                </Stack>
                <Typography sx={{ color: "#92400E", fontSize: "0.75rem", mt: 1.5 }}>
                  Supporting stone, construction and mining-based industry.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* History & Geography / Key Communities */}
      <Box sx={{ py: { xs: 2, sm: 2.5, md: 3 }, px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }} alignItems="flex-start">
            {/* Left Side: History & Geography */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
                <Typography sx={{ display: "inline-block", background: "#EFF6FF", color: "#1D4ED8", fontSize: "0.75rem", fontWeight: 600, px: 1.5, py: 0.5, borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
                  Heritage
                </Typography>
                <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.75rem" }, fontWeight: 700, color: "#1E293B", mb: 0.5 }}>
                  History & Geography
                </Typography>
                <Box sx={{ mt: 1, height: 4, width: 64, background: "#FACC15", borderRadius: "100px" }} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, color: "#475569", fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.92rem" }, lineHeight: 1.6 }}>
                <Typography>
                  Vizianagaram, meaning the "City of Victory," was founded by the Pusapati family. Historically, it served as a major center for fine arts, music, and learning in the region, earning it the title of "City of Education."
                </Typography>
                <Typography>
                  The district was carved out from parts of Visakhapatnam and Srikakulam districts on 1 June 1979. It is administered through three revenue divisions and 27 mandals, boasting a population of over 19 lakhs.
                </Typography>
                <Typography>
                  The geography features a beautiful coastline along the Bay of Bengal, enriched by historical landmarks like the Vizianagaram Fort and fertile lands drained by rivers like the Nagavali and Champavathi.
                </Typography>
              </Box>
            </Grid>

            {/* Right Side: Key Communities */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
                <Typography sx={{ display: "inline-block", background: "#F3E8FF", color: "#7E22CE", fontSize: "0.75rem", fontWeight: 600, px: 1.5, py: 0.5, borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
                  People
                </Typography>
                <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.75rem" }, fontWeight: 700, color: "#1E293B", mb: 0.5 }}>
                  Key Communities
                </Typography>
                <Typography sx={{ color: "#64748B", fontSize: { xs: "0.8rem", sm: "0.85rem" }, mb: 1 }}>
                  The vibrant demographic groups that shape the district's identity and economy.
                </Typography>
              </Box>
              <Grid container spacing={{ xs: 1, sm: 1.25, md: 1.5 }}>
                {[
                  { title: "Farmers", desc: "A strong agrarian community.", initial: "F", color: "#00695C" },
                  { title: "Weavers", desc: "Renowned for textile craftsmanship.", initial: "W", color: "#D84315" },
                  { title: "Fishermen", desc: "Deeply involved in marine fishing.", initial: "F", color: "#1565C0" },
                  { title: "Artisans", desc: "Woodwork, jute crafts, and toys.", initial: "A", color: "#6A1B9A" },
                  { title: "Scholars", desc: "Musicians, poets, and educators.", initial: "S", color: "#C62828" },
                  { title: "Merchants", desc: "Supporting the agro-economy.", initial: "M", color: "#283593" }
                ].map((comm, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box sx={{
                      background: "#FFFFFF",
                      borderRadius: { xs: "12px", md: "14px" },
                      p: { xs: 1.5, sm: 1.75 },
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                        borderColor: "rgba(15,23,42,0.15)"
                      }
                    }}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <Box sx={{
                          width: 32,
                          height: 32,
                          background: comm.color,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          flexShrink: 0
                        }}>
                          {comm.initial}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#1E293B", fontSize: { xs: "0.82rem", sm: "0.875rem" }, lineHeight: 1.2 }}>{comm.title}</Typography>
                          <Typography sx={{ color: "#64748B", fontSize: { xs: "0.72rem", sm: "0.75rem" }, mt: 0.5 }}>{comm.desc}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sectors / Economic Opportunities */}
      <Box sx={{ py: { xs: 2, sm: 2.5, md: 3 }, background: "#F8FAFC", borderTop: "1px solid #E2E8F0", px: { xs: 1, sm: 0 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 2, sm: 2.5 } }}>
            <Typography sx={{ display: "inline-block", background: "#FEF3C7", color: "#B45309", fontSize: "0.75rem", fontWeight: 600, px: 1.5, py: 0.5, borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Growth Engines
            </Typography>
            <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.75rem" }, fontWeight: 700, color: "#1E293B", mb: 0.5 }}>
              Economic Opportunities
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.95rem" }, lineHeight: 1.5, maxWidth: 600 }}>
              Diverse sectors already creating impact — with immense scope for more.
            </Typography>
            <Box sx={{ mt: 1, height: 4, width: 64, background: "#FACC15", borderRadius: "100px" }} />
          </Box>

          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
            {[
              {
                title: "Agriculture & Horticulture",
                description: "Paddy, maize, turmeric, ginger, cashew, mango and a wide range of horticulture crops thrive here.",
                tag: "Agri",
                image: "https://images.unsplash.com/photo-1592982537447-6f2334208f34?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Minor Forest Produce",
                description: "Tamarind, mahua, jackfruit, honey, bamboo and medicinal plants — abundant non-timber forest produce.",
                tag: "Forest",
                image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Tribal Products & Crafts",
                description: "Bamboo crafts, handlooms, terracotta and traditional tribal art with strong GI-tag and market potential.",
                tag: "Tribal",
                image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Rural & Community Tourism",
                description: "Homestays, eco-trails, waterfalls and cultural experiences across the scenic Eastern Ghats hill country.",
                tag: "Tourism",
                image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Food Processing",
                description: "Cashew, millet, spices and horticulture produce offer strong scope for value addition.",
                tag: "Agro",
                image: "https://images.unsplash.com/photo-1621808064379-99fc53ce839e?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Minerals",
                description: "Granite, quartzite, manganese ore and lime kankar reserves support stone and mining-based industry.",
                tag: "Mineral",
                image: "https://images.unsplash.com/photo-1588698754593-780c10a17409?auto=format&fit=crop&q=80&w=800",
              }
            ].map((sector, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box sx={{
                  background: "#FFFFFF",
                  borderRadius: { xs: "16px", md: "20px" },
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    borderColor: "#CBD5E1",
                    "& .sector-img": { transform: "scale(1.08)" }
                  }
                }}>
                  <Box sx={{ position: "relative", height: { xs: 140, sm: 150, md: 160 }, overflow: "hidden" }}>
                    <Box className="sector-img" sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url('${sector.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.7s ease"
                    }} />
                    <Box sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
                    }} />
                    <Box sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(4px)",
                      color: "#1E293B",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      px: 1.25,
                      py: 0.4,
                      borderRadius: 10,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}>
                      {sector.tag}
                    </Box>
                    <Typography sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 1.5, sm: 2 },
                      color: "white",
                      fontWeight: 800,
                      fontSize: { xs: "0.98rem", sm: "1.05rem", md: "1.1rem" },
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                    }}>
                      {sector.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: { xs: 2, sm: 2.25, md: 2.5 } }}>
                    <Typography sx={{ color: "#475569", fontSize: { xs: "0.8rem", sm: "0.85rem" }, lineHeight: 1.55, mb: 1.5, fontWeight: 500, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {sector.description}
                    </Typography>
                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#1E293B", fontSize: { xs: "0.8rem", sm: "0.85rem" }, fontWeight: 800 }}>
                      Learn more <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer Explore CTA - Matched to /services Reference */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 4 }, bgcolor: "#FFC107", borderTop: "1px solid rgba(0,0,0,0.05)", px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#000000", mb: 1, fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.75rem" }, letterSpacing: "-0.02em" }}>
            Explore the District Further
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.8)", fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" }, mb: { xs: 2, sm: 2.5, md: 3 }, fontWeight: 500, maxWidth: 540, mx: "auto" }}>
            Data sourced from the official district portal. Discover schemes, livelihoods and services available to every citizen.
          </Typography>
          
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: 1.25, sm: 2 } }}>
            <Box 
              component="a" 
              href="https://drdaVizianagaram.vercel.app/schemes" 
              target="_blank"
              sx={{ 
                bgcolor: "#000000", 
                color: "white !important", 
                px: { xs: 2.5, sm: 3.5, md: 4 }, 
                py: { xs: 1, sm: 1.25 }, 
                borderRadius: 8, 
                fontSize: { xs: "0.82rem", sm: "0.9rem" }, 
                fontWeight: 800, 
                textDecoration: "none",
                display: "inline-flex", 
                alignItems: "center", 
                gap: 1, 
                transition: "transform 0.2s, box-shadow 0.2s", 
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              Explore Schemes
            </Box>
            <Box 
              component="a" 
              href="https://VizianagaramVizianagaram.ap.gov.in/" 
              target="_blank"
              sx={{ 
                bgcolor: "#000000", 
                color: "white !important", 
                px: { xs: 2.5, sm: 3.5, md: 4 }, 
                py: { xs: 1, sm: 1.25 }, 
                borderRadius: 8, 
                fontSize: { xs: "0.82rem", sm: "0.9rem" }, 
                fontWeight: 800, 
                textDecoration: "none",
                display: "inline-flex", 
                alignItems: "center", 
                gap: 1, 
                transition: "transform 0.2s, box-shadow 0.2s", 
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              Official District Portal
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
