import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        badge: 'Our Services',
        title: 'What Agrovia Offers',
        sub: 'Practical tools and guidance designed for Pakistani farmers. Simple, accessible, and available in your language.',
        services: [
            {
                icon: '💡',
                title: 'AI-Powered Farming Guidance',
                description: 'Get personalized recommendations based on your specific crops, soil conditions, and local climate. Our AI uses Pakistani agricultural data to provide relevant advice.',
            },
            {
                icon: '🌱',
                title: 'Crop Disease Awareness',
                description: 'Early identification guidance for common plant diseases in Pakistan. Learn to recognize symptoms and get recommended actions before problems spread.',
            },
            {
                icon: '🌤️',
                title: 'Weather-Aware Suggestions',
                description: 'Recommendations that factor in current and upcoming weather conditions. Know when to plant, water, or protect your crops based on local forecasts.',
            },
            {
                icon: '⏰',
                title: 'Watering & Growth Timing',
                description: 'Know the optimal times for irrigation, fertilization, and key growth stages. Get alerts and reminders for critical farming activities.',
            },
            {
                icon: '🎙️',
                title: 'Voice & Chat Interaction',
                description: 'Talk to Agrovia using your voice or simple text messages. No complicated interfaces, just natural conversation in Urdu or English.',
            },
            {
                icon: '🌐',
                title: 'Multilingual Support',
                description: 'Available in English and Urdu, with more languages planned. Get guidance in the language you are most comfortable with.',
            },
            {
                icon: '📊',
                title: 'Market Rates & Trends',
                description: 'Stay informed about current market prices for your crops. Understand market trends so you can make better selling decisions and maximize your earnings.',
            },
        ],
        roadmapBadge: 'Roadmap',
        roadmapTitle: 'On Our Roadmap',
        roadmapSub: 'Features we are actively developing to give you even more value',
        roadmapItems: [
            { title: 'Smart Alerts', desc: 'Automated notifications for weather changes, pest warnings, and optimal action times.' },
            { title: 'Regional Market Data', desc: 'Real-time mandi rates and price trends for crops across Pakistan.' },
            { title: 'Location-Based Services', desc: 'Localized recommendations based on your exact GPS location and local conditions.' },
        ],
        ctaTitle: 'Ready to Try Agrovia?',
        ctaSub: 'Get personalized farming guidance today.',
        ctaBtn1: 'Request Early Access',
        ctaBtn2: 'See How It Works',
    },
    ur: {
        badge: 'ہماری خدمات',
        title: 'اگروویا کیا پیش کرتا ہے',
        sub: 'پاکستانی کسانوں کے لیے عملی ٹولز اور رہنمائی۔ آسان، قابل رسائی اور آپ کی زبان میں دستیاب۔',
        services: [
            {
                icon: '💡',
                title: 'AI پر مبنی زراعت کی رہنمائی',
                description: 'اپنی فصلوں، مٹی کی حالت اور مقامی موسم کی بنیاد پر ذاتی سفارشات حاصل کریں۔ ہمارا AI پاکستان کے زرعی ڈیٹا کا استعمال کرتا ہے۔',
            },
            {
                icon: '🌱',
                title: 'فصل کی بیماری سے آگاہی',
                description: 'پاکستان میں عام پودوں کی بیماریوں کی شناخت کی ابتدائی رہنمائی۔ علامات پہچاننا سیکھیں اور مسائل پھیلنے سے پہلے اقدامات کریں۔',
            },
            {
                icon: '🌤️',
                title: 'موسم کے مطابق تجاویز',
                description: 'موجودہ اور آنے والے موسم کو مدنظر رکھتے ہوئے سفارشات۔ جانیں کب بوائی کریں، پانی دیں یا فصل کی حفاظت کریں۔',
            },
            {
                icon: '⏰',
                title: 'آبپاشی اور نشوونما کا وقت',
                description: 'آبپاشی، کھاد اور نشوونما کے اہم مراحل کے بہترین اوقات جانیں۔ اہم زرعی سرگرمیوں کے لیے الرٹس حاصل کریں۔',
            },
            {
                icon: '🎙️',
                title: 'آواز اور چیٹ سے بات چیت',
                description: 'اگروویا سے اپنی آواز یا سادہ پیغامات کے ذریعے بات کریں۔ کوئی پیچیدہ انٹرفیس نہیں، بس اردو یا انگریزی میں قدرتی گفتگو۔',
            },
            {
                icon: '🌐',
                title: 'کثیر زبان سپورٹ',
                description: 'انگریزی اور اردو میں دستیاب، مزید زبانوں کی منصوبہ بندی جاری ہے۔ جس زبان میں آپ آرام دہ ہیں اسی میں رہنمائی حاصل کریں۔',
            },
            {
                icon: '📊',
                title: 'مارکیٹ ریٹ اور رجحانات',
                description: 'اپنی فصلوں کی موجودہ منڈی قیمتوں سے باخبر رہیں۔ مارکیٹ کے رجحانات سمجھیں تاکہ بہتر فروخت کے فیصلے کر سکیں۔',
            },
        ],
        roadmapBadge: 'روڈ میپ',
        roadmapTitle: 'ہمارے روڈ میپ پر',
        roadmapSub: 'جو فیچرز ہم فعال طور پر تیار کر رہے ہیں',
        roadmapItems: [
            { title: 'سمارٹ الرٹس', desc: 'موسم کی تبدیلیوں، کیڑوں کی وارننگ اور بہترین وقت کے لیے خودکار نوٹیفکیشنز۔' },
            { title: 'علاقائی مارکیٹ ڈیٹا', desc: 'پاکستان بھر میں فصلوں کے لیے ریئل ٹائم منڈی ریٹ اور قیمتوں کے رجحانات۔' },
            { title: 'مقام پر مبنی خدمات', desc: 'آپ کے GPS مقام اور مقامی حالات کی بنیاد پر مقامی سفارشات۔' },
        ],
        ctaTitle: 'اگروویا آزمانے کے لیے تیار ہیں؟',
        ctaSub: 'آج ہی ذاتی زراعت کی رہنمائی حاصل کریں۔',
        ctaBtn1: 'ابتدائی رسائی کی درخواست کریں',
        ctaBtn2: 'دیکھیں کیسے کام کرتا ہے',
    }
};

const ServicesPage = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <>
            {/* Hero */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">{c.badge}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">{c.title}</h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">{c.sub}</p>
                    </div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {c.services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                                <p className="text-charcoal-light leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Roadmap */}
            <section className="py-16 md:py-24 bg-off-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">{c.roadmapBadge}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{c.roadmapTitle}</h2>
                        <p className="text-lg text-charcoal-light">{c.roadmapSub}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {c.roadmapItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <h3 className="font-semibold text-charcoal">{item.title}</h3>
                                </div>
                                <p className="text-sm text-charcoal-light">{item.desc}</p>
                            </div>
                        ))}
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
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-primary hover:bg-gray-50 transition-colors">
                                {c.ctaBtn1}
                            </Link>
                            <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
                                {c.ctaBtn2}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ServicesPage;
