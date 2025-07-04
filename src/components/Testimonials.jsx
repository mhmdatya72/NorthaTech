import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import imageUrls from '../utils/imageUrls';
import { useTranslation } from 'react-i18next';

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
        nameKey: 'testimonial_ahmed_name',
        positionKey: 'testimonial_ahmed_position',
        textKey: 'testimonial_ahmed_text',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        nameKey: 'testimonial_sara_name',
        positionKey: 'testimonial_sara_position',
        textKey: 'testimonial_sara_text',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        nameKey: 'testimonial_khaled_name',
        positionKey: 'testimonial_khaled_position',
        textKey: 'testimonial_khaled_text',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
        nameKey: 'testimonial_noura_name',
        positionKey: 'testimonial_noura_position',
        textKey: 'testimonial_noura_text',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
        nameKey: 'testimonial_mohamed_name',
        positionKey: 'testimonial_mohamed_position',
        textKey: 'testimonial_mohamed_text',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        nameKey: 'testimonial_fatima_name',
        positionKey: 'testimonial_fatima_position',
        textKey: 'testimonial_fatima_text',
        avatar: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
        nameKey: 'testimonial_omar_name',
        positionKey: 'testimonial_omar_position',
        textKey: 'testimonial_omar_text',
        avatar: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    {
        nameKey: 'testimonial_layla_name',
        positionKey: 'testimonial_layla_position',
        textKey: 'testimonial_layla_text',
        avatar: 'https://randomuser.me/api/portraits/women/92.jpg'
    },
    {
        nameKey: 'testimonial_yasser_name',
        positionKey: 'testimonial_yasser_position',
        textKey: 'testimonial_yasser_text',
        avatar: 'https://randomuser.me/api/portraits/men/93.jpg'
    },
    {
        nameKey: 'testimonial_mona_name',
        positionKey: 'testimonial_mona_position',
        textKey: 'testimonial_mona_text',
        avatar: 'https://randomuser.me/api/portraits/women/94.jpg'
    },
    {
        nameKey: 'testimonial_dalal_name',
        positionKey: 'testimonial_dalal_position',
        textKey: 'testimonial_dalal_text',
        avatar: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        nameKey: 'testimonial_abuibtisam_name',
        positionKey: 'testimonial_abuibtisam_position',
        textKey: 'testimonial_abuibtisam_text',
        avatar: 'https://randomuser.me/api/portraits/men/96.jpg'
    },
    {
        nameKey: 'testimonial_majed_name',
        positionKey: 'testimonial_majed_position',
        textKey: 'testimonial_majed_text',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg'
    },
    {
        nameKey: 'testimonial_nouf_name',
        positionKey: 'testimonial_nouf_position',
        textKey: 'testimonial_nouf_text',
        avatar: 'https://randomuser.me/api/portraits/women/98.jpg'
    },
    {
        nameKey: 'testimonial_abdullah_name',
        positionKey: 'testimonial_abdullah_position',
        textKey: 'testimonial_abdullah_text',
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg'
    }
];

const Testimonials = () => {
    const { t, i18n } = useTranslation();
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
                    <Box component="span" sx={{ color: '#1976d2' }}>{t('testimonials_title_blue', 'آراء ')}</Box>{t('testimonials_title_black', 'العملاء')}
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
                                    <StyledAvatar src={testimonial.avatar} alt={t(testimonial.nameKey)} />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            {t(testimonial.nameKey)}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                            {t(testimonial.positionKey)}
                                        </Typography>
                                        <Typography variant="body1" sx={{
                                            mt: 2,
                                            lineHeight: 1.8,
                                            textAlign: i18n.language === 'ar' ? 'right' : 'left',
                                            fontSize: '1.1rem'
                                        }}>
                                            {t(testimonial.textKey)}
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