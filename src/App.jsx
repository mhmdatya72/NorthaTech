import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ZohoPartnerSection from './components/ZohoPartnerSection';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FollowUsSocialBar from './components/FollowUsSocialBar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProductsPage from './pages/ProductsPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import Services from './components/Services';
import AboutWothoq from './components/AboutWothoq';
import PageHeader from './components/PageHeader';

function AppContent() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/about':
                return 'عن وثوق';
            case '/services':
                return 'خدماتنا';
            case '/projects':
                return 'أعمالنا';
            case '/products':
                return 'اكتشف المنتجات';
            case '/news':
                return 'الأخبار';
            case '/careers':
                return 'التوظيف';
            case '/contact':
                return 'تواصل معنا';
            default:
                return '';
        }
    };

    return (
        <>
            <Navbar />
            {!isHomePage && <PageHeader title={getPageTitle()} />}
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <ZohoPartnerSection />
                        <Services />
                        <Projects />
                        <AboutWothoq />
                        <Partners />
                        <Testimonials />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
            <FollowUsSocialBar />
        </>
    );
}

function App() {
    const theme = createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: '#1976d2',
                light: '#2196F3',
                dark: '#1565C0',
            },
            secondary: {
                main: '#f50057',
            },
            background: {
                default: '#ffffff',
                paper: '#f5f5f5',
            },
            text: {
                primary: '#333333',
                secondary: '#666666',
            },
        },
        typography: {
            fontFamily: 'Cairo, Arial, sans-serif',
            h1: {
                fontWeight: 700,
            },
            h2: {
                fontWeight: 600,
            },
            h3: {
                fontWeight: 600,
            },
            h4: {
                fontWeight: 600,
            },
            h5: {
                fontWeight: 500,
            },
            h6: {
                fontWeight: 500,
            },
            button: {
                fontWeight: 600,
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: 'none',
                        padding: '8px 24px',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#ffffff',
                        color: '#333333',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#ffffff',
                        },
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: '#ffffff',
                        color: '#333333',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#ffffff',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <AppContent />
            </Router>
        </ThemeProvider>
    );
}

export default App; 