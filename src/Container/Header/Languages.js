import React, {useState} from 'react';
import i18next from "i18next";
import cookies from 'js-cookie'
import css from "./header.module.css"
const Languages = () => {
    const languages = [
        {id: 1, lang: 'en'},
        {id: 2, lang: 'am'},
        {id: 3, lang: 'ru'},
    ]

    const currentLang = cookies.get('i18next')
    const [activeLang, setActiveLang] = useState(currentLang)

    const selectlanguages = (lang,id) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
        localStorage.setItem("lang", lang)
    }

    return (
        <div>
            <select onChange={e=>selectlanguages(e.target.value)} className={css.selectMain}>
                {
                    languages.map(({id, lang}) => {
                        return <option
                            key={id}
                            value={lang}
                            onClick={() => selectlanguages(lang, id)}
                            className={lang === activeLang ? 'language active' : 'language'}
                        >
                            {lang.toUpperCase()}
                        </option>
                    })
                }
            </select>
        </div>

    );
};

export default Languages;