import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/Home";

interface TagProps {
    key: number,
    bgColor: string,
    hoverColor: string,
    value: string
}

export function Tag({key, bgColor, hoverColor, value}: TagProps)
{
    const filterContext = useContext(FilterContext);

    const [isSelected, setTagAsSelected] = useState(false);

    useEffect(() => {
        setTagAsSelected(filterContext.filteredTags.includes(value));
    }, [filterContext.filteredTags]);
    
    function switchTag(value: string): void {
        let filteredTags = [...filterContext.filteredTags];
        const tagPosition = filteredTags.indexOf(value);

        if (tagPosition >= 0){
            filteredTags.splice(tagPosition, 1);
        } else {
           filteredTags.push(value);
        }

        filterContext.setTags(filteredTags);
        console.log("filtered tags: ", filteredTags);
    }

    return (
        <span onClick={() => switchTag(value)} 
            key={key} className={`m-1 inline-block ${isSelected ? 'bg-green-300' : bgColor} hover:${hoverColor} text-gray-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500`}>
            {value}
        </span>
    );
}