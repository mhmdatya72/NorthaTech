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

const Workshop = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <NewsContainer dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <AnimatedSection direction="down">
                            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                                {t('news_workshop_title', 'ورشة عمل مجانية: أساسيات تصميم المواقع')}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" paragraph textAlign="center">
                                {t('news_workshop_date', '20 يونيو 2024')}
                            </Typography>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <Box display="flex" justifyContent="center" mb={4}>
                                <NewsImage
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt={t('news_workshop_img_alt', 'ورشة عمل تصميم مواقع')}
                                />
                            </Box>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <ContentCard>
                                <Typography variant="body1" paragraph>
                                    {t('news_workshop_p1', 'يسرنا دعوتكم لحضور ورشة عمل مجانية حول أساسيات تصميم المواقع الإلكترونية، حيث سنتعرف على أهم المبادئ والخطوات العملية لبناء موقع احترافي.')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_workshop_p2', 'محاور الورشة:')}
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                                    <ul>
                                        <li>{t('news_workshop_list1', 'مقدمة في تصميم المواقع وأهميته')}</li>
                                        <li>{t('news_workshop_list2', 'أساسيات HTML وCSS')}</li>
                                        <li>{t('news_workshop_list3', 'مبادئ التصميم المتجاوب')}</li>
                                        <li>{t('news_workshop_list4', 'أفضل الممارسات لتجربة المستخدم')}</li>
                                    </ul>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_workshop_p3', 'الورشة مناسبة للمبتدئين وكل من يرغب في تعلم أساسيات تصميم المواقع. سيتم تقديم شهادات حضور للمشاركين.')}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t('news_workshop_p4', 'للتسجيل أو الاستفسار، يرجى التواصل مع فريقنا عبر البريد الإلكتروني أو الهاتف الموضحين في صفحة التواصل.')}
                                </Typography>
                            </ContentCard>
                        </AnimatedSection>
                    </Grid>
                </Grid>
            </Container>
        </NewsContainer>
    );
};

export default Workshop; 