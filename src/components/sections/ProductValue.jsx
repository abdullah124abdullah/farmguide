import { Container } from '../ui';

/**
 * Product Value Section
 * Explains how FarmGuide supports better farming decisions
 */
const ProductValue = () => {
    const values = [
        {
            title: 'Personalized Insights',
            description: 'Recommendations tailored to your specific crops, soil, and local conditions.',
        },
        {
            title: 'Data-Informed Decisions',
            description: 'Combine weather forecasts, soil data, and best practices for smarter choices.',
        },
        {
            title: 'Continuous Learning',
            description: 'Our AI improves with each interaction, getting better at helping you succeed.',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-off-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content - Left */}
                    <div>
                        <span
                            className="font-medium text-sm uppercase tracking-wider text-primary"
                        >
                            Why FarmGuide
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-charcoal">
                            Guidance You Can Trust
                        </h2>
                        <p className="text-lg text-charcoal-light leading-relaxed mb-8">
                            FarmGuide doesn't promise perfect harvests — no one can.
                            What we offer is reliable, intelligent support that helps you make
                            better-informed decisions for your land and your livelihood.
                        </p>

                        <div className="space-y-5">
                            {values.map((value, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold bg-primary transition-transform group-hover:scale-105"
                                    >
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1 text-charcoal">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-charcoal-light">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Card - Right */}
                    <div className="relative">
                        <div
                            className="rounded-2xl p-8 md:p-10 text-white relative overflow-hidden bg-gradient-to-br from-primary to-primary-light shadow-2xl shadow-primary/20"
                        >
                            {/* Decorative blur */}
                            <div
                                className="absolute top-4 right-4 w-20 h-20 rounded-full blur-xl bg-accent/20"
                            />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-semibold">Smart Recommendations</span>
                                </div>

                                <p className="leading-relaxed mb-6 text-white/90">
                                    "Based on current weather patterns and your wheat crop's growth stage,
                                    consider reducing irrigation for the next 3 days."
                                </p>

                                <div className="flex items-center gap-4 text-sm text-white/70">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Your Region
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        Real-time
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProductValue;
