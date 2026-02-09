import { Link } from 'react-router-dom';
import { Container } from '../ui';

/**
 * Footer Component
 * 
 * Email clarification:
 * - contact@abdullahahmed.live → User messages, early access, support
 * - info@abdullahahmed.live → General information, partnerships, platform details
 */
const Footer = () => {
    const footerLinks = {
        pages: [
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'How It Works', to: '/how-it-works' },
            { label: 'Pricing', to: '/pricing' },
            { label: 'Contact', to: '/contact' },
        ],
        legal: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms & Conditions', to: '/terms' },
        ],
    };

    // Social links - placeholder for now
    const socialLinks = [
        {
            name: 'Twitter / X',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="py-12 md:py-16 text-white bg-charcoal">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img
                                src="/logo-white.svg"
                                alt="FarmGuide"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">
                            AI-powered farming guidance designed to help farmers make informed decisions.
                            Simple, accessible, and always available.
                        </p>

                        {/* Social Links */}
                        <div className="mb-4">
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <button
                                        key={social.name}
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-charcoal-light transition-colors cursor-not-allowed"
                                        title="We're building this — coming soon!"
                                        aria-label={`${social.name} - Coming soon`}
                                    >
                                        {social.icon}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                Official social channels will be announced soon.
                            </p>
                        </div>
                    </div>

                    {/* Pages Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Pages</h4>
                        <ul className="space-y-3">
                            {footerLinks.pages.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm hover:text-white transition-colors text-gray-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm hover:text-white transition-colors text-gray-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            {/* Support email - for user messages, early access, support */}
                            <li>
                                <span className="text-xs text-gray-500 block mb-1">Support & Early Access</span>
                                <a
                                    href="mailto:contact@abdullahahmed.live"
                                    className="text-sm hover:text-white transition-colors text-gray-400"
                                >
                                    contact@abdullahahmed.live
                                </a>
                            </li>
                            {/* Info email - for general info, partnerships, platform details */}
                            <li>
                                <span className="text-xs text-gray-500 block mb-1">General Inquiries</span>
                                <a
                                    href="mailto:info@abdullahahmed.live"
                                    className="text-sm hover:text-white transition-colors text-gray-400"
                                >
                                    info@abdullahahmed.live
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 text-center text-sm border-t border-charcoal-light text-gray-400">
                    <p>© {new Date().getFullYear()} FarmGuide. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
