import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.jpeg'; // Adjust the path based on your directory structure
import ICICIIcon from '../assets/image/YESBANK.NS_BIG.svg'; 
import AXISIcon from '../assets/image/HDFC_Bank_Logo.svg';
import IndusIndIcon from '../assets/image/indusland-icon.png';
import repayLoanBanner from '../assets/image/Repay (2).jpg';

import { Container, Grid, Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const RepayLoan = () => {
  // Define the CSS for blinking effect
  const blinkStyle = {
    animation: 'blink 1s infinite',
    '@keyframes blink': {
      '0%': {
        transform: 'scale(1)',
        opacity: 1,
      },
      '50%': {
        transform: 'scale(1.05)',
        opacity: 0.7,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 1,
      },
    },
  };

  const tableHeaderStyle = {
    background: 'linear-gradient(145deg, #1a1f3c, #252b5e)', // 3D effect with gradient
    color: 'white',
  };

  return (
    <div>
     
      {/* Banner */}
      <Box className="banner-inner" sx={{ padding: '25px'  }}>
  <img src={repayLoanBanner} style={{ width: '100%', height: '100%', maxHeight: '500px', borderRadius:'50px'}} alt="Repay Loan" />
</Box>


      {/* Main Content */}
      <Container>
        <Box className="inner-page-line" mt={5}>
          <Grid container spacing={4}>

            {/* Instruction Section */}
            <Grid container spacing={2} alignItems="center" justifyContent="center">
  <Grid item lg={4} md={4} xs={12}> {/* Added xs={12} for responsiveness */}
    <Box
      className="instructions"
      p={1}
      textAlign="center"
      fontSize="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%" 
    >
      <Typography sx={{ fontFamily: 'cursive', textAlign: 'center' }}>
        Please share a screenshot of the transfer from your bank/Google Pay to
        <a href="mailto:recovery@loanonsalary.com"> recovery@loanonsalary.com</a>.
      </Typography>
    </Box>
  </Grid>
</Grid>


          </Grid>

          {/* Bank Details Section */}
          <Box mt={5} sx={{ textAlign: 'center',fontFamily:'cursive' }}>
  <Typography variant="h6" gutterBottom sx={{fontFamily:'cursive'}}>
    Please repay your loan and interest amount through the following banks:
  </Typography>
  <Grid container spacing={3} justifyContent="center">
    {/* ICICI Bank */}
    <Grid item lg={4} md={4} xs={12}>
      <Box sx={{ padding: '20px', border: '2px solid #136654', borderRadius: '10px', boxShadow: 3, textAlign: 'center' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2} style={tableHeaderStyle}>
                  <img src={ICICIIcon} alt="ICICI" style={{ width: '50px' }} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Bank Name</TableCell>
                <TableCell>Yes Bank Limited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Datta finance and trading private limited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Account Number</TableCell>
                <TableCell>73681300000178</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IFSC Code</TableCell>
                <TableCell>YESB0000736</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Branch Name</TableCell>
                <TableCell>Noida-Sector 18 Branch, Sector18-201301</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Account Type</TableCell>
                <TableCell>Current Account</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>

    {/* AXIS Bank */}
    <Grid item lg={4} md={4} xs={12}>
      <Box sx={{ padding: '20px', border: '2px solid #136654', borderRadius: '10px', boxShadow: 3, textAlign: 'center' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2} style={tableHeaderStyle}>
                  <img src={AXISIcon} alt="AXIS" style={{ width: '50px' }} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Bank Name</TableCell>
                <TableCell>HDFC Bank Limited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Datta finance and trading private limited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Account Number</TableCell>
                <TableCell>50200099829540</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IFSC Code</TableCell>
                <TableCell>HDFC0001351</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Branch Name</TableCell>
                <TableCell>B 222/223,Dynamic House Sector 16 Noida-201301</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Account Type</TableCell>
                <TableCell>Current Account</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  </Grid>
</Box>

        </Box>
      </Container>

    </div>
  );
};

export default RepayLoan;
