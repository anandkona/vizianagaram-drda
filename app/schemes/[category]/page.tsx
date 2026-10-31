"use client";

import React, { use } from "react";
import Link from "next/link";
import { Box, Container, Typography, Grid, Breadcrumbs } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";

const SCHEME_CATEGORIES = [
  { id: "all", title: "All Schemes", href: "/schemes" },
  { id: "women", title: "Women & SHG", href: "/schemes/women" },
  { id: "farmers", title: "Farmers", href: "/schemes/farmers" },
  { id: "youth", title: "Youth & Skills", href: "/schemes/youth" },
  { id: "entrepreneurs", title: "Entrepreneurs", href: "/schemes/entrepreneurs" },
  { id: "tribal", title: "Tribal Welfare", href: "/schemes/tribal" },
  { id: "social", title: "Senior Citizens", href: "/schemes/social" },
];

const YOUTH_SCHEMES = [
  {
    title: "DDUGKY – Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    tag: "Skill",
    tagColor: "#0284C7",
    desc: "Placement-linked skill training program for rural youth.",
    eligibility: [
      "Rural youth 15-35 years",
      "Class 5 pass minimum",
      "BPL / ST / SC preferred",
    ],
    benefits: [
      "Free residential/non-residential training",
      "Job placement guarantee",
      "Post-placement tracking",
      "Training in 250+ job roles",
    ],
    documents: [
      "Aadhaar card",
      "Education certificate",
      "Caste certificate (if applicable)",
      "Bank passbook",
    ],
    applyText: "Apply at DRDA office or empaneled training partner centers. Visit /events for schedules.",
  },
  {
    title: "PMKVY – Pradhan Mantri Kaushal Vikas Yojana",
    tag: "NSDC",
    tagColor: "#0284C7",
    desc: "Short-term skill training aligned to National Skills Qualification Framework.",
    eligibility: [
      "Indian nationals",
      "Class 8 pass minimum",
      "Age 15+, unemployed/school dropout",
    ],
    benefits: [
      "Free short-term skill training (up to 3 months)",
      "NSQF certification",
      "Recognition of Prior Learning (RPL)",
      "Monetary reward on certification",
    ],
    documents: ["Aadhaar card", "Education certificate", "Mobile number"],
    applyText: "Find PMKVY training centers via NSDC portal or DRDA referral.",
  },
  {
    title: "Self-Employment Scheme for Youth",
    tag: "DRDA",
    tagColor: "#0284C7",
    desc: "Financial support for rural youth to set up micro-enterprises.",
    eligibility: [
      "Rural youth 18-35",
      "Minimum Class 10 pass",
      "Viable business plan",
    ],
    benefits: [
      "Up to ₹1 lakh subsidy",
      "Bank loan facilitation",
      "Business mentoring",
      "Market linkage support",
    ],
    documents: [
      "Aadhaar",
      "Education certificate",
      "Project report",
      "Bank account details",
    ],
    applyText: "Submit application with project report at DRDA office.",
  },
];

const WOMEN_SCHEMES = [
  {
    title: "NRLM – National Rural Livelihoods Mission",
    tag: "NRLM",
    tagColor: "#2E7D32",
    desc: "Reduce rural poverty by building strong SHG institutions and providing income diversification opportunities.",
    eligibility: [
      "Women from rural households",
      "Members of registered SHGs",
      "Priority for marginalized communities",
    ],
    benefits: [
      "Revolving fund and community investment support",
      "Financial inclusion and bank linkages",
      "Livelihood training and market support",
      "Capacity building for SHG leaders",
    ],
    documents: [
      "Aadhaar card",
      "SHG registration details",
      "Bank account details",
    ],
    applyText: "Contact your Village Organization (VO) or the Mandal Samakhya.",
  },
  {
    title: "Mission Shakti Women's Groups",
    tag: "Women & Child",
    tagColor: "#C2185B",
    desc: "Women's collectives, convergence and enterprise support.",
    eligibility: [
      "Women collectives and federations",
      "Registered under relevant acts",
    ],
    benefits: [
      "Access to enterprise networks",
      "Convergence with state departments",
      "Training and finance access",
    ],
    documents: ["Group registration certificate", "Aadhaar of members", "Bank passbook"],
    applyText: "Apply through the District Women and Child Development office.",
  },
];

