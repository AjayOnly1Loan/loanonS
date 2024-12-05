import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Box, Menu as MUI_Menu, MenuItem } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ApplyNowIcon from '@mui/icons-material/Assignment';
import { keyframes } from '@mui/system';

import logo from '../assets/image/Loan On Salary Logo.svg'; // Adjust the path based on your structure

// Define the blink animation here
const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(5px)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', minHeight: '80px' }}>
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', zIndex: 10 }}>
            <img src={logo} alt="Logo" style={{ width: '100px', height: '80px', objectFit: 'contain', zIndex: 10 }} />
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#0b2747', padding: '8px' }}
          >
            <Menu />
          </IconButton>

          {/* Mobile Menu */}
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { zIndex: 900 } }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  display: 'flex',
                  alignItems: 'center',
                  animation: `${blinkAnimation} 1s infinite`,
                  fontFamily: 'Great Victorian, cursive', // Apply cursive font
                }}
              >
                <HomeIcon sx={{ mr: 1, fontFamily: 'cursive' }} /> Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/about-us"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Great Victorian, cursive',
                }}
              >
                <InfoIcon sx={{ mr: 1 }} /> About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Great Victorian, cursive',
                }}
              >
                <ContactMailIcon sx={{ mr: 1 }} /> Contact Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/repay"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Great Victorian, cursive',
                }}
              >
                <ApplyNowIcon sx={{ mr: 1 }} /> Repay
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/apply-now"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Great Victorian, cursive',
                }}
              >
                <ApplyNowIcon sx={{ mr: 1 }} /> Apply Now
              </Link>
            </MenuItem>
          </MUI_Menu>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              flexGrow: 1,
              ml: 2,
              gap: '1rem',
            }}
          >
            <Link
              to="/"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                transition: 'color 0.3s ease',
                fontFamily: 'Great Victorian, cursive', // Apply cursive font
              }}
            >
              <HomeIcon sx={{ mr: 1, fontFamily: 'cursive' }} /> Home
            </Link>
            <Link
              to="/about-us"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                transition: 'color 0.3s ease',
                fontFamily: 'Great Victorian, cursive', // Apply cursive font
              }}
            >
              <InfoIcon sx={{ mr: 1 }} /> About Us
            </Link>
            <Link
              to="/contact-us"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                transition: 'color 0.3s ease',
                fontFamily: 'Great Victorian, cursive', // Apply cursive font
              }}
            >
              <ContactMailIcon sx={{ mr: 1 }} /> Contact Us
            </Link>
            <Link
              to="/repay"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                transition: 'color 0.3s ease',
                fontFamily: 'Great Victorian, cursive', // Apply cursive font
              }}
            >
              <ApplyNowIcon sx={{ mr: 1 }} /> Repay
            </Link>
            <Link
              to="/apply-now"
              onClick={scrollToTop}
              style={{
                color: '#0b2747',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '8px',
                transition: 'color 0.3s ease',
                fontFamily: 'Great Victorian, cursive', // Apply cursive font
              }}
            >
              <ApplyNowIcon sx={{ mr: 1 }} /> Apply Now
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
