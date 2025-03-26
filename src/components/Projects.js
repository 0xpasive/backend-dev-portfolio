import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Chip, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaDatabase, FaLock } from 'react-icons/fa';

const Projects = () => {
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

  const projects = [
    {
      title: 'E-Commerce API',
      description: 'A robust RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. Features include user authentication, product management, order processing, and payment integration.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
      image: 'https://via.placeholder.com/400x300/1a1a1a/00ff88?text=E-Commerce+API',
      github: 'https://github.com/sunilpoudel059/ecommerce-api',
      demo: 'https://ecommerce-api-demo.herokuapp.com'
    },
    {
      title: 'Task Management System',
      description: 'A full-stack task management application with real-time updates, team collaboration, and project tracking capabilities. Built with Node.js, Socket.IO, and React.',
      technologies: ['Node.js', 'Socket.IO', 'React', 'MongoDB', 'Redux'],
      image: 'https://via.placeholder.com/400x300/1a1a1a/00ff88?text=Task+Management',
      github: 'https://github.com/sunilpoudel059/task-management',
      demo: 'https://task-management-demo.herokuapp.com'
    },
    {
      title: 'Authentication Service',
      description: 'A microservice for handling user authentication and authorization. Supports multiple authentication methods including JWT, OAuth2, and 2FA.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      image: 'https://via.placeholder.com/400x300/1a1a1a/00ff88?text=Auth+Service',
      github: 'https://github.com/sunilpoudel059/auth-service',
      demo: 'https://auth-service-demo.herokuapp.com'
    },
    {
      title: 'File Storage API',
      description: 'A scalable file storage service with support for multiple storage providers (AWS S3, Google Cloud Storage). Features include file upload, download, and management.',
      technologies: ['Node.js', 'AWS S3', 'Google Cloud', 'Express', 'Multer'],
      image: 'https://via.placeholder.com/400x300/1a1a1a/00ff88?text=File+Storage',
      github: 'https://github.com/sunilpoudel059/file-storage-api',
      demo: 'https://file-storage-demo.herokuapp.com'
    }
  ];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        background: 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 6,
              textAlign: 'center',
              color: '#fff',
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0, 255, 136, 0.2)',
                      borderColor: '#00ff88',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        color: '#fff',
                        mb: 2,
                        fontWeight: 'bold',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            background: 'rgba(0, 255, 136, 0.1)',
                            color: '#00ff88',
                            '&:hover': {
                              background: 'rgba(0, 255, 136, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<FaGithub />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: '#00ff88',
                          borderColor: '#00ff88',
                          '&:hover': {
                            borderColor: '#00ff88',
                            background: 'rgba(0, 255, 136, 0.1)',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<FaExternalLinkAlt />}
                        href={project.demo}
                        target="_blank"
                        sx={{
                          background: '#00ff88',
                          color: '#000',
                          '&:hover': {
                            background: '#00cc6a',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 