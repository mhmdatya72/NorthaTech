import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const HeaderBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark, // A dark blue color
    color: '#ffffff',
    padding: theme.spacing(10, 0, 5, 0), // Adjust padding as needed
    textAlign: 'right',
    direction: theme.direction,
    marginTop: theme.spacing(8), // To push it below the fixed Navbar
}));

const PageHeader = ({ title }) => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <HeaderBox dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: isArabic ? 'right' : 'left' }}>
                    {title}
                </Typography>
            </Container>
        </HeaderBox>
    );
};

export default PageHeader; 