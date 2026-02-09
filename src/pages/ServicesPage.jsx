import { Link } from 'react-router-dom';
import { Container } from '../components/ui';

/**
 * Services Page
 * Detailed list of FarmGuide offerings
 */
const ServicesPage = () => {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'AI-Powered Farming Guidance',
            description: 'Get personalized recommendations based on your specific crops, soil conditions, and local climate. Our AI analyzes multiple data sources to provide actionable advice.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: 'Crop Disease Awareness',
            description: 'Early identification guidance for common plant diseases. Learn to recognize symptoms and get recommended actions before problems spread.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            title: 'Weather-Aware Suggestions',
            description: 'Recommendations that factor in current and upcoming weather conditions. Know when to plant, water, or protect your crops based on forecasts.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Watering & Growth Timing',
            description: 'Know the optimal times for irrigation, fertilization, and key growth stages. Get alerts and reminders for critical farming activities.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: 'Voice & Chat Interaction',
            description: 'Talk to FarmGuide using your voice or simple text messages. No complicated interfaces — just natural conversation.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            ),
            title: 'Multilingual Support',
            description: 'Available in English and Urdu, with more languages planned. Get guidance in the language you\'re most comfortable with.',
        },
    ];

    const futureServices = [
        { title: 'Smart Alerts', desc: 'Automated notifications for weather changes, pest warnings, and optimal action times.' },
        { title: 'Advanced Insights', desc: 'Deeper AI analysis for soil health, yield patterns, and seasonal planning.' },
        { title: 'Regional Data', desc: 'Localized information about market trends and regional growing conditions.' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            What FarmGuide Offers
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            Practical tools and guidance designed with farmers in mind.
                            Simple, accessible, and always available.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all group"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-charcoal mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-charcoal-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Future Services */}
            <section className="py-16 md:py-24 bg-off-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            Coming Soon
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            Future Features
                        </h2>
                        <p className="text-lg text-charcoal-light">
                            We're always working to bring you more value
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {futureServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 border border-gray-200 border-dashed"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <h3 className="font-semibold text-charcoal">{service.title}</h3>
                                </div>
                                <p className="text-sm text-charcoal-light">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <Container>
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Try FarmGuide?
                        </h2>
                        <p className="text-lg text-white/90 mb-8">
                            Get personalized farming guidance today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-accent text-charcoal hover:bg-accent-light transition-colors"
                            >
                                Request Early Access
                            </Link>
                            <Link
                                to="/how-it-works"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                            >
                                See How It Works
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ServicesPage;
