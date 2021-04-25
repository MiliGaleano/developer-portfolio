import React, {useEffect, useState} from 'react'
import {EN, ES} from './languages.js'

const Context = React.createContext({})

export function LangContextProvider({children}) {
    const [lang, setLang] = useState('en')
    const [contentLang, setContentLang] = useState(EN)

    useEffect(()=>{
        if (lang === 'en') {
            setContentLang(EN)
        } else {
            setContentLang(ES)
        }
    }, [lang, setLang])

    return <Context.Provider value={{lang, setLang, contentLang}}>
        {children}
    </Context.Provider>
}

export default Context