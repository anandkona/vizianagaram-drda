"use client";

import { Box, Button, Card, CardContent, Chip, Divider, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { NewsItem } from "@/src/data/district";
import Link from "next/link";

export default function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&:hover": {
          borderColor: "#EACB65",
          boxShadow: "0 16px 36px rgba(93,65,17,0.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box sx={{ background: featured ? "linear-gradient(135deg, #20252D 0%, #C18400 100%)" : "linear-gradient(135deg, #FFF8E7 0%, #FFF9E6 100%)", height: featured ? 10 : 6 }} />
      <CardContent sx={{ p: { xs: 2.25, sm: 2.75 }, display: "flex", flex: 1, flexDirection: "column", "&:last-child": { pb: { xs: 2.25, sm: 2.75 } } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mb: 2 }}>
          <Chip label={item.category} size="small" sx={{ background: featured ? "rgba(255,255,255,0.16)" : "#FFF3C4", color: featured ? "#FFFFFF" : "primary.main", fontSize: "0.68rem" }} />
          <Stack direction="row" alignItems="center" spacing={0.6} sx={{ color: "text.secondary", fontSize: "0.7rem", whiteSpace: "nowrap" }}>
            <CalendarMonthIcon sx={{ fontSize: 14 }} />
            {item.date}
          </Stack>
        </Stack>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: featured ? { xs: "1.16rem", md: "1.3rem" } : "1.04rem", lineHeight: 1.38, mb: 1.2 }}>
          {item.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", flex: 1, fontSize: "0.88rem", lineHeight: 1.68, mb: 2.2 }}>
          {item.summary}
        </Typography>
        <Divider sx={{ borderColor: "#EDE3CE", mb: 1.6 }} />
        <Button component={Link} href={item.href} endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", color: "primary.main", fontSize: "0.82rem", minHeight: 34, p: 0, "&:hover": { background: "transparent", color: "secondary.dark" } }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
