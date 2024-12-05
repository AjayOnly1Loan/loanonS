import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Person, Home, AttachMoney, CheckCircle } from '@mui/icons-material'; // MUI icons for documents and eligibility
import RupeeIcon from '@mui/icons-material/AttachMoney'; // Import Rupee icon
import DocumentIcon from '../assets/image/documents.png'; // Image for Documents Required heading
import EligibilityIcon from '../assets/image/eligibility.png'; // Image for Eligibility heading

const DocumentEligible = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
     

      <Box
        sx={{
          position: 'relative',
          padding: '40px',
          borderRadius: '15px',
          zIndex: 1,
          backgroundColor: 'white',
        }}
        ref={ref}
      >
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {[
            {
              title: 'Documents Required',
              bgColor: '#e0f7fa',
              icon: DocumentIcon,
              items: [
                { text: 'Proof of Identity', details: 'Aadhaar, PAN', icon: <Person /> },
                { text: 'Proof of Address', details: 'Aadhaar, Utility Bill, Bank Statement, Rent Agreement', icon: <Home /> },
                { text: 'Proof of Income', details: 'Bank Statement, Payslip, Work Email', icon: <RupeeIcon /> },
              ],
            },
            {
              title: 'Eligibility',
              bgColor: '#ffebee',
              icon: EligibilityIcon,
              items: [
                { text: 'Indian Citizen', icon: <CheckCircle /> },
                { text: '21 years of age and above', icon: <CheckCircle /> },
                { text: 'Salary of minimum ₹20,000-35000 every month', icon: <CheckCircle /> },
                { text: ' Salary must be credited regularly to a Bank Account', icon: <CheckCircle /> },
              ],
            },
          ].map(({ title, bgColor, icon, items }, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  backgroundColor: bgColor,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transform: inView ? 'translateY(0)' : 'translateY(-30px)',
                  transition: 'transform 0.7s ease-out',
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
                    fontFamily: 'cursive',
                  }}
                >
                  <img src={icon} alt={title} style={{ width: '40px', height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
                  {title}
                </Typography>
                <List sx={{ backgroundColor: 'white', flexGrow: 1 }}>
                  {items.map(({ text, details, icon }, itemIndex) => (
                    <ListItem
                      key={itemIndex}
                      sx={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                        transition: `opacity 0.7s ease-in-out, transform 0.7s ease-in-out ${itemIndex * 0.4}s`,
                      }}
                    >
                      {icon}
                      <ListItemText
                        primary={text}
                        secondary={details}
                        sx={{
                          marginLeft: '15px',
                          fontFamily: 'cursive',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DocumentEligible;
