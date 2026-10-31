"use client";

import CommerceGrid from "@/components/CommerceGrid";
import { Box, Container, Typography, Stack, Grid, Chip, Button, keyframes } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const allProducts = [
  { name: "Organic Turmeric Powder", tag: "Organic", url: "https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=500&q=80" },
  { name: "Hill Ginger (Fresh)", tag: "Farm Fresh", url: "https://images.unsplash.com/photo-1630623093145-f606591c2546?w=500&q=80" },
  { name: "Wild Black Pepper", tag: "Forest Sourced", url: "https://images.unsplash.com/photo-1506085621370-98b475435879?w=500&q=80" },
  { name: "Premium Roasted Cashews", tag: "Best Seller", url: "https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?w=500&q=80" },
  { name: "Raw Forest Honey", tag: "Pure", url: "https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?w=500&q=80" },
  { name: "Seedless Forest Tamarind", tag: "Wild", url: "https://images.unsplash.com/photo-1771229389277-a0a7546913f9?w=500&q=80" },
  { name: "Bamboo Craft Basket", tag: "Handmade", url: "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=500&q=80" },
  { name: "Clay Pottery", tag: "Artisan", url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80" },
  { name: "Traditional Handloom", tag: "Weaves", url: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&q=80" },
  { name: "Mixed Millet Pack", tag: "Healthy", url: "https://images.unsplash.com/photo-1672415505894-1dacfcf108d8?w=500&q=80" },
  { name: "Native Ragi Flour", tag: "Desi Seed", url: "https://images.unsplash.com/photo-1621509890697-fc197b91d91b?w=500&q=80" },
  { name: "Handmade Papads", tag: "SHG Made", url: "https://plus.unsplash.com/premium_photo-1773222866574-d47a13892747?w=500&q=80" },
  { name: "Forest Coffee Beans", tag: "Tribal Made", url: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80" },
  { name: "Amla Candy", tag: "Healthy", url: "https://images.unsplash.com/photo-1596647242131-0ebdf84c4f92?w=500&q=80" },
  { name: "Pickle Combo", tag: "Traditional", url: "https://images.unsplash.com/photo-1625944227313-261ce8882798?w=500&q=80" },
  { name: "Organic Jaggery", tag: "Pure", url: "https://images.unsplash.com/photo-1628169976377-a85c885061ab?w=500&q=80" },
  { name: "Cold Pressed Oil", tag: "Farm Fresh", url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80" },
  { name: "Dried Fruits Pack", tag: "Best Seller", url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80" },
];

export default function MartPage() {
  return (
    <>
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFFF61",
        color: "#2B2100",
        pt: { xs: 2, md: 3 },
        pb: 4
      }}>
        {/* Background decorations */}
        <Box sx={{
          position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.3)", display: "none", pointerEvents: "none"
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mb: { xs: 3, md: 4 } }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "rgba(43,33,0,0.7)", mb: 3, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography component="span" sx={{ fontSize: "0.75rem" }}>/</Typography>
            <Typography sx={{ color: "#2B2100", fontSize: "0.8rem", fontWeight: 700 }}>Vizianagaram Mart</Typography>
          </Stack>

          <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack direction="row" spacing={1} mb={2}>
                <Chip icon={<ShoppingBagIcon sx={{ color: "#1E293B !important", fontSize: "16px !important" }} />} label="Vizianagaram Mart" sx={{ bgcolor: "#FFF8E1", color: "#1E293B", fontWeight: 800 }} size="small" />
                <Chip label="Launching Soon" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "#1E293B", fontWeight: 700, border: "1px solid rgba(0,0,0,0.1)" }} size="small" />
              </Stack>

              <Typography component="h1" variant="h3" sx={{ fontWeight: 900, mb: 2.5, fontSize: { xs: "2.5rem", md: "3.5rem" }, letterSpacing: "-0.02em", color: "#1F1700", lineHeight: 1.1 }}>
                Taste the <Box component="span" sx={{ bgcolor: "white", color: "#B45309", px: 2, py: 0.5, borderRadius: 2, display: "inline-block" }}>Local</Box> Harvest
              </Typography>

              <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6, fontWeight: 500, mb: 4, maxWidth: "540px" }}>
                Organic mangoes, premium cashews, handwoven crafts & natural millets — authentic rural produce of Vizianagaram. Every purchase supports a local household.
              </Typography>

              <Grid container spacing={1.5} sx={{ maxWidth: "540px" }}>
                {[
                  { icon: <LocalFloristIcon sx={{ color: "#B45309", fontSize: 22 }} />, title: "100% Authentic", subtitle: "From local farmers & SHGs" },
                  { icon: <HandshakeIcon sx={{ color: "#B45309", fontSize: 22 }} />, title: "Fair Trade", subtitle: "Direct income to producers" },
                  { icon: <VerifiedIcon sx={{ color: "#B45309", fontSize: 22 }} />, title: "Quality Assured", subtitle: "Packed with care" },
                  { icon: <LocalShippingIcon sx={{ color: "#B45309", fontSize: 22 }} />, title: "Door Delivery", subtitle: "Launching soon" },
                ].map((feature, i) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={i}>
                    <Box sx={{ 
                      bgcolor: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.05)", borderRadius: 3, p: 1.5, height: "100%", display: "flex", flexDirection: "column",
                      transition: "all 0.2s", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", "&:hover": { transform: "translateY(-2px)", bgcolor: "white", boxShadow: "0 6px 16px rgba(0,0,0,0.05)" }
                    }}>
                      {feature.icon}
                      <Typography sx={{ fontWeight: 800, fontSize: "0.75rem", mt: 1.5, color: "#1F1700", lineHeight: 1.2 }}>{feature.title}</Typography>
                      <Typography sx={{ fontSize: "0.65rem", color: "rgba(31,23,0,0.7)", mt: 0.5, lineHeight: 1.3 }}>{feature.subtitle}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }} sx={{ display: { xs: "none", lg: "block" } }}>
              <Grid container spacing={2}>
                {[
                  { url: "https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?w=500&q=80", label: "Organic Turmeric" },
                  { url: "https://images.unsplash.com/photo-1630623093145-f606591c2546?w=500&q=80", label: "Ginger" },
                  { url: "https://images.unsplash.com/photo-1506085621370-98b475435879?w=500&q=80", label: "Black Pepper" },
                  { url: "https://images.unsplash.com/photo-1771229389277-a0a7546913f9?w=500&q=80", label: "Tamarind" },
                  { url: "https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?w=500&q=80", label: "Raw Honey" },
                  { url: "https://images.unsplash.com/photo-1509912760195-4f6cfd8cce2c?w=500&q=80", label: "Premium Cashews" }
                ].map((img, i) => (
                  <Grid size={{ xs: 4 }} key={i}>
                    <Box sx={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: 4, overflow: "hidden", boxShadow: 4, border: "2px solid rgba(255,255,255,0.5)", transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)", zIndex: 10 } }}>
                      <Image src={img.url} alt={img.label} fill style={{ objectFit: "cover" }} unoptimized />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* Two continuously scrolling product bands */}
        <Box sx={{ overflow: "hidden", pb: { xs: 3, md: 4 }, mt: { xs: 2, md: 3 } }}>
          <Stack spacing={2} sx={{ width: "max-content" }}>
            {/* Row 1: Leftward scroll */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: "max-content",
                animation: `${scrollAnimation} 60s linear infinite`,
                "&:hover": { animationPlayState: "paused" }
              }}
            >
              {[...allProducts.slice(0, 9), ...allProducts.slice(0, 9)].map((prod, i) => (
                <Box key={i} sx={{ position: "relative", width: { xs: 110, sm: 140 }, height: { xs: 110, sm: 140 }, borderRadius: 3, overflow: "hidden", flexShrink: 0, boxShadow: 1, border: "1px solid rgba(0,0,0,0.1)", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)", zIndex: 10 } }}>
                  <Image src={prod.url} alt={prod.name} fill style={{ objectFit: "cover" }} unoptimized />
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%)" }} />
                  <Typography sx={{ position: "absolute", bottom: 8, left: 8, right: 8, color: "white", fontSize: "0.65rem", fontWeight: 600, lineHeight: 1.2 }}>{prod.name}</Typography>
                  <Typography sx={{ position: "absolute", top: 6, left: 6, bgcolor: "#FFC107", color: "#1E293B", fontSize: "0.55rem", fontWeight: 800, px: 1, py: 0.25, borderRadius: 2 }}>{prod.tag}</Typography>
                </Box>
              ))}
            </Stack>

            {/* Row 2: Rightward scroll (reverse) */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: "max-content",
                ml: "-200px !important", // Offset so it doesn't align exactly
                animation: `${scrollAnimation} 60s linear infinite reverse`,
                "&:hover": { animationPlayState: "paused" }
              }}
            >
              {[...allProducts.slice(9), ...allProducts.slice(9)].map((prod, i) => (
                <Box key={i} sx={{ position: "relative", width: { xs: 110, sm: 140 }, height: { xs: 110, sm: 140 }, borderRadius: 3, overflow: "hidden", flexShrink: 0, boxShadow: 1, border: "1px solid rgba(0,0,0,0.1)", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)", zIndex: 10 } }}>
                  <Image src={prod.url} alt={prod.name} fill style={{ objectFit: "cover" }} unoptimized />
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%)" }} />
                  <Typography sx={{ position: "absolute", bottom: 8, left: 8, right: 8, color: "white", fontSize: "0.65rem", fontWeight: 600, lineHeight: 1.2 }}>{prod.name}</Typography>
                  <Typography sx={{ position: "absolute", top: 6, left: 6, bgcolor: "#FFC107", color: "#1E293B", fontSize: "0.55rem", fontWeight: 800, px: 1, py: 0.25, borderRadius: 2 }}>{prod.tag}</Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Main Commerce Grid */}
      <CommerceGrid />

      {/* Footer CTA Banner */}
      <Box sx={{ bgcolor: "#FFB300", py: 5, borderTop: "1px solid #FFCA28", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#1E293B", mb: 1 }}>
            Are you an SHG, FPO or artisan?
          </Typography>
          <Typography sx={{ color: "#000000", fontSize: "0.875rem", mb: 3, maxWidth: "600px", mx: "auto", fontWeight: 500 }}>
            List your products on Vizianagaram Mart. Reach new customers nationwide. Let District Rural Development Agency help you scale your business.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: "#0F172A", color: "white", px: 4, py: 1.5, borderRadius: 8, fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "#000000" } }}>
            Register as Seller
          </Button>
        </Container>
      </Box>
    </>
  );
}
