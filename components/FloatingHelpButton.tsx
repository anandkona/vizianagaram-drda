"use client";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  ButtonBase,
  Collapse,
  Fab,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePortalUI } from "@/components/PortalUIContext";

export default function FloatingHelpButton() {
  const [expanded, setExpanded] = useState(false);
  const { openConcern } = usePortalUI();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const handleConcern = () => {
    setExpanded(false);
    openConcern();
  };

  const helpOptions = [
    { 
      title: "WhatsApp Help", 
      subtitle: "8008105555", 
      icon: <WhatsAppIcon sx={{ fontSize: 28 }} />, 
      color: "#22C55E", 
      href: "https://wa.me/918008105555" 
    },
    { 
      title: "Call DRDA", 
      subtitle: "08954-220123", 
      icon: <CallRoundedIcon sx={{ fontSize: 28 }} />, 
      color: "#0F766E", 
      href: "tel:08954220123" 
    },
    { 
      title: "Share Your Concern", 
      subtitle: "Tell us your issue", 
      icon: <DescriptionRoundedIcon sx={{ fontSize: 28 }} />, 
      color: "#0284C7", 
      action: handleConcern 
    },
    { 
      title: "Give Feedback", 
      subtitle: "Rate our services", 
      icon: <StarBorderRoundedIcon sx={{ fontSize: 28 }} />, 
      color: "#8B5CF6", 
      href: "/feedback" 
    },
    { 
      title: "Scheme Finder", 
      subtitle: "Find your scheme", 
      icon: <LanguageRoundedIcon sx={{ fontSize: 28 }} />, 
      color: "#D97706", 
      href: "/schemes" 
    },
  ];

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "fixed",
        bottom: { xs: "calc(82px + env(safe-area-inset-bottom, 0px))", sm: 24 },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        right: { xs: 12, sm: 24 },
        zIndex: (theme) => theme.zIndex.speedDial,
      }}
    >
      <Collapse in={expanded} orientation="vertical" timeout="auto" unmountOnExit>
        <Box sx={{ mb: 2, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <Box sx={{ bgcolor: "#1E293B", color: "white", px: 2, py: 0.5, borderRadius: 8, fontSize: "0.75rem", fontWeight: 700, mb: 1.5, mr: 1 }}>
            Citizen Help Center
          </Box>
          <Stack spacing={1}>
            {helpOptions.map((opt, i) => (
              <ButtonBase
                key={i}
                component={opt.href ? Link : "button"}
                href={opt.href}
                onClick={opt.action ? opt.action : () => setExpanded(false)}
                sx={{
                  bgcolor: opt.color,
                  color: "white",
                  borderRadius: 3,
                  py: 1.5,
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: 260,
                  textAlign: "left",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s, filter 0.2s",
                  "&:hover": { filter: "brightness(1.1)", transform: "scale(1.02)" }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                  {opt.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1.2 }}>{opt.title}</Typography>
                  <Typography sx={{ fontSize: "0.75rem", opacity: 0.9, lineHeight: 1.2, mt: 0.2 }}>{opt.subtitle}</Typography>
                </Box>
              </ButtonBase>
            ))}
          </Stack>
        </Box>
      </Collapse>

      <Tooltip disableHoverListener={expanded} placement="left" title="Citizen Help Center">
        <Fab
          aria-controls="floating-help-actions"
          aria-expanded={expanded}
          aria-label={expanded ? "Close quick help actions" : "Open citizen quick help actions"}
          onClick={() => setExpanded((current) => !current)}
          sx={{
            alignSelf: "flex-end",
            background: expanded ? "#1E293B" : "linear-gradient(135deg, #FFC107, #8A6500)",
            color: expanded ? "white" : "#2B2100",
            height: { xs: 54, sm: 64 },
            width: { xs: 54, sm: 64 },
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            "&:hover": { background: expanded ? "#0F172A" : "linear-gradient(135deg, #FFE082, #A87900)" },
          }}
        >
          {expanded ? <CloseRoundedIcon sx={{ fontSize: 32 }} /> : <SupportAgentRoundedIcon sx={{ fontSize: { xs: 28, sm: 34 } }} />}
        </Fab>
      </Tooltip>
    </Box>
  );
}
