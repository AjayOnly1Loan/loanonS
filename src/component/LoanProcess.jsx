import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Icon for Documents Verification
import { SvgIcon } from '@mui/material';

// Loan steps data
const loanSteps = [
  {
    icon: <HowToRegIcon fontSize="large" color="primary" />,
    title: "Apply Online",
    description: "Click on Apply Now, Fill out our quick and easy online application."
  },
  {
    icon: <VerifiedUserIcon fontSize="large" color="secondary" />,
    title: "Documents Verification",
    description: "Submit the required documents for verification."
  },
  {
    icon: <AccountBalanceIcon fontSize="large" color="secondary" />,
    title: "Loan Approval",
    description: "Our team reviews and approves your loan in just 30 minutes."
  },
  {
    icon: <CurrencyRupeeIcon fontSize="large" color="success" />,
    title: "Receive Funds",
    description: "Funds are deposited into your bank account."
  },
];

// Dotted curve and arrow component between steps
const DottedCurve = () => (
  <SvgIcon
    viewBox="0 0 400 100"
    sx={{
      position: 'absolute',
      width: '200px',
      height: '70px',
      top: '30px',
      left: '220px',
      display: { xs: 'none', sm: 'block' }, // Hide on small screens
    }} 
  >
    <path
      d="M 0 50 Q 75 0, 150 50"
      stroke="rgba(0, 0, 0, 0.2)"
      strokeDasharray="5,5"
      fill="transparent"
    />
  </SvgIcon>
);

const LoanProcessDiagram = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Component is in view
        } else {
          setInView(false); // Component is out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "#fff", // White background for the entire container
        py: 6,
        px: 5,
        textAlign: "center",
        position: 'relative',
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Optional shadow for the entire container
        borderRadius: "16px", // Optional border radius for rounded corners
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 5 }}>
        <h2>Good Credit, Bad Credit!</h2>
        <h4>At Speed Loan, we want to help you get your funds in emergency or to re-build your credit score.</h4>
      </Typography>

      <Grid container spacing={8} justifyContent="center" alignItems="flex-start" sx={{ position: 'relative' }}>
        {loanSteps.map((step, index) => (
          <Grid
            item
            xs={12}
            sm={2}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: 'relative',
              mb: 5,
              mx: 4,
              animation: inView ? `slideInRight 0.5s ease forwards` : 'none', // Animate when in view
              '@keyframes slideInRight': {
                '0%': { opacity: 0, transform: "translateX(100px)" },
                '100%': { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                padding: 4,
                border: '2px solid #ddd',
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.15)", // Enhanced shadow for the circles
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "130px",
                height: "130px",
                mb: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "rotate(360deg) scale(1.15)"
                }
              }}
            >
              {step.icon}
            </Box>
            <Typography variant="h6" gutterBottom>
              {step.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {step.description}
            </Typography>

            {/* Add Dotted Curve between steps */}
            {index < loanSteps.length - 1 && <DottedCurve />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LoanProcessDiagram;
