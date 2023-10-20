import { ComponentType, SVGAttributes } from "react";

interface CardProps {
    title: string,
    description: string,
    icon: string
}

export function Card({title, description, icon}: CardProps)
{
    return (
        <div className="bg-gray-100 px-8 py-10 rounded-md">
            <img src={icon} style={{maxHeight: 60, maxWidth: 60, marginBottom: 10}}/>
            <h4 className="font-medium text-gray-700 text-lg mb-4">{title}</h4>
            <p className="font-normal text-gray-500 text-md">{description}</p>
        </div>
    );
}