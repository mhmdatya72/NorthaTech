import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const AboutPageContainer = styled(Box)({
    padding: '80px 0',
    backgroundColor: '#ffffff',
    direction: 'rtl',
});

const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default,
    direction: theme.direction,
    marginBottom: '64px',
}));

const SectionTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#333333',
    marginBottom: '24px',
    textAlign: 'center',
});

const SubSectionTitle = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1976d2',
    marginBottom: '24px',
    textAlign: 'center',
});

const StatBox = styled(Box)({
    textAlign: 'center',
    padding: '24px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const teamMembers = [
    {
        nameKey: 'about_team_abdulaziz_name',
        roleKey: 'about_team_abdulaziz_role',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        nameKey: 'about_team_ahmad_name',
        roleKey: 'about_team_ahmad_role',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        nameKey: 'about_team_tarek_name',
        roleKey: 'about_team_tarek_role',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        nameKey: 'about_team_muhaned_name',
        roleKey: 'about_team_muhaned_role',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        nameKey: 'about_team_ahmedmansour_name',
        roleKey: 'about_team_ahmedmansour_role',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
];

const About = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <AboutPageContainer>
            <Container maxWidth="lg">
                {/* Main About Section */}
                <Section dir={isArabic ? 'rtl' : 'ltr'}>
                    <SectionTitle sx={{ textAlign: 'center' }}>
                        {t('about_title')}
                    </SectionTitle>
                    <Typography variant="h5" paragraph sx={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        {t('about_subtitle')}
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Button variant="contained" color="primary" size="large">
                            {t('about_download_btn')}
                        </Button>
                    </Box>
                    <Typography variant="body1" paragraph sx={{ maxWidth: '900px', margin: '0 auto', mt: 5, textAlign: isArabic ? 'right' : 'left' }}>
                        {t('about_desc1')}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ maxWidth: '900px', margin: '0 auto', mt: 2, textAlign: isArabic ? 'right' : 'left' }}>
                        {t('about_desc2')}
                    </Typography>
                </Section>

                {/* Statistics Section */}
                <Section>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <StatBox>
                                <Typography variant="h3" color="primary">0</Typography>
                                <Typography variant="body1" sx={{ textAlign: isArabic ? 'right' : 'left' }}>{t('about_stat_products')}</Typography>
                            </StatBox>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StatBox>
                                <Typography variant="h3" color="primary">0</Typography>
                                <Typography variant="body1" sx={{ textAlign: isArabic ? 'right' : 'left' }}>{t('about_stat_years')}</Typography>
                            </StatBox>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StatBox>
                                <Typography variant="h3" color="primary">0%</Typography>
                                <Typography variant="body1" sx={{ textAlign: isArabic ? 'right' : 'left' }}>{t('about_stat_satisfaction')}</Typography>
                            </StatBox>
                        </Grid>
                    </Grid>
                </Section>

                {/* Mission, Vision, Values Section */}
                <Section>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <SubSectionTitle sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                {t('about_mission_title')}
                            </SubSectionTitle>
                            <Typography variant="body1" paragraph sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                {t('about_mission_desc')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SubSectionTitle sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                {t('about_vision_title')}
                            </SubSectionTitle>
                            <Typography variant="body1" paragraph sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                {t('about_vision_desc')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SubSectionTitle sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                {t('about_values_title')}
                            </SubSectionTitle>
                            <Box component="ul" sx={{ textAlign: isArabic ? 'right' : 'left', listStyle: 'disc', pl: isArabic ? 0 : 3, pr: isArabic ? 3 : 0 }}>
                                <Typography variant="body1" paragraph component="li">
                                    {t('about_values_point1', 'Providing strong technical services.')}
                                </Typography>
                                <Typography variant="body1" paragraph component="li">
                                    {t('about_values_point2', 'Comprehensive understanding of client needs.')}
                                </Typography>
                                <Typography variant="body1" paragraph component="li">
                                    {t('about_values_point3', 'Continuous development of our expertise and tools.')}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Section>

                {/* Executive Team Section */}
                <Section>
                    <SectionTitle sx={{ textAlign: 'center' }}>
                        {t('about_team_title')}
                    </SectionTitle>
                    <Grid container spacing={4} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ textAlign: 'center', padding: '24px', boxShadow: 'none' }}>
                                    <Avatar src={member.avatar} alt={t(member.nameKey)} sx={{ width: 120, height: 120, margin: '0 auto' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', mt: 2 }}>
                                        {t(member.nameKey)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                        {t(member.roleKey)}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>
            </Container>
        </AboutPageContainer>
    );
};

export default About; 