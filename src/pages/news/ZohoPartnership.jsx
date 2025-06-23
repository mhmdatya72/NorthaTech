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

const ZohoPartnership = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <NewsContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <AnimatedSection direction="down">
                            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                                {t('news_zoho_title', 'شراكة استراتيجية مع زوهو')}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" paragraph textAlign="center">
                                {t('news_zoho_date', '10 مارس 2024')}
                            </Typography>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <Box display="flex" justifyContent="center" mb={4}>
                                <NewsImage
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                    alt={t('news_zoho_img_alt', 'شراكة مع زوهو')}
                                />
                            </Box>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <ContentCard>
                                <Typography variant="body1" paragraph>
                                    {t('news_zoho_p1', 'وقعت شركة وثوق اليوم اتفاقية شراكة استراتيجية مع شركة زوهو العالمية لتقديم حلول متكاملة للشركات في المنطقة. تأتي هذه الشراكة في إطار استراتيجية وثوق لتقديم أفضل الحلول التقنية لعملائها.')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_zoho_p2', 'وتشمل الشراكة الجديدة:')}
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                                    <ul>
                                        <li>{t('news_zoho_list1', 'توفير حلول زوهو CRM المتكاملة')}</li>
                                        <li>{t('news_zoho_list2', 'خدمات زوهو Books للمحاسبة')}</li>
                                        <li>{t('news_zoho_list3', 'حلول زوهو People لإدارة الموارد البشرية')}</li>
                                        <li>{t('news_zoho_list4', 'دعم فني وخدمات استشارية متخصصة')}</li>
                                    </ul>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_zoho_p3', 'وقال الرئيس التنفيذي لشركة وثوق: "نحن فخورون بهذه الشراكة الاستراتيجية مع زوهو، التي ستتيح لنا تقديم حلول متكاملة وحديثة لعملائنا. نسعى دائماً لتقديم أفضل الخدمات والتقنيات التي تساعد الشركات على النمو والتطور."')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_zoho_p4', 'من جانبه، قال ممثل زوهو في المنطقة: "نحن متحمسون للشراكة مع وثوق، التي تتمتع بخبرة واسعة في تقديم الحلول التقنية في المنطقة. نتطلع إلى العمل معاً لتقديم أفضل الحلول للشركات والمؤسسات."')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_zoho_p5', 'يمكن للشركات المهتمة بالحلول الجديدة التواصل مع فريق المبيعات في وثوق للحصول على مزيد من المعلومات والاستشارات المجانية.')}
                                </Typography>
                            </ContentCard>
                        </AnimatedSection>
                    </Grid>
                </Grid>
            </Container>
        </NewsContainer>
    );
};

export default ZohoPartnership; 