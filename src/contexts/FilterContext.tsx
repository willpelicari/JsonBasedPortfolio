import { createContext } from 'react'
import { FilterContextType } from '../@types/CustomTypes'

const iFilterContextState = {
  filteredTags: [],
  setTags: () => {}
}

export const FilterContext =
  createContext<FilterContextType>(iFilterContextState)
