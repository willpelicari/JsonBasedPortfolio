import { ReactNode, createContext, useEffect, useState } from 'react'
import { Themes } from '../@types/CustomTypes'

type ThemeContextType = {
  theme: Themes | null
  setTheme: (theme: Themes) => void
}
const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {}
})

interface ThemeProviderProviderProps {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProviderProps) {
  const [theme, setTheme] = useState<Themes | null>(null)

  function fallBackTheme() {
    switch (localStorage.theme) {
      case Themes.light:
        setTheme(Themes.light)
        break
      case Themes.dark:
        setTheme(Themes.dark)
        break
      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme(Themes.dark)
        } else {
          setTheme(Themes.light)
        }
        break
    }
  }

  useEffect(() => {
    switch (theme!) {
      case Themes.light:
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        break
      case Themes.dark:
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        break
      default:
        fallBackTheme()
        break
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
