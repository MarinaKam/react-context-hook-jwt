import React, { createContext, useState } from 'react';
import useResource from '../services/useResources';

const Context = createContext({
    "language": "english",
    "title": "New here?",
    "text": "Hi, everyone",
    "btn": "Log in",
    "btn-sign": "Sign up",
    "logo": "News"
});

export const LanguageStore = (props) => {
    const [language, setLanguage] = useState("english");
    const onLanguageChange = language => setLanguage(language);
    const lang = useResource('lang');
    return(
        <Context.Provider value={{ language, onLanguageChange, data: lang[language]}}>
            { props.children }
        </Context.Provider>
    )
};

export default Context;