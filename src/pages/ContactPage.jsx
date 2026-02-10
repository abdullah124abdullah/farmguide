import { useState } from 'react';
import { Container } from '../components/ui';

/**
 * Contact / Early Access Page
 * Form for early access requests
 */
const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        location: '',
        cropType: '',
        language: 'english',
        message: '',
        source: 'website',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('https://n8n.abdullahahmed.live/webhook/receive-data-from-farming', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            // The webhook returns { status: "success", message: "..." }
            if (response.ok || result.status === 'success') {
                setSuccessMessage(result.message || "Thanks for reaching out. Our team will contact you soon.");
                setIsSubmitted(true);
                // Reset form data but keep source
                setFormData(prev => ({
                    fullName: '',
                    phone: '',
                    email: '',
                    location: '',
                    cropType: '',
                    language: 'english',
                    message: '',
                    source: 'website',
                }));
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setErrorMessage('We encountered a problem sending your request. Please try again or contact us directly at support@agrovia.tech.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section className="py-20 md:py-32 bg-gradient-to-br from-off-white to-white min-h-[60vh] flex items-center">
                <Container>
                    <div className="max-w-xl mx-auto text-center animate-fade-in-up">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            Request Received!
                        </h1>
                        <p className="text-lg text-charcoal-light mb-8 leading-relaxed">
                            {successMessage}
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-6 py-2.5 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary-light transition-all shadow-sm"
                            >
                                Send another message
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-off-white to-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                        <span className="inline-block font-medium text-sm uppercase tracking-wider mb-3 text-primary">
                            Get Started
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Request Early Access
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            Join farmers who are getting smarter guidance for their crops.
                            Fill out the form below and we'll get you started.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 bg-white">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {errorMessage && (
                                <div className="p-4 rounded-lg bg-red-50 text-red-600 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                                        Phone Number <span className="text-charcoal-light">(optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                                        placeholder="+92 300 1234567"
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-2">
                                    Location (City / Region) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                                    placeholder="e.g., Lahore, Punjab"
                                />
                            </div>

                            {/* Crop Type */}
                            <div>
                                <label htmlFor="cropType" className="block text-sm font-medium text-charcoal mb-2">
                                    Primary Crop Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="cropType"
                                    name="cropType"
                                    required
                                    value={formData.cropType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors bg-white"
                                >
                                    <option value="">Select a crop</option>
                                    <option value="wheat">Wheat (گندم)</option>
                                    <option value="rice">Rice (چاول)</option>
                                    <option value="cotton">Cotton (کپاس)</option>
                                    <option value="sugarcane">Sugarcane (گنا)</option>
                                    <option value="maize">Maize (مکئی)</option>
                                    <option value="vegetables">Vegetables (سبزیاں)</option>
                                    <option value="fruits">Fruits (پھل)</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Preferred Language */}
                            <div>
                                <label className="block text-sm font-medium text-charcoal mb-2">
                                    Preferred Language <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="language"
                                            value="english"
                                            checked={formData.language === 'english'}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-primary focus:ring-primary"
                                        />
                                        <span className="text-charcoal">English</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="language"
                                            value="urdu"
                                            checked={formData.language === 'urdu'}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-primary focus:ring-primary"
                                        />
                                        <span className="text-charcoal">اردو (Urdu)</span>
                                    </label>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                                    Message <span className="text-charcoal-light">(optional)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                                    placeholder="Tell us about your farming situation or any specific questions you have..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 text-lg font-medium text-white rounded-lg bg-primary hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Request Early Access'
                                )}
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                            <p className="text-charcoal-light mb-2">
                                Have questions? Reach out directly:
                            </p>
                            <a
                                href="mailto:info@agrovia.tech"
                                className="text-primary font-medium hover:underline"
                            >
                                info@agrovia.tech
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ContactPage;
