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

const TaskManagementApp = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const features = [
        {
            title: t('taskapp_feature1_title', 'إدارة المهام المتقدمة'),
            description: t('taskapp_feature1_desc', 'نظام متكامل لإدارة المهام مع إمكانية تحديد الأولويات وتتبع التقدم وإدارة المواعيد النهائية.'),
            image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        },
        {
            title: t('taskapp_feature2_title', 'التعاون في الوقت الفعلي'),
            description: t('taskapp_feature2_desc', 'مشاركة المهام والتعليقات والتحديثات مع فريق العمل في الوقت الفعلي.'),
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
            title: t('taskapp_feature3_title', 'تقارير وإحصائيات'),
            description: t('taskapp_feature3_desc', 'تقارير تفصيلية وإحصائيات عن أداء الفريق وتقدم المشاريع.'),
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
    ];

    return (
        <ProjectContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <AnimatedSection direction="right">
                    <Typography variant="h2" component="h1" gutterBottom align={isArabic ? 'right' : 'left'}>
                        {t('taskapp_title', 'تطبيق إدارة المهام')}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph align={isArabic ? 'right' : 'left'}>
                        {t('taskapp_desc', 'تطبيق متكامل لإدارة المهام والمشاريع مع واجهة مستخدم سهلة الاستخدام وميزات متقدمة للتتبع والتعاون')}
                    </Typography>
                </AnimatedSection>

                <Box sx={{ my: 6 }}>
                    <AnimatedSection direction="center">
                        <ProjectImage
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt={t('taskapp_title', 'تطبيق إدارة المهام')}
                        />
                    </AnimatedSection>
                </Box>

                <AnimatedSection direction="left">
                    <Typography variant="h4" component="h2" gutterBottom align={isArabic ? 'right' : 'left'}>
                        {t('taskapp_features_title', 'المميزات الرئيسية')}
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
                            {t('taskapp_tech_title', 'التقنيات المستخدمة')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {t('taskapp_tech_frontend', 'الواجهة الأمامية')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        React.js, Material-UI, Redux
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {t('taskapp_tech_backend', 'الخلفية')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        Node.js, Express, MongoDB
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FeatureCard>
                                    <Typography variant="h6" component="h3" gutterBottom align={isArabic ? 'right' : 'left'}>
                                        {t('taskapp_tech_services', 'الخدمات')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align={isArabic ? 'right' : 'left'}>
                                        Firebase, AWS S3, Socket.io
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

export default TaskManagementApp; 