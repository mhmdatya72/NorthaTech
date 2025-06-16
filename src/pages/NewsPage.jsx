import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const NewsPageContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    direction: 'rtl',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
    },
}));

const NewsCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const newsArticles = [
    {
        title: 'أحدث إنجازات وثوق في تطوير التطبيقات',
        date: '2023-10-26',
        summary: 'يسرنا أن نعلن عن إطلاق أحدث تطبيقاتنا المبتكرة التي تقدم حلولاً فريدة لعملائنا في مختلف القطاعات.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
        title: 'وثوق للتقنيات تشارك في مؤتمر التقنية السنوي',
        date: '2023-09-15',
        summary: 'شارك فريقنا في المؤتمر التقني الأبرز لهذا العام، حيث عرضنا أحدث تقنياتنا وتبادلنا الخبرات مع رواد الصناعة.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'نصائح لتحسين تواجدك الرقمي في 2023',
        date: '2023-08-01',
        summary: 'دليلك الشامل لتعزيز حضورك الرقمي وتحقيق أقصى استفادة من استراتيجيات التسويق الإلكتروني الحديثة.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
    },
    {
        title: 'ورشة عمل مجانية: أساسيات تصميم المواقع',
        date: '2023-07-20',
        summary: 'ندعوكم لحضور ورشة عمل تفاعلية لتعلم أساسيات تصميم المواقع الإلكترونية والبدء في رحلتك الإبداعية.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
];

const NewsPage = () => {
    return (
        <NewsPageContainer>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    الأخبار
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    ابق على اطلاع بآخر أخبارنا، فعالياتنا، ومقالاتنا.
                </Typography>
                <Grid container spacing={4}>
                    {newsArticles.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <NewsCard>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={article.image}
                                    alt={article.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                        {article.date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {article.summary}
                                    </Typography>
                                    <Button variant="outlined" color="primary">
                                        المزيد من القراءة
                                    </Button>
                                </CardContent>
                            </NewsCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </NewsPageContainer>
    );
};

export default NewsPage; 