"use client";

import { Avatar, Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import type { Officer } from "@/src/data/district";

export default function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <Card sx={{ borderRadius: 3, height: "100%", transition: "transform 220ms ease, box-shadow 220ms ease", "&:hover": { boxShadow: "0 16px 36px rgba(93,65,17,0.12)", transform: "translateY(-4px)" } }}>
      <CardContent sx={{ p: 2.75, "&:last-child": { pb: 2.75 } }}>
        <Stack direction="row" alignItems="flex-start" spacing={1.6}>
          <Avatar sx={{ background: "linear-gradient(135deg, #20252D, #F4B942)", color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 800, height: 52, width: 52 }}>
            {officer.initials}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "1rem", lineHeight: 1.35 }}>
              {officer.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "0.77rem", lineHeight: 1.45, mt: 0.45 }}>
              {officer.designation}
            </Typography>
            <Chip label={officer.department} size="small" sx={{ background: "#FFF3C4", color: "primary.main", fontSize: "0.64rem", mt: 1.1 }} />
          </Box>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ borderTop: "1px solid #EDE3CE", mt: 2.2, pt: 1.8 }}>
          <Button href={`tel:${officer.phone.replace(/[^0-9+]/g, "")}`} startIcon={<CallIcon sx={{ fontSize: 15 }} />} size="small" sx={{ color: "#000000", fontSize: "0.72rem", minHeight: 30, p: 0.4, "&:hover": { background: "#FFF3C4" } }}>
            {officer.phone}
          </Button>
          <Button href={`mailto:${officer.email}`} startIcon={<EmailIcon sx={{ fontSize: 15 }} />} size="small" sx={{ color: "text.secondary", fontSize: "0.72rem", minHeight: 30, p: 0.4, "&:hover": { background: "#FFFCF5" } }}>
              Email
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
