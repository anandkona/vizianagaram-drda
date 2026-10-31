"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CampaignIcon from "@mui/icons-material/Campaign";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { FeatureSectionView } from "@/components/FeaturePage";
import { pressReleases } from "@/src/data/portal";

const mediaClippingsData = [
  { id: 1, source: "Sakshi", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "Super Nari App Rally", page: 12, src: "https://drdamanyam.vercel.app/press/clippings/clip-01.jpg" },
  { id: 2, source: "Eenadu", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "Super Nari App Rally", page: 1, src: "https://drdamanyam.vercel.app/press/clippings/clip-02.jpg" },
  { id: 3, source: "Prajasakti", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "Super Nari App Rally", page: 1, src: "https://drdamanyam.vercel.app/press/clippings/clip-03.jpg" },
  { id: 4, source: "Visalandhra", date: "02 Jun 2026", title: "Super Nari App Rally", topic: "Super Nari App Rally", page: 1, src: "https://drdamanyam.vercel.app/press/clippings/clip-04.jpg" },
  { id: 5, source: "Eenadu", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "One Family One Entrepreneur", page: 1, src: "https://drdamanyam.vercel.app/press/clippings/clip-05.jpg" },
  { id: 6, source: "Andhra Prabha", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "One Family One Entrepreneur", page: 8, src: "https://drdamanyam.vercel.app/press/clippings/clip-06.jpg" },
  { id: 7, source: "Prajasakti", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "One Family One Entrepreneur", page: 1, src: "https://drdamanyam.vercel.app/press/clippings/clip-07.jpg" },
  { id: 8, source: "Andhra Jyothy", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "One Family One Entrepreneur", page: 9, src: "https://drdamanyam.vercel.app/press/clippings/clip-08.jpg" },
  { id: 9, source: "Andhra Jyothy", date: "02 Jun 2026", title: "One Family One Entrepreneur", topic: "One Family One Entrepreneur", page: 10, src: "https://drdamanyam.vercel.app/press/clippings/clip-01.jpg" },
  { id: 10, source: "Sakshi", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 12, src: "https://drdamanyam.vercel.app/press/clippings/clip-02.jpg" },
  { id: 11, source: "Eenadu", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 4, src: "https://drdamanyam.vercel.app/press/clippings/clip-03.jpg" },
  { id: 12, source: "Visalandhra", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 2, src: "https://drdamanyam.vercel.app/press/clippings/clip-04.jpg" },
  { id: 13, source: "Andhra Jyothy", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 10, src: "https://drdamanyam.vercel.app/press/clippings/clip-05.jpg" },
  { id: 14, source: "Eenadu", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 3, src: "https://drdamanyam.vercel.app/press/clippings/clip-06.jpg" },
  { id: 15, source: "Andhra Prabha", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 5, src: "https://drdamanyam.vercel.app/press/clippings/clip-07.jpg" },
  { id: 16, source: "Andhra Prabha", date: "02 Jun 2026", title: "NTR Bharosa Pensions", topic: "NTR Bharosa Pensions", page: 5, src: "https://drdamanyam.vercel.app/press/clippings/clip-08.jpg" },
];

