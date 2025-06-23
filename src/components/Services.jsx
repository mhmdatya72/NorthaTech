import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from 'react-i18next';

const ServicesSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6.25, 0),
    backgroundColor: '#ffffff',
    direction: theme.direction,
    minHeight: '100vh',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        fontSize: '2rem',
    },
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
    textAlign: 'right',
    lineHeight: 1.8,
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        fontSize: '1rem',
    },
}));

const AllServicesButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    border: '1px solid ' + theme.palette.primary.main,
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '50px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: '#ffffff',
        borderColor: theme.palette.primary.light,
    },
}));

const ServiceCardStyled = styled(Card)(({ theme }) => ({
    height: '100%',
    minHeight: 370,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    borderRadius: '15px',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#f8f8f8',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    },
}));

const IconContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    '& svg': {
        fontSize: '3rem',
        color: theme.palette.primary.main,
    },
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1976d2 0%, #2196F3 100%)',
    color: '#ffffff',
    padding: theme.spacing(1, 3),
    borderRadius: '50px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    '&:hover': {
        background: 'linear-gradient(135deg, #1565C0 0%, #1976d2 100%)',
    },
}));

const services = [
    {
        icon: <LaptopChromebookIcon />,
        titleKey: 'services_web_title',
        descKey: 'services_web_desc',
        link: '/services/web-development'
    },
    {
        icon: <SearchIcon />,
        titleKey: 'services_seo_title',
        descKey: 'services_seo_desc',
        link: '/services/seo'
    },
    {
        icon: <PhoneIphoneIcon />,
        titleKey: 'services_mobile_title',
        descKey: 'services_mobile_desc',
        link: '/services/mobile-apps'
    },
    {
        icon: <ShareIcon />,
        titleKey: 'services_social_title',
        descKey: 'services_social_desc',
        link: '/services/social-media'
    },
];

const Services = ({ isFullPage }) => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <ServicesSection dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="flex-start">
                    {!isFullPage && (
                        <Grid item xs={12} md={5}>
                            <AnimatedSection direction="right">
                                <Box sx={{
                                    pr: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                    mt: '50px'
                                }}>
                                    <SectionTitle variant="h2" sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                        {t('services_section_title', 'خدماتنا')}
                                    </SectionTitle>
                                    <SectionDescription variant="body1" sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                        {t('services_section_desc', 'إذا كنت تريد تطوير تطبيقات الهواتف الذكية، أوتصميم موقعك الإلكتروني، أو تصميم هويتك التجارية فقد وصلت للمكان المناسب! فنحن ننتج كل ما سبق بجودة رائعة و محتوى جذاب لا يمكن نسيانه.')}
                                    </SectionDescription>
                                    <AllServicesButton
                                        component={Link}
                                        to="/services"
                                        variant="outlined"
                                        endIcon={<ArrowBackIcon />}
                                    >
                                        {t('services_all_btn', 'جميع الخدمات')}
                                    </AllServicesButton>
                                </Box>
                            </AnimatedSection>
                        </Grid>
                    )}
                    <Grid item xs={12} md={isFullPage ? 12 : 7}>
                        <Grid container spacing={4}>
                            {services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={isFullPage ? 4 : undefined} key={index}>
                                    <AnimatedSection direction="left" threshold={0.1}>
                                        <ServiceCardStyled>
                                            <IconContainer>
                                                {service.icon}
                                            </IconContainer>
                                            <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600, textAlign: isArabic ? 'right' : 'left' }}>
                                                {t(service.titleKey)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" paragraph sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                                {t(service.descKey)}
                                            </Typography>
                                            <ReadMoreButton
                                                component={Link}
                                                to={service.link}
                                            >
                                                {t('services_readmore_btn', 'المزيد من القراءة')}
                                            </ReadMoreButton>
                                        </ServiceCardStyled>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ServicesSection>
    );
};

export default Services; 