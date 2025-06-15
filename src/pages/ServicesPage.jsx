import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Services from '../components/Services'; // Import the existing Services component

const ServicesPageContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    direction: 'rtl',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
    },
}));

const ServicesPage = () => {
    return (
        <ServicesPageContainer>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    خدماتنا
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    اكتشف مجموعتنا الواسعة من الخدمات الرقمية المصممة لتلبية احتياجات عملك وتحقيق أهدافك.
                </Typography>
                {/* The existing Services component will render the service cards */}
                <Services isFullPage={true} />
            </Container>
        </ServicesPageContainer>
    );
};

export default ServicesPage; 