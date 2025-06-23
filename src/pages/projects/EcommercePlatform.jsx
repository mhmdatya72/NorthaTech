import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '../../components/AnimatedSection';
import { useTranslation } from 'react-i18next';

const ProjectContainer = styled(Box)(({ theme, dir }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: dir,
}));

const ProjectImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const EcommercePlatform = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const features = [
        {
            title: t('ecommerce_project_feature1_title', 'نظام دفع آمن'),
            description: t('ecommerce_project_feature1_desc', 'تكامل مع بوابات الدفع المختلفة مع ضمان أمان المعاملات وحماية بيانات العملاء.'),
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: t('ecommerce_project_feature2_title', 'إدارة المخزون'),
            description: t('ecommerce_project_feature2_desc', 'نظام متقدم لإدارة المخزون مع تتبع المنتجات والمستويات والتنبيهات التلقائية.'),
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: t('ecommerce_project_feature3_title', 'تجربة مستخدم سلسة'),
            description: t('ecommerce_project_feature3_desc', 'واجهة مستخدم سهلة الاستخدام مع تصميم متجاوب وتجربة تسوق سلسة.'),
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
    ];

    return (
        <ProjectContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <AnimatedSection direction="right">
                    <Typography variant="h2" component="h1" gutterBottom align={isArabic ? 'right' : 'left'}>
                        {t('projects_ecommerce_title', 'منصة التجارة الإلكترونية')}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph align={isArabic ? 'right' : 'left'}>
                        {t('projects_ecommerce_desc', 'منصة متكاملة للتجارة الإلكترونية مع نظام دفع آمن وإدارة مخزون متقدمة وتجربة مستخدم سلسة')}
                    </Typography>
                </AnimatedSection>

                <Box sx={{ my: 6 }}>
                    <AnimatedSection direction="center">
                        <ProjectImage
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt={t('projects_ecommerce_title', 'منصة التجارة الإلكترونية')}
                        />
                    </AnimatedSection>
                </Box>

                <AnimatedSection direction="left">
                    <Typography variant="h4" component="h2" gutterBottom align={isArabic ? 'right' : 'left'}>
                        {t('ecommerce_project_features_title', 'المميزات الرئيسية')}
                    </Typography>
                </AnimatedSection>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <AnimatedSection direction="up" threshold={0.2}>
                                <FeatureCard>
                                    <Box sx={{ mb: 2 }}>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: '10px',
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </AnimatedSection>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 6 }}>
                    <AnimatedSection direction="up">
                        <Typography variant="h4" component="h2" gutterBottom align={isArabic ? 'right' : 'left'}>
                            {t('ecommerce_project_tech_title', 'التقنيات المستخدمة')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {t('ecommerce_project_tech_frontend', 'الواجهة الأمامية')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        Next.js, Material-UI, Redux Toolkit
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {t('ecommerce_project_tech_backend', 'الخلفية')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        Node.js, Express, PostgreSQL
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {t('ecommerce_project_tech_services', 'الخدمات')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        Stripe, AWS S3, Redis
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                        </Grid>
                    </AnimatedSection>
                </Box>
            </Container>
        </ProjectContainer>
    );
};

export default EcommercePlatform; 