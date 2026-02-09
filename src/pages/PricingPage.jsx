import { Link } from 'react-router-dom';
import { Container } from '../components/ui';

/**
 * Pricing Page
 * Simple, honest pricing for early-stage platform
 */
const PricingPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            Pricing
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Simple & Accessible
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            FarmGuide is designed to be accessible to all farmers.
                            We're currently in early access, which means it's free to get started.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Early Access Plan */}
                            <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg shadow-primary/10">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                                        Available Now
                                    </span>
                                    <h2 className="text-2xl font-bold text-charcoal mb-2">Early Access</h2>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-primary">Free</span>
                                        <span className="text-charcoal-light">for now</span>
                                    </div>
                                </div>

                                <p className="text-charcoal-light mb-6">
                                    Get started with FarmGuide during our early access period.
                                    Help us improve while getting valuable guidance for your farm.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Core AI farming guidance',
                                        'Voice & chat access',
                                        'Multilingual support (English / Urdu)',
                                        'Crop disease awareness',
                                        'Weather-aware recommendations',
                                        'Watering & growth timing insights',
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-charcoal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className="block w-full text-center px-6 py-4 text-lg font-medium text-white rounded-lg bg-primary hover:bg-primary-light transition-colors"
                                >
                                    Join Early Access
                                </Link>
                            </div>

                            {/* Coming Later */}
                            <div className="bg-off-white rounded-2xl p-8 border border-gray-200 border-dashed">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-charcoal-light mb-3">
                                        Coming Later
                                    </span>
                                    <h2 className="text-2xl font-bold text-charcoal mb-2">Extended Features</h2>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xl font-medium text-charcoal-light">Pricing TBD</span>
                                    </div>
                                </div>

                                <p className="text-charcoal-light mb-6">
                                    As FarmGuide grows, we plan to introduce additional features
                                    for farmers who need more advanced capabilities.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Advanced AI insights',
                                        'Smart alerts & notifications',
                                        'Detailed seasonal planning',
                                        'Extended crop coverage',
                                        'Priority support',
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-charcoal-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    disabled
                                    className="block w-full text-center px-6 py-4 text-lg font-medium rounded-lg bg-gray-200 text-charcoal-light cursor-not-allowed"
                                >
                                    Coming Soon
                                </button>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>

            {/* Note Section */}
            <section className="py-12 md:py-16 bg-off-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-charcoal mb-3">
                            A Note About Pricing
                        </h3>
                        <p className="text-charcoal-light leading-relaxed">
                            FarmGuide is currently in early access. We're focused on building
                            something genuinely useful for farmers. Pricing may be introduced
                            as features expand, but our goal is to keep core guidance accessible
                            to everyone.
                        </p>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <Container>
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-white/90 mb-8">
                            Join early access today — it's free.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-accent text-charcoal hover:bg-accent-light transition-colors"
                        >
                            Join Early Access
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default PricingPage;
