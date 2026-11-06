"use client";

import Link from "next/link";
import { Box, Container, Stack, Typography, Grid, Paper, Button, Breadcrumbs } from "@mui/material";
import FileTextRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import UserCheckRoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import ShieldCheckRoundedIcon from "@mui/icons-material/SecurityRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const steps = [
  {
    num: 1,
    title: "Write your request",
    desc: "A plain application in English/Telugu stating the information you seek. No form or reason required.",
    icon: <FileTextRoundedIcon sx={{ fontSize: 28, color: "#000000" }} />
  },
  {
    num: 2,
    title: "Pay the fee",
    desc: "₹10 application fee (IPO / DD / court-fee stamp). BPL applicants are fully exempted.",
    icon: <CurrencyRupeeRoundedIcon sx={{ fontSize: 28, color: "#000000" }} />
  },
  {
    num: 3,
    title: "Submit to the PIO",
    desc: "Hand-deliver or post to the Public Information Officer, DRDA Vizianagaram.",
    icon: <SendRoundedIcon sx={{ fontSize: 28, color: "#000000" }} />
  },
  {
    num: 4,
    title: "Get a reply in 30 days",
    desc: "The PIO responds within 30 days (48 hours if it concerns life or liberty).",
    icon: <AccessTimeRoundedIcon sx={{ fontSize: 28, color: "#000000" }} />
  }
];

