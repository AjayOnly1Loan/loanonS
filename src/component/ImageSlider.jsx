import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const ImageSlider = ({ images, duration = 5000 }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration, isInView]);

  const textOverlays = [
    { text1: "Ease Your Financial Stress", text2: "with Fast Salary Loans" },
    { text1: "Get Instant Cash Support", text2: "with Quick Salary Loans" },
    { text1: "Take Charge of Your Finances", text2: "with Customized Salary Loans" },
  ];

  return (
    <Box
      ref={sliderRef}
      sx={{           

        position: 'relative',
        overflow: 'hidden',
        height: { xs: '40vh', sm: '50vh', md: '65vh', lg: '95vh' },
      }}
    >
      {images?.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: currentImage === index ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            backgroundImage: `url(${image.src})`,
            backgroundPosition: 'center',
            zIndex: currentImage === index ? 1 : 0,
            animation: currentImage === index && isInView ? 'zoomIn 2s ease-in-out forwards' : '',
          }}
        >
          {currentImage === index && isInView && (
            <Box
              sx={{
                fontFamily: 'cursive',

                position: 'absolute',
                bottom: { xs: '10%', sm: '15%', md: '25%' },
                left: '20px',
                color: 'white ',
                textAlign: 'left',
                fontSize: { xs: '1.1rem', sm: '2.2rem' },
                padding: '10px',
                zIndex: 2,
                animation: 'zoomIn 2s ease-in-out forwards',
              }}
            >
              <Typography variant="h4" fontWeight="bold"    fontFamily= 'cursive'
              >
                {textOverlays[index]?.text1}
              </Typography>
              <Typography variant="h4" fontWeight="bold"  fontFamily= 'cursive'>
                {textOverlays[index]?.text2}
              </Typography>
              <Link to="/apply-now">
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: 'cursive',
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', // Shadow for 3D effect
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#FF8F00',
                      transform: 'translateY(-3px)', // Lift effect on hover
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)', // Increased shadow on hover
                    },
                  }}
                >
                  Apply Loan
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      ))}

      {/* CSS for zoom and other animations */}
      <style>
        {`
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ImageSlider;
