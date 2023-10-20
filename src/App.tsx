import './App.css';
import './i18n/config';
import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './@types/CustomTypes'
import { DefaultPortfolio, Portfolio } from './@types/CustomTypes';

export const PortfolioContext = createContext<Portfolio>(DefaultPortfolio);

function App() {

  const [content, setContent] = useState<Portfolio>(DefaultPortfolio);
  const [t, i18n] = useTranslation();
  
  useMemo(() => {
    console.log("using language: ", i18n.language);
    fetch("./portfolio-" + i18n.language + ".json")
    .then(res => res.json())
    .then(result => setContent(result));
  }, [i18n.language])

  useEffect(() => console.log("content changed: ", content), [content]);

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
