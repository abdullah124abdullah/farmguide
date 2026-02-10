import { Container } from '../components/ui';

/**
 * Terms & Conditions Page
 * Simple, honest terms for an early-stage AI guidance platform
 */
const TermsPage = () => {
    const lastUpdated = 'February 2026';

    return (
        <>
            {/* Header */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-charcoal-light">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto prose prose-lg">

                        {/* Introduction */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Introduction</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                Welcome to Agrovia. By using our platform, you agree to these terms.
                                Agrovia is an AI-powered service that provides farming guidance and
                                recommendations. We aim to help farmers make more informed decisions,
                                but we are not a replacement for professional agricultural advice or expertise.
                            </p>
                        </div>

                        {/* Use of Service */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Use of Service</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                Agrovia is designed for informational purposes. You may use our platform
                                to receive AI-generated suggestions about farming practices, crop care,
                                weather considerations, and related topics. Our guidance is meant to support
                                your decisions, not dictate them.
                            </p>
                        </div>

                        {/* No Guarantees */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">No Guarantees</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                While we strive to provide helpful and accurate information, Agrovia
                                does not guarantee any specific outcomes. We cannot promise improved crop
                                yields, increased profits, or protection from losses. Agriculture involves
                                many unpredictable factors that are beyond the scope of any guidance system.
                            </p>
                        </div>

                        {/* User Responsibility */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Your Responsibility</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                All final decisions about your farm, crops, and agricultural practices
                                remain your responsibility. We encourage you to consider our suggestions
                                alongside your own experience, local conditions, and advice from
                                agricultural professionals in your area.
                            </p>
                        </div>

                        {/* Data Usage */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Data Usage</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                We collect basic information to provide and improve our service. This may
                                include your name, location, crop types, and the questions you ask. We use
                                this data solely to enhance your experience and improve Agrovia. We do
                                not sell your data to third parties.
                            </p>
                        </div>

                        {/* Service Availability */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Service Availability</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                Agrovia is an evolving platform. As we grow and learn, our service may
                                change, expand, or occasionally be unavailable for maintenance. We are
                                committed to improving and will do our best to provide reliable service.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Changes to Terms</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                As Agrovia evolves, these terms may be updated. We will make reasonable
                                efforts to notify users of significant changes. Continued use of the
                                platform after changes constitutes acceptance of the updated terms.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Questions?</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                If you have any questions about these terms, please reach out to us at{' '}
                                <a
                                    href="mailto:info@agrovia.tech"
                                    className="text-primary hover:underline font-medium"
                                >
                                    info@agrovia.tech
                                </a>
                            </p>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    );
};

export default TermsPage;
