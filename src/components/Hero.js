import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(45deg, #00ff88, #00b4d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sunil Poudel
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: '#fff',
                mb: 4,
              }}
            >
              Backend Developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{
                color: '#888',
                mb: 4,
                fontFamily: 'monospace',
              }}
            >
              Building robust and scalable server-side solutions
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <FaCode color="#00ff88" size={24} />
              <Typography>Clean Code</Typography>
            </Box>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <FaServer color="#00ff88" size={24} />
              <Typography>API Design</Typography>
            </Box>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <FaDatabase color="#00ff88" size={24} />
              <Typography>Database Optimization</Typography>
            </Box>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: '#00ff88',
                borderRadius: '50%',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 