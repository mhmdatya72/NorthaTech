import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import imageUrls from '../utils/imageUrls';

const TestimonialsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: 'rtl',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    overflow: 'hidden',
}));

const AnimatedContainer = styled(Container)(({ theme, isVisible }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
    transition: 'all 0.8s ease-out',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(3),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
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

const NavigationButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    zIndex: 2,
}));

const testimonials = [
    {
        name: 'أحمد محمد',
        position: 'مدير شركة التقنية',
        text: 'خدمة ممتازة وفريق عمل محترف. ساعدونا في تطوير أعمالنا بشكل كبير. تعاملنا مع وثوق كان تجربة مميزة حقاً، حيث قدمت لنا حلولاً مبتكرة ساعدت في نمو أعمالنا بشكل ملحوظ. نتمنى لهم المزيد من التقدم والنجاح.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'سارة أحمد',
        position: 'رئيس قسم التسويق',
        text: 'تجربة رائعة مع وثوق. قدمت لنا حلولاً مبتكرة ساعدت في نمو أعمالنا. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الخدمات. نوصي بالتعامل معهم بشدة.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'خالد عبدالله',
        position: 'مؤسس شركة ناشئة',
        text: 'شركة موثوقة ومهنية. ساعدتنا في تحقيق أهدافنا باحترافية عالية. تعاملنا معهم كان مثالياً من حيث الالتزام بالمواعيد وجودة العمل. نعتبرهم شريكاً استراتيجياً في نجاحنا.',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
        name: 'نورة السعيد',
        position: 'مديرة تطوير الأعمال',
        text: 'تعاملنا مع وثوق كان تجربة مميزة. فريق عمل محترف وخدمة متميزة. ساعدونا في تطوير استراتيجياتنا وتحسين أدائنا بشكل كبير. ننصح بالتعامل معهم لكل من يبحث عن جودة عالية.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
        name: 'محمد علي',
        position: 'المدير التنفيذي',
        text: 'شركة وثوق تميزت بتقديم خدمات متميزة ساعدت في تطوير أعمالنا بشكل كبير. فريق العمل يتميز بالاحترافية والالتزام. نعتبرهم شريكاً أساسياً في نجاحنا.',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'فاطمة حسن',
        position: 'مديرة العمليات',
        text: 'تجربة رائعة مع وثوق. ساعدونا في تحسين عملياتنا وتطوير استراتيجياتنا. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الخدمات.',
        avatar: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
        name: 'عمر خالد',
        position: 'رئيس قسم التطوير',
        text: 'شركة وثوق قدمت لنا حلولاً مبتكرة ساعدت في تطوير أعمالنا. فريق العمل يتميز بالاحترافية والالتزام. نوصي بالتعامل معهم لكل من يبحث عن جودة عالية.',
        avatar: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    {
        name: 'ليلى محمود',
        position: 'مديرة التسويق الرقمي',
        text: 'تعاملنا مع وثوق كان تجربة مميزة. ساعدونا في تطوير استراتيجياتنا التسويقية وتحسين أدائنا. فريق العمل يتميز بالاحترافية العالية.',
        avatar: 'https://randomuser.me/api/portraits/women/92.jpg'
    },
    {
        name: 'ياسر أحمد',
        position: 'مدير المشاريع',
        text: 'شركة وثوق تميزت بتقديم خدمات متميزة ساعدت في تطوير مشاريعنا. فريق العمل يتميز بالاحترافية والالتزام. نعتبرهم شريكاً أساسياً في نجاحنا.',
        avatar: 'https://randomuser.me/api/portraits/men/93.jpg'
    },
    {
        name: 'منى علي',
        position: 'مديرة الابتكار',
        text: 'تجربة رائعة مع وثوق. ساعدونا في تطوير حلول مبتكرة لتحسين أعمالنا. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الخدمات.',
        avatar: 'https://randomuser.me/api/portraits/women/94.jpg'
    },
    {
        name: 'دلال',
        position: 'رائدة أعمال',
        text: 'كان عندي فكرة عمل تطبيق وتواصلت معهم، واحمد الله ان يسرهم لي، نصائحهم كانت من ذهب ونفعوني وارشدوني بأشياء كثير انارت لي طريقي. وعلى مدى شهرين وكل سؤال لدي كانوا يجيبون عليه و بصدر رحب .. شكرا لكم بحجم السماء',
        avatar: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        name: 'أبو ابتسام',
        position: 'مدير شركة تقنية',
        text: 'صراحة من حكم تجربة معهم - جدا متميزين فاهمين الشغله - تعامل جدا راقي وبشكل احترافي -يساعدونك على تطوير الفكره والبحث عن الأشياء المميزه انصح الجميع بالتعامل معهم',
        avatar: 'https://randomuser.me/api/portraits/men/96.jpg'
    },
    {
        name: 'ماجد',
        position: 'مؤسس شركة ناشئة',
        text: 'تجربة كانت رائعة قيادة المشروع كانت سلسة ومبدعة، يعيش الإخوة في وثق معك تفاصيل المشروع ، ويطبقون مفهوم تحسين تجربة المستخدم بتفاصيلها، ويتجاوزون مهمة إنشاء الموقع إلى مهام أخرى خارج متطلبات العقد، إضافة إلى أن الأسعار ممتازة مقارنة بالخدمة المقدمة.',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg'
    },
    {
        name: 'نوف',
        position: 'مديرة مشاريع رقمية',
        text: 'تعاملت مع وثوق في عدة مشاريع وكانت تجربة مميزة في كل مرة. فريق العمل يتميز بالاحترافية العالية والالتزام بتقديم أفضل الحلول. ساعدونا في تطوير أعمالنا بشكل كبير ونحن سعداء بالتعاون معهم.',
        avatar: 'https://randomuser.me/api/portraits/women/98.jpg'
    },
    {
        name: 'عبدالله',
        position: 'مدير تطوير الأعمال',
        text: 'شركة وثوق تميزت بتقديم خدمات متميزة ساعدت في تطوير أعمالنا بشكل كبير. فريق العمل يتميز بالاحترافية والالتزام. نعتبرهم شريكاً أساسياً في نجاحنا وننصح بالتعامل معهم.',
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [totalPages]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const getCurrentTestimonials = () => {
        const start = currentIndex * itemsPerPage;
        return testimonials.slice(start, start + itemsPerPage);
    };

    return (
        <TestimonialsSection ref={sectionRef}>
            <AnimatedContainer maxWidth="lg" isVisible={isVisible}>
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: '2rem', md: '3rem' },
                        textAlign: 'center',
                        mb: 6
                    }}
                >
                    <Box component="span" sx={{ color: '#1976d2' }}>آراء </Box> العملاء
                </Typography>
                <Box sx={{ position: 'relative', width: '100%', maxWidth: '1000px' }}>
                    <NavigationButton
                        onClick={handlePrevious}
                        sx={{ left: { xs: 0, md: -30 } }}
                    >
                        <ArrowForwardIosIcon />
                    </NavigationButton>
                    <Grid container spacing={4} sx={{ minHeight: '400px', justifyContent: 'center' }}>
                        {getCurrentTestimonials().map((testimonial, index) => (
                            <Grid item xs={12} md={6} key={index} sx={{ maxWidth: '500px' }}>
                                <TestimonialCard>
                                    <StyledAvatar src={testimonial.avatar} alt={testimonial.name} />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                            {testimonial.position}
                                        </Typography>
                                        <Typography variant="body1" sx={{
                                            mt: 2,
                                            lineHeight: 1.8,
                                            textAlign: 'right',
                                            fontSize: '1.1rem'
                                        }}>
                                            {testimonial.text}
                                        </Typography>
                                    </CardContent>
                                </TestimonialCard>
                            </Grid>
                        ))}
                    </Grid>
                    <NavigationButton
                        onClick={handleNext}
                        sx={{ right: { xs: 0, md: -30 } }}
                    >
                        <ArrowBackIosNewIcon />
                    </NavigationButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: currentIndex === index ? '#1976d2' : '#e0e0e0',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </Box>
            </AnimatedContainer>
        </TestimonialsSection>
    );
};

export default Testimonials; 