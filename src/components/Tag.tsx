import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/Home";

interface TagProps {
    key: number,
    bgColor: string,
    hoverColor: string,
    value: string
}

export function Tag({bgColor, hoverColor, value, ...props}: TagProps)
{
    const filterContext = useContext(FilterContext);
    const [isSelected, setTagAsSelected] = useState(false);

    useEffect(() => {
        setTagAsSelected(filterContext.filteredTags.includes(value));
    }, [filterContext.filteredTags, value]);
    
    function switchTag(value: string): void {
        let filteredTags = [...filterContext.filteredTags];
        const tagPosition = filteredTags.indexOf(value);

        if (tagPosition >= 0){
            filteredTags.splice(tagPosition, 1);
        } else {
           filteredTags.push(value);
        }

        filterContext.setTags(filteredTags);
    }

    return (
        <button onClick={() => switchTag(value)} 
            key={props.key} className={`m-1 inline-block ${isSelected ? 'bg-green-300' : bgColor}  hover:bg-blue-300 text-gray-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500`}>
            {value}
        </button>
    );
}