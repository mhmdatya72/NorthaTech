import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';

const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1976d2 0%, #2196F3 100%)',
    minHeight: '60vh', // Adjusted height for a section, not full screen
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: theme.spacing(10), // To account for fixed Navbar
    paddingBottom: theme.spacing(10),
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

const HeroText = styled(Box)(({ theme }) => ({
    '& img': {
        width: '100%',
        height: 'auto',
        maxWidth: '900px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
        },
    },
}));

const StatsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(8),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

const StatItem = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    color: '#ffffff',
}));

const ServicesHeroSection = () => {
    return (
        <HeroSection>
            <HeroContent>
                <HeroText>
                    <img
                        src={imageUrls.heroTextWithRocket}
                        alt="NorthaTech"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </HeroText>
                <StatsContainer>
                    <StatItem>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>0</Typography>
                        <Typography variant="body2">منتج تقني</Typography>
                    </StatItem>
                    <StatItem>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>0</Typography>
                        <Typography variant="body2">سنة من الخبرة</Typography>
                    </StatItem>
                    <StatItem>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>0%</Typography>
                        <Typography variant="body2">رضا العملاء</Typography>
                    </StatItem>
                </StatsContainer>
            </HeroContent>
        </HeroSection>
    );
};

export default ServicesHeroSection; 