"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CitizenServicesPage() {
  const services = [
    {
      title: "Explore Schemes",
      desc: "Browse 100+ government welfare schemes across women, farmers, youth, entrepreneurs, and social-security categories.",
      href: "/schemes",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
      badge: "100+ Schemes",
      color: "#0F172A",
    },
    {
      title: "Knowledge Center",
      desc: "Practical guides and best practices on agriculture, entrepreneurship, financial literacy, and government schemes.",
      href: "/knowledge-center",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80&auto=format&fit=crop",
      badge: "Guides",
      color: "#0284C7",
    },
    {
      title: "Events & Training",
      desc: "Upcoming skill-development programs, workshops, job melas, and training calendars across the district. Register and upskill.",
      href: "/events",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop",
      badge: "Enroll Now",
      color: "#D97706",
    },
    {
      title: "Share Your Concern (PGRS)",
      desc: "Have a problem or a suggestion? Tell us your issue and our team will personally contact and support you.",
      href: "/pgrs",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop",
      badge: "24/7",
      color: "#1D4ED8",
    },
    {
      title: "IVRS Services (1902)",
      desc: "Call-based citizen services available round the clock in Telugu and English — scheme info, application guidance, and more.",
      href: "/ivrs",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80&auto=format&fit=crop",
      badge: "Free · 1902",
      color: "#7C3AED",
    },
    {
      title: "Feedback",
      desc: "Rate our services and share suggestions. Your feedback helps DRDA improve citizen service delivery across Vizianagaram.",
      href: "/feedback",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format&fit=crop",
      badge: "4.8★ Rated",
      color: "#DB2777",
    },
    {
      title: "Contact Directory",
      desc: "Find phone numbers, emails and office locations for DRDA officers and block programme managers across all 27 mandals.",
      href: "/contact",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
      badge: "Directory",
      color: "#475569",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
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
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: "0.8rem" }}>Citizen Services</Typography>
          </Breadcrumbs>
          
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            All Citizen Services in One Place
          </Typography>
          
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Everything you need from DRDA Vizianagaram — schemes, knowledge, trainings, grievance support, helplines, and more. Available 24/7, in Telugu and English.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid Section */}
      <Box sx={{ py: { xs: 2, md: 2.5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Choose a Service
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.02em" }}>
              How Can We Help You Today?
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.9rem", fontWeight: 500 }}>
              Tap any service to get started
            </Typography>
            <Box sx={{ mt: 1.5, mx: "auto", width: 56, height: 3.5, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>
          
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box 
                  component={Link} 
                  href={service.href}
                  sx={{ 
                    display: "block",
                    height: "100%",
                    bgcolor: "white", 
                    borderRadius: "16px", 
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                      borderColor: "#CBD5E1",
                      "& .service-img": { transform: "scale(1.1)" },
                      "& .service-arrow": { transform: "translateX(4px)" }
                    }
                  }}
                >
                  <Box sx={{ position: "relative", height: 130, overflow: "hidden" }}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="service-img"
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box sx={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
                    }} />
                    <Box sx={{ 
                      position: "absolute", 
                      top: 12, 
                      right: 12, 
                      background: "rgba(255,255,255,0.95)", 
                      backdropFilter: "blur(4px)",
                      color: "#1E293B",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 10,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}>
                      {service.badge}
                    </Box>
                    <Typography sx={{ 
                      position: "absolute", 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      p: 2, 
                      color: "white", 
                      fontWeight: 800, 
                      fontSize: "1.05rem",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                    }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.5, mb: 1.5, fontWeight: 500 }}>
                      {service.desc}
                    </Typography>
                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#1E293B", fontSize: "0.82rem", fontWeight: 800 }}>
                      Open <ArrowForwardIcon className="service-arrow" sx={{ fontSize: 15, transition: "transform 0.2s ease" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Talk to Us CTA */}
      <Box sx={{ py: { xs: 2.5, md: 3 }, bgcolor: "#FFC107", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#000000", mb: 0.5, fontSize: { xs: "1.35rem", md: "1.6rem" }, letterSpacing: "-0.02em" }}>
            Prefer to Talk to Us?
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.8)", fontSize: "0.9rem", mb: 2, fontWeight: 500, maxWidth: 500, mx: "auto" }}>
            Reach our citizen helplines any time — in Telugu or English.
          </Typography>
          
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            <Box 
              component="a" 
              href="tel:1902" 
              sx={{ 
                bgcolor: "#000000", color: "white !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              <PhoneIcon sx={{ fontSize: 16 }} /> IVRS: 1902 (Free)
            </Box>
            <Box 
              component="a" 
              href="tel:08922276606" 
              sx={{ 
                bgcolor: "#000000", color: "white !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              <PhoneIcon sx={{ fontSize: 16 }} /> DRDA: 08922-276606
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
