import { createContext, useContext, useState } from 'react'
import { PortfolioContext } from '../App'
import { Career } from './Career'
import Greeting from './Greeting'
import { Toolbox } from './Toolbox'
import Values from './Values'

type FilterContextType = {
  filteredTags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const iFilterContextState = {
  filteredTags: [],
  setTags: () => {}
}

export const FilterContext =
  createContext<FilterContextType>(iFilterContextState)

export default function Home() {
  const content = useContext(PortfolioContext)
  const [filteredTags, setTags] = useState<string[]>([])

  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      {content.greeting && (
        <Greeting
          mainPhotoPath={content.greeting.picture}
          greetingMessage={content.greeting.message}
        />
      )}
      {content.values && <Values content={content.values} />}
      <FilterContext.Provider value={{ filteredTags, setTags }}>
        {content.toolbox && (
          <Toolbox
            title={content.toolbox.title}
            description={content.toolbox.description}
            experiences={content.experiences}
          />
        )}
        {content.experiences && <Career experiences={content.experiences} />}
      </FilterContext.Provider>
    </div>
  )
}
