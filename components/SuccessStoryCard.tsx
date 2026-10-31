"use client";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { SuccessStory } from "@/src/data/district";

export default function SuccessStoryCard({ story, compact = false }: { story: SuccessStory; compact?: boolean }) {
  // If story doesn't have income fields, generate some defaults so the layout looks like the reference
  const beforeIncome = story.beforeIncome || "₹4,000/month";
  const afterIncome = story.afterIncome || "₹25,000/month";
  const loan = story.loan || "₹2 Lakhs (SHG Credit)";
  const program = story.program || "NRLM Enterprise";

  const accentColors: Record<string, string> = {
    "santhi-millet": "#00695C",
    "sai-farmer-group": "#DB2777",
    "naveen-skills": "#7C3AED",
    "ravi-tailoring": "#0284C7",
    "village-kitchen": "#D97706"
  };

  const iconAccent = accentColors[story.id] || "#00695C";
  const headerGradient = `linear-gradient(135deg, ${iconAccent}, #FFC107)`;
  
  const globalIconColor = iconAccent;
  const resultBg = "#FFF8E1";
  const resultText = "#B76E00";

  return (
    <Card
      id={story.id}
      sx={{
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box sx={{ position: "relative", p: 2.5, color: "white", overflow: "hidden", background: headerGradient }}>
        <FormatQuoteIcon sx={{ position: "absolute", top: -8, right: -8, fontSize: 72, color: "rgba(255,255,255,0.2)" }} />
        <Stack direction="row" alignItems="flex-start" spacing={1.5} sx={{ position: "relative" }}>
          <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800, flexShrink: 0, color: "white" }}>
            {story.initial}
          </Box>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography sx={{ fontWeight: 800, fontSize: "1.125rem", lineHeight: 1.2, color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
              {story.person}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem", fontWeight: 700, mt: 0, textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
              {story.category}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.6875rem", mt: 0.5, textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
              <LocationOnIcon sx={{ fontSize: 14 }} /> {story.location}
            </Stack>
          </Box>
          {story.tags.length > 0 && (
            <Box sx={{ flexShrink: 0, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", color: "white", fontSize: "0.625rem", fontWeight: 700, px: 1, py: 0.25, borderRadius: 5, whiteSpace: "nowrap", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
              {story.tags[0]}
            </Box>
          )}
        </Stack>
      </Box>

      <CardContent sx={{ p: 2.5, display: "flex", flex: 1, flexDirection: "column", "&:last-child": { pb: 2.5 } }}>
        <Stack direction="row" alignItems="stretch" spacing={1} sx={{ mb: 2 }}>
          <Box sx={{ flex: 1, background: "#FEF2F2", borderRadius: 3, p: 1.5, textAlign: "center", border: "1px solid #FECACA" }}>
            <Typography sx={{ fontSize: "0.625rem", color: "#DC2626", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Before</Typography>
            <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "0.875rem", sm: "1rem" }, lineHeight: 1.2, mt: 0.25 }}>{beforeIncome}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", borderRadius: "50%", width: 32, alignSelf: "center", flexShrink: 0, background: iconAccent, height: 32 }}>
            <TrendingUpIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box sx={{ flex: 1, background: "#F0FDF4", borderRadius: 3, p: 1.5, textAlign: "center", border: "1px solid #BBF7D0" }}>
            <Typography sx={{ fontSize: "0.625rem", color: "#16A34A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>After</Typography>
            <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "0.875rem", sm: "1rem" }, lineHeight: 1.2, mt: 0.25 }}>{afterIncome}</Typography>
          </Box>
        </Stack>

        <Typography sx={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, mb: 2, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {story.story}
        </Typography>

        <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid #F1F5F9", display: "flex", flexDirection: "column", gap: 1 }}>
          <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ fontSize: "0.75rem" }}>
            <PaymentsIcon sx={{ color: globalIconColor, fontSize: 16, mt: 0.25, flexShrink: 0 }} />
            <Typography sx={{ color: "#64748B" }}>Loan:</Typography>
            <Typography sx={{ fontWeight: 600, color: "#1E293B" }}>{loan}</Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ fontSize: "0.75rem" }}>
            <WorkspacePremiumIcon sx={{ color: globalIconColor, fontSize: 16, mt: 0.25, flexShrink: 0 }} />
            <Typography sx={{ color: "#64748B" }}>Program:</Typography>
            <Typography sx={{ fontWeight: 600, color: "#1E293B" }}>{program}</Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ fontSize: "0.75rem", background: resultBg, mx: -0.5, px: 1, py: 0.75, borderRadius: 2 }}>
            <AutoAwesomeIcon sx={{ color: resultText, fontSize: 16, mt: 0.25, flexShrink: 0 }} />
            <Typography sx={{ fontWeight: 600, color: resultText }}>{story.result}</Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
