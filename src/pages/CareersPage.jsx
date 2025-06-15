import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CareersPageContainer = styled(Box)(({ theme }) => ({
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

const CareersPage = () => {
    return (
        <CareersPageContainer>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    التوظيف
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    انضم إلى فريقنا المبتكر وكن جزءًا من رحلتنا في عالم التقنية والرقمنة.
                </Typography>
                {/* Placeholder for actual career opportunities */}
                <Box sx={{ minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed #ccc', borderRadius: '8px', p: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                        فرص وظيفية سيتم إضافتها هنا قريباً.
                    </Typography>
                </Box>
            </Container>
        </CareersPageContainer>
    );
};

export default CareersPage; 