export default function RTIPage() {
  return (
    <>
      <Box sx={{ 
        position: "relative", 
        overflow: "hidden", 
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#2B2100", 
        py: { xs: 2, md: 2.5 } 
      }}>
        <Box sx={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255, 255, 255, 0.4)", display: "none", pointerEvents: "none" }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43,33,0,0.6)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#2B2100", fontWeight: 700, fontSize: "0.8rem" }}>Right to Information</Typography>
          </Breadcrumbs>
          
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Right to Information (RTI)
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Transparency is your right. Request information from DRDA Vizianagaram in four simple steps.
          </Typography>
        </Container>
      </Box>

      {/* 4 Steps Section */}
      <Box component="section" sx={{ py: { xs: 4, md: 5 }, background: "#FFFFFF" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box textAlign="center" mb={6}>
            <Typography sx={{ color: "#2B2100", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, mb: 1, opacity: 0.8 }}>
              How it works
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
              File RTI in 4 Steps
            </Typography>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2.5 }}>
            {steps.map((step, idx) => (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 3,
                  px: 2,
                  py: 1.5,
                  textAlign: "left",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <Box sx={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
                    <Box sx={{ width: "100%", height: "100%", borderRadius: 2, background: "#FFC107", display: "flex", alignItems: "center", justifyContent: "center", "& > svg": { fontSize: 18 } }}>
                      {step.icon}
                    </Box>
                    <Box sx={{ position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: "#1F1700",
              color: "#FFFFFF !important", fontSize: "0.55rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {step.num}
                    </Box>
                  </Box>
                  <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.8rem", color: "#2B2100", opacity: 0.8, lineHeight: 1.4 }}>
                  {step.desc}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Who to Contact Section */}
      <Box component="section" sx={{ py: { xs: 4, md: 5 }, background: "#FAFAFA", borderTop: "1px solid #E0E0E0", borderBottom: "1px solid #E0E0E0" }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" }, fontWeight: 800, color: "#2B2100", mb: 1 }}>
              Who to Contact
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#2B2100", opacity: 0.8 }}>
              Designated officers under the RTI Act for DRDA Vizianagaram.
            </Typography>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
            <Paper elevation={0} sx={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 3, overflow: "hidden", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" } }}>
              <Box sx={{ height: 4, background: "#FFC107" }} />
              <Box p={2.5}>
                <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                  <Box sx={{ width: 36, height: 36, borderRadius: 2, background: "#FFF8E1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, "& > svg": { fontSize: 18 } }}>
                    <UserCheckRoundedIcon sx={{ color: "#000000" }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.6rem", textTransform: "uppercase", fontWeight: 700, color: "#2B2100", opacity: 0.7, mb: 0.25 }}>
                      Public Information Officer (PIO)
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#2B2100", lineHeight: 1.2 }}>
                      Asst. Project Director, DRDA
                    </Typography>
                  </Box>
                </Stack>
                <Stack spacing={1} sx={{ pl: 1 }}>
                  <Stack direction="row" alignItems="center" gap={1} sx={{ color: "#2B2100", opacity: 0.85 }}>
                    <PhoneRoundedIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 500 }}>08954-220123</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap={1} sx={{ color: "#2B2100", opacity: 0.85 }}>
                    <MailRoundedIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 500 }}>pio-drda-vzm@ap.gov.in</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Paper>

            <Paper elevation={0} sx={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 3, overflow: "hidden", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-2px)", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" } }}>
              <Box sx={{ height: 4, background: "#FFD54F" }} />
              <Box p={2.5}>
                <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                  <Box sx={{ width: 36, height: 36, borderRadius: 2, background: "#FFF8E1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, "& > svg": { fontSize: 18 } }}>
                    <ShieldCheckRoundedIcon sx={{ color: "#000000" }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.6rem", textTransform: "uppercase", fontWeight: 700, color: "#2B2100", opacity: 0.7, mb: 0.25 }}>
                      First Appellate Authority
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#2B2100", lineHeight: 1.2 }}>
                      Project Director, DRDA
                    </Typography>
                  </Box>
                </Stack>
                <Stack spacing={1} sx={{ pl: 1 }}>
                  <Stack direction="row" alignItems="center" gap={1} sx={{ color: "#2B2100", opacity: 0.85 }}>
                    <PhoneRoundedIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 500 }}>08954-220100</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap={1} sx={{ color: "#2B2100", opacity: 0.85 }}>
                    <MailRoundedIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 500 }}>pd-drda-vzm@ap.gov.in</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Rights & Fees Section */}
      <Box component="section" sx={{ py: { xs: 4, md: 5 }, background: "#FFFFFF" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 3 }}>
            {/* Your Rights */}
            <Paper elevation={0} sx={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 3, p: 3, height: "100%" }}>
              <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
                <ShieldCheckRoundedIcon sx={{ color: "#000000", fontSize: 20 }} />
                <Typography variant="subtitle1" sx={{ fontSize: "1.1rem", fontWeight: 800, color: "#2B2100" }}>Your Rights</Typography>
              </Stack>
              <Stack spacing={2}>
                {[
                  "Inspect works, documents & records",
                  "Take notes, extracts or certified copies",
                  "Obtain certified samples of material",
                  "Get information in print or electronic form"
                ].map((item, idx) => (
                  <Stack key={idx} direction="row" alignItems="flex-start" gap={1.5}>
                    <CheckCircleRoundedIcon sx={{ color: "#000000", fontSize: 16, mt: 0.25 }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "#2B2100", fontWeight: 600 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>

            {/* Fees & Timelines */}
            <Paper elevation={0} sx={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 3, p: 3, height: "100%" }}>
              <Stack direction="row" alignItems="center" gap={1.5} mb={3}>
                <CurrencyRupeeRoundedIcon sx={{ color: "#000000", fontSize: 20 }} />
                <Typography variant="subtitle1" sx={{ fontSize: "1.1rem", fontWeight: 800, color: "#2B2100" }}>Fees & Timelines</Typography>
              </Stack>

              <Stack spacing={1.5} mb={3}>
                {[
                  { label: "Application fee", value: "₹10" },
                  { label: "Per A4 page (copy)", value: "₹2" },
                  { label: "BPL applicants", value: "Free" },
                  { label: "Standard reply", value: "Within 30 days" },
                  { label: "Life & liberty cases", value: "Within 48 hours" },
                ].map((row, idx) => (
                  <Stack key={idx} direction="row" alignItems="center" justifyContent="space-between" sx={{ pb: 1.5, borderBottom: idx === 4 ? "none" : "1px solid #F5F5F5" }}>
                    <Typography sx={{ fontSize: "0.85rem", color: "#2B2100", opacity: 0.8 }}>{row.label}</Typography>
                    <Typography sx={{ fontSize: "0.85rem", color: "#2B2100", fontWeight: 700 }}>{row.value}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" gap={1.5} flexWrap="wrap">
                <Button
                  variant="contained"
                  startIcon={<DownloadRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    background: "#FFC107",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    px: 2,
                    py: 1,
                    borderRadius: 8,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { background: "#FFD54F", boxShadow: "none" }
                  }}
                >
                  RTI Application Format
                </Button>
                <Button
                  href="https://aprti.ap.gov.in"
                  target="_blank"
                  variant="outlined"
                  endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    borderColor: "#FFC107",
                    color: "#2B2100",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    px: 2,
                    py: 1,
                    borderRadius: 8,
                    textTransform: "none",
                    "&:hover": { borderColor: "#FFC107", background: "rgba(255, 193, 7, 0.1)" }
                  }}
                >
                  AP RTI Portal
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ background: "#FFC107", py: { xs: 2, md: 2.5 }, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" }, fontWeight: 800, color: "#2B2100", mb: 0.75 }}>
            Need help filing an RTI?
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.85rem", md: "0.925rem" }, color: "#2B2100", opacity: 0.85, mb: 2 }}>
            Our citizen help desk can guide you through the process in your language.
          </Typography>
          <Button
            href="/contact"
            variant="contained"
            sx={{
              background: "#1F1700",
              color: "#FFFFFF !important",
              fontWeight: 800,
              fontSize: "0.85rem",
              px: 3,
              py: 0.9,
              borderRadius: 8,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { background: "#4A3B00", boxShadow: "none" }
            }}
          >
            Contact Help Desk →
          </Button>
        </Container>
      </Box>
    </>
  );
}
