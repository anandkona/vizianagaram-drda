"use client";

import { Box, Button, Card, Chip, Container, LinearProgress, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InsightsIcon from "@mui/icons-material/Insights";
import Link from "next/link";
import { livelihoodProjects } from "@/src/data/home";
import { PortalIcon } from "@/components/Icon";

export default function LivelihoodProjectsSection() {
  return (
    <Box component="section" id="livelihoods" sx={{ background: "#FFFFFF", py: { xs: 2, md: 2.5 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "flex-end" }} justifyContent="space-between" spacing={2.5} sx={{ mb: { xs: 3.2, md: 4.5 } }}>
          <Box sx={{ maxWidth: 730 }}>
            <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#9A6700" }}>
              <InsightsIcon sx={{ fontSize: 18 }} />
              <Typography component="p" sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
                District livelihood projects
              </Typography>
            </Stack>
            <Typography component="h2" sx={{ color: "#20252D", fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" }, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1.1, mt: 0.9 }}>
              Value chains with a local future
            </Typography>
            <Typography sx={{ color: "#6B6254", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: 1.7, mt: 1.2 }}>
              Explore support pathways for women entrepreneurs, farmers, young people and community-led businesses across Vizianagaram.
            </Typography>
          </Box>
          <Button component={Link} endIcon={<ArrowForwardIcon />} href="/livelihoods" sx={{ color: "#6B4300", flexShrink: 0, fontSize: "0.8rem", fontWeight: 850 }} variant="outlined">
            All livelihoods
          </Button>
        </Stack>

        <Box sx={{ display: "grid", gap: { xs: 1.5, sm: 2 }, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" } }}>
          {livelihoodProjects.map((project) => (
            <Card
              key={project.title}
              component={Link}
              href="/livelihoods"
              sx={{
                border: "1px solid #EDE3CE",
                borderRadius: 1,
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
                textDecoration: "none",
                transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                "&:hover": { borderColor: "#D9A62A", boxShadow: "0 16px 34px rgba(93,65,17,0.11)", transform: "translateY(-5px)" },
              }}
            >
              <Box sx={{ backgroundImage: `linear-gradient(180deg, transparent 22%, rgba(32,37,45,0.82) 100%), url("${project.image}")`, backgroundPosition: project.imagePosition ?? "center", backgroundSize: "cover", height: { xs: 190, sm: 175 }, position: "relative" }}>
                <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 1.7, color: "#000000", display: "flex", height: 40, justifyContent: "center", left: 15, position: "absolute", top: 15, width: 40 }}>
                  <PortalIcon name={project.icon} sx={{ fontSize: 21 }} />
                </Box>
                <Chip label={`${project.progress}% snapshot`} size="small" sx={{ background: "rgba(32,37,45,0.75)", bottom: 14, color: "#FFFFFF", fontSize: "0.64rem", position: "absolute", right: 14 }} />
              </Box>
              <Box sx={{ display: "flex", flex: 1, flexDirection: "column", p: { xs: 1.9, sm: 2.1 } }}>
                <Typography component="h3" sx={{ color: "#20252D", fontSize: "1rem", fontWeight: 850, lineHeight: 1.3 }}>{project.title}</Typography>
                <Typography sx={{ color: "#6B6254", fontSize: "0.77rem", lineHeight: 1.6, mt: 0.75 }}>{project.description}</Typography>
                <Stack direction="row" alignItems="baseline" justifyContent="space-between" spacing={1} sx={{ mt: "auto", pt: 2 }}>
                  <Typography sx={{ color: "#A66A00", fontSize: "1.15rem", fontWeight: 850 }}>{project.achieved}</Typography>
                  <Typography sx={{ color: "#8B806D", fontSize: "0.66rem", textAlign: "right" }}>{project.target}</Typography>
                </Stack>
                <LinearProgress aria-label={`${project.title} progress`} sx={{ backgroundColor: "#F0E4C6", mt: 1, "& .MuiLinearProgress-bar": { background: "linear-gradient(90deg, #A66A00, #F9A825)" } }} value={project.progress} variant="determinate" />
                <Stack direction="row" alignItems="center" spacing={0.6} sx={{ color: "#6B4300", mt: 1.5 }}>
                  <Typography sx={{ fontSize: "0.71rem", fontWeight: 850 }}>View project pathway</Typography>
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Stack>
              </Box>
            </Card>
          ))}
        </Box>
        <Typography sx={{ color: "#8B806D", fontSize: "0.68rem", lineHeight: 1.55, mt: 2.2 }}>
          Programme progress and beneficiary counts are illustrative demonstration metrics, not verified live government MIS figures.
        </Typography>
      </Container>
    </Box>
  );
}
