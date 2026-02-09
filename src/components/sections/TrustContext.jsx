import { Container } from '../ui';

/**
 * Trust Context Section
 * Explains farming challenges in a calm, data-driven way
 */
const TrustContext = () => {
    const challenges = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            title: 'Unpredictable Weather',
            description: 'Climate patterns are shifting, making traditional farming calendars less reliable.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: 'Crop Diseases',
            description: 'Identifying and responding to plant diseases early can save an entire harvest.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Timing Decisions',
            description: 'Knowing when to plant, water, or harvest requires accurate, timely information.',
        },
    ];

    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
                        Farming Today is Complex
                    </h2>
                    <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
                        Modern farmers face challenges that require more than experience alone.
                        Access to the right information at the right time can make all the difference.
                    </p>
                </div>

                {/* Challenge Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 text-center border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                            >
                                {challenge.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-charcoal">
                                {challenge.title}
                            </h3>
                            <p className="text-charcoal-light leading-relaxed">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TrustContext;
