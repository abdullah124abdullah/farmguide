import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../ui';

const content = {
    en: {
        title: 'Guidance You Can Trust',
        desc: "Agrovia doesn't promise perfect harvests. No one can. What we offer is reliable, intelligent support that helps you make better-informed decisions for your land and your livelihood.",
        card: {
            label: 'Example: Smart Recommendation',
            title: '🌾 Wheat Crop Advisory',
            text: 'Based on your location in Punjab and current weather patterns, consider delaying irrigation by 2 days. Rain is expected on Thursday which will provide natural moisture for your wheat crop.',
            meta1: 'Punjab Region',
            meta2: 'Weather-Aware',
            meta3: 'Personalized',
        },
        points: [
            { title: 'Data-Informed', desc: 'Recommendations backed by Pakistani agricultural data' },
            { title: 'Always Improving', desc: 'Our AI learns and gets better with every interaction' },
            { title: 'Honest & Transparent', desc: 'We tell you what we know and what we do not' },
        ],
    },
    ur: {
        title: 'قابل اعتماد رہنمائی',
        desc: 'اگروویا بہترین فصل کا وعدہ نہیں کرتا۔ کوئی نہیں کر سکتا۔ ہم جو پیش کرتے ہیں وہ قابل اعتماد، ذہین مدد ہے جو آپ کو اپنی زمین اور معاش کے لیے بہتر فیصلے کرنے میں مدد دیتی ہے۔',
        card: {
            label: 'مثال: سمارٹ سفارش',
            title: '🌾 گندم کی فصل کا مشورہ',
            text: 'پنجاب میں آپ کے مقام اور موجودہ موسمی حالات کی بنیاد پر، آبپاشی 2 دن تاخیر سے کریں۔ جمعرات کو بارش متوقع ہے جو آپ کی گندم کی فصل کو قدرتی نمی فراہم کرے گی۔',
            meta1: 'پنجاب کا علاقہ',
            meta2: 'موسم سے آگاہ',
            meta3: 'ذاتی مشورہ',
        },
        points: [
            { title: 'ڈیٹا پر مبنی', desc: 'پاکستان کے زرعی ڈیٹا پر مبنی سفارشات' },
            { title: 'ہمیشہ بہتر ہوتا', desc: 'ہمارا AI ہر بات چیت سے سیکھتا اور بہتر ہوتا ہے' },
            { title: 'ایمانداری اور شفافیت', desc: 'ہم بتاتے ہیں کیا جانتے ہیں اور کیا نہیں جانتے' },
        ],
    }
};

const ProductValue = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <section className="py-16 md:py-24 bg-off-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{c.title}</h2>
                        <p className="text-lg text-charcoal-light leading-relaxed mb-8">{c.desc}</p>

                        <div className="space-y-4">
                            {c.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-charcoal">{point.title}</h4>
                                        <p className="text-sm text-charcoal-light">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommendation Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="text-xs font-medium uppercase tracking-wider text-primary mb-4">{c.card.label}</div>
                        <h3 className="text-lg font-bold text-charcoal mb-3">{c.card.title}</h3>
                        <p className="text-charcoal-light leading-relaxed mb-4">{c.card.text}</p>
                        <div className="flex flex-wrap gap-2">
                            {[c.card.meta1, c.card.meta2, c.card.meta3].map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProductValue;
