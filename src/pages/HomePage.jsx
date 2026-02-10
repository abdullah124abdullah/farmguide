import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { TrustContext, ProductValue } from '../components/sections';
import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        badge: 'Built for Pakistani Farmers',
        h1a: 'Grow Better with',
        h1b: 'Intelligent Guidance',
        sub: 'Agrovia is an AI-powered farming assistant designed for Pakistani farmers. Even if you have never used technology before, Agrovia makes it easy to get crop advice in your own language through simple voice or text messages.',
        cta1: 'Get Early Access',
        cta2: 'Learn More',
        t1: 'Voice Enabled',
        t2: 'English & Urdu',
        t3: 'Actively Building',
        offerTitle: 'What We Offer',
        offerSub: 'Simple tools designed for farmers at every level of education',
        features: [
            { title: 'Crop Disease Awareness', icon: '🌱' },
            { title: 'Weather-Aware Suggestions', icon: '🌤️' },
            { title: 'Voice & Chat Support', icon: '🎙️' },
            { title: 'English & Urdu', icon: '🌐' },
            { title: 'Growth Timing Help', icon: '⏰' },
            { title: 'Market Rates & Trends', icon: '📊' },
        ],
        viewAll: 'View all services',
        btmTitle: "We're Actively Building Agrovia",
        btmDesc: "Agrovia is a work in progress. We're a small, passionate team building an AI assistant tailored for Pakistan's farming communities. No technical knowledge needed. Just ask your question in Urdu or English and get helpful answers.",
        btmCta1: 'Request Early Access',
        btmCta2: 'See How It Works',
    },
    ur: {
        badge: 'پاکستانی کسانوں کے لیے',
        h1a: 'بہتر فصل اُگائیں',
        h1b: 'ذہین رہنمائی کے ساتھ',
        sub: 'اگروویا ایک AI پر مبنی زراعت کا معاون ہے جو پاکستانی کسانوں کے لیے بنایا گیا ہے۔ اگر آپ نے پہلے کبھی ٹیکنالوجی استعمال نہیں کی تو بھی اگروویا آپ کی اپنی زبان میں آواز یا پیغام کے ذریعے فصل کا مشورہ حاصل کرنا آسان بناتا ہے۔',
        cta1: 'ابتدائی رسائی حاصل کریں',
        cta2: 'مزید جانیں',
        t1: 'آواز سے چلائیں',
        t2: 'انگریزی اور اردو',
        t3: 'زیر تعمیر',
        offerTitle: 'ہم کیا پیش کرتے ہیں',
        offerSub: 'ہر سطح کے کسان کے لیے آسان ٹولز',
        features: [
            { title: 'فصل کی بیماری سے آگاہی', icon: '🌱' },
            { title: 'موسم کے مطابق تجاویز', icon: '🌤️' },
            { title: 'آواز اور چیٹ سپورٹ', icon: '🎙️' },
            { title: 'انگریزی اور اردو', icon: '🌐' },
            { title: 'فصل کے وقت کی رہنمائی', icon: '⏰' },
            { title: 'مارکیٹ ریٹ اور رجحانات', icon: '📊' },
        ],
        viewAll: 'تمام خدمات دیکھیں',
        btmTitle: 'ہم اگروویا فعال طور پر بنا رہے ہیں',
        btmDesc: 'اگروویا ابھی تعمیر کے مرحلے میں ہے۔ ہم ایک چھوٹی مگر پُرجوش ٹیم ہیں جو پاکستان کے کسانوں کے لیے AI معاون بنا رہی ہے۔ کسی تکنیکی علم کی ضرورت نہیں۔ بس اردو یا انگریزی میں اپنا سوال پوچھیں اور مددگار جواب حاصل کریں۔',
        btmCta1: 'ابتدائی رسائی کی درخواست کریں',
        btmCta2: 'دیکھیں کیسے کام کرتا ہے',
    }
};

const HomePage = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-off-white to-white">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-primary" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-accent" />
                </div>

                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-primary/10 text-primary">
                            <span className="w-2 h-2 rounded-full animate-pulse bg-primary" />
                            {c.badge}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-charcoal">
                            {c.h1a}
                            <span className="block mt-2 text-primary">{c.h1b}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-10 max-w-2xl mx-auto">
                            {c.sub}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary-light"
                            >
                                {c.cta1}
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 transition-all duration-200 bg-white text-primary border-primary hover:bg-primary hover:text-white hover:shadow-lg"
                            >
                                {c.cta2}
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-charcoal-light font-medium">
                            {[c.t1, c.t2, c.t3].map((label, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <TrustContext />
            <ProductValue />

            {/* What We Offer */}
            <section className="py-20 md:py-28 bg-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{c.offerTitle}</h2>
                        <p className="text-lg text-charcoal-light max-w-2xl mx-auto">{c.offerSub}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {c.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                <span className="text-2xl">{feature.icon}</span>
                                <span className="font-medium text-charcoal">{feature.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
                            {c.viewAll}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl bg-accent" />
                </div>

                <Container className="relative">
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.btmTitle}</h2>
                        <p className="text-lg leading-relaxed mb-10 text-white/90">{c.btmDesc}</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-lg bg-white text-primary hover:bg-gray-50"
                            >
                                {c.btmCta1}
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                to="/how-it-works"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 transition-all duration-200 bg-transparent text-white border-white hover:bg-white hover:text-primary hover:shadow-lg"
                            >
                                {c.btmCta2}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HomePage;
