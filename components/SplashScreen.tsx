"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 2400;
const SPLASH_FADE_START_MS = 2100;

export default function SplashScreen() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(
      () => setLeaving(true),
      SPLASH_FADE_START_MS,
    );
    const finishTimer = window.setTimeout(
      () => setMounted(false),
      SPLASH_DURATION_MS,
    );

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      aria-label="Loading Vizianagaram district portal"
      aria-live="polite"
      className={`portal-splash-overlay${leaving ? " portal-splash-overlay--leaving" : ""}`}
      role="status"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        aria-hidden="true"
        className="portal-splash-ring"
        sx={{ left: "50%", ml: "-7rem", mt: "-7rem", top: "50%" }}
      />
      <Box
        aria-hidden="true"
        className="portal-splash-ring portal-splash-ring--second"
        sx={{ left: "50%", ml: "-11.25rem", mt: "-11.25rem", top: "50%" }}
      />
      <Box
        aria-hidden="true"
        className="portal-splash-ring portal-splash-ring--third"
        sx={{ left: "50%", ml: "-15rem", mt: "-15rem", top: "50%" }}
      />

      <Stack
        alignItems="center"
        spacing={{ xs: 1.5, sm: 1.8 }}
        sx={{ maxWidth: 620, position: "relative", textAlign: "center", zIndex: 1 }}
      >
        <Box
          className="portal-splash-emblem"
          sx={{
            alignItems: "center",
            background: "#FFFFFF",
            border: "4px solid rgba(255, 255, 255, 0.9)",
            borderRadius: "50%",
            display: "flex",
            height: { xs: 112, sm: 142 },
            justifyContent: "center",
            overflow: "hidden",
            width: { xs: 112, sm: 142 },
          }}
        >
          <Box
            alt="Government of Andhra Pradesh emblem"
            component="img"
            src="/emblem-of-andhra-pradesh.jpg"
            sx={{ height: "100%", objectFit: "contain", width: "100%" }}
          />
        </Box>

        <Box className="portal-splash-title">
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.78)",
              fontSize: { xs: "0.66rem", sm: "0.75rem" },
              fontWeight: 750,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Government of Andhra Pradesh
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.65rem", sm: "2.25rem" },
              fontWeight: 850,
              letterSpacing: "0.035em",
              lineHeight: 1.12,
              mt: 0.5,
              textShadow: "0 4px 20px rgba(25, 17, 0, 0.35)",
            }}
          >
            VIZIANAGARAM
          </Typography>
          <Typography
            sx={{
              color: "#FFE082",
              fontSize: { xs: "0.75rem", sm: "0.88rem" },
              fontWeight: 650,
              mt: 0.7,
            }}
          >
            District Rural Development Agency
          </Typography>
        </Box>

        <Box
          aria-hidden="true"
          className="portal-splash-progress-track"
        >
          <Box className="portal-splash-progress-bar" />
        </Box>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.7rem" }}>
          Citizen Services &amp; District Development Portal
        </Typography>
      </Stack>
    </Box>
  );
}
