import { createContext, useEffect, useState } from 'react';

const defaultLanguage = 'EN';

export const LanguageContext = createContext({
    language: '',
    changeLanguage: () => { },
});

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    // Dil deyişdirme 
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
