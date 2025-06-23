import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';
import { useTranslation } from 'react-i18next';

const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1976d2 0%, #2196F3 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
}));

const GreenOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(25, 118, 210, 0.35)', // primary blue with transparency
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

const HighlightedBrand = styled('span')(({ theme }) => ({
    background: 'linear-gradient(90deg, #1976d2 0%, #2196F3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 900,
    fontSize: '2.5rem',
    letterSpacing: '1px',
    textShadow: '0 2px 8px rgba(0,0,0,0.15)',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
    },
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
        opacity: 0.7,
        filter: 'blur(0.1px)',
    },
});

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
    const { t } = useTranslation();
    const animatedLinesState = useMultiTypewriter([
        t('hero_line1', 'NorthaTech - الريادة في الحلول الرقمية'),
        t('hero_line2', 'نحن نبتكر من أجل المستقبل'),
        t('hero_line3', 'خبرة في تطوير البرمجيات والتقنيات الحديثة'),
        t('hero_line4', 'شريكك في التحول الرقمي'),
        t('hero_line5', 'فريق عمل محترف لخدمة أعمالك'),
        t('hero_line6', 'حلول متكاملة لإدارة مشاريعك'),
        t('hero_line7', 'نصنع الفرق في عالم التقنية'),
    ]);
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
                <source src="https://videos.pexels.com/video-files/3184416/3184416-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </VideoBackground>
            <GreenOverlay />
            <HeroContent>
                <AnimatedLinesBox>
                    {animatedLinesState.map((line, idx) => {
                        if (idx === 0) {
                            // Highlight NorthaTech in the first line
                            const match = line.match(/(NorthaTech)(.*)/);
                            if (match) {
                                return (
                                    <AnimatedLine key={idx}>
                                        <HighlightedBrand>NorthaTech</HighlightedBrand>{match[2]}
                                        {idx === animatedLinesState.findIndex(l => l.length < line.length) ? <span style={{borderRight: '2px solid #fff', marginLeft: 2}}></span> : null}
                                    </AnimatedLine>
                                );
                            }
                        }
                        return (
                            <AnimatedLine key={idx}>{line}{idx === animatedLinesState.findIndex(l => l.length < line.length) ? <span style={{borderRight: '2px solid #fff', marginLeft: 2}}></span> : null}</AnimatedLine>
                        );
                    })}
                </AnimatedLinesBox>
                <HeroImageWithText>
                    {/* No image here as requested */}
                </HeroImageWithText>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero; 