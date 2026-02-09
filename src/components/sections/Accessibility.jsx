import { Container } from '../ui';

/**
 * Accessibility Section
 * Highlights voice-based and multilingual accessibility
 */
const Accessibility = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Visual - Left Column */}
                    <div className="order-2 lg:order-1">
                        <div
                            className="rounded-2xl p-8 md:p-10 text-white overflow-hidden relative bg-gradient-to-br from-charcoal to-charcoal-light shadow-2xl"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-30 bg-primary" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-xl opacity-30 bg-accent" />

                            <div className="relative space-y-6">
                                {/* Voice Indicator */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary"
                                    >
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex gap-1 items-end h-8">
                                            {[40, 80, 60, 100, 50, 70].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="w-1 rounded-full animate-pulse bg-primary"
                                                    style={{
                                                        height: `${height}%`,
                                                        animationDelay: `${i * 0.1}s`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Message Bubbles */}
                                <div className="space-y-4">
                                    <div
                                        className="backdrop-blur rounded-xl rounded-tl-none p-4 max-w-[85%] bg-white/10"
                                    >
                                        <p className="text-sm">"میرے گندم کے پودے پیلے ہو رہے ہیں"</p>
                                        <span className="text-xs mt-1 block text-white/50">Urdu voice input</span>
                                    </div>

                                    <div
                                        className="backdrop-blur rounded-xl rounded-tr-none p-4 max-w-[85%] ml-auto bg-primary/30"
                                    >
                                        <p className="text-sm">"This could be nitrogen deficiency. Check if your soil needs fertilization..."</p>
                                        <span className="text-xs mt-1 block text-white/50">AI Response</span>
                                    </div>
                                </div>

                                {/* Language Tags */}
                                <div className="flex gap-2 pt-4">
                                    <span
                                        className="px-3 py-1 rounded-full text-xs bg-white/10"
                                    >
                                        English
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full text-xs bg-white/10"
                                    >
                                        اردو
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Right Column */}
                    <div className="order-1 lg:order-2">
                        <span
                            className="font-medium text-sm uppercase tracking-wider text-primary"
                        >
                            Built for Everyone
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-6">
                            Speak Your Language
                        </h2>
                        <p className="text-lg text-charcoal-light leading-relaxed mb-8">
                            Not everyone reads or types easily. That's why FarmGuide is designed
                            for voice-first interaction. Simply speak in your language, and get
                            guidance you can understand.
                        </p>

                        <ul className="space-y-5">
                            {[
                                { title: 'Voice Input & Output', desc: 'No typing required. Just speak naturally.' },
                                { title: 'Multilingual Support', desc: 'English and Urdu available now. More coming.' },
                                { title: 'Simple Interface', desc: 'Clean design, no confusing buttons or menus.' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-primary/10"
                                    >
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-charcoal">{item.title}</h4>
                                        <p className="text-sm text-charcoal-light">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Accessibility;
