import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Modal, IconButton, Fade, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';

const ProductsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 0),
    direction: 'rtl',
}));

const ProductCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    direction: 'rtl',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
    flex: '1 1 auto',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
    height: '250px',
    width: '100%',
}));

const ViewDetailsButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
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

const products = [
    {
        nameKey: 'products_pm_name',
        descKey: 'products_pm_desc',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/products/project-management',
    },
    {
        nameKey: 'products_ecommerce_name',
        descKey: 'products_ecommerce_desc',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/products/ecommerce',
    },
    {
        nameKey: 'products_cms_name',
        descKey: 'products_cms_desc',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        link: '/products/cms',
    },
    {
        nameKey: 'products_elearning_name',
        descKey: 'products_elearning_desc',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        link: '/products/elearning',
    },
];

const Products = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <ProductsSection dir={isArabic ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: 1000 + (index * 200) } : {})}
                            >
                                <Fade in={true} timeout={1000 + (index * 200)}>
                                    <ProductCard dir={isArabic ? 'rtl' : 'ltr'}>
                                        <ProductImage
                                            component={Link}
                                            to={product.link}
                                            image={product.image}
                                            alt={t(product.nameKey)}
                                        />
                                        <ProductContent>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="h3" sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                                    {t(product.nameKey)}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" paragraph sx={{ textAlign: isArabic ? 'right' : 'left' }}>
                                                    {t(product.descKey)}
                                                </Typography>
                                            </Box>
                                            <ViewDetailsButton
                                                component={Link}
                                                to={product.link}
                                                variant="contained"
                                                startIcon={<VisibilityIcon />}
                                            >
                                                {t('products_view_details', 'عرض التفاصيل')}
                                            </ViewDetailsButton>
                                        </ProductContent>
                                    </ProductCard>
                                </Fade>
                            </Grow>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Modal
                open={Boolean(selectedImage)}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ position: 'relative', width: '90%', height: '90%' }}>
                    <CloseButton onClick={handleClose}>
                        <CloseIcon />
                    </CloseButton>
                    <FullScreenImage src={selectedImage} alt="Product" />
                </Box>
            </Modal>
        </ProductsSection>
    );
};

export default Products; 