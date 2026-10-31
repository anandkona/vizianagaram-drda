"use client";

import type { ReactNode } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";
import PageIntro from "@/components/PageIntro";
import SectionTitle from "@/components/SectionTitle";
import type { FeatureItem, FeatureLink, FeatureSection, PortalFeature } from "@/src/data/portal";

type FeaturePageProps = PortalFeature & {
  children?: ReactNode;
};

export default function FeaturePage({
  eyebrow,
  title,
  description,
  icon,
  crumb,
  stats,
  sections,
  notice,
  cta,
  children,
}: FeaturePageProps) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={description} icon={icon} crumb={crumb} />
      {stats?.length ? <StatsBand stats={stats} /> : null}
      {sections.map((section, index) => (
        <FeatureSectionView key={`${section.title}-${index}`} section={section} index={index} />
      ))}
      {notice ? (
        <Box component="section" sx={{ background: "#FFF8E1", py: { xs: 2, md: 2.5 } }}>
          <Container maxWidth="lg">
            <Paper sx={{ background: "#FFFFFF", border: "1px solid #FFF0B3", borderRadius: 3, p: { xs: 2.2, md: 2.8 } }}>
              <Stack direction="row" alignItems="flex-start" spacing={1.2}>
                <InfoOutlinedIcon sx={{ color: "secondary.dark", flexShrink: 0, fontSize: 20, mt: 0.1 }} />
                <Typography sx={{ color: "text.secondary", fontSize: "0.82rem", lineHeight: 1.7 }}>{notice}</Typography>
              </Stack>
            </Paper>
          </Container>
        </Box>
      ) : null}
      {cta ? (
        <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 2, md: 2.5 } }}>
          <Container maxWidth="lg">
            <Paper sx={{ background: "linear-gradient(120deg, #20252D 0%, #6B4300 100%)", borderRadius: 3.5, color: "#FFFFFF", overflow: "hidden", p: { xs: 2.5, md: 3.5 }, position: "relative" }}>
              <Box sx={{ border: "1px solid rgba(255,255,255,0.16)", borderRadius: "50%", height: 240, position: "absolute", right: -70, top: -115, width: 240 }} />
              <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between" spacing={2.5} sx={{ position: "relative" }}>
                <Box sx={{ maxWidth: 720 }}>
                  <Typography sx={{ color: "#FFD54F", fontSize: "0.72rem", fontWeight: 850, letterSpacing: "0.1em", textTransform: "uppercase" }}>Keep exploring</Typography>
                  <Typography component="h2" variant="h3" sx={{ color: "#FFFFFF", fontSize: { xs: "1.45rem", md: "1.8rem" }, mt: 0.7 }}>{cta.label}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.74)", fontSize: "0.84rem", lineHeight: 1.65, mt: 0.7 }}>{cta.description}</Typography>
                </Box>
                <Button component={Link} href={cta.href} variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} sx={{ color: "#20252D", flexShrink: 0, "&:hover": { background: "#FFE082" } }}>Open next step</Button>
              </Stack>
            </Paper>
          </Container>
        </Box>
      ) : null}
      {children}
    </>
  );
}

