

export async function translate ({
    fromLanguage,
    toLanguage,
    text,
    auto
}) {

    if (fromLanguage === toLanguage) return 'Elija diferentes idiomas en las opciones'

    const mt = (auto == true) ? 1 : 0

    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}&mt=${mt}`)
    const result = await response.json()
    
    return result.matches[0].translation
}