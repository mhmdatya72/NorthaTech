import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const ProjectsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    direction: 'rtl',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    textAlign: 'right',
    direction: 'rtl',
    transition: 'transform 0.3s ease-in-out',
    marginBottom: theme.spacing(4),
    height: '400px',
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
    flex: '1 1 33.33%',
    height: '400px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('md')]: {
        flex: '1 1 100%',
        height: '300px',
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
        title: 'تطبيق إدارة المهام',
        description: 'تطبيق متكامل لإدارة المهام والمشاريع مع واجهة مستخدم سهلة الاستخدام وميزات متقدمة للتتبع والتعاون.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
        title: 'منصة التجارة الإلكترونية',
        description: 'منصة متكاملة للتجارة الإلكترونية مع نظام دفع آمن وإدارة مخزون متقدمة وتجربة مستخدم سلسة.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'نظام إدارة المحتوى',
        description: 'نظام متطور لإدارة المحتوى مع واجهة تحكم سهلة الاستخدام وميزات متقدمة للتحرير والنشر.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'تطبيق التواصل الاجتماعي',
        description: 'تطبيق تواصل اجتماعي مع ميزات متقدمة للمحادثة ومشاركة المحتوى والتفاعل بين المستخدمين.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
        title: 'منصة التعلم الإلكتروني',
        description: 'منصة متكاملة للتعلم الإلكتروني مع محتوى تفاعلي ونظام متابعة التقدم وتقييم الأداء.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
        title: 'تطبيق إدارة الموارد البشرية',
        description: 'تطبيق متكامل لإدارة الموارد البشرية مع ميزات متقدمة للموظفين والتوظيف وإدارة الأداء.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
];

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleImageLink = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/services';
    };

    return (
        <ProjectsSection>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={6}>
                    <Typography variant="h3" component="h2">
                        بعض أعمالنا
                    </Typography>
                    <ViewAllButton
                        component={Link}
                        to="/projects"
                        startIcon={<ArrowBackIcon />}
                    >
                        جميع الأعمال
                    </ViewAllButton>
                </Box>
                <Box sx={{ mt: 4 }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    <ProjectContent>
                                        <Typography gutterBottom variant="h4" component="h3">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>
                                    </ProjectContent>
                                    <ProjectImage
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                        onClick={handleImageLink}
                                    />
                                </>
                            ) : (
                                <>
                                    <ProjectImage
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                        onClick={handleImageLink}
                                    />
                                    <ProjectContent>
                                        <Typography gutterBottom variant="h4" component="h3">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>
                                    </ProjectContent>
                                </>
                            )}
                        </ProjectCard>
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