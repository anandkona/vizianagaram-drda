"use client";

import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs, Paper, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";

export default function EventsPage() {
  const upcomingEvents = [
    {
      cat: "Training", catBg: "#0284C7", catColor: "white",
      status: "Registration Open", statusBg: "#FFF8E1", statusColor: "#D97706", statusBorder: "#FFE082",
      title: "DDUGKY Skill Training Enrollment Drive",
      date: "5 June 2026", time: "10:00 AM", location: "DRDA Office, Vizianagaram", seats: "50 seats available"
    },
    {
      cat: "Agriculture", catBg: "#2E7D32", catColor: "white",
      status: "Free", statusBg: "#FFF8E1", statusColor: "#D97706", statusBorder: "#FFE082",
      title: "Organic Farming Workshop for Farmers",
      date: "10 June 2026", time: "9:00 AM", location: "Mandal Office, Vizianagaram", seats: "30 seats available"
    },
    {
      cat: "Entrepreneurship", catBg: "#FACC15", catColor: "#1E293B",
      status: "Open to All", statusBg: "#FFF8E1", statusColor: "#D97706", statusBorder: "#FFE082",
      title: "Women Entrepreneur Mela 2026",
      date: "15 June 2026", time: "11:00 AM", location: "District Collector's Office", seats: "200 seats available"
    },
    {
      cat: "Job Mela", catBg: "#00695C", catColor: "white",
      status: "Companies Hiring", statusBg: "#FFF8E1", statusColor: "#D97706", statusBorder: "#FFE082",
      title: "Job Mela – IT & Services Sector",
      date: "20 June 2026", time: "10:00 AM", location: "DRDA Conference Hall", seats: "300 seats available"
    },
    {
      cat: "Financial", catBg: "transparent", catColor: "#00695C", catBorder: "1px solid #00695C",
      status: "SHG Members Only", statusBg: "#FFF8E1", statusColor: "#D97706", statusBorder: "#FFE082",
      title: "Financial Literacy Camp for SHGs",
      date: "25 June 2026", time: "2:00 PM", location: "Multiple Villages (Batch-wise)", seats: "40 seats available"
    },
    {
      cat: "Convention", catBg: "#2E7D32", catColor: "white",
      status: "SHG Leaders", statusBg: "#FFF8E1", statusColor: "#D97706", statusBorder: "#FFE082",
      title: "SERP Annual SHG Convention 2026",
      date: "5 July 2026", time: "9:00 AM", location: "Zilla Parishad Grounds, Vizianagaram", seats: "1000 seats available"
    }
  ];

  const pastEvents = [
    { title: "Tribal Products Exhibition 2025", date: "April 2026", location: "Town Hall, Bobbili", participants: "450 participants" },
    { title: "PMKVY Certification Ceremony", date: "March 2026", location: "DRDA Office", participants: "180 participants" },
    { title: "Kisan Mela – Agriculture Expo", date: "February 2026", location: "Agriculture Market Yard", participants: "620 participants" }
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
        py: { xs: 2, md: 2.5 }
      }}>
        <Box sx={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.4)", display: "none", pointerEvents: "none"
        }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#2B2100", fontWeight: 700, fontSize: "0.8rem" }}>Events & Training</Typography>
          </Breadcrumbs>
          
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Events & Training Programs
          </Typography>
          
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Upcoming skill development programs, workshops, job melas, and community events across Vizianagaram.
          </Typography>
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Box sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 4, md: 5 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              Upcoming
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Events & Training Calendar
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "1rem", fontWeight: 500 }}>
              Register early — seats are limited for most programs
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>
          
          <Grid container spacing={3}>
            {upcomingEvents.map((event, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    border: "1px solid #E2E8F0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                      borderColor: "#CBD5E1"
                    }
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                    <Box sx={{ 
                      bgcolor: event.catBg, 
                      color: event.catColor,
                      border: event.catBorder || "none",
                      px: 1.5, 
                      py: 0.25, 
                      borderRadius: 10,
                      fontSize: "0.6rem",
                      fontWeight: 700
                    }}>
                      {event.cat}
                    </Box>
                    <Box sx={{ 
                      bgcolor: event.statusBg, 
                      color: event.statusColor,
                      border: `1px solid ${event.statusBorder}`,
                      px: 1.5, 
                      py: 0.25, 
                      borderRadius: 10,
                      fontSize: "0.6rem",
                      fontWeight: 700
                    }}>
                      {event.status}
                    </Box>
                  </Box>
                  
                  <Typography variant="h6" sx={{ color: "#0F172A", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.2, mb: 1.5 }}>
                    {event.title}
                  </Typography>
                  
                  <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 0.75, mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.75rem", fontWeight: 500 }}>
                      <CalendarTodayIcon sx={{ fontSize: 14, color: "#0F172A" }} />
                      {event.date}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.75rem", fontWeight: 500 }}>
                      <AccessTimeIcon sx={{ fontSize: 14, color: "#0F172A" }} />
                      {event.time}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.75rem", fontWeight: 500 }}>
                      <LocationOnIcon sx={{ fontSize: 14, color: "#0F172A" }} />
                      {event.location}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.75rem", fontWeight: 500 }}>
                      <GroupIcon sx={{ fontSize: 14, color: "#0F172A" }} />
                      {event.seats}
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button 
                      href="tel:08954220123"
                      variant="contained" 
                      disableElevation
                      sx={{ 
                        flex: 1, 
                        bgcolor: "#FACC15", 
                        color: "#0F172A", 
                        fontWeight: 800, 
                        fontSize: "0.7rem",
                        textTransform: "none",
                        borderRadius: 2,
                        py: 0.5,
                        "&:hover": { bgcolor: "#F59E0B" } 
                      }}
                    >
                      Call to Register
                    </Button>
                    <Button 
                      href="tel:08954220123"
                      variant="outlined" 
                      sx={{ 
                        flex: 1, 
                        borderColor: "#0F172A", 
                        color: "#0F172A", 
                        fontWeight: 700, 
                        fontSize: "0.7rem",
                        textTransform: "none",
                        borderRadius: 2,
                        py: 0.5,
                        "&:hover": { bgcolor: "#F8FAFC", borderColor: "#0F172A" } 
                      }}
                    >
                      Inquire
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Past Events Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              Archive
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Past Events
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>
          
          <Grid container spacing={3}>
            {pastEvents.map((event, idx) => (
              <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    bgcolor: "white"
                  }}
                >
                  <Typography sx={{ color: "#0F172A", fontWeight: 800, mb: 2, fontSize: "1rem" }}>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.8rem", fontWeight: 500 }}>
                      <CalendarTodayIcon sx={{ fontSize: 14 }} /> {event.date}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.8rem", fontWeight: 500 }}>
                      <LocationOnIcon sx={{ fontSize: 14 }} /> {event.location}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748B", fontSize: "0.8rem", fontWeight: 500 }}>
                      <GroupIcon sx={{ fontSize: 14 }} /> {event.participants}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 6, bgcolor: "#FFC107", color: "#1F1700", textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
            Get Event Notifications
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.8)", fontSize: "0.95rem", mb: 4, fontWeight: 500 }}>
            Never miss a training program or job mela. Contact DRDA to stay updated on upcoming events.
          </Typography>
          <Button
            href="tel:08954220123"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#1E293B",
              color: "white !important",
              fontWeight: 800,
              px: 4,
              py: 1.5,
              borderRadius: 20,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#0F172A",
                boxShadow: "none"
              }
            }}
          >
            Call DRDA for Updates
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
