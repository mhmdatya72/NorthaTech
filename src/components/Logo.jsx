import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
}));

const LogoText = styled(Typography)(({ theme, textColor }) => ({
    fontFamily: 'Cairo, Arial, sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: textColor || theme.palette.primary.main,
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
}));

const Logo = ({ textColor }) => {
    return (
        <LogoContainer component="a" href="/">
            <LogoText variant="h6" textColor={textColor}>
                وثوق للتقنيات
            </LogoText>
        </LogoContainer>
    );
};

export default Logo; 