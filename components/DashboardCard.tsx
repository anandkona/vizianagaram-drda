"use client";

import { Box, Card, CardContent, LinearProgress, Stack, Typography } from "@mui/material";
import type { LivelihoodProgram } from "@/src/data/district";
import { PortalIcon } from "@/components/Icon";

export default function DashboardCard({ program }: { program: LivelihoodProgram }) {
  // Dynamically calculate the shade based on progress percentage.
  // Higher percentage = darker shade (lower lightness).
  const lightness = 85 - (program.progress * 0.5); 
  const shadeColor = `hsl(45, 96%, ${lightness}%)`;
  const trackColor = `hsl(45, 96%, 92%)`;
  const iconBgColor = `hsl(45, 96%, 95%)`;

  return (
    <Card sx={{ borderRadius: 3, height: "100%", transition: "transform 220ms ease, box-shadow 220ms ease", "&:hover": { boxShadow: "0 16px 36px rgba(93,65,17,0.12)", transform: "translateY(-4px)" } }}>
      <CardContent sx={{ p: 2.75, "&:last-child": { pb: 2.75 } }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1.5}>
          <Box sx={{ alignItems: "center", background: iconBgColor, borderRadius: 2.25, color: shadeColor, display: "flex", flexShrink: 0, height: 48, justifyContent: "center", width: 48 }}>
            <PortalIcon name={program.icon} sx={{ fontSize: 24 }} />
          </Box>
          <Typography sx={{ color: "text.primary", fontSize: "1.45rem", fontWeight: 850, letterSpacing: "-0.04em" }}>
            {program.progress}%
          </Typography>
        </Stack>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "1.04rem", lineHeight: 1.35, mt: 2.2 }}>
          {program.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: "0.84rem", lineHeight: 1.6, mt: 0.8, minHeight: 43 }}>
          {program.description}
        </Typography>
        <Box sx={{ mt: 2.2 }}>
          <LinearProgress aria-label={`${program.title} progress`} variant="determinate" value={program.progress} sx={{ backgroundColor: trackColor, "& .MuiLinearProgress-bar": { backgroundColor: shadeColor } }} />
          <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mt: 1 }}>
            <Typography sx={{ color: "text.secondary", fontSize: "0.72rem" }}>{program.beneficiaries}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "0.72rem", textAlign: "right" }}>{program.achieved} <Box component="span" sx={{ opacity: 0.7 }}>/ {program.target}</Box></Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
