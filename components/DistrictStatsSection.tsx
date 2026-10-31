"use client";

import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HubIcon from "@mui/icons-material/Hub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { PortalIcon } from "@/components/Icon";
import { districtGlanceStats, institutionNetwork } from "@/src/data/home";

export default function DistrictStatsSection() {
  return (
    <Box component="section" id="glance" sx={{ background: "#111B2D", color: "#FFFFFF", overflow: "hidden", position: "relative", py: { xs: 2, md: 2.5 } }}>
      <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.07, position: "absolute" }} />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ mb: { xs: 3.2, md: 4.5 } }}>
          <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#F9A825" }}>
            <HubIcon sx={{ fontSize: 18 }} />
            <Typography component="p" sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
              District at a glance
            </Typography>
          </Stack>
          <Typography component="h2" sx={{ color: "#FFFFFF", fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" }, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1.1, mt: 0.9 }}>
            The scale of Vizianagaram, made clear
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: 1.7, maxWidth: 720, mt: 1.2 }}>
            A concise view of the district&apos;s administrative foundations. The figures below are static profile information for orientation and should be verified with the district administration for official use.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: { xs: 1.2, sm: 1.5 }, gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(3, minmax(0, 1fr))", lg: "repeat(6, minmax(0, 1fr))" } }}>
          {districtGlanceStats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                background: `linear-gradient(180deg, ${stat.accent}15 0%, rgba(255,255,255,0.02) 100%)`,
                borderTop: `2px solid ${stat.accent}`,
                borderRadius: 0,
                minHeight: { xs: 140, sm: 150 },
                p: { xs: 1.5, sm: 1.8 },
                position: "relative",
                transition: "all 0.3s ease",
                "&:hover": { 
                  background: `linear-gradient(180deg, ${stat.accent}25 0%, rgba(255,255,255,0.05) 100%)`, 
                  transform: "translateY(-4px)", 
                  boxShadow: `0 12px 30px ${stat.accent}30` 
                }
              }}
            >
              <Box sx={{ alignItems: "center", background: `${stat.accent}1A`, border: `1px solid ${stat.accent}55`, borderRadius: 1.7, color: stat.accent, display: "flex", height: 38, justifyContent: "center", width: 38 }}>
                <PortalIcon name={stat.icon} sx={{ fontSize: 20 }} />
              </Box>
              <Typography component="p" sx={{ color: "rgba(255,255,255,0.62)", fontSize: "0.69rem", fontWeight: 750, lineHeight: 1.3, mt: 2.2 }}>
                {stat.label}
              </Typography>
              <Typography component="p" sx={{ color: stat.accent, fontSize: { xs: "1.45rem", sm: "1.75rem" }, fontWeight: 850, letterSpacing: "-0.04em", lineHeight: 1.05, mt: 0.45 }}>
                <CountUp decimals={stat.decimals} suffix={stat.label === "Population" ? " Lakh" : stat.label === "Literacy rate" ? "%" : ""} value={stat.value} />
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.48)", fontSize: "0.65rem", lineHeight: 1.4, mt: 0.65 }}>{stat.detail}</Typography>
            </Box>
          ))}
        </Box>

        <Paper sx={{ background: "rgba(255,255,255,0.07)", border: "none", borderRadius: 0, mt: 2.3, p: { xs: 2, md: 2.6 } }}>
          <Stack direction={{ xs: "column", lg: "row" }} alignItems={{ xs: "flex-start", lg: "center" }} justifyContent="space-between" spacing={2.5}>
            <Box sx={{ maxWidth: 480 }}>
              <Typography component="h3" sx={{ color: "#FFFFFF", fontSize: "1.08rem", fontWeight: 800 }}>Local institutions, one connected network</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.79rem", lineHeight: 1.6, mt: 0.6 }}>
                District administration works through revenue divisions, mandals, villages and local self-government institutions.
              </Typography>
            </Box>
            <Box sx={{ display: "grid", flex: 1, gap: 1, gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, minmax(0, 1fr))" }, maxWidth: 720, width: "100%" }}>
              {institutionNetwork.map((item) => (
                <Box key={item.label} sx={{ borderLeft: "2px solid rgba(249,168,37,0.65)", minWidth: 0, pl: 1.2 }}>
                  <Typography sx={{ color: "#FFD54F", fontSize: "1.15rem", fontWeight: 850, lineHeight: 1.1 }}>{item.value}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.78)", fontSize: "0.68rem", fontWeight: 750, lineHeight: 1.3, mt: 0.35 }}>{item.label}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.61rem", lineHeight: 1.35, mt: 0.25 }}>{item.detail}</Typography>
                </Box>
              ))}
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.7} sx={{ color: "rgba(255,255,255,0.5)", mt: 2.1 }}>
            <InfoOutlinedIcon sx={{ color: "#F9A825", fontSize: 17 }} />
            <Typography sx={{ fontSize: "0.68rem" }}>Profile data is static; time-bound figures may change.</Typography>
            <Box component={Link} href="/about#glance" sx={{ alignItems: "center", color: "#FFD54F", display: "inline-flex", fontSize: "0.7rem", fontWeight: 800, gap: 0.4, ml: "auto", "&:hover": { color: "#FFFFFF" } }}>
              About district <ArrowForwardIcon sx={{ fontSize: 15 }} />
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
