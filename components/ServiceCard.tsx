"use client";

import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { Service } from "@/src/data/district";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&:hover": {
          borderColor: "#EACB65",
          boxShadow: "0 16px 36px rgba(93,65,17,0.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent sx={{ p: 2.75, display: "flex", flex: 1, flexDirection: "column", "&:last-child": { pb: 2.75 } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mb: 2.25 }}>
          <Box sx={{ alignItems: "center", background: "linear-gradient(135deg, #FFF3C4 0%, #FFF3C4 100%)", borderRadius: 2.5, color: "#000000", display: "flex", height: 52, justifyContent: "center", width: 52 }}>
            <PortalIcon name={service.icon} sx={{ fontSize: 26 }} />
          </Box>
          <Chip label={service.tag} size="small" sx={{ background: "#FFFCF5", color: "text.secondary", fontSize: "0.68rem", maxWidth: 125, overflow: "hidden", textOverflow: "ellipsis" }} />
        </Stack>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "1.06rem", mb: 1 }}>
          {service.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", flex: 1, fontSize: "0.88rem", lineHeight: 1.65, mb: 2.25 }}>
          {service.description}
        </Typography>
        <Button component={Link} href={service.href} endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", color: "primary.main", fontSize: "0.82rem", minHeight: 36, p: 0, "&:hover": { background: "transparent", color: "secondary.dark" } }}>
          Open Service
        </Button>
      </CardContent>
    </Card>
  );
}
