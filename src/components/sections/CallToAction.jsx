import { Container } from '../ui';

/**
 * Call to Action Section
 * Final CTA with early access / contact option
 */
const CallToAction = () => {
    return (
        <section
            id="contact"
            className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl bg-accent" />
            </div>

            <Container className="relative">
                <div className="max-w-2xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Grow Smarter?
                    </h2>
                    <p className="text-lg leading-relaxed mb-10 text-white/90">
                        Join farmers who are already using Agrovia to make better decisions.
                        No commitment, no credit card. Just helpful guidance when you need it.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg bg-accent text-charcoal hover:bg-accent-light"
                        >
                            Request Early Access
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 transition-colors bg-white/10 text-white border-white/30 hover:bg-white/20"
                        >
                            Contact Us
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-white/70">
                        Have questions? Email us at{' '}
                        <a
                            href="mailto:info@agrovia.tech"
                            className="text-white/80 hover:text-white transition-colors underline"
                        >
                            info@agrovia.tech
                        </a>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction;
