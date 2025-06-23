import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
    color: 'white',
    padding: theme.spacing(15, 0),
    textAlign: 'center',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const Home = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const services = [
        {
            title: t('home_service1_title', 'تصميم وتطوير المواقع'),
            description: t('home_service1_desc', 'نقوم بتصميم وتطوير مواقع إلكترونية احترافية تناسب احتياجات عملك'),
        },
        {
            title: t('home_service2_title', 'تطبيقات الجوال'),
            description: t('home_service2_desc', 'نطور تطبيقات الهواتف الذكية بأحدث التقنيات وأعلى معايير الجودة'),
        },
        {
            title: t('home_service3_title', 'تسويق إلكتروني'),
            description: t('home_service3_desc', 'نساعدك في الوصول إلى جمهورك المستهدف من خلال استراتيجيات تسويقية فعالة'),
        },
    ];
    return (
        <Box dir={isArabic ? 'rtl' : 'ltr'}>
            <HeroSection>
                <Container>
                    <Typography variant="h2" component="h1" gutterBottom>
                        {t('home_hero_title', 'أهلاً بك في NorthaTech')}
                    </Typography>
                    <Typography variant="h5" paragraph>
                        {t('home_hero_subtitle', 'شريكك الموثوق في عالم التقنية والرقمنة')}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        {t('home_hero_cta', 'تواصل معنا')}
                    </Button>
                </Container>
            </HeroSection>

            <Container sx={{ py: 8 }}>
                <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
                    {t('home_services_title', 'خدماتنا')}
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <ServiceCard>
                                <CardContent>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
                <Container>
                    <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
                        {t('home_whyus_title', 'لماذا تختارنا؟')}
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {t('home_whyus_experience_title', 'خبرة واسعة')}
                            </Typography>
                            <Typography>
                                {t('home_whyus_experience_desc', 'فريق عمل محترف مع سنوات من الخبرة في مجال التقنية')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {t('home_whyus_innovative_title', 'حلول مبتكرة')}
                            </Typography>
                            <Typography>
                                {t('home_whyus_innovative_desc', 'نقدم حلولاً تقنية مبتكرة تناسب احتياجات عملك')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {t('home_whyus_support_title', 'دعم مستمر')}
                            </Typography>
                            <Typography>
                                {t('home_whyus_support_desc', 'نقدم دعماً فنياً مستمراً لضمان نجاح مشروعك')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Home; 