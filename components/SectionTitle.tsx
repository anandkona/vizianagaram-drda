"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { ReactNode } from "react";
import Link from "next/link";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  action?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  action,
  align = "left",
  light = false,
}: SectionTitleProps) {
  const isCenter = align === "center";
  const textColor = light ? "#FFFFFF" : "text.primary";
  const descriptionColor = light ? "rgba(255,255,255,0.76)" : "text.secondary";

  return (
    <Stack
      direction={{ xs: "column", md: isCenter ? "column" : "row" }}
      justifyContent={isCenter ? "center" : "space-between"}
      alignItems={isCenter ? "center" : { xs: "flex-start", md: "flex-end" }}
      spacing={2.5}
      textAlign={isCenter ? "center" : "left"}
      sx={{ mb: { xs: 3, md: 4.5 } }}
    >
      <Box sx={{ maxWidth: isCenter ? 720 : 720 }}>
        <Typography
          component="p"
          sx={{
            color: light ? "#FFF59D" : "primary.main",
            fontSize: "0.74rem",
            fontWeight: 800,
            letterSpacing: "0.12em",
            lineHeight: 1.4,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: textColor,
            fontSize: { xs: "1.8rem", sm: "2.15rem", md: "2.55rem" },
          }}
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            component="p"
            sx={{
              color: descriptionColor,
              fontSize: { xs: "0.95rem", md: "1.03rem" },
              lineHeight: 1.7,
              mt: 1.5,
              maxWidth: 680,
              mx: isCenter ? "auto" : 0,
            }}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
      {action ??
        (actionLabel && actionHref ? (
          <Button
            component={Link}
            href={actionHref}
            variant={light ? "outlined" : "text"}
            endIcon={<ArrowForwardIcon />}
            sx={{
              flexShrink: 0,
              color: light ? "#FFFFFF" : "primary.main",
              borderColor: light ? "rgba(255,255,255,0.5)" : undefined,
              "&:hover": {
                backgroundColor: light ? "rgba(255,255,255,0.1)" : "rgba(251,192,45,0.1)",
                borderColor: light ? "#FFFFFF" : undefined,
              },
            }}
          >
            {actionLabel}
          </Button>
        ) : null)}
    </Stack>
  );
}
