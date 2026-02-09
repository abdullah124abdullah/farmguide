import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container } from '../ui';

/**
 * Header Component
 * Navigation header with React Router links and active state
 */
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'How It Works', to: '/how-it-works' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'Contact', to: '/contact' },
    ];

    const navLinkClasses = ({ isActive }) =>
        `font-medium transition-colors ${isActive
            ? 'text-primary'
            : 'text-charcoal-light hover:text-primary'
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <Container>
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src="/logo.svg"
                            alt="FarmGuide"
                            className="h-10 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.to}
                                className={navLinkClasses}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all bg-primary hover:bg-primary-light shadow-sm hover:shadow hover:-translate-y-0.5"
                        >
                            Get Guidance
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-charcoal hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-100 animate-fade-in">
                        <div className="flex flex-col gap-1 pt-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `font-medium py-3 px-4 rounded-lg transition-colors ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-charcoal-light hover:bg-gray-50 hover:text-primary'
                                        }`
                                    }
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <Link
                                to="/contact"
                                className="w-full mt-2 py-3 text-sm font-medium text-white text-center rounded-lg bg-primary hover:bg-primary-light shadow-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Guidance
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