function StatsBand({ stats }: { stats: NonNullable<PortalFeature["stats"]> }) {
  return (
    <Box component="section" sx={{ background: "#FFFFFF", py: { xs: 2, md: 2.5 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={1.5}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent sx={{ p: { xs: 2, md: 2.5 }, "&:last-child": { pb: { xs: 2, md: 2.5 } } }}>
                  <Typography sx={{ color: "text.secondary", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>{stat.label}</Typography>
                  <Typography sx={{ color: "text.primary", fontSize: { xs: "1.2rem", md: "1.45rem" }, fontWeight: 850, letterSpacing: "-0.025em", mt: 0.55 }}>{stat.value}</Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: "0.74rem", lineHeight: 1.5, mt: 0.35 }}>{stat.detail}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export function FeatureSectionView({ section, index }: { section: FeatureSection; index: number }) {
  const background = section.tone === "gold" ? "#FFF8E1" : section.tone === "white" || index % 2 === 1 ? "#FFFFFF" : "#FFFCF5";
  return (
    <Box component="section" id={section.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")} sx={{ background, py: { xs: 2, md: 2.5 } }}>
      <Container maxWidth="lg">
        <SectionTitle eyebrow={section.eyebrow} title={section.title} description={section.description} />
        {section.items?.length ? (
          <Grid container spacing={2}>
            {section.items.map((item, itemIndex) => (
              <Grid key={`${item.title}-${itemIndex}`} size={{ xs: 12, sm: 6, md: 4 }}>
                <FeatureItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        ) : null}
        {section.links?.length ? (
          <Grid container spacing={2}>
            {section.links.map((link, linkIndex) => (
              <Grid key={`${link.href}-${linkIndex}`} size={{ xs: 12, sm: 6, md: 3 }}>
                <FeatureLinkCard link={link} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Container>
    </Box>
  );
}

function FeatureItemCard({ item }: { item: FeatureItem }) {
  return (
    <Card sx={{ borderRadius: 3, display: "flex", flexDirection: "column", height: "100%", transition: "transform 200ms ease, box-shadow 200ms ease", "&:hover": { boxShadow: "0 16px 34px rgba(93,65,17,0.11)", transform: "translateY(-3px)" } }}>
      <CardContent sx={{ display: "flex", flex: 1, flexDirection: "column", p: { xs: 2.3, md: 2.7 }, "&:last-child": { pb: { xs: 2.3, md: 2.7 } } }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1.2}>
          <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 2, color: "#000000", display: "flex", flexShrink: 0, height: 46, justifyContent: "center", width: 46 }}>
            <PortalIcon name={item.icon ?? "campaign"} sx={{ fontSize: 22 }} />
          </Box>
          {item.tag ? <Chip label={item.tag} size="small" sx={{ background: "#FFFCF5", color: "primary.main", fontSize: "0.64rem" }} /> : null}
        </Stack>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "1rem", lineHeight: 1.4, mt: 2 }}>{item.title}</Typography>
        <Typography sx={{ color: "text.secondary", fontSize: "0.82rem", lineHeight: 1.68, mt: 0.8 }}>{item.description}</Typography>
        {item.meta ? <Typography sx={{ color: "secondary.dark", fontSize: "0.7rem", fontWeight: 750, mt: 1.4 }}>{item.meta}</Typography> : null}
        {item.href ? <Button component={Link} href={item.href} endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", color: "primary.main", fontSize: "0.77rem", mt: "auto", p: 0, pt: 1.8 }}>Explore</Button> : null}
      </CardContent>
    </Card>
  );
}

function FeatureLinkCard({ link }: { link: FeatureLink }) {
  return (
    <Card sx={{ borderRadius: 3, height: "100%", transition: "transform 200ms ease, box-shadow 200ms ease", "&:hover": { boxShadow: "0 16px 34px rgba(93,65,17,0.11)", transform: "translateY(-3px)" } }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%", p: { xs: 2.3, md: 2.7 }, "&:last-child": { pb: { xs: 2.3, md: 2.7 } } }}>
        <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 2, color: "#000000", display: "flex", height: 44, justifyContent: "center", width: 44 }}><PortalIcon name={link.icon ?? "arrowForward"} sx={{ fontSize: 21 }} /></Box>
        <Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "0.98rem", lineHeight: 1.4, mt: 1.8 }}>{link.label}</Typography>
        <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", lineHeight: 1.65, mt: 0.75 }}>{link.description}</Typography>
        <Button component={Link} href={link.href} endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", color: "primary.main", fontSize: "0.77rem", mt: "auto", p: 0, pt: 1.6 }}>Open</Button>
      </CardContent>
    </Card>
  );
}

export function FeatureStatus({ children }: { children: ReactNode }) {
  return <Alert icon={<CheckCircleIcon />} severity="success" sx={{ borderRadius: 2.5 }}>{children}</Alert>;
}
