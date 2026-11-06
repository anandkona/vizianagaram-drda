"use client";

import { useState } from "react";

import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs, Paper, Button, Chip, Dialog, DialogTitle, DialogContent, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import PortalForm from "@/components/PortalForm";

export default function PgrsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { num: "01", icon: <MessageIcon sx={{ color: "#FFC107" }} />, title: "Citizen Complaint", desc: "Citizen submits complaint via PGRS portal, IVRS helpline, phone, or in-person at DRDA/Mee Seva.", bg: "#E3F2FD", border: "#90CAF9" },
    { num: "02", icon: <DescriptionIcon sx={{ color: "#FFC107" }} />, title: "Department Assignment", desc: "Complaint is registered with a unique ID and forwarded to the concerned department within 24 hours.", bg: "#E8F5E9", border: "#A5D6A7" },
    { num: "03", icon: <AccessTimeIcon sx={{ color: "#FFC107" }} />, title: "Verification", desc: "The assigned officer verifies the complaint, conducts field visit if required, and assesses the issue.", bg: "#FFF8E1", border: "#FFE082" },
    { num: "04", icon: <ArrowForwardIcon sx={{ color: "#FFC107" }} />, title: "Action Taken", desc: "Department takes necessary action within the prescribed timeline as per citizen charter.", bg: "#FCE4EC", border: "#F48FB1" },
    { num: "05", icon: <CheckCircleIcon sx={{ color: "#FFC107" }} />, title: "Resolution", desc: "Grievance is resolved and closure report is submitted with details of action taken.", bg: "#E8F5E9", border: "#A5D6A7" },
    { num: "06", icon: <MessageIcon sx={{ color: "#FFC107" }} />, title: "Citizen Feedback", desc: "Citizen is informed of resolution and asked to provide satisfaction feedback via SMS/call.", bg: "#EDE7F6", border: "#CE93D8" }
  ];

  const complaintTypes = [
    "Scheme Non-Receipt", "Officer Misconduct", "Delayed Benefit Payment", 
    "Application Status", "Documents/Certificate Issues", "Service Delivery Complaint", 
    "Infrastructure Issues", "Other"
  ];

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC" }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: "relative", 
        overflow: "hidden", 
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700",
        py: { xs: 2, md: 2.5 },
      }}>
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: "0.8rem" }}>Share Your Concern</Typography>
          </Breadcrumbs>
          
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            We're Listening
          </Typography>
          
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Have a problem, a suggestion, or just a question? Tell us what you need and we'll guide you to the right help — backed by the official Public Grievance Redressal System (PGRS).
          </Typography>
        </Container>
      </Box>

      {/* Form Section */}
      <Box sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 4, md: 5 }, background: "white" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", fontSize: "0.75rem", fontWeight: 700, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
            We're Here to Help
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
            Have an issue? Let us know first.
          </Typography>
          <Typography sx={{ color: "#64748B", fontSize: "0.95rem", mb: 4, maxWidth: 600, mx: "auto", lineHeight: 1.6 }}>
            You don't have to navigate complex forms alone. Just share a few details and <strong style={{ color: "#0F172A" }}>our team will personally contact you and support you</strong> through the process — from raising the concern to its resolution.
          </Typography>

          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="contained" 
            startIcon={<HandshakeIcon />}
            sx={{ 
              bgcolor: "#FFC107", 
              color: "#1F1700", 
              fontWeight: 800, 
              px: 4, py: 1.5, 
              borderRadius: 10,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.3)",
              mb: 2,
              "&:hover": { bgcolor: "#FACC15", transform: "translateY(-2px)", boxShadow: "0 20px 25px -5px rgba(15, 23, 42, 0.4)" },
              transition: "all 0.3s ease"
            }}
          >
            Tell Us & Get Support
          </Button>

          <Typography sx={{ color: "#94A3B8", fontSize: "0.75rem", mb: 4 }}>
            Prefer to talk? Call our free helpline <a href="tel:1902" style={{ color: "#0F172A", fontWeight: 700, textDecoration: "none" }}>1902</a>
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, alignItems: "center" }}>
            <Typography sx={{ color: "#64748B", fontSize: "0.85rem", fontWeight: 600 }}>Or do it yourself:</Typography>
            <Button 
              href="https://pgrs.ap.gov.in" 
              target="_blank" 
              startIcon={<DescriptionIcon sx={{ fontSize: 16 }} />} 
              sx={{ color: "#0F172A", fontWeight: 700, fontSize: "0.85rem", textTransform: "none", p: 0, "&:hover": { bgcolor: "transparent", textDecoration: "underline" } }}
            >
              Register on PGRS Portal
            </Button>
            <Button 
              href="/feedback" 
              startIcon={<MessageIcon sx={{ fontSize: 16 }} />} 
              sx={{ color: "#0F172A", fontWeight: 700, fontSize: "0.85rem", textTransform: "none", p: 0, "&:hover": { bgcolor: "transparent", textDecoration: "underline" } }}
            >
              Share Feedback
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Info Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
                About
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 3, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
                What is PGRS?
              </Typography>
              <Box sx={{ width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2, mb: 4 }} />
              
              <Typography sx={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, mb: 3 }}>
                PGRS (Public Grievance Redressal System) is the Andhra Pradesh government's official platform for citizens to register complaints regarding government services. Every complaint receives a unique ID and must be resolved within a prescribed timeframe.
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7, mb: 5 }}>
                Citizens of Vizianagaram can lodge grievances related to rural development schemes, officer conduct, service delivery delays, and more. DRDA facilitates PGRS awareness and guides citizens through the process.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 5 }}>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ bgcolor: "#F1F5F9", borderRadius: 3, p: 2, textAlign: "center", border: "1px solid #E2E8F0" }}>
                    <Typography sx={{ color: "#0F172A", fontSize: "1.25rem", fontWeight: 900 }}>96%</Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.7rem", fontWeight: 600 }}>Resolution Rate</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ bgcolor: "#F1F5F9", borderRadius: 3, p: 2, textAlign: "center", border: "1px solid #E2E8F0" }}>
                    <Typography sx={{ color: "#0F172A", fontSize: "1.25rem", fontWeight: 900 }}>7 Days</Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.7rem", fontWeight: 600 }}>Avg. Resolution</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Box sx={{ bgcolor: "#F1F5F9", borderRadius: 3, p: 2, textAlign: "center", border: "1px solid #E2E8F0" }}>
                    <Typography sx={{ color: "#0F172A", fontSize: "1.25rem", fontWeight: 900 }}>24/7</Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.7rem", fontWeight: 600 }}>Registration</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Button 
                href="https://pgrs.ap.gov.in"
                target="_blank"
                variant="contained" 
                endIcon={<ArrowForwardIcon />}
                disableElevation
                sx={{ 
                  bgcolor: "#FACC15", 
                  color: "white", 
                  fontWeight: 700, 
                  px: 3, py: 1.25, 
                  borderRadius: 10,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#1E293B" }
                }}
              >
                Register Grievance on PGRS Portal
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
                Complaint Types
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 3, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
                What Can You Complain About?
              </Typography>
              <Box sx={{ width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2, mb: 4 }} />
              
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}>
                {complaintTypes.map((type, idx) => (
                  <Chip key={idx} label={type} sx={{ bgcolor: "white", border: "1px solid #CBD5E1", color: "#475569", fontWeight: 600, fontSize: "0.8rem", p: 0.5 }} />
                ))}
              </Box>

              <Box sx={{ p: { xs: 2.5, md: 3 }, bgcolor: "#FEF3C7", borderRadius: 3, border: "1px solid #FDE68A" }}>
                <Typography sx={{ fontWeight: 800, color: "#0F172A", mb: 1.5 }}>
                  Helpline Numbers
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box component="a" href="tel:1902" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#0F172A", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>
                    <PhoneIcon sx={{ fontSize: 16 }} /> AP PGRS Helpline: 1902
                  </Box>
                  <Box component="a" href="tel:08954220123" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#0F172A", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>
                    <PhoneIcon sx={{ fontSize: 16 }} /> DRDA Office: 08954-220123
                  </Box>
                  <Box component="a" href="tel:18004250808" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#0F172A", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>
                    <PhoneIcon sx={{ fontSize: 16 }} /> Toll Free: 1800-425-0808
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "white", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              Process
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Citizen Grievance Journey
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "1rem", fontWeight: 500 }}>
              How your complaint moves from registration to resolution
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>
          
          <Grid container spacing={3}>
            {steps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    border: `1px solid ${step.border}`,
                    bgcolor: step.bg,
                    height: "100%"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Box sx={{ width: 28, height: 28, bgcolor: "#FACC15", color: "white", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontWeight: 800, fontSize: "0.7rem", flexShrink: 0 }}>
                      {step.num}
                    </Box>
                    <Box sx={{ color: "#0F172A", display: "flex", alignItems: "center", "& svg": { fontSize: 20 } }}>
                      {step.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.9rem", ml: 0.5 }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "#64748B", fontSize: "0.8rem", lineHeight: 1.5, fontWeight: 500 }}>
                    {step.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Ways to Register Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              How to Register
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 3, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Ways to Register a Grievance
            </Typography>
            <Box sx={{ mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>
          
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, border: "1px solid #E2E8F0", textAlign: "center", height: "100%", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", borderColor: "#CBD5E1" } }}>
                <Box sx={{ width: 56, height: 56, mx: "auto", bgcolor: "#E0F2FE", color: "#0284C7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}><PublicIcon sx={{ fontSize: 28 }} /></Box>
                <Typography sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: "1rem" }}>PGRS Portal</Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.85rem", mb: 2, lineHeight: 1.5 }}>Visit pgrs.ap.gov.in — register online with mobile OTP verification.</Typography>
                <Button href="https://pgrs.ap.gov.in" target="_blank" endIcon={<ArrowForwardIcon />} sx={{ color: "#0F172A", fontWeight: 800, fontSize: "0.75rem", textTransform: "none" }}>Register</Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, border: "1px solid #E2E8F0", textAlign: "center", height: "100%", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", borderColor: "#CBD5E1" } }}>
                <Box sx={{ width: 56, height: 56, mx: "auto", bgcolor: "#DCFCE7", color: "#16A34A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}><PhoneIcon sx={{ fontSize: 28 }} /></Box>
                <Typography sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: "1rem" }}>IVRS Helpline</Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.85rem", mb: 2, lineHeight: 1.5 }}>Call 1902 and follow IVR options to register your grievance over phone.</Typography>
                <Button href="/ivrs" endIcon={<ArrowForwardIcon />} sx={{ color: "#0F172A", fontWeight: 800, fontSize: "0.75rem", textTransform: "none" }}>Know More</Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 3, border: "1px solid #E2E8F0", textAlign: "center", height: "100%", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", borderColor: "#CBD5E1" } }}>
                <Box sx={{ width: 56, height: 56, mx: "auto", bgcolor: "#FEF3C7", color: "#D97706", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}><BusinessIcon sx={{ fontSize: 28 }} /></Box>
                <Typography sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: "1rem" }}>DRDA / Mee Seva</Typography>
                <Typography sx={{ color: "#64748B", fontSize: "0.85rem", mb: 2, lineHeight: 1.5 }}>Visit DRDA office or nearest Mee Seva center for in-person registration.</Typography>
                <Button href="/contact" endIcon={<ArrowForwardIcon />} sx={{ color: "#0F172A", fontWeight: 800, fontSize: "0.75rem", textTransform: "none" }}>Know More</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Support Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: 4, overflow: "hidden" } }}>
        <Box sx={{ bgcolor: "#FFC107", p: 3, position: "relative", color: "#0F172A" }}>
          <IconButton onClick={() => setIsModalOpen(false)} sx={{ position: "absolute", top: 16, right: 16, color: "rgba(15,23,42,0.7)", bgcolor: "rgba(15,23,42,0.1)", "&:hover": { bgcolor: "rgba(15,23,42,0.2)" } }}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: "rgba(15,23,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FavoriteIcon sx={{ color: "#0F172A" }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.25rem", lineHeight: 1.2 }}>Let us help you</Typography>
              <Typography sx={{ color: "rgba(15,23,42,0.8)", fontSize: "0.85rem", mt: 0.5, fontWeight: 600 }}>Our team will contact & support you</Typography>
            </Box>
          </Box>
        </Box>
        <DialogContent sx={{ p: { xs: 2.5, sm: 3 } }}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1E293B", fontSize: "0.8rem", mb: 0.5 }}>Your Name *</Typography>
              <TextField fullWidth placeholder="Full name" variant="outlined" size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1E293B", fontSize: "0.8rem", mb: 0.5 }}>Mobile Number *</Typography>
              <TextField fullWidth placeholder="10-digit mobile number" variant="outlined" size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#1E293B", fontSize: "0.8rem", mb: 0.5 }}>Your Issue / Concern *</Typography>
              <TextField fullWidth placeholder="Briefly describe what you need help with..." multiline rows={2} variant="outlined" size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }} />
            </Box>
            <Button variant="contained" startIcon={<SendIcon />} sx={{ bgcolor: "#FFC107", color: "#0F172A", fontWeight: 800, py: 1.5, borderRadius: 2, fontSize: "1rem", mt: 1, textTransform: "none", boxShadow: "none", "&:hover": { bgcolor: "#FACC15", boxShadow: "none" } }}>
              Submit & Get Support
            </Button>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 1 }}>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem", fontWeight: 600 }}>Or:</Typography>
              <Button href="https://pgrs.ap.gov.in" target="_blank" startIcon={<DescriptionIcon sx={{ fontSize: 14 }} />} sx={{ color: "#1E293B", fontSize: "0.8rem", fontWeight: 700, textTransform: "none", p: 0, minWidth: "auto" }}>PGRS Portal</Button>
              <Button href="/feedback" startIcon={<MessageIcon sx={{ fontSize: 14 }} />} sx={{ color: "#1E293B", fontSize: "0.8rem", fontWeight: 700, textTransform: "none", p: 0, minWidth: "auto" }}>Feedback</Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
