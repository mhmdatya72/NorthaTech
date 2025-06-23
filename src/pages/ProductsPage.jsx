import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Products from '../components/Products';
import { useTranslation } from 'react-i18next';

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

const ProductsPage = () => {
    const { t, i18n } = useTranslation();
    return (
        <ProductsPageContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <Container maxWidth="lg">
                <PageTitle variant="h1">
                    {t('productspage_title', 'منتجاتنا')}
                </PageTitle>
                <Typography variant="body1" align="center" paragraph sx={{ maxWidth: '800px', margin: '0 auto 60px' }}>
                    {t('productspage_desc', 'اكتشف مجموعتنا المتميزة من المنتجات التقنية التي تساعد شركتك على النمو والتطور.')}
                </Typography>
                <Products />
            </Container>
        </ProductsPageContainer>
    );
};

export default ProductsPage; 