import { SectionType } from "../const"

const getPlaceHolder = ({ type, loading }) => {
    if (type === SectionType.From) return 'Introducir texto'
    if (loading === true) return 'cargando'
    return 'Traduccion'
}

export function TextArea ({ type, loading, value, onChange, setCountFrom, countFrom}) {

    const handleChange = (event) => {
        onChange(event.target.value)
        if (type === SectionType.From) setCountFrom(value.length)
    }

    if (type === SectionType.To) console.log(value)
    return (
        <textarea 
        type="text" 
        className="box-write-input"
        disabled={type === SectionType.To || countFrom === 500 ? true : false}
        placeholder={getPlaceHolder({ type, loading})}
        value={value}
        onChange={handleChange}

        />
    )
}