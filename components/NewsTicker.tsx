"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import Link from "next/link";
import { latestNews } from "@/src/data/home";

export default function NewsTicker() {
  return (
    <Box
      component="section"
      aria-label="Latest district news"
      sx={{ background: "#FFFCF5", borderBottom: "1px solid #EDE3CE", borderTop: "1px solid #EDE3CE", overflow: "hidden", py: 1.25 }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 1.5 }}>
          <Stack direction="row" alignItems="center" spacing={0.7} sx={{ flexShrink: 0 }}>
            <Box sx={{ alignItems: "center", background: "#FFF3C4", borderRadius: "50%", display: "flex", height: 25, justifyContent: "center", width: 25 }}>
              <CampaignIcon sx={{ color: "#20252D", fontSize: 15 }} />
            </Box>
            <Typography sx={{ color: "#6B4300", display: { xs: "none", sm: "block" }, fontSize: "0.68rem", fontWeight: 850, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Latest news
            </Typography>
          </Stack>
          <Box sx={{ borderLeft: "1px solid #E6D9BF", flex: 1, minWidth: 0, overflow: "hidden" }}>
            <Box
              sx={{
                animation: "homeNewsTicker 38s linear infinite",
                display: "flex",
                width: "max-content",
                "@keyframes homeNewsTicker": {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(-50%)" },
                },
                "@media (prefers-reduced-motion: reduce)": { animation: "none" },
              }}
            >
              <Box sx={{ display: "flex", flexShrink: 0 }}>
                {latestNews.map((item) => (
                  <Link
                    key={`first-${item.title}`}
                    href={item.href}
                    style={{ alignItems: "center", color: "#4E463A", display: "inline-flex", gap: 8, paddingRight: 30, whiteSpace: "nowrap" }}
                  >
                    <Box sx={{ background: "#C18400", borderRadius: "50%", height: 5, width: 5 }} />
                    <Typography component="span" sx={{ fontSize: "0.74rem", fontWeight: 750 }}>
                      {item.category} · {item.title}
                    </Typography>
                    <Typography component="span" sx={{ color: "#9A6700", fontSize: "0.68rem", fontWeight: 800 }}>
                      {item.date}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box aria-hidden="true" sx={{ display: "flex", flexShrink: 0 }}>
                {latestNews.map((item) => (
                  <Link
                    key={`second-${item.title}`}
                    href={item.href}
                    tabIndex={-1}
                    style={{ alignItems: "center", color: "#4E463A", display: "inline-flex", gap: 8, paddingRight: 30, whiteSpace: "nowrap" }}
                  >
                    <Box sx={{ background: "#C18400", borderRadius: "50%", height: 5, width: 5 }} />
                    <Typography component="span" sx={{ fontSize: "0.74rem", fontWeight: 750 }}>
                      {item.category} · {item.title}
                    </Typography>
                    <Typography component="span" sx={{ color: "#9A6700", fontSize: "0.68rem", fontWeight: 800 }}>
                      {item.date}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <ButtonLink href="/media">View all</ButtonLink>
        </Stack>
      </Container>
    </Box>
  );
}

function ButtonLink({ href, children }: { href: string; children: string }) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{ color: "#6B4300", display: { xs: "none", sm: "inline-flex" }, fontSize: "0.72rem", fontWeight: 850, flexShrink: 0, "&:hover": { color: "#A66A00" } }}
    >
      {children}
    </Box>
  );
}
