import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    flex: '1 1 50%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
    flex: '1 1 50%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
        height: '300px',
    },
}));

const projects = [
    {
        title: 'GIFT CONCEPT',
        description: 'يُعتبر المكان المثالي لتحقيق تجربة فريدة في عالم الهدايا الشخصية, حيث يقدم التطبيق فكرة جديدة ومبتكرة لاختيار وتخصيص الهدايا بطريقة مميزة وفريدة',
        image: '/images/gift-concept.jpg',
    },
    {
        title: 'سكناي',
        description: 'تطبيق "سكناي" يقدم لك تجربة حجز استثنائية تجمع بين الفخامة والتميز, كما يتيح لك هذا التطبيق الحصري فرصة استكشاف وحجز وحدات فندقية ومنتجعات راقية',
        image: '/images/skynai.jpg',
    },
    {
        title: 'نبع الأم العربية',
        description: '" نبع" تطبيق توعوي رائد يهدف إلى توعية الأمهات وتمكينهم في مجال تربية الأبناء, كما يقدم التطبيق محتوى تثقيفي وتوعوي متخصص',
        image: '/images/nabaa.jpg',
    },
    {
        title: 'معمول',
        description: 'معمول هو تطبيق رائد مصمم خصيصًا لخدمة الأسر المنتجة وتمكينها من عرض وبيع خدماتها بكفاءة وسهولة',
        image: '/images/mamoul.jpg',
    },
];

const Projects = () => {
    return (
        <ProjectsSection>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" align="center" gutterBottom>
                    بعض أعمالنا
                </Typography>
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
                                        <Button variant="outlined" color="primary">
                                            شاهد المشروع
                                        </Button>
                                    </ProjectContent>
                                    <ProjectImage
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                </>
                            ) : (
                                <>
                                    <ProjectImage
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                    <ProjectContent>
                                        <Typography gutterBottom variant="h4" component="h3">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>
                                        <Button variant="outlined" color="primary">
                                            شاهد المشروع
                                        </Button>
                                    </ProjectContent>
                                </>
                            )}
                        </ProjectCard>
                    ))}
                </Box>
            </Container>
        </ProjectsSection>
    );
};

export default Projects; 