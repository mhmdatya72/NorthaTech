import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';

const TestimonialsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#ffffff',
    direction: 'rtl',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(3),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
}));

const testimonials = [
    {
        name: 'دلال',
        text: 'كان عندي فكرة عمل تطبيق وتواصلت معهم، واحمد الله ان يسرهم لي، نصائحهم كانت من ذهب ونفعوني وارشدوني بأشياء كثير انارت لي طريقي. وعلى مدى شهرين وكل سؤال لدي كانوا يجيبون عليه و بصدر رحب .. شكرا لكم بحجم السماء',
        avatar: imageUrls.testimonials.dalal
    },
    {
        name: 'ابو ابتسام',
        text: 'صراحة من حكم تجربة معهم - جدا متميزين فاهمين الشغله - تعامل جدا راقي وبشكل احترافي -يساعدونك على تطوير الفكره والبحث عن الأشياء المميزه انصح الجميع بالتعامل معهم',
        avatar: imageUrls.testimonials.abuIbtesam
    },
    {
        name: 'ماجد',
        text: 'تجربة كانت رائعة قيادة المشروع كانت سلسة ومبدعة، يعيش الإخوة في وثق معك تفاصيل المشروع ، ويطبقون مفهوم تحسين تجربة المستخدم بتفاصيلها، ويتجاوزون مهمة إنشاء الموقع إلى مهام أخرى خارج متطلبات العقد، إضافة إلى أن الأسعار ممتازة مقارنة بالخدمة المقدمة.',
        avatar: imageUrls.testimonials.majed
    }
];

const Testimonials = () => {
    return (
        <TestimonialsSection>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" align="center" gutterBottom>
                    آراء العملاء
                </Typography>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <TestimonialCard>
                                <CardContent>
                                    <Avatar
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        sx={{ width: 80, height: 80, margin: '0 auto 20px' }}
                                    />
                                    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                                        {testimonial.text}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                        {testimonial.name}
                                    </Typography>
                                </CardContent>
                            </TestimonialCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </TestimonialsSection>
    );
};

export default Testimonials; 