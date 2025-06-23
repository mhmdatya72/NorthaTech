import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
    backgroundColor: scrolled
        ? 'rgba(255, 255, 255, 0.95)'
        : 'transparent',
    boxShadow: scrolled
        ? '0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.05)'
        : 'none',
    transition: 'all 0.3s ease-in-out',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    height: '80px',
    [theme.breakpoints.down('sm')]: {
        height: '56px',
    },
    '&:hover': {
        boxShadow: scrolled
            ? '0 6px 25px rgba(0, 0, 0, 0.15), 0 3px 15px rgba(0, 0, 0, 0.1)'
            : 'none',
    },
}));

const NavLink = styled(Button)(({ theme, active, scrolled }) => ({
    color: '#111',
    margin: '0 4px',
    fontWeight: 700,
    fontSize: '1.05rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4px 16px',
    letterSpacing: '0.5px',
    transition: 'color 0.2s',
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.95rem',
        padding: '2px 8px',
    },
}));

const NumberLabel = styled('span')(({ theme, active, scrolled }) => ({
    fontSize: '0.7rem',
    color: '#111',
    marginBottom: '2px',
    fontWeight: 700,
}));

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    marginRight: theme.spacing(1),
    fontSize: '1.1rem',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.95rem',
        padding: '4px 10px',
        minWidth: '32px',
    },
}));

const navItems = [
    { name: 'الرئيسية', path: '/', number: '01' },
    { name: 'عن وثوق', path: '/about', number: '02' },
    { name: 'الخدمات', path: '/services', number: '03' },
    { name: 'الأعمال', path: '/projects', number: '04' },
    { name: 'اكتشف المنتجات', path: '/products', number: '05' },
    { name: 'الأخبار', path: '/news', number: '06' },
    { name: 'التوظيف', path: '/careers', number: '07' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [dir, setDir] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        document.body.dir = dir;
    }, [dir]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLanguageToggle = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
        setDir(newLang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', newLang);
    };

    const drawer = (
        <List>
            {navItems.map((item) => (
                <ListItem
                    button
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    selected={location.pathname === item.path}
                    sx={{ fontSize: '0.95rem' }}
                >
                    <ListItemText primary={
                        t(item.name === 'عن وثوق' ? 'about' :
                          item.name === 'الرئيسية' ? 'home' :
                          item.name === 'الخدمات' ? 'services' :
                          item.name === 'الأعمال' ? 'projects' :
                          item.name === 'اكتشف المنتجات' ? 'products' :
                          item.name === 'الأخبار' ? 'news' :
                          item.name === 'التوظيف' ? 'careers' : item.name)
                    } />
                </ListItem>
            ))}
            <ListItem
                button
                component={RouterLink}
                to="/contact"
                onClick={handleDrawerToggle}
                selected={location.pathname === '/contact'}
                sx={{ fontSize: '0.95rem' }}
            >
                <ListItemText primary={t('contact')} />
            </ListItem>
            {/* زر تغيير اللغة في الناف بار الرئيسي
            <Button
                onClick={handleLanguageToggle}
                variant="contained"
                size="small"
                sx={{
                    backgroundColor: '#111',
                    color: '#fff',
                    borderRadius: '999px',
                    minWidth: 40,
                    px: 2,
                    ml: 1,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: '#222',
                        boxShadow: 'none',
                    }
                }}
            >
                {i18n.language === 'ar' ? <span role="img" aria-label="English">🇬🇧</span> : <span role="img" aria-label="Arabic">🇸🇦</span>}
                {i18n.language === 'ar' ? 'EN' : 'AR'}
            </Button>
            */}
        </List>
    );

    return (
        <>
            <StyledAppBar position="fixed" scrolled={scrolled}>
                <Toolbar dir={dir} sx={{
                    justifyContent: 'space-between',
                    padding: { xs: '0 2px', sm: '0 12px', md: '0 50px' },
                    height: '100%',
                    minHeight: { xs: '48px', sm: '56px', md: '80px' },
                    overflow: { xs: 'hidden', sm: 'visible' },
                    '& .MuiButton-root': {
                        minWidth: 'auto',
                    }
                }}>
                    <Box sx={{
                        minWidth: { xs: 80, sm: 120 },
                        maxWidth: { xs: 100, sm: 160 },
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Logo />
                    </Box>

                    <Box sx={{
                        display: { xs: 'none', xl: 'flex' },
                        alignItems: 'center',
                        direction: dir,
                        gap: '4px',
                        height: '100%'
                    }}>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                component={RouterLink}
                                to={item.path}
                                active={location.pathname === item.path ? 1 : 0}
                                scrolled={scrolled}
                            >
                                <NumberLabel active={location.pathname === item.path ? 1 : 0} scrolled={scrolled}>
                                    {item.number}
                                </NumberLabel>
                                {t(item.name === 'عن وثوق' ? 'about' :
                                    item.name === 'الرئيسية' ? 'home' :
                                    item.name === 'الخدمات' ? 'services' :
                                    item.name === 'الأعمال' ? 'projects' :
                                    item.name === 'اكتشف المنتجات' ? 'products' :
                                    item.name === 'الأخبار' ? 'news' :
                                    item.name === 'التوظيف' ? 'careers' : item.name)}
                            </NavLink>
                        ))}
                        <ContactButton
                            component={RouterLink}
                            to="/contact"
                            variant="contained"
                            startIcon={<PhoneIcon sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }} />}
                        >
                            {t('contact')}
                        </ContactButton>
                    </Box>

                    <Box sx={{
                        display: { xs: 'flex', xl: 'none' },
                        height: '100%',
                        alignItems: 'center',
                        zIndex: 1201,
                    }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{
                                color: theme => theme.palette.text.primary,
                                '& .MuiSvgIcon-root': {
                                    fontSize: { xs: '1.3rem', sm: '1.6rem' }
                                },
                                p: { xs: 0.2, sm: 1 }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: { xs: 200, sm: 250 },
                        direction: 'rtl',
                        backgroundColor: theme => theme.palette.background.paper,
                        color: theme => theme.palette.text.primary,
                        p: { xs: 1, sm: 2 },
                    },
                }}
            >
                <List sx={{
                    pt: { xs: 1, sm: 2 },
                    pb: { xs: 1, sm: 2 },
                    '& .MuiListItem-root': {
                        mb: { xs: 0.5, sm: 1 },
                        borderRadius: '8px',
                        px: { xs: 1, sm: 2 },
                    },
                    '& .MuiListItemText-root span': {
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                    }
                }}>
                    {drawer}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar; 