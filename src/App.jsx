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
import ScrollTop from './components/ScrollTop';
import WebDevelopment from './pages/services/WebDevelopment';
import SEO from './pages/services/SEO';
import MobileApps from './pages/services/MobileApps';
import SocialMedia from './pages/services/SocialMedia';
import TaskManagementApp from './pages/projects/TaskManagementApp';
import EcommercePlatform from './pages/projects/EcommercePlatform';
import Products from './components/Products';
import News from './components/News';
import ZohoCRM from './pages/products/ZohoCRM';
import ZohoBooks from './pages/products/ZohoBooks';
import ZohoPeople from './pages/products/ZohoPeople';
import NewServices from './pages/news/NewServices';
import ZohoPartnership from './pages/news/ZohoPartnership';
import LocalExpansion from './pages/news/LocalExpansion';
import ProjectManagement from './pages/products/ProjectManagement';
import Ecommerce from './pages/products/Ecommerce';
import CMS from './pages/products/CMS';
import ELearning from './pages/products/ELearning';

function AppContent() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/about':
                return 'عن وثوق';
            case '/services':
                return 'خدماتنا';
            case '/services/web-development':
                return 'تصميم وتطوير المواقع الإلكترونية';
            case '/services/seo':
                return 'تحسين محركات البحث';
            case '/services/mobile-apps':
                return 'تطوير تطبيقات الهواتف الذكية';
            case '/services/social-media':
                return 'إدارة منصات التواصل الاجتماعي';
            case '/projects':
                return 'أعمالنا';
            case '/projects/task-management':
                return 'تطبيق إدارة المهام';
            case '/projects/ecommerce-platform':
                return 'منصة التجارة الإلكترونية';
            case '/products':
                return 'اكتشف المنتجات';
            case '/news':
                return 'الأخبار';
            case '/careers':
                return 'التوظيف';
            case '/contact':
                return 'تواصل معنا';
            case '/products/zoho-crm':
                return 'زوهو CRM';
            case '/products/zoho-books':
                return 'زوهو Books';
            case '/products/zoho-people':
                return 'زوهو People';
            case '/news/new-services':
                return 'خدمات جديدة';
            case '/news/zoho-partnership':
                return 'شراكة مع زوهو';
            case '/news/local-expansion':
                return 'توسع محلي';
            case '/products/project-management':
                return 'نظام إدارة المشاريع';
            case '/products/ecommerce':
                return 'منصة التجارة الإلكترونية';
            case '/products/cms':
                return 'نظام إدارة المحتوى';
            case '/products/elearning':
                return 'منصة التعلم الإلكتروني';
            default:
                return '';
        }
    };

    return (
        <>
            <Navbar />
            <ScrollTop />
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
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/seo" element={<SEO />} />
                <Route path="/services/mobile-apps" element={<MobileApps />} />
                <Route path="/services/social-media" element={<SocialMedia />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/task-management" element={<TaskManagementApp />} />
                <Route path="/projects/ecommerce-platform" element={<EcommercePlatform />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/project-management" element={<ProjectManagement />} />
                <Route path="/products/ecommerce" element={<Ecommerce />} />
                <Route path="/products/cms" element={<CMS />} />
                <Route path="/products/elearning" element={<ELearning />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products/zoho-crm" element={<ZohoCRM />} />
                <Route path="/products/zoho-books" element={<ZohoBooks />} />
                <Route path="/products/zoho-people" element={<ZohoPeople />} />
                <Route path="/news/new-services" element={<NewServices />} />
                <Route path="/news/zoho-partnership" element={<ZohoPartnership />} />
                <Route path="/news/local-expansion" element={<LocalExpansion />} />
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