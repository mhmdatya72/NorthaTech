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
        name: 'نظام إدارة المشاريع',
        description: 'منصة متكاملة لإدارة المشاريع تمكنك من تتبع المهام، إدارة الفرق، وتنظيم الموارد بكفاءة عالية.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 'منصة التجارة الإلكترونية',
        description: 'حل متكامل للتجارة الإلكترونية يوفر تجربة تسوق سلسة مع إدارة مخزون متقدمة ونظام دفع آمن.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 'نظام إدارة المحتوى',
        description: 'منصة قوية لإدارة المحتوى تمكنك من إنشاء وتنظيم ونشر المحتوى بسهولة مع واجهة تحكم سهلة الاستخدام.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 'منصة التعلم الإلكتروني',
        description: 'نظام متكامل للتعلم الإلكتروني يوفر محتوى تفاعلي، اختبارات، ومتابعة تقدم المتعلمين.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
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