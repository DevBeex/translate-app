import { SUPPORTED_LANGUAGES } from "../const"
import { SectionType } from "../const"

export const LanguageSelector = ({ onChange, value, setAuto, auto, type }) => {


    const handleChange = (event) => {
      onChange(event.target.value )
      if (type === SectionType.From) setAuto(false)
    }
  
    return (
      <select onChange={handleChange} value={value}>

        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={key}>
            {literal} 
          </option>
        ))}
      </select>
    )
  }