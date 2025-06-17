import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import imageUrls from '../utils/imageUrls';
import AnimatedSection from './AnimatedSection';

const Line = styled(Box)(({ theme }) => ({
    width: '66.66%',
    height: '2px',
    backgroundColor: 'white',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const AboutSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
    background: 'linear-gradient(135deg, #1976d2 0%, #2196F3 100%)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${imageUrls.pattern})`,
        backgroundSize: 'cover',
        opacity: 0.1,
        zIndex: 1,
    }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
    flex: 2,
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        paddingRight: 0,
        paddingBottom: theme.spacing(4),
    },
}));

const ImageWrapper = styled(Box)({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const StyledImage = styled('img')({
    maxWidth: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const AboutWothoq = () => {
    return (
        <AboutSection>
            <Container maxWidth="lg">
                <ContentWrapper>
                    <AnimatedSection direction="right">
                        <TextWrapper>
                            <Line />
                            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                                وثوق للتقنيات
                            </Typography>
                            <Typography variant="h6" paragraph sx={{ color: 'white' }}>
                                وثوق للتقنيات هي شركة سعودية ملتزمة بتمكين رواد ورائدات الأعمال في المملكة العربية السعودية من خلال تقديم مجموعة شاملة من الخدمات والحلول في ميداني التقنية والتسويق, كما نتميز بتقديم خدمات متميزة تلبي احتياجات السوق المحلي والعالمي، حيث نعمل بثبات وتفاني منذ أكثر من 6 سنوات
                            </Typography>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                    للمزيد
                                </Button>
                            </Link>
                        </TextWrapper>
                    </AnimatedSection>
                    <AnimatedSection direction="left">
                        <ImageWrapper>
                            <StyledImage
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="About Wothoq"
                            />
                        </ImageWrapper>
                    </AnimatedSection>
                </ContentWrapper>
            </Container>
        </AboutSection>
    );
};

export default AboutWothoq; 