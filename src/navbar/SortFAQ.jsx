import React, { useEffect, useRef, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
    Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SortFAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const faqRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Reset animation when the component leaves the view
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => {
            if (faqRef.current) {
                observer.unobserve(faqRef.current);
            }
        };
    }, []);

    return (
        <Container
            className="loan-calculate"
            sx={{
                padding: 4,
                background: '#f0fff0',
            }}
            ref={faqRef}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#135deg',
                    mb: 4,
                    fontSize: '3rem',
                    fontFamily: 'cursive', // Applying cursive font style
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Box
                sx={{
                    padding: '2rem',
                    backgroundColor: '#f7f7f7',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                }}
            >
                <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <div
                        className="accordion-wrapper"
                        style={{
                            transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
                            transition: 'transform 1s ease-in-out',
                        }}
                    >
                        {/* FAQ Accordion Items */}
                        {faqItems.map((faq, index) => (
                            <Accordion
                                key={index}
                                sx={{
                                    marginBottom: '1rem',
                                    backgroundColor: 'white',
                                    animation: isVisible
                                        ? `dropDownAnimation 0.5s ease-in-out ${index * 0.2}s forwards`
                                        : 'none',
                                    opacity: isVisible ? 1 : 0, // Reset opacity when component goes out of view
                                    '@keyframes dropDownAnimation': {
                                        '0%': {
                                            opacity: 0,
                                            transform: 'translateY(-20px)',
                                        },
                                        '100%': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`faq${index}-content`}
                                    id={`faq${index}-header`}
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
                                    <Typography sx={{ fontFamily: 'cursive' }}>
                                        {index + 1}. {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'cursive' }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Container>
    );
};

// FAQ items data
const faqItems = [
    {
        question: 'What is LoanOnSalarys?',
        answer: 'LoanOnSalarys is a digital platform that provides fast and easy personal loans to salaried professionals in India.',
    },
    {
        question: 'Who can apply for a personal loan on LoanOnSalarys?',
        answer: 'Any salaried individual aged 21 to 60, employed full-time, can apply for a personal loan on LoanOnSalarys.com.',
    },
    {
        question: 'How much loan amount can I get from LoanOnSalarys?',
        answer: 'We offer personal loans ranging from ₹5,000 to ₹1,00,000, depending on your salary and credit history.',
    },
    {
        question: 'How do I apply for a loan on LoanOnSalarys?',
        answer: 'Applying for a loan on LoanOnSalarys.com is easy. Fill out the form, submit the required documents, and receive instant approval.',
    },
    {
        question: 'What documents do I need to apply for a loan?',
        answer: 'The required documents include a valid ID proof, address proof, salary slips, and bank statements.',
    },
];

export default SortFAQ;
