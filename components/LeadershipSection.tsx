"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import { leadershipProfiles, type LeadershipProfile } from "@/src/data/home";

export default function LeadershipSection() {
  const [selectedProfile, setSelectedProfile] = useState<LeadershipProfile | null>(null);

  return (
    <Box
      component="section"
      id="leadership"
      sx={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(circle at 50% 10%, rgba(254, 243, 199, 0.5) 0%, rgba(255, 255, 255, 0) 55%),
          linear-gradient(180deg, #FFFFFF 0%, #FFFDF8 100%)
        `,
        borderBottom: "1px solid #ECE4D0",
        borderTop: "1px solid #ECE4D0",
        py: { xs: 3, sm: 3.5, md: 4.5 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 4, md: 5.5 }, textAlign: "center", maxWidth: 820, mx: "auto" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ mb: 1.2 }}
          >
            <Chip
              icon={<VerifiedRoundedIcon sx={{ fontSize: "15px !important", color: "#D97706" }} />}
              label="LEADERSHIP & GOVERNANCE"
              size="small"
              sx={{
                background: "rgba(245, 158, 11, 0.12)",
                border: "1.5px solid rgba(245, 158, 11, 0.35)",
                color: "#92400E",
                fontSize: "0.72rem",
                fontWeight: 850,
                letterSpacing: "0.12em",
                px: 1,
                py: 0.4,
                borderRadius: "50px",
              }}
            />
          </Stack>
          <Typography
            component="h2"
            sx={{
              color: "#082B50",
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
            }}
          >
            Guided by a Public Vision
          </Typography>
          <Typography
            sx={{
              color: "#64748B",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
              maxWidth: 720,
              mx: "auto",
              mt: 1.4,
            }}
          >
            Connecting state leadership, district administration, and rural development priorities to serve the citizens of Vizianagaram.
          </Typography>
        </Box>

        {/* Executive Showcase Grid - 5 Clean Studio Cards */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.2, sm: 2.2, lg: 2.5 },
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
          }}
        >
          {leadershipProfiles.map((profile, index) => {
            const isTopLeader = index === 0;
            return (
              <Card
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: isTopLeader ? "2px solid #FFC107" : "1px solid #E2E8F0",
                  borderRadius: "20px",
                  p: { xs: 1.8, sm: 2.2, md: 2.4 },
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: isTopLeader
                    ? "0 10px 25px -4px rgba(245, 158, 11, 0.2), 0 2px 6px rgba(0,0,0,0.04)"
                    : "0 4px 14px rgba(0,0,0,0.04)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#FFC107",
                    boxShadow: "0 16px 30px -6px rgba(8, 43, 80, 0.14)",
                    "& .portrait-photo": {
                      transform: "scale(1.04)",
                    },
                    "& .more-link": {
                      color: "#B45309",
                    },
                  },
                }}
              >
                {/* Official Star / Verified Badge for Top Leader */}
                {isTopLeader && (
                  <Chip
                    label="HON'BLE CM"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "#FEF3C7",
                      color: "#B45309",
                      fontWeight: 900,
                      fontSize: "0.6rem",
                      height: 20,
                      borderRadius: "4px",
                    }}
                  />
                )}

                {/* Portrait Frame - Circle Shape */}
                <Box
                  sx={{
                    width: { xs: 110, sm: 125, md: 130 },
                    height: { xs: 110, sm: 125, md: 130 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: isTopLeader ? "3px solid #FFC107" : "2.5px solid #E2E8F0",
                    boxShadow: isTopLeader
                      ? "0 6px 20px rgba(245, 158, 11, 0.28)"
                      : "0 6px 16px rgba(8, 43, 80, 0.1)",
                    backgroundColor: "#F8FAFC",
                    mb: 2,
                    position: "relative",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    component="img"
                    className="portrait-photo"
                    src={profile.image}
                    alt={profile.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: isTopLeader ? "contain" : "cover",
                      objectPosition: isTopLeader ? "center top" : (profile.imagePosition || "center 20%"),
                      p: isTopLeader ? 0.6 : 0,
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>

                {/* Designation / Role Pill */}
                <Typography
                  sx={{
                    color: "#D97706",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    lineHeight: 1.25,
                    mb: 0.6,
                    minHeight: { sm: "2.5em" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {profile.designation}
                </Typography>

                {/* Leader Name */}
                <Typography
                  component="h3"
                  sx={{
                    color: "#082B50",
                    fontSize: { xs: "0.92rem", sm: "1rem" },
                    fontWeight: 900,
                    lineHeight: 1.25,
                    mb: 0.4,
                    minHeight: { sm: "2.6em" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {profile.name}
                </Typography>

                {/* Department / Organization */}
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    minHeight: { sm: "2.7em" },
                    mb: 1.4,
                  }}
                >
                  {profile.organization}
                </Typography>

                {/* Compact View Details Link */}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={0.5}
                  className="more-link"
                  sx={{
                    color: "#D97706",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    mt: "auto",
                    transition: "color 0.2s ease",
                  }}
                >
                  <span>Know More</span>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />
                </Stack>
              </Card>
            );
          })}
        </Box>
      </Container>

      {/* Profile Detail Dialog */}
      <Dialog
        aria-labelledby="leadership-dialog-title"
        fullWidth
        maxWidth="sm"
        onClose={() => setSelectedProfile(null)}
        open={Boolean(selectedProfile)}
        PaperProps={{
          sx: {
            background: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          },
        }}
      >
        {selectedProfile ? (
          <>
            <DialogTitle
              id="leadership-dialog-title"
              sx={{
                background: "radial-gradient(ellipse at top, #FEF3C7 0%, #FFFFFF 100%)",
                borderBottom: "1px solid #F3F4F6",
                pb: 2.5,
                pr: 7,
                pt: 3,
                textAlign: "center",
              }}
            >
              <Avatar
                alt={selectedProfile.name}
                src={selectedProfile.image}
                sx={{
                  border: "4px solid #F59E0B",
                  boxShadow: "0 8px 24px -4px rgba(245, 158, 11, 0.35)",
                  height: 96,
                  mx: "auto",
                  mb: 1.5,
                  width: 96,
                  "& img": {
                    objectPosition: selectedProfile.imagePosition || "center 25%",
                  },
                }}
              />
              <Typography
                component="span"
                sx={{
                  color: "#18181B",
                  display: "block",
                  fontSize: "1.45rem",
                  fontWeight: 850,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {selectedProfile.name}
              </Typography>
              <Typography
                sx={{
                  color: "#D97706",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  mt: 0.4,
                }}
              >
                {selectedProfile.designation}
              </Typography>
              <Typography sx={{ color: "#71717A", fontSize: "0.78rem", mt: 0.2 }}>
                {selectedProfile.organization}
              </Typography>
            </DialogTitle>

            <IconButton
              aria-label="Close profile"
              onClick={() => setSelectedProfile(null)}
              sx={{
                background: "rgba(0,0,0,0.05)",
                color: "#52525B",
                position: "absolute",
                right: 14,
                top: 14,
                "&:hover": { background: "rgba(0,0,0,0.1)" },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            <DialogContent dividers sx={{ borderColor: "#F3F4F6", p: { xs: 2.5, sm: 3.5 } }}>
              {/* Vision Quote Box */}
              <Box
                sx={{
                  background: "#FFFBEB",
                  border: "1px solid #FDE68A",
                  borderRadius: "14px",
                  p: 2.2,
                  position: "relative",
                }}
              >
                <Stack direction="row" spacing={1} sx={{ mb: 0.8 }}>
                  <FormatQuoteRoundedIcon sx={{ color: "#D97706", fontSize: 24 }} />
                  <Typography
                    sx={{
                      color: "#92400E",
                      fontSize: "0.78rem",
                      fontWeight: 850,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Public Vision
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#78350F", fontSize: "0.9rem", lineHeight: 1.7, pl: 0.5 }}>
                  {selectedProfile.vision}
                </Typography>
              </Box>

              <Typography
                component="h4"
                sx={{
                  color: "#18181B",
                  fontSize: "0.85rem",
                  fontWeight: 850,
                  letterSpacing: "0.04em",
                  mt: 3,
                  mb: 1.2,
                  textTransform: "uppercase",
                }}
              >
                Key Priorities & Objectives
              </Typography>
              <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.4, color: "#3F3F46" }}>
                {selectedProfile.priorities.map((priority) => (
                  <li key={priority}>
                    <Typography sx={{ fontSize: "0.88rem", lineHeight: 1.5 }}>
                      {priority}
                    </Typography>
                  </li>
                ))}
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2, background: "#FAFAFA" }}>
              <Button
                onClick={() => setSelectedProfile(null)}
                sx={{
                  background: "#18181B",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontWeight: 750,
                  px: 3,
                  "&:hover": { background: "#27272A" },
                }}
                variant="contained"
              >
                Close
              </Button>
            </DialogActions>
          </>
        ) : null}
      </Dialog>
    </Box>
  );
}
