"use client";

import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FlagIcon from "@mui/icons-material/Flag";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";
import { missionMetrics } from "@/src/data/home";

const missionImage = "https://images.unsplash.com/photo-1609252285522-ed0ebdd43551?auto=format&fit=crop&w=1400&q=82";

export default function MissionSection() {
  return (
    <Box
      component="section"
      id="mission"
      sx={{
        backgroundColor: "#161102",
        backgroundImage: {
          xs: `linear-gradient(180deg, rgba(15, 11, 1, 0.96) 0%, rgba(15, 11, 1, 0.92) 50%, rgba(15, 11, 1, 0.75) 100%), url("${missionImage}")`,
          md: `linear-gradient(90deg, rgba(15, 11, 1, 0.93) 0%, rgba(15, 11, 1, 0.88) 42%, rgba(15, 11, 1, 0.55) 70%, rgba(15, 11, 1, 0.25) 100%), linear-gradient(180deg, rgba(15, 11, 1, 0.70) 0%, rgba(15, 11, 1, 0.15) 45%, rgba(15, 11, 1, 0.80) 100%), url("${missionImage}")`,
        },
        backgroundPosition: { xs: "center 20%", md: "right 20% center", lg: "right 30% center" },
        backgroundSize: "cover",
        color: "#FFFFFF",
        overflow: "hidden",
        position: "relative",
        py: { xs: 3.5, sm: 4, md: 5.5 },
      }}
    >
      <Box
        aria-hidden="true"
        className="portal-dotted-pattern"
        sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "grid", gap: { xs: 3.5, sm: 4, lg: 6 }, gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.15fr) minmax(340px, 0.85fr)" }, alignItems: "center" }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#FFC107" }}>
              <FlagIcon sx={{ fontSize: 18 }} />
              <Typography component="p" sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
                CM&apos;s flagship vision
              </Typography>
            </Stack>
            <Typography
              component="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "1.85rem", sm: "2.4rem", md: "3rem", lg: "3.5rem" },
                fontWeight: 850,
                letterSpacing: { xs: "-0.03em", sm: "-0.04em" },
                lineHeight: { xs: 1.12, sm: 1.08, lg: 1.05 },
                mt: 1.2,
                maxWidth: 700,
                textShadow: "0 2px 16px rgba(0,0,0,0.85), 0 4px 30px rgba(0,0,0,0.6)",
              }}
            >
              One family.
              <br />
              One <Box component="span" sx={{ color: "#FFC107" }}>entrepreneur.</Box>
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.88rem", sm: "1rem", md: "1.08rem" },
                lineHeight: 1.7,
                maxWidth: 650,
                mt: { xs: 1.8, sm: 2.2 },
                fontWeight: 400,
                textShadow: "0 1px 8px rgba(0,0,0,0.8)",
              }}
            >
              A mission-style pathway for families to explore enterprise, skills and dignified local income. In Vizianagaram, the Women Entrepreneurship snapshot shows one practical way to begin.
            </Typography>
            <Button
              component={Link}
              endIcon={<ArrowForwardIcon />}
              href="/livelihoods"
              sx={{
                background: "#FFC107",
                color: "#1F1700 !important",
                fontSize: "0.85rem",
                fontWeight: 850,
                mt: { xs: 2.5, sm: 3.5 },
                px: 3.5,
                py: 1.4,
                width: { xs: "100%", sm: "auto" },
                borderRadius: 2,
                boxShadow: "0 8px 20px rgba(255, 193, 7, 0.35)",
                "&:hover": {
                  background: "#FFE082",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 24px rgba(255, 193, 7, 0.48)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Explore the mission
            </Button>
          </Box>

          <Paper
            sx={{
              backdropFilter: "blur(12px)",
              background: "rgba(255, 255, 255, 0.94)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: 3,
              boxShadow: "0 24px 50px rgba(0, 0, 0, 0.35)",
              overflow: "hidden",
              p: { xs: 2, sm: 3.5 },
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
              <Box>
                <Typography sx={{ color: "#9A6700", fontSize: "0.68rem", fontWeight: 850, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  District snapshot
                </Typography>
                <Typography sx={{ color: "#1F1700", fontSize: { xs: "1.1rem", sm: "1.35rem" }, fontWeight: 850, mt: 0.3, lineHeight: 1.2 }}>
                  Women Entrepreneurship
                </Typography>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  background: "#FFC107",
                  borderRadius: "50%",
                  color: "#1F1700",
                  display: "flex",
                  flexShrink: 0,
                  height: { xs: 38, sm: 48 },
                  justifyContent: "center",
                  width: { xs: 38, sm: 48 },
                  boxShadow: "0 4px 12px rgba(255, 193, 7, 0.35)",
                }}
              >
                <GroupsIcon sx={{ fontSize: { xs: 20, sm: 26 } }} />
              </Box>
            </Stack>

            <Box sx={{ display: "grid", gap: 1, gridTemplateColumns: "repeat(3, minmax(0, 1fr))", mt: { xs: 1.8, sm: 2.5 } }}>
              {missionMetrics.map((metric, index) => (
                <Box
                  key={metric.label}
                  sx={{
                    borderRight: index !== missionMetrics.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                    px: { xs: 0.5, sm: 1 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: "#B45309", fontSize: { xs: "1.15rem", sm: "1.45rem" }, fontWeight: 850, lineHeight: 1.05 }}>
                    {metric.value}
                  </Typography>
                  <Typography sx={{ color: "#1F1700", fontSize: { xs: "0.65rem", sm: "0.75rem" }, fontWeight: 750, lineHeight: 1.2, mt: 0.4 }}>
                    {metric.label}
                  </Typography>
                  <Typography sx={{ color: "rgba(31,23,0,0.65)", fontSize: { xs: "0.58rem", sm: "0.65rem" }, lineHeight: 1.3, mt: 0.2 }}>
                    {metric.detail}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} spacing={1} sx={{ borderTop: "1px solid rgba(0,0,0,0.08)", color: "#64748B", mt: 2.5, pt: 1.8 }}>
              <AutoGraphIcon sx={{ color: "#9A6700", fontSize: 18, flexShrink: 0 }} />
              <Typography sx={{ fontSize: "0.73rem", lineHeight: 1.45, fontWeight: 500 }}>
                Illustrative programme snapshot for orientation, not a live mission MIS record.
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
