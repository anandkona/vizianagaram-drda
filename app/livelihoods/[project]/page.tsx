import { Box, Container, Typography, Grid, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { use } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";

const PROJECT_CATEGORIES = [
  { id: "manyam-cafe", title: "Manyam Cafe" },
  { id: "cashew", title: "Cashew Processing" },
  { id: "hill-broom", title: "Hill Broom Manufacturing" },
  { id: "bamboo", title: "Bamboo Mission" },
  { id: "banana-fiber", title: "Banana Fiber Extraction" },
  { id: "exotic-vegetables", title: "Exotic Vegetable Project" },
  { id: "ifc", title: "Integrated Farming Clusters" },
  { id: "seed-banks", title: "Desi Seed Banks" },
];

const PROJECTS_MAP: Record<string, any> = {
  "manyam-cafe": {
    badge: "Startup Showcase",
    title: "Manyam Cafe",
    location: "ITDA Petrol Bunk, Parvathipuram",
    desc: "A women-run tribal products cafe at the ITDA Petrol Bunk, Parvathipuram — selling millet products, cashew, dry fruits, papads, snacks, and home-made chocolates. A self-sustaining micro-enterprise model generating monthly profit and employment for tribal women.",
    tags: ["Millet Products", "Cashew", "Dry Fruits", "Papads", "Snacks", "Home Made Chocolates"],
    stats: [
      { value: "₹1.50 Lakhs", label: "Monthly Sales", color: "#D97706" },
      { value: "₹10,000", label: "Monthly Profit", color: "#2E7D32" },
      { value: "3", label: "Women Employed", color: "#C2185B" }
    ]
  },
  "cashew": {
    badge: "Value Chain Enterprise",
    title: "Cashew Processing Unit",
    location: "Parvathipuram Market Yard",
    desc: "A flagship tribal enterprise processing raw cashew nuts into marketable finished products. Procuring 42,669 kg of raw cashew from tribal farmers and processing into 10,152 kg of finished cashew — generating ₹77.64 lakhs in sales and employing 20 tribal youth. Demonstrates the power of value addition in tribal agriculture.",
    tags: [],
    stats: [
      { value: "42,669 Kg", label: "Raw Cashew Procured", color: "#1E293B" },
      { value: "₹64.85 Lakhs", label: "Procurement Cost", color: "#1E293B" },
      { value: "10,152 Kg", label: "Processed Output", color: "#1E293B" },
      { value: "₹77.64 Lakhs", label: "Total Sales", color: "#1E293B" },
      { value: "₹1.03 Lakhs", label: "Net Profit", color: "#1E293B" },
      { value: "20 Tribal Youth", label: "Employment Created", color: "#1E293B" }
    ]
  },
  "hill-broom": {
    badge: "Flagship Project",
    title: "Hill Broom Manufacturing Unit",
    location: "Parvathipuram Manyam",
    desc: "A large-scale tribal livelihood enterprise manufacturing hill brooms — a naturally grown forest grass product — into finished brooms for the domestic market. With ₹2.18 Crore project cost, this unit creates direct employment for 450 rural women and benefits 2,500 tribal farmers as suppliers.",
    tags: [],
    stats: [
      { value: "₹2.18 Crore", label: "Project Cost", color: "#1E293B" },
      { value: "64.80 Lakh", label: "Annual Production", color: "#1E293B" },
      { value: "450", label: "Women Employed", color: "#1E293B" },
      { value: "2,500", label: "Tribal Beneficiaries", color: "#1E293B" }
    ]
  },
  "bamboo": {
    badge: "100% Achievement",
    title: "Bamboo Mission",
    location: "Bhamini, Seethampeta Mandals",
    desc: "Bamboo cultivation across Bhamini and Seethampeta mandals — 28,860 plants planted with 481 farmers covered. 100% achievement of planting target. Bamboo is a versatile crop with uses in construction, furniture, handicrafts, and food (bamboo shoots).",
    tags: [],
    stats: [
      { value: "28,860", label: "Plants Planted", color: "#2E7D32" },
      { value: "481", label: "Farmers Covered", color: "#2E7D32" }
    ]
  },
  "banana-fiber": {
    badge: "Circular Economy",
    title: "Banana Fiber Extraction",
    location: "Parvathipuram Manyam",
    desc: "Transforming agricultural waste into livelihood opportunity. Banana pseudo-stems (typically discarded) can be processed into fiber for handicrafts, textiles, and eco-products. With 5,500 hectares of banana cultivation and 3.3 lakh tons of raw material annually, this is an untapped multi-crore opportunity for tribal women entrepreneurs.",
    tags: [],
    stats: [
      { value: "5,500 Hectares", label: "Potential Area", color: "#00695C" },
      { value: "3.3 Lakh Tons", label: "Raw Material Availability", color: "#00695C" },
      { value: "8 to 12", label: "Employment per Unit", color: "#00695C" },
      { value: "₹8k to ₹12k", label: "Extra Income/Acre", color: "#00695C" }
    ]
  },
  "exotic-vegetables": {
    badge: "Innovation Project",
    title: "Exotic Vegetable Project",
    location: "Komarada FPO | Villages: Kandivalasa, Kummarigunta",
    desc: "High-value exotic vegetables being grown by tribal farmers through Komarada FPO — targeting premium urban markets and hospitality sector buyers. Tribal farmers are growing export-quality vegetables for city markets, hotels, and modern retail — commanding 2–3× higher prices than conventional crops.",
    tags: ["Colored Capsicum", "Broccoli", "Zucchini", "Cherry Tomato", "Red Cabbage", "Baby Corn"],
    stats: []
  },
  "ifc": {
    badge: "Integrated Farming",
    title: "Integrated Farming Clusters (IFC)",
    location: "District Wide",
    desc: "Combining multiple agricultural enterprises on the same farm for maximum income. Integrated Farming Clusters combine paddy, horticulture, fishery, poultry, and kitchen gardens on the same farm — multiplying income sources and reducing risk for each farmer household.",
    tags: [],
    stats: [
      { value: "Multiple", label: "IFCs Promoted", color: "#00695C" },
      { value: "Multiple", label: "Mandals Covered", color: "#2E7D32" },
      { value: "Multiple", label: "Villages Covered", color: "#0284C7" },
      { value: "Many", label: "Farmers Benefitted", color: "#7C3AED" }
    ]
  },
  "seed-banks": {
    badge: "Biodiversity Conservation",
    title: "Desi Seed Banks",
    location: "G.L.Puram, Garugubilli, Parvathipuram, Seethanagaram, Seethampeta, Veeraghattam",
    desc: "Preserving native crop varieties for food security and cultural heritage. Community-managed desi seed banks preserve native varieties free from commercial dependence. Farmers can borrow seeds, grow crops, and return seeds after harvest — maintaining biodiversity while ensuring food sovereignty for tribal communities.",
    tags: ["Redgram", "Ratnachodi", "Navara", "Chittimutyalu", "Kalabatti", "Horsegram"],
    stats: []
  }
};

export default function LivelihoodProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const resolvedParams = use(params);
  const projectId = resolvedParams.project.toLowerCase();

  const currentCategory = PROJECT_CATEGORIES.find((c) => c.id === projectId) || PROJECT_CATEGORIES[0];
  const project = PROJECTS_MAP[projectId] || PROJECTS_MAP["manyam-cafe"];

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
        <Box sx={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.4)", display: "none", pointerEvents: "none"
        }} />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43,33,0,0.6)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Link href="/livelihoods" style={{ color: "inherit", textDecoration: "none" }}>Livelihoods</Link>
            <Typography sx={{ color: "#2B2100", fontSize: "0.8rem", fontWeight: 700 }}>{currentCategory.title}</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            {currentCategory.title}
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Discover the impacts and success of the {currentCategory.title} initiative in Vizianagaram district.
          </Typography>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <span style={{
              display: "inline-block", backgroundColor: "#FFFDE7", color: "#8A6500",
              fontSize: "0.75rem", fontWeight: 800, padding: "6px 14px",
              borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px",
              border: "1px solid #FFE082"
            }}>
              {project.badge}
            </span>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "white", fontSize: { xs: "1.5rem", md: "2.2rem" }, letterSpacing: "-0.02em" }}>
              {project.title}
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: "0.85rem", mt: 1 }}>
              📍 {project.location}
            </Typography>
            <Box sx={{ mt: 3, mx: "auto", width: 64, height: 5, bgcolor: "#FFC107", borderRadius: 2 }} />
          </Box>

          <Box sx={{ bgcolor: "white", borderRadius: 4, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <Box sx={{ p: { xs: 3, sm: 5 } }}>
              
              <Typography sx={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7, mb: 4 }}>
                {project.desc}
              </Typography>

              {project.tags && project.tags.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#1E293B", mb: 2 }}>
                    Key Focus Areas:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tags.map((tag: string, idx: number) => (
                      <Box key={idx} sx={{ bgcolor: "#FFF8E1", color: "#D97706", fontSize: "0.75rem", fontWeight: 700, px: 2, py: 0.75, borderRadius: 10, border: "1px solid #FFE082" }}>
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {project.stats && project.stats.length > 0 && (
                <Grid container spacing={3}>
                  {project.stats.map((stat: any, idx: number) => (
                    <Grid size={{ xs: 6, sm: 4 }} key={idx}>
                      <Box sx={{ bgcolor: "#F8FAFC", borderRadius: 3, p: 2, border: "1px solid #E2E8F0", textAlign: "center", height: "100%" }}>
                        <Typography sx={{ fontWeight: 900, color: stat.color || "#1E293B", fontSize: "1.25rem", mb: 0.5 }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: "#64748B", fontSize: "0.75rem", fontWeight: 600 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
