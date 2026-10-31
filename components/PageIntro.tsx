"use client";

import { useEffect } from "react";
import { Box, Breadcrumbs, Chip, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
  crumb?: string;
  children?: React.ReactNode;
};

export default function PageIntro({ eyebrow, title, description, icon = "dashboard", crumb, children }: PageIntroProps) {
  useEffect(() => {
    document.title = `${title} | Vizianagaram District`;
  }, [title]);

  return (
    <Box sx={{
      background: "#FFC107",
      color: "#1F1700",
      overflow: "hidden",
      position: "relative",
      py: { xs: 2, md: 2.5 },
      borderBottom: "1px solid rgba(180, 83, 9, 0.28)",
      boxShadow: "0 4px 14px rgba(217, 119, 6, 0.16)",
    }}>
      <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box>
          <Breadcrumbs aria-label="Breadcrumb" separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 650, "& .MuiBreadcrumbs-ol": { flexWrap: "wrap" } }}>
            <Typography component={Link} href="/" sx={{ color: "inherit", textDecoration: "none", fontSize: "0.8rem", "&:hover": { color: "#000000" } }}>Home</Typography>
            {crumb ? <Typography sx={{ color: "#1F1700", fontSize: "0.8rem", fontWeight: 800 }}>{crumb}</Typography> : null}
          </Breadcrumbs>
          <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={2}>
            <Box sx={{ maxWidth: 760 }}>
              <Chip
                icon={<PortalIcon name={icon} sx={{ fontSize: "14px !important", color: "#78350F !important" }} />}
                label={eyebrow}
                sx={{
                  background: "rgba(255, 255, 255, 0.65)",
                  border: "1px solid rgba(180, 83, 9, 0.3)",
                  color: "#78350F",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  backdropFilter: "blur(6px)"
                }}
                size="small"
              />
              <Typography component="h1" variant="h1" sx={{ color: "#1F1700", fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em" }}>
                {title}
              </Typography>
              <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, lineHeight: 1.5, maxWidth: 650, fontWeight: 550 }}>
                {description}
              </Typography>
            </Box>
            {children ? <Box sx={{ flexShrink: 0 }}>{children}</Box> : null}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
