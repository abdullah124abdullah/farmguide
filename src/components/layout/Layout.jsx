import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer } from './index';

/**
 * Layout Component
 * Shared wrapper for all pages with Header, Footer, and scroll-to-top
 */
const Layout = ({ children }) => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
