"use client";

import { Box, Container, Typography, Grid, Breadcrumbs, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";
import Link from "next/link";
import LeafIcon from "@mui/icons-material/Spa";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BanknoteIcon from "@mui/icons-material/AccountBalanceWallet";
import UsersIcon from "@mui/icons-material/Group";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FPO_DATA = [
  { name: "Komarada FPO", mandal: "Komarada", members: "2,200", commodities: "Exotic Vegetables, Cashew", funds: "₹68L" },
  { name: "Kurupam FPO", mandal: "Kurupam", members: "2,100", commodities: "Turmeric, Ginger, MFP", funds: "₹62L" },
  { name: "Salur FPO", mandal: "Salur", members: "2,400", commodities: "Paddy, Maize, Pulses", funds: "₹72L" },
  { name: "Vizianagaram FPO", mandal: "Vizianagaram", members: "2,500", commodities: "Cashew, Vegetables", funds: "₹75L" },
  { name: "Seethampeta FPO", mandal: "Seethampeta", members: "2,000", commodities: "Bamboo, MFP, Honey", funds: "₹60L" },
  { name: "Bhamini FPO", mandal: "Bhamini", members: "1,950", commodities: "Paddy, Banana, Bamboo", funds: "₹58L" },
  { name: "Veeraghattam FPO", mandal: "Veeraghattam", members: "2,100", commodities: "Cashew, Turmeric", funds: "₹63L" },
  { name: "Garugubilli FPO", mandal: "Garugubilli", members: "1,900", commodities: "MFP, Honey, Tamarind", funds: "₹57L" },
  { name: "Jiyyammavalasa FPO", mandal: "Jiyyammavalasa", members: "2,150", commodities: "Paddy, Pulses", funds: "₹64L" },
  { name: "Makkuva FPO", mandal: "Makkuva", members: "2,050", commodities: "Cashew, Vegetables", funds: "₹61L" },
  { name: "Gummalaxmipuram FPO", mandal: "Gummalaxmipuram", members: "2,080", commodities: "Paddy, Millets", funds: "₹62L" },
  { name: "Pachipenta FPO", mandal: "Pachipenta", members: "1,980", commodities: "Bamboo, MFP", funds: "₹59L" },
  { name: "Seethanagaram FPO", mandal: "Seethanagaram", members: "2,200", commodities: "Banana, Vegetables", funds: "₹66L" },
  { name: "G.L.Puram FPO", mandal: "G.L.Puram", members: "2,100", commodities: "Seed Production, Desi Seeds", funds: "₹63L" },
  { name: "Bobbili FPO", mandal: "Bobbili", members: "2,620", commodities: "Paddy, Cashew, Pulses", funds: "₹80L" },
];

export default function FPOsPage() {
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
        py: { xs: 2, md: 2.5 }
      }}>
        <Box sx={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.4)", display: "none", pointerEvents: "none"
        }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Link href="/livelihoods" style={{ color: "inherit", textDecoration: "none" }}>Livelihoods</Link>
            <Typography sx={{ color: "#2B2100", fontSize: "0.85rem", fontWeight: 700 }}>FPOs</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Farmer Producer Organisations
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            15 FPOs across all 15 mandals, 30,430 farmer members, and ₹9.35 Crore available funds — powering collective agriculture.
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ bgcolor: "#0F172A", py: { xs: 4, md: 5 }, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={2} justifyContent="center">
            {[
              { value: "15", label: "FPOs" },
              { value: "3,659", label: "Farmer Producer Groups" },
              { value: "921", label: "New FPGs" },
              { value: "30,430", label: "Total Members" },
              { value: "11,240", label: "New Members" }
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={idx}>
                <Box sx={{
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  p: { xs: 1.5, md: 2 },
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    bgcolor: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,193,7,0.5)",
                    "&::after": { opacity: 1 }
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0, left: 0, right: 0, height: "2px",
                    background: "linear-gradient(90deg, transparent, #FFC107, transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }
                }}>
                  <Typography sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" }, fontWeight: 900, color: "#FFC107", mb: 0.5, lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 750, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Chip 
              label="Available Funds: ₹9.35 Crore" 
              icon={<Typography sx={{ color: "#FFC107 !important", fontSize: "1.1rem", mr: 0.5 }}>₹</Typography>}
              sx={{
                bgcolor: "rgba(255,193,7,0.1)",
                color: "#FFC107",
                border: "1px solid rgba(255,193,7,0.3)",
                fontWeight: 800,
                fontSize: "0.9rem",
                px: 1.5,
                py: 2.5,
                borderRadius: "30px",
                "& .MuiChip-icon": { color: "#FFC107" }
              }} 
            />
          </Box>
        </Container>
      </Box>

      {/* Main Content - What FPOs Do */}
      <Box sx={{ pt: { xs: 3, md: 4.5 }, pb: { xs: 4, md: 5 }, bgcolor: "white" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 3.5, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FEF9C3", color: "#CA8A04",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 16px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px",
              border: "1px solid #FEF08A"
            }}>
              FPO Activities
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.8rem", md: "2.3rem" } }}>
              What FPOs Do
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "0.95rem" }}>
              Collective action across the agricultural value chain
            </Typography>
            <Box sx={{ mt: 2, mx: "auto", width: 64, height: 4, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Grid container spacing={3}>
            {[
              { title: "Commodity Clusters", desc: "Organised procurement across cashew, turmeric, ginger, MFP, paddy, bamboo, and exotic vegetables.", icon: <LeafIcon /> },
              { title: "Market Linkages", desc: "Direct connects to retail chains, government procurement, e-commerce platforms, and export markets.", icon: <TrendingUpIcon /> },
              { title: "Business Plans", desc: "Each FPO has a board-approved business plan with working capital, infrastructure, and revenue targets.", icon: <BanknoteIcon /> },
              { title: "Member Growth", desc: "3,659 existing FPGs + 921 new FPGs onboarded. 30,430 members, with 11,240 new additions.", icon: <UsersIcon /> },
              { title: "Procurement Activities", desc: "Centralised buying of inputs (seeds, fertilisers) to reduce costs; collective selling to improve prices.", icon: <LeafIcon /> },
              { title: "Value Addition", desc: "Cashew processing, millet products, banana fiber, exotic veg — value added before sale for higher margins.", icon: <TrendingUpIcon /> }
            ].map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box sx={{ 
                  display: 'flex', gap: 2,
                  bgcolor: "white", p: 3, borderRadius: 3, border: "1px solid #E2E8F0", 
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)", height: "100%",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#FFC107",
                    boxShadow: "0 12px 24px -4px rgba(0, 0, 0, 0.08)",
                    "& .fpo-icon": { bgcolor: "#FFC107", color: "#1F1700" }
                  }
                }}>
                  <Box 
                    className="fpo-icon"
                    sx={{ 
                      bgcolor: "#FEF9C3", color: "#CA8A04", width: 44, height: 44, 
                      borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      border: "1px solid #FEF08A", transition: "all 0.2s ease" 
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#0F172A", fontSize: "1.05rem", mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Directory Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 3.5, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FEF9C3", color: "#CA8A04",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 16px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px",
              border: "1px solid #FEF08A"
            }}>
              15 FPOs
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: { xs: "1.8rem", md: "2.3rem" } }}>
              FPO Directory
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: 600, mx: "auto", fontSize: "0.95rem" }}>
              One FPO per mandal covering all 15 mandals of Vizianagaram
            </Typography>
            <Box sx={{ mt: 2, mx: "auto", width: 64, height: 4, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 1, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#0F172A" }}>
                  <TableCell sx={{ color: "white", fontSize: "0.82rem", fontWeight: 800, borderBottom: "none", py: 2 }}>FPO Name</TableCell>
                  <TableCell sx={{ color: "white", fontSize: "0.82rem", fontWeight: 800, borderBottom: "none", py: 2 }}>Mandal</TableCell>
                  <TableCell align="right" sx={{ color: "white", fontSize: "0.82rem", fontWeight: 800, borderBottom: "none", py: 2 }}>Members</TableCell>
                  <TableCell sx={{ color: "white", fontSize: "0.82rem", fontWeight: 800, borderBottom: "none", py: 2 }}>Main Commodities</TableCell>
                  <TableCell align="right" sx={{ color: "white", fontSize: "0.82rem", fontWeight: 800, borderBottom: "none", py: 2 }}>Funds</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {FPO_DATA.map((row, index) => (
                  <TableRow key={index} sx={{ bgcolor: index % 2 === 0 ? "white" : "#F8FAFC", '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { bgcolor: "#FEFCE8" } }}>
                    <TableCell sx={{ fontWeight: 750, fontSize: "0.85rem", color: "#0F172A", py: 2.2 }}>{row.name}</TableCell>
                    <TableCell sx={{ py: 2.2 }}>
                      <Box sx={{ display: "inline-block", bgcolor: "#FEF9C3", color: "#CA8A04", px: 1.5, py: 0.35, borderRadius: 20, fontSize: "0.72rem", fontWeight: 800, border: "1px solid #FEF08A" }}>
                        {row.mandal}
                      </Box>
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#334155", fontWeight: 700, fontSize: "0.85rem", py: 2.2 }}>{row.members}</TableCell>
                    <TableCell sx={{ py: 2.2 }}>
                      <Typography sx={{ color: "#475569", fontSize: "0.85rem", fontWeight: 500 }}>{row.commodities}</Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#CA8A04", fontWeight: 900, fontSize: "0.85rem", py: 2.2 }}>{row.funds}</TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ bgcolor: "#FEF9C3", borderTop: "2px solid #FEF08A" }}>
                  <TableCell sx={{ fontWeight: 800, fontSize: "0.88rem", color: "#A16207", py: 2.2 }}>Total (15 FPOs)</TableCell>
                  <TableCell sx={{ color: "#78350F", fontSize: "0.85rem", fontWeight: 750, py: 2.2 }}>All 15 Mandals</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 900, fontSize: "0.88rem", color: "#A16207", py: 2.2 }}>30,330</TableCell>
                  <TableCell sx={{ color: "#78350F", fontSize: "0.85rem", fontWeight: 600, py: 2.2 }}>Multi-commodity</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 900, fontSize: "0.88rem", color: "#A16207", py: 2.2 }}>₹9.35 Cr</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Spotlight */}
      <Box sx={{ py: { xs: 3, md: 4 }, background: "#FFC107", color: "#1F1700", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5, color: "#1F1700", letterSpacing: "-0.02em", fontSize: { xs: "1.35rem", md: "1.75rem" } }}>
            Spotlight: Exotic Vegetable Project
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: "0.85rem", mb: 1.5, fontWeight: 700 }}>
            Komarada FPO | Villages: Kandivalasa &amp; Kummarigunta
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, justifyContent: "center", mb: 1.5 }}>
            {["Colored Capsicum", "Broccoli", "Zucchini", "Cherry Tomato", "Red Cabbage", "Baby Corn"].map(veg => (
              <Chip key={veg} label={veg} size="small" sx={{ bgcolor: "white", color: "#1F1700", fontWeight: 750, fontSize: "0.72rem", height: 26, border: "1px solid rgba(0,0,0,0.1)" }} />
            ))}
          </Box>

          <Typography sx={{ color: "rgba(31,23,0,0.9)", fontSize: "0.9rem", fontWeight: 500, maxWidth: 650, mx: "auto", mb: 2.5 }}>
            High-value export-quality exotic vegetables being grown by tribal farmers for premium markets.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component={Link}
              href="/livelihoods"
              sx={{
                bgcolor: "#000000",
                color: "white !important",
                px: 3.5,
                py: 1,
                borderRadius: "50px",
                fontSize: "0.85rem",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                transition: "all 0.2s ease",
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }
              }}
            >
              View Project <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
