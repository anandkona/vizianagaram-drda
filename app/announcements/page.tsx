"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import { Megaphone, Sparkles, Calendar, Bell, ArrowRight, Download, Pin } from "lucide-react";
import Link from "next/link";
const feedItems = [
{
type: "Result",
date: "28 May 2026",
title: "Women Entrepreneurship target exceeded — 4,030 units (110.56%)",
description: "Final FY tally confirms the district crossed its women-enterprise target, mobilising ₹40.97 Cr in livelihood investment.",
linkText: "Download notice (PDF)",
tagColor: "#2E7D32",
tagBg: "#E8F5E9",
dotColor: "#2E7D32"
},
{
type: "Notice",
date: "22 May 2026",
title: "SHG Bank-Linkage Camp — schedule released",
description: "Mandal-wise camp dates for SHG credit linkage and seed-capital disbursement have been published. Check with your VO.",
linkText: "Download notice (PDF)",
tagColor: "#1E293B",
tagBg: "#FFC107",
dotColor: "#D97706"
},
{
type: "Update",
date: "15 May 2026",
title: "One Family One Entrepreneur — onboarding begins",
description: "Household enterprise onboarding under the OFOE mission has started, with handholding and credit-linkage support.",
tagColor: "#FFFFFF",
tagBg: "#0284C7",
dotColor: "#0284C7"
},
{
type: "Drive",
date: "8 May 2026",
title: "Bamboo plantation drive completed — 100% achievement",
description: "28,860 bamboo plants established across 481 tribal farms in Bhamini and Seethampeta mandals.",
tagColor: "#FFFFFF",
tagBg: "#D97706",
dotColor: "#D97706"
},
{
type: "Alert",
date: "30 Apr 2026",
title: "Beware of fraudulent loan agents",
description: "DRDA never charges fees for scheme enrollment. Report suspicious agents to the IVRS helpline 1902 immediately.",
pinned: true,
tagColor: "#D97706",
tagBg: "transparent",
tagBorder: "#D97706",
dotColor: "#DC2626"
},
{
type: "Result",
date: "18 Apr 2026",
title: "Seed Capital recovery at 98.59% — among the best in AP",
description: "223 of 230 seed-capital units repaid on schedule, reflecting strong enterprise viability.",
tagColor: "#FFFFFF",
tagBg: "#2E7D32",
dotColor: "#2E7D32"
}
];
export default function AnnouncementsPage() {
return (
<Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC", pb: { xs: 8, md: 0 } }}>
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
{/* Background Blurs */}
<Box sx={{ position: "absolute", top: -80, right: -64, width: 320, height: 320, borderRadius: "50%", bgcolor: "rgba(255, 255, 255, 0.05)", display: "none" }} />
<Box sx={{ position: "absolute", bottom: 0, left: "25%", width: 256, height: 256, borderRadius: "50%", bgcolor: "rgba(245, 158, 11, 0.15)", display: "none" }} />
{/* Dot pattern overlay */}
<Box sx={{ 
position: "absolute", inset: 0, opacity: 0.05, 
backgroundImage: "radial-gradient(white 1px, transparent 0)", 
backgroundSize: "32px 32px" 
}} />
<Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 10 }}>
{/* Breadcrumb */}
<Box sx={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.7)", mb: 3, display: "flex", alignItems: "center", gap: 1, fontWeight: 500 }}>
<Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
<span>/</span>
<span style={{ color: "rgba(0,0,0,0.9)" }}>Announcements</span>
</Box>
<Box sx={{ 
display: "inline-flex", alignItems: "center", gap: 1, 
bgcolor: "rgba(0,0,0,0.06)", color: "#000", 
fontSize: "0.75rem", fontWeight: 700, px: 1.5, py: 0.75, 
borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", mb: 2 
}}>
<Box sx={{ width: 8, height: 8, bgcolor: "#d97706", borderRadius: "50%", animation: "pulse 2s infinite" }} />
LIVE FEED · Updated Daily
</Box>
<Typography variant="h1" sx={{ fontWeight: 900, mb: 1.5, fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" }, letterSpacing: "-0.02em", color: "#000" }}>
<Megaphone size={40} color="#000" style={{ marginRight: 8, verticalAlign: "bottom" }} />
Latest Updates
</Typography>
<Typography sx={{ color: "rgba(0,0,0,0.8)", fontSize: { xs: "0.9rem", sm: "1rem" }, maxWidth: 650, lineHeight: 1.5, fontWeight: 500 }}>
Announcements, notices, results and citizen alerts — straight from the DRDA Vizianagaram desk.
</Typography>
</Container>
{/* Bottom Curve/Wave SVG could go here if needed, but spacing handles it */}
</Box>
{/* Featured Top Card */}
<Box sx={{ mt: 3, position: "relative", zIndex: 20 }}>
<Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
<Box sx={{ 
bgcolor: "white", borderRadius: 4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", 
border: "1px solid #E2E8F0", overflow: "hidden", position: "relative" 
}}>
{/* Top Gradient Border */}
<Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "#FFC107" }} />
<Box sx={{ p: { xs: 3, sm: 4 } }}>
<Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1, mb: 1.5 }}>
<Box sx={{ 
display: "inline-flex", alignItems: "center", gap: 0.5, 
bgcolor: "#DC2626", color: "white", fontSize: "0.625rem", 
fontWeight: 700, px: 1.25, py: 0.5, borderRadius: 8, textTransform: "uppercase" 
}}>
<Sparkles size={10} />
New
</Box>
<Box sx={{ display: "inline-flex", alignItems: "center", px: 1.25, py: 0.25, borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, bgcolor: "#D97706", color: "white" }}>
Drive
</Box>
<Box sx={{ display: "flex", alignItems: "center", gap: 0.5, fontSize: "0.75rem", color: "#64748B" }}>
<Calendar size={12} />
30 May 2026
</Box>
</Box>
<Typography sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" }, fontWeight: 800, color: "#1E293B", mb: 1, lineHeight: 1.3 }}>
Skill Training Enrollment Drive 2026 — Now Open Across All 15 Mandals
</Typography>
<Typography sx={{ color: "#475569", fontSize: { xs: "0.875rem", sm: "1rem" }, lineHeight: 1.6, mb: 2.5 }}>
Free DDUGKY & PMKVY skill training registrations are open for rural youth aged 18–35. Apply at your nearest Mandal office or call the DRDA helpline before 30 June 2026.
</Typography>
<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
<Box component="a" href="tel:08954220123" sx={{ 
display: "inline-flex", alignItems: "center", gap: 1, 
bgcolor: "#D97706", color: "white", fontSize: "0.875rem", fontWeight: 600, 
px: 2.5, py: 1.25, borderRadius: 8, textDecoration: "none",
"&:hover": { bgcolor: "#B45309" }
}}>
<Bell size={15} />
Call to Enroll
</Box>
<Box component={Link} href="/events" sx={{ 
display: "inline-flex", alignItems: "center", gap: 1, 
border: "1px solid #D97706", color: "#D97706", fontSize: "0.875rem", fontWeight: 600, 
px: 2.5, py: 1.25, borderRadius: 8, textDecoration: "none",
"&:hover": { bgcolor: "#FFFBEB" }
}}>
View Events
<ArrowRight size={14} />
</Box>
</Box>
</Box>
</Box>
</Container>
</Box>
{/* Feed Section */}
<Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 7 }}>
<Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
<Typography sx={{ fontSize: "1.5rem", fontWeight: 800, color: "#1E293B" }}>The Feed</Typography>
<Box sx={{ flex: 1, height: "1px", background: "linear-gradient(to right, #E2E8F0, transparent)" }} />
</Box>
<Box sx={{ position: "relative" }}>
{/* Vertical Timeline Line */}
<Box sx={{ 
position: "absolute", left: { xs: 15, sm: 19 }, top: 8, bottom: 8, width: 2, 
background: "#FFC107" 
}} />
<Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
{feedItems.map((item, idx) => (
<Box key={idx} sx={{ position: "relative", pl: { xs: 5, sm: 7 } }}>
{/* Timeline Dot */}
<Box sx={{ position: "absolute", left: { xs: 0, sm: 4 }, top: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
<Box sx={{ 
width: 32, height: 32, borderRadius: "50%", bgcolor: "white", 
border: "2px solid", borderColor: item.dotColor, boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
display: "flex", alignItems: "center", justifyContent: "center"
}}>
<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: item.dotColor }} />
</Box>
</Box>
{/* Feed Card */}
<Box sx={{ 
bgcolor: "white", borderRadius: 4, p: 2.5, border: "1px solid #E2E8F0", 
boxShadow: "0 1px 2px rgba(0,0,0,0.05)", transition: "all 0.2s",
"&:hover": { transform: "translateY(-2px)", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", borderColor: "rgba(217, 119, 6, 0.3)" }
}}>
<Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1, mb: 1 }}>
<Box sx={{ 
display: "inline-flex", alignItems: "center", px: 1.25, py: 0.25, 
borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, 
bgcolor: item.tagBg, color: item.tagColor,
...(item.tagBorder && { border: `1px solid ${item.tagBorder}` })
}}>
{item.type}
</Box>
{item.pinned && (
<Box sx={{ 
display: "inline-flex", alignItems: "center", gap: 0.5, 
fontSize: "0.625rem", fontWeight: 700, color: "#DC2626", 
bgcolor: "#FEF2F2", border: "1px solid #FECACA", px: 1, py: 0.25, borderRadius: 8 
}}>
<Pin size={9} />
Pinned
</Box>
)}
<Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 0.5, fontSize: "0.75rem", color: "#64748B" }}>
<Calendar size={12} />
{item.date}
</Box>
</Box>
<Typography sx={{ fontWeight: 700, color: "#1E293B", lineHeight: 1.25, mb: 0.75 }}>
{item.title}
</Typography>
<Typography sx={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.6 }}>
{item.description}
</Typography>
{item.linkText && (
<Box component="a" href="#" sx={{ 
display: "inline-flex", alignItems: "center", gap: 0.75, mt: 1.5, 
fontSize: "0.75rem", fontWeight: 600, color: "#D97706", textDecoration: "none",
"&:hover": { gap: 1.25 }
}}>
<Download size={13} />
{item.linkText}
</Box>
)}
</Box>
</Box>
))}
</Box>
</Box>
</Container>
{/* Footer CTA Section */}
<Box sx={{ background: "#FFC107", color: "white", py: 6, textAlign: "center" }}>
<Container maxWidth="sm">
<Typography sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 1 }}>Never miss an update</Typography>
<Typography sx={{ color: "#FDE68A", fontSize: "0.875rem", mb: 3 }}>Call the toll-free IVRS line to hear the latest announcements in Telugu, anytime.</Typography>
<Box component="a" href="tel:1902" sx={{
display: "inline-flex", alignItems: "center", gap: 1, 
bgcolor: "#FFC107", color: "#1E293B", fontWeight: 700, 
px: 3.5, py: 1.5, borderRadius: 8, fontSize: "0.875rem", textDecoration: "none",
"&:hover": { bgcolor: "#F9A825" }
}}
>
<Bell size={16} />
Call IVRS 1902
</Box>
</Container>
</Box>
</Box>
);
}
