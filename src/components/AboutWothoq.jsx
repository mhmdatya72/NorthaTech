import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';

const AboutSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
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
    flex: 1,
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
});

const AboutWothoq = () => {
    return (
        <AboutSection>
            <Container maxWidth="lg">
                <ContentWrapper>
                    <TextWrapper>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                            وثوق للتقنيات
                        </Typography>
                        <Typography variant="h6" paragraph>
                            وثوق للتقنيات هي شركة سعودية ملتزمة بتمكين رواد ورائدات الأعمال في المملكة العربية السعودية من خلال تقديم مجموعة شاملة من الخدمات والحلول في ميداني التقنية والتسويق, كما نتميز بتقديم خدمات متميزة تلبي احتياجات السوق المحلي والعالمي، حيث نعمل بثبات وتفاني منذ أكثر من 6 سنوات
                        </Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            للمزيد
                        </Button>
                    </TextWrapper>
                    <ImageWrapper>
                        <StyledImage src={imageUrls.aboutWothoqImage} alt="About Wothoq" />
                    </ImageWrapper>
                </ContentWrapper>
            </Container>
        </AboutSection>
    );
};

export default AboutWothoq; 