import { useReducer } from "react"

// Aprendiendo a usar redux. Primero creamos el estado inicial

const initialState = {
    fromLanguage: 'en',
    toLanguage: 'fr',
    fromText: 'Hello, how are you?',
    result: '',
    loading: false
}

// Despues creamos el reducer

function reducer (state, action) {
    const { type } = action

    if (type === 'INTERCHANGE_LANGUAGES') {
        // de esta manera evitamos poner todo esto en los componentes

        const loading = state.fromText !== ''

        return {
            ...state,
            loading,
            result: '',
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        if (state.fromLanguage === action.payload) return state

        const loading = state.fromText !== ''

        return {
            ...state,
            fromLanguage: action.payload,
            result: '',
            loading
        }
    }

    if (type === 'SET_TO_LANGUAGE'){
        if (state.toLanguage === action.payload) return state
        const loading = state.fromText !== ''

        return {
            ...state,
            toLanguage: action.payload,
            result: '',
            loading
        }
    }

    if (type === 'SET_FROM_TEXT') {
        const loading = action.payload !== ''

        return {
            ...state,
            loading,
            fromText: action.payload,
            result: ''
        }
    }

    if (type === 'SET_RESULT') {
        return {
            ...state,
            loading: false,
            result: action.payload
        }
    }

    return state
}

// Finalmente usamos useReducer

export function useStore () {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)
    
    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguage = (payload) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }

    const setFromText = (payload) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setResult = (payload) => {
        dispatch({ type : 'SET_RESULT', payload })
    }


    return {
        fromLanguage,
        toLanguage,
        result,
        fromText,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}