import 'App.css'
import { PortfolioContext } from 'contexts/PortfolioContext'
import { ThemeProvider } from 'contexts/ThemeContext'
import 'i18n/config'
import Article from 'pages/Article'
import Blog from 'pages/Blog'
import Footer from 'pages/Footer'
import Header from 'pages/Header'
import Home from 'pages/Home'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DefaultPortfolio, Portfolio } from './@types/CustomTypes'

function App() {
  const [content, setContent] = useState<Portfolio>(DefaultPortfolio)
  const i18n = useTranslation()[1]

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    {
      path: '/blog',
      element: <Blog />,
      children: [{ path: '/blog/:filename', element: <Article /> }]
    }
  ])

  useEffect(() => {
    fetch('./data/portfolio-' + i18n.language + '.json')
      .then((res) => res.json())
      .then((result) => setContent(result))
  }, [i18n.language])

  return (
    <ThemeProvider>
      <PortfolioContext.Provider value={content}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </PortfolioContext.Provider>
    </ThemeProvider>
  )
}

export default App
