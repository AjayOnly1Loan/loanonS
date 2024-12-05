import React from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import './ContactUs.css'; // Custom CSS for hover effects
import aboutVideo from '../assets/videos/Your paragraph text (3) (1).mp4'; // Adjust the path if necessary
import leftVideo from '../assets/videos/Bold Sale Brand Website Homepage Banner.mp4'; // Adjust the path for the left video

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <>
      {/* Video Section */}
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', md: '100vh' }, // Responsive height
          overflow: 'hidden',
          mb: 2, // Optional: margin-bottom
        }}
      >
        <Box 
          component="video"
          src={aboutVideo}
          autoPlay
          muted
          
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', // Full width
            height: '100%', // Full height
            objectFit: 'cover', // Video covers container
          }}
        />
      </Box>

      {/* Contact Information Section */}
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          mt: '20px', // Margin-top
        }}
      >
        <Typography variant="h6" sx={{ color: 'blue' }}>
          Get in touch with us
        </Typography>
        <Typography variant="h2" sx={{ color: 'darkblue', fontWeight: 'bold', '&:hover': { color: 'blue' } }}>
          Ask for your query
        </Typography>

        <Grid container spacing={3} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={4}>
            <Box className="hover-box" sx={{ padding: '30px', transition: '0.3s', borderRadius: '10px', textAlign: 'center' }}>
              <i className="fas fa-envelope"></i>
              <Typography>Email: info@loanonsalary.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="hover-box" sx={{ padding: '30px', transition: '0.3s', borderRadius: '10px', textAlign: 'center' }}>
              <i className="fas fa-phone-alt"></i>
              <Typography>Phone: +91 9220535528</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="hover-box" sx={{ padding: '30px', transition: '0.3s', borderRadius: '10px', textAlign: 'center' }}>
              <i className="fas fa-map-marker-alt"></i>
              <Typography>Address:  1710, 17th Floor, World Trade Tower, Sector -16, Noida, Uttar Pradesh -
              201301.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Us Form */}
      <Grid container spacing={2} mt={5}>
        {/* Left Video */}
        <Grid item xs={12} sm={6}>
          <Box
            component="video"
            src={leftVideo}
            autoPlay
            muted
            loop
            playsInline
            sx={{
              width: '80%', // Adjusted width
              height: 'auto', // Maintain aspect ratio
              objectFit: 'cover',
              borderRadius: '8px',
              mt: 10, // Increased margin-top
              ml: 10, // Adjust margin-left
            }}
          />
        </Grid>

        {/* Right Contact Form */}
        <Grid item xs={12} sm={6}>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{
              width: '100%', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#f9f9f9', 
              mt: 2, 
            }}
          >
            <Typography variant="h4" gutterBottom textAlign="center">
              Get in Touch
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Full Name" 
                  variant="outlined" 
                  fullWidth 
                  required 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Email" 
                  variant="outlined" 
                  fullWidth 
                  required 
                  type="email" 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Phone Number" 
                  variant="outlined" 
                  fullWidth 
                  required 
                  type="tel" 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Subject" 
                  variant="outlined" 
                  fullWidth 
                  required 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Message" 
                  variant="outlined" 
                  fullWidth 
                  multiline 
                  rows={6} // Larger message box
                  required 
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  type="submit" 
                  fullWidth
                  sx={{ 
                    padding: '10px', 
                    backgroundColor: '#136654', 
                    '&:hover': { backgroundColor: '#0b2747' }, 
                    borderRadius: '8px',
                  }} 
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
