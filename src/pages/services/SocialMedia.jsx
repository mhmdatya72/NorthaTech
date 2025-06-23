import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
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

const SocialMedia = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <ServicePage dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <ServiceTitle variant="h1" sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                            {t('socialmedia_title')}
                        </ServiceTitle>
                        <ServiceDescription sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                            {t('socialmedia_desc', 'نساعدك في بناء وإدارة وجودك على منصات التواصل الاجتماعي بشكل احترافي. خدماتنا تشمل:')}
                        </ServiceDescription>
                        <Box component="ul" sx={{ textAlign: isArabic ? 'right' : 'left', fontSize: '1.1rem', lineHeight: 2 }}>
                            <li>{t('socialmedia_list1', 'إدارة حسابات التواصل الاجتماعي')}</li>
                            <li>{t('socialmedia_list2', 'إنشاء محتوى جذاب')}</li>
                            <li>{t('socialmedia_list3', 'إدارة الحملات الإعلانية')}</li>
                            <li>{t('socialmedia_list4', 'تحليل الأداء والتقارير')}</li>
                            <li>{t('socialmedia_list5', 'بناء استراتيجية تواصل فعالة')}</li>
                            <li>{t('socialmedia_list6', 'زيادة التفاعل والمتابعين')}</li>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                            <IconContainer>
                                <ShareIcon />
                            </IconContainer>
                            <ServiceImage
                                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt={t('socialmedia_img_alt', 'إدارة منصات التواصل الاجتماعي')}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ServicePage>
    );
};

export default SocialMedia; 