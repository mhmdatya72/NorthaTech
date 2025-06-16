import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const PartnerContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(3, 4),
    margin: theme.spacing(8, 0, 4, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: 'rtl',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        margin: theme.spacing(4, 0, 2, 0),
        padding: theme.spacing(2),
    },
}));

const PartnerTextWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: theme.spacing(1),
    width: '50%',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        alignItems: 'flex-end',
        textAlign: 'right',
    },
}));

const ZohoLogo = styled(Box)(({ theme }) => ({
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
        maxWidth: '400px',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '300px',
            marginBottom: theme.spacing(3),
        },
    },
}));

const TextRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    width: '100%',
    textAlign: 'right',
}));

const BlueText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.palette.primary.light,
    width: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

const BlackText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    width: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

const ZohoPartnerSection = () => {
    return (
        <Container maxWidth="lg">
            <PartnerContainer>
                <PartnerTextWrapper>
                    <TextRow sx={{ width: '100%', justifyContent: 'flex-end' }}>
                        <BlueText>
                            وثوق للتقنيات شريك موثوق
                        </BlueText>
                        <BlackText>
                            لدى
                        </BlackText>
                    </TextRow>
                    <TextRow sx={{ width: '100%', justifyContent: 'flex-end' }}>
                        <BlackText>
                            زوهو لحلول الأعمال
                        </BlackText>
                    </TextRow>
                </PartnerTextWrapper>
                <ZohoLogo>
                    <img
                        src="https://wothoq.co/wp-content/uploads/2023/12/zoho.png"
                        alt="Zoho Authorized Partner"
                    />
                </ZohoLogo>
            </PartnerContainer>
        </Container>
    );
};

export default ZohoPartnerSection; 