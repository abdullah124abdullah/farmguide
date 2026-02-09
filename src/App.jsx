import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  HomePage,
  AboutPage,
  ServicesPage,
  HowItWorksPage,
  PricingPage,
  ContactPage,
  TermsPage,
  PrivacyPage
} from './pages';

/**
 * Main App Component
 * Sets up routing and wraps all pages with shared Layout
 */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

/**
 * 404 Not Found Page
 */
const NotFoundPage = () => (
  <div className="py-20 md:py-32 min-h-[60vh]">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Page Not Found</h2>
      <p className="text-lg text-charcoal-light mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 font-medium text-white rounded-lg bg-primary hover:bg-primary-light transition-colors"
      >
        Back to Home
      </a>
    </div>
  </div>
);

export default App;
