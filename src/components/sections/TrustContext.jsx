import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../ui';

const content = {
    en: {
        badge: 'The Challenge',
        title: 'Farming in Pakistan is Getting Harder',
        sub: 'Pakistani farmers face growing challenges that technology can help solve.',
        items: [
            { icon: '🌦️', title: 'Unpredictable Weather', desc: 'Changing weather patterns make it harder to plan planting and harvesting seasons.' },
            { icon: '🦠', title: 'Crop Diseases', desc: 'Identifying diseases early is difficult without expert knowledge readily available.' },
            { icon: '⏱️', title: 'Timing Decisions', desc: 'Knowing exactly when to water, fertilize, or harvest can make or break a season.' },
            { icon: '📉', title: 'Market Uncertainty', desc: 'Farmers often lack real-time market rate information to make profitable selling decisions.' },
        ],
    },
    ur: {
        badge: 'چیلنج',
        title: 'پاکستان میں کاشتکاری مشکل ہوتی جا رہی ہے',
        sub: 'پاکستانی کسانوں کو بڑھتے ہوئے چیلنجز کا سامنا ہے جن میں ٹیکنالوجی مدد کر سکتی ہے۔',
        items: [
            { icon: '🌦️', title: 'غیر متوقع موسم', desc: 'بدلتے موسمی پیٹرن بوائی اور فصل کٹائی کی منصوبہ بندی کو مشکل بناتے ہیں۔' },
            { icon: '🦠', title: 'فصل کی بیماریاں', desc: 'ماہر علم کے بغیر بیماریوں کی جلد شناخت مشکل ہے۔' },
            { icon: '⏱️', title: 'وقت کے فیصلے', desc: 'پانی، کھاد یا فصل کٹائی کا صحیح وقت جاننا موسم کامیاب بنا سکتا ہے۔' },
            { icon: '📉', title: 'مارکیٹ کی غیر یقینی', desc: 'کسانوں کو اکثر منافع بخش فروخت کے لیے ریئل ٹائم منڈی ریٹ کی معلومات نہیں ملتیں۔' },
        ],
    }
};

const TrustContext = () => {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">{c.badge}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{c.title}</h2>
                    <p className="text-lg text-charcoal-light max-w-2xl mx-auto">{c.sub}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {c.items.map((item, index) => (
                        <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                            <span className="text-3xl mb-3 block">{item.icon}</span>
                            <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                            <p className="text-sm text-charcoal-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TrustContext;
