"use client";

import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { PortalIcon } from "@/components/Icon";

const officials = [
  {
    name: "Sri S. Ram Sundar Reddy, I.A.S.",
    designation: "District Collector & District Magistrate",
    department: "District Administration",
    phone: "08922-226622",
    email: "collector_vzn@ap.gov.in",
    initials: "R",
    image: "/leaders/collector.jpg",
  },
  {
    name: "Sri Sedhu Madhavan S, I.A.S.",
    designation: "Joint Collector & Addl. DM",
    department: "District Administration",
    phone: "08922-225333",
    email: "jc_vzn@ap.gov.in",
    initials: "S",
    image: "/leaders/ceo.webp", // Example placeholder if CEO is Joint Collector
  },
  {
    name: "Sri A. R. Damodhar, IPS",
    designation: "Superintendent of Police",
    department: "District Police",
    phone: "08922-226688",
    email: "sp_vzn@appolice.gov.in",
    initials: "D",
  },
  {
    name: "Sri Ch. Sattibabu",
    designation: "District Revenue Officer",
    department: "Revenue Department",
    phone: "08922-225000",
    email: "dro_vzn@ap.gov.in",
    initials: "S",
  },
  {
    name: "Sri A. Kalyan Chakravarthi",
    designation: "Project Director",
    department: "DRDA, Vizianagaram",
    phone: "08922-276606",
    email: "pddrdavzm@gmail.com",
    initials: "K",
    image: "/leaders/project-director.jpg",
  },
];

export default function WhosWhoPage() {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ 
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700", 
        py: { xs: 2, md: 2.5 },
        }}>
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: "0.8rem" }}>Who's Who</Typography>
          </Breadcrumbs>
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Who's Who
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Meet the dedicated officials and administrative leadership leading rural development and public administration in Vizianagaram district.
          </Typography>
        </Container>
      </Box>

      {/* Main Section */}
      <Box component="section" sx={{ py: { xs: 2, md: 2.5 }, background: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "inline-block", background: "#FEF3C7", color: "#1E293B", fontSize: "0.75rem", fontWeight: 700, px: 1.5, py: 0.5, borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
              Key Officials
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#1E293B", mb: 1, fontSize: { xs: "1.5rem", sm: "1.875rem" } }}>
              Leadership Team
            </Typography>
            <Typography sx={{ color: "#64748B", maxWidth: "600px", mx: "auto", fontSize: { xs: "0.875rem", sm: "0.95rem" } }}>
              Our committed team of officers driving rural development and citizen services
            </Typography>
            <Box sx={{ mt: 1.5, height: "3.5px", width: "56px", background: "#FFC107", borderRadius: "2px", mx: "auto" }} />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 3 }}>
            {officials.map((official, idx) => (
              <Box key={idx} sx={{ 
                background: "white", 
                borderRadius: "16px", 
                border: "1px solid #E2E8F0", 
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                p: 3,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  borderColor: "#CBD5E1"
                }
              }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, height: "100%" }}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    background: official.image ? `url(${official.image})` : "#FFC107", 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: "#1E293B",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    flexShrink: 0
                  }}>
                    {!official.image && official.initials}
                  </Box>
                  <Box sx={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: "#1E293B", fontSize: "0.875rem", lineHeight: 1.2 }}>
                        {official.name}
                      </Typography>
                      <Typography sx={{ color: "#475569", fontSize: "0.75rem", fontWeight: 700, mt: 0.5 }}>
                        {official.designation}
                      </Typography>
                      <Typography sx={{ color: "#64748B", fontSize: "0.75rem", mt: 0.5 }}>
                        {official.department}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: "auto", pt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                      <Box component="a" href={`tel:${official.phone.replace(/[^0-9]/g, "")}`} sx={{ 
                        display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "#475569", fontSize: "0.75rem",
                        "&:hover": { color: "#1E293B" }
                      }}>
                        <PortalIcon name="phone" sx={{ fontSize: 14 }} />
                        {official.phone}
                      </Box>
                      <Box component="a" href={`mailto:${official.email}`} sx={{ 
                        display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "#475569", fontSize: "0.75rem",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        "&:hover": { color: "#1E293B" }
                      }}>
                        <PortalIcon name="email" sx={{ fontSize: 14, flexShrink: 0 }} />
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{official.email}</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Directory Callout */}
      <Box component="section" sx={{ py: 6, background: "#FFFBEB", textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography sx={{ color: "#475569", fontSize: "0.875rem", mb: 2 }}>
            For the complete contact directory of all officers and departments, visit our Contact Directory page.
          </Typography>
          <Box component={Link} href="/contact" sx={{ 
            display: "inline-flex", alignItems: "center", gap: 1, 
            background: "#FFC107", color: "#1E293B", 
            fontWeight: 800, px: 4, py: 1.25, borderRadius: "100px", 
            textDecoration: "none", fontSize: "0.875rem", 
            transition: "all 0.2s ease",
            "&:hover": { background: "#F59E0B" }
          }}>
            View Full Directory
          </Box>
        </Container>
      </Box>

      {/* Quick Links */}
      <Box component="section" sx={{ py: 6, background: "#FFFCF5", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {[
              { label: "District Profile", href: "/about/district" },
              { label: "About DRDA", href: "/about/drda" },
              { label: "Org Structure", href: "/about/structure" },
              { label: "Who's Who", href: "/about/whos-who" },
              { label: "SERP Corner", href: "/serp" },
            ].map((link, idx) => (
              <Box 
                key={idx} 
                component={Link} 
                href={link.href} 
                sx={{
                  display: "flex", 
                  alignItems: "center", 
                  gap: 1.25, 
                  background: "#FFFFFF", 
                  border: "1px solid #FFC107",
                  color: "#1F1700", 
                  fontWeight: 700, 
                  px: 4, 
                  py: 1.25, 
                  borderRadius: "100px", 
                  textDecoration: "none",
                  fontSize: "0.875rem", 
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    background: "#FFC107", 
                    color: "#FFFFFF" 
                  }
                }}
              >
                {link.label}
                <PortalIcon name="arrowForward" sx={{ fontSize: 16 }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
