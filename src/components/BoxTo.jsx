import { LanguageSelector } from "./LanguageSelector"
import { TextArea } from "./TextArea"
import { SectionType } from "../const"

import { AudioIcon, CopyIcon, InterchangeIcon } from "./Icons"

export function BoxTo( { loading, toLanguage, result, interchangeLanguages, setToLanguage, setResult, auto, setAuto, audio, copy }) {
    const handleInterchange = () => {
        interchangeLanguages()
    }
    return (
        <div className="box">
            <div className="box-language-selection-to">
                <div>
                <button className={((toLanguage ===  'en') ? 'selected-button' : '')} onClick={() => setToLanguage('en')}>English</button>
                <button className={((toLanguage === 'fr') ? 'selected-button' : '')} onClick={() => setToLanguage('fr')}>French</button>
                <LanguageSelector value={toLanguage} onChange={setToLanguage} setAuto={setAuto} auto={auto} type={SectionType.To}/>
                </div>
                <div className="box-language-interchange">
                <button onClick={handleInterchange}><InterchangeIcon /> </button>

                </div>

            </div>
            <div className="box-language-border"></div>
            <div className="box-write">
                <TextArea type={SectionType.To} loading={loading} value={result} onChange={setResult}/>
            </div>

            <div className="box-footer">
                <div className="box-footer-audiocopy">
                    <button onClick={() => audio(result, toLanguage)}><AudioIcon/></button>
                    <button onClick={() => copy(result)}><CopyIcon/></button>
                </div>

                
            </div>

        </div>
    )
}