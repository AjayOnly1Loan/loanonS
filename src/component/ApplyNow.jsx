import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Link,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  CurrencyRupee,
  PinDrop,
  CalendarToday,
  Public,
  LocationOn, // Importing icon for location
} from '@mui/icons-material';
import Swal from 'sweetalert2';
import ApplyNowVideo from '../assets/videos/Apply now.mp4'; // Replace with your video path


const ApplyNow = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [formValues, setFormValues] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: '',
    pan: '',
    mobile: '',
    dob: '',
    email_personal: '',
    office_email: '',
    pincode: '',
    salary: '',
    loan_amount: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [animationState, setAnimationState] = useState([]);

  // Placeholder data for states and cities
  const states = [
    { label: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
    { label: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli'] },
    { label: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara'] },
    { label: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur'] },
  ];

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(''); // Reset city when the state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // For mobile input: allow only numbers
    if (name === 'mobile' && !/^\d*$/.test(value)) {
      return;
    }

    // For salary and loan amount: allow only numbers
    if ((name === 'salary' || name === 'loan_amount') && !/^\d*$/.test(value)) {
      return;
    }

    // For pincode: allow only numbers and ensure length is 6
    if (name === 'pincode' && (!/^\d*$/.test(value) || value.length > 6)) {
      return;
    }

    setFormValues({ ...formValues, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Reset error on input change
  };

  const validateForm = () => {
    const errors = {};
    const mobileValid = /^\d{10}$/.test(formValues.mobile);
    const panValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValues.pan); // PAN validation
    const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email_personal);
    const officeEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.office_email);
    const pincodeValid = /^\d{6}$/.test(formValues.pincode);

    Object.keys(formValues).forEach((field) => {
      if (!formValues[field]) {
        errors[field] = 'This field is required';
      }
    });

    if (!mobileValid) {
      errors.mobile = 'Mobile number must be a 10-digit number';
    }
    if (!panValid) {
      errors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
    }
    if (!emailValid) {
      errors.email_personal = 'Invalid email format';
    }
    if (!officeEmailValid) {
      errors.office_email = 'Invalid office email format';
    }
    if (!pincodeValid) {
      errors.pincode = 'Pincode must be 6 digits';
    }
    if (!termsAccepted) {
      errors.termsAccepted = 'You must accept the Terms & Conditions';
    }
    if (!selectedState) {
      errors.state = 'Please select a state';
    }
    if (!selectedCity) {
      errors.city = 'Please select a city';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    Swal.fire({
      title: 'Success!',
      text: 'Our executive will call you or revert you back in 24 hours.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  useEffect(() => {
    // Initialize animation state for each field
    const initialAnimationState = new Array(12 + states.length).fill(false);
    setAnimationState(initialAnimationState);

    // Animate fields one by one
    initialAnimationState.forEach((_, index) => {
      setTimeout(() => {
        setAnimationState((prev) => {
          const newAnimationState = [...prev];
          newAnimationState[index] = true; // Mark field as animated
          return newAnimationState;
        });
      }, index * 300); // Adjust delay as needed
    });
  }, []);

  return (
    <div>
      <Box sx={{ position: 'relative', mb: 4 }}>
        <video
          src={ApplyNowVideo}
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '40%',
            objectFit: 'cover', // Ensures the video covers the container
          }}
        />
        
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box
          component="form"
          id="loanForm"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            backgroundSize: 'cover', // Ensures the image covers the entire form
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay', // Blends the background image with the white overlay
            padding: 4,
            backgroundColor: 'rgba(240, 240, 240, 0.9)', // A very light gray
            borderRadius: 2,
            boxShadow: 3,
            width: '100%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={3}>
            {/* 3 Column Layout */}
            {[
              { label: 'First Name', name: 'first_name', icon: <Person /> },
              { label: 'Middle Name', name: 'middle_name', icon: <Person /> },
              { label: 'Last Name', name: 'last_name', icon: <Person /> },
              { label: 'Gender', name: 'gender', icon: <Person />, type: 'select', options: ['Male', 'Female', 'Others'] },
              { label: 'PAN', name: 'pan', icon: <Public /> }, // PAN Icon
              { label: 'Mobile', name: 'mobile', icon: <Phone /> },
              { label: 'DOB', name: 'dob', icon: <CalendarToday />, type: 'date' },
              { label: 'Email', name: 'email_personal', icon: <Email /> },
              { label: 'Office Email', name: 'office_email', icon: <Email /> },
              { label: 'Pincode', name: 'pincode', icon: <PinDrop /> },
              { label: 'Salary', name: 'salary', icon: <CurrencyRupee />, type: 'number' },
              { label: 'Loan Amount', name: 'loan_amount', icon: <CurrencyRupee />, type: 'number' },
            ].map((field, index) => (
              <Grid item xs={12} sm={4} key={index}>
                {field.type === 'select' ? (
                  <TextField
                    select
                    fullWidth
                    label={field.label}
                    name={field.name}
                    value={formValues[field.name]}
                    onChange={handleInputChange}
                    required
                    error={!!formErrors[field.name]}
                    helperText={formErrors[field.name]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            sx={{
                              bgcolor: '#cfe8fc',
                              borderRadius: '50%',
                              padding: '6px',
                              marginRight: '8px',
                              
                            }}
                          >
                            {field.icon}
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      opacity: animationState[index] ? 1 : 0,
                      transform: animationState[index] ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s, transform 0.5s',
                    }}
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    type={field.type || 'text'}
                    value={formValues[field.name]}
                    onChange={handleInputChange}
                    required
                    error={!!formErrors[field.name]}
                    helperText={formErrors[field.name]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            sx={{
                              bgcolor: '#cfe8fc',
                              borderRadius: '50%',
                              padding: '6px',
                              marginRight: '8px',
                            }}
                          >
                            {field.icon}
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      opacity: animationState[index] ? 1 : 0,
                      transform: animationState[index] ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s, transform 0.5s',
                    }}
                  />
                )}
              </Grid>
            ))}

            {/* State Dropdown */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="State"
                value={selectedState}
                onChange={handleStateChange}
                required
                error={!!formErrors.state}
                helperText={formErrors.state}
                sx={{
                  opacity: animationState[12] ? 1 : 0,
                  transform: animationState[12] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s, transform 0.5s',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          bgcolor: '#cfe8fc',
                          borderRadius: '50%',
                          padding: '6px',
                          marginRight: '8px',
                        }}
                      >
                        <LocationOn />
                      </Box>
                    </InputAdornment>
                  ),
                }}
              >
                {states.map((state) => (
                  <MenuItem key={state.label} value={state.label}>
                    {state.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* City Dropdown */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="City"
                value={selectedCity}
                onChange={handleCityChange}
                required
                error={!!formErrors.city}
                helperText={formErrors.city}
                sx={{
                  opacity: animationState[13] ? 1 : 0,
                  transform: animationState[13] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s, transform 0.5s',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          bgcolor: '#cfe8fc',
                          borderRadius: '50%',
                          padding: '6px',
                          marginRight: '8px',
                        }}
                      >
                        <LocationOn />
                      </Box>
                    </InputAdornment>
                  ),
                }}
              >
                {selectedState &&
                  states
                    .find((state) => state.label === selectedState)
                    .cities.map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))}
              </TextField>
            </Grid>
          </Grid>

          {/* Terms and Conditions Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I accept the{' '}
                <Link href="/terms-condition" color="primary">
                  Terms & Conditions
                </Link>
                &  <Link href="/privacy-policy" color="primary">
                  Privacy Policy
                </Link>
              </Typography>
            }
          />
          {formErrors.termsAccepted && (
            <Typography color="error">{formErrors.termsAccepted}</Typography>
          )}

          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{
              '&:hover': {
                backgroundColor: 'vlue', // Vibrant hover color
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.8), 0 0 25px rgba(255, 215, 0, 0.7)', // Darker golden shadow effect
              },
            }}
          >
            Submit
          </Button>


        </Box>
        </Container>
       
    </div>
    
  );
};

export default ApplyNow;
