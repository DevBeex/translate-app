import { LanguageSelector } from "./LanguageSelector"
import { TextArea } from "./TextArea"
import { SectionType } from "../const"
import { AudioIcon, CopyIcon } from "./Icons"
import { useState } from "react"

export function BoxFrom({ loading, fromLanguage, fromText, setFromLanguage, setFromText, auto, setAuto, audio, copy }) {
    const [countFrom, setCountFrom] = useState(fromText.length)
    return (
        <div className="box">
            <div className="box-language-selection">
                <button className={(auto === true ? 'selected-button' : '')} onClick={() => setAuto(true)} >Detect Language</button>
                <button className={((fromLanguage ===  'en' && auto === false) ? 'selected-button' : '')} onClick={() => {setFromLanguage('en')
            setAuto(false)}}>English</button>
                <button className={((fromLanguage === 'fr' && auto === false) ? 'selected-button' : '')} onClick={() => {setFromLanguage('fr')
            setAuto(false)}} >French</button>
                <LanguageSelector value={fromLanguage} onChange={setFromLanguage} setAuto={setAuto} auto={auto} type={SectionType.From}/>
            </div>
            <div className="box-language-border"></div>
            <div className="box-write">
                <TextArea type={SectionType.From} loading={loading} value={fromText} onChange={setFromText} setCountFrom={setCountFrom} count={countFrom}/>
            </div>

            <div className="box-footer">
                <div className="box-footer-audiocopy">
                    <button onClick={() => {audio(fromText, fromLanguage)}}><AudioIcon/></button>
                    <button onClick={() => copy(fromText)}><CopyIcon/></button>
                </div>
                <div className="box-footer-translate">
                    <p>{countFrom}/500</p>
                    <button>Translate</button>
                </div>
                
            </div>

        </div>
    )
}