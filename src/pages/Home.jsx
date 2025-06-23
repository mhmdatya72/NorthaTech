import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
    color: 'white',
    padding: theme.spacing(15, 0),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6, 0),
    },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: 0,
        width: '100%',
        margin: '0 auto',
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        marginBottom: theme.spacing(2),
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
                <Container sx={{ px: { xs: 2, sm: 4 } }}>
                    <SectionTitle variant="h2" component="h1" gutterBottom>
                        {t('home_hero_title', 'أهلاً بك في NorthaTech')}
                    </SectionTitle>
                    <Typography variant="h5" paragraph sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
                        {t('home_hero_subtitle', 'شريكك الموثوق في عالم التقنية والرقمنة')}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.2rem' }, px: { xs: 2, sm: 4 }, py: { xs: 1, sm: 2 } }}
                    >
                        {t('home_hero_cta', 'تواصل معنا')}
                    </Button>
                </Container>
            </HeroSection>

            <Container sx={{ py: { xs: 4, sm: 8 }, px: { xs: 2, sm: 4 } }}>
                <SectionTitle variant="h3" component="h2" textAlign="center" gutterBottom>
                    {t('home_services_title', 'خدماتنا')}
                </SectionTitle>
                <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ mt: 2 }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <ServiceCard>
                                <CardContent>
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.3rem' } }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ bgcolor: 'grey.100', py: { xs: 4, sm: 8 }, px: { xs: 0 } }}>
                <Container sx={{ px: { xs: 2, sm: 4 } }}>
                    <SectionTitle variant="h3" component="h2" textAlign="center" gutterBottom>
                        {t('home_whyus_title', 'لماذا تختارنا؟')}
                    </SectionTitle>
                    <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                                {t('home_whyus_experience_title', 'خبرة واسعة')}
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                                {t('home_whyus_experience_desc', 'فريق عمل محترف مع سنوات من الخبرة في مجال التقنية')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                                {t('home_whyus_innovative_title', 'حلول مبتكرة')}
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                                {t('home_whyus_innovative_desc', 'نقدم حلولاً تقنية مبتكرة تناسب احتياجات عملك')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                                {t('home_whyus_support_title', 'دعم مستمر')}
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
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