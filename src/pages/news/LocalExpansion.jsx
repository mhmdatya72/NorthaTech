import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from '../../components/AnimatedSection';

const NewsContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: 'rtl',
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

const LocalExpansion = () => {
    return (
        <NewsContainer>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <AnimatedSection direction="down">
                            <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                                توسع في السوق المحلي
                            </Typography>
                            <Typography variant="h6" color="text.secondary" paragraph textAlign="center">
                                5 مارس 2024
                            </Typography>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <Box display="flex" justifyContent="center" mb={4}>
                                <NewsImage
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="توسع محلي"
                                />
                            </Box>
                        </AnimatedSection>
                    </Grid>
                    <Grid item xs={12}>
                        <AnimatedSection direction="up">
                            <ContentCard>
                                <Typography variant="body1" paragraph>
                                    أعلنت شركة وثوق اليوم عن توسعها في السوق المحلي بافتتاح فرع جديد وتوظيف كوادر محلية متخصصة. يأتي هذا التوسع في إطار استراتيجية الشركة لتعزيز وجودها في السوق المحلي وتقديم خدمات أفضل لعملائها.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    وتشمل خطط التوسع:
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                                    <ul>
                                        <li>افتتاح فرع جديد في المنطقة الشرقية</li>
                                        <li>توظيف 50 موظف جديد من الكوادر المحلية</li>
                                        <li>توسيع نطاق الخدمات المقدمة</li>
                                        <li>تعزيز البنية التحتية التقنية</li>
                                    </ul>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    وقال الرئيس التنفيذي للشركة: "نحن متحمسون للتوسع في السوق المحلي وتوظيف كوادر محلية موهوبة. نسعى دائماً لتقديم أفضل الخدمات لعملائنا وتوفير فرص عمل للشباب المحلي."
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    وأضاف: "نحن نؤمن بأهمية الاستثمار في الكوادر المحلية وتطوير مهاراتها. نسعى لبناء فريق عمل قوي ومتميز يقدم خدمات عالية الجودة لعملائنا."
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    يمكن للمهنيين المهتمين بالانضمام إلى فريق وثوق زيارة صفحة الوظائف على موقع الشركة أو التواصل مع فريق الموارد البشرية.
                                </Typography>
                            </ContentCard>
                        </AnimatedSection>
                    </Grid>
                </Grid>
            </Container>
        </NewsContainer>
    );
};

export default LocalExpansion; 