import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Person, Home, AttachMoney, CheckCircle } from '@mui/icons-material'; // MUI icons for documents and eligibility
import RupeeIcon from '@mui/icons-material/AttachMoney'; // Import Rupee icon
import DocumentIcon from '../assets/image/documents.png'; // Image for Documents Required heading
import EligibilityIcon from '../assets/image/eligibility.png'; // Image for Eligibility heading
import ThinImage from '../assets/image/Add a little bit of body text (1).gif'; // Import your thin image here

const DocumentEligible = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Thin Image at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src={ThinImage} alt="Thin Image" style={{ width: '100%', height: 'auto', maxHeight: '80px' }} />
      </Box>
      
      <Box
        sx={{
          position: 'relative',
          padding: '40px',
          borderRadius: '15px',
          zIndex: 1,
          backgroundColor: 'white', // Set background to white
        }}
        ref={ref}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#e0f7fa', // Heading background color
                transform: inView ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'transform 0.7s ease-out', // Slower animation
              }}
            >
              <Typography variant="h4" gutterBottom sx={{
                display: 'flex',
                alignItems: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out', // Slower animation
                fontFamily: 'cursive', // Cursive font for headings
              }}>
                <img src={DocumentIcon} alt="Documents Required" style={{ width: '40px', height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
                Documents Required
              </Typography>
              <List sx={{ backgroundColor: 'white' }}>
                {[{
                  text: 'Proof of Identity',
                  details: 'Aadhaar, PAN',
                  icon: <Person sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                },
                {
                  text: 'Proof of Address',
                  details: 'Aadhaar, Utility Bill, Bank Statement, Rent Agreement',
                  icon: <Home sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                },
                {
                  text: 'Proof of Income',
                  details: 'Bank Statement, Payslip, Work Email',
                  icon: <RupeeIcon sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                }].map(({ text, details, icon }, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                      transition: `opacity 0.7s ease-in-out, transform 0.7s ease-in-out ${index * 0.4}s`,
                    }}
                  >
                    {icon}
                    <ListItemText
                      primary={text}
                      secondary={details}
                      sx={{
                        marginLeft: '15px', // Add margin between icon and content
                        fontFamily: 'cursive', // Cursive font for content
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#ffebee', // Heading background color
                transform: inView ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'transform 0.7s ease-out',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{
                display: 'flex',
                alignItems: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
                fontFamily: 'cursive', // Cursive font for headings
              }}>
                <img src={EligibilityIcon} alt="Eligibility" style={{ width: '40px', height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
                Eligibility
              </Typography>
              <List sx={{ backgroundColor: 'white' }}>
                {[{
                  text: 'Indian Citizen',
                  icon: <CheckCircle sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                },
                {
                  text: '21 years of age and above',
                  icon: <CheckCircle sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                },
                {
                  text: 'Salary of minimum ₹20,000 every month',
                  icon: <CheckCircle sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                },
                {
                  text: 'Regular salary credit to a bank account',
                  icon: <CheckCircle sx={{ backgroundColor: '#d1c4e9', borderRadius: '50%', padding: '4px' }} />
                }].map(({ text, icon }, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                      transition: `opacity 0.7s ease-in-out, transform 0.7s ease-in-out ${index * 0.4}s`,
                    }}
                  >
                    {icon}
                    <ListItemText
                      primary={text}
                      sx={{
                        marginLeft: '15px', // Add margin between icon and content
                        fontFamily: 'cursive', // Cursive font for content
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DocumentEligible;
