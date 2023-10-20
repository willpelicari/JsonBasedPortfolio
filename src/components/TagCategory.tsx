import { Tag } from "./Tag";

interface TagCategoryProps {
    title: string,
    listOfTags: string[]
}

export function TagCategory({title, listOfTags}: TagCategoryProps)
{
    return (
        <div className="px-12 py-1 mb-4 rounded-md bg-gray-100">
            <h3 className="lg:text-2xl">{title}</h3>
            <div className="flex-wrap p-1 flex flex-row">
                {listOfTags.map((element, key) => 
                    <Tag key={key} bgColor="bg-gray-100" hoverColor="bg-blue-200" value={element} />
                )}
            </div>
        </div>
    );
}