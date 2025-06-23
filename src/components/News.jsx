import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Modal, IconButton, Fade, Slide, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NewsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: theme.direction,
}));

const NewsCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    textAlign: 'right',
    direction: 'rtl',
    transition: 'all 0.5s ease-in-out',
    marginBottom: theme.spacing(4),
    height: '500px',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        '& .news-image': {
            transform: 'scale(1.05)',
        },
        '& .news-content': {
            backgroundColor: 'rgba(245, 245, 245, 0.95)',
        },
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        height: 'auto',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            transform: 'translateY(-5px)',
        },
    },
}));

const NewsContent = styled(CardContent)(({ theme }) => ({
    flex: '1 1 33.33%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    transition: 'all 0.5s ease-in-out',
    [theme.breakpoints.down('md')]: {
        flex: '1 1 auto',
        padding: theme.spacing(3),
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}));

const NewsImage = styled(CardMedia)(({ theme }) => ({
    flex: '2 2 66.66%',
    height: '500px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('md')]: {
        flex: '1 1 auto',
        height: '300px',
        width: '100%',
    },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
    color: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: '1.5rem',
    padding: theme.spacing(1, 3),
    flexDirection: 'row-reverse',
    transition: 'all 0.3s ease-in-out',
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
        transition: 'transform 0.3s ease-in-out',
    },
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#1565c0',
        transform: 'translateX(-5px)',
        '& .MuiSvgIcon-root': {
            transform: 'translateX(-5px)',
        },
    },
}));

const ViewDetailsButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    padding: theme.spacing(1, 3),
    marginTop: theme.spacing(2),
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const FullScreenImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
});

const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: '#fff',
    zIndex: 1,
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const News = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [visibleNews, setVisibleNews] = useState([]);
    const { t, i18n } = useTranslation();

    // الأخبار مترجمة
    const news = [
        {
            title: t('news1_title', 'شركة وثوق تطلق خدمات جديدة'),
            description: t('news1_desc', 'أعلنت شركة وثوق عن إطلاق مجموعة جديدة من الخدمات التقنية المتطورة لدعم الشركات والمؤسسات.'),
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            link: '/news/new-services',
        },
        {
            title: t('news2_title', 'شراكة استراتيجية مع زوهو'),
            description: t('news2_desc', 'وقعت شركة وثوق شراكة استراتيجية مع شركة زوهو لتقديم حلول متكاملة للشركات في المنطقة.'),
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            link: '/news/zoho-partnership',
        },
        {
            title: t('news3_title', 'توسع في السوق المحلي'),
            description: t('news3_desc', 'توسعت شركة وثوق في السوق المحلي بافتتاح فرع جديد وتوظيف كوادر محلية متخصصة.'),
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            link: '/news/local-expansion',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const newsElements = document.querySelectorAll('.news-card');
            newsElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight * 0.8;
                if (isVisible && !visibleNews.includes(index)) {
                    setVisibleNews(prev => [...prev, index]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleNews]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleImageLink = (link) => {
        window.location.href = link;
    };

    const renderNewsContent = (item, index) => (
        <>
            {isMobile ? (
                <>
                    <NewsImage
                        className="news-image"
                        component="img"
                        image={item.image}
                        alt={item.title}
                        onClick={() => handleImageLink(item.link)}
                    />
                    <NewsContent className="news-content">
                        <Box>
                            <Typography gutterBottom variant="h4" component="h3">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                {item.description}
                            </Typography>
                        </Box>
                        <ViewDetailsButton
                            component={Link}
                            to={item.link}
                            startIcon={<VisibilityIcon />}
                        >
                            {t('news_details', 'عرض التفاصيل')}
                        </ViewDetailsButton>
                    </NewsContent>
                </>
            ) : (
                <>
                    {index % 2 === 0 ? (
                        <>
                            <NewsContent className="news-content">
                                <Typography gutterBottom variant="h4" component="h3">
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {item.description}
                                </Typography>
                                <ViewDetailsButton
                                    component={Link}
                                    to={item.link}
                                    startIcon={<VisibilityIcon />}
                                >
                                    {t('news_details', 'عرض التفاصيل')}
                                </ViewDetailsButton>
                            </NewsContent>
                            <NewsImage
                                className="news-image"
                                component="img"
                                image={item.image}
                                alt={item.title}
                                onClick={() => handleImageLink(item.link)}
                            />
                        </>
                    ) : (
                        <>
                            <NewsImage
                                className="news-image"
                                component="img"
                                image={item.image}
                                alt={item.title}
                                onClick={() => handleImageLink(item.link)}
                            />
                            <NewsContent className="news-content">
                                <Typography gutterBottom variant="h4" component="h3">
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {item.description}
                                </Typography>
                                <ViewDetailsButton
                                    component={Link}
                                    to={item.link}
                                    startIcon={<VisibilityIcon />}
                                >
                                    {t('news_details', 'عرض التفاصيل')}
                                </ViewDetailsButton>
                            </NewsContent>
                        </>
                    )}
                </>
            )}
        </>
    );

    return (
        <NewsSection dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={6}>
                    <Typography variant="h3" component="h2">
                        {t('news_latest', 'آخر الأخبار')}
                    </Typography>
                    <ViewAllButton
                        component={Link}
                        to="/news"
                        startIcon={<ArrowBackIcon />}
                    >
                        {t('news_all', 'جميع الأخبار')}
                    </ViewAllButton>
                </Box>
                <Box sx={{ mt: 4 }}>
                    {news.map((item, index) => (
                        <Box key={index} className="news-card" sx={{ mb: 4 }}>
                            <Slide
                                direction={isMobile ? "up" : (index % 2 === 0 ? "right" : "left")}
                                in={visibleNews.includes(index)}
                                timeout={1000}
                                mountOnEnter
                                unmountOnExit
                            >
                                <Grow
                                    in={visibleNews.includes(index)}
                                    timeout={1000}
                                    style={{ transformOrigin: '0 0 0' }}
                                >
                                    <NewsCard>
                                        {renderNewsContent(item, index)}
                                    </NewsCard>
                                </Grow>
                            </Slide>
                        </Box>
                    ))}
                </Box>

                <Modal
                    open={!!selectedImage}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    }}
                >
                    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                        {selectedImage && <FullScreenImage src={selectedImage} alt="Full screen" />}
                        <CloseButton onClick={handleClose}>
                            <CloseIcon />
                        </CloseButton>
                    </Box>
                </Modal>
            </Container>
        </NewsSection>
    );
};

export default News; 