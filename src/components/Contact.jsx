import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
// import Map from './Map';

const ContactSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: '#f8f9fa',
    direction: 'rtl',
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
    return (
        <ContactSection>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
                    تواصل معنا
                </Typography>

                {/* Contact Information Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
                        معلومات التواصل
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <ContactInfo>
                                <LocationOnIcon fontSize="large" />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        العنوان
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        المملكة العربية السعودية، الرياض
                                    </Typography>
                                </Box>
                            </ContactInfo>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ContactInfo>
                                <PhoneIcon fontSize="large" />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        رقم الهاتف
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        +966 11 123 4567
                                    </Typography>
                                </Box>
                            </ContactInfo>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ContactInfo>
                                <EmailIcon fontSize="large" />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        البريد الإلكتروني
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        info@wothoq.com
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
                                أرسل لنا رسالة
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="الاسم"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="رقم الجوال"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="البريد الإلكتروني"
                                        variant="outlined"
                                        required
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="الموضوع"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="الرسالة"
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
                                        إرسال الرسالة
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