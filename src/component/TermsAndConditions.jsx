import React from 'react';
import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import { Fade } from '@mui/material';
import termsImage from '../assets/image/Term.jpg'; // Ensure this path is correct

const TermsAndConditions = () => {
    return (
        <div>
            {/* <NavBar /> */}

            {/* Full-screen Image */}
            <Box sx={{ width: '100%', height: 'auto',bgcolor:'white',padding:3,borderRadius:"80px" }}>
                <Fade in timeout={1500}>
                    <img 
                        src={termsImage} 
                        alt="Terms and Conditions" 
                        style={{ 
                            borderRadius:"80px",
                            width: '100%', 
                            height: '80vh', 
                            objectFit: 'cover' // Ensures the image covers the area without distortion
                        }} 
                    />
                </Fade>
            </Box>

            <Container maxWidth="lg" >
                {/* Prominent Heading */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Fade in timeout={1000}>
                        <Typography 
                            variant="h3" 
                            gutterBottom 
                            sx={{    
                                fontFamily: 'cursive',

                                color: 'black', 
                                fontWeight: 'bold', 
                                fontSize: '2.8rem', 
                                letterSpacing: '0.05em',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': { transform: 'scale(1.05)' }
                            }}
                        >
                            Terms and Conditions
                        </Typography>
                    </Fade>
                </Box>

    {/* Terms and Conditions Content */}
    <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
        <Box sx={{ transition: 'transform 0.3s ease-in-out',  fontFamily: 'cursive', fontStyle: 'italic',

 '&:hover': { transform: 'scale(1.05)' } }}>
            <Typography 
                variant="h6" 
                gutterBottom
                sx={{ fontWeight: 'bold' }}
            >
               Welcome to loanonsalary.com. By accessing or using our services, you agree to comply
with and be bound by these Terms and Conditions (&quot;Terms&quot;). These Terms constitute a legal
agreement between you (the &quot;Borrower&quot;) and Datta Finance and Trading Private Limited
(&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). If you do not agree to these Terms, please refrain from
using our services.
</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

                <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
            >
                1. Definitions
            </Typography>
        <Typography sx={{fontFamily: 'cursive'}}>
                <strong>● Borrower:</strong> A salaried individual applying for a loan.
            </Typography>
            <Typography sx={{fontFamily: 'cursive'}}>
                <strong>● Loan:</strong> The financial product offered by the Company, including the principal amount, 
                interest, and any applicable fees.
            </Typography>
            <Typography>
                <strong>● Repayment Schedule:</strong> The agreed timeline for loan repayment.
            </Typography>
            <Typography>
                <strong>● Default:</strong> Failure to repay the loan as per the agreed terms.
            </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}
    >
        2. Eligibility
    </Typography>
    <Typography sx={{fontFamily: 'cursive'}}>
        To be eligible for a loan through loanonsalary.com, you must:
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>Be an Indian citizen or its resident with a valid PAN and Aadhaar card.</li>
        <li>Be between 21 and 58 years of age.</li>
        <li>Be employed with a stable income from a registered organization.</li>
        <li>Have a minimum monthly salary of ₹35,000 (or as specified).</li>
        <li>Maintain an active bank account in your name for loan disbursement and repayment.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        3. Loan Terms
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li><b>Loan Amount:</b> ₹5,000 to ₹1,00,000.</li>
        <li><b>Loan Tenure:</b> Flexible tenure up to 90 days, based on the loan amount and borrower profile.</li>
        <li><b>Interest Rate:</b> The interest rate will be communicated at the time of loan approval and may vary based on the borrower's creditworthiness and employment stability.</li>
        <li><b>Processing Fee:</b> A non-refundable processing fee will be deducted from the loan amount at the time of disbursement.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}
    >
        4. Application Process
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li><b>Online Application:</b> Complete the loan application form available on loanonsalary.com.</li>
        <li><b>Document Submission:</b> Upload the following documents:
        <ul style={{fontFamily: 'cursive'}}>
        <li>PAN Card and Aadhaar Card (for identity verification).</li>
                <li>Latest salary slips (last 3 months).</li>
                <li>Bank statements (last 6 months).</li>
                <li>Employment proof (such as an appointment letter or ID card).</li>
            </ul>
        </li>
        <li><b>Credit Evaluation:</b> We will evaluate your creditworthiness and employment status before approving the loan.</li>
        <li><b>Approval & Agreement:</b> Once approved, you will be required to accept the Loan Agreement electronically.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}
    >
        5. Loan Disbursement
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>The approved loan amount will be credited directly to the bank account provided during the application process.</li>
        <li>Disbursement typically occurs within 5 minutes after loan approval.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}
    >
        6. Repayment Terms
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li><b>Repayment Schedule:</b> The repayment schedule will be shared at the time of loan disbursement and can be made in one go.</li>
        <li><b>Payment Modes:</b> 
        <ul style={{fontFamily: 'cursive'}}>
        <li>Bank transfer (NEFT/RTGS/IMPS).</li>
                <li>UPI (Unified Payment Interface).</li>
                <li>Auto-Debit (ECS/NACH).</li>
            </ul>
        </li>
        <li><b>Late Payments:</b> 
        <ul style={{fontFamily: 'cursive'}}>
        <li>Late payment penalties will be applied as per the loan agreement.</li>
                <li>Continuous default may lead to legal action and impact your credit score.</li>
            </ul>
        </li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}
    >
        7. Fees and Charges
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li><b>Processing Fee:</b> Will be charged as per the loan agreement (non-refundable).</li>
        <li><b>Late Payment Penalty:</b> Will be charged as per the loan agreement.</li>
        <li><b>Prepayment Charges:</b> No charges for early repayment, unless specified in the Loan Agreement.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive'}}
    >
        8. Borrower’s Responsibilities
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>Use the loan for personal financial needs only and not for any unlawful purposes.</li>
        <li>Provide accurate and truthful information during the application and throughout the loan tenure.</li>
        <li>Notify the Company of any changes in employment, income, or contact details.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        9. Default and Recovery
    </Typography>
    <Typography>
        In the event of default, the Company may:
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>Report the defaulter to credit bureaus, which may affect your credit score.</li>
        <li>Initiate legal proceedings for the recovery of the outstanding amount.</li>
        <li>Engage third-party recovery agents to recover the dues, in accordance with applicable laws.</li>
    </ul>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        10. Privacy and Data Security
    </Typography>
    <Typography>
        We prioritize the protection of your personal and financial information. Please refer to our Privacy Policy for details on how we collect, use, and safeguard your data.
    </Typography>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        11. Limitation of Liability
    </Typography>
    <Typography>
        The Company shall not be liable for:
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>Any indirect or consequential damages arising from the use of our services.</li>
        <li>Delays in loan processing or disbursement due to factors beyond our control.</li>
        <li>Financial losses due to inaccurate or incomplete information provided by the Borrower.</li>
    </ul>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        12. Termination of Services
    </Typography>
    <Typography>
        We reserve the right to terminate or suspend your access to our services without prior notice if:
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>You violate these Terms.</li>
        <li>You provide false or misleading information.</li>
        <li>You engage in fraudulent activities.</li>
    </ul>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        13. Governing Law and Jurisdiction
    </Typography>
    <Typography>
        These Terms and Conditions are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi.
    </Typography>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        14. Changes to the Terms and Conditions
    </Typography>
    <Typography>
        We reserve the right to modify these Terms and Conditions at any time. Changes will be notified on our website, and continued use of our services constitutes acceptance of the updated terms.
    </Typography>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'cursive' }}
    >
        15. Contact Us
    </Typography>
    <Typography>
        For any queries, assistance, or complaints, please contact us:
    </Typography>
    <ul style={{fontFamily: 'cursive'}}>
        <li>Datta Finance and Trading Private Limited</li>
        <li>Office Address: 1710, 17th Floor, World Trade Tower, Sector -16, Noida, Uttar Pradesh - 201301</li>
        <li>Email: info@loanonsalary.com</li>
        <li>Phone: 9220535528</li>
    </ul>
</Box>
<Divider sx={{ my: 2 }} />

<Typography>
    By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. Thank you for choosing us as your financial partner.
</Typography>
                </Paper>
            </Container>

           
        </div>
    );
};

export default TermsAndConditions;
