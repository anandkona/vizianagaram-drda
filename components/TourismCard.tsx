"use client";

import Image from "next/image";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { TourismPlace } from "@/src/data/district";
import { PortalIcon } from "@/components/Icon";

export default function TourismCard({ place }: { place: TourismPlace }) {
  const isGold = place.accent === "gold";

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2.5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        transition: "all 180ms ease",
        "&:hover": {
          boxShadow: "0 8px 18px -4px rgba(15, 23, 42, 0.1)",
          transform: "translateY(-2px)",
          borderColor: "#FFC107",
          "& .card-img": {
            transform: "scale(1.05)",
          },
          "& .card-arrow": {
            transform: "translate(2px, -2px)",
            color: "#D97706",
          }
        },
      }}
    >
      {/* Compact Photo Header */}
      <Box
        sx={{
          height: 90,
          position: "relative",
          overflow: "hidden",
          bgcolor: isGold ? "#FEF3C7" : "#F1F5F9",
        }}
      >
        {place.image ? (
          <>
            <Image
              src={place.image}
              alt={place.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="card-img"
              style={{
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            {/* Subtle gradient overlay to make tags readable */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%)",
                pointerEvents: "none",
              }}
            />
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              background: isGold
                ? "linear-gradient(135deg, #F59E0B 0%, #D97706 60%, #B45309 100%)"
                : "linear-gradient(135deg, #1E293B 0%, #334155 70%, #475569 100%)",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1.5,
                bgcolor: "#FFF8E1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PortalIcon name={place.icon} sx={{ fontSize: 18, color: "#92400E" }} />
            </Box>
          </Box>
        )}

        {/* Category Tag Chip */}
        <Chip
          label={place.tag}
          size="small"
          sx={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
            top: 6,
            left: 6,
            color: "#0F172A",
            fontSize: "0.55rem",
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            position: "absolute",
            height: 16,
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          }}
        />

        {/* Small floating icon badge */}
        <Box
          sx={{
            position: "absolute",
            bottom: 5,
            right: 6,
            bgcolor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(4px)",
            color: "#1E293B",
            borderRadius: 1,
            width: 22,
            height: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <PortalIcon name={place.icon} sx={{ fontSize: 12 }} />
        </Box>
      </Box>

      {/* Card Content - Compact */}
      <CardContent sx={{ p: 1.25, display: "flex", flexDirection: "column", flexGrow: 1, "&:last-child": { pb: 1.25 } }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1}>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h3"
              sx={{
                color: "#0F172A",
                fontSize: "0.82rem",
                fontWeight: 800,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {place.name}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.3} sx={{ mt: 0.15 }}>
              <LocationOnIcon sx={{ fontSize: 10, color: "#D97706" }} />
              <Typography sx={{ color: "#64748B", fontSize: "0.65rem", fontWeight: 700 }}>
                {place.area}
              </Typography>
            </Stack>
          </Box>
          <ArrowOutwardIcon
            className="card-arrow"
            sx={{
              color: "#94A3B8",
              fontSize: 14,
              transition: "all 150ms ease",
              flexShrink: 0,
              mt: 0.1
            }}
          />
        </Stack>

        <Typography
          sx={{
            color: "#475569",
            fontSize: "0.7rem",
            lineHeight: 1.35,
            mt: 0.35,
            flexGrow: 1,
            fontWeight: 450,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
