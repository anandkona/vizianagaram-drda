"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Avatar, Breadcrumbs, Link as MuiLink, InputBase, Tabs, Tab, CircularProgress, Pagination } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { officers, departments, hospitals, Department, Hospital } from '@/src/data/district';

function DirectoryContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab')?.toLowerCase();

  const [activeTab, setActiveTab] = useState<'officers' | 'departments' | 'hospitals'>('officers');
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (tabParam === 'departments') {
      setActiveTab('departments');
    } else if (tabParam === 'hospitals') {
      setActiveTab('hospitals');
    } else {
      setActiveTab('officers');
    }
  }, [tabParam]);

  const [deptPage, setDeptPage] = useState(1);
  const DEPT_PAGE_SIZE = 9; // Exactly 3x3 grid (3 columns x 3 rows = 9 cards)

  useEffect(() => {
    setDeptPage(1);
  }, [query, activeTab]);

  const normalized = query.trim().toLowerCase();
  
  const filteredOfficers = officers.filter((officer) => 
    `${officer.name} ${officer.designation} ${officer.department} ${officer.phone}`.toLowerCase().includes(normalized)
  );

  const filteredDepartments = departments.filter((dept) =>
    `${dept.name} ${dept.description} ${dept.services}`.toLowerCase().includes(normalized)
  );

  const totalDeptPages = Math.ceil(filteredDepartments.length / DEPT_PAGE_SIZE);
  const pagedDepartments = filteredDepartments.slice(
    (deptPage - 1) * DEPT_PAGE_SIZE,
    deptPage * DEPT_PAGE_SIZE
  );

  const filteredHospitals = hospitals.filter((hosp) =>
    `${hosp.name} ${hosp.type} ${hosp.location} ${hosp.phone} ${hosp.services}`.toLowerCase().includes(normalized)
  );

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#F9FAFB' }}>
      <Box sx={{ 
        position: "relative", 
        overflow: "hidden", 
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#FFD54F", 
        py: { xs: 2, md: 2.5 },
        }}>
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs separator="/" sx={{ color: "rgba(43,33,0,0.6)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <MuiLink underline="hover" style={{ color: "inherit", textDecoration: "none" }} href="/">Home</MuiLink>
            <Typography sx={{ color: "#1F1700", fontWeight: 700, fontSize: "0.8rem" }}>District Directory</Typography>
          </Breadcrumbs>
          
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Contact Directory
          </Typography>
          <Typography sx={{ color: "rgba(31,23,0,0.85)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            Find contact information for DRDA officers, block programme managers, and helplines.
          </Typography>
        </Container>
      </Box>

      {/* Helplines Section - Reduced Height */}
      <Box sx={{ py: { xs: 1.5, md: 2 }, bgcolor: 'white', borderBottom: '1px solid #E5E7EB' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="stretch" justifyContent="center">
            {[
              { phone: "08922-236966", name: "DRDA Main Office", time: "Mon–Sat, 9AM–5PM" },
              { phone: "1902", name: "AP PGRS Helpline", time: "24/7" },
              { phone: "1800-425-0808", name: "Toll Free Helpline", time: "Mon–Sat, 9AM–6PM" }
            ].map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} sx={{ display: 'flex' }}>
                <Box sx={{ 
                  bgcolor: '#FEFCE8', 
                  borderRadius: 2.5, 
                  p: { xs: 1.75, md: 2 },
                  border: '1px solid #FFE082', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 14px -3px rgba(0,0,0,0.06)'
                  }
                }}>
                  <Box>
                    <Typography sx={{ color: "#1F1700", fontWeight: 850, fontSize: { xs: '1.1rem', md: '1.2rem' }, mb: 0.25, letterSpacing: '-0.01em' }}>
                      {item.phone}
                    </Typography>
                    <Typography sx={{ color: '#1E293B', fontWeight: 700, fontSize: '0.85rem' }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '0.75rem', mt: 0.25 }}>
                      {item.time}
                    </Typography>
                  </Box>
                  <Button 
                    href={`tel:${item.phone.replace(/\D/g, '')}`}
                    variant="contained" 
                    disableElevation
                    sx={{ 
                      bgcolor: "#FFC107", color: "#1F1700", "&:hover": { bgcolor: "#FACC15", boxShadow: "none" },
                      borderRadius: 10,
                      textTransform: 'none',
                      fontWeight: 700,
                      px: 2,
                      py: 0.5,
                      mt: 1.25,
                      fontSize: '0.78rem',
                      alignSelf: 'center'
                    }}
                  >
                    Call Now
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Tabs Navigation & Search Section */}
      <Box sx={{ py: { xs: 1.5, md: 2 }, bgcolor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
            {/* Tabs */}
            <Tabs 
              value={activeTab} 
              onChange={(_, val) => setActiveTab(val)}
              sx={{
                minHeight: 40,
                '& .MuiTabs-indicator': {
                  bgcolor: '#FFC107',
                  height: 3,
                  borderRadius: '3px 3px 0 0'
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: '#64748B',
                  minHeight: 40,
                  py: 1,
                  px: 2,
                  '&.Mui-selected': {
                    color: '#0F172A',
                    fontWeight: 800
                  }
                }
              }}
            >
              <Tab value="officers" label="Officers Directory" />
              <Tab value="departments" label="Departments" />
              <Tab value="hospitals" label="Hospitals & Health" />
            </Tabs>

            {/* Search Input */}
            <Box sx={{ width: { xs: '100%', md: '24rem' }, position: 'relative' }}>
              <SearchIcon sx={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#64748B', fontSize: 18 }} />
              <InputBase
                placeholder={
                  activeTab === 'departments' 
                    ? "Search departments or services..."
                    : activeTab === 'hospitals'
                    ? "Search hospitals or locations..."
                    : "Search by name, designation, or department..."
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{
                  width: '100%',
                  pl: 5,
                  pr: 2,
                  py: 1,
                  bgcolor: 'white',
                  borderRadius: 2.5,
                  border: '1px solid #CBD5E1',
                  fontSize: '0.85rem',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  '&.Mui-focused': {
                    borderColor: '#FFC107',
                    boxShadow: '0 0 0 2px rgba(255, 193, 7, 0.25)'
                  }
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Directory Content Section with Rich Card Transitions */}
      <Box sx={{ py: { xs: 2, md: 2.5 }, bgcolor: 'white', flex: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Box component="span" sx={{ 
              display: 'inline-block', 
              bgcolor: '#FFFDE7', color: '#8A6500', border: '1px solid #FFE082', 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              px: 1.5, 
              py: 0.35, 
              borderRadius: 10, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              mb: 1
            }}>
              {activeTab === 'departments' ? "Government Departments" : activeTab === 'hospitals' ? "Health Infrastructure" : "District Officers"}
            </Box>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, color: '#1E293B', mb: 1, fontSize: { xs: '1.4rem', sm: '1.75rem' }, letterSpacing: '-0.02em' }}>
              {activeTab === 'departments' ? "Vizianagaram District Departments" : activeTab === 'hospitals' ? "Hospitals & Primary Health Centres" : "DRDA & District Officers Directory"}
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', maxWidth: '42rem', mx: 'auto', fontSize: { xs: '0.82rem', sm: '0.9rem' }, lineHeight: 1.5 }}>
              {activeTab === 'departments' 
                ? "Key administrative, welfare, infrastructure and citizen service departments across Vizianagaram"
                : activeTab === 'hospitals'
                ? "Government general hospital, community health centres and primary healthcare units"
                : "District and block-level officers responsible for rural development and administration"
              }
            </Typography>
            <Box sx={{ mt: 1.5, height: '3px', width: '48px', bgcolor: '#FFC107', borderRadius: 10, mx: 'auto' }} />
          </Box>

          {/* Departments Tab 3x3 Grid with Hover Transitions */}
          {activeTab === 'departments' && (
            filteredDepartments.length === 0 ? (
              <Typography sx={{ textAlign: 'center', color: '#6B7280', py: 4, fontSize: '0.9rem' }}>
                No departments match &ldquo;{query}&rdquo;.
              </Typography>
            ) : (
              <Box>
                <Grid container spacing={2.5} alignItems="stretch">
                  {pagedDepartments.map((dept, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                      <Card 
                        elevation={0} 
                        sx={{ 
                          borderRadius: 3, 
                          border: '1px solid #E2E8F0',
                          bgcolor: "#1F1700",
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: 'linear-gradient(90deg, #FFC107, #FDE047)',
                            opacity: 0,
                            transition: 'opacity 0.25s ease'
                          },
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: '#FFC107',
                            boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.08)',
                            '&::after': {
                              opacity: 1
                            },
                            '& .dept-icon-box': {
                              transform: 'scale(1.08)',
                              bgcolor: '#FFC107',
                              color: '#1F1700'
                            },
                            '& .dept-action-arrow': {
                              transform: 'translateX(4px)',
                              color: '#CA8A04'
                            }
                          }
                        }}
                      >
                        <CardContent sx={{ p: 2.25, '&:last-child': { pb: 2.25 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.25, minHeight: 46 }}>
                            <Box 
                              className="dept-icon-box"
                              sx={{ 
                                width: 38, 
                                height: 38, 
                                borderRadius: 2, 
                                bgcolor: '#FEF9C3', 
                                color: '#CA8A04',
                                border: '1px solid #FEF08A',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.25s ease',
                                flexShrink: 0
                              }}
                            >
                              <BusinessIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Typography sx={{ fontWeight: 800, color: '#0F172A', fontSize: '0.96rem', lineHeight: 1.25 }}>
                              {dept.name}
                            </Typography>
                          </Box>

                          <Typography 
                            sx={{ 
                              color: '#475569', 
                              fontSize: '0.8rem', 
                              lineHeight: 1.5, 
                              mb: 2, 
                              flexGrow: 1,
                              minHeight: 48,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {dept.description}
                          </Typography>

                          <Box sx={{ pt: 1.5, mt: 'auto', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 0, overflow: 'hidden' }}>
                              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#FFC107', flexShrink: 0 }} />
                              <Typography noWrap sx={{ color: '#64748B', fontSize: '0.74rem', fontWeight: 600 }}>
                                {dept.services}
                              </Typography>
                            </Box>
                            <ArrowForwardIcon className="dept-action-arrow" sx={{ fontSize: 16, color: '#94A3B8', transition: 'all 0.25s ease', flexShrink: 0 }} />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* 3x3 Grid Pagination */}
                {totalDeptPages > 1 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
                    <Pagination 
                      count={totalDeptPages} 
                      page={deptPage} 
                      onChange={(_, page) => {
                        setDeptPage(page);
                        window.scrollTo({ top: 250, behavior: 'smooth' });
                      }}
                      sx={{
                        '& .MuiPaginationItem-root': {
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          borderRadius: 2
                        },
                        '& .Mui-selected': {
                          bgcolor: '#1E293B !important',
                          color: '#FFFFFF'
                        }
                      }}
                    />
                  </Box>
                )}
              </Box>
            )
          )}

          {/* Hospitals Tab Grid with Transitions */}
          {activeTab === 'hospitals' && (
            filteredHospitals.length === 0 ? (
              <Typography sx={{ textAlign: 'center', color: '#6B7280', py: 4, fontSize: '0.9rem' }}>
                No hospitals match &ldquo;{query}&rdquo;.
              </Typography>
            ) : (
              <Grid container spacing={2.5} alignItems="stretch">
                {filteredHospitals.map((hosp, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                    <Card 
                      elevation={0} 
                      sx={{ 
                        borderRadius: 3, 
                        border: '1px solid #E2E8F0',
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #FFC107, #FDE047)',
                          opacity: 0,
                          transition: 'opacity 0.25s ease'
                        },
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: '#FFC107',
                          boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.08)',
                          '&::after': {
                            opacity: 1
                          },
                          '& .hosp-icon-box': {
                            transform: 'scale(1.08)',
                            bgcolor: '#FFC107',
                            color: '#1F1700'
                          }
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.25, '&:last-child': { pb: 2.25 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.25 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                            <Box 
                              className="hosp-icon-box"
                              sx={{ 
                                width: 36, 
                                height: 36, 
                                borderRadius: 2, 
                                bgcolor: '#FEF9C3', 
                                color: '#CA8A04',
                                border: '1px solid #FEF08A',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.25s ease',
                                flexShrink: 0
                              }}
                            >
                              <LocalHospitalIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Box>
                              <Typography sx={{ fontWeight: 800, color: '#0F172A', fontSize: '0.94rem', lineHeight: 1.2 }}>
                                {hosp.name}
                              </Typography>
                              <Typography sx={{ color: '#CA8A04', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', mt: 0.2 }}>
                                {hosp.type}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#64748B', fontSize: '0.78rem', mb: 1 }}>
                          <LocationOnIcon sx={{ fontSize: 16, color: '#94A3B8' }} />
                          <Typography sx={{ fontSize: 'inherit' }}>{hosp.location}</Typography>
                        </Box>

                        <Typography sx={{ color: '#475569', fontSize: '0.78rem', lineHeight: 1.45, mb: 2, flexGrow: 1 }}>
                          {hosp.services}
                        </Typography>

                        <Box sx={{ pt: 1.5, borderTop: '1px solid #F1F5F9' }}>
                          <MuiLink href={`tel:${hosp.phone.replace(/\D/g, '')}`} underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: '#0F172A', fontWeight: 700, fontSize: '0.82rem', '&:hover': { color: '#CA8A04' } }}>
                            <PhoneIcon sx={{ fontSize: 15, color: '#FFC107' }} />
                            {hosp.phone}
                          </MuiLink>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )
          )}

          {/* Officers Tab Grid with Transitions */}
          {activeTab === 'officers' && (
            filteredOfficers.length === 0 ? (
              <Typography sx={{ textAlign: 'center', color: '#6B7280', py: 4, fontSize: '0.9rem' }}>
                No officers match &ldquo;{query}&rdquo;.
              </Typography>
            ) : (
              <Grid container spacing={2.5} alignItems="stretch">
                {filteredOfficers.map((person, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                    <Card 
                      elevation={0} 
                      sx={{ 
                        borderRadius: 3, 
                        border: '1px solid #E2E8F0',
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #FFC107, #F59E0B)',
                          opacity: 0,
                          transition: 'opacity 0.25s ease'
                        },
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: '#FFC107',
                          boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.08)',
                          '&::after': {
                            opacity: 1
                          },
                          '& .officer-avatar': {
                            transform: 'scale(1.06)',
                            bgcolor: '#1F1700',
                            color: '#FFC107'
                          }
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.75 }}>
                          <Avatar 
                            className="officer-avatar"
                            sx={{ 
                              width: 44, 
                              height: 44, 
                              background: "#FFC107", 
                              color: "#1F1700", 
                              fontWeight: 800,
                              fontSize: '0.95rem', 
                              flexShrink: 0,
                              transition: 'all 0.25s ease'
                            }}
                          >
                            {person.initials}
                          </Avatar>
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography sx={{ fontWeight: 800, color: '#1E293B', fontSize: '0.98rem', lineHeight: 1.25 }}>
                              {person.name}
                            </Typography>
                            <Typography sx={{ color: '#D97706', fontSize: '0.8rem', fontWeight: 700, mt: 0.35 }}>
                              {person.designation}
                            </Typography>
                            <Typography sx={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, mt: 0.2 }}>
                              {person.department}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <MuiLink href={`tel:${person.phone.replace(/\D/g, '')}`} underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: '#475569', '&:hover': { color: '#0F172A' }, fontSize: '0.82rem' }}>
                            <PhoneIcon sx={{ fontSize: 15, color: '#FFC107' }} />
                            {person.phone}
                          </MuiLink>
                          {person.email && (
                            <MuiLink href={`mailto:${person.email}`} underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: '#475569', '&:hover': { color: '#0F172A' }, fontSize: '0.82rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              <MailIcon sx={{ fontSize: 15, color: '#FFC107', flexShrink: 0 }} />
                              {person.email}
                            </MuiLink>
                          )}
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: '#64748B', fontSize: '0.82rem' }}>
                            <LocationOnIcon sx={{ fontSize: 15, color: '#94A3B8', flexShrink: 0 }} />
                            <Typography noWrap sx={{ fontSize: 'inherit' }}>
                              {person.department} Office
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )
          )}
        </Container>
      </Box>

      {/* Reach Us Section */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
              <Box sx={{ bgcolor: 'white', borderRadius: 4, p: { xs: 3, md: 3 }, border: '1px solid #E2E8F0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E293B', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1, fontSize: '1.05rem' }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: '#1F1700' }} />
                  DRDA Main Office
                </Typography>
                <Box sx={{ color: '#475569', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: 0.5, flex: 1 }}>
                  <Typography variant="inherit"><strong>Address:</strong> DRDA Office,</Typography>
                  <Typography variant="inherit">Collectorate Complex,</Typography>
                  <Typography variant="inherit">Vizianagaram – 535003.</Typography>
                  
                  <Box sx={{ mt: 'auto', pt: 1.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="inherit"><strong>Phone:</strong> <MuiLink href="tel:08922236966" sx={{ color: '#1F1700', fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>08922-236966</MuiLink></Typography>
                    <Typography variant="inherit"><strong>Email:</strong> <MuiLink href="mailto:drda-vzm@ap.gov.in" sx={{ color: '#1F1700', fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>drda-vzm@ap.gov.in</MuiLink></Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 8 }} sx={{ display: "flex" }}>
              <Box sx={{ bgcolor: '#FEFCE8', borderRadius: 4, p: { xs: 3, md: 3 }, border: '1px solid #FFE082', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E293B', mb: 1.5, fontSize: '1.05rem' }}>
                  Reach Us Easily
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
                  <MuiLink href="tel:08922236966" underline="none" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, bgcolor: '#1F1700', color: 'white', px: 2.5, py: 1.2, borderRadius: '10px', transition: 'background-color 0.2s', '&:hover': { bgcolor: '#000000' }, flex: 1 }}>
                    <PhoneIcon sx={{ fontSize: 18, color: 'white' }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', whiteSpace: 'nowrap' }}>Call DRDA: 08922-236966</Typography>
                  </MuiLink>
                  <MuiLink href="mailto:drda-vzm@ap.gov.in" underline="none" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, bgcolor: '#334155', color: 'white', px: 2.5, py: 1.2, borderRadius: '10px', transition: 'background-color 0.2s', '&:hover': { bgcolor: '#0F172A' }, flex: 1 }}>
                    <MailIcon sx={{ fontSize: 18, color: 'white' }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', whiteSpace: 'nowrap' }}>Email: drda-vzm@ap.gov.in</Typography>
                  </MuiLink>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense fallback={
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F9FAFB' }}>
        <CircularProgress sx={{ color: '#FFC107' }} />
      </Box>
    }>
      <DirectoryContent />
    </Suspense>
  );
}
