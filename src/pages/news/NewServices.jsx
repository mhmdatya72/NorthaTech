import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '../../components/AnimatedSection';
import { useTranslation } from 'react-i18next';

const NewsContainer = styled(Box)(({ theme, dir }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: dir,
}));

const NewsImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const ContentCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const NewServices = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <NewsContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <AnimatedSection direction="down">
                            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                                {t('news_newservices_title', 'شركة وثوق تطلق خدمات جديدة')}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" paragraph textAlign="center">
                                {t('news_newservices_date', '15 مارس 2024')}
                            </Typography>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <Box display="flex" justifyContent="center" mb={4}>
                                <NewsImage
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt={t('news_newservices_img_alt', 'خدمات جديدة')}
                                />
                            </Box>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <ContentCard>
                                <Typography variant="body1" paragraph>
                                    {t('news_newservices_p1', 'أعلنت شركة وثوق اليوم عن إطلاق مجموعة جديدة من الخدمات التقنية المتطورة لدعم الشركات والمؤسسات في المنطقة. تأتي هذه الخطوة في إطار استراتيجية الشركة للتوسع وتقديم حلول مبتكرة تلبي احتياجات العملاء المتزايدة.')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_newservices_p2', 'وتشمل الخدمات الجديدة:')}
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                                    <ul>
                                        <li>{t('news_newservices_list1', 'خدمات استشارات تقنية متخصصة')}</li>
                                        <li>{t('news_newservices_list2', 'حلول سحابية متكاملة')}</li>
                                        <li>{t('news_newservices_list3', 'خدمات أمن سيبراني متقدمة')}</li>
                                        <li>{t('news_newservices_list4', 'حلول ذكاء اصطناعي للأعمال')}</li>
                                    </ul>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_newservices_p3', 'وقال الرئيس التنفيذي للشركة: "نحن متحمسون لإطلاق هذه الخدمات الجديدة التي تم تطويرها بناءً على احتياجات عملائنا وتوقعاتهم. نسعى دائماً لتقديم أفضل الحلول التقنية التي تساعد الشركات على النمو والتطور في العصر الرقمي."')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_newservices_p4', 'وتأتي هذه الخدمات الجديدة لتكمل مجموعة الخدمات الحالية للشركة، والتي تشمل تطوير المواقع والتطبيقات، وتحسين محركات البحث، وإدارة وسائل التواصل الاجتماعي.')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_newservices_p5', 'يمكن للشركات والمؤسسات المهتمة بالخدمات الجديدة التواصل مع فريق المبيعات في وثوق للحصول على مزيد من المعلومات والاستشارات المجانية.')}
                                </Typography>
                            </ContentCard>
                        </AnimatedSection>
                    </Grid>
                </Grid>
            </Container>
        </NewsContainer>
    );
};

export default NewServices; 