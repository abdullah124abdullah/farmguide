import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        try { return localStorage.getItem('agrovia-lang') || 'en'; }
        catch { return 'en'; }
    });

    useEffect(() => {
        try { localStorage.setItem('agrovia-lang', language); } catch { }
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === 'en' ? 'ur' : 'en');
    }, []);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}

export default LanguageContext;
