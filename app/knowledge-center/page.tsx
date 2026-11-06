"use client";

import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs, Paper, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function KnowledgeCenterPage() {
  const categories = [
    { icon: "🌾", title: "Agriculture", count: "12 articles", bgcolor: "#F1F5F9", borderColor: "#CBD5E1" },
    { icon: "💼", title: "Entrepreneurship", count: "8 articles", bgcolor: "#FEF3C7", borderColor: "#FDE68A" },
    { icon: "📋", title: "Government Schemes", count: "20 articles", bgcolor: "#E0F2FE", borderColor: "#BAE6FD" },
    { icon: "👩", title: "Women Empowerment", count: "9 articles", bgcolor: "#FCE7F3", borderColor: "#FBCFE8" },
    { icon: "💰", title: "Financial Literacy", count: "7 articles", bgcolor: "#F3E8FF", borderColor: "#E9D5FF" },
    { icon: "🌿", title: "Tribal Livelihoods", count: "6 articles", bgcolor: "#DCFCE7", borderColor: "#BBF7D0" },
  ];

  const articles = [
    {
      category: "Agriculture",
      catColor: "white",
      catBg: "#0F172A",
      readTime: "5 min read",
      title: "Organic Turmeric Cultivation for Tribal Farmers",
      desc: "Step-by-step guide to organic turmeric farming — soil preparation, planting, pest management, and harvest."
    },
    {
      category: "Entrepreneurship",
      catColor: "#0F172A",
      catBg: "#FACC15",
      readTime: "7 min read",
      title: "How to Start a Food Processing Unit from Your Home",
      desc: "A practical guide for rural women to set up pickle, papad, or jam manufacturing at home scale."
    },
    {
      category: "Financial Literacy",
      catColor: "#0F172A",
      catBg: "transparent",
      catBorder: "1px solid #0F172A",
      readTime: "4 min read",
      title: "Understanding SHG Bank Linkage Process",
      desc: "Everything an SHG needs to know about getting bank loans — eligibility, documents, and timelines."
    },
    {
      category: "Government Schemes",
      catColor: "white",
      catBg: "#0284C7",
      readTime: "3 min read",
      title: "PM-KISAN: Complete Guide for Farmers",
      desc: "How to register, check status, and resolve issues with PM-KISAN direct benefit transfer."
    },
    {
      category: "Tribal Livelihoods",
      catColor: "white",
      catBg: "#16A34A",
      readTime: "6 min read",
      title: "Minor Forest Produce: Know Your Rights",
      desc: "Forest Rights Act and MFP collection rights for tribal communities — what you can collect and sell."
    },
    {
      category: "Financial Literacy",
      catColor: "#0F172A",
      catBg: "transparent",
      catBorder: "1px solid #0F172A",
      readTime: "5 min read",
      title: "Digital Banking for First-Time Users",
      desc: "A beginner's guide to UPI, mobile banking, and PMJDY zero-balance accounts for rural citizens."
    },
    {
      category: "Women Empowerment",
      catColor: "white",
      catBg: "#0F172A",
      readTime: "8 min read",
      title: "Women Entrepreneurs: Success Stories & Lessons",
      desc: "Lessons from successful rural women entrepreneurs in Vizianagaram and beyond."
    },
    {
      category: "Agriculture",
      catColor: "white",
      catBg: "#16A34A",
      readTime: "5 min read",
      title: "Horticulture Schemes for Vizianagaram Farmers",
      desc: "Cashew, mango, and ginger cultivation support schemes — subsidies, training, and market linkage."
    },
    {
      category: "Entrepreneurship",
      catColor: "#0F172A",
      catBg: "#FACC15",
      readTime: "4 min read",
      title: "MUDRA Loan: Step-by-Step Application Guide",
      desc: "How to apply for MUDRA Yojana — Shishu, Kishor, and Tarun categories explained simply."
    }
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
            <Typography sx={{ color: "#2B2100", fontWeight: 700, fontSize: "0.8rem" }}>Knowledge Center</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Knowledge Center
          </Typography>

          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Practical guides, how-to articles, and resources to help citizens access opportunities and improve livelihoods.
          </Typography>
        </Container>
      </Box>

      {/* Category Pills Section */}
      <Box sx={{ py: 5, bgcolor: "white", borderBottom: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={2}>
            {categories.map((cat, idx) => (
              <Grid size={{ xs: 4, sm: 2 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: cat.bgcolor,
                    border: `1px solid ${cat.borderColor}`,
                    borderRadius: 3,
                    p: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    }
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, mb: 1, lineHeight: 1 }}>{cat.icon}</Typography>
                  <Typography sx={{ color: "#0F172A", fontSize: "0.75rem", fontWeight: 700, lineHeight: 1.2, mb: 0.5 }}>{cat.title}</Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.65rem", fontWeight: 500 }}>{cat.count}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Articles Section */}
      <Box sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 4, md: 5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 2 }}>
              Articles
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
              Featured Articles
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "1rem", fontWeight: 500 }}>
              Practical knowledge curated for citizens of Vizianagaram
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={3}>
            {articles.map((article, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                      borderColor: "#CBD5E1",
                      "& .article-arrow": { transform: "translateX(4px)" }
                    }
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Box sx={{
                      bgcolor: article.catBg,
                      color: article.catColor,
                      border: article.catBorder || "none",
                      px: 1.5,
                      py: 0.25,
                      borderRadius: 10,
                      fontSize: "0.7rem",
                      fontWeight: 700
                    }}>
                      {article.category}
                    </Box>
                    <Typography sx={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 600 }}>
                      {article.readTime}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: "#0F172A", fontWeight: 800, fontSize: "1.1rem", lineHeight: 1.3, mb: 2 }}>
                    {article.title}
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, mb: 4, flexGrow: 1, fontWeight: 500 }}>
                    {article.desc}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#0F172A", fontSize: "0.75rem", fontWeight: 800 }}>
                    <MenuBookIcon sx={{ fontSize: 16 }} />
                    Read Article
                    <ArrowForwardIcon className="article-arrow" sx={{ fontSize: 14, ml: "auto", transition: "transform 0.2s ease" }} />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: "#FFC107", color: "#000000", py: { xs: 2, md: 2.5 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 0.75, fontSize: { xs: "1.4rem", md: "1.75rem" }, letterSpacing: "-0.02em" }}>
            Have Knowledge to Share?
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.85)", fontSize: "0.92rem", mb: 2, maxWidth: 580, mx: "auto", fontWeight: 500 }}>
            If you are an expert, farmer, or entrepreneur with useful knowledge, contribute to our Knowledge Center.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box component={Link} href="/feedback" sx={{
              bgcolor: "#000000", color: "#FFFFFF !important", px: 3, py: 1, borderRadius: 8, fontSize: "0.85rem", fontWeight: 800, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 0.75, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }
            }}>
              Submit Content <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
