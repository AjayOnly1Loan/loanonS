import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Paper, Divider, Slide } from '@mui/material';
import { Fade } from '@mui/material';
import privacyImage from '../assets/image/policyprivacy.png'; // Ensure this path is correct

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            content: [
                "When you interact with Speedloans.com, we may collect the following types of information:",
                "• Personal Identification Information: Name, email address, phone number, physical address, date of birth, PAN, Aadhar details, etc.",
                "• Financial Information: Bank account details, income statements, GST Number, credit history when applying for a loan, statement of bank account, etc.",
            ]
        },
        {
            title: "2. How We Use Your Information",
            content: [
                "We use the information we collect to:",
                "• Process loan applications and verify your identity.",
                "• Improve our services and website functionality.",
                "• Communicate important updates regarding your loan, account status, and relevant services.",
                "• Conduct internal audits and comply with legal and regulatory obligations.",
                "• Personalize your experience and offer customized loan solutions.",
            ]
        },
        {
            title: "3. Sharing Your Information",
            content: [
                "We do not sell or rent your personal information to third parties. However, we may share your data under the following circumstances:",
                "• With trusted third-party service providers who help us in delivering our services (e.g., payment processors, verification agencies).",
                "• To comply with legal obligations, regulatory requests, or to protect the rights and safety of Speedloans.com and its users.",
                "• With Naman Finlease Private Limited, our parent NBFC, for the purpose of processing loan applications and facilitating transactions.",
            ]
        },
        {
            title: "4. Data Security",
            content: [
                "Speedloans.com takes appropriate measures to protect your personal and financial data. We use industry-standard encryption methods and secure servers to prevent unauthorized access, data breaches, or misuse of information.",
            ]
        },
        {
            title: "5. Cookies",
            content: [
                "Our website may use cookies to improve the user experience. Cookies are small text files stored on your device that help us understand how you use our website. You can choose to accept or decline cookies in your browser settings. However, declining cookies may affect your ability to use certain features on the site.",
            ]
        },
        {
            title: "6. Your Rights",
            content: [
                "You have the right to:",
                "• Access the personal information we hold about you.",
                "• Request corrections to any inaccurate or incomplete information.",
                "• Opt out of marketing communications at any time.",
                "• Request deletion of your personal data, subject to legal obligations.",
            ]
        },
        {
            title: "7. Third-Party Links",
            content: [
                "Speedloans.com may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their respective privacy policies.",
            ]
        },
        {
            title: "8. Changes to This Privacy Policy",
            content: [
                "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
            ]
        },
        {
            title: "9. Contact Us",
            content: [
                "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:",
                "Email: privacy@speedloans.com",
                "Phone: [Insert Contact Phone Number]",
                "Address: [Insert Physical Address]",
            ]
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const policyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Set visibility to true when in view
            } else {
                setIsVisible(false); // Set visibility to false when out of view
            }
        });

        if (policyRef.current) {
            observer.observe(policyRef.current);
        }

        return () => {
            if (policyRef.current) {
                observer.unobserve(policyRef.current);
            }
        };
    }, []);

    return (
        <div ref={policyRef}>
            {/* Full-screen Image */}
            <Box sx={{ width: '100%', height: 'auto',bgcolor:'white',padding:3,borderRadius:"80px" }}>
                <Slide direction="left" in={isVisible} timeout={1000}>
                    <img 
                        src={privacyImage} 
                        alt="Privacy Policy" 
                        style={{  
                            borderRadius:'80px',
                            marginTop: '0px',
                            width: '100%', 
                            height: 'auto', 
                            objectFit: 'cover' // Ensures the image covers the area without distortion
                        }} 
                    />
                </Slide>
            </Box>

            <Container maxWidth="lg">
                {/* Prominent Heading */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Fade in={isVisible} timeout={1000}>
                        <Typography 
                            variant="h3" 
                            gutterBottom 
                            sx={{ 
                                color: 'black', 
                                fontWeight: 'bold', 
                                fontSize: '2.8rem', 
                                letterSpacing: '0.05em',
                                fontFamily: 'cursive',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': { transform: 'scale(1.05)' }
                            }}
                        >
                            Privacy Policy
                        </Typography>
                    </Fade>
                </Box>

                {/* Policy Content */}
                <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                                <Fade in={isVisible} timeout={1000 + sectionIndex * 500}>
                                    <Typography 
                                        variant="h6" 
                                        gutterBottom 
                                        sx={{ color: '#0b2747', fontWeight: 'bold', fontFamily: 'cursive' }}
                                    >
                                        {section.title}
                                    </Typography>
                                </Fade>
                                {section.content.map((line, lineIndex) => (
                                    <Fade in={isVisible} timeout={1200 + sectionIndex * 500 + lineIndex * 500} key={lineIndex}>
                                        <Typography>
                                            {line}
                                        </Typography>
                                    </Fade>
                                ))}
                            </Box>

                            <Divider sx={{ my: 2 }} />
                        </div>
                    ))}
                </Paper>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
