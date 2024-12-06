import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container ,Link} from '@mui/material';
import AmountImage from '../assets/image/rupees.png'; // Replace with your amount icon image path
import TenureImage from '../assets/image/tenure.png'; // Replace with your tenure icon image path
import UnsecureLoanImage from '../assets/image/unsecure.png'; // Replace with your unsecure loan icon image path
import PaperlessDisbursal from '../assets/image/7.webp';
import disbursal from '../assets/image/9.webp';

const Loan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true); // State to control animation
  const [animationState, setAnimationState] = useState('running'); // Control the animation play state
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.03 }
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

  const handleClick = () => {
    // Toggle the animation state to pause or resume the animation
    setAnimationState((prev) => (prev === 'running' ? 'paused' : 'running'));
  };

  return (
    <Container ref={containerRef} sx={{ mt: 6, overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          animation: isAnimating
            ? isVisible
              ? 'marquee 10s linear infinite'
              : 'none'
            : 'none', // Only animate if isAnimating is true
          animationPlayState: animationState, // Control the play state of the animation
        }}
        onClick={handleClick} // Toggle animation on box click
      >
        {/* Amount Box */}
        <Box sx={commonBoxStyles}>
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Loan Amount
          </Typography>
          <img
            src={AmountImage}
            alt="Loan Amount Icon"
            style={{ width: 50, height: 50, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Loan from ₹5000 - ₹100000
          </Typography>
        </Box>

        {/* Tenure Box */}
        <Box sx={commonBoxStyles}>
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Loan Tenure
          </Typography>
          <img
            src={TenureImage}
            alt="Loan Tenure Icon"
            style={{ width: 50, height: 50, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Tenure from 7 to 90 days
          </Typography>
        </Box>

        {/* Paperless Disbursal */}
        <Box sx={commonBoxStyles}>
          <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
            100% Paperless
          </Typography>
          <img
            src={PaperlessDisbursal}
            alt="Paperless Disbursal Icon"
            style={{ width: 60, height: 60, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            100% Paperless Verification Process
          </Typography>
        </Box>

        {/* Instant Disbursal */}
        <Box sx={commonBoxStyles}>
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Instant Loan
          </Typography>
          <img
            src={disbursal}
            alt="Instant Disbursal Icon"
            style={{ width: 70, height: 70, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Swift Payout
          </Typography>
        </Box>

        {/* Unsecure Loan Box */}
        <Box sx={commonBoxStyles}>
        <Link href="/apply-now" sx={{ color: 'white', textDecoration: 'underline' }}>

  <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
    Unsecured Loan
  </Typography>
  <img
    src={UnsecureLoanImage}
    alt="Unsecure Loan Icon"
    style={{ width: 50, height: 50, marginBottom: '8px' }}
  />
  <Typography variant="body1" sx={{ color: 'white' }}>
      Start Now
  </Typography>
  </Link>

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

// Common styles for each box
const commonBoxStyles = {
  backgroundColor: 'black',
  borderRadius: 2,
  padding: 2,
  boxShadow: 3,
  textAlign: 'center',
  height: { xs: '150px', md: '200px' },
  width: { xs: '90%', md: '300px' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 6,
  },
  margin: '16px',
};

export default Loan;
