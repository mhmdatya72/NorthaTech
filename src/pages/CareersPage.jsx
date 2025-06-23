import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const CareersPageContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
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

const CareersPage = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <CareersPageContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    {t('careers_title', 'التوظيف')}
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    {t('careers_intro', 'انضم إلى فريقنا المبتكر وكن جزءًا من رحلتنا في عالم التقنية والرقمنة.')}
                </Typography>
                {/* Placeholder for actual career opportunities */}
                <Box sx={{ minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed #ccc', borderRadius: '8px', p: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                        {t('careers_coming_soon', 'فرص وظيفية سيتم إضافتها هنا قريباً.')}
                    </Typography>
                </Box>
            </Container>
        </CareersPageContainer>
    );
};

export default CareersPage; 