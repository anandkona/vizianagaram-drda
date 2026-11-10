"use client";

import { useEffect } from "react";
import { Box, Breadcrumbs, Chip, Container, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: string;
  breadcrumbs?: BreadcrumbItem[];
  crumb?: string;
  rightImage?: string;
  badge?: string;
  children?: React.ReactNode;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  icon,
  breadcrumbs,
  crumb,
  rightImage,
  badge,
  children,
}: PageIntroProps) {
  useEffect(() => {
    document.title = `${title} | Vizianagaram District`;
  }, [title]);

  const crumbs: BreadcrumbItem[] = breadcrumbs || [
    { label: "Home", href: "/" },
    ...(crumb ? [{ label: crumb }] : [{ label: title }]),
  ];

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(circle at 85% 30%, rgba(254, 240, 138, 0.35) 0%, rgba(255, 255, 255, 0) 55%),
          linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 65%, #FEF9E7 100%)
        `,
        borderBottom: "1px solid #ECE4D0",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 2.5, sm: 3, md: 3.5 },
        pb: { xs: 3, sm: 3.5, md: 4.5 },
      }}
    >
      {/* Decorative Sun Halo Accent */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "-30px",
          right: { xs: "-40px", md: "8%" },
          width: { xs: 180, sm: 260, md: 320 },
          height: { xs: 180, sm: 260, md: 320 },
          borderRadius: "50%",
          background: "radial-gradient(circle, #FDE047 0%, #FBBF24 50%, rgba(251, 191, 36, 0.04) 75%, transparent 100%)",
          opacity: 0.6,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Temple Architecture Line Scripture / Sculpture Watermark (Consistent with About District & Map) */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "14%",
          right: { xs: "28%", md: "38%", lg: "42%" },
          width: { xs: 180, sm: 240, md: 300 },
          height: { xs: 150, sm: 200, md: 240 },
          backgroundImage: "url('/images/temple-scripture-clean.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.22,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: rightImage
              ? { xs: "1fr", md: "1.25fr 0.75fr" }
              : "1fr",
            gap: { xs: 2.5, md: 4 },
            alignItems: "center",
          }}
        >
          {/* Left Text Block */}
          <Box sx={{ maxWidth: 820 }}>
            {/* Eyebrow or Badge */}
            {(eyebrow || badge) && (
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                {eyebrow && (
                  <Typography
                    component="span"
                    sx={{
                      color: "#D97706",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {eyebrow}
                  </Typography>
                )}
                {badge && (
                  <Chip
                    label={badge}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(245, 158, 11, 0.12)",
                      border: "1px solid rgba(245, 158, 11, 0.3)",
                      color: "#92400E",
                      fontWeight: 800,
                      fontSize: "0.68rem",
                      height: 22,
                    }}
                  />
                )}
              </Stack>
            )}

            {/* Page Title */}
            <Typography
              component="h1"
              sx={{
                color: "#082B50",
                fontSize: { xs: "1.85rem", sm: "2.3rem", md: "2.75rem" },
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.12,
                mb: 1.2,
              }}
            >
              {title}
            </Typography>

            {/* Subtitle / Description */}
            <Typography
              sx={{
                color: "#475569",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: 720,
              }}
            >
              {description}
            </Typography>

            {children ? <Box sx={{ mt: 2.5 }}>{children}</Box> : null}
          </Box>

          {/* Right Image Container (Optional) */}
          {rightImage && (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 320,
                  height: 180,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 14px 28px -6px rgba(8, 43, 80, 0.15)",
                  border: "2px solid #FFFFFF",
                  backgroundImage: `url("${rightImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