const FARMERS_SCHEMES = [
  {
    title: "PM-KISAN – Pradhan Mantri Kisan Samman Nidhi",
    tag: "Income Support",
    tagColor: "#2E7D32",
    desc: "Provide direct income support to small and marginal farmer families.",
    eligibility: [
      "All small & marginal farmers",
      "Land holding up to 2 hectares",
      "Excludes institutional landholders",
    ],
    benefits: [
      "₹6,000/year in 3 equal instalments",
      "Direct credit to bank account",
      "No middlemen",
    ],
    documents: [
      "Aadhaar card",
      "Land records / Pattadar passbook",
      "Bank passbook",
    ],
    applyText: "Register at nearest MeeSeva/CSC center or through PM-KISAN portal with land records.",
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana",
    tag: "Insurance",
    tagColor: "#0284C7",
    desc: "Financial support to farmers suffering crop loss/damage due to unforeseen events.",
    eligibility: [
      "All farmers growing notified crops",
      "Loanee and non-loanee farmers",
    ],
    benefits: [
      "Full insured sum on total crop loss",
      "15% premium for Rabi, 2% for Kharif",
      "Mobile-based loss reporting",
    ],
    documents: ["Bank passbook", "Land records", "Aadhaar", "Sown crop declaration"],
    applyText: "Register through bank branch or insurance company before sowing.",
  },
];

const ENTREPRENEURS_SCHEMES = [
  {
    title: "PMEGP Enterprise Support",
    tag: "Enterprise",
    tagColor: "#D97706",
    desc: "Credit and support for small manufacturing and service enterprises.",
    eligibility: [
      "Individuals above 18 years",
      "At least VIII standard pass for projects above ₹10 lakh (manufacturing)",
      "New projects only",
    ],
    benefits: [
      "Margin money subsidy up to 35%",
      "Bank credit facilitation",
      "EDP training support",
    ],
    documents: ["Aadhaar", "Project report", "Education certificate", "Caste certificate (if applicable)"],
    applyText: "Apply online at the PMEGP portal or contact the District Industries Centre.",
  },
];

const TRIBAL_SCHEMES = [
  {
    title: "Van Dhan Vikas Karyakram",
    tag: "Tribal Welfare",
    tagColor: "#4338CA",
    desc: "Value addition and marketing of Minor Forest Produce (MFP) gathered by tribals.",
    eligibility: [
      "Tribal gatherers of MFP",
      "Members of Van Dhan Vikas Kendras",
    ],
    benefits: [
      "Training in value addition",
      "Provision of equipment and tools",
      "Better market realization",
    ],
    documents: ["Aadhaar", "ST certificate", "Bank account"],
    applyText: "Join local Van Dhan Vikas Kendra through the ITDA office.",
  },
];

const SOCIAL_SCHEMES = [
  {
    title: "YSR Pension Kanuka",
    tag: "Social Security",
    tagColor: "#E11D48",
    desc: "Monthly pension for senior citizens, widows, and persons with disabilities.",
    eligibility: [
      "BPL families",
      "Senior citizens (60+ years)",
      "Resident of Andhra Pradesh",
    ],
    benefits: [
      "Monthly assured pension",
      "Direct delivery to beneficiaries",
    ],
    documents: ["Aadhaar", "Age proof", "BPL Ration Card"],
    applyText: "Apply through the local village/ward secretariat.",
  },
];

const SCHEMES_MAP: Record<string, any[]> = {
  youth: YOUTH_SCHEMES,
  women: WOMEN_SCHEMES,
  farmers: FARMERS_SCHEMES,
  entrepreneurs: ENTREPRENEURS_SCHEMES,
  tribal: TRIBAL_SCHEMES,
  social: SOCIAL_SCHEMES,
};

