import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // For Twitter
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { BehanceIcon } from './BehanceIcon'; // Assuming you have a BehanceIcon component or SVG
import Logo from './Logo';

const ContactCTABox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    padding: theme.spacing(3, 4),
    borderRadius: '12px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
    direction: 'rtl',
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(4),
    maxWidth: '800px',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative',
    zIndex: 1,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#1976d2',
        transform: 'translateY(-2px)',
        boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.3)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        padding: theme.spacing(3, 4),
        gap: theme.spacing(3),
        marginTop: theme.spacing(-4),
        maxWidth: '90%',
    },
}));

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: theme.spacing(4, 0, 0),
    direction: 'rtl',
    position: 'relative',
    background: '#000000 !important',
    '& *': {
        backgroundColor: '#000000 !important',
    }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.light,
}));

const FooterLink = styled(Link)(({ theme }) => ({
    color: '#ffffff',
    textDecoration: 'none',
    marginBottom: theme.spacing(0.5),
    display: 'block',
    '&:hover': {
        color: theme.palette.primary.light,
        textDecoration: 'underline',
    },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
    '& svg': {
        marginRight: theme.spacing(0.5),
        color: theme.palette.primary.light,
    },
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: theme.spacing(1),
    gap: theme.spacing(0.5),
    '& .MuiIconButton-root': {
        color: '#ffffff',
        border: '1px solidrgb(2, 2, 2)',
        '&:hover': {
            color: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
        },
    },
}));

const CTAText = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.3rem',
    },
}));

const CTAButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #000000',
    padding: theme.spacing(1.5, 4),
    fontSize: '1.2rem',
    fontWeight: 600,
    borderRadius: '50px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
        backgroundColor: '#333333',
        borderColor: '#333333',
    },
    '& .MuiButton-startIcon': {
        marginLeft: theme.spacing(1),
        marginRight: -4,
    }
}));

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#000000' }}>
            <ContactCTABox>
                <CTAText>
                    لا تتردد في الاتصال بنا <br /> اطلب خدمتك الان من فريق وثوق
                </CTAText>
                <CTAButton
                    variant="contained"
                    startIcon={<ChatBubbleOutlineIcon />}
                    href="/contact"
                >
                    تواصل معنا
                </CTAButton>
            </ContactCTABox>
            <FooterContainer>
                <Container maxWidth="lg" sx={{ backgroundColor: '#000000' }}>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {/* Wothoq Technologies / Logo Section */}
                        <Grid item xs={12} md={4}>
                            <Logo textColor="white" />
                            <Typography variant="body2" paragraph sx={{ mt: 3, mb: 3 }}>
                                وثوق للتقنيات هي شركة سعودية ملتزمة بتمكين رواد ورائدات الأعمال في المملكة العربية السعودية من خلال تقديم مجموعة شاملة من الخدمات والحلول في ميداني التقنية والتسويق.
                            </Typography>
                            <SocialIconsContainer>
                                <IconButton href="#" target="_blank"><WhatsAppIcon /></IconButton>
                                <IconButton href="#" target="_blank"><InstagramIcon /></IconButton>
                                <IconButton href="#" target="_blank"><BehanceIcon /></IconButton>
                                <IconButton href="#" target="_blank"><XIcon /></IconButton>
                            </SocialIconsContainer>
                        </Grid>

                        {/* Quick Links Section */}
                        <Grid item xs={12} md={4}>
                            <SectionTitle>
                                روابط سريعة
                            </SectionTitle>
                            <FooterLink href="/">الرئيسية</FooterLink>
                            <FooterLink href="/about">عن وثوق</FooterLink>
                            <FooterLink href="/services">الخدمات</FooterLink>
                            <FooterLink href="/projects">الأعمال</FooterLink>
                            <FooterLink href="/products">اكتشف المنتجات</FooterLink>
                            <FooterLink href="/news">الأخبار</FooterLink>
                            <FooterLink href="/careers">التوظيف</FooterLink>
                            <FooterLink href="/contact">اتصل بنا</FooterLink>
                        </Grid>

                        {/* Contact Us Section */}
                        <Grid item xs={12} md={4}>
                            <SectionTitle>
                                تواصل معنا
                            </SectionTitle>
                            <ContactInfoItem>
                                <LocationOnIcon />
                                <Typography variant="body2">
                                    الرياض - حي السليمانية - طريق الملك عبدالعزيز
                                </Typography>
                            </ContactInfoItem>
                            <ContactInfoItem>
                                <PhoneIcon />
                                <Typography variant="body2">
                                    0553009446
                                </Typography>
                            </ContactInfoItem>
                            <ContactInfoItem>
                                <PhoneIcon />
                                <Typography variant="body2">
                                    0556633936
                                </Typography>
                            </ContactInfoItem>
                            <ContactInfoItem>
                                <EmailIcon />
                                <Typography variant="body2">
                                    info@wothoq.co
                                </Typography>
                            </ContactInfoItem>
                        </Grid>
                    </Grid>
                    <Box mt={8}>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            © {new Date().getFullYear()} All rights reserved by Wothoq technologies
                        </Typography>
                    </Box>
                </Container>
            </FooterContainer>
        </Box>
    );
};

export default Footer; 