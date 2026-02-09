import { Link } from 'react-router-dom';
import { Container } from '../components/ui';

/**
 * About Page
 * Trust & credibility - What is FarmGuide and why it exists
 */
const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Helping Farmers Thrive
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            FarmGuide is an AI-powered platform designed to provide accessible,
                            reliable farming guidance to farmers who need it most.
                        </p>
                    </div>
                </Container>
            </section>

            {/* What is FarmGuide */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                                What is FarmGuide?
                            </h2>
                            <p className="text-lg text-charcoal-light leading-relaxed mb-6">
                                FarmGuide is an intelligent assistant that helps farmers make better decisions
                                about their crops. Using AI and real-time data, we provide personalized
                                recommendations for planting, watering, disease prevention, and harvesting.
                            </p>
                            <p className="text-lg text-charcoal-light leading-relaxed">
                                Our platform is designed to be simple and accessible — available through
                                voice commands and text messages in multiple languages, including English
                                and Urdu.
                            </p>
                        </div>
                        <div className="rounded-2xl p-8 bg-off-white animate-slide-up delay-200">
                            <div className="space-y-4">
                                {[
                                    { label: 'AI-Powered', desc: 'Smart recommendations based on your specific conditions' },
                                    { label: 'Voice-First', desc: 'No typing required — just speak naturally' },
                                    { label: 'Multilingual', desc: 'Available in English and Urdu' },
                                    { label: 'Always Available', desc: 'Get guidance whenever you need it' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-charcoal">{item.label}</h4>
                                            <p className="text-sm text-charcoal-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why We Exist */}
            <section className="py-16 md:py-24 bg-off-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                            Why We Built This
                        </h2>
                        <p className="text-lg text-charcoal-light leading-relaxed">
                            Farmers face challenges that often go unaddressed. We're here to change that.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Lack of Expert Access',
                                description: "Many farmers don't have access to agricultural experts who can provide timely advice.",
                                icon: '👨‍🌾',
                            },
                            {
                                title: 'Unpredictable Conditions',
                                description: 'Climate change has made traditional farming calendars unreliable. Farmers need up-to-date guidance.',
                                icon: '🌦️',
                            },
                            {
                                title: 'Preventable Losses',
                                description: 'Crop diseases and poor timing decisions cause significant losses that could be avoided with better information.',
                                icon: '📉',
                            },
                        ].map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <span className="text-4xl mb-4 block">{reason.icon}</span>
                                <h3 className="text-xl font-semibold text-charcoal mb-3">{reason.title}</h3>
                                <p className="text-charcoal-light">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Our Vision */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                                Our Vision
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none text-charcoal-light">
                            <p className="mb-6">
                                We envision a future where every farmer, regardless of their location or resources,
                                has access to intelligent guidance that helps them make better decisions.
                            </p>
                            <p className="mb-6">
                                <strong className="text-charcoal">Honest Positioning:</strong> We don{"'"}t promise perfect harvests —
                                no technology can do that. What we offer is reliable, data-informed support that
                                helps you make better choices for your land and livelihood.
                            </p>
                            <p>
                                <strong className="text-charcoal">Accessibility First:</strong> We believe farming technology should be
                                simple to use. That{"'"}s why we focus on voice-first interaction and support for
                                local languages. No complicated apps, no technical barriers.
                            </p>
                        </div>
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
                            Join us in building a smarter future for farming.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-accent text-charcoal hover:bg-accent-light transition-colors"
                        >
                            Request Early Access
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AboutPage;
