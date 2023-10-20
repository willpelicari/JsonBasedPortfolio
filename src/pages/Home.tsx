import { Greeting } from './Greeting';
import { Values } from './Values'
import { Toolbox } from './Toolbox'
import { Career } from './Experiences';
import { createContext, useContext, useState } from 'react';
import { PortfolioContext } from '../App';

type FilterContextType = {
    filteredTags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
};

const iFilterContextState = {
    filteredTags: [],
    setTags: () => {}
}

export const FilterContext = createContext<FilterContextType>(iFilterContextState);

export function Home() {
    const content = useContext(PortfolioContext);
    const [filteredTags, setTags] = useState<string[]>([]);

    return (
        <div className="bg-gray-50">
            {content.Greeting && <Greeting mainPhotoPath={content.Greeting.Picture} greetingMessage={content.Greeting.Message}/>}
            {content.Values && <Values content={content.Values} />}
            <FilterContext.Provider value={{filteredTags, setTags}}>
                {content.Toolbox && <Toolbox title={content.Toolbox.Title} description={content.Toolbox.Description} experiences={content.Experiences}/>}
                {content.Experiences && <Career experiences={content.Experiences}/>}
            </FilterContext.Provider>
        </div>
    );
}