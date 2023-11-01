import { createContext } from 'react'
import { DefaultPortfolio, Portfolio } from '../@types/CustomTypes'

export const PortfolioContext = createContext<Portfolio>(DefaultPortfolio)
