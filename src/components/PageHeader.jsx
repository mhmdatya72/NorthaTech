import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark, // A dark blue color
    color: '#ffffff',
    padding: theme.spacing(10, 0, 5, 0), // Adjust padding as needed
    textAlign: 'right',
    direction: 'rtl',
    marginTop: theme.spacing(8), // To push it below the fixed Navbar
}));

const PageHeader = ({ title }) => {
    return (
        <HeaderBox>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </Container>
        </HeaderBox>
    );
};

export default PageHeader; 