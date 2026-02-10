import { Container } from '../components/ui';

/**
 * Privacy Policy Page
 * Simple, trust-building privacy policy for early-stage platform
 */
const PrivacyPage = () => {
    const lastUpdated = 'February 2026';

    return (
        <>
            {/* Header */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                            Privacy Policy
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

                        <p className="text-lg text-charcoal-light leading-relaxed mb-10">
                            At Agrovia, we value your privacy and are committed to being transparent
                            about how we handle your information. This policy explains what we collect,
                            how we use it, and how we protect it.
                        </p>

                        {/* Information We Collect */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Information We Collect</h2>
                            <p className="text-charcoal-light leading-relaxed mb-4">
                                When you use Agrovia, we may collect the following information:
                            </p>
                            <ul className="space-y-2 text-charcoal-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Name</strong>: to personalize your experience</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Location (city/region)</strong>: to provide weather-aware guidance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Crop information</strong>: to tailor recommendations to your needs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Language preference</strong>: to communicate in your preferred language</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Messages and questions</strong>: to provide helpful responses</span>
                                </li>
                            </ul>
                        </div>

                        {/* How We Use Information */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">How We Use Your Information</h2>
                            <p className="text-charcoal-light leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="space-y-2 text-charcoal-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Provide personalized farming guidance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Improve the accuracy of our recommendations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Enhance your overall experience with Agrovia</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Communicate with you about the service</span>
                                </li>
                            </ul>
                        </div>

                        {/* Data Protection */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Data Protection</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                Your trust matters to us. We want to be clear: <strong>we do not sell
                                    your data</strong>. We do not share your personal information with third
                                parties for their marketing purposes. Your data is used solely to provide
                                and improve Agrovia.
                            </p>
                        </div>

                        {/* Cookies & Analytics */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Cookies & Analytics</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                We may use basic analytics tools to understand how people use Agrovia.
                                This helps us identify what works well and what can be improved. These
                                tools collect anonymous usage data and do not personally identify you.
                            </p>
                        </div>

                        {/* User Rights */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Your Rights</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                You have the right to know what data we have about you and to request
                                its removal. If you would like us to delete your information, simply
                                contact us and we will process your request.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
                            <p className="text-charcoal-light leading-relaxed">
                                If you have any questions about this privacy policy or how we handle
                                your data, please reach out to us at{' '}
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

export default PrivacyPage;
