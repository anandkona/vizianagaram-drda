"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, Breadcrumbs, Link as MuiLink, TextField, Stack, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MapIcon from '@mui/icons-material/Map';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#F8FAFC' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: "relative", 
        overflow: "hidden", 
        background: "#FFC107",
        borderBottom: "1px solid rgba(180, 83, 9, 0.25)",
        boxShadow: "0 4px 20px -2px rgba(217, 119, 6, 0.25)",
        color: "#1F1700", 
        py: { xs: 2, md: 2.5 },
        }}>
        <Box aria-hidden="true" className="portal-dotted-pattern" sx={{ inset: 0, opacity: 0.08, pointerEvents: "none", position: "absolute" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "rgba(43, 33, 0, 0.72)", mb: 1, fontSize: "0.8rem", fontWeight: 600 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-inherit">Home</Link>
            <Typography component="span" sx={{ fontSize: "0.75rem" }}>/</Typography>
            <Typography sx={{ color: "#1F1700", fontSize: "0.8rem", fontWeight: 700 }}>Contact</Typography>
          </Stack>
          
          <Typography variant="h1" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" }, letterSpacing: "-0.02em", color: "#1F1700" }}>
            Get in Touch
          </Typography>
          <Typography sx={{ color: "rgba(31, 23, 0, 0.88)", fontSize: { xs: "0.85rem", sm: "0.95rem" }, maxWidth: 650, lineHeight: 1.4, fontWeight: 500 }}>
            We're here to help. Reach out to the District Rural Development Agency for any queries, grievances, or direct support.
          </Typography>
        </Container>
      </Box>

      {/* Quick Contact Cards */}
      <Box sx={{ py: { xs: 2, md: 3 }, bgcolor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, height: '100%', borderRadius: 3, bgcolor: '#FFFFFF', border: 'none', boxShadow: '0 8px 16px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.2s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 24px rgba(0,0,0,0.06)' } }}>
                <Box sx={{ width: 44, height: 44, bgcolor: '#FACC15', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <HeadsetMicIcon sx={{ color: '#1F1700', fontSize: 22 }} />
                </Box>
                <Typography sx={{ fontWeight: 800, color: '#1F1700', mb: 0.5, fontSize: '1rem' }}>Call Us</Typography>
                <Typography sx={{ color: '#64748B', fontSize: '0.8rem', mb: 1, flexGrow: 1 }}>Mon-Sat from 9am to 5pm</Typography>
                <Typography sx={{ fontWeight: 800, color: '#B45309', fontSize: '1.05rem' }}>08922-236966</Typography>
              </Paper>
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, height: '100%', borderRadius: 3, bgcolor: '#FFFFFF', border: 'none', boxShadow: '0 8px 16px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.2s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 24px rgba(0,0,0,0.06)' } }}>
                <Box sx={{ width: 44, height: 44, bgcolor: '#FACC15', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <MailIcon sx={{ color: '#1F1700', fontSize: 22 }} />
                </Box>
                <Typography sx={{ fontWeight: 800, color: '#1F1700', mb: 0.5, fontSize: '1rem' }}>Email Us</Typography>
                <Typography sx={{ color: '#64748B', fontSize: '0.8rem', mb: 1, flexGrow: 1 }}>Drop us a line anytime</Typography>
                <Typography sx={{ fontWeight: 800, color: '#B45309', fontSize: '1rem' }}>drda-vzm@ap.gov.in</Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3 }, height: '100%', borderRadius: 3, bgcolor: '#FFFFFF', border: 'none', boxShadow: '0 8px 16px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.2s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 24px rgba(0,0,0,0.06)' } }}>
                <Box sx={{ width: 44, height: 44, bgcolor: '#FACC15', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <MapIcon sx={{ color: '#1F1700', fontSize: 22 }} />
                </Box>
                <Typography sx={{ fontWeight: 800, color: '#1F1700', mb: 0.5, fontSize: '1rem' }}>Visit Us</Typography>
                <Typography sx={{ color: '#64748B', fontSize: '0.8rem', mb: 1, flexGrow: 1 }}>DRDA Office, Collectorate</Typography>
                <Typography sx={{ fontWeight: 800, color: '#B45309', fontSize: '0.95rem' }}>Vizianagaram - 535003</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid size={{ xs: 12, md: 7, lg: 6 }}>
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, width: '100%', borderRadius: 4, bgcolor: '#FFFFFF', border: 'none', boxShadow: '0 12px 32px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <Typography sx={{ display: 'inline-block', bgcolor: '#FEF3C7', color: '#92400E', fontWeight: 800, fontSize: '0.7rem', px: 1.5, py: 0.5, borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1.5 }}>Send a Message</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: '#1F1700', fontSize: { xs: '1.6rem', md: '1.8rem' }, mb: 1, letterSpacing: '-0.02em' }}>We'd love to hear from you</Typography>
                  <Typography sx={{ color: '#64748B', lineHeight: 1.5, fontSize: '0.9rem' }}>Fill out the form below and our district team will get back to you.</Typography>
                </Box>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField size="small" fullWidth placeholder="Full Name" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F8FAFC', color: '#1F1700', borderRadius: 2, '& fieldset': { borderColor: '#E2E8F0' }, '&:hover fieldset': { borderColor: '#CBD5E1' }, '&.Mui-focused fieldset': { borderColor: '#FACC15', borderWidth: '2px' } } }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField size="small" fullWidth placeholder="Phone Number" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F8FAFC', color: '#1F1700', borderRadius: 2, '& fieldset': { borderColor: '#E2E8F0' }, '&:hover fieldset': { borderColor: '#CBD5E1' }, '&.Mui-focused fieldset': { borderColor: '#FACC15', borderWidth: '2px' } } }} />
                    </Grid>
                  </Grid>
                  <TextField size="small" fullWidth placeholder="Email Address" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F8FAFC', color: '#1F1700', borderRadius: 2, '& fieldset': { borderColor: '#E2E8F0' }, '&:hover fieldset': { borderColor: '#CBD5E1' }, '&.Mui-focused fieldset': { borderColor: '#FACC15', borderWidth: '2px' } } }} />
                  <TextField size="small" fullWidth placeholder="Your Message" multiline rows={4} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F8FAFC', color: '#1F1700', borderRadius: 2, '& fieldset': { borderColor: '#E2E8F0' }, '&:hover fieldset': { borderColor: '#CBD5E1' }, '&.Mui-focused fieldset': { borderColor: '#FACC15', borderWidth: '2px' } } }} />
                  
                  <Box sx={{ mt: 0.5, pt: 1 }}>
                    <Button 
                      fullWidth
                      variant="contained" 
                      size="medium"
                      endIcon={<SendIcon sx={{ fontSize: '18px !important', color: '#1F1700' }} />}
                      sx={{ 
                        bgcolor: '#FACC15', 
                        color: '#1F1700 !important', 
                        fontWeight: 800, 
                        py: 1.2, 
                        borderRadius: 3, 
                        boxShadow: '0 8px 16px rgba(250,204,21,0.2)',
                        transition: 'all 0.2s ease',
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        '&:hover': { bgcolor: '#FDE047', boxShadow: '0 12px 24px rgba(250,204,21,0.3)', transform: 'translateY(-2px)' } 
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Directory CTA */}
      <Box sx={{ py: { xs: 3, md: 4 }, bgcolor: '#FACC15', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1F1700', mb: 2, fontSize: { xs: '1.6rem', md: '2rem' }, letterSpacing: '-0.02em' }}>Looking for a specific officer?</Typography>
          <Typography sx={{ color: 'rgba(31, 23, 0, 0.8)', mb: 4, fontSize: '0.95rem', fontWeight: 500 }}>Access our complete contact directory for all district and block level programme managers.</Typography>
          <Button 
            component={Link}
            href="/directory"
            variant="contained" 
            endIcon={<ArrowForwardIcon sx={{ fontSize: '18px !important' }} />}
            sx={{ 
              bgcolor: '#0F172A', 
              color: '#FFFFFF !important', 
              fontWeight: 800, 
              px: 4, 
              py: 1.5, 
              borderRadius: 3, 
              textTransform: 'none',
              fontSize: '0.9rem',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              '&:hover': { bgcolor: '#000000', transform: 'translateY(-2px)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }
            }}
          >
            View Staff Directory
          </Button>
        </Container>
      </Box>

    </Box>
  );
}
