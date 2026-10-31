"use client";

import { useState } from "react";
import { Box, Button, Card, CardContent, Chip, Collapse, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { Scheme } from "@/src/data/district";
import { PortalIcon } from "@/components/Icon";

export default function SchemeCard({ scheme }: { scheme: Scheme }) {
  const [expanded, setExpanded] = useState(false);
  const gold = false;
  return (
    <Card
      id={scheme.id}
      sx={{
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&:hover": {
          borderColor: "#FFF59D",
          boxShadow: "0 16px 36px rgba(93,65,17,0.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent sx={{ p: 2.75, display: "flex", flex: 1, flexDirection: "column", "&:last-child": { pb: 2.75 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1.5} sx={{ mb: 2.25 }}>
          <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 2.25, color: "#000000", display: "flex", flexShrink: 0, height: 48, justifyContent: "center", width: 48 }}>
            <PortalIcon name={scheme.icon} sx={{ fontSize: 24 }} />
          </Box>
          <Chip label={scheme.category} size="small" sx={{ background: "#FFF3C4", color: "primary.main", fontSize: "0.66rem", maxWidth: 145, overflow: "hidden", textOverflow: "ellipsis" }} />
        </Stack>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "1.08rem", lineHeight: 1.35, mb: 0.8 }}>
          {scheme.title}
        </Typography>
        <Typography sx={{ color: "secondary.dark", fontSize: "0.74rem", fontWeight: 700, mb: 1.4 }}>
          {scheme.department}
        </Typography>
        <Typography sx={{ color: "text.secondary", flex: 1, fontSize: "0.88rem", lineHeight: 1.65, mb: 2.1 }}>
          {scheme.description}
        </Typography>
        <Collapse in={expanded} unmountOnExit>
          <Box sx={{ background: "#FFFBF0", border: `1px solid #FFF0B3`, borderRadius: 2, mb: 2 }}>
            <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", lineHeight: 1.65, p: 1.6 }}>{scheme.details}</Typography>
          </Box>
        </Collapse>
        <Button aria-expanded={expanded} onClick={() => setExpanded((current) => !current)} endIcon={<ArrowForwardIcon sx={{ transform: expanded ? "rotate(90deg)" : "none", transition: "transform 180ms ease" }} />} sx={{ alignSelf: "flex-start", color: "primary.main", fontSize: "0.82rem", minHeight: 36, p: 0, "&:hover": { background: "transparent", color: "secondary.dark" } }}>
          {expanded ? "Hide Details" : "View Details"}
        </Button>
      </CardContent>
    </Card>
  );
}
