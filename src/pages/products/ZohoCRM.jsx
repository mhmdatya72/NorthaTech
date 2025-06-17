import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '../../components/AnimatedSection';

const ProductContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: 'rtl',
}));

const ProductImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const features = [
    {
        title: 'إدارة العملاء',
        description: 'تتبع وإدارة علاقات العملاء بشكل فعال مع قاعدة بيانات متكاملة',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'إدارة المبيعات',
        description: 'تتبع الفرص والمبيعات وإدارة خطوط المبيعات بشكل احترافي',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'التقارير والتحليلات',
        description: 'تقارير تفصيلية وتحليلات متقدمة لاتخاذ القرارات المبنية على البيانات',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
];

const ZohoCRM = () => {
    return (
        <ProductContainer>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <AnimatedSection direction="right">
                            <Typography variant="h3" component="h1" gutterBottom>
                                زوهو CRM
                            </Typography>
                            <Typography variant="h5" color="text.secondary" paragraph>
                                نظام إدارة علاقات العملاء المتكامل من زوهو
                            </Typography>
                            <Typography variant="body1" paragraph>
                                زوهو CRM هو نظام متكامل لإدارة علاقات العملاء يساعد الشركات على إدارة وتتبع علاقاتها مع العملاء بشكل فعال. يوفر النظام مجموعة شاملة من الأدوات لإدارة المبيعات والتسويق وخدمة العملاء.
                            </Typography>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AnimatedSection direction="left">
                            <Box display="flex" justifyContent="center">
                                <ProductImage
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="زوهو CRM"
                                />
                            </Box>
                        </AnimatedSection>
                    </Grid>
                </Grid>

                <Box mt={8}>
                    <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                        المميزات الرئيسية
                    </Typography>
                    <Grid container spacing={4} mt={2}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <AnimatedSection direction="up" threshold={0.1}>
                                    <FeatureCard>
                                        <Box
                                            component="img"
                                            src={feature.image}
                                            alt={feature.title}
                                            sx={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: '4px',
                                                mb: 2,
                                            }}
                                        />
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.description}
                                        </Typography>
                                    </FeatureCard>
                                </AnimatedSection>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box mt={8}>
                    <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                        التقنيات المستخدمة
                    </Typography>
                    <Grid container spacing={4} mt={2}>
                        <Grid item xs={12} md={4}>
                            <AnimatedSection direction="up" threshold={0.1}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        الواجهة الأمامية
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        واجهة مستخدم متجاوبة وسهلة الاستخدام مع تصميم عصري
                                    </Typography>
                                </FeatureCard>
                            </AnimatedSection>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <AnimatedSection direction="up" threshold={0.1}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        الخدمات السحابية
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        بنية تحتية سحابية متطورة مع إمكانية التوسع والتخصيص
                                    </Typography>
                                </FeatureCard>
                            </AnimatedSection>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <AnimatedSection direction="up" threshold={0.1}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        التكامل
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        تكامل مع مجموعة واسعة من التطبيقات والخدمات الخارجية
                                    </Typography>
                                </FeatureCard>
                            </AnimatedSection>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ProductContainer>
    );
};

export default ZohoCRM; 