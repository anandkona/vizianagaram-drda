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
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FFFDF5 0%, #F8F6F0 100%)",
        borderBottom: "1px solid #ECE4D0",
        borderTop: "1px solid #ECE4D0",
        py: { xs: 5, sm: 6, md: 8 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 4, md: 5.5 }, textAlign: { xs: "left", sm: "center" } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "flex-start", sm: "center" }}
            spacing={1}
            sx={{ mb: 1.2 }}
          >
            <Chip
              icon={<VerifiedRoundedIcon sx={{ fontSize: "14px !important", color: "#D97706" }} />}
              label="LEADERSHIP & GOVERNANCE"
              size="small"
              sx={{
                background: "rgba(245, 158, 11, 0.1)",
                border: "1px solid rgba(245, 158, 11, 0.25)",
                color: "#92400E",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                px: 0.5,
              }}
            />
          </Stack>
          <Typography
            component="h2"
            sx={{
              color: "#18181B",
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.1rem" },
              fontWeight: 850,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
            }}
          >
            Guided by a public vision
          </Typography>
          <Typography
            sx={{
              color: "#52525B",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
              maxWidth: 680,
              mx: { xs: 0, sm: "auto" },
              mt: 1.4,
            }}
          >
            Connecting state leadership, district administration, and rural development priorities to serve the citizens of Vizianagaram.
          </Typography>
        </Box>

        {/* Executive Showcase Grid */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.2, sm: 2.5, lg: 2.8 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(5, minmax(0, 1fr))",
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
                  border: isTopLeader
                    ? "1.5px solid rgba(245, 158, 11, 0.6)"
                    : "1px solid rgba(228, 228, 231, 0.85)",
                  borderRadius: "20px",
                  boxShadow: isTopLeader
                    ? "0 10px 28px -6px rgba(245, 158, 11, 0.18), 0 2px 8px -2px rgba(0, 0, 0, 0.04)"
                    : "0 6px 20px -4px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    borderColor: "#F59E0B",
                    boxShadow: "0 22px 35px -8px rgba(180, 83, 9, 0.2), 0 8px 16px -4px rgba(0, 0, 0, 0.05)",
                    transform: "translateY(-8px)",
                    "& .avatar-ring": {
                      borderColor: "#F59E0B",
                      boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.22)",
                      transform: "scale(1.05)",
                    },
                    "& .view-profile-btn": {
                      background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                      color: "#FFFFFF !important",
                      "& svg": {
                        transform: "translateX(4px)",
                      },
                    },
                  },
                }}
              >
                {/* Top Subtle Amber Bar */}
                <Box
                  sx={{
                    background: isTopLeader
                      ? "linear-gradient(90deg, #F59E0B, #FBBF24, #F59E0B)"
                      : "linear-gradient(90deg, rgba(245, 158, 11, 0.4), rgba(245, 158, 11, 0.1))",
                    height: 4,
                    width: "100%",
                  }}
                />

                <ButtonBase
                  aria-haspopup="dialog"
                  aria-label={`View profile for ${profile.name}`}
                  component="button"
                  onClick={() => setSelectedProfile(profile)}
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    p: { xs: 2.5, sm: 2.8, lg: 2.4 },
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {/* Circular Avatar with Glowing Ring */}
                  <Box sx={{ position: "relative", mb: 2.2 }}>
                    <Avatar
                      alt={profile.name}
                      className="avatar-ring"
                      src={profile.image}
                      sx={{
                        border: isTopLeader ? "3px solid #F59E0B" : "3px solid #E4E4E7",
                        boxShadow: "0 8px 22px -4px rgba(0, 0, 0, 0.15)",
                        height: { xs: 112, sm: 104, lg: 96 },
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        width: { xs: 112, sm: 104, lg: 96 },
                        "& img": {
                          objectPosition: profile.imagePosition || "center 25%",
                        },
                      }}
                    />
                    {isTopLeader && (
                      <Box
                        sx={{
                          alignItems: "center",
                          background: "#F59E0B",
                          borderRadius: "50%",
                          bottom: 0,
                          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                          color: "#FFFFFF",
                          display: "flex",
                          height: 24,
                          justifyContent: "center",
                          position: "absolute",
                          right: 0,
                          width: 24,
                        }}
                      >
                        <VerifiedRoundedIcon sx={{ fontSize: 16 }} />
                      </Box>
                    )}
                  </Box>

                  {/* Leader Name */}
                  <Typography
                    component="h3"
                    sx={{
                      color: "#18181B",
                      fontSize: "1rem",
                      fontWeight: 850,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      minHeight: { sm: "2.6em" },
                    }}
                  >
                    {profile.name}
                  </Typography>

                  {/* Role / Designation Pill */}
                  <Chip
                    label={profile.designation}
                    size="small"
                    sx={{
                      background: isTopLeader ? "rgba(245, 158, 11, 0.12)" : "#F4F4F5",
                      border: isTopLeader
                        ? "1px solid rgba(245, 158, 11, 0.3)"
                        : "1px solid rgba(228, 228, 231, 0.9)",
                      color: isTopLeader ? "#B45309" : "#3F3F46",
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      maxWidth: "100%",
                      mt: 1,
                      px: 0.5,
                      whiteSpace: "normal",
                      height: "auto",
                      py: 0.4,
                      "& .MuiChip-label": {
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: 1.25,
                        px: 0.8,
                      },
                    }}
                  />

                  {/* Organization */}
                  <Typography
                    sx={{
                      color: "#71717A",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      minHeight: { sm: "2.7em" },
                      mt: 1.2,
                    }}
                  >
                    {profile.organization}
                  </Typography>

                  {/* Interactive Button */}
                  <Box
                    className="view-profile-btn"
                    sx={{
                      alignItems: "center",
                      background: "rgba(244, 244, 245, 0.8)",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      borderRadius: "10px",
                      color: "#3F3F46",
                      display: "flex",
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      gap: 0.5,
                      justifyContent: "center",
                      mt: "auto",
                      pt: 0.8,
                      pb: 0.8,
                      px: 1.5,
                      transition: "all 0.25s ease",
                      width: "100%",
                    }}
                  >
                    <span>View Profile</span>
                    <ArrowForwardRoundedIcon
                      sx={{ fontSize: 14, transition: "transform 0.25s ease" }}
                    />
                  </Box>
                </ButtonBase>
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
