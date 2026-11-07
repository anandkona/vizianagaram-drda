"use client";

import { Box, Card, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppsIcon from "@mui/icons-material/Apps";
import Link from "next/link";
import { programPortals } from "@/src/data/home";
import { PortalIcon } from "@/components/Icon";

export default function ProgramPortalsSection() {
  return (
    <Box component="section" id="program-portals" sx={{ background: "#FFFCF5", py: { xs: 2.5, sm: 3, md: 3.5 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mb: { xs: 3.2, md: 4.5 } }}>
          <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#9A6700" }}>
            <AppsIcon sx={{ fontSize: 18 }} />
            <Typography component="p" sx={{ fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.13em", textTransform: "uppercase" }}>
              Key programs & portals
            </Typography>
          </Stack>
          <Typography component="h2" sx={{ color: "#082B50", fontSize: { xs: "1.9rem", sm: "2.25rem", md: "2.7rem" }, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.15, mt: 0.9 }}>
            Key Programs & Portals
          </Typography>
          <Typography sx={{ color: "#6B6254", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: 1.7, maxWidth: 720, mt: 1.2 }}>
            Shortcuts to the programmes, data and citizen services that can help you move from a question to a useful next step.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: { xs: 1.5, sm: 2 }, gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" } }}>
          {programPortals.map((portal) => (
            <Card
              key={portal.title}
              component={Link}
              href={portal.href}
              sx={{
                border: "1px solid #EDE3CE",
                borderRadius: 1,
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: 265,
                overflow: "hidden",
                textDecoration: "none",
                transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                "&:hover": { borderColor: "#D9A62A", boxShadow: "0 14px 30px rgba(93,65,17,0.1)", transform: "translateY(-4px)" },
              }}
            >
              <Box sx={{ backgroundImage: `linear-gradient(180deg, rgba(32,37,45,0.06), rgba(32,37,45,0.62)), url("${portal.image}")`, backgroundPosition: portal.imagePosition ?? "center", backgroundSize: "cover", height: { xs: 108, sm: 126 }, position: "relative" }}>
                <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 1.5, color: "#000000", display: "flex", height: 35, justifyContent: "center", left: 13, position: "absolute", top: 13, width: 35 }}>
                  <PortalIcon name={portal.icon} sx={{ fontSize: 18 }} />
                </Box>
              </Box>
              <Box sx={{ display: "flex", flex: 1, flexDirection: "column", p: { xs: 1.4, sm: 1.8 } }}>
                <Typography component="h3" sx={{ color: "#20252D", fontSize: { xs: "0.84rem", sm: "0.94rem" }, fontWeight: 850, lineHeight: 1.3 }}>{portal.title}</Typography>
                <Typography sx={{ color: "#6B6254", fontSize: { xs: "0.7rem", sm: "0.75rem" }, lineHeight: 1.55, mt: 0.65 }}>{portal.description}</Typography>
                <Typography sx={{ color: "#9A6700", fontSize: "0.64rem", fontWeight: 800, lineHeight: 1.35, mt: "auto", pt: 1.2 }}>{portal.meta}</Typography>
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "#6B4300", mt: 1 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 850 }}>Explore</Typography>
                  <ArrowForwardIcon sx={{ fontSize: 15 }} />
                </Stack>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
