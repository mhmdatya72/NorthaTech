import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from 'react-i18next';

const PartnerContainer = styled(Box)(({ theme, dir }) => ({
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(3, 4),
    margin: theme.spacing(8, 0, 4, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    direction: dir,
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        margin: theme.spacing(4, 0, 2, 0),
        padding: theme.spacing(2),
        gap: theme.spacing(3),
    },
}));

const PartnerTextWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: theme.spacing(1),
    width: '50%',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        order: 2,
    },
}));

const ZohoLogo = styled(Box)(({ theme }) => ({
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
        maxWidth: '400px',
        width: '100%',
        height: 'auto',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '250px',
            marginBottom: theme.spacing(2),
            order: 1,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '200px',
        },
    },
}));

const TextRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    width: '100%',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
}));

const BlueText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.palette.primary.light,
    width: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
}));

const BlackText = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    width: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
}));

const ZohoPartnerSection = () => {
    const { t, i18n } = useTranslation();
    return (
        <Container maxWidth="lg">
            <AnimatedSection direction="center" threshold={0.2}>
                <PartnerContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                    <PartnerTextWrapper>
                        <TextRow>
                            <BlueText>
                                {t('zoho_partner_blue', 'NorthaTech شريك موثوق')}
                            </BlueText>
                            <BlackText>
                                {t('zoho_partner_black1', 'لدى')}
                            </BlackText>
                        </TextRow>
                        <TextRow>
                            <BlackText>
                                {t('zoho_partner_black2', 'زوهو لحلول الأعمال')}
                            </BlackText>
                        </TextRow>
                    </PartnerTextWrapper>
                    <ZohoLogo>
                        <img
                            src="https://wothoq.co/wp-content/uploads/2023/12/zoho.png"
                            alt={t('zoho_partner_img_alt', 'Zoho Authorized Partner')}
                        />
                    </ZohoLogo>
                </PartnerContainer>
            </AnimatedSection>
        </Container>
    );
};

export default ZohoPartnerSection; 