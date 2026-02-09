import { Container } from '../ui';

/**
 * Features Section
 * Grid of feature highlights
 */
const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Crop Disease Awareness',
            description: 'Early identification guidance for common plant diseases affecting your crops.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            title: 'Weather-Aware Suggestions',
            description: 'Recommendations that factor in current and upcoming weather conditions.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Watering & Growth Timing',
            description: 'Know when to water, fertilize, and expect key growth stages.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: 'Voice & Chat Interaction',
            description: 'Talk to FarmGuide using your voice or simple text messages.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            ),
            title: 'Multilingual Support',
            description: 'Available in English and Urdu, with more languages coming soon.',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Reliable & Secure',
            description: 'Your farming data stays private and is never shared with third parties.',
        },
    ];

    return (
        <section id="services" className="py-20 md:py-28 bg-off-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary"
                    >
                        Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
                        What FarmGuide Offers
                    </h2>
                    <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
                        Tools and guidance designed with farmers in mind.
                        Simple, practical, and always available.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-charcoal">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-charcoal-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;
