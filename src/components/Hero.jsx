import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';

const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1976d2 0%, #2196F3 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const VideoBackground = styled('video')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.3,
    zIndex: 0,
});

const HeroContent = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
    },
}));

const HeroImageWithText = styled(Box)(({ theme }) => ({
    '& img': {
        width: '100%',
        height: 'auto',
        maxWidth: '900px', // Adjust based on the actual image size and desired display
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
        },
    },
}));

const Hero = () => {
    return (
        <HeroSection>
            <VideoBackground
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
            </VideoBackground>
            <HeroContent>
                <HeroImageWithText>
                    <img
                        src="https://wothoq.com/wp-content/uploads/2023/12/hero-text.png"
                        alt="رحلة تبدأ من الثقة"
                    />
                </HeroImageWithText>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero; 