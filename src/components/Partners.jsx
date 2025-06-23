import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';

const PartnersSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#ffffff',
    textAlign: 'center',
    direction: 'rtl',
    overflow: 'hidden',
}));

const SliderContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    marginTop: '2rem',
});

const SliderTrack = styled(Box)(({ translateX }) => ({
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(${translateX}px)`,
}));

const PartnerLogo = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    minWidth: '200px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '& img': {
        maxWidth: '150px',
        maxHeight: '60px',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        filter: 'grayscale(100%)',
        transition: 'filter 0.3s ease',
        '&:hover': {
            filter: 'grayscale(0%)',
        },
    },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    zIndex: 2,
}));

const PaginationDots = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
}));

const Dot = styled(Box)(({ active }) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: active ? '#1976d2' : '#e0e0e0',
    transition: 'background-color 0.3s ease',
}));

const partners = [
    {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
        url: 'https://www.microsoft.com'
    },
    {
        name: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        url: 'https://www.google.com'
    },
    {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        url: 'https://www.amazon.com'
    },
    {
        name: 'IBM',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        url: 'https://www.ibm.com'
    },
    {
        name: 'Oracle',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
        url: 'https://www.oracle.com'
    },
    {
        name: 'SAP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
        url: 'https://www.sap.com'
    },
    {
        name: 'Adobe',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg',
        url: 'https://www.adobe.com'
    },
    {
        name: 'Cisco',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
        url: 'https://www.cisco.com'
    },
    {
        name: 'Dell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
        url: 'https://www.dell.com'
    },
    {
        name: 'HP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
        url: 'https://www.hp.com'
    },
    {
        name: 'Samsung',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
        url: 'https://www.samsung.com'
    },
    {
        name: 'LG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg',
        url: 'https://www.lg.com'
    },
    {
        name: 'Asus',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg',
        url: 'https://www.asus.com'
    }
];

const Partners = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const [translateX, setTranslateX] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const logoWidth = 200;
    const logosPerView = 5;
    const totalPages = partners.length;

    const handleNext = () => {
        setTranslateX(prev => {
            const newTranslate = prev + logoWidth;
            // Reset to start when reaching the end
            if (newTranslate >= partners.length * logoWidth) {
                return 0;
            }
            return newTranslate;
        });
        setCurrentPage(prev => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setTranslateX(prev => {
            const newTranslate = prev - logoWidth;
            // Go to end when reaching the start
            if (newTranslate < -(partners.length - 1) * logoWidth) {
                return 0;
            }
            return newTranslate;
        });
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <PartnersSection dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: '2rem', md: '3rem' },
                        textAlign: 'center'
                    }}
                >
                    <Box component="span" sx={{ color: '#1976d2' }}>{t('partners_title_blue', 'شركاء')}</Box> {t('partners_title_black', 'النجاح')}
                </Typography>
                <SliderContainer>
                    <NavigationButton
                        onClick={handlePrev}
                        sx={{ right: 0 }}
                    >
                        <ArrowBackIosNewIcon />
                    </NavigationButton>
                    <NavigationButton
                        onClick={handleNext}
                        sx={{ left: 0 }}
                    >
                        <ArrowForwardIosIcon />
                    </NavigationButton>
                    <SliderTrack translateX={translateX}>
                        {partners.map((partner, index) => (
                            <PartnerLogo key={index}>
                                <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <img src={partner.logo} alt={partner.name} />
                                </a>
                            </PartnerLogo>
                        ))}
                    </SliderTrack>
                    <PaginationDots>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <Dot key={index} active={index === currentPage} />
                        ))}
                    </PaginationDots>
                </SliderContainer>
            </Container>
        </PartnersSection>
    );
};

export default Partners; 