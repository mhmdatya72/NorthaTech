import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const ServicePage = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#ffffff',
    direction: theme.direction,
    minHeight: '100vh',
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    textAlign: 'right',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(2),
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
    textAlign: 'right',
    lineHeight: 1.8,
}));

const IconContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50%',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '120px',
    '& svg': {
        fontSize: '4rem',
        color: theme.palette.primary.main,
    },
}));

const ServiceImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const SEO = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <ServicePage dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <ServiceTitle variant="h1" sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                            {t('seo_title', 'تحسين محركات البحث (SEO)')}
                        </ServiceTitle>
                        <ServiceDescription sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                            {t('seo_desc', 'نقدم خدمات تحسين محركات البحث لتعزيز تواجدك على الإنترنت وتحسين ترتيب موقعك في نتائج البحث. خدماتنا تشمل:')}
                        </ServiceDescription>
                        <Box component="ul" sx={{ textAlign: isArabic ? 'right' : 'left', fontSize: '1.1rem', lineHeight: 2 }}>
                            <li>{t('seo_list1', 'تحليل وتحسين الكلمات المفتاحية')}</li>
                            <li>{t('seo_list2', 'تحسين محتوى الموقع')}</li>
                            <li>{t('seo_list3', 'تحسين هيكل الموقع وسرعته')}</li>
                            <li>{t('seo_list4', 'بناء روابط خلفية قوية')}</li>
                            <li>{t('seo_list5', 'تحليل المنافسين')}</li>
                            <li>{t('seo_list6', 'تقارير أداء دورية')}</li>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                            <IconContainer>
                                <SearchIcon />
                            </IconContainer>
                            <ServiceImage
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt={t('seo_img_alt', 'تحسين محركات البحث')}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ServicePage>
    );
};

export default SEO; 