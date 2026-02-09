import { Link } from 'react-router-dom';
import { Container } from '../components/ui';

/**
 * How It Works Page
 * Simple step-by-step explanation for non-technical users
 */
const HowItWorksPage = () => {
    const steps = [
        {
            number: '01',
            title: 'Share Your Context',
            description: 'Tell us about your crops, location, and current growing conditions. You can speak or type — whatever is easier for you.',
            details: [
                'Describe your crop type (wheat, rice, cotton, etc.)',
                'Share your location or region',
                'Mention any current issues or questions',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'AI Analyzes Conditions',
            description: 'FarmGuide processes weather data, regional patterns, and agricultural knowledge to understand your situation.',
            details: [
                'Real-time weather data analysis',
                'Regional farming patterns considered',
                'Disease and pest risk assessment',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Get Personalized Guidance',
            description: 'Receive clear, actionable recommendations tailored to your specific needs and conditions.',
            details: [
                'Easy-to-understand recommendations',
                'Specific actions you can take today',
                'Timing suggestions for best results',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Ask Follow-Up Questions',
            description: 'Have more questions? Keep the conversation going. FarmGuide is always available to help.',
            details: [
                'Ask for clarification anytime',
                'Get updates as conditions change',
                'Learn more about your crops',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            Simple Process
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            How FarmGuide Works
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            Getting started takes just a few minutes. No complicated setup,
                            no technical knowledge required.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Steps */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-start ${index !== steps.length - 1 ? 'pb-16 mb-16 border-b border-gray-200' : ''
                                    }`}
                            >
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-charcoal">{step.title}</h3>
                                    </div>
                                    <p className="text-lg text-charcoal-light mb-6">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2 text-charcoal-light">
                                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Example Conversation */}
            <section className="py-16 md:py-24 bg-off-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Example Conversation
                            </h2>
                            <p className="text-lg text-charcoal-light">
                                Here's what a typical interaction looks like
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                            <div className="space-y-4">
                                {/* User Message */}
                                <div className="flex justify-end">
                                    <div className="bg-primary text-white rounded-2xl rounded-tr-none px-5 py-3 max-w-[80%]">
                                        <p>میرے گندم کے پودے پیلے ہو رہے ہیں</p>
                                        <span className="text-xs text-white/60 mt-1 block">Urdu voice input</span>
                                    </div>
                                </div>

                                {/* AI Response */}
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 text-charcoal rounded-2xl rounded-tl-none px-5 py-3 max-w-[80%]">
                                        <p className="mb-2">This could be nitrogen deficiency, which is common at this growth stage. Here are my recommendations:</p>
                                        <ul className="text-sm space-y-1 text-charcoal-light">
                                            <li>• Check if your last fertilization was more than 3 weeks ago</li>
                                            <li>• Apply urea at 50kg per acre if needed</li>
                                            <li>• Avoid over-watering in the meantime</li>
                                        </ul>
                                        <span className="text-xs text-charcoal-light/60 mt-2 block">AI Response</span>
                                    </div>
                                </div>

                                {/* Follow-up */}
                                <div className="flex justify-end">
                                    <div className="bg-primary text-white rounded-2xl rounded-tr-none px-5 py-3 max-w-[80%]">
                                        <p>When is the best time to apply the fertilizer?</p>
                                    </div>
                                </div>

                                {/* AI Response 2 */}
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 text-charcoal rounded-2xl rounded-tl-none px-5 py-3 max-w-[80%]">
                                        <p>Based on the weather forecast for your area, I recommend applying the fertilizer in the early morning (before 8 AM) tomorrow. There's no rain expected for the next 48 hours, which will give it time to absorb.</p>
                                    </div>
                                </div>
                            </div>
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
                            It's free to start. No credit card required.
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

export default HowItWorksPage;
