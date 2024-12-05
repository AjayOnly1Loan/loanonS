import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import AmountImage from '../assets/image/rupees.png'; // Replace with your amount icon image path
import TenureImage from '../assets/image/tenure.png'; // Replace with your tenure icon image path
import UnsecureLoanImage from '../assets/image/unsecure.png'; // Replace with your unsecure loan icon image path

const UnsecuredLoan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef} sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack boxes vertically on small screens
          justifyContent: 'center', // Center boxes
          alignItems: 'center', // Center align boxes
          overflow: 'hidden',
          animation: isVisible ? 'marquee 10s linear infinite' : 'none', // Animate only when visible
        }}
      >
        {/* Amount Box */}
        <Box
          sx={{
            backgroundColor: '#325379',
            borderRadius: 2,
            padding: 2,
            boxShadow: 3,
            textAlign: 'center',
            height: { xs: '150px', md: '200px' }, // Smaller height on small screens
            width: { xs: '90%', md: '300px' }, // Slightly smaller width on small screens
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
            margin: '16px', // Uniform margin around boxes
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Loan Amount
          </Typography>
          <img
            src={AmountImage}
            alt="Loan Amount Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Loan from ₹5000 - ₹100000
          </Typography>
        </Box>

        {/* Tenure Box */}
        <Box
          sx={{
            backgroundColor: '#325379',
            borderRadius: 2,
            padding: 2,
            boxShadow: 3,
            textAlign: 'center',
            height: { xs: '150px', md: '200px' }, // Smaller height on small screens
            width: { xs: '90%', md: '300px' }, // Slightly smaller width on small screens
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
            margin: '16px', // Uniform margin around boxes
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Loan Tenure
          </Typography>
          <img
            src={TenureImage}
            alt="Loan Tenure Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Tenure from 1 to 90 days
          </Typography>
        </Box>

        {/* Unsecure Loan Box */}
        <Box
          sx={{
            backgroundColor: '#325379',
            borderRadius: 2,
            padding: 2,
            boxShadow: 3,
            textAlign: 'center',
            height: { xs: '150px', md: '200px' }, // Smaller height on small screens
            width: { xs: '90%', md: '300px' }, // Slightly smaller width on small screens
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
            margin: '16px', // Uniform margin around boxes
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Unsecure Loan
          </Typography>
          <img
            src={UnsecureLoanImage}
            alt="Unsecure Loan Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Start now
          </Typography>
        </Box>
      </Box>

      {/* Define keyframes for animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Container>
  );
};

export default UnsecuredLoan;
