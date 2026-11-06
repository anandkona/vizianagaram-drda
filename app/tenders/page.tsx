"use client";

import { Box, Container, Stack, Typography, Chip, Button, IconButton } from "@mui/material";
import { Gavel, FileText, IndianRupee, Calendar, Clock, Download, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const tenders = [
  {
    status: "Closing Soon",
    daysLeft: 3,
    title: "Supply & installation of solar dryers for cashew processing units",
    refNo: "DRDA/PVPM/2026/041",
    estValue: "₹18.50 Lakh",
    published: "26 May 2026",
    lastDate: "12 Jun 2026",
    closed: false,
    statusColor: "warning" // For internal logic
  },
  {
    status: "Open",
    daysLeft: 9,
    title: "Construction of FPO aggregation & storage shed — Salur cluster",
    refNo: "DRDA/PVPM/2026/039",
    estValue: "₹42.00 Lakh",
    published: "20 May 2026",
    lastDate: "18 Jun 2026",
    closed: false,
    statusColor: "success"
  },
  {
    status: "Open",
    daysLeft: 11,
    title: "Printing of SHG training & financial literacy material (bilingual)",
    refNo: "DRDA/PVPM/2026/037",
    estValue: "₹6.25 Lakh",
    published: "14 May 2026",
    lastDate: "20 Jun 2026",
    closed: false,
    statusColor: "success"
  },
  {
    status: "Closed",
    daysLeft: 0,
    title: "Hiring of vehicles for field operations (annual contract)",
    refNo: "DRDA/PVPM/2026/034",
    estValue: "₹28.00 Lakh",
    published: "2 May 2026",
    lastDate: "25 May 2026",
    closed: true,
    statusColor: "default"
  },
  {
    status: "Closed",
    daysLeft: 0,
    title: "Supply of packaging machinery for millet & hill-broom units",
    refNo: "DRDA/PVPM/2026/030",
    estValue: "₹15.80 Lakh",
    published: "22 Apr 2026",
    lastDate: "15 May 2026",
    closed: true,
    statusColor: "default"
  },
];

export default function TendersPage() {
  const activeCount = tenders.filter(t => !t.closed).length;
  const totalCount = tenders.length;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC", pb: { xs: 8, md: 0 } }}>
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
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.1, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <Box sx={{ fontSize: "0.8rem", color: "rgba(43, 33, 0, 0.72)", fontWeight: 650, mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <span>/</span>
            <Typography component="span" sx={{ color: "#1F1700", fontWeight: 800, fontSize: "0.8rem" }}>Tenders</Typography>
          </Box>
          
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "flex-end" }, justifyContent: "space-between", gap: 2 }}>
            <Box>
              <Box sx={{
                display: "inline-flex", alignItems: "center", gap: 1,
                bgcolor: "rgba(255, 255, 255, 0.65)", color: "#78350F",
                fontSize: "0.75rem", fontWeight: 800, px: 1.5, py: 0.5,
                borderRadius: 20, border: "1px solid rgba(180, 83, 9, 0.3)", backdropFilter: "blur(6px)", mb: 1,
                textTransform: "uppercase", letterSpacing: "0.05em"
              }}>
                <Gavel size={13} />
                e-Procurement
              </Box>
              <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
                Tenders & Quotations
              </Typography>
              <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 550 }}>
                Active and recent procurement notices from DRDA Vizianagaram.
              </Typography>
            </Box>
            
            <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, width: { xs: "100%", sm: "auto" } }}>
              <Box sx={{ flex: { xs: 1, sm: "initial" }, bgcolor: "rgba(255, 255, 255, 0.75)", border: "1px solid rgba(180, 83, 9, 0.3)", backdropFilter: "blur(8px)", borderRadius: 3, px: 2, py: 1, textAlign: "center", boxShadow: "0 2px 8px rgba(180, 83, 9, 0.15)" }}>
                <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 900, color: "#1F1700", lineHeight: 1 }}>{activeCount}</Typography>
                <Typography sx={{ fontSize: "0.6875rem", color: "#78350F", fontWeight: 800, mt: 0.5 }}>Active Now</Typography>
              </Box>
              <Box sx={{ flex: { xs: 1, sm: "initial" }, bgcolor: "rgba(255, 255, 255, 0.75)", border: "1px solid rgba(180, 83, 9, 0.3)", backdropFilter: "blur(8px)", borderRadius: 3, px: 2, py: 1, textAlign: "center", boxShadow: "0 2px 8px rgba(180, 83, 9, 0.15)" }}>
                <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, fontWeight: 900, color: "#1F1700", lineHeight: 1 }}>{totalCount}</Typography>
                <Typography sx={{ fontSize: "0.6875rem", color: "#78350F", fontWeight: 800, mt: 0.5 }}>Total Notices</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>



      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 3, sm: 4, md: 6 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, gap: { xs: 2, sm: 2.5, md: 3 } }}>
          {tenders.map((item, idx) => {
            let borderColor = "#E2E8F0";
            let statusBg = "#F1F5F9";
            let statusColor = "#64748B";
            let statusBorder = "#E2E8F0";

            if (item.statusColor === "warning") {
              borderColor = "rgba(217, 119, 6, 0.4)";
              statusBg = "#FFF8E1";
              statusColor = "#D97706";
              statusBorder = "#FFE082";
            } else if (item.statusColor === "success") {
              borderColor = "rgba(217, 119, 6, 0.3)";
              statusBg = "#FFFDE7";
              statusColor = "#B45309";
              statusBorder = "#FDE68A";
            }

            return (
              <Box 
                key={idx}
                sx={{
                  position: "relative",
                  bgcolor: "white",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: borderColor,
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transition: "all 0.2s ease-in-out",
                  overflow: "hidden",
                  opacity: item.closed ? 0.75 : 1,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }
                }}
              >
                {/* Side semi-circles (cutouts effect) */}
                <Box sx={{ position: "absolute", left: -10, top: "50%", transform: "translateY(-50%)", width: 20, height: 20, borderRadius: "50%", bgcolor: "#F8FAFC", border: "1px solid #E2E8F0" }} />
                <Box sx={{ position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", width: 20, height: 20, borderRadius: "50%", bgcolor: "#F8FAFC", border: "1px solid #E2E8F0" }} />
                
                <Box sx={{ p: { xs: 2.2, sm: 3 } }}>
                  {/* Tags */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <Box sx={{ 
                      fontSize: "0.6875rem", fontWeight: 700, px: 1.25, py: 0.5, 
                      borderRadius: 4, border: "1px solid", 
                      bgcolor: statusBg, color: statusColor, borderColor: statusBorder 
                    }}>
                      {item.status}
                    </Box>
                    {!item.closed && (
                      <Box sx={{ 
                        display: "flex", alignItems: "center", gap: 0.5, 
                        fontSize: "0.6875rem", fontWeight: 700, px: 1.25, py: 0.5, 
                        borderRadius: 4, 
                        bgcolor: item.statusColor === "warning" ? "#FEF2F2" : "#FFFBEB", 
                        color: item.statusColor === "warning" ? "#DC2626" : "#B45309" 
                      }}>
                        <Clock size={11} />
                        {item.daysLeft} days left
                      </Box>
                    )}
                  </Box>

                  {/* Title */}
                  <Typography sx={{ fontWeight: 700, color: "#1E293B", lineHeight: 1.4, mb: 2, minHeight: { sm: "2.5rem" } }}>
                    {item.title}
                  </Typography>

                  {/* Details Grid */}
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5, mb: 2.5, fontSize: "0.75rem" }}>
                    {[
                      { icon: FileText, label: "Ref No.", value: item.refNo, tabular: true },
                      { icon: IndianRupee, label: "Est. Value", value: item.estValue },
                      { icon: Calendar, label: "Published", value: item.published },
                      { icon: Clock, label: "Last Date", value: item.lastDate },
                    ].map((detail, i) => (
                      <Box key={i} sx={{ bgcolor: "#F8FAFC", borderRadius: 2, p: 1.25, border: "1px solid #E2E8F0" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#64748B", mb: 0.25 }}>
                          <detail.icon size={11} />
                          {detail.label}
                        </Box>
                        <Box sx={{ fontWeight: 600, color: "#1E293B", fontFamily: detail.tabular ? "monospace" : "inherit" }}>
                          {detail.value}
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Action Button */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      disabled={item.closed}
                      sx={{
                        flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 0.75,
                        fontSize: "0.75rem", fontWeight: 700, py: 1.25, borderRadius: 2, transition: "all 0.2s ease",
                        textTransform: "none", boxShadow: "none",
                        ...(item.closed ? {
                          bgcolor: "#F1F5F9", color: "#94A3B8",
                          "&.Mui-disabled": { bgcolor: "#F1F5F9", color: "#94A3B8" }
                        } : {
                          bgcolor: "#FFC107", color: "#2B2100 !important",
                          "&:hover": { bgcolor: "#FFB300", boxShadow: "0 2px 8px rgba(255, 193, 7, 0.4)" }
                        })
                      }}
                    >
                      <Download size={13} />
                      {item.closed ? "Closed" : "Download Documents"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Portal Info Box */}
        <Box sx={{ mt: 4, bgcolor: "white", borderRadius: 4, border: "1px solid #E2E8F0", p: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: 2 }}>
          <Box sx={{ width: 48, height: 48, borderRadius: 3, bgcolor: "#FFF8E1", color: "#8A6500", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Gavel size={22} />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
            <Typography sx={{ fontWeight: 700, color: "#1E293B" }}>Submit bids on AP e-Procurement</Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#64748B", mt: 0.5 }}>All bids must be submitted online through the official Andhra Pradesh e-Procurement portal.</Typography>
          </Box>
          <Box
            component="a"
            href="https://tender.apeprocurement.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#000000",
              color: "#FFFFFF !important",
              fontSize: "0.85rem",
              fontWeight: 800,
              px: 3,
              py: 1.25,
              borderRadius: 8,
              textDecoration: "none",
              flexShrink: 0,
              transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
              "&:hover": {
                bgcolor: "#18181B",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
              }
            }}
          >
            Visit Portal 
            <ExternalLink size={15} />
          </Box>
        </Box>
      </Container>

      {/* Footer CTA Section */}
      <Box sx={{ py: { xs: 2.5, sm: 3, md: 4 }, bgcolor: "#FFC107", borderTop: "1px solid rgba(0,0,0,0.05)", px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#000000", mb: 0.5, fontSize: { xs: "1.35rem", md: "1.6rem" }, letterSpacing: "-0.02em" }}>
            Procurement queries?
          </Typography>
          <Typography sx={{ color: "rgba(0,0,0,0.8)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, mb: 2, fontWeight: 500, maxWidth: 540, mx: "auto" }}>
            Contact the DRDA Accounts & Procurement section for clarifications on any tender.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            <Box
              component={Link}
              href="/contact"
              sx={{
                bgcolor: "#000000",
                color: "white !important",
                px: 3.5,
                py: 1.25,
                borderRadius: 8,
                fontSize: "0.85rem",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
              }}
            >
              Contact Directory
              <ArrowRight size={16} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
