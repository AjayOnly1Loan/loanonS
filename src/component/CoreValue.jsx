import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  styled,
} from '@mui/material';
import {
  Work as FlexiWorkingIcon,
  Verified as IntegrityIcon,
  Star as ProfessionalismIcon,
  EmojiEvents as RecognitionIcon,
} from '@mui/icons-material';

// Array of core values with titles and icons
const coreValues = [
  {
    title: 'Flexi Working',
    icon: <FlexiWorkingIcon fontSize="large" />,
  },
  {
    title: 'Integrity',
    icon: <IntegrityIcon fontSize="large" />,
  },
  {
    title: 'Professionalism',
    icon: <ProfessionalismIcon fontSize="large" />,
  },
  {
    title: 'Recognition',
    icon: <RecognitionIcon fontSize="large" />,
  },
];

// Styled Paper component for hover effect
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Styled Box component for the strip effect
const StripBox = styled(Box)(({ theme }) => ({
  background: 'url(/path/to/your/image.jpg) no-repeat center center',
  backgroundSize: 'cover',
  padding: theme.spacing(2),
  borderRadius: '8px',
  boxShadow: theme.shadows[2],
}));

const CoreValue = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Core Values
      </Typography>
      <StripBox>
        <Grid container spacing={4} justifyContent="center">
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledPaper elevation={3}>
                <Box sx={{ mb: 2 }}>{value.icon}</Box>
                <Typography variant="h6" fontWeight="bold">
                  {value.title}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </StripBox>
    </Container>
  );
};

export default CoreValue;
