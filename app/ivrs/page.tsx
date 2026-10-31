"use client";

import { Box, Breadcrumbs, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";

export default function IvrsPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <Box sx={{
        position: "relative",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700",
        py: { xs: 2, md: 2.5 }
      }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#2B2100", fontSize: "0.8rem", fontWeight: 700 }}>IVRS Services</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            IVRS Citizen Services
          </Typography>

          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Interactive Voice Response System — access government services 24/7 through a simple phone call, in Telugu or English.
          </Typography>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Box sx={{ py: 4, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Card 1 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 1.5, pl: 2, borderRadius: 4, display: "flex", alignItems: "center", gap: 1.5, border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", height: "100%", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.1)", borderColor: "rgba(0,0,0,0.08)" } }}>
                <Box sx={{ width: 44, height: 44, bgcolor: "#FFF8E1", color: "#D97706", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <PhoneInTalkIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 0.25, fontSize: "1.1rem", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>1902</Typography>
                  <Typography sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.75rem", lineHeight: 1.3 }}>AP Govt Helpline</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Card 2 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 1.5, pl: 2, borderRadius: 4, display: "flex", alignItems: "center", gap: 1.5, border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", height: "100%", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.1)", borderColor: "rgba(0,0,0,0.08)" } }}>
                <Box sx={{ width: 44, height: 44, bgcolor: "#F8FAFC", color: "#0F172A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <AccessTimeIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 0.25, fontSize: "1.1rem", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>24/7</Typography>
                  <Typography sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.75rem", lineHeight: 1.3 }}>Available Round the Clock</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Card 3 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 1.5, pl: 2, borderRadius: 4, display: "flex", alignItems: "center", gap: 1.5, border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", height: "100%", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.1)", borderColor: "rgba(0,0,0,0.08)" } }}>
                <Box sx={{ width: 44, height: 44, bgcolor: "#F8FAFC", color: "#0F172A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <LanguageIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 0.25, fontSize: "1.1rem", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>2&nbsp;Languages</Typography>
                  <Typography sx={{ color: "#64748B", fontWeight: 600, fontSize: "0.75rem", lineHeight: 1.3 }}>Telugu & English</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#FFFDE7", color: "#8A6500", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, border: "1px solid #FFE082", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              Services
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Available IVRS Services
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "1rem" }}>
              Press the corresponding number when you call to access each service
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={2}>
            {/* Service 1 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.05)", height: "100%", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.1)", bgcolor: "#ffffff" } }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#FFF8E1", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>1</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", mb: 0.25 }}>Scheme Info</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.3 }}>Eligibility & benefits details.</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Service 2 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.05)", height: "100%", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.1)", bgcolor: "#ffffff" } }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#FFF8E1", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>2</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", mb: 0.25 }}>Apply Guide</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.3 }}>Step-by-step app support.</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Service 3 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.05)", height: "100%", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.1)", bgcolor: "#ffffff" } }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#FFF8E1", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>3</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", mb: 0.25 }}>Complaints</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.3 }}>Register a grievance quickly.</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Service 4 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.05)", height: "100%", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.1)", bgcolor: "#ffffff" } }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#FFF8E1", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>4</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", mb: 0.25 }}>Track Status</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.3 }}>Check pending applications.</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Service 5 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.05)", height: "100%", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.1)", bgcolor: "#ffffff" } }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#FFF8E1", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>5</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", mb: 0.25 }}>Skill Training</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.3 }}>Dates, venues & enrollment.</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Service 6 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid rgba(0,0,0,0.05)", height: "100%", display: "flex", alignItems: "center", gap: 2, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.1)", bgcolor: "#ffffff" } }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#FFF8E1", color: "#D97706", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>6</Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", mb: 0.25 }}>Directory</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.75rem", lineHeight: 1.3 }}>DRDA officers contact info.</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How to Use Section */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#FFFDE7", color: "#8A6500", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, border: "1px solid #FFE082", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              How to Use
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Using the IVRS System
            </Typography>
          </Box>
          <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, border: "1px solid #E2E8F0" }}>
            {[
              "Dial 1902 from any mobile or landline phone.",
              "Select your preferred language: Press 1 for Telugu, Press 2 for English.",
              "Listen to the menu options and press the number for your required service.",
              "Follow the voice prompts to get information or register your complaint.",
              "Note down your complaint/reference number for future tracking."
            ].map((step, idx) => (
              <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: idx === 4 ? 0 : 2 }}>
                <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#FACC15", color: "#1F1700", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, flexShrink: 0, mr: 1.5 }}>
                  {idx + 1}
                </Box>
                <Typography sx={{ color: "#475569", fontSize: "0.9rem", fontWeight: 500 }}>{step}</Typography>
              </Box>
            ))}
          </Paper>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: "#FFC107", color: "#1F1700", py: { xs: 4, md: 5 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "2.5rem", md: "3rem" }, letterSpacing: "-0.02em" }}>
            1902
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: "1rem", mb: 3, fontWeight: 500 }}>
            AP Government IVRS Helpline — Free, 24/7, in Telugu & English
          </Typography>
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            sx={{
              bgcolor: "#1F1700",
              color: "white",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 8,
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": { bgcolor: "#332600" }
            }}
          >
            Call Now: 1902
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
