import React, { useState, useEffect } from 'react';
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
}));

const BackgroundImages = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    '& img': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.35,
        filter: 'blur(0.5px)',
    },
});

const GreenOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 128, 0, 0.35)', // green with transparency
    zIndex: 1,
    pointerEvents: 'none',
});

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

const AnimatedLinesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
}));

const AnimatedLine = styled('h2')(({ theme }) => ({
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 500,
    textAlign: 'center',
    margin: 0,
    marginBottom: theme.spacing(1),
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
    },
}));

const animatedLines = [
    'NorthaTech - الريادة في الحلول الرقمية',
    'نحن نبتكر من أجل المستقبل',
    'خبرة في تطوير البرمجيات والتقنيات الحديثة',
    'شريكك في التحول الرقمي',
    'فريق عمل محترف لخدمة أعمالك',
    'حلول متكاملة لإدارة مشاريعك',
    'نصنع الفرق في عالم التقنية',
];

function useMultiTypewriter(lines, speed = 80, pause = 900, restartPause = 2000) {
    const [displayed, setDisplayed] = useState(Array(lines.length).fill(''));
    const [lineIdx, setLineIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [cycle, setCycle] = useState(0); // to force rerender
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!visible) return;
        if (lineIdx >= lines.length) {
            setTimeout(() => {
                setVisible(false);
            }, restartPause);
            return;
        }
        if (charIdx <= lines[lineIdx].length) {
            setTimeout(() => {
                setDisplayed(prev => {
                    const updated = [...prev];
                    updated[lineIdx] = lines[lineIdx].substring(0, charIdx);
                    return updated;
                });
                setCharIdx(charIdx + 1);
            }, speed);
        } else {
            setTimeout(() => {
                setLineIdx(lineIdx + 1);
                setCharIdx(0);
            }, pause);
        }
    }, [charIdx, lineIdx, lines, speed, pause, visible, restartPause]);

    useEffect(() => {
        if (!visible) {
            setTimeout(() => {
                setDisplayed(Array(lines.length).fill(''));
                setLineIdx(0);
                setCharIdx(0);
                setVisible(true);
                setCycle(cycle + 1);
            }, 800);
        }
        // eslint-disable-next-line
    }, [visible]);

    return visible ? displayed : Array(lines.length).fill('');
}

const Hero = () => {
    const animatedLinesState = useMultiTypewriter(animatedLines);
    return (
        <HeroSection>
            <BackgroundImages>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" alt="modern business" />
            </BackgroundImages>
            <VideoBackground
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
            </VideoBackground>
            <GreenOverlay />
            <HeroContent>
                <AnimatedLinesBox>
                    {animatedLinesState.map((line, idx) => (
                        <AnimatedLine key={idx}>{line}{idx === animatedLinesState.findIndex(l => l.length < animatedLines[idx].length) ? <span style={{borderRight: '2px solid #fff', marginLeft: 2}}></span> : null}</AnimatedLine>
                    ))}
                </AnimatedLinesBox>
                <HeroImageWithText>
                    {/* No image here as requested */}
                </HeroImageWithText>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero; 