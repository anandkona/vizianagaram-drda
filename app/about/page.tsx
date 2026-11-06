"use client";

import { Box, Card, CardContent, Chip, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import GroupsIcon from "@mui/icons-material/Groups";
import HubIcon from "@mui/icons-material/Hub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MapIcon from "@mui/icons-material/Map";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { PortalIcon } from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import { districtPriorities, districtProfile, mandals } from "@/src/data/district";

const administration = [
  { title: "Collector & District Magistrate", description: "Leads district administration, coordination of departments and responsive public governance.", icon: "gavel", link: "/directory" },
  { title: "District Administration", description: "Works across revenue, welfare, infrastructure and citizen service priorities.", icon: "people", link: "/directory?tab=departments" },
  { title: "Collectorate", description: "A central point for district notices, records, public information and coordination.", icon: "accountBalance", link: "/media" },
];

export default function AboutPage() {
  const profileItems = [
    { label: "Geographical Area", value: districtProfile.area, icon: "map" },
    { label: "Population", value: districtProfile.population, icon: "people" },
    { label: "Literacy Rate", value: districtProfile.literacyRate, icon: "education" },
    { label: "Revenue Divisions", value: districtProfile.revenueDivisions, icon: "accountTree" },
    { label: "Mandals", value: districtProfile.mandals, icon: "village" },
    { label: "Revenue Villages", value: districtProfile.revenueVillages, icon: "location" },
    { label: "Gram Panchayats", value: districtProfile.gramPanchayats, icon: "accountBalance" },
    { label: "Municipalities", value: districtProfile.municipalities, icon: "home" },
  ];

  return (
    <>
      <PageIntro eyebrow="About the district" title="Vizianagaram at a glance" description="A connected coastal district shaped by heritage, agriculture, enterprise, learning and a resilient rural communities." icon="map" crumb="About District" />
      <Box component="section" id="glance" sx={{ background: "#FFFFFF", py: { xs: 3, md: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle eyebrow="District profile" title="The foundations of a growing district" description="A concise profile for residents, visitors and anyone looking to understand the district’s administrative scale." />
          <Grid container spacing={1.5}>
            {profileItems.map((item) => (
              <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ borderRadius: 3, height: "100%", transition: "transform 220ms ease, box-shadow 220ms ease", "&:hover": { boxShadow: "0 16px 36px rgba(93,65,17,0.1)", transform: "translateY(-4px)" } }}>
                  <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
                    <Stack direction="row" alignItems="center" spacing={1.3}>
                      <Box sx={{ alignItems: "center", background: "#FBC02D", borderRadius: 2, color: "#000000", display: "flex", flexShrink: 0, height: 42, justifyContent: "center", width: 42 }}><PortalIcon name={item.icon} sx={{ fontSize: 21 }} /></Box>
                      <Box><Typography sx={{ color: "text.secondary", fontSize: "0.73rem", fontWeight: 700 }}>{item.label}</Typography><Typography sx={{ color: "text.primary", fontSize: item.label === "Municipalities" ? "0.95rem" : "1.2rem", fontWeight: 850, letterSpacing: "-0.025em", lineHeight: 1.3, mt: 0.35 }}>{item.value}</Typography></Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ background: "#FFFCF5", border: "1px solid #EDE3CE", borderRadius: 2.5, mt: 2.2, p: 1.8 }}>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <InfoOutlinedIcon sx={{ color: "secondary.dark", fontSize: 19, mt: 0.1 }} />
              <Typography sx={{ color: "text.secondary", fontSize: "0.75rem", lineHeight: 1.6 }}>{districtProfile.note}</Typography>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box component="section" id="administration" sx={{ background: "#FFFCF5", py: { xs: 3, md: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle eyebrow="Administration" title="Leadership that connects people and priorities" description="The district administration brings together public services, local government and community partners to make development practical." />
          <Grid container spacing={2.25}>
            {administration.map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Card sx={{ borderRadius: 3, height: "100%", transition: "transform 220ms ease, box-shadow 220ms ease", "&:hover": { boxShadow: "0 18px 40px rgba(93,65,17,0.12)", transform: "translateY(-4px)" } }}>
                  <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
                    <Box sx={{ alignItems: "center", background: "linear-gradient(135deg, #FFF3C4, #FFF3C4)", borderRadius: 2.5, color: "#000000", display: "flex", height: 54, justifyContent: "center", width: 54 }}><PortalIcon name={item.icon} sx={{ fontSize: 27 }} /></Box>
                    <Typography component="h3" variant="h5" sx={{ color: "text.primary", fontSize: "1.12rem", mt: 2.4 }}>{item.title}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", lineHeight: 1.7, mt: 1.2 }}>{item.description}</Typography>
                    <ButtonLink href={item.link} label="Explore" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ background: "linear-gradient(120deg, #20252D, #C18400)", borderRadius: 3.5, color: "#FFFFFF", mt: 2.25, overflow: "hidden", p: { xs: 2.5, md: 4 }, position: "relative" }}>
            <Box sx={{ border: "1px solid rgba(255,255,255,0.16)", borderRadius: "50%", height: 260, position: "absolute", right: -70, top: -120, width: 260 }} />
            <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={2.5} sx={{ position: "relative" }}>
              <Box sx={{ maxWidth: 700 }}><Chip label="Administration in action" size="small" sx={{ background: "rgba(255,255,255,0.14)", color: "#FFFFFF", fontSize: "0.68rem", mb: 1.4 }} /><Typography component="h3" variant="h3" sx={{ color: "#FFFFFF", fontSize: { xs: "1.55rem", md: "2rem" } }}>Responsive governance starts with a clear doorway.</Typography><Typography sx={{ color: "rgba(255,255,255,0.74)", fontSize: "0.88rem", lineHeight: 1.65, mt: 1 }}>Use the directory to find department contacts, understand service ownership and make the next step easier.</Typography></Box>
              <ButtonLink href="/directory" label="Open directory" light />
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box component="section" id="mandals" sx={{ background: "#FFFFFF", py: { xs: 3, md: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle eyebrow="27 revenue mandals" title="Local administration across the district" description="Mandal-level offices help connect local needs with wider district priorities. The list below is a static reference for this portal." />
          <Grid container spacing={1.25}>
            {mandals.map((mandal, index) => (
              <Grid key={`${mandal}-${index}`} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Card sx={{ borderRadius: 2.5, transition: "transform 180ms ease, box-shadow 180ms ease", "&:hover": { borderColor: "#EACB65", boxShadow: "0 10px 24px rgba(93,65,17,0.1)", transform: "translateY(-3px)" } }}>
                  <CardContent sx={{ p: 1.8, "&:last-child": { pb: 1.8 } }}>
                    <Stack direction="row" alignItems="center" spacing={1.1}>
                      <Box sx={{ alignItems: "center", background: index % 3 === 0 ? "#FFF3C4" : "#FFF3C4", borderRadius: 1.5, color: index % 3 === 0 ? "#9A6700" : "primary.main", display: "flex", flexShrink: 0, fontSize: "0.68rem", fontWeight: 850, height: 30, justifyContent: "center", width: 30 }}>{String(index + 1).padStart(2, "0")}</Box>
                      <Typography noWrap sx={{ color: "text.primary", fontSize: "0.81rem", fontWeight: 750 }}>{mandal}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 3, md: 4.5 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle eyebrow="District priorities" title="Focus that reaches everyday life" description="The priorities below provide a simple, citizen-centred lens for understanding district development work." />
          <Grid container spacing={1.5}>
            {districtPriorities.map((priority, index) => (
              <Grid key={priority.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ borderRadius: 3, height: "100%", transition: "transform 220ms ease, box-shadow 220ms ease", "&:hover": { boxShadow: "0 16px 36px rgba(93,65,17,0.11)", transform: "translateY(-4px)" } }}>
                  <CardContent sx={{ p: 2.6, "&:last-child": { pb: 2.6 } }}>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Box sx={{ alignItems: "center", background: index % 2 === 0 ? "#FFF3C4" : "#FFF8E1", borderRadius: 2, color: index % 2 === 0 ? "primary.main" : "secondary.dark", display: "flex", flexShrink: 0, height: 46, justifyContent: "center", width: 46 }}><PortalIcon name={priority.icon} sx={{ fontSize: 22 }} /></Box>
                      <Box><Typography component="h3" variant="h6" sx={{ color: "text.primary", fontSize: "1rem", lineHeight: 1.35 }}>{priority.title}</Typography><Typography sx={{ color: "text.secondary", fontSize: "0.83rem", lineHeight: 1.6, mt: 0.8 }}>{priority.description}</Typography></Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3, color: "text.secondary" }}><CheckCircleIcon sx={{ color: "#000000", fontSize: 18 }} /><Typography sx={{ fontSize: "0.77rem" }}>Every priority is strongest when it is easy for citizens to understand and access.</Typography></Stack>
        </Container>
      </Box>
    
      <Box component="section" sx={{ background: "#FFFCF5", py: { xs: 4, md: 5 }, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Org Structure", href: "/about/structure" },
              { label: "Who's Who", href: "/about/whos-who" },
            ].map((link, idx) => (
              <Box
                key={idx}
                component={Link}
                href={link.href}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  background: "#FFFFFF",
                  border: "1px solid #FFC107",
                  color: "#2B2100",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  px: 3,
                  py: 1.25,
                  borderRadius: 10,
                  transition: "all 0.2s",
                  "&:hover": {
                    background: "#FFC107",
                    color: "#000000",
                  },
                }}
              >
                {link.label}
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

function ButtonLink({ href, label, light = false }: { href: string; label: string; light?: boolean }) {
  return <Box component={Link} href={href} sx={{ alignItems: "center", color: light ? "#FFD54F" : "primary.main", display: "inline-flex", fontSize: "0.8rem", fontWeight: 800, gap: 0.6, mt: 2.2, "&:hover": { color: light ? "#FFFFFF" : "secondary.dark" } }}>{label}<ArrowForwardIcon sx={{ fontSize: 16 }} /></Box>;
}
