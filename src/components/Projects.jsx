import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Modal, IconButton, Fade, Slide, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';

const ProjectsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: theme.direction,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    textAlign: 'right',
    direction: 'rtl',
    transition: 'transform 0.3s ease-in-out',
    marginBottom: theme.spacing(4),
    height: '500px',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        height: 'auto',
    },
}));

const ProjectContent = styled(CardContent)(({ theme }) => ({
    flex: '1 1 33.33%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
    flex: '2 2 66.66%',
    height: '500px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('md')]: {
        flex: '1 1 100%',
        height: '400px',
    },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
    color: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: '1.5rem',
    padding: theme.spacing(1, 3),
    flexDirection: 'row-reverse',
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
    },
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#1565c0',
    },
}));

const ViewDetailsButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    padding: theme.spacing(1, 3),
    marginTop: theme.spacing(2),
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const FullScreenImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
});

const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: '#fff',
    zIndex: 1,
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const projects = [
    {
        titleKey: 'projects_task_title',
        descKey: 'projects_task_desc',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        link: '/projects/task-management',
    },
    {
        titleKey: 'projects_ecommerce_title',
        descKey: 'projects_ecommerce_desc',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/projects/ecommerce-platform',
    },
    {
        titleKey: 'projects_cms_title',
        descKey: 'projects_cms_desc',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/projects',
    },
    {
        titleKey: 'projects_social_title',
        descKey: 'projects_social_desc',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        link: '/projects',
    },
    {
        titleKey: 'projects_elearning_title',
        descKey: 'projects_elearning_desc',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        link: '/projects',
    },
    {
        titleKey: 'projects_hr_title',
        descKey: 'projects_hr_desc',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/projects',
    },
];

const Projects = ({ isProjectsPage }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const projectElements = document.querySelectorAll('.project-card');
            projectElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.2;
                if (isVisible && !visibleProjects.includes(index)) {
                    setVisibleProjects(prev => [...prev, index]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleProjects]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleImageLink = (link) => {
        window.location.href = link;
    };

    const renderProjectContent = (project, index) => (
        <>
            {isMobile ? (
                <>
                    <ProjectImage
                        component="img"
                        image={project.image}
                        alt={t(project.titleKey)}
                        onClick={() => handleImageLink(project.link)}
                    />
                    <ProjectContent>
                        <Typography gutterBottom variant="h4" component="h3">
                            {t(project.titleKey)}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {t(project.descKey)}
                        </Typography>
                        <ViewDetailsButton
                            component={Link}
                            to={project.link}
                            startIcon={<VisibilityIcon />}
                        >
                            {t('projects_view_details', 'عرض التفاصيل')}
                        </ViewDetailsButton>
                    </ProjectContent>
                </>
            ) : (
                <>
                    {index % 2 === 0 ? (
                        <>
                            <ProjectContent>
                                <Typography gutterBottom variant="h4" component="h3">
                                    {t(project.titleKey)}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {t(project.descKey)}
                                </Typography>
                                <ViewDetailsButton
                                    component={Link}
                                    to={project.link}
                                    startIcon={<VisibilityIcon />}
                                >
                                    {t('projects_view_details', 'عرض التفاصيل')}
                                </ViewDetailsButton>
                            </ProjectContent>
                            <ProjectImage
                                component="img"
                                image={project.image}
                                alt={t(project.titleKey)}
                                onClick={() => handleImageLink(project.link)}
                            />
                        </>
                    ) : (
                        <>
                            <ProjectImage
                                component="img"
                                image={project.image}
                                alt={t(project.titleKey)}
                                onClick={() => handleImageLink(project.link)}
                            />
                            <ProjectContent>
                                <Typography gutterBottom variant="h4" component="h3">
                                    {t(project.titleKey)}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {t(project.descKey)}
                                </Typography>
                                <ViewDetailsButton
                                    component={Link}
                                    to={project.link}
                                    startIcon={<VisibilityIcon />}
                                >
                                    {t('projects_view_details', 'عرض التفاصيل')}
                                </ViewDetailsButton>
                            </ProjectContent>
                        </>
                    )}
                </>
            )}
        </>
    );

    return (
        <ProjectsSection dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                {!isProjectsPage && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={6}>
                        <Typography variant="h3" component="h2">
                            {t('projects_section_title', 'جميع أعمالنا')}
                        </Typography>
                        <ViewAllButton
                            component={Link}
                            to="/projects"
                            startIcon={<ArrowBackIcon />}
                        >
                            {t('projects_all_btn', 'جميع المشاريع')}
                        </ViewAllButton>
                    </Box>
                )}
                <Box sx={{ mt: isProjectsPage ? 6 : 4 }}>
                    {projects.map((project, index) => (
                        <Box key={index} className="project-card" sx={{ mb: 4 }}>
                            <Slide
                                direction={isMobile ? "up" : (index % 2 === 0 ? "right" : "left")}
                                in={visibleProjects.includes(index)}
                                timeout={1500}
                                mountOnEnter
                                unmountOnExit
                                easing={{
                                    enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                    exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                <Fade
                                    in={visibleProjects.includes(index)}
                                    timeout={1500}
                                    easing={{
                                        enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                        exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <ProjectCard>
                                        {renderProjectContent(project, index)}
                                    </ProjectCard>
                                </Fade>
                            </Slide>
                        </Box>
                    ))}
                </Box>

                <Modal
                    open={!!selectedImage}
                    onClose={handleClose}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    }}
                >
                    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                        {selectedImage && <FullScreenImage src={selectedImage} alt="Full screen" />}
                        <CloseButton onClick={handleClose}>
                            <CloseIcon />
                        </CloseButton>
                    </Box>
                </Modal>
            </Container>
        </ProjectsSection>
    );
};

export default Projects; 