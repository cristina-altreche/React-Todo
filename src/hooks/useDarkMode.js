import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

const useDarkMode = () => {
    const [darkModeState, setDarkModeState] = useLocalStorage("darkmode")

    useEffect(() => {
        if(darkModeState === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkModeState])

    return [darkModeState, setDarkModeState]
}

export default useDarkMode