"use client";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import type { DistrictStat } from "@/src/data/district";
import { PortalIcon } from "@/components/Icon";

export default function StatCard({ stat }: { stat: DistrictStat }) {
  const isGold = stat.accent === "gold";
  const color = "primary.main";
  const background = isGold ? "#FFF8E1" : "#FFF3C4";

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 36px rgba(93,65,17,0.12)",
          borderColor: isGold ? "#FFF59D" : "#FFF9C4",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.25, sm: 2.75 }, "&:last-child": { pb: { xs: 2.25, sm: 2.75 } } }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1.5}>
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: "0.82rem", fontWeight: 700, lineHeight: 1.35 }}>
              {stat.label}
            </Typography>
            <Typography sx={{ color: "text.primary", fontSize: { xs: "1.55rem", sm: "1.9rem" }, fontWeight: 850, letterSpacing: "-0.04em", lineHeight: 1.1, mt: 1.1 }}>
              {stat.value}
            </Typography>
          </Box>
          <Box sx={{ alignItems: "center", background, borderRadius: 2.25, color, display: "flex", flexShrink: 0, height: 44, justifyContent: "center", width: 44 }}>
            <PortalIcon name={stat.icon} sx={{ fontSize: 22 }} />
          </Box>
        </Stack>
        <Typography sx={{ color: "text.secondary", fontSize: "0.72rem", mt: 1.6, opacity: 0.88 }}>
          {stat.detail}
        </Typography>
      </CardContent>
    </Card>
  );
}
