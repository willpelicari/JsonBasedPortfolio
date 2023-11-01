import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './@types/CustomTypes'
import { DefaultPortfolio, Portfolio } from './@types/CustomTypes'
import './App.css'
import { PortfolioContext } from './contexts/PortfolioContext'
import { ThemeProvider } from './contexts/ThemeContext'
import './i18n/config'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'

function App() {
  const [content, setContent] = useState<Portfolio>(DefaultPortfolio)
  const i18n = useTranslation()[1]

  useEffect(() => {
    fetch('./data/portfolio-' + i18n.language + '.json')
      .then((res) => res.json())
      .then((result) => setContent(result))
  }, [i18n.language])

  return (
    <>
      <ThemeProvider>
        <PortfolioContext.Provider value={content}>
          <Header />
          <Home />
          <Footer />
        </PortfolioContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
