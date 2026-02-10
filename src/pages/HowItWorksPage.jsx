import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        badge: 'How It Works',
        title: 'Simple Steps to Better Farming',
        sub: 'No technical knowledge needed. Just speak or type your question.',
        steps: [
            {
                number: '01', title: 'Share Your Context',
                description: 'Tell us about your crops, location, and current growing conditions. You can speak or type, whatever is easier for you.',
                details: ['Describe your crop type (wheat, rice, cotton, etc.)', 'Share your location or region', 'Mention any issues you are seeing'],
            },
            {
                number: '02', title: 'Get AI-Powered Guidance',
                description: 'Our AI analyzes your situation using agricultural data specific to Pakistan and provides personalized recommendations.',
                details: ['Disease identification and treatment', 'Weather-based planting advice', 'Fertilizer and irrigation timing', 'Current market rates for your crops'],
            },
            {
                number: '03', title: 'Take Action with Confidence',
                description: 'Apply the guidance to your farm. Come back anytime you need help with new questions or changing conditions.',
                details: ['Step-by-step action plans', 'Follow-up reminders', 'Ongoing support as conditions change'],
            },
        ],
        demoTitle: 'See Agrovia in Action',
        demoSub: 'Agrovia understands both Urdu and English. Farmers can ask questions in their own language and get clear, helpful answers.',
        ctaTitle: 'Ready to Try It?',
        ctaSub: 'No signup required during early access. Just ask your question.',
        ctaBtn: 'Get Early Access',
        ctaLink: 'View all services',
    },
    ur: {
        badge: 'کیسے کام کرتا ہے',
        title: 'بہتر کاشتکاری کے آسان مراحل',
        sub: 'کسی تکنیکی علم کی ضرورت نہیں۔ بس اپنا سوال بولیں یا لکھیں۔',
        steps: [
            {
                number: '01', title: 'اپنی معلومات بتائیں',
                description: 'اپنی فصل، مقام اور موجودہ حالات کے بارے میں بتائیں۔ آپ بول کر یا لکھ کر بتا سکتے ہیں، جو آسان ہو۔',
                details: ['فصل کی قسم بتائیں (گندم، چاول، کپاس وغیرہ)', 'اپنا علاقہ بتائیں', 'کوئی مسئلہ ہو تو بتائیں'],
            },
            {
                number: '02', title: 'AI سے رہنمائی حاصل کریں',
                description: 'ہمارا AI پاکستان کے زرعی ڈیٹا کا استعمال کرتے ہوئے آپ کی صورتحال کا تجزیہ کرتا ہے اور ذاتی سفارشات فراہم کرتا ہے۔',
                details: ['بیماری کی شناخت اور علاج', 'موسم کے مطابق کاشت کا مشورہ', 'کھاد اور آبپاشی کا وقت', 'آپ کی فصل کے موجودہ مارکیٹ ریٹ'],
            },
            {
                number: '03', title: 'اعتماد سے عمل کریں',
                description: 'رہنمائی کو اپنے کھیت پر لاگو کریں۔ جب بھی نئے سوالات ہوں واپس آئیں۔',
                details: ['قدم بہ قدم عمل کا منصوبہ', 'فالو اپ یاد دہانیاں', 'حالات بدلنے پر مسلسل مدد'],
            },
        ],
        demoTitle: 'اگروویا کو عمل میں دیکھیں',
        demoSub: 'اگروویا اردو اور انگریزی دونوں سمجھتا ہے۔ کسان اپنی زبان میں سوال پوچھ سکتے ہیں اور واضح، مددگار جوابات حاصل کر سکتے ہیں۔',
        ctaTitle: 'آزمانے کے لیے تیار ہیں؟',
        ctaSub: 'ابتدائی رسائی کے دوران کسی رجسٹریشن کی ضرورت نہیں۔',
        ctaBtn: 'ابتدائی رسائی حاصل کریں',
        ctaLink: 'تمام خدمات دیکھیں',
    }
};

/* Example conversation data - always shown in both languages to demonstrate bilingual support */
const chatMessages = [
    {
        type: 'user',
        text: 'میرے گندم کے پودے پیلے ہو رہے ہیں',
        label: 'Urdu voice input',
        isUrdu: true,
    },
    {
        type: 'ai',
        text: 'This could be nitrogen deficiency, which is common at this growth stage. Here are my recommendations:',
        bullets: [
            'Check if your last fertilization was more than 3 weeks ago',
            'Apply urea at 50kg per acre if needed',
            'Avoid over-watering in the meantime',
        ],
        label: 'AI Response',
    },
    {
        type: 'user',
        text: 'When is the best time to apply the fertilizer?',
        isUrdu: false,
    },
    {
        type: 'ai',
        text: 'Based on the weather forecast for your area, I recommend applying the fertilizer in the early morning (before 8 AM) tomorrow. There\'s no rain expected for the next 48 hours, which will give it time to absorb.',
        label: 'AI Response',
    },
];

const HowItWorksPage = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <>
            {/* Hero */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            {c.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">{c.title}</h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">{c.sub}</p>
                    </div>
                </Container>
            </section>

            {/* Steps */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-12">
                        {c.steps.map((step, index) => (
                            <div key={index} className="flex gap-6 md:gap-8">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                                        {step.number}
                                    </div>
                                    {index < c.steps.length - 1 && (
                                        <div className="w-px h-full bg-gray-200 mx-auto mt-2" />
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                                    <p className="text-charcoal-light mb-4 leading-relaxed">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                                                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

            {/* Chat Demo */}
            <section className="py-16 md:py-24 bg-off-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            {language === 'ur' ? 'لائیو ڈیمو' : 'Live Demo'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{c.demoTitle}</h2>
                        <p className="text-lg text-charcoal-light">{c.demoSub}</p>
                    </div>

                    {/* Chat Mockup */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            {/* Chat Header */}
                            <div className="bg-primary px-6 py-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-medium text-sm">Agrovia AI</div>
                                    <div className="text-white/70 text-xs">{language === 'ur' ? 'آن لائن' : 'Online'}</div>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="p-6 space-y-5">
                                {chatMessages.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] ${msg.type === 'user'
                                            ? 'bg-primary text-white rounded-2xl rounded-br-md px-5 py-3'
                                            : 'bg-gray-50 text-charcoal rounded-2xl rounded-bl-md px-5 py-4 border border-gray-100'
                                            }`}
                                        >
                                            <p className={`leading-relaxed ${msg.isUrdu ? 'text-right' : ''}`}
                                                dir={msg.isUrdu ? 'rtl' : 'ltr'}
                                            >
                                                {msg.text}
                                            </p>
                                            {msg.bullets && (
                                                <ul className="mt-3 space-y-1.5">
                                                    {msg.bullets.map((b, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm">
                                                            <span className="text-primary mt-0.5">•</span>
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {msg.label && (
                                                <div className={`mt-2 text-xs ${msg.type === 'user' ? 'text-white/60' : 'text-charcoal-light/60'}`}>
                                                    {msg.label}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Input Preview */}
                            <div className="px-6 pb-6">
                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                    <span className="text-sm text-charcoal-light">{language === 'ur' ? 'اپنا سوال بولیں یا لکھیں...' : 'Speak or type your question...'}</span>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
                        <p className="text-lg text-white/90 mb-8">{c.ctaSub}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-primary hover:bg-gray-50 transition-colors"
                            >
                                {c.ctaBtn}
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                            >
                                {c.ctaLink}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HowItWorksPage;
