import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.jpeg'; // Adjust the path based on your directory structure
import ICICIIcon from '../assets/image/icici-icon.png'; 
import AXISIcon from '../assets/image/axis.png';
import IndusIndIcon from '../assets/image/indusland-icon.png';
import repayLoanBanner from '../assets/image/5.png';

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
      {/* <Header />
      <NavBar /> */}

      {/* Banner */}
      <Box className="banner-inner">
        <img src={repayLoanBanner} style={{ width: '100%' }} alt="Repay Loan" />
      </Box>

      {/* Main Content */}
      <Container>
        <Box className="inner-page-line" mt={5}>
          <Grid container spacing={4}>

            {/* Instruction Section */}
            <Grid container spacing={2} alignItems="center">
          <Grid item lg={4} md={4} xs={12}> {/* Added xs={12} for responsiveness */}
            <Box className="instructions" p={1} textAlign="center" fontSize="13px">
              <Typography>
                Please share a screenshot of the transfer from your bank/Google Pay to 
                <a href="mailto:recovery@speedloan.com"> recovery@speedloan.com</a>.
              </Typography>
            </Box>
          </Grid>
        </Grid>

          </Grid>

          {/* Bank Details Section */}
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              Please repay your loan and interest amount through the following banks:
            </Typography>
            <Grid container spacing={3}>
              {/* ICICI Bank */}
              <Grid item lg={4} md={4}>
                <TableContainer>
                  <Table style={{ border: '2px solid #136654', marginBottom: '20px' }}>
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
                        <TableCell>ICICI Bank Limited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Naman Finlease Pvt. Ltd.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Account Number</TableCell>
                        <TableCell>084305001370</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>IFSC Code</TableCell>
                        <TableCell>ICIC0000843</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Branch Name</TableCell>
                        <TableCell>DWARKA SEC-6 New Delhi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Account Type</TableCell>
                        <TableCell>Current Account</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {/* AXIS Bank */}
              <Grid item lg={4} md={4}>
                <TableContainer>
                  <Table style={{ border: '2px solid #136654', marginBottom: '20px' }}>
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
                        <TableCell>AXIS Bank Limited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Naman Finlease Pvt. Ltd.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Account Number</TableCell>
                        <TableCell>920020009314172</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>IFSC Code</TableCell>
                        <TableCell>UTIB0000160</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Branch Name</TableCell>
                        <TableCell>Saket New Delhi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Account Type</TableCell>
                        <TableCell>Current Account</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {/* IndusInd Bank */}
              <Grid item lg={4} md={4}>
                <TableContainer>
                  <Table style={{ border: '2px solid #136654', marginBottom: '20px' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2} style={tableHeaderStyle}>
                          <img src={IndusIndIcon} alt="Indusind" style={{ width: '50px' }} />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Bank Name</TableCell>
                        <TableCell>IndusInd Bank</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Naman Finlease Pvt. Ltd.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Account Number</TableCell>
                        <TableCell>201002831962</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>IFSC Code</TableCell>
                        <TableCell>INDB0001383</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Branch Name</TableCell>
                        <TableCell>Vasant Vihar, New Delhi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Account Type</TableCell>
                        <TableCell>Current Account</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

    </div>
  );
};

export default RepayLoan;
