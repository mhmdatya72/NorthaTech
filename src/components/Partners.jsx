import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import imageUrls from '../utils/imageUrls';

const PartnersSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    backgroundColor: '#ffffff',
    textAlign: 'center',
    direction: 'rtl',
}));

const Partners = () => {
    return (
        <PartnersSection>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" gutterBottom>
                    شركاء النجاح
                </Typography>
                <Box
                    component="img"
                    src={imageUrls.partners}
                    alt="شركاء النجاح"
                    sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        mt: 4,
                    }}
                />
            </Container>
        </PartnersSection>
    );
};

export default Partners; 