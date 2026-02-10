import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';

const content = {
    en: {
        badge: 'About Us',
        title: 'Helping Pakistani Farmers Thrive',
        sub: 'Agrovia is an AI-powered platform designed to provide accessible, reliable farming guidance to farmers who need it most.',
        whatTitle: 'What is Agrovia?',
        whatP1: 'Agrovia is an intelligent assistant that helps farmers make better decisions about their crops. Using AI and Pakistani agricultural data, we provide personalized recommendations for planting, watering, disease prevention, and harvesting.',
        whatP2: 'Our platform is designed for farmers at every level of education. No technical knowledge is needed. Just speak your question in Urdu or English and get helpful, practical advice.',
        features: [
            { label: 'AI-Powered', desc: 'Smart recommendations based on your specific conditions' },
            { label: 'Voice-First', desc: 'No typing required, just speak naturally in Urdu or English' },
            { label: 'Made for Pakistan', desc: 'Uses Pakistani crop data, weather, and market information' },
            { label: 'Always Available', desc: 'Get guidance whenever you need it, day or night' },
        ],
        whyTitle: 'Why We Built This',
        whySub: 'Pakistani farmers face challenges that often go unaddressed. We are here to change that.',
        reasons: [
            { title: 'Lack of Expert Access', desc: "Many farmers don't have access to agricultural experts who can provide timely advice in their language.", icon: '👨‍🌾' },
            { title: 'Unpredictable Conditions', desc: 'Climate change has made traditional farming calendars unreliable. Farmers need up-to-date, localized guidance.', icon: '🌦️' },
            { title: 'Market Information Gap', desc: 'Farmers often sell at low prices because they lack real-time market rate information from local mandis.', icon: '📉' },
        ],
        visionTitle: 'Our Vision',
        visionP1: 'We envision a future where every Pakistani farmer, regardless of their location, education, or resources, has access to intelligent guidance that helps them make better decisions.',
        visionP2Lbl: 'Honest Positioning:',
        visionP2: " We don't promise perfect harvests. No technology can do that. What we offer is reliable, data-informed support that helps you make better choices for your land and livelihood.",
        visionP3Lbl: 'Accessibility First:',
        visionP3: " We believe farming technology should be simple to use. That's why we focus on voice-first interaction and Urdu language support. No complicated apps, no technical barriers.",
        ctaTitle: 'Ready to Get Started?',
        ctaSub: 'Join us in building a smarter future for farming in Pakistan.',
        ctaBtn: 'Request Early Access',
    },
    ur: {
        badge: 'ہمارے بارے میں',
        title: 'پاکستانی کسانوں کی ترقی میں مدد',
        sub: 'اگروویا ایک AI پر مبنی پلیٹ فارم ہے جو ان کسانوں کو قابل رسائی، قابل اعتماد زراعت کی رہنمائی فراہم کرنے کے لیے بنایا گیا ہے جنہیں اس کی سب سے زیادہ ضرورت ہے۔',
        whatTitle: 'اگروویا کیا ہے؟',
        whatP1: 'اگروویا ایک ذہین معاون ہے جو کسانوں کو فصلوں کے بارے میں بہتر فیصلے کرنے میں مدد کرتا ہے۔ AI اور پاکستانی زرعی ڈیٹا کا استعمال کرتے ہوئے، ہم بوائی، آبپاشی، بیماری سے بچاؤ اور فصل کٹائی کے لیے ذاتی سفارشات فراہم کرتے ہیں۔',
        whatP2: 'ہمارا پلیٹ فارم ہر سطح کے تعلیم یافتہ کسانوں کے لیے بنایا گیا ہے۔ کسی تکنیکی علم کی ضرورت نہیں۔ بس اردو یا انگریزی میں اپنا سوال بولیں اور عملی مشورہ حاصل کریں۔',
        features: [
            { label: 'AI پر مبنی', desc: 'آپ کی مخصوص حالات کی بنیاد پر سمارٹ سفارشات' },
            { label: 'آواز سے چلائیں', desc: 'لکھنے کی ضرورت نہیں، بس اردو یا انگریزی میں بولیں' },
            { label: 'پاکستان کے لیے بنایا گیا', desc: 'پاکستانی فصل کا ڈیٹا، موسم اور مارکیٹ کی معلومات استعمال کرتا ہے' },
            { label: 'ہمیشہ دستیاب', desc: 'جب بھی ضرورت ہو رہنمائی حاصل کریں، دن ہو یا رات' },
        ],
        whyTitle: 'ہم نے یہ کیوں بنایا',
        whySub: 'پاکستانی کسانوں کو ایسے چیلنجز کا سامنا ہے جو اکثر حل نہیں ہوتے۔ ہم یہ بدلنا چاہتے ہیں۔',
        reasons: [
            { title: 'ماہرین تک رسائی نہیں', desc: 'بہت سے کسانوں کو زرعی ماہرین تک رسائی نہیں ہوتی جو ان کی زبان میں بروقت مشورہ دے سکیں۔', icon: '👨‍🌾' },
            { title: 'غیر متوقع حالات', desc: 'موسمیاتی تبدیلی نے روایتی زرعی کیلنڈر کو ناقابل اعتبار بنا دیا ہے۔ کسانوں کو تازہ ترین رہنمائی چاہیے۔', icon: '🌦️' },
            { title: 'مارکیٹ معلومات کی کمی', desc: 'کسان اکثر کم قیمت پر بیچتے ہیں کیونکہ انہیں مقامی منڈیوں سے ریئل ٹائم ریٹ کی معلومات نہیں ہوتیں۔', icon: '📉' },
        ],
        visionTitle: 'ہمارا وژن',
        visionP1: 'ہم ایک ایسے مستقبل کا تصور کرتے ہیں جہاں ہر پاکستانی کسان، چاہے ان کا مقام، تعلیم یا وسائل کچھ بھی ہوں، ذہین رہنمائی تک رسائی رکھے جو بہتر فیصلے کرنے میں مدد کرے۔',
        visionP2Lbl: 'ایمانداری:',
        visionP2: ' ہم بہترین فصل کا وعدہ نہیں کرتے۔ کوئی ٹیکنالوجی یہ نہیں کر سکتی۔ ہم قابل اعتماد، ڈیٹا پر مبنی مدد پیش کرتے ہیں جو آپ کو اپنی زمین اور معاش کے لیے بہتر فیصلے کرنے میں مدد دیتی ہے۔',
        visionP3Lbl: 'رسائی پہلے:',
        visionP3: ' ہم سمجھتے ہیں کہ زراعت کی ٹیکنالوجی استعمال میں آسان ہونی چاہیے۔ اسی لیے ہم آواز سے بات چیت اور اردو زبان کی سپورٹ پر توجہ دیتے ہیں۔ کوئی پیچیدہ ایپس نہیں، کوئی تکنیکی رکاوٹ نہیں۔',
        ctaTitle: 'شروع کرنے کے لیے تیار ہیں؟',
        ctaSub: 'پاکستان میں کاشتکاری کے بہتر مستقبل کی تعمیر میں ہمارے ساتھ شامل ہوں۔',
        ctaBtn: 'ابتدائی رسائی کی درخواست کریں',
    }
};

