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
        py: { xs: 5, sm: 6.5, md: 8.5 },
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

        {/* Executive Showcase Grid - Master Horizontal Official Cards */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.5, sm: 2.5, lg: 3 },
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
              xl: "repeat(3, minmax(0, 1fr))",
            },
          }}
        >
          {leadershipProfiles.map((profile, index) => {
            const isTopLeader = index === 0;
            return (
              <Card
                key={profile.id}
                sx={{
                  background: "#FFFFFF",
                  border: isTopLeader ? "2px solid #F59E0B" : "1.5px solid #E2E8F0",
                  borderRadius: "22px",
                  boxShadow: isTopLeader
                    ? "0 12px 32px -8px rgba(245, 158, 11, 0.22), 0 4px 12px rgba(8, 43, 80, 0.05)"
                    : "0 8px 24px -6px rgba(8, 43, 80, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    borderColor: "#F59E0B",
                    boxShadow: "0 20px 40px -10px rgba(8, 43, 80, 0.18), 0 8px 18px rgba(245, 158, 11, 0.2)",
                    transform: "translateY(-4px)",
                    "& .portrait-frame": {
                      borderColor: "#F59E0B",
                      boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.2)",
                    },
                    "& .action-btn": {
                      backgroundColor: "#FFC107",
                      color: "#082B50 !important",
                      borderColor: "#FFC107",
                    },
                  },
                }}
              >
                {/* Official Top Accent Ribbon */}
                <Box
                  sx={{
                    background: isTopLeader
                      ? "linear-gradient(90deg, #FFC107, #F59E0B, #D97706)"
                      : "linear-gradient(90deg, #082B50, #0C3C6E)",
                    height: 5,
                    width: "100%",
                  }}
                />

                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    gap: 2.5,
                    flex: 1,
                  }}
                >
                  {/* Left Column: Authentic Portrait with Verification Badge */}
                  <Box sx={{ position: "relative", flexShrink: 0, textAlign: "center" }}>
                    <Box
                      className="portrait-frame"
                      sx={{
                        width: { xs: 120, sm: 110 },
                        height: { xs: 135, sm: 130 },
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: isTopLeader ? "3px solid #F59E0B" : "2px solid #E2E8F0",
                        boxShadow: "0 6px 16px rgba(8, 43, 80, 0.12)",
                        backgroundColor: "#F8FAFC",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box
                        component="img"
                        src={profile.image}
                        alt={profile.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: isTopLeader ? "contain" : "cover",
                          objectPosition: isTopLeader ? "center top" : (profile.imagePosition || "center 20%"),
                          p: isTopLeader ? 0.5 : 0,
                        }}
                      />
                    </Box>

                    {/* Official Verified Emblem */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: -6,
                        right: -6,
                        bgcolor: isTopLeader ? "#F59E0B" : "#082B50",
                        color: "#FFFFFF",
                        borderRadius: "50%",
                        width: 24,
                        height: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                        border: "2px solid #FFFFFF",
                      }}
                    >
                      <VerifiedRoundedIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </Box>

                  {/* Right Column: Details, Priorities, and Action */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      minWidth: 0,
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {/* Role Pill */}
                    <Box sx={{ mb: 0.8 }}>
                      <Chip
                        label={profile.designation}
                        size="small"
                        sx={{
                          background: isTopLeader ? "rgba(245, 158, 11, 0.15)" : "#F1F5F9",
                          border: isTopLeader
                            ? "1px solid rgba(245, 158, 11, 0.4)"
                            : "1px solid #E2E8F0",
                          color: isTopLeader ? "#B45309" : "#334155",
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          height: 24,
                          borderRadius: "6px",
                        }}
                      />
                    </Box>

                    {/* Name */}
                    <Typography
                      component="h3"
                      sx={{
                        color: "#082B50",
                        fontSize: { xs: "1.05rem", sm: "1.12rem" },
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.25,
                        mb: 0.4,
                      }}
                    >
                      {profile.name}
                    </Typography>

                    {/* Organization */}
                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: "0.78rem",
                        fontWeight: 650,
                        lineHeight: 1.4,
                        mb: 1.4,
                      }}
                    >
                      {profile.organization}
                    </Typography>

                    {/* Vision Highlight Snippet */}
                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.76rem",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        mb: 2,
                      }}
                    >
                      {profile.vision}
                    </Typography>

                    {/* Action Button */}
                    <Box sx={{ mt: "auto" }}>
                      <Button
                        size="small"
                        className="action-btn"
                        onClick={() => setSelectedProfile(profile)}
                        endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "14px !important" }} />}
                        sx={{
                          backgroundColor: "#F8FAFC",
                          border: "1.5px solid #CBD5E1",
                          color: "#082B50 !important",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          px: 2,
                          py: 0.6,
                          borderRadius: "50px",
                          textTransform: "none",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor: "#FFC107",
                            borderColor: "#FFC107",
                          },
                        }}
                      >
                        Official Profile
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>
        {/* Bottom Verification Note */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="center"
          spacing={1.2}
          sx={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid #E4E4E7",
            borderRadius: "14px",
            color: "#52525B",
            maxWidth: 820,
            mx: "auto",
            mt: 4.5,
            p: { xs: 1.6, sm: 2 },
          }}
        >
          <GroupsRoundedIcon sx={{ color: "#D97706", flexShrink: 0, fontSize: 20 }} />
          <Typography sx={{ fontSize: "0.76rem", lineHeight: 1.5, textAlign: { sm: "center" } }}>
            Official leadership and administrative orientation profiles. For formal notifications, department gazettes, or queries, visit the relevant Andhra Pradesh Government departments.
          </Typography>
        </Stack>
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
