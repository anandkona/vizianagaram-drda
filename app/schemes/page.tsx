"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SchemesPage() {
  const categories = [
    {
      title: "Women & SHG Programs",
      desc: "SHG formation, financial inclusion, entrepreneurship support for women.",
      href: "/schemes/women",
      img: "https://images.unsplash.com/photo-1609252285522-ed0ebdd43551?w=600&q=80&auto=format&fit=crop",
      count: "8 schemes",
      color: "#C2185B",
    },
    {
      title: "Farmers & Agriculture",
      desc: "PM-KISAN, soil health, irrigation, crop insurance, horticulture schemes.",
      href: "/schemes/farmers",
      img: "https://images.unsplash.com/photo-1609252509027-3928a66302fd?w=600&q=80&auto=format&fit=crop",
      count: "12 schemes",
      color: "#2E7D32",
    },
    {
      title: "Youth & Skill Development",
      desc: "DDUGKY, PMKVY, self-employment and skill training programs for youth.",
      href: "/schemes/youth",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop",
      count: "7 schemes",
      color: "#1565C0",
    },
    {
      title: "Entrepreneurs & MSME",
      desc: "PMEGP, MUDRA, startup support, MSME credit, and business development.",
      href: "/schemes/entrepreneurs",
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&q=80&auto=format&fit=crop",
      count: "6 schemes",
      color: "#E65100",
    },
    {
      title: "Tribal Welfare",
      desc: "Tribal sub-plan, forest rights, livelihood programs for ST communities.",
      href: "/schemes/tribal",
      img: "https://images.unsplash.com/photo-1609252509229-364936a1d1a2?w=600&q=80&auto=format&fit=crop",
      count: "9 schemes",
      color: "#7B1FA2",
    },
    {
      title: "Senior Citizens & Differently Abled",
      desc: "Pensions, assistive devices, social security, and welfare support.",
      href: "/schemes/social",
      img: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?w=600&q=80&auto=format&fit=crop",
      count: "5 schemes",
      color: "#00897B",
    },
  ];

  const popularSchemes = [
    { name: "NRLM – National Rural Livelihoods Mission", category: "Women", eligibility: "Rural Women BPL households", benefit: "SHG formation, credit, livelihoods", href: "/schemes/women" },
    { name: "PM-KISAN – PM Kisan Samman Nidhi", category: "Farmers", eligibility: "All small & marginal farmers", benefit: "₹6,000/year direct benefit", href: "/schemes/farmers" },
    { name: "PMEGP – Employment Generation Programme", category: "Entrepreneurs", eligibility: "Individuals 18+, rural/semi-urban", benefit: "15-35% capital subsidy on project", href: "/schemes/entrepreneurs" },
    { name: "DDUGKY – Deen Dayal Upadhyaya Grameen Kaushalya", category: "Youth", eligibility: "Rural youth 15-35 years", benefit: "Free training + placement support", href: "/schemes/youth" },
    { name: "Tribal Sub-Plan Livelihood Schemes", category: "Tribal", eligibility: "Scheduled Tribe families", benefit: "Unit cost assistance for enterprises", href: "/schemes/tribal" },
    { name: "NTR Bharosa Pension", category: "Senior Citizens", eligibility: "Seniors, widows, differently-abled (BPL)", benefit: "₹4,000–₹15,000/month", href: "/schemes/social" },
  ];

  const steps = [
    { title: "Check Eligibility", desc: "Review the eligibility criteria for the scheme you are interested in.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop" },
    { title: "Gather Documents", desc: "Collect Aadhar, ration card, income certificate and required proofs.", img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80&auto=format&fit=crop" },
    { title: "Submit Application", desc: "Apply online or visit your nearest village secretariat / sachivalayam.", img: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?w=600&q=80&auto=format&fit=crop" },
    { title: "Track Status", desc: "Use your application reference number to track progress online.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop" },
  ];

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
        py: { xs: 2, md: 2.5 },
      }}>
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: "0.8rem" }}>Government Schemes</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Government Schemes Portal
          </Typography>

          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Find welfare schemes, check eligibility, understand benefits, and learn how to apply — all in one place for Vizianagaram district.
          </Typography>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: { xs: 2, md: 2.5 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Browse by Category
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.02em" }}>
              Schemes for Every Citizen
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.9rem", fontWeight: 500 }}>
              Choose the category that applies to you to find relevant government schemes
            </Typography>
            <Box sx={{ mt: 1.5, mx: "auto", width: 56, height: 3.5, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={2.5}>
            {categories.map((cat, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  component={Link}
                  href={cat.href}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
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
                      "& .cat-img": { transform: "scale(1.1)" },
                      "& .cat-arrow": { transform: "translateX(4px)" }
                    }
                  }}
                >
                  <Box sx={{ position: "relative", height: 120, overflow: "hidden" }}>
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="cat-img"
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box sx={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.85,
                      mixBlendMode: "multiply",
                      background: `linear-gradient(160deg, transparent 25%, ${cat.color})`
                    }} />
                    <Box sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(4px)",
                      color: cat.color,
                      fontSize: "0.7rem",
                      fontWeight: 850,
                      px: 1.25,
                      py: 0.25,
                      borderRadius: 20,
                      boxShadow: "0 2px 5px rgba(0,0,0,0.15)"
                    }}>
                      {cat.count}
                    </Box>
                    <Typography sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 1.5,
                      color: "white",
                      fontWeight: 800,
                      fontSize: "1rem",
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                    }}>
                      {cat.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography sx={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.4, mb: 1, fontWeight: 500 }}>
                      {cat.desc}
                    </Typography>
                    <Box sx={{ mt: "auto", pt: 1, display: "inline-flex", alignItems: "center", gap: 0.5, color: cat.color, fontSize: "0.8rem", fontWeight: 700 }}>
                      View schemes <ArrowForwardIcon className="cat-arrow" sx={{ fontSize: 14, transition: "transform 0.2s ease" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Schemes Section */}
      <Box sx={{ py: { xs: 2, md: 2.5 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Featured
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.02em" }}>
              Popular Schemes
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.9rem", fontWeight: 500 }}>
              Commonly accessed schemes by citizens of Vizianagaram
            </Typography>
            <Box sx={{ mt: 1.5, mx: "auto", width: 56, height: 3.5, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>

          <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, border: "1px solid #E2E8F0", overflowX: "auto" }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#1E293B" }}>
                  <TableCell sx={{ color: "white", fontSize: "0.85rem", fontWeight: 700, borderBottom: "none", py: 1.5 }}>Scheme Name</TableCell>
                  <TableCell sx={{ color: "white", fontSize: "0.85rem", fontWeight: 700, borderBottom: "none", py: 1.5 }}>Category</TableCell>
                  <TableCell sx={{ color: "white", fontSize: "0.85rem", fontWeight: 700, borderBottom: "none", py: 1.5, display: { xs: "none", sm: "table-cell" } }}>Eligibility</TableCell>
                  <TableCell sx={{ color: "white", fontSize: "0.85rem", fontWeight: 700, borderBottom: "none", py: 1.5, display: { xs: "none", md: "table-cell" } }}>Benefit</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1.5 }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {popularSchemes.map((row, i) => (
                  <TableRow key={i} sx={{ bgcolor: i % 2 === 0 ? "white" : "#F8FAFC", "&:last-child td, &:last-child th": { border: 0 }, "&:hover": { bgcolor: "#F1F5F9" } }}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.85rem", color: "#0F172A", py: 1.75 }}>{row.name}</TableCell>
                    <TableCell sx={{ py: 1.75 }}>
                      <Box sx={{ display: "inline-block", bgcolor: "#E2E8F0", color: "#475569", px: 1.5, py: 0.5, borderRadius: 20, fontSize: "0.75rem", fontWeight: 700 }}>
                        {row.category}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "#475569", fontWeight: 500, fontSize: "0.85rem", py: 1.75, display: { xs: "none", sm: "table-cell" } }}>{row.eligibility}</TableCell>
                    <TableCell sx={{ color: "#475569", fontWeight: 500, fontSize: "0.85rem", py: 1.75, display: { xs: "none", md: "table-cell" } }}>{row.benefit}</TableCell>
                    <TableCell sx={{ py: 1.75, textAlign: "right" }}>
                      <Box component={Link} href={row.href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#D97706", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", transition: "color 0.2s", "&:hover": { color: "#B45309" }, "&:hover .table-arrow": { transform: "translateX(4px)" } }}>
                        Details <ArrowForwardIcon className="table-arrow" sx={{ fontSize: 16, transition: "transform 0.2s ease" }} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Guide Section */}
      <Box sx={{ py: { xs: 2, md: 2.5 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "inline-block", background: "#E2E8F0", color: "#475569", fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Guide
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.02em" }}>
              How to Apply for Schemes
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.9rem", fontWeight: 500 }}>
              Follow these simple steps to access government welfare schemes
            </Typography>
            <Box sx={{ mt: 1.5, mx: "auto", width: 56, height: 3.5, bgcolor: "#FACC15", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={2.5}>
            {steps.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: "16px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                      borderColor: "#CBD5E1",
                      "& .step-img": { transform: "scale(1.1)" }
                    }
                  }}
                >
                  <Box sx={{ position: "relative", height: 120, overflow: "hidden" }}>
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="step-img"
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    />
                    <Box sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15,23,42,0.95), rgba(15,23,42,0.2))"
                    }} />
                    <Box sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      width: 32,
                      height: 32,
                      bgcolor: "#FACC15",
                      color: "#0F172A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: "0.85rem",
                      fontWeight: 900,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                    }}>
                      0{index + 1}
                    </Box>
                    <Typography sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 1.5,
                      color: "white",
                      fontWeight: 800,
                      fontSize: "1rem",
                      textShadow: "0 2px 5px rgba(0,0,0,0.5)"
                    }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography sx={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.5, fontWeight: 500 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