const AboutPage = () => {
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
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{c.whatTitle}</h2>
                            <p className="text-lg text-charcoal-light leading-relaxed mb-6">{c.whatP1}</p>
                            <p className="text-lg text-charcoal-light leading-relaxed">{c.whatP2}</p>
                        </div>
                        <div className="rounded-2xl p-8 bg-off-white animate-slide-up delay-200">
                            <div className="space-y-4">
                                {c.features.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-charcoal">{item.label}</h4>
                                            <p className="text-sm text-charcoal-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-24 bg-off-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{c.whyTitle}</h2>
                        <p className="text-lg text-charcoal-light leading-relaxed">{c.whySub}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {c.reasons.map((reason, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                                <span className="text-4xl mb-4 block">{reason.icon}</span>
                                <h3 className="text-xl font-semibold text-charcoal mb-3">{reason.title}</h3>
                                <p className="text-charcoal-light">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{c.visionTitle}</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-charcoal-light">
                            <p className="mb-6">{c.visionP1}</p>
                            <p className="mb-6">
                                <strong className="text-charcoal">{c.visionP2Lbl}</strong>{c.visionP2}
                            </p>
                            <p>
                                <strong className="text-charcoal">{c.visionP3Lbl}</strong>{c.visionP3}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-24 bg-primary">
                <Container>
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
                        <p className="text-lg text-white/90 mb-8">{c.ctaSub}</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-primary hover:bg-gray-50 transition-colors"
                        >
                            {c.ctaBtn}
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AboutPage;
