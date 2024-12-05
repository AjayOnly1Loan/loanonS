import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ImageSlider from '../component/ImageSlider';
import LoanCalculator from '../component/LoanCalculator';
import LoanCalculate from './LoanCalculate';
import UnsecuredLoan from '../component/LoanComponent';
import DocumentEligible from '../component/DocumenEligible';
import SortFAQ from './SortFAQ';
import { useInView } from 'react-intersection-observer';

// Import images
import Img2 from '../assets/image/slider5.jpg';
import Img4 from '../assets/image/head.jpg';
import Img3 from '../assets/image/LOan100dya.png';

const images = [
  { src: Img2, alt: "Image 1" },
  { src: Img4, alt: "Image 2" },
  { src: Img3, alt: "Image 3" },
];

function MainContent() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const aboutUsTextLines = [
    "Welcome to LoanOnSalary, your trusted partner in empowering you on financial grounds.",
    "We are a dedicated online platform operated by Datta Finance and Trading Private Limited, an RBI-registered Non-Banking Financial Company (NBFC), offering swift and convenient short-term loans exclusively to salaried individuals.",
  ];

  return (
    <div>
      {/* Image Slider */}
      <ImageSlider images={images} />

      {/* Marquee Bar */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#333',
          py: 1,
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          style={{ fontSize: '1rem', fontFamily: 'cursive' }}
        >
          At LoanOnSalary, we are your reliable financial partner, dedicated to offering fast, flexible, and transparent personal loan solutions tailored specifically for salaried professionals across India. We understand that life is full of unexpected moments that require quick financial support, whether for medical emergencies, home improvements, educational needs, or personal celebrations.
        </marquee>
      </Box>

      {/* Who Are We Section */}
      <Box
        ref={ref}
        sx={{
          borderRadius:'30px',

          position: 'relative',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          padding: { xs: '20px', sm: '30px' },
          overflow: 'hidden',
        }}
      >
        {/* Left Section: Heading */}
        <Box
          sx={{

            flex: 1,
            textAlign: 'left',
            zIndex: 1,
            marginRight: { xs: '0', md: '40px' },
            marginBottom: { xs: '20px', md: '0' }, // Add spacing for small screens
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="black"
            mb={1}
            sx={{
              marginLeft: { xs: 2, sm: 10 },
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Who Are We?
          </Typography>
        </Box>

        {/* Right Section: Content */}
        <Box
          sx={{
            flex: 2,
            textAlign: 'left',
            zIndex: 1,
            maxWidth: '600px',
          }}
        >
          {aboutUsTextLines.map((line, index) => (
            <Typography
              key={index}
              fontSize={{ xs: '16px', sm: '22px' }}
              lineHeight={{ xs: '25px', sm: '30px', md: '40px' }}
              sx={{
                fontWeight: 540,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`,
                display: 'block',
                marginBottom: '10px',
              }}
            >
              {line}
            </Typography>
          ))}

          {/* Read More Button */}
          <Button
            variant="contained"
            href="/about-us"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '80px',
              fontWeight: 'bold',
              fontSize: { xs: '14px', sm: '16px' },
              padding: { xs: '8px 16px', sm: '6px 30px' },
              '&:hover': {
                backgroundColor: '#FFAA00',
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>

      {/* Other Components */}
      <LoanCalculator />
      <LoanCalculate />
      <UnsecuredLoan />
      <DocumentEligible />
      <SortFAQ />
    </div>
  );
}

export default MainContent;
