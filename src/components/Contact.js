import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/0xpasive', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pasive/', label: 'LinkedIn' },
    
  ];

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#121212',
        color: '#fff',
        py: 8,
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                mb: 6,
                background: 'linear-gradient(45deg, #00ff88, #00b4d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
              }}
            >
              Get in Touch
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#00ff88',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ff88',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#00ff88',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#00ff88',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ff88',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#00ff88',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#00ff88',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ff88',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#00ff88',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      required
                      multiline
                      rows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#00ff88',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#00ff88',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)',
                          '&.Mui-focused': {
                            color: '#00ff88',
                          },
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 3,
                        background: 'linear-gradient(45deg, #00ff88, #00b4d8)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #00b4d8, #00ff88)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 4, color: '#00ff88' }}>
                    Connect With Me
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <FaEnvelope color="#00ff88" size={20} />
                      <Typography sx={{ ml: 2 }}>sunilpoudel059@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <FaMapMarkerAlt color="#00ff88" size={20} />
                      <Typography sx={{ ml: 2 }}>Pokhara, Nepal</Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, color: '#00ff88' }}>
                    Social Links
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.url}
                        target="_blank"
                        sx={{
                          color: '#00ff88',
                          '&:hover': {
                            background: 'rgba(0,255,136,0.1)',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 