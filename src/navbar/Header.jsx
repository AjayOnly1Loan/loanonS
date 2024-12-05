import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, Box, Menu as MUI_Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../assets/image/Logo_changes_salaryonloan-removebg-preview.png'; // Adjust the path based on your structure
import { Menu } from '@mui/icons-material';
import { keyframes } from '@mui/system';

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '50px', backdropFilter: 'blur(5px)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', minHeight: '80px' }}> {/* Adjusted height */}
          <Link to="/" onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', zIndex: 10 }}>
            <img src={logo} alt="Logo" style={{ width: '100px', height: '80px', objectFit: 'contain', zIndex: 10 }} /> {/* Adjusted logo size */}
          </Link>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#0b2747', padding: '8px' }}
          >
            <Menu />
          </IconButton>
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { zIndex: 900 } }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}>
                <HomeIcon sx={{ mr: 1 }} /> HOME
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about-us" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}>
                <InfoIcon sx={{ mr: 1 }} /> ABOUT US
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/apply-now" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}>
                <AssignmentIcon sx={{ mr: 1 }} /> APPLY NOW
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/repay-now" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}>
                <PaymentIcon sx={{ mr: 1 }} /> REPAY NOW
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact-us" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}>
                <ContactMailIcon sx={{ mr: 1 }} /> CONTACT US
              </Link>
            </MenuItem>
          </MUI_Menu>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              flexGrow: 1,
              ml: 2,
              gap: '1rem',
            }}
          >
            <Link to="/" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '8px', transition: 'color 0.3s ease' }}>
              <HomeIcon sx={{ mr: 1 }} /> HOME
            </Link>
            <Link to="/about-us" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '8px', transition: 'color 0.3s ease' }}>
              <InfoIcon sx={{ mr: 1 }} /> ABOUT US
            </Link>
            <Link to="/apply-now" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '8px', transition: 'color 0.3s ease' }}>
              <AssignmentIcon sx={{ mr: 1 }} /> APPLY NOW
            </Link>
            <Link to="/repay-now" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '8px', transition: 'color 0.3s ease' }}>
              <PaymentIcon sx={{ mr: 1 }} /> REPAY NOW
            </Link>
            <Link to="/contact-us" onClick={scrollToTop} style={{ color: '#0b2747', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '8px', transition: 'color 0.3s ease' }}>
              <ContactMailIcon sx={{ mr: 1 }} /> CONTACT US
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
