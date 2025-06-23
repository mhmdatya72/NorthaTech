import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '../../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductContainer = styled(Box)(({ theme, dir }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    direction: dir,
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

const SolutionCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const FeatureIcon = styled('img')(({ theme }) => ({
    width: '64px',
    height: '64px',
    marginBottom: theme.spacing(2),
}));

const CMS = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    const handleReadMore = () => {
        navigate('/products/cms');
    };

    const solutions = [
        {
            title: t('cms_solution1_title', 'الشركات والمؤسسات'),
            description: t('cms_solution1_desc', 'إدارة محتوى المواقع الإلكترونية والمدونات والمنصات التعليمية بكفاءة عالية.'),
            benefits: [
                t('cms_solution1_benefit1', 'تحسين تجربة المستخدم'),
                t('cms_solution1_benefit2', 'توفير الوقت والجهد'),
                t('cms_solution1_benefit3', 'تحسين محركات البحث'),
                t('cms_solution1_benefit4', 'سهولة التحديث والصيانة'),
            ]
        },
        {
            title: t('cms_solution2_title', 'المتاجر الإلكترونية'),
            description: t('cms_solution2_desc', 'إدارة محتوى المنتجات والوصف والصور والفئات بشكل احترافي.'),
            benefits: [
                t('cms_solution2_benefit1', 'تحسين عرض المنتجات'),
                t('cms_solution2_benefit2', 'إدارة المخزون'),
                t('cms_solution2_benefit3', 'تحديث الأسعار'),
                t('cms_solution2_benefit4', 'إدارة العروض والخصومات'),
            ]
        },
        {
            title: t('cms_solution3_title', 'المنصات التعليمية'),
            description: t('cms_solution3_desc', 'إدارة المحتوى التعليمي والدورات والموارد التعليمية بسهولة.'),
            benefits: [
                t('cms_solution3_benefit1', 'تنظيم المحتوى التعليمي'),
                t('cms_solution3_benefit2', 'إدارة المستخدمين'),
                t('cms_solution3_benefit3', 'تتبع التقدم'),
                t('cms_solution3_benefit4', 'تقييم الأداء'),
            ]
        }
    ];

    const features = [
        {
            title: t('cms_feature1_title', 'واجهة تحكم سهلة'),
            description: t('cms_feature1_desc', 'واجهة مستخدم بسيطة وبديهية تمكنك من إدارة المحتوى بكل سهولة.'),
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
        {
            title: t('cms_feature2_title', 'تخصيص متقدم'),
            description: t('cms_feature2_desc', 'إمكانية تخصيص كل جانب من جوانب النظام حسب احتياجاتك.'),
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
        {
            title: t('cms_feature3_title', 'أمان وحماية'),
            description: t('cms_feature3_desc', 'نظام حماية متقدم مع تشفير البيانات ونسخ احتياطية تلقائية.'),
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
        {
            title: t('cms_feature4_title', 'دعم متعدد اللغات'),
            description: t('cms_feature4_desc', 'دعم كامل للغة العربية والإنجليزية مع إمكانية إضافة لغات أخرى.'),
            icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091943.png',
        },
    ];

    return (
        <ProductContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <AnimatedSection direction="right">
                    <Typography variant="h3" component="h1" gutterBottom align="center">
                        {t('products_cms_name', 'نظام إدارة المحتوى المتكامل')}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
                        {t('cms_subtitle', 'حل متكامل لإدارة المحتوى الرقمي بكل سهولة وكفاءة')}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleReadMore}
                            sx={{
                                borderRadius: '8px',
                                padding: '10px 30px',
                                fontSize: '1.1rem'
                            }}
                        >
                            {t('cms_read_more', 'اقرأ المزيد')}
                        </Button>
                    </Box>
                </AnimatedSection>

                <AnimatedSection direction="left">
                    <ProductImage
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt={t('cms_img_alt', 'نظام إدارة المحتوى')}
                    />
                </AnimatedSection>

                <AnimatedSection direction="right">
                    <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                        {t('cms_solutions_title', 'الحلول المتكاملة')}
                    </Typography>
                    <Grid container spacing={4}>
                        {solutions.map((solution, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <SolutionCard>
                                    <Typography variant="h5" gutterBottom>
                                        {solution.title}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {solution.description}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {t('cms_benefits_title', 'المميزات:')}
                                    </Typography>
                                    <ul style={{ paddingRight: isArabic ? '20px' : '0', paddingLeft: isArabic ? '0' : '20px', textAlign: isArabic ? 'right' : 'left' }}>
                                        {solution.benefits.map((benefit, idx) => (
                                            <li key={idx}>{benefit}</li>
                                        ))}
                                    </ul>
                                </SolutionCard>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatedSection>

                <AnimatedSection direction="left">
                    <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 4 }}>
                        {t('cms_features_title', 'المميزات الرئيسية')}
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
            </Container>
        </ProductContainer>
    );
};

export default CMS; 