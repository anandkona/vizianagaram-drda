"use client";

import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import Link from "next/link";
import { transparencyMetrics } from "@/src/data/home";

export default function TransparencySection() {
  return (
    <Box component="section" id="dashboard" sx={{ background: "#FFFFFF", py: { xs: 2, md: 2.5 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "flex-end" }} justifyContent="space-between" spacing={2.5} sx={{ mb: { xs: 3.2, md: 4.5 } }}>
          <Box sx={{ maxWidth: 730 }}>
            <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#A66A00" }}>
              <VerifiedIcon sx={{ fontSize: 18 }} />
              <Typography component="p" sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
                Transparency dashboard
              </Typography>
            </Stack>
            <Typography component="h2" sx={{ color: "#20252D", fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" }, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1.1, mt: 0.9 }}>
              Progress you can understand
            </Typography>
            <Typography sx={{ color: "#6B6254", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: 1.7, mt: 1.2 }}>
              Programme snapshots pair a clear result with its target, so residents can see what is being measured and where to learn more.
            </Typography>
          </Box>
          <Button component={Link} endIcon={<ArrowForwardIcon />} href="/schemes" sx={{ color: "#6B4300", flexShrink: 0, fontSize: "0.8rem", fontWeight: 850 }} variant="outlined">
            All Schemes & Progress
          </Button>
        </Stack>

        <Box sx={{ display: "grid", gap: { xs: 1.5, sm: 2 }, gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" } }}>
          {transparencyMetrics.map((metric) => (
            <Paper key={metric.label} sx={{ background: "#FFFCF5", border: "1px solid #EDE3CE", borderRadius: 1, p: { xs: 1.7, sm: 2.3 }, transition: "transform 180ms ease, box-shadow 180ms ease", "&:hover": { boxShadow: "0 14px 30px rgba(93,65,17,0.1)", transform: "translateY(-3px)" } }}>
              <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", minHeight: { xs: 108, sm: 125 } }}>
                <ProgressRing color={metric.color} label={metric.label} value={metric.value} />
              </Box>
              <Typography component="h3" sx={{ color: "#20252D", fontSize: { xs: "0.82rem", sm: "0.92rem" }, fontWeight: 850, lineHeight: 1.3, mt: 1.4 }}>
                {metric.label}
              </Typography>
              <Typography sx={{ color: "#A66A00", fontSize: { xs: "1.05rem", sm: "1.2rem" }, fontWeight: 850, lineHeight: 1.2, mt: 1.1 }}>{metric.result}</Typography>
              <Typography sx={{ color: "#6B6254", fontSize: "0.7rem", lineHeight: 1.4, mt: 0.35 }}>{metric.target}</Typography>
              <Typography sx={{ color: "#9A8F7B", fontSize: "0.63rem", lineHeight: 1.35, mt: 1.1 }}>{metric.note}</Typography>
            </Paper>
          ))}
        </Box>

        <Paper sx={{ background: "linear-gradient(110deg, #FFF8E1, #FFFFFF)", border: "1px solid #F0E4C6", borderRadius: 1, mt: 2.2, p: { xs: 1.8, md: 2.2 } }}>
          <Stack direction="row" alignItems="flex-start" spacing={1}>
            <InfoOutlinedIcon sx={{ color: "#C18400", fontSize: 19, mt: 0.1 }} />
            <Typography sx={{ color: "#6B6254", fontSize: "0.74rem", lineHeight: 1.65 }}>
              <strong>Context matters:</strong> these programme values are authenticated portal snapshots from DRDA and district departments. Explore full scheme details for criteria, benefits and application procedures.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

function ProgressRing({ color, label, value }: { color: string; label: string; value: number }) {
  const radius = 43;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;

  return (
    <Box
      aria-label={`${label}: ${value}%`}
      component="svg"
      role="img"
      viewBox="0 0 108 108"
      sx={{ height: { xs: 104, sm: 122 }, maxWidth: "100%", overflow: "visible", width: { xs: 104, sm: 122 } }}
    >
      <circle cx="54" cy="54" fill="none" r={radius} stroke="#EDE3CE" strokeWidth="8" />
      <circle
        cx="54"
        cy="54"
        fill="none"
        r={radius}
        stroke={color}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth="8"
        style={{ transform: "rotate(-90deg)", transformOrigin: "54px 54px", transition: "stroke-dashoffset 900ms ease" }}
      />
      <text dominantBaseline="central" fill="#20252D" fontSize="18" fontWeight="800" textAnchor="middle" x="54" y="54">
        {value}%
      </text>
    </Box>
  );
}