export default function PressReleasesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");

  // Modal full-screen reader state
  const [activeClipIndex, setActiveClipIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const filteredClippings = useMemo(() => {
    return mediaClippingsData.filter((clip) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        clip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clip.source.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopic = selectedTopic === "all" || clip.topic === selectedTopic;
      const matchesSource = selectedSource === "all" || clip.source.toLowerCase() === selectedSource.toLowerCase();
      const matchesDate = selectedDate === "all" || clip.date === selectedDate;
      return matchesSearch && matchesTopic && matchesSource && matchesDate;
    });
  }, [searchQuery, selectedTopic, selectedSource, selectedDate]);

  const activeClip = activeClipIndex !== null ? filteredClippings[activeClipIndex] : null;

  return (
    <>
      {/* Official Yellow Gradient Hero with clean breadcrumbs and icon */}
      <PageIntro
        eyebrow="Media & Press Corner"
        title="Media Coverage & Press Releases"
        description="Official press summaries and regional newspaper clippings covering welfare schemes, livelihoods and district developments."
        icon="campaign"
        crumb="Press Releases"
      />

      {/* Tabs Switcher: Media Coverage (The Manyam reference section) vs Press Release Summaries */}
      <Box sx={{ borderBottom: "1px solid #E2E8F0", bgcolor: "#FFFFFF", position: "sticky", top: { xs: 56, sm: 64, md: 70 }, zIndex: 10 }}>
        <Container maxWidth="lg">
          <Tabs
            value={activeTab}
            onChange={(_, val) => setActiveTab(val)}
            sx={{
              "& .MuiTab-root": {
                fontWeight: 750,
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                textTransform: "none",
                py: 2,
                color: "#64748B",
                "&.Mui-selected": { color: "#1F1700" },
              },
              "& .MuiTabs-indicator": {
                bgcolor: "#FFC107",
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            <Tab label="Newspaper Clippings (#media-coverage)" />
            <Tab label="Official Press Summaries" />
          </Tabs>
        </Container>
      </Box>

      {/* Tab 0: DRDA Manyam style Media Coverage Section */}
      {activeTab === 0 && (
        <Box id="media-coverage" component="section" sx={{ py: { xs: 3, md: 4 }, bgcolor: "#F8FAFC", minHeight: "60vh" }}>
          <Container maxWidth="lg">
            {/* Header / Stats Block */}
            <Box sx={{ mb: 3 }}>
              <Chip
                icon={<NewspaperIcon sx={{ fontSize: "14px !important", color: "#D97706 !important" }} />}
                label="In the News"
                size="small"
                sx={{
                  background: "#FFF8E1",
                  color: "#D97706",
                  border: "1px solid #FFE082",
                  fontWeight: 800,
                  mb: 1.2,
                  fontSize: "0.72rem",
                  px: 0.5,
                }}
              />
              <Typography variant="h2" sx={{ fontWeight: 900, color: "#1F1700", fontSize: { xs: "1.4rem", md: "1.75rem" }, mb: 0.75, letterSpacing: "-0.02em" }}>
                District Newspaper Coverage
              </Typography>
              <Typography sx={{ fontSize: "0.875rem", color: "#64748B", maxWidth: 680, lineHeight: 1.5 }}>
                Coverage from regional & state dailies. Tap any clipping to open the full-screen reader —{" "}
                <Box component="span" sx={{ color: "#B45309", fontWeight: 800 }}>zoom in, pan</Box> and browse with the filmstrip.
              </Typography>

              {/* Stat Counters */}
              <Stack direction="row" flexWrap="wrap" alignItems="center" gap={3} sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontSize: "1.75rem", fontWeight: 900, color: "#1F1700", lineHeight: 1 }}>
                    {mediaClippingsData.length}
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.2, fontWeight: 700 }}>
                    Press<br />Clippings
                  </Typography>
                </Box>
                <Box sx={{ width: "1px", height: 28, bgcolor: "#CBD5E1" }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontSize: "1.75rem", fontWeight: 900, color: "#15803D", lineHeight: 1 }}>
                    100%
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.2, fontWeight: 700 }}>
                    Positive<br />Coverage
                  </Typography>
                </Box>
                <Box sx={{ width: "1px", height: 28, bgcolor: "#CBD5E1" }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CalendarMonthIcon sx={{ color: "#B45309", fontSize: 22 }} />
                  <Typography sx={{ fontSize: "0.7rem", color: "#64748B", lineHeight: 1.2, fontWeight: 700 }}>
                    As on<br />02 Jun 2026
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Filter Bar (Manyam Reference: Search + Topic + Source + Date + Counter) */}
            <Box
              sx={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 3,
                p: 0.75,
                mb: 3.5,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
                boxShadow: "0 4px 16px -2px rgba(15, 23, 42, 0.06)",
                gap: { xs: 1, md: 0 },
              }}
            >
              {/* Search */}
              <Box sx={{ flex: 1, minWidth: { xs: "100%", md: 240 }, display: "flex", alignItems: "center", px: 1.5, py: 0.5 }}>
                <SearchIcon sx={{ color: "#94A3B8", fontSize: 20, mr: 1 }} />
                <InputBase
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clippings by newspaper or topic..."
                  sx={{ width: "100%", fontSize: "0.85rem", color: "#1F1700", fontWeight: 500 }}
                />
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" }, width: "1px", bgcolor: "#E2E8F0", my: 0.75 }} />

              {/* Topic Select */}
              <Box sx={{ minWidth: { xs: "100%", md: 170 }, display: "flex", alignItems: "center", px: 1.5 }}>
                <FilterListIcon sx={{ color: "#94A3B8", fontSize: 18, mr: 1 }} />
                <Select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  size="small"
                  variant="standard"
                  disableUnderline
                  sx={{ width: "100%", "& .MuiSelect-select": { py: 1, fontSize: "0.82rem", fontWeight: 600, color: "#1F1700" } }}
                >
                  <MenuItem value="all">All Topics</MenuItem>
                  <MenuItem value="Super Nari App Rally">Super Nari App Rally</MenuItem>
                  <MenuItem value="One Family One Entrepreneur">One Family One Entrepreneur</MenuItem>
                  <MenuItem value="NTR Bharosa Pensions">NTR Bharosa Pensions</MenuItem>
                </Select>
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" }, width: "1px", bgcolor: "#E2E8F0", my: 0.75 }} />

              {/* Source Select */}
              <Box sx={{ minWidth: { xs: "100%", md: 150 }, display: "flex", alignItems: "center", px: 1.5 }}>
                <NewspaperIcon sx={{ color: "#94A3B8", fontSize: 18, mr: 1 }} />
                <Select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  size="small"
                  variant="standard"
                  disableUnderline
                  sx={{ width: "100%", "& .MuiSelect-select": { py: 1, fontSize: "0.82rem", fontWeight: 600, color: "#1F1700" } }}
                >
                  <MenuItem value="all">All Sources</MenuItem>
                  <MenuItem value="sakshi">Sakshi</MenuItem>
                  <MenuItem value="eenadu">Eenadu</MenuItem>
                  <MenuItem value="prajasakti">Prajasakti</MenuItem>
                  <MenuItem value="visalandhra">Visalandhra</MenuItem>
                  <MenuItem value="andhra prabha">Andhra Prabha</MenuItem>
                  <MenuItem value="andhra jyothy">Andhra Jyothy</MenuItem>
                </Select>
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" }, width: "1px", bgcolor: "#E2E8F0", my: 0.75 }} />

              {/* Date Select */}
              <Box sx={{ minWidth: { xs: "100%", md: 140 }, display: "flex", alignItems: "center", px: 1.5 }}>
                <CalendarMonthIcon sx={{ color: "#94A3B8", fontSize: 18, mr: 1 }} />
                <Select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  size="small"
                  variant="standard"
                  disableUnderline
                  sx={{ width: "100%", "& .MuiSelect-select": { py: 1, fontSize: "0.82rem", fontWeight: 600, color: "#1F1700" } }}
                >
                  <MenuItem value="all">All Dates</MenuItem>
                  <MenuItem value="02 Jun 2026">02 Jun 2026</MenuItem>
                </Select>
              </Box>

              {/* Counter Pill */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 2,
                  py: 0.75,
                  bgcolor: "#FFF8E1",
                  border: "1px solid #FFE082",
                  borderRadius: 2,
                  m: 0.5,
                  whiteSpace: "nowrap",
                }}
              >
                <Typography sx={{ fontSize: "0.76rem", color: "#78350F", fontWeight: 700 }}>
                  Showing <Box component="span" sx={{ color: "#B45309", fontWeight: 900 }}>{filteredClippings.length}</Box>/{mediaClippingsData.length}
                </Typography>
              </Box>
            </Box>

            {/* Newspaper Clippings Grid (4 columns desktop, 3 tablet, 2 mobile) */}
            {filteredClippings.length === 0 ? (
              <Paper sx={{ p: 6, textAlign: "center", borderRadius: 3, bgcolor: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                <Typography sx={{ color: "#64748B", fontWeight: 600 }}>
                  No newspaper clippings match the selected criteria.
                </Typography>
                <Button onClick={() => { setSearchQuery(""); setSelectedTopic("all"); setSelectedSource("all"); setSelectedDate("all"); }} sx={{ mt: 1.5, color: "#B45309", fontWeight: 700 }}>
                  Reset Filters
                </Button>
              </Paper>
            ) : (
              <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                {filteredClippings.map((clip, idx) => (
                  <Grid key={clip.id} size={{ xs: 6, sm: 4, md: 3 }}>
                    <Box
                      onClick={() => { setActiveClipIndex(idx); setZoomLevel(1); }}
                      sx={{
                        display: "block",
                        width: "100%",
                        aspectRatio: "1369/1937",
                        borderRadius: 3,
                        overflow: "hidden",
                        border: "1px solid #E2E8F0",
                        bgcolor: "#FFFFFF",
                        position: "relative",
                        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
                        transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
                        cursor: "pointer",
                        "&:hover": {
                          boxShadow: "0 14px 28px -4px rgba(0,0,0,0.18)",
                          transform: "translateY(-4px)",
                          "& .zoom-icon": { opacity: 1, transform: "scale(1)" },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={clip.src}
                        alt={`${clip.source} — ${clip.title}`}
                        sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                      />

                      {/* Hover Zoom Indicator */}
                      <Box
                        className="zoom-icon"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "rgba(0, 0, 0, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          transform: "scale(0.9)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Box sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
                          <ZoomInIcon sx={{ color: "#1F1700", fontSize: 24 }} />
                        </Box>
                      </Box>

                      {/* Bottom Newspaper & Date Banner */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          pt: 4,
                          pb: 1,
                          px: 1.25,
                          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            bgcolor: "#FFC107",
                            color: "#161102",
                            fontSize: "0.62rem",
                            fontWeight: 800,
                            px: 1,
                            py: 0.3,
                            borderRadius: 10,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {clip.source}
                        </Box>
                        <Box component="span" sx={{ color: "#FFFFFF", fontSize: "0.65rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 0.5 }}>
                          <CalendarMonthIcon sx={{ fontSize: 11 }} /> {clip.date}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </Box>
      )}

      {/* Tab 1: Official Press Summaries Section */}
      {activeTab === 1 && (
        <Box sx={{ py: 3, bgcolor: "#FFFFFF" }}>
          <Container maxWidth="lg">
            {pressReleases.sections.map((section, idx) => (
              <FeatureSectionView key={`${section.title}-${idx}`} section={section} index={idx} />
            ))}
          </Container>
        </Box>
      )}

      {/* Interactive Full-Screen Reader Modal (Zoom, Pan, Filmstrip) */}
      <Dialog
        fullScreen
        open={activeClipIndex !== null}
        onClose={() => setActiveClipIndex(null)}
        PaperProps={{ sx: { bgcolor: "#0F172A", color: "#FFFFFF" } }}
      >
        {activeClip && (
          <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Top Toolbar */}
            <Box
              sx={{
                bgcolor: "#1E293B",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                px: 2,
                py: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
                <Chip label={activeClip.source} sx={{ bgcolor: "#FFC107", color: "#161102", fontWeight: 800, fontSize: "0.75rem" }} size="small" />
                <Typography noWrap sx={{ fontSize: "0.9rem", fontWeight: 750, color: "#FFFFFF" }}>
                  {activeClip.title} — {activeClip.date} {activeClip.page ? `(Page ${activeClip.page})` : ""}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))} sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.1)" }} title="Zoom Out">
                  <ZoomOutIcon />
                </IconButton>
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, minWidth: 45, textAlign: "center" }}>
                  {Math.round(zoomLevel * 100)}%
                </Typography>
                <IconButton onClick={() => setZoomLevel((z) => Math.min(3, z + 0.2))} sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.1)" }} title="Zoom In">
                  <ZoomInIcon />
                </IconButton>
                <IconButton onClick={() => setZoomLevel(1)} sx={{ color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.1)" }} title="Reset Zoom">
                  <RestartAltIcon />
                </IconButton>
                <IconButton onClick={() => setActiveClipIndex(null)} sx={{ color: "#FFFFFF", bgcolor: "#EF4444", "&:hover": { bgcolor: "#DC2626" }, ml: 1 }}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* Viewer Canvas */}
            <Box
              sx={{
                flex: 1,
                overflow: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 1, md: 3 },
                bgcolor: "#090D16",
                position: "relative",
              }}
            >
              {/* Prev / Next Arrows */}
              <IconButton
                disabled={activeClipIndex === 0}
                onClick={() => { setActiveClipIndex((idx) => (idx !== null && idx > 0 ? idx - 1 : idx)); setZoomLevel(1); }}
                sx={{
                  position: "fixed",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(30, 41, 59, 0.8)",
                  color: "#FFFFFF",
                  zIndex: 20,
                  "&:hover": { bgcolor: "#334155" },
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: 32 }} />
              </IconButton>

              <Box
                component="img"
                src={activeClip.src}
                alt={activeClip.title}
                sx={{
                  maxHeight: zoomLevel === 1 ? "80vh" : "none",
                  maxWidth: zoomLevel === 1 ? "90%" : "none",
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center top",
                  transition: "transform 0.15s ease",
                  borderRadius: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                }}
              />

              <IconButton
                disabled={activeClipIndex === filteredClippings.length - 1}
                onClick={() => { setActiveClipIndex((idx) => (idx !== null && idx < filteredClippings.length - 1 ? idx + 1 : idx)); setZoomLevel(1); }}
                sx={{
                  position: "fixed",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(30, 41, 59, 0.8)",
                  color: "#FFFFFF",
                  zIndex: 20,
                  "&:hover": { bgcolor: "#334155" },
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Box>

            {/* Bottom Filmstrip */}
            <Box
              sx={{
                bgcolor: "#1E293B",
                p: 1.5,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                gap: 1.5,
                overflowX: "auto",
                justifyContent: { xs: "flex-start", md: "center" },
              }}
            >
              {filteredClippings.map((thumb, idx) => (
                <Box
                  key={thumb.id}
                  onClick={() => { setActiveClipIndex(idx); setZoomLevel(1); }}
                  sx={{
                    width: 50,
                    height: 70,
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    border: activeClipIndex === idx ? "2.5px solid #FFC107" : "1px solid rgba(255,255,255,0.2)",
                    opacity: activeClipIndex === idx ? 1 : 0.6,
                    flexShrink: 0,
                    transition: "all 0.15s ease",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Box component="img" src={thumb.src} alt={thumb.source} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  );
}
