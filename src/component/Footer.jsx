import React from 'react';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material'; 
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import logo from '../assets/image/White.svg'; // Adjust the path based on your directory structure

const Footer = () => {
  return (
    <Box sx={{bgcolor:'white',padding:4,fontFamily: 'cursive'}}>
    <footer style={{ 
    background: ' #30302d', /* Example gradient, adjust as needed */
      padding: '20px 10px', // Reduced padding for a smaller footer
      color: '#fff',
      borderRadius: '30px', // Slightly smaller radius
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Reduced shadow for a subtle 3D effect
      position: 'relative',
      margin: '20px 0',
    }}>
      
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <div>
              <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '8px' }} /> {/* Smaller logo */}
              <Typography variant="body2" style={{ fontSize: '12px', fontWeight: '300', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',fontFamily:'cursive' }}>
              Unlock your financial freedom with flexible personal loan solutions tailored to your needs.
              </Typography>
              <Box mt={1} display="flex" gap={1}>
                <Link href="#" sx={iconStyle}><Facebook /></Link>
                <Link href="#" sx={iconStyle}><Twitter /></Link>
                <Link href="#" target="_blank" sx={iconStyle}><LinkedIn /></Link>
                <Link href="#" target="_blank" sx={iconStyle}><Instagram /></Link>
                <Link href="#" target="_blank" sx={iconStyle}><YouTube /></Link>
              </Box>
            </div>
          </Grid>

          {/* Links Section 1 */}
          <Grid item xs={12} md={3}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '20px' }}>
              <li><Link href="/" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Home </Link></li>
              <li><Link href="about-us" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> About Us</Link></li>
              <li><Link href="apply-now" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Apply Now</Link></li>
              <li><Link href="repay-now" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Repay Now </Link></li>
              <li><Link href="contact-us" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Contact Us</Link></li>
            </ul>
          </Grid>

          {/* Links Section 2 */}
          <Grid item xs={12} md={3}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '20px' }}>
              <li><Link href="terms-condition" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Terms & Condition</Link></li>
              <li><Link href="privacy-policy" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Privacy Policy</Link></li>
              <li><Link href="fqa" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> FAQs</Link></li>
            </ul>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" style={{ color: '#fff', marginBottom: '5px', fontWeight: '500', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
              Contact Us
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="contact-us" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                  <Email style={{ marginRight: '5px' }} /> Email: info@loanonsalary.com
                </Link>
              </li>
              <li>
                <Link href="contact-us" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                  <Phone style={{ marginRight: '5px' }} /> Phone: 9220535528
                </Link>
              </li>
              <li>
                <Link href="contact-us" color="inherit" style={{ display: 'flex' }}>
                  <LocationOn style={{ marginRight: '5px' }} /> Address:  1710, 17th Floor, World Trade Tower, Sector -16, Noida, Uttar Pradesh -
                  201301.
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box mt={2} py={1} style={{ backgroundColor: '#4a4945', textAlign: 'center', borderRadius: '0 0 10px 10px', boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.3)' }}>
        <Typography variant="body2" style={{ color: '#ccc', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' ,fontFamily:'cursive'}}>
          Copyright &copy; 2024 LoanOnSalary. All Rights Reserved.
        </Typography>
      </Box>
      
    </footer>
    </Box>
  );
};

const iconStyle = {
  backgroundColor: 'white',  // Set background color to match your site's theme
  color: 'black',               // Set icon color to white
  borderRadius: '50%',
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px', // Smaller icon size
  height: '40px',
  transition: 'transform 0.2s, background-color 0.2s',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)', // Reduced shadow
  '&:hover': {
    backgroundColor: '#e0e0e0',  // Hover effect background
    color: '#111',  // Hover effect icon color
    transform: 'translateY(-3px)', // Less lift on hover
  },
};


const linkStyle = {
  padding: '5px 0', // Reduced padding
  transition: 'color 0.2s, transform 0.2s',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Shadow for text
  '&:hover': {
    color: '#1e90ff',
    transform: 'translateY(-1px)', // Lift effect on hover
  },
};

export default Footer;
