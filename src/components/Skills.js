import React from 'react';
import { Box, Typography, Container, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaCode,
  FaGitAlt,
} from 'react-icons/fa';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
    { name: 'Python', icon: <FaPython />, level: 85 },
    
    { name: 'Docker', icon: <FaDocker />, level: 75 },
    { name: 'AWS', icon: <FaAws />, level: 70 },
    { name: 'Databases', icon: <FaDatabase />, level: 85 },
    { name: 'API Design', icon: <FaServer />, level: 90 },
    { name: 'Security', icon: <FaShieldAlt />, level: 80 },
    { name: 'Clean Code', icon: <FaCode />, level: 85 },
    { name: 'Git', icon: <FaGitAlt />, level: 90 },
  ];

  const technologies = [
    {
      category: 'Backend Frameworks',
      items: ['Express.js', 'Django'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Postman', ],
    },
  ];

  return (
    <Box
      id="skills"
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
              Skills & Expertise
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5" sx={{ mb: 4, color: '#00ff88' }}>
                  Core Skills
                </Typography>
                {skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ color: '#00ff88', mr: 1 }}>
                        {skill.icon}
                      </Box>
                      <Typography variant="body1">{skill.name}</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(45deg, #00ff88, #00b4d8)',
                        },
                      }}
                    />
                  </Box>
                ))}
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5" sx={{ mb: 4, color: '#00ff88' }}>
                  Technologies
                </Typography>
                <Grid container spacing={3}>
                  {technologies.map((tech, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                        sx={{
                          p: 2,
                          background: 'rgba(255,255,255,0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ mb: 2, color: '#00ff88' }}
                        >
                          {tech.category}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {tech.items.map((item, itemIndex) => (
                            <Paper
                              key={itemIndex}
                              sx={{
                                px: 2,
                                py: 1,
                                background: 'rgba(0,255,136,0.1)',
                                border: '1px solid rgba(0,255,136,0.2)',
                                borderRadius: 2,
                              }}
                            >
                              <Typography variant="body2">{item}</Typography>
                            </Paper>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 