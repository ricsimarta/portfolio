import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

import './App.css';
import textJson from './text.json'
import { useState, useEffect } from 'react';

export type languageType = {
  header: headerTextType,
  landing: landingTextType
  about: aboutTextType
}

export type headerTextType = {
  about: string,
  skills: string,
  contact: string
}

export type landingTextType = {
  name: string,
  title: string,
  texts: string[],
  buttonText: string
}

export type aboutTextType = {
  title: string,
  texts: string[],
  buttonText: string
}

export default function App() {
  const [lang, setLang] = useState<string>("eng")
  const [text, setText] = useState<null | languageType>(null)
  const textData: Record<string, languageType> = textJson

  useEffect(() => {
    setText(textData[lang])
  }, [lang, textData])

  return (
    <>
      {text && <>
        <Header text={text.header} lang={lang} setLang={setLang}/>
        <Landing landingText={text.landing}/>
        <About aboutText={text.about}/>
        <Skills/>
      </>}
    </>
  )
}