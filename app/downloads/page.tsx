"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import Link from "next/link";

const officialDocuments = [
  {
    id: 1,
    title: "DRDA SHG Bank Linkage & Revolving Fund Application Form",
    category: "Forms",
    date: "2026-05-18",
    size: "245 KB",
    type: "PDF",
    href: "https://vizianagaram.ap.gov.in/documents/",
  },
  {
    id: 2,
    title: "One Family One Entrepreneur (OFOE) Scheme Enrollment Proforma",
    category: "Livelihoods",
    date: "2026-05-10",
    size: "380 KB",
    type: "PDF",
    href: "https://vizianagaram.ap.gov.in/documents/",
  },
  {
    id: 3,
    title: "09.Rajam (SC) Electoral Roll / Polling Station Revision - Gopalapuram Part No-158",
    category: "Gazettes",
    date: "2026-08-25",
    size: "147 KB",
    type: "PDF",
    href: "https://cdn.s3waas.gov.in/s3cee631121c2ec9232f3a2f028ad5c89b/uploads/2026/08/17876651369795.pdf",
  },
  {
    id: 4,
    title: "DDU-GKY Skill Development & Rural Placement Trainee Admission Guidelines",
    category: "Youth & Skills",
    date: "2026-04-22",
    size: "520 KB",
    type: "PDF",
    href: "https://vizianagaram.ap.gov.in/documents/",
  },
  {
    id: 5,
    title: "09.Rajam (SC) Electoral Roll - Pogiri Part No-213",
    category: "Gazettes",
    date: "2026-08-25",
    size: "152 KB",
    type: "PDF",
    href: "https://cdn.s3waas.gov.in/s3cee631121c2ec9232f3a2f028ad5c89b/uploads/2026/08/17876650378532.pdf",
  },
  {
    id: 6,
    title: "NTR Bharosa Social Security Pension Application & Verification Format",
    category: "Welfare",
    date: "2026-03-15",
    size: "310 KB",
    type: "PDF",
    href: "https://vizianagaram.ap.gov.in/documents/",
  },
  {
    id: 7,
    title: "Public Grievance Redressal (PGRS Spandana) Physical Petition Form",
    category: "Citizen Support",
    date: "2026-02-10",
    size: "190 KB",
    type: "PDF",
    href: "https://vizianagaram.ap.gov.in/documents/",
  },
  {
    id: 8,
    title: "09.Rajam (SC) Electoral Roll - Guyyannavalasa Part No-204",
    category: "Gazettes",
    date: "2026-08-25",
    size: "224 KB",
    type: "PDF",
    href: "https://cdn.s3waas.gov.in/s3cee631121c2ec9232f3a2f028ad5c89b/uploads/2026/08/17876649903512.pdf",
  },
];

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Forms", "Livelihoods", "Gazettes", "Youth & Skills", "Welfare", "Citizen Support"];

  const filteredDocs = officialDocuments.filter((doc) => {
    const matchSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCat === "All" || doc.category === selectedCat;
    return matchSearch && matchCat;
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}>
      {/* 1. TOP HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 5, sm: 6, md: 7 },
          overflow: "hidden",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
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
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 3.5, md: 5 }, position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6.5 }}>
              <Breadcrumbs separator="›" sx={{ color: "#64748B", mb: { xs: 1, sm: 1.25 }, fontSize: { xs: "0.78rem", sm: "0.85rem" }, fontWeight: 600 }}>
                <Link href="/" style={{ color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <HomeIcon sx={{ fontSize: 16, mb: "1px" }} /> Home
                </Link>
                <Typography component="span" sx={{ color: "#082B50", fontWeight: 700, fontSize: { xs: "0.78rem", sm: "0.85rem" } }}>
                  Downloads & Documents
                </Typography>
              </Breadcrumbs>
              <Typography sx={{ color: "#D97706", fontSize: { xs: "0.72rem", sm: "0.78rem" }, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", mb: 0.5 }}>
                OFFICIAL REPOSITORY & APPLICATION FORMS
              </Typography>
              <Typography component="h1" sx={{ color: "#082B50", fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem" }, fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.15, mb: 1.5 }}>
                Downloads & Gazettes
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" }, lineHeight: 1.6, maxWidth: 580, fontWeight: 500, mb: 2.5 }}>
                Download official application forms, government orders, district gazettes, and guidelines. Verified directly from the District Administration portal (vizianagaram.ap.gov.in/documents/).
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href="https://vizianagaram.ap.gov.in/documents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<DownloadRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#F5B800",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3,
                    py: 1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(245, 184, 0, 0.3)",
                    "&:hover": { bgcolor: "#D49D00" },
                  }}
                >
                  Official Documents Portal
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #CBD5E1",
                    color: "#082B50",
                    borderRadius: "100px",
                    px: 3,
                    py: 1,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#F8FAFC", borderColor: "#082B50" },
                  }}
                >
                  Citizen Services
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5.5 }}>
              <Box sx={{ position: "relative", width: "100%", height: { xs: 260, sm: 320, md: 360 }, borderRadius: { xs: "24px", sm: "32px" }, overflow: "hidden", boxShadow: "0 20px 45px -12px rgba(8, 43, 80, 0.18)", border: "4px solid #FFFFFF", bgcolor: "#FEF9C3" }}>
                <Box sx={{ width: "100%", height: "100%", backgroundImage: "url('/images/vizianagaram-administrative-headquarters.jpg')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.6s ease", "&:hover": { transform: "scale(1.03)" } }} />
                <Box sx={{ position: "absolute", bottom: 16, left: 16, bgcolor: "rgba(8, 43, 80, 0.88)", backdropFilter: "blur(8px)", borderRadius: "100px", px: 1.8, py: 0.6, display: "flex", alignItems: "center", gap: 1, border: "1px solid rgba(255,255,255,0.2)" }}>
                  <ArticleRoundedIcon sx={{ fontSize: 16, color: "#F5B800" }} />
                  <Typography sx={{ color: "#FFFFFF", fontSize: "0.72rem", fontWeight: 700 }}>
                    Official District Administration Records • Vizianagaram
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. DOCUMENTS SEARCH & TABLE */}
      <Box sx={{ py: { xs: 4, sm: 5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 3.5, md: 5 } }}>
          <Box sx={{ mb: 3.5, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between" }}>
            <Box>
              <Typography sx={{ color: "#082B50", fontSize: { xs: "1.3rem", sm: "1.6rem" }, fontWeight: 900 }}>
                Official Documents & Applications
              </Typography>
              <Typography sx={{ color: "#64748B", fontSize: "0.85rem" }}>
                Select a category or search by document name.
              </Typography>
            </Box>

            <TextField
              size="small"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ fontSize: 20, color: "#64748B" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                bgcolor: "#FFFFFF",
                borderRadius: "100px",
                width: { xs: "100%", md: 320 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                },
              }}
            />
          </Box>

          {/* Category Chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCat(cat)}
                sx={{
                  bgcolor: selectedCat === cat ? "#082B50" : "#FFFFFF",
                  color: selectedCat === cat ? "#FFFFFF" : "#082B50",
                  border: "1px solid #CBD5E1",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: selectedCat === cat ? "#0F3A66" : "#F1F5F9",
                  },
                }}
              />
            ))}
          </Box>

          {/* Table */}
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #E2E8F0", borderRadius: "16px", overflow: "hidden" }}>
            <Table>
              <TableHead sx={{ bgcolor: "#F1F5F9" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800, color: "#082B50", fontSize: "0.82rem" }}>Document Title</TableCell>
                  <TableCell sx={{ fontWeight: 800, color: "#082B50", fontSize: "0.82rem" }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: 800, color: "#082B50", fontSize: "0.82rem" }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 800, color: "#082B50", fontSize: "0.82rem" }}>File Size</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 800, color: "#082B50", fontSize: "0.82rem" }}>Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDocs.map((doc) => (
                  <TableRow key={doc.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 700, color: "#082B50", fontSize: "0.88rem" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <DescriptionRoundedIcon sx={{ fontSize: 20, color: "#D97706" }} />
                        <span>{doc.title}</span>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={doc.category} size="small" sx={{ bgcolor: "#FEF3C7", color: "#B45309", fontWeight: 750, fontSize: "0.72rem" }} />
                    </TableCell>
                    <TableCell sx={{ color: "#64748B", fontSize: "0.82rem" }}>{doc.date}</TableCell>
                    <TableCell sx={{ color: "#64748B", fontSize: "0.82rem" }}>{doc.size}</TableCell>
                    <TableCell align="right">
                      <Button
                        component="a"
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<DownloadRoundedIcon sx={{ fontSize: 16 }} />}
                        size="small"
                        sx={{
                          bgcolor: "#082B50",
                          color: "#FFFFFF",
                          borderRadius: "100px",
                          px: 2,
                          py: 0.5,
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": { bgcolor: "#0F3A66" },
                        }}
                      >
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* 3. QUICK NAVIGATION PILLS (MATCHING WHO'S WHO) */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 3.5 }, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 3.5, md: 5 } }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Org Structure", href: "/about/structure" },
              { label: "Contact Directory", href: "/directory" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "Citizen Services", href: "/services" },
            ].map((link, idx) => (
              <Button
                key={idx}
                component={Link}
                href={link.href}
                endIcon={<ArrowForwardIcon className="nav-arrow" sx={{ fontSize: 13, transition: "transform 0.2s ease" }} />}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1.5px solid #CBD5E1",
                  color: "#082B50",
                  borderRadius: "100px",
                  fontSize: "0.82rem",
                  fontWeight: 750,
                  px: 2.6,
                  py: 0.75,
                  textTransform: "none",
                  boxShadow: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#F8FAFC",
                    borderColor: "#082B50",
                    color: "#082B50",
                    boxShadow: "none",
                    "& .nav-arrow": {
                      transform: "translateX(3px)",
                    },
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
