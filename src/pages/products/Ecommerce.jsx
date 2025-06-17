import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '../../components/AnimatedSection';

const ProductContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    direction: 'rtl',
}));

const ProductImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        height: '300px',
    },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const FeatureIcon = styled('img')(({ theme }) => ({
    width: '64px',
    height: '64px',
    marginBottom: theme.spacing(2),
}));

const Ecommerce = () => {
    const features = [
        {
            title: 'واجهة متجر احترافية',
            description: 'تصميم عصري وجذاب مع تجربة مستخدم سلسة وسهولة في التنقل والبحث.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
        {
            title: 'إدارة المخزون',
            description: 'نظام متكامل لإدارة المخزون مع تتبع المنتجات والمخزون والتنبيهات التلقائية.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
        {
            title: 'نظام دفع آمن',
            description: 'تكامل مع بوابات الدفع المختلفة مع ضمان أمان المعاملات وحماية بيانات العملاء.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
        {
            title: 'لوحة تحكم متقدمة',
            description: 'لوحة تحكم شاملة لإدارة المبيعات، العملاء، التقارير، والإحصائيات.',
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
    ];

    return (
        <ProductContainer>
            <Container maxWidth="lg">
                <AnimatedSection direction="right">
                    <Typography variant="h3" component="h1" gutterBottom align="center">
                        منصة التجارة الإلكترونية
                    </Typography>
                    <Typography variant="h6" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
                        حل متكامل للتجارة الإلكترونية يوفر تجربة تسوق سلسة مع إدارة مخزون متقدمة ونظام دفع آمن
                    </Typography>
                </AnimatedSection>

                <AnimatedSection direction="left">
                    <ProductImage
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="منصة التجارة الإلكترونية"
                    />
                </AnimatedSection>

                <AnimatedSection direction="right">
                    <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                        المميزات الرئيسية
                    </Typography>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <FeatureCard elevation={3}>
                                    <FeatureIcon src={feature.icon} alt={feature.title} />
                                    <Typography variant="h6" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection direction="left">
                    <Box sx={{ mt: 8 }}>
                        <Typography variant="h4" gutterBottom>
                            التقنيات المستخدمة
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>
                                    الواجهة الأمامية
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    • React.js
                                    <br />
                                    • Next.js
                                    <br />
                                    • Tailwind CSS
                                    <br />
                                    • Redux Toolkit
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>
                                    الخلفية
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    • Node.js
                                    <br />
                                    • Express.js
                                    <br />
                                    • PostgreSQL
                                    <br />
                                    • Redis
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>
                                    الخدمات
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    • AWS S3
                                    <br />
                                    • Stripe
                                    <br />
                                    • SendGrid
                                    <br />
                                    • Algolia Search
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </AnimatedSection>
            </Container>
        </ProductContainer>
    );
};

export default Ecommerce; 