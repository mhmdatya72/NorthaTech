import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Projects from '../components/Projects'; // Import the existing Projects component

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
    return (
        <ProjectsPageContainer>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    بعض أعمالنا
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    استعرض مجموعتنا الواسعة من المشاريع التي تعكس خبرتنا وإبداعنا في مختلف المجالات.
                </Typography>
                <Projects /> {/* The existing Projects component will render the project cards */}
            </Container>
        </ProjectsPageContainer>
    );
};

export default ProjectsPage;