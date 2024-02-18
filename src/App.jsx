import './App.css'
import Logo from './assets/logo.svg'
import { BoxFrom } from './components/BoxFrom'
import { BoxTo } from './components/BoxTo'
import { useStore } from './hooks/useStore'
import { useState, useEffect } from 'react'
import { translate } from './services/translate'
import {useDebounce } from './hooks/useDebounce'
import { VOICE_FOR_LANGUAGE } from './const'

function App () {
  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()
  const [auto, setAuto] = useState(false)

  const handleSpeak = (toHear, language) => {
    const utterance = new SpeechSynthesisUtterance(toHear)
    utterance.lang = VOICE_FOR_LANGUAGE[language]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }
  
  const handleClipBoard = (text) => {
    navigator.clipboard.writeText(text).catch(() => {})
  }

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    translate({ fromLanguage, toLanguage, text: debouncedFromText, auto })
    .then(result => {
        if (result == null) return
        // console.log(result)
        setResult(result)
      })
      .catch(() => { setResult('Error') })

  }, [debouncedFromText, fromLanguage, toLanguage, auto])

  return (
    <>
      <section className='main'>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>

        <BoxFrom loading={loading} fromLanguage={fromLanguage} fromText={fromText} setFromLanguage={setFromLanguage} setFromText={setFromText} setAuto={setAuto} auto={auto} audio={handleSpeak} copy={handleClipBoard}/>
        <BoxTo loading={loading} toLanguage={toLanguage} result={result} interchangeLanguages={interchangeLanguages} setToLanguage={setToLanguage} setResult={setResult} auto={auto} setAuto={setAuto} audio={handleSpeak} copy={handleClipBoard}/>
      </section>
    </>
  )
}

export default App
