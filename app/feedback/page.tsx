"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Rating,
  Chip,
  Stack,
  Alert,
} from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import { PortalIcon } from "@/components/Icon";

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(5);
  const [selectedService, setSelectedService] = useState("shg");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mandal: "",
    comment: "",
  });

  const servicesList = [
    { id: "shg", label: "SHG & Bank Linkage", icon: "loan" },
    { id: "pgrs", label: "Grievance Redress (PGRS)", icon: "support" },
    { id: "fpo", label: "FPO & Farmer Support", icon: "agriculture" },
    { id: "enterprise", label: "Micro-Enterprises (MSME)", icon: "enterprise" },
    { id: "skilling", label: "Youth Skilling & Jobs", icon: "skill" },
    { id: "social", label: "YSR Bima / Pension", icon: "family" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. Hero Header Banner */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#2B2100",
        py: { xs: 2, md: 2.5 }
      }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ fontSize: "0.8rem", color: "rgba(43,33,0,0.6)", mb: 1, display: "flex", gap: 1, alignItems: "center", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <span>/</span>
            <Typography component="span" sx={{ color: "#2B2100", fontWeight: 700, fontSize: "0.8rem" }}>Citizen Feedback</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 2 }}>
            <Box>
              <Typography variant="h1" sx={{ fontWeight: 900, mb: 0.5, fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.4rem" }, letterSpacing: "-0.025em", color: "#1F1700" }}>
                Citizen Feedback & Experience
              </Typography>
              <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 680, lineHeight: 1.45, fontWeight: 500 }}>
                Help us improve public welfare, bank linkages, and village service delivery across Vizianagaram.
              </Typography>
            </Box>
            <Box sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(31,23,0,0.08)",
              px: 1.75,
              py: 0.75,
              borderRadius: "8px",
              border: "1px solid rgba(31,23,0,0.14)"
            }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#15803D" }} />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 750, color: "#1F1700" }}>
                Monthly Citizen Satisfaction: 96.4%
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. Top Metric Cards (3 Clean Individual Cards) */}
      <Box component="section" sx={{ py: 3, background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {[
              { label: "Overall Satisfaction", value: "4.8 / 5.0", subtext: "Based on 3,420 verified citizen submissions", icon: <StarRoundedIcon sx={{ fontSize: 24, color: "#CA8A04" }} />, accent: "#FFC107" },
              { label: "Resolution & Follow-up", value: "98.2%", subtext: "Feedbacks reviewed within 48 business hours", icon: <VerifiedUserRoundedIcon sx={{ fontSize: 24, color: "#16A34A" }} />, accent: "#16A34A" },
              { label: "Recommendation Rate", value: "96.4%", subtext: "Would recommend district services to others", icon: <ThumbUpRoundedIcon sx={{ fontSize: 24, color: "#2563EB" }} />, accent: "#2563EB" },
            ].map((stat, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box sx={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderTop: `3.5px solid ${stat.accent}`,
                  borderRadius: "12px",
                  p: 2.25,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: "#FFFFFF",
                    borderColor: stat.accent,
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 22px -4px rgba(15,23,42,0.07)"
                  }
                }}>
                  <Box sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "12px",
                    bgcolor: "#1F1700",
                    border: "1px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 750, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {stat.label}
                    </Typography>
                    <Typography sx={{ fontSize: "1.45rem", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, my: 0.25 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 500 }}>
                      {stat.subtext}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Main Feedback Interactive Form & Sidebar */}
      <Box component="section" sx={{ py: { xs: 4, md: 5.5 }, background: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3.5}>
            
            {/* Left Column: Interactive Feedback Card */}
            <Grid size={{ xs: 12, md: 7, lg: 8 }}>
              <Paper elevation={0} sx={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                p: { xs: 2.5, sm: 3.5 },
                boxShadow: "0 4px 18px rgba(15,23,42,0.04)"
              }}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "inline-block", background: "#FEF9C3", color: "#CA8A04", fontSize: "0.7rem", fontWeight: 800, px: 1.5, py: 0.35, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1, border: "1px solid #FEF08A" }}>
                    CITIZEN SUBMISSION
                  </Box>
                  <Typography variant="h2" sx={{ fontWeight: 800, color: "#0F172A", fontSize: { xs: "1.35rem", sm: "1.65rem" }, letterSpacing: "-0.02em" }}>
                    Share Your Feedback
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.85rem", fontWeight: 500, mt: 0.5 }}>
                    Your feedback is directly routed to the DRDA District Quality & Monitoring Cell.
                  </Typography>
                </Box>

                {submitted ? (
                  <Alert 
                    severity="success" 
                    icon={<CheckCircleRoundedIcon sx={{ fontSize: 28, color: "#15803D" }} />}
                    sx={{
                      borderRadius: "12px",
                      p: 3,
                      bgcolor: "#F0FDF4",
                      border: "1px solid #BBF7D0",
                      "& .MuiAlert-message": { width: "100%" }
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "#166534", fontSize: "1.1rem", mb: 0.5 }}>
                      Thank You! Feedback Submitted Successfully.
                    </Typography>
                    <Typography sx={{ color: "#15803D", fontSize: "0.85rem", lineHeight: 1.5, mb: 2 }}>
                      Your comments have been registered under acknowledgement reference <strong>#VZM-FB-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                    </Typography>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outlined" 
                      size="small" 
                      sx={{ borderColor: "#16A34A", color: "#15803D", fontWeight: 750, textTransform: "none", borderRadius: "8px" }}
                    >
                      Submit Another Response
                    </Button>
                  </Alert>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    
                    {/* Star Rating Block */}
                    <Box sx={{
                      bgcolor: "#FFFCF5",
                      border: "1px solid #FEF08A",
                      borderRadius: "12px",
                      p: 2.5,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "space-between",
                      gap: 1.5
                    }}>
                      <Box>
                        <Typography sx={{ fontWeight: 800, color: "#1F1700", fontSize: "0.95rem" }}>
                          How was your overall experience? <span style={{ color: "#DC2626" }}>*</span>
                        </Typography>
                        <Typography sx={{ fontSize: "0.75rem", color: "#78350F", mt: 0.25 }}>
                          Rate the quality of assistance and staff responsiveness
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Rating
                          name="citizen-rating"
                          value={rating}
                          onChange={(e, val) => setRating(val)}
                          size="large"
                          sx={{
                            color: "#FFC107",
                            "& .MuiRating-icon": { fontSize: "2rem" }
                          }}
                        />
                        <Typography sx={{ fontWeight: 800, color: "#CA8A04", fontSize: "1rem", minWidth: 42 }}>
                          {rating}/5
                        </Typography>
                      </Box>
                    </Box>

                    {/* Department / Program Selection Pills */}
                    <Box>
                      <Typography sx={{ fontWeight: 750, color: "#0F172A", fontSize: "0.85rem", mb: 1.25 }}>
                        Which service or scheme did you interact with? <span style={{ color: "#DC2626" }}>*</span>
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {servicesList.map((svc) => (
                          <Chip
                            key={svc.id}
                            label={svc.label}
                            clickable
                            onClick={() => setSelectedService(svc.id)}
                            icon={<PortalIcon name={svc.icon} sx={{ fontSize: "16px !important", color: selectedService === svc.id ? "#1F1700 !important" : "#CA8A04 !important" }} />}
                            sx={{
                              fontWeight: 750,
                              fontSize: "0.8rem",
                              py: 2,
                              px: 0.5,
                              borderRadius: "8px",
                              bgcolor: selectedService === svc.id ? "#FFC107" : "#F8FAFC",
                              color: selectedService === svc.id ? "#1F1700" : "#334155",
                              border: "1px solid",
                              borderColor: selectedService === svc.id ? "#FFC107" : "#E2E8F0",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                bgcolor: selectedService === svc.id ? "#FFC107" : "#FEF9C3",
                                borderColor: "#FFC107"
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Personal Information (Name, Phone, Mandal) */}
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography sx={{ fontWeight: 750, color: "#0F172A", fontSize: "0.82rem", mb: 0.75 }}>
                          Your Name (Optional)
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="Sri / Smt."
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "8px",
                              bgcolor: "#F8FAFC",
                              "& fieldset": { borderColor: "#E2E8F0" },
                              "&:hover fieldset": { borderColor: "#CBD5E1" },
                              "&.Mui-focused fieldset": { borderColor: "#FFC107", borderWidth: "2px" }
                            }
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography sx={{ fontWeight: 750, color: "#0F172A", fontSize: "0.82rem", mb: 0.75 }}>
                          Mobile Number (Optional)
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "8px",
                              bgcolor: "#F8FAFC",
                              "& fieldset": { borderColor: "#E2E8F0" },
                              "&:hover fieldset": { borderColor: "#CBD5E1" },
                              "&.Mui-focused fieldset": { borderColor: "#FFC107", borderWidth: "2px" }
                            }
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Typography sx={{ fontWeight: 750, color: "#0F172A", fontSize: "0.82rem", mb: 0.75 }}>
                          Your Mandal / Village
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="e.g. Bobbili, Gantyada, Cheepurupalli..."
                          value={formData.mandal}
                          onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "8px",
                              bgcolor: "#F8FAFC",
                              "& fieldset": { borderColor: "#E2E8F0" },
                              "&:hover fieldset": { borderColor: "#CBD5E1" },
                              "&.Mui-focused fieldset": { borderColor: "#FFC107", borderWidth: "2px" }
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    {/* Suggestions / Remarks Textbox */}
                    <Box>
                      <Typography sx={{ fontWeight: 750, color: "#0F172A", fontSize: "0.82rem", mb: 0.75 }}>
                        Your Detailed Comments or Suggestions <span style={{ color: "#DC2626" }}>*</span>
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Please share what went well or what can be improved regarding the service, timing, or officer assistance..."
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                            bgcolor: "#F8FAFC",
                            "& fieldset": { borderColor: "#E2E8F0" },
                            "&:hover fieldset": { borderColor: "#CBD5E1" },
                            "&.Mui-focused fieldset": { borderColor: "#FFC107", borderWidth: "2px" }
                          }
                        }}
                      />
                    </Box>

                    {/* Submit Button */}
                    <Box sx={{ pt: 1, display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendRoundedIcon sx={{ fontSize: 18 }} />}
                        sx={{
                          bgcolor: "#FFC107",
                          color: "#1F1700",
                          fontWeight: 800,
                          px: 4,
                          py: 1.4,
                          borderRadius: "10px",
                          fontSize: "0.95rem",
                          textTransform: "none",
                          boxShadow: "0 4px 14px rgba(255,193,7,0.3)",
                          "&:hover": {
                            bgcolor: "#F59E0B",
                            boxShadow: "0 6px 18px rgba(255,193,7,0.4)"
                          }
                        }}
                      >
                        Submit Feedback
                      </Button>
                    </Box>

                  </Box>
                )}
              </Paper>
            </Grid>

            {/* Right Column: Support & Help Desk Sidebar Cards */}
            <Grid size={{ xs: 12, md: 5, lg: 4 }}>
              <Stack spacing={2.5}>
                
                {/* Official Grievance Redressal Card */}
                <Box sx={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  p: 3,
                  boxShadow: "0 2px 10px rgba(15,23,42,0.03)"
                }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: "10px", bgcolor: "#FEF9C3", color: "#CA8A04", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <HeadsetMicRoundedIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "1rem" }}>
                        Urgent Grievance?
                      </Typography>
                      <Typography sx={{ fontSize: "0.72rem", color: "#64748B" }}>
                        Official Redressal Channel
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.55, mb: 2 }}>
                    If you have an urgent grievance regarding scheme disbursement or staff non-compliance, lodge an official petition on the PGRS portal.
                  </Typography>
                  <Button
                    component={Link}
                    href="/services"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    fullWidth
                    sx={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      color: "#1F1700",
                      fontWeight: 750,
                      py: 1,
                      borderRadius: "8px",
                      fontSize: "0.82rem",
                      textTransform: "none",
                      "&:hover": {
                        background: "#FFC107",
                        borderColor: "#FFC107"
                      }
                    }}
                  >
                    Open Public Grievance (PGRS)
                  </Button>
                </Box>

                {/* Direct Toll-Free Helpline Card */}
                <Box sx={{
                  background: "#FFFCF5",
                  border: "1px solid #FEF08A",
                  borderRadius: "16px",
                  p: 3
                }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 800, color: "#CA8A04", letterSpacing: "0.06em", textTransform: "uppercase", mb: 0.5 }}>
                    DIRECT TELEPHONE HELPLINE
                  </Typography>
                  <Typography sx={{ fontWeight: 850, color: "#1F1700", fontSize: "1.2rem", mb: 0.5 }}>
                    1902 / 08922-236966
                  </Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: "#78350F", lineHeight: 1.5, mb: 2 }}>
                    Toll-free state helpline and DRDA Vizianagaram district control room (Mon-Sat, 9:30 AM to 5:00 PM).
                  </Typography>
                  <Button
                    component="a"
                    href="tel:1902"
                    startIcon={<PhoneRoundedIcon sx={{ fontSize: 18 }} />}
                    fullWidth
                    sx={{
                      background: "#FFC107",
                      color: "#1F1700",
                      fontWeight: 800,
                      py: 1,
                      borderRadius: "8px",
                      fontSize: "0.82rem",
                      textTransform: "none",
                      "&:hover": {
                        background: "#F59E0B"
                      }
                    }}
                  >
                    Call District Helpdesk
                  </Button>
                </Box>

                {/* Community Quality Commitment Card */}
                <Box sx={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  p: 3
                }}>
                  <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "0.95rem", mb: 1 }}>
                    Citizen Charter Commitment
                  </Typography>
                  <Stack spacing={1}>
                    {[
                      "100% of grievances tracked with unique reference ID",
                      "Monthly review presided by Project Director (DRDA)",
                      "Direct feedback loop with Mandal Samakhyas",
                      "Strict zero-tolerance on unauthorized fees"
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                        <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#16A34A", mt: 0.25, flexShrink: 0 }} />
                        <Typography sx={{ fontSize: "0.75rem", color: "#475569", lineHeight: 1.45 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>

              </Stack>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* 4. Quick Links Navigation */}
      <Box component="section" sx={{ py: 3.5, background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {[
              { label: "Performance Dashboard", href: "/dashboard" },
              { label: "Organisational Structure", href: "/about/structure" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Who's Who Directory", href: "/about/whos-who" },
            ].map((link, idx) => (
              <Box 
                key={idx} 
                component={Link} 
                href={link.href} 
                sx={{
                  display: "flex", 
                  alignItems: "center", 
                  gap: 1.25, 
                  background: "#FFFCF5", 
                  border: "1px solid #EDE3CE",
                  color: "#20252D", 
                  fontWeight: 750, 
                  px: 3.5, 
                  py: 1.1, 
                  borderRadius: 1, 
                  textDecoration: "none",
                  fontSize: "0.82rem", 
                  transition: "all 0.2s ease",
                  "&:hover": { 
                     background: "#FFC107",
                     borderColor: "#FFC107", 
                     color: "#1F1700",
                     transform: "translateY(-1px)",
                     boxShadow: "0 6px 16px rgba(255,193,7,0.3)"
                  }
                }}
              >
                {link.label}
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
