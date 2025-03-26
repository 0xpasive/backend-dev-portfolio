import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: scrolled ? 'rgba(18, 18, 18, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ flexGrow: 1, color: '#00ff88', fontWeight: 'bold' }}
        >
          SP
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-64}
            >
              <Button
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  color: '#fff',
                  mx: 1,
                  '&:hover': {
                    color: '#00ff88',
                  },
                }}
              >
                {item.name}
              </Button>
            </ScrollLink>
          ))}
        </Box>

        {/* Mobile Navigation Button */}
        <IconButton
          sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            background: '#121212',
            width: '250px',
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.name}
              component={motion.div}
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-64}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#00ff88',
                    },
                  }}
                />
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 