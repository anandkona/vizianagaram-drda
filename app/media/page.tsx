"use client";

import { useEffect, useMemo, useState } from "react";
import { Box, Card, CardContent, Chip, Container, Grid, Stack, Tab, Tabs, Typography, InputBase, Select, MenuItem, Breadcrumbs } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { PortalIcon } from "@/components/Icon";
import { mediaItems, type MediaItem } from "@/src/data/district";

export default function MediaPage() {
  const allClippings = useMemo(() => [
    { id: 1, source: "Sakshi", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 2, source: "Eenadu", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 3, source: "Prajasakti", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 4, source: "Visalandhra", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 5, source: "Eenadu", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 6, source: "Andhra Prabha", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 7, source: "Prajasakti", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 8, source: "Andhra Jyothy", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 9, source: "Sakshi", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 10, source: "Eenadu", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 11, source: "Prajasakti", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 12, source: "Visalandhra", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 13, source: "Andhra Prabha", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 14, source: "Andhra Jyothy", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" },
    { id: 15, source: "Sakshi", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "family" },
    { id: 16, source: "Eenadu", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "super" }
  ], []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");

  const filteredClippings = useMemo(() => {
    return allClippings.filter((clip) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        clip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clip.source.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopic = selectedTopic === "all" || clip.topic === selectedTopic;
      const matchesSource = selectedSource === "all" || clip.source.toLowerCase() === selectedSource.toLowerCase();
      const matchesDate = selectedDate === "all" || clip.date === selectedDate;
      return matchesSearch && matchesTopic && matchesSource && matchesDate;
    });
  }, [allClippings, searchQuery, selectedTopic, selectedSource, selectedDate]);

  return (
    <>
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
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
            <Typography sx={{ color: "#2B2100", fontSize: "0.8rem", fontWeight: 700 }}>Media Coverage</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            <CampaignIcon sx={{ color: "#2B2100", fontSize: { xs: 32, sm: 36 }, mr: 1, verticalAlign: "middle" }} />
            Media Coverage
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Newspaper clippings featuring DRDA Parvathipuram Manyam from regional & state dailies.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ pt: { xs: 1.5, md: 2 }, pb: { xs: 1.5, md: 2 }, background: "#F8FAFC" }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 1.5 }}>
            <Chip icon={<NewspaperIcon sx={{ fontSize: "14px !important", color: "inherit !important" }} />} label="In the News" size="small" sx={{ background: "#FFF8E1", color: "#D97706", border: "1px solid #FFE082", fontWeight: 800, mb: 1, fontSize: "0.7rem", px: 0.5 }} />
            <Typography sx={{ fontSize: "0.85rem", color: "#64748B", maxWidth: 650 }}>
              Coverage from regional & state dailies. Tap any clipping to open the full-screen reader — <Box component="span" sx={{ color: "#D5A623", fontWeight: 800 }}>zoom in, pan</Box> and browse with the filmstrip.
            </Typography>
            <Stack direction="row" flexWrap="wrap" alignItems="center" gap={2.5} sx={{ mt: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <Typography sx={{ fontSize: "1.6rem", fontWeight: 900, color: "#D5A623", lineHeight: 1 }}>16</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.2, fontWeight: 600 }}>Press<br />Clippings</Typography>
              </Box>
              <Box sx={{ width: "1px", height: 28, bgcolor: "#E2E8F0" }} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <Typography sx={{ fontSize: "1.6rem", fontWeight: 900, color: "#2E7D32", lineHeight: 1 }}>100%</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.2, fontWeight: 600 }}>Positive<br />Coverage</Typography>
              </Box>
              <Box sx={{ width: "1px", height: 28, bgcolor: "#E2E8F0" }} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <CalendarMonthIcon sx={{ color: "#D5A623", fontSize: 20 }} />
                <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.2, fontWeight: 700 }}>As on<br />02 Jun 2026</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Unified Segmented Single Filter Bar (No inner cards, clean vertical dividers) */}
          <Box sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 2.5,
            p: 0.5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            boxShadow: "0 4px 16px -2px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(0,0,0,0.02)",
            overflow: "hidden"
          }}>
            {/* Search Input Segment */}
            <Box sx={{
              flex: 1,
              minWidth: { xs: "100%", md: 240 },
              position: "relative",
              display: "flex",
              alignItems: "center",
              px: 1.5,
              py: 0.5
            }}>
              <SearchIcon sx={{ color: "#94A3B8", fontSize: 19, mr: 1 }} />
              <InputBase
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search clippings by newspaper or title..."
                sx={{
                  width: "100%",
                  fontSize: "0.85rem",
                  color: "#0F172A",
                  "& input": { p: 0.5 }
                }}
              />
            </Box>

            {/* Vertical Divider */}
            <Box sx={{ display: { xs: "none", md: "block" }, width: "1px", bgcolor: "#E2E8F0", my: 0.75 }} />

            {/* Topic Select Segment */}
            <Box sx={{
              minWidth: { xs: "100%", md: 160 },
              display: "flex",
              alignItems: "center",
              px: 1.5,
              py: { xs: 0.5, md: 0 }
            }}>
              <FilterListIcon sx={{ color: "#94A3B8", fontSize: 17, mr: 1, pointerEvents: "none" }} />
              <Select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  width: "100%",
                  "& .MuiSelect-select": { py: 1, fontSize: "0.82rem", fontWeight: 600, color: "#1E293B" }
                }}
              >
                <MenuItem value="all" sx={{ fontSize: "0.82rem" }}>All Topics</MenuItem>
                <MenuItem value="super" sx={{ fontSize: "0.82rem" }}>Super Nari App Rally</MenuItem>
                <MenuItem value="family" sx={{ fontSize: "0.82rem" }}>One Family One Entrepreneur</MenuItem>
              </Select>
            </Box>

            {/* Vertical Divider */}
            <Box sx={{ display: { xs: "none", md: "block" }, width: "1px", bgcolor: "#E2E8F0", my: 0.75 }} />

            {/* Source Select Segment */}
            <Box sx={{
              minWidth: { xs: "100%", md: 150 },
              display: "flex",
              alignItems: "center",
              px: 1.5,
              py: { xs: 0.5, md: 0 }
            }}>
              <NewspaperIcon sx={{ color: "#94A3B8", fontSize: 17, mr: 1, pointerEvents: "none" }} />
              <Select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  width: "100%",
                  "& .MuiSelect-select": { py: 1, fontSize: "0.82rem", fontWeight: 600, color: "#1E293B" }
                }}
              >
                <MenuItem value="all" sx={{ fontSize: "0.82rem" }}>All Sources</MenuItem>
                <MenuItem value="sakshi" sx={{ fontSize: "0.82rem" }}>Sakshi</MenuItem>
                <MenuItem value="eenadu" sx={{ fontSize: "0.82rem" }}>Eenadu</MenuItem>
                <MenuItem value="prajasakti" sx={{ fontSize: "0.82rem" }}>Prajasakti</MenuItem>
                <MenuItem value="visalandhra" sx={{ fontSize: "0.82rem" }}>Visalandhra</MenuItem>
                <MenuItem value="andhra prabha" sx={{ fontSize: "0.82rem" }}>Andhra Prabha</MenuItem>
                <MenuItem value="andhra jyothy" sx={{ fontSize: "0.82rem" }}>Andhra Jyothy</MenuItem>
              </Select>
            </Box>

            {/* Vertical Divider */}
            <Box sx={{ display: { xs: "none", md: "block" }, width: "1px", bgcolor: "#E2E8F0", my: 0.75 }} />

            {/* Date Select Segment */}
            <Box sx={{
              minWidth: { xs: "100%", md: 145 },
              display: "flex",
              alignItems: "center",
              px: 1.5,
              py: { xs: 0.5, md: 0 }
            }}>
              <CalendarMonthIcon sx={{ color: "#94A3B8", fontSize: 17, mr: 1, pointerEvents: "none" }} />
              <Select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  width: "100%",
                  "& .MuiSelect-select": { py: 1, fontSize: "0.82rem", fontWeight: 600, color: "#1E293B" }
                }}
              >
                <MenuItem value="all" sx={{ fontSize: "0.82rem" }}>All Dates</MenuItem>
                <MenuItem value="02 Jun 2026" sx={{ fontSize: "0.82rem" }}>02 Jun 2026</MenuItem>
              </Select>
            </Box>

            {/* Right Badge / Counter */}
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
              py: 0.75,
              bgcolor: "#FFFBEB",
              borderLeft: { md: "1px solid #FEF3C7" },
              borderRadius: { xs: 1.5, md: 2 },
              m: 0.5,
              whiteSpace: "nowrap"
            }}>
              <Typography sx={{ fontSize: "0.76rem", color: "#92400E", fontWeight: 600 }}>
                Showing <Box component="span" sx={{ color: "#B45309", fontWeight: 800 }}>{filteredClippings.length}</Box>/{allClippings.length}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          background: "#FFFFFF",
          minHeight: 360,
          py: { xs: 1.5, md: 2 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {filteredClippings.length === 0 ? (
            <Box sx={{ py: 8, textAlign: "center" }}>
              <Typography sx={{ color: "#64748B", fontSize: "0.95rem", fontWeight: 600 }}>
                No newspaper clippings match the selected criteria.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {filteredClippings.map((clip) => (
                <Grid key={clip.id} size={{ xs: 6, sm: 4, md: 3, lg: 3 }}>
                  <Box
                    sx={{
                      display: "block",
                      width: "100%",
                      aspectRatio: "1369/1937",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid #E2E8F0",
                      bgcolor: "white",
                      position: "relative",
                      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                      transition: "transform 200ms ease, box-shadow 200ms ease",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                        transform: "translateY(-4px)"
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={`https://drdamanyam.vercel.app/press/clippings/clip-0${((clip.id - 1) % 8) + 1}.jpg`}
                      alt={`${clip.source} - ${clip.title}`}
                      sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />

                    {/* Overlay */}
                    <Box sx={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0,
                      pt: 4, pb: 1, px: 1.5,
                      background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1
                    }}>
                      <Box component="span" sx={{
                        bgcolor: "#FFC107", color: "#1E293B", fontSize: "0.55rem", fontWeight: 800,
                        px: 1, py: 0.25, borderRadius: 10, whiteSpace: "nowrap"
                      }}>
                        {clip.source}
                      </Box>
                      <Box component="span" sx={{
                        color: "white", fontSize: "0.6rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 0.5
                      }}>
                        <CalendarMonthIcon sx={{ fontSize: 10 }} /> {clip.date}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}


