import React from 'react';
import { Box, Typography } from '@mui/material';
import loanVideo from '../assets/videos/Blue Sea Photo Collage Facebook Cover (1).mp4'; // Update the path to your actual video location
import GooglePlayIcon from '../assets/image/googleplaylogo-removebg-preview.png'; // Adjust the path to your actual icon file

const LoanJourney = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        width: '100%',
      }}
    >
      {/* Top Dark Gray Stripe */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#555', // Dark gray color
          zIndex: 1, // Ensure it is above other components
          position: 'relative', // Ensure it sits on top
          padding: { xs: '10px 0', sm: '5px 0' }, // Adjust padding for different screen sizes
          height: { xs: '50px', sm: '40px' }, // Fixed height for small screens
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden', // Hide overflow for marquee effect
            height: '100%', // Ensure content fills the box
          }}
        >
          <Typography
            variant="h6"
            color="#fff"
            textAlign="center"
            sx={{
              fontWeight: 'bold', // Make the text bold
              fontFamily: 'cursive',
              fontStyle: 'italic', // Make the text cursive
              whiteSpace: 'nowrap', // Prevent text wrapping
              animation: 'marquee 15s linear infinite', // Marquee effect
              display: 'flex', // Use flex to align text and icon
              alignItems: 'center', // Center vertically
            }}
          >
            <span style={{ marginRight: '10px' }}>
              Download Our Speedloans App on Google Play Store
            </span>
            <Box
              component="img"
              src={GooglePlayIcon}
              alt="Google Play Store"
              sx={{
                width: { xs: '15vw', sm: '20vw' }, // Adjust size of the icon based on screen size
                height: { xs: '15vh', sm: '20vh' }, // Maintain aspect ratio
              }}
            />
          </Typography>
        </Box>
      </Box>

      <Box
        component="video"
        src={loanVideo}
        autoPlay
        loop
        muted
        sx={{
          width: '100vw', // Ensures video fits the entire viewport width
          maxWidth: '100%', // Limits the max width for mobile
          height: 'auto', // Maintains aspect ratio
          borderRadius: '10px',
          boxShadow: 3,
          marginTop: '-5px', // Adjusts the space to pull the video closer to the gray stripe
        }}
      />
      
      {/* CSS for marquee effect */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%); // Start off screen right
            }
            100% {
              transform: translateX(-100%); // End off screen left
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LoanJourney;
