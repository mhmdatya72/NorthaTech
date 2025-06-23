import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Projects from '../components/Projects'; // Import the existing Projects component
import { useTranslation } from 'react-i18next';

const ProjectsPageContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    direction: 'rtl',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
    },
}));

const ProjectsPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <ProjectsPageContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    {t('projectspage_title', 'بعض أعمالنا')}
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    {t('projectspage_desc', 'استعرض مجموعتنا الواسعة من المشاريع التي تعكس خبرتنا وإبداعنا في مختلف المجالات.')}
                </Typography>
                <Projects /> {/* The existing Projects component will render the project cards */}
            </Container>
        </ProjectsPageContainer>
    );
};

export default ProjectsPage;