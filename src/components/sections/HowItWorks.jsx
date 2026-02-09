import { Container } from '../ui';

/**
 * How It Works Section
 * 3-step process explanation with proper alignment
 */
const HowItWorks = () => {
    const steps = [
        {
            step: '01',
            title: 'Share Your Context',
            description: 'Tell us about your crops, location, and current growing conditions. Speak or type — whatever is easier for you.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
        },
        {
            step: '02',
            title: 'AI Analyzes Conditions',
            description: 'FarmGuide processes weather data, regional patterns, and agricultural knowledge to understand your situation.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            step: '03',
            title: 'Get Recommendations',
            description: 'Receive clear, actionable guidance tailored to your needs. Follow up with questions anytime.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
                        Getting started with FarmGuide takes just a few minutes.
                        No complicated setup, no technical knowledge required.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Connecting Line - Desktop Only */}
                    <div
                        className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/80 to-primary/20"
                    />

                    {steps.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative group">
                            {/* Step Circle */}
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 bg-primary shadow-lg shadow-primary/20 transition-transform group-hover:scale-110"
                            >
                                {item.step}
                            </div>

                            {/* Icon Box */}
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-off-white text-primary"
                            >
                                {item.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-charcoal mb-3">
                                {item.title}
                            </h3>
                            <p className="text-charcoal-light leading-relaxed max-w-xs">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowItWorks;
