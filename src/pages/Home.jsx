import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const services = [
    {
        title: 'تصميم وتطوير المواقع',
        description: 'نقوم بتصميم وتطوير مواقع إلكترونية احترافية تناسب احتياجات عملك',
    },
    {
        title: 'تطبيقات الجوال',
        description: 'نطور تطبيقات الهواتف الذكية بأحدث التقنيات وأعلى معايير الجودة',
    },
    {
        title: 'تسويق إلكتروني',
        description: 'نساعدك في الوصول إلى جمهورك المستهدف من خلال استراتيجيات تسويقية فعالة',
    },
];

const Home = () => {
    return (
        <Box>
            <HeroSection>
                <Container>
                    <Typography variant="h2" component="h1" gutterBottom>
                        أهلاً بك في NorthaTech
                    </Typography>
                    <Typography variant="h5" paragraph>
                        شريكك الموثوق في عالم التقنية والرقمنة
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        تواصل معنا
                    </Button>
                </Container>
            </HeroSection>

            <Container sx={{ py: 8 }}>
                <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
                    خدماتنا
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
                        لماذا تختارنا؟
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                خبرة واسعة
                            </Typography>
                            <Typography>
                                فريق عمل محترف مع سنوات من الخبرة في مجال التقنية
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                حلول مبتكرة
                            </Typography>
                            <Typography>
                                نقدم حلولاً تقنية مبتكرة تناسب احتياجات عملك
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                دعم مستمر
                            </Typography>
                            <Typography>
                                نقدم دعماً فنياً مستمراً لضمان نجاح مشروعك
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Home; 