import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProductsPageContainer = styled(Box)(({ theme }) => ({
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

const ProductCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    textAlign: 'right',
    direction: 'rtl',
    transition: 'transform 0.3s ease-in-out',
    marginBottom: theme.spacing(4),
    height: '400px', // Fixed height for consistency, similar to Projects
    '&:hover': {
        transform: 'translateY(-5px)',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
        height: 'auto',
    },
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
    flex: '1 1 50%', // Take up 50% of the space
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
    flex: '1 1 50%', // Take up 50% of the space
    height: '100%', // Fill the full height of the card
    [theme.breakpoints.down('md')]: {
        height: '300px', // Fixed height on mobile
    },
}));

const products = [
    {
        name: 'منتج رقم 1',
        description: 'وصف قصير للمنتج الأول، مع التركيز على مميزاته الرئيسية.',
        image: 'https://via.placeholder.com/300x200?text=Product+1',
    },
    {
        name: 'منتج رقم 2',
        description: 'وصف قصير للمنتج الثاني، يبرز فوائده واستخداماته.',
        image: 'https://via.placeholder.com/300x200?text=Product+2',
    },
    {
        name: 'منتج رقم 3',
        description: 'وصف قصير للمنتج الثالث، يتحدث عن الابتكار والجودة.',
        image: 'https://via.placeholder.com/300x200?text=Product+3',
    },
    {
        name: 'منتج رقم 4',
        description: 'وصف قصير للمنتج الرابع، يركز على الحلول التي يقدمها.',
        image: 'https://via.placeholder.com/300x200?text=Product+4',
    },
];

const ProductsPage = () => {
    return (
        <ProductsPageContainer>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    اكتشف المنتجات
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    استكشف أحدث منتجاتنا وحلولنا المبتكرة المصممة لتلبية احتياجاتك الرقمية.
                </Typography>
                <Box>
                    {products.map((product, index) => (
                        <ProductCard key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    <ProductContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {product.description}
                                        </Typography>
                                        <Button variant="outlined" color="primary">
                                            شاهد المنتج
                                        </Button>
                                    </ProductContent>
                                    <ProductImage
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                    />
                                </>
                            ) : (
                                <>
                                    <ProductImage
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                    />
                                    <ProductContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {product.description}
                                        </Typography>
                                        <Button variant="outlined" color="primary">
                                            شاهد المنتج
                                        </Button>
                                    </ProductContent>
                                </>
                            )}
                        </ProductCard>
                    ))}
                </Box>
            </Container>
        </ProductsPageContainer>
    );
};

export default ProductsPage; 