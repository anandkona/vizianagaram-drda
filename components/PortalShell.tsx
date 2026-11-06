"use client";

import type { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PortalShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Box
        component="a"
        href="#main-content"
        sx={{
          background: "#FFC107",
          border: "2px solid #2B2100",
          borderRadius: 1.5,
          color: "#2B2100",
          fontSize: "0.82rem",
          fontWeight: 850,
          left: 12,
          padding: "10px 15px",
          position: "fixed",
          top: -100,
          zIndex: 2000,
          "&:focus": { top: 12 },
        }}
      >
        Skip to main content
      </Box>

      <Header />
      <Box
        id="main-content"
        component="main"
        tabIndex={-1}
        sx={{ minHeight: "60vh", overflow: "hidden" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
