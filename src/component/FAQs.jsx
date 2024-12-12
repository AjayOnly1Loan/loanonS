import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { keyframes } from '@mui/system';
import '@fontsource/pacifico'; // Import the cursive font

const FAQs = () => {
    // Animation for lines coming in one by one
    const lineAnimation = keyframes`
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    return (
        <Box
            sx={{
                padding: 4,
                background: 'black',
                fontFamily: `'Pacifico', cursive`, // Apply cursive font globally
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 4,
                    fontSize: '3rem',
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Box
                sx={{
                    padding: '2rem',
                    backgroundColor: '#f7f7f7',
                    borderRadius: '10px',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        padding: '1rem',
                    }}
                >
                    <div className="accordion-wrapper">
                    {[
  
  {  
      id: 'faq1',  
      question: '1. What is loanonsalary?',  
      answer: `loanonsalary.com is an online platform operated by Datta Finance and Trading Private Limited, providing short-term personal loans exclusively to salaried individuals in India.`  
  },  
  {  
      id: 'faq2',  
      question: '2. What loan amounts are available?',  
      answer: `We offer loan amounts ranging from ₹5,000 to ₹1,00,000, depending on your income, credit profile, and eligibility.`  
  },  
  {  
      id: 'faq3',  
      question: '3. Who is eligible to apply for a loan?',  
      answer: `To be eligible, you must:  
      ● Be an Indian citizen or its resident.  
      ● Be between 21 and 60 years of age.  
      ● Be a salaried employee with a minimum monthly income of ₹35000.  
      ● Have a valid PAN Card and Aadhaar Card.  
      ● Hold an active bank account for loan disbursement and repayment.`  
  },  
  {  
      id: 'faq4',  
      question: '4. How do I apply for a loan?',  
      answer: `You can apply online by following these steps:  
      1. Visit loanonsalary.com.  
      2. Complete the loan application form with your personal, employment, and financial details.  
      3. Upload the required documents.  
      4. Submit the application for review.`  
  },  
  {  
      id: 'faq5',  
      question: '5. What documents are required for loan approval?',  
      answer: `You will need to submit:  
      ● PAN Card and Aadhaar Card for identity verification.  
      ● Latest salary slips (last 3 months).  
      ● Bank statements showing salary credits (last 6 months).  
      ● Employment ID or offer letter for verification.`  
  },  
  {  
      id: 'faq6',  
      question: '6. How long does it take to get loan approval?',  
      answer: `Loan approval typically takes just 30 minutes after submitting all the required documents. However, processing times may vary based on verification requirements.`  
  },  
  {  
      id: 'faq7',  
      question: '7. How is the loan amount disbursed?',  
      answer: `Once approved, the loan amount is disbursed directly into your registered bank account within 5 minutes.`  
  },  
  {  
      id: 'faq8',  
      question: '8. What is the interest rate for the loan?',  
      answer: `The interest rate varies based on your credit profile, income, and loan amount. The exact rate will be communicated during the approval process.`  
  },  
  {  
      id: 'faq9',  
      question: '9. Are there any processing fees?',  
      answer: `Yes, Processing fee is charged as the loan agreement . This fee will be deducted from the loan disbursement.`  
  },  
  {  
      id: 'faq10',  
      question: '10. Can I prepay the loan before the due date?',  
      answer: `Yes, you can prepay your loan before the scheduled due date. Prepayment terms, including any applicable charges, will be outlined in your loan agreement.`  
  },  
  {  
      id: 'faq11',  
      question: '11. What happens if I miss a repayment?',  
      answer: `If you miss a repayment:  
      ● A late payment fee will be charged as per the loan agreement.  
      ● Your credit score may be negatively impacted.  
      ● Continued default may lead to legal action or recovery proceedings.`  
  },  
  {  
      id: 'faq12',  
      question: '12. How can I make loan repayments?',  
      answer: `You can repay your loan through:  
      ● Bank transfer (NEFT/RTGS/IMPS).  
      ● UPI payments.  
      ● Auto-Debit from your registered bank account.`  
  },  
  {  
      id: 'faq13',  
      question: '13. Will applying for a loan affect my credit score?',  
      answer: `Submitting a loan application does not impact your credit score. However, timely repayment can improve your credit score, while defaults or late payments can negatively affect it.`  
  },  
  {  
      id: 'faq14',  
      question: '14. Is my personal information secure?',  
      answer: `Yes, we prioritize the security of your personal information and use advanced encryption and security measures to protect your data. Please refer to our Privacy Policy for more details.`  
  },  
  {  
      id: 'faq15',  
      question: '15. How can I contact customer support?',  
      answer: `For any queries or assistance, you can contact us via:  
      ● Email: info@loanonsalary.com  
      ● Phone: +91 7042334888  
      ● Office Address: 1710, 17th Floor, World Trade Tower, Sector -16, Noida, Uttar Pradesh -201301`  
  }  


].map((faq, index) => (
                            <Accordion
                                key={faq.id}
                                sx={{
                                    marginBottom: '1rem',
                                    backgroundColor: 'white',
                                    animation: `${lineAnimation} 0.5s ease-in-out ${index * 0.2}s forwards`,
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`${faq.id}-content`}
                                    id={`${faq.id}-header`}
                                    sx={{
                                        backgroundColor: 'white',
                                        color: '#1976d2',
                                        '&:hover': {
                                            backgroundColor: '#e3f2fd',
                                        },
                                        '&.Mui-expanded': {
                                            backgroundColor: '#bbdefb',
                                        },
                                    }}
                                >
                                    <Typography>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        animation: `${lineAnimation} 0.5s ease-in-out`,
                                    }}
                                >
                                    <Typography>{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Box>
    );
};

export default FAQs;
