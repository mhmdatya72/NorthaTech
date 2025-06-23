import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Services from '../components/Services'; // Import the existing Services component
import { useTranslation } from 'react-i18next';

const ServicesPageContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    direction: theme.direction,
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
    const { t, i18n } = useTranslation();
    return (
        <ServicesPageContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    {t('servicespage_title', 'خدماتنا')}
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    {t('servicespage_desc', 'اكتشف مجموعتنا الواسعة من الخدمات الرقمية المصممة لتلبية احتياجات عملك وتحقيق أهدافك.')}
                </Typography>
                {/* The existing Services component will render the service cards */}
                <Services isFullPage={true} />
            </Container>
        </ServicesPageContainer>
    );
};

export default ServicesPage; 