import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const ReviewsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#ffffff',
    textAlign: 'center',
    direction: 'rtl',
}));

const ReviewCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 80,
    height: 80,
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    border: '3px solid #1976d2',
}));

const reviews = [
    {
        name: 'أحمد محمد',
        position: 'مدير شركة التقنية',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        review: 'خدمة ممتازة وفريق عمل محترف. ساعدونا في تطوير أعمالنا بشكل كبير. تعاملنا مع وثوق كان تجربة مميزة حقاً، حيث قدمت لنا حلولاً مبتكرة ساعدت في نمو أعمالنا بشكل ملحوظ. نتمنى لهم المزيد من التقدم والنجاح.',
    },
    {
        name: 'سارة أحمد',
        position: 'رئيس قسم التسويق',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        review: 'تجربة رائعة مع وثوق. قدمت لنا حلولاً مبتكرة ساعدت في نمو أعمالنا. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الخدمات. نوصي بالتعامل معهم بشدة.',
    },
    {
        name: 'خالد عبدالله',
        position: 'مؤسس شركة ناشئة',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        review: 'شركة موثوقة ومهنية. ساعدتنا في تحقيق أهدافنا باحترافية عالية. تعاملنا معهم كان مثالياً من حيث الالتزام بالمواعيد وجودة العمل. نعتبرهم شريكاً استراتيجياً في نجاحنا.',
    },
    {
        name: 'نورة السعيد',
        position: 'مديرة تطوير الأعمال',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        review: 'تعاملنا مع وثوق كان تجربة مميزة. فريق عمل محترف وخدمة متميزة. ساعدونا في تطوير استراتيجياتنا وتحسين أدائنا بشكل كبير. ننصح بالتعامل معهم لكل من يبحث عن جودة عالية.',
    },
    {
        name: 'محمد علي',
        position: 'المدير التنفيذي',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        review: 'شركة وثوق تميزت بتقديم خدمات متميزة ساعدت في تطوير أعمالنا بشكل كبير. فريق العمل يتميز بالاحترافية والالتزام. نعتبرهم شريكاً أساسياً في نجاحنا.',
    },
    {
        name: 'فاطمة حسن',
        position: 'مديرة العمليات',
        avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
        review: 'تجربة رائعة مع وثوق. ساعدونا في تحسين عملياتنا وتطوير استراتيجياتنا. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الخدمات.',
    },
    {
        name: 'عمر خالد',
        position: 'رئيس قسم التطوير',
        avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
        review: 'شركة وثوق قدمت لنا حلولاً مبتكرة ساعدت في تطوير أعمالنا. فريق العمل يتميز بالاحترافية والالتزام. نوصي بالتعامل معهم لكل من يبحث عن جودة عالية.',
    },
    {
        name: 'ليلى محمود',
        position: 'مديرة التسويق الرقمي',
        avatar: 'https://randomuser.me/api/portraits/women/92.jpg',
        review: 'تعاملنا مع وثوق كان تجربة مميزة. ساعدونا في تطوير استراتيجياتنا التسويقية وتحسين أدائنا. فريق العمل يتميز بالاحترافية العالية.',
    },
    {
        name: 'ياسر أحمد',
        position: 'مدير المشاريع',
        avatar: 'https://randomuser.me/api/portraits/men/93.jpg',
        review: 'شركة وثوق تميزت بتقديم خدمات متميزة ساعدت في تطوير مشاريعنا. فريق العمل يتميز بالاحترافية والالتزام. نعتبرهم شريكاً أساسياً في نجاحنا.',
    },
    {
        name: 'منى علي',
        position: 'مديرة الابتكار',
        avatar: 'https://randomuser.me/api/portraits/women/94.jpg',
        review: 'تجربة رائعة مع وثوق. ساعدونا في تطوير حلول مبتكرة لتحسين أعمالنا. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الخدمات.',
    },
    {
        name: 'دلال',
        position: 'رائدة أعمال',
        avatar: 'https://randomuser.me/api/portraits/women/95.jpg',
        review: 'كان عندي فكرة عمل تطبيق وتواصلت معهم، واحمد الله ان يسرهم لي، نصائحهم كانت من ذهب ونفعوني وارشدوني بأشياء كثير انارت لي طريقي. وعلى مدى شهرين وكل سؤال لدي كانوا يجيبون عليه و بصدر رحب .. شكرا لكم بحجم السماء',
    },
    {
        name: 'أبو ابتسام',
        position: 'مدير شركة تقنية',
        avatar: 'https://randomuser.me/api/portraits/men/96.jpg',
        review: 'صراحة من حكم تجربة معهم - جدا متميزين فاهمين الشغله - تعامل جدا راقي وبشكل احترافي -يساعدونك على تطوير الفكره والبحث عن الأشياء المميزه انصح الجميع بالتعامل معهم',
    },
    {
        name: 'ماجد',
        position: 'مؤسس شركة ناشئة',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        review: 'تجربة كانت رائعة قيادة المشروع كانت سلسة ومبدعة، يعيش الإخوة في وثق معك تفاصيل المشروع ، ويطبقون مفهوم تحسين تجربة المستخدم بتفاصيلها، ويتجاوزون مهمة إنشاء الموقع إلى مهام أخرى خارج متطلبات العقد، إضافة إلى أن الأسعار ممتازة مقارنة بالخدمة المقدمة.',
    },
    {
        name: 'نوف',
        position: 'مديرة مشاريع رقمية',
        avatar: 'https://randomuser.me/api/portraits/women/98.jpg',
        review: 'تعاملت مع وثوق في عدة مشاريع وكانت تجربة مميزة في كل مرة. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الحلول. ساعدونا في تطوير أعمالنا بشكل كبير ونحن سعداء بالتعاون معهم.',
    },
    {
        name: 'عبدالله',
        position: 'مدير تطوير الأعمال',
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        review: 'شركة وثوق تميزت بتقديم خدمات متميزة ساعدت في تطوير أعمالنا بشكل كبير. فريق العمل يتميز بالاحترافية والالتزام. نعتبرهم شريكاً أساسياً في نجاحنا وننصح بالتعامل معهم.',
    }
];

const CustomerReviews = () => {
    return (
        <ReviewsSection>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 1000,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 6,
                        letterSpacing: '0.2em',
                        wordSpacing: '0.5em',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        '& span': {
                            fontWeight: 1000,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                            color: '#2196F3'
                        }
                    }}
                >
                    <Box component="span">آراء</Box> العملاء
                </Typography>
                <Grid container spacing={4}>
                    {reviews.map((review, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <ReviewCard>
                                <StyledAvatar src={review.avatar} alt={review.name} />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {review.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                        {review.position}
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        mt: 2,
                                        lineHeight: 1.8,
                                        textAlign: 'right',
                                        fontSize: '1.1rem'
                                    }}>
                                        {review.review}
                                    </Typography>
                                </CardContent>
                            </ReviewCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ReviewsSection>
    );
};

export default CustomerReviews; 