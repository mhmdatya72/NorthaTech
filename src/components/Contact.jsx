import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
// import Map from './Map';

const ContactSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: '#f8f9fa',
    direction: theme.direction,
}));

const ContactForm = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '& svg': {
        marginLeft: theme.spacing(2),
        color: theme.palette.primary.main,
    },
}));

// const MapSection = styled(Box)(({ theme }) => ({
//     marginTop: theme.spacing(8),
//     padding: theme.spacing(4),
//     backgroundColor: '#ffffff',
//     borderRadius: '15px',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
// }));

const Contact = () => {
    const { t, i18n } = useTranslation();
    return (
        <ContactSection dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
                    {t('contact_title', 'تواصل معنا')}
                </Typography>

                {/* Contact Information Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
                        {t('contact_info', 'معلومات التواصل')}
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <ContactInfo>
                                <LocationOnIcon fontSize="large" />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        {t('contact_address_title', 'العنوان')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {t('contact_address', 'المملكة العربية السعودية، الرياض')}
                                    </Typography>
                                </Box>
                            </ContactInfo>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ContactInfo>
                                <PhoneIcon fontSize="large" />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        {t('contact_phone_title', 'رقم الهاتف')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {t('contact_phone', '+966 11 123 4567')}
                                    </Typography>
                                </Box>
                            </ContactInfo>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ContactInfo>
                                <EmailIcon fontSize="large" />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        {t('contact_email_title', 'البريد الإلكتروني')}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {t('contact_email', 'info@wothoq.com')}
                                    </Typography>
                                </Box>
                            </ContactInfo>
                        </Grid>
                    </Grid>
                </Box>

                {/* Contact Form Section */}
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <ContactForm>
                            <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                                {t('contact_form_title', 'أرسل لنا رسالة')}
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label={t('contact_form_name', 'الاسم')}
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label={t('contact_form_phone', 'رقم الجوال')}
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label={t('contact_form_email', 'البريد الإلكتروني')}
                                        variant="outlined"
                                        required
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label={t('contact_form_subject', 'الموضوع')}
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label={t('contact_form_message', 'الرسالة')}
                                        variant="outlined"
                                        required
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        sx={{
                                            py: 1.5,
                                            borderRadius: '50px',
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        {t('contact_form_send', 'إرسال الرسالة')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </ContactForm>
                    </Grid>
                </Grid>
            </Container>
        </ContactSection>
    );
};

export default Contact; 