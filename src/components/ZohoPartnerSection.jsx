import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';

const PartnerContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(4, 6), // Increased horizontal padding
    margin: theme.spacing(15, 0, 8, 0), // Further increased positive top margin for more spacing
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: 'rtl',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        margin: theme.spacing(8, 0, 4, 0), // Also increased for mobile
        padding: theme.spacing(3), // Adjust padding for mobile
    },
}));

const ZohoLogo = styled(Box)(({ theme }) => ({
    '& img': {
        maxWidth: '220px', // Slightly adjusted based on visual
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(3),
        },
    },
}));

const PartnerTextWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // Align text to the right
    [theme.breakpoints.down('md')]: {
        alignItems: 'center', // Center text on mobile
    },
}));

const BlueText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem', // Matches h3 or slightly larger
    fontWeight: 700,
    color: theme.palette.primary.light, // Use light primary for the blue text
    marginBottom: theme.spacing(0.5), // Small margin between lines
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

const BlackText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem', // Same size as blue text
    fontWeight: 700,
    color: theme.palette.text.primary, // Use text.primary for black text
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

const ZohoPartnerSection = () => {
    return (
        <Container maxWidth="lg">
            <PartnerContainer>
                <PartnerTextWrapper>
                    <BlueText>
                        وثوق للتقنيات شريك موثوق لدى
                    </BlueText>
                    <BlackText>
                        زوهو لحلول الأعمال
                    </BlackText>
                </PartnerTextWrapper>
                <ZohoLogo>
                    <img src={imageUrls.zohoPartner} alt="Zoho Authorized Partner" />
                </ZohoLogo>
            </PartnerContainer>
        </Container>
    );
};

export default ZohoPartnerSection; 