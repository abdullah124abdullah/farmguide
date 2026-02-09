import { Container } from '../ui';

/**
 * Hero Section
 * Main landing section with headline, subheading, and CTA
 */
const Hero = () => {
    return (
        <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-off-white to-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-primary" />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-accent" />
            </div>

            <Container className="relative">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary/10 text-primary"
                    >
                        <span className="w-2 h-2 rounded-full animate-pulse bg-primary" />
                        AI-Powered Farming Guidance
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-charcoal">
                        Grow Better with
                        <span className="block mt-2 text-primary">Intelligent Guidance</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-10 max-w-2xl mx-auto">
                        FarmGuide helps you make informed decisions about your crops.
                        Get personalized recommendations based on your location, weather, and growing conditions.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 bg-primary hover:bg-primary-light"
                        >
                            Get Guidance
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 transition-colors bg-white text-primary border-primary hover:bg-gray-50"
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-charcoal-light font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Voice Enabled
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Multilingual
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Free to Start
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
