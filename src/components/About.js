import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaTerminal, FaCodeBranch, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
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

  const terminalCommands = [
    { command: 'npm install experience', output: 'Installing 1+ years of backend development experience...' },
    { command: 'git clone expertise', output: 'Cloning expertise in Node.js, Python, and Express' },
    { command: 'docker run architecture', output: 'Running scalable microservices architecture...' },
    { command: 'kubectl apply knowledge', output: 'Applying cloud-native development practices...' },
  ];

  return (
    <Box
      id="about"
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
                mb: 4,
                background: 'linear-gradient(45deg, #00ff88, #00b4d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                    I'm a passionate backend developer with expertise in building scalable and robust server-side applications.
                    My journey in software development has equipped me with deep knowledge of various technologies and best practices.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    I specialize in creating efficient APIs, optimizing database performance, and implementing secure authentication systems.
                    My experience spans across different domains, from e-commerce platforms to real-time data processing systems.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid #00ff88',
                    fontFamily: 'monospace',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FaTerminal color="#00ff88" size={20} />
                    <Typography variant="body2" sx={{ ml: 1, color: '#00ff88' }}>
                      terminal@backend-dev:~$
                    </Typography>
                  </Box>
                  {terminalCommands.map((cmd, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ color: '#00ff88' }}>
                        $ {cmd.command}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#888', ml: 2 }}>
                        {cmd.output}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {[
              { icon: <FaCodeBranch />, title: 'Version Control', description: 'Git, GitHub, GitLab' },
              { icon: <FaServer />, title: 'Backend Frameworks', description: 'Node.js, Express, Django' },
              { icon: <FaDatabase />, title: 'Databases', description: 'PostgreSQL, MongoDB, MySQL' },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box sx={{ color: '#00ff88', mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 