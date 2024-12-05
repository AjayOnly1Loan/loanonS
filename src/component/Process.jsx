import React from 'react';
import { Box, Typography } from '@mui/material';
import processVideo from '../assets/videos/Website Homepage Fashion Collage Banner.mp4'; // Adjust the path to your actual file location

const Process = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      
        backgroundColor: '#ffebee',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      {/* Add inline style for keyframes animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%); /* Start from right outside */
            }
            100% {
              transform: translateX(-100%); /* Move to left outside */
            }
          }
        `}
      </style>

      {/* Top Dark Gray Stripe */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#555', // Dark gray color
          zIndex: 1, // Ensure it is above other components
          position: 'relative', // Ensure it sits on top
        }}
      >
        <Box
          sx={{
            whiteSpace: 'nowrap', // Prevent text from wrapping
            overflow: 'hidden', // Hide overflow
            width: '100%', // Full width
            animation: 'marquee 10s linear infinite', // Animation
            padding: '10px 0', // Padding for vertical space
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
            }}
          >
            How Speedloan Makes Your Life Easy
          </Typography>
        </Box>
      </Box>

      <Box
        component="video"
        sx={{
          width: '100%', // Full width
          height: { xs: '40%', md: '90%' }, // Smaller height on small screens
          borderRadius: '80px',
          boxShadow: 3,
          zIndex: 0, // Video below the top stripe
          position: 'relative', // Ensure proper stacking
          margin: '0', // Remove any default margin
        }}
        autoPlay
        loop
        muted
        controls={false} // Optional: remove controls if you don't want them to show
      >
        <source src={processVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Bottom Dark Gray Stripe */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#555', // Dark gray color
          zIndex: 1, // Ensure it is above other components
          position: 'relative', // Ensure it sits on top
          padding: '10px 0', // Optional: Padding for vertical space
        }}
      >
        {/* Optional content can be added here */}
      </Box>
    </Box>
  );
};

export default Process;