export default function SchemeCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const categoryId = resolvedParams.category.toLowerCase();

  const currentCategory = SCHEME_CATEGORIES.find((c) => c.id === categoryId) || SCHEME_CATEGORIES[0];
  const schemesList = SCHEMES_MAP[categoryId] || [];

  return (
    <Box sx={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif", bgcolor: "#F8FAFC", pb: 0 }}>
      {/* Hero Section */}
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        color: "#2B2100",
        py: { xs: 2, md: 2.5 }
      }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43,33,0,0.6)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Link href="/schemes" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Schemes</Link>
            <Typography sx={{ color: "#2B2100", fontSize: "0.8rem", fontWeight: 700 }}>{currentCategory.title}</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            {currentCategory.title} Schemes
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Explore welfare and livelihood programs for the {currentCategory.title.toLowerCase()} sector in Vizianagaram District.
          </Typography>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: "#F8FAFC" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box sx={{
              display: "inline-block", background: "#FFFDE7", color: "#8A6500",
              fontSize: "0.75rem", fontWeight: 800, px: 2, py: 0.5, border: "1px solid #FFE082",
              borderRadius: "999px", textTransform: "uppercase", letterSpacing: "0.05em", mb: 2
            }}>
              {currentCategory.title} Schemes
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "1.5rem", md: "2rem" }, letterSpacing: "-0.02em" }}>
              Available Programs
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.9rem", mt: 1.5, maxWidth: 600, mx: "auto" }}>
              Dedicated schemes and initiatives to support citizens in Vizianagaram.
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 4, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          {schemesList.length > 0 ? (
            <Grid container spacing={3}>
              {schemesList.map((scheme, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <Box sx={{
                    bgcolor: "white", borderRadius: 4, border: "1px solid #E2E8F0", 
                    height: "100%",
                    display: "flex", flexDirection: "column",
                    transition: "all 0.3s ease", cursor: "pointer",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
                    "&:hover": { 
                      transform: "translateY(-4px)", 
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                      borderColor: "#CBD5E1"
                    }
                  }}>
                    <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1, height: "100%" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                        <Box sx={{
                          display: "inline-flex", alignItems: "center", px: 1.25, py: 0.5,
                          borderRadius: 20, fontSize: "0.7rem", fontWeight: 800,
                          bgcolor: scheme.tagColor, color: "white", textTransform: "uppercase", letterSpacing: "0.05em"
                        }}>
                          {scheme.tag}
                        </Box>
                      </Box>
                      
                      <Typography sx={{ 
                        fontWeight: 800, color: "#0F172A", fontSize: "1.05rem", mb: 1, lineHeight: 1.3,
                      }}>
                        {scheme.title}
                      </Typography>
                      
                      <Typography sx={{ 
                        color: "#475569", fontSize: "0.85rem", lineHeight: 1.5, mb: 2.5, fontWeight: 500,
                      }}>
                        {scheme.desc}
                      </Typography>
                      
                      <Box sx={{ mt: "auto", pt: 1.5, borderTop: "1px solid #F1F5F9" }}>
                        <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.75 }}>
                          Key Benefit
                        </Typography>
                        <Box sx={{
                          bgcolor: "#FFFBEB", color: "#B45309", px: 1.25, py: 1, border: "1px solid #FEF3C7",
                          borderRadius: 2, display: "flex", alignItems: "flex-start", fontSize: "0.8rem", fontWeight: 700,
                          lineHeight: 1.4
                        }}>
                          <span style={{ color: "#F59E0B", marginRight: "6px", fontSize: "1rem", marginTop: "-1px" }}>★</span>
                          <Box>{scheme.benefits[0] || "Financial & Livelihood Support"}</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ p: 6, textAlign: "center", bgcolor: "white", borderRadius: 4, border: "1px dashed #CBD5E1" }}>
              <Typography variant="h6" sx={{ color: "#475569", fontWeight: 600 }}>
                More schemes for this category are being updated.
              </Typography>
              <Typography sx={{ color: "#94A3B8", mt: 1, fontSize: "0.9rem" }}>
                Please check back later or contact the DRDA office.
              </Typography>
            </Box>
          )}

          <Box sx={{ mt: 10, p: { xs: 3, sm: 4 }, bgcolor: "#FFFDE7", borderRadius: 4, border: "1px solid #FFE082" }}>
            <Typography sx={{ fontWeight: 800, color: "#8A6500", fontSize: "1.25rem", mb: 1 }}>
              Contact for {currentCategory.title} Welfare
            </Typography>
            <Typography sx={{ color: "#423B00", fontSize: "0.85rem", mb: 2 }}>
              For scheme applications and inquiries, contact the DRDA cell or visit the district office.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Link href="tel:1902" style={{ textDecoration: "none" }}>
                <Typography sx={{ fontSize: "0.85rem", color: "#8A6500", fontWeight: 700, "&:hover": { textDecoration: "underline" } }}>
                  📞 Helpline: 1902
                </Typography>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Typography sx={{ fontSize: "0.85rem", color: "#8A6500", fontWeight: 700, "&:hover": { textDecoration: "underline" } }}>
                  View Full Contact Directory →
                </Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

