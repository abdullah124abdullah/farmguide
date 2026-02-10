import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        badge: 'Pricing',
        title: 'Simple & Accessible',
        sub: "Agrovia is being actively built by a small team. We're in early access, which means it's free to get started while we develop the platform.",
        eaBadge: 'Available Now',
        eaTitle: 'Early Access',
        eaPrice: 'Free',
        eaPriceNote: 'for now',
        eaDesc: 'Get started with Agrovia while we build. Your feedback helps us shape a better product for Pakistani farmers.',
        eaFeatures: ['Core AI farming guidance', 'Voice & chat access', 'Urdu & English support', 'Crop disease awareness', 'Weather-aware recommendations', 'Market rate information'],
        eaBtn: 'Join Early Access',
        proBadge: 'Future Release',
        proTitle: 'Pro',
        proPrice: 'Pricing announced soon',
        proDesc: 'As our platform matures, we plan to introduce advanced features. This takes time, as we are a small team focused on quality.',
        proFeatures: ['Advanced AI insights', 'Smart alerts & notifications', 'Detailed seasonal planning', 'Extended crop coverage', 'Priority support'],
        proBtn: 'Notify Me',
        noteTitle: 'A Note About Pricing',
        noteDesc: "Agrovia is in active development. We're a small team building an AI-powered farming assistant from the ground up. This includes implementing location-based services, crop tracking systems, and advanced AI personalization. Core guidance will always remain accessible to everyone.",
        ctaTitle: 'Ready to Get Started?',
        ctaSub: "Join early access today. It's free.",
        ctaBtn: 'Join Early Access',
    },
    ur: {
        badge: 'قیمتیں',
        title: 'آسان اور قابل رسائی',
        sub: 'اگروویا ایک چھوٹی ٹیم فعال طور پر بنا رہی ہے۔ ہم ابتدائی رسائی کے مرحلے میں ہیں، جس کا مطلب ہے کہ پلیٹ فارم تیار ہونے تک شروع کرنا مفت ہے۔',
        eaBadge: 'ابھی دستیاب',
        eaTitle: 'ابتدائی رسائی',
        eaPrice: 'مفت',
        eaPriceNote: 'ابھی کے لیے',
        eaDesc: 'اگروویا کے ساتھ شروع کریں جب ہم تعمیر کر رہے ہیں۔ آپ کی رائے ہمیں پاکستانی کسانوں کے لیے بہتر پروڈکٹ بنانے میں مدد دیتی ہے۔',
        eaFeatures: ['بنیادی AI زراعت کی رہنمائی', 'آواز اور چیٹ رسائی', 'اردو اور انگریزی سپورٹ', 'فصل کی بیماری سے آگاہی', 'موسم کے مطابق سفارشات', 'مارکیٹ ریٹ کی معلومات'],
        eaBtn: 'ابتدائی رسائی میں شامل ہوں',
        proBadge: 'آئندہ ریلیز',
        proTitle: 'پرو',
        proPrice: 'قیمت جلد بتائی جائے گی',
        proDesc: 'جیسے جیسے ہمارا پلیٹ فارم بہتر ہوگا، ہم جدید فیچرز متعارف کرانے کا ارادہ رکھتے ہیں۔ یہ وقت لیتا ہے، کیونکہ ہم معیار پر توجہ دینے والی چھوٹی ٹیم ہیں۔',
        proFeatures: ['جدید AI بصیرت', 'سمارٹ الرٹس اور نوٹیفکیشنز', 'تفصیلی موسمی منصوبہ بندی', 'وسیع فصل کوریج', 'ترجیحی سپورٹ'],
        proBtn: 'مجھے مطلع کریں',
        noteTitle: 'قیمتوں کے بارے میں نوٹ',
        noteDesc: 'اگروویا فعال ترقی میں ہے۔ ہم ایک چھوٹی ٹیم ہیں جو AI پر مبنی زراعت معاون بنا رہی ہے۔ اس میں مقام پر مبنی خدمات، فصل ٹریکنگ سسٹمز، اور جدید AI پرسنلائزیشن کا نفاذ شامل ہے۔ بنیادی رہنمائی ہمیشہ سب کے لیے قابل رسائی رہے گی۔',
        ctaTitle: 'شروع کرنے کے لیے تیار ہیں؟',
        ctaSub: 'آج ہی ابتدائی رسائی میں شامل ہوں۔ یہ مفت ہے۔',
        ctaBtn: 'ابتدائی رسائی میں شامل ہوں',
    }
};

const PricingPage = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <>
            <section className="py-20 md:py-28 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">{c.badge}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">{c.title}</h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">{c.sub}</p>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg shadow-primary/10">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">{c.eaBadge}</span>
                                    <h2 className="text-2xl font-bold text-charcoal mb-2">{c.eaTitle}</h2>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-primary">{c.eaPrice}</span>
                                        <span className="text-charcoal-light">{c.eaPriceNote}</span>
                                    </div>
                                </div>
                                <p className="text-charcoal-light mb-6">{c.eaDesc}</p>
                                <ul className="space-y-3 mb-8">
                                    {c.eaFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-charcoal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="block w-full text-center px-6 py-4 text-lg font-medium text-white rounded-lg bg-primary hover:bg-primary-light transition-colors">
                                    {c.eaBtn}
                                </Link>
                            </div>

                            <div className="bg-off-white rounded-2xl p-8 border border-gray-200">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/5 text-primary mb-3">{c.proBadge}</span>
                                    <h2 className="text-2xl font-bold text-charcoal mb-2">{c.proTitle}</h2>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xl font-medium text-charcoal-light">{c.proPrice}</span>
                                    </div>
                                </div>
                                <p className="text-charcoal-light mb-6">{c.proDesc}</p>
                                <ul className="space-y-3 mb-8">
                                    {c.proFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-charcoal-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button disabled className="block w-full text-center px-6 py-4 text-lg font-medium rounded-lg bg-gray-200 text-charcoal-light cursor-default">
                                    {c.proBtn}
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-16 bg-off-white">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-charcoal mb-3">{c.noteTitle}</h3>
                        <p className="text-charcoal-light leading-relaxed">{c.noteDesc}</p>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-24 bg-primary">
                <Container>
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
                        <p className="text-lg text-white/90 mb-8">{c.ctaSub}</p>
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-primary hover:bg-gray-50 transition-colors">
                            {c.ctaBtn}
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default PricingPage;
