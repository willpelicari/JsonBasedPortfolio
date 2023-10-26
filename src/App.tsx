import './App.css';
import './i18n/config';
import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './@types/CustomTypes'
import { DefaultPortfolio, Portfolio } from './@types/CustomTypes';

export const PortfolioContext = createContext<Portfolio>(DefaultPortfolio);

function App() {

  const [content, setContent] = useState<Portfolio>(DefaultPortfolio);
  const i18n = useTranslation()[1];
  
  useEffect(() => {
    fetch("./data/portfolio-" + i18n.language + ".json")
    .then(res => res.json())
    .then(result => setContent(result));
  }, [i18n.language])

  return (
    <>
      <PortfolioContext.Provider value={content}>
        <Header />
        <Home />
        <Footer />
      </PortfolioContext.Provider>
    </>
  );
}

export default App;
