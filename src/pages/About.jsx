import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutPageContainer = styled(Box)({
    padding: '80px 0',
    backgroundColor: '#ffffff',
    direction: 'rtl',
});

const Section = styled(Box)({
    marginBottom: '64px',
});

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
        name: 'Abdulaziz Alenazi',
        role: 'CEO · founder',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        name: 'Ahmad alsubie',
        role: 'Co-Founder, COO',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        name: 'Tarek',
        role: 'Team Leader',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        name: 'Muhaned',
        role: 'Account Manager',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
        name: 'Ahmed Mansour',
        role: 'Team Leader',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
];

const About = () => {
    return (
        <AboutPageContainer>
            <Container maxWidth="lg">
                {/* Main About Section */}
                <Section>
                    <SectionTitle>
                        وثوق للتقنيات.
                    </SectionTitle>
                    <Typography variant="h5" align="center" paragraph sx={{ maxWidth: '900px', margin: '0 auto' }}>
                        رحلة تبدأ من الثقة
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Button variant="contained" color="primary" size="large">
                            حمل الملف التعريفي
                        </Button>
                    </Box>
                    <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '900px', margin: '0 auto', mt: 5 }}>
                        وثوق للتقنيات هي شركة سعودية ملتزمة بتمكين رواد ورائدات الأعمال في المملكة العربية السعودية من خلال تقديم مجموعة شاملة من الخدمات والحلول في ميداني التقنية والتسويق, كما نتميز بتقديم خدمات متميزة تلبي احتياجات السوق المحلي والعالمي، حيث نعمل بثبات وتفاني منذ أكثر من 6 سنوات على رفع مستوى جودة الخدمات التقنية. أما عن فريقنا الإبداعي، فهو يتميز بالكفاءة العالية، حيث يقوم بتطوير تطبيقات الهواتف الذكية والمواقع الإلكترونية، ويقدم خدمات تصميم الجرافيك والتسويق الإلكتروني وما يندرج تحتها. نحن نتعامل مع كل مشروع كتحفة فنية فريدة، نسعى من خلالها إلى تحقيق رضا شركائنا في النجاح.
                    </Typography>
                    <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '900px', margin: '0 auto', mt: 2 }}>
                        في وثوق، نؤمن بأهمية مواءمة توقعات عملائنا مع أهدافهم التجارية، ونعمل بجد لتحويل رؤى وأفكار عملائنا إلى حلول تقنية مثلى, كما نتطلع دائمًا إلى تحقيق رضا شركائنا من خلال تقديم خدمات ذات جودة عالية والمساهمة في نجاحهم. نتخذ من الابتكار والاحترافية محورًا لأعمالنا، من خلال تقديم خدمات متنوعة في مجالات مثل; برمجة تطبيقات الهواتف الذكية، وتطوير المواقع الإلكترونية، والتصميم الجرافيكي، واستراتيجيات التسويق الإلكتروني.
                    </Typography>
                </Section>

                {/* Statistics Section */}
                <Section>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <StatBox>
                                <Typography variant="h3" color="primary">0</Typography>
                                <Typography variant="body1">منتج تقني</Typography>
                            </StatBox>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StatBox>
                                <Typography variant="h3" color="primary">0</Typography>
                                <Typography variant="body1">سنة من الخبرة</Typography>
                            </StatBox>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <StatBox>
                                <Typography variant="h3" color="primary">0%</Typography>
                                <Typography variant="body1">رضا العملاء</Typography>
                            </StatBox>
                        </Grid>
                    </Grid>
                </Section>

                {/* Mission, Vision, Values Section */}
                <Section>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <SubSectionTitle>
                                رسالة وثوق
                            </SubSectionTitle>
                            <Typography variant="body1" align="center" paragraph>
                                تقديم حلول تقنية مبتكرة على أعلى مستوى، تتجاوز توقعات عملائنا وتفي بتطلعاتهم.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SubSectionTitle>
                                الرؤية
                            </SubSectionTitle>
                            <Typography variant="body1" align="center" paragraph>
                                أن نكون أحد الشركات الرائدة الأولى على مستوى الشرق الأوسط في تقديم حلول رقمية ذات جودة عالية وفعالة لعملائنا لتحقيق النمو والتطور لأعمالهم.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SubSectionTitle>
                                قيمنا
                            </SubSectionTitle>
                            <Typography variant="body1" align="center" paragraph>
                                نؤمن بالشغف ومواكبة آخر التحديثات التقنية في مجال خبرتنا, مما يجعلنا نحافظ على تقاليد أساسية في العمل بما في ذلك: <br /> ● تقديم خدمات فنية قوية. <br /> ● فهم شامل لاحتياجات العميل. <br /> ● التطوير المستمر لخبراتنا وأدواتنا.
                            </Typography>
                        </Grid>
                    </Grid>
                </Section>

                {/* Executive Team Section */}
                <Section>
                    <SectionTitle>
                        الفريق التنفيذي
                    </SectionTitle>
                    <Grid container spacing={4} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ textAlign: 'center', padding: '24px', boxShadow: 'none' }}>
                                    <Avatar src={member.avatar} alt={member.name} sx={{ width: 120, height: 120, margin: '0 auto 16px' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.role}
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