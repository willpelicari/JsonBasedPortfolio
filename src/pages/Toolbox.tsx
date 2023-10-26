import { Entry, Experiences } from "../@types/CustomTypes";
import { Section } from "../components/Section";
import { TagCategory } from "../components/TagCategory";

interface ToolboxProps {
    title: string,
    description: string,
    experiences: Experiences
}

export function Toolbox({title, description, experiences}:ToolboxProps)
{
    const categories = BuildCategories(experiences.Entries);
    return (
        <Section id="toolbox" title={title} description={description}>
            {categories && Object.keys(categories).map((category, key) => (
                <TagCategory key={key} title={category} listOfTags={categories[category]}/>
            ))}
        </Section>
    );
}

function BuildCategories(entries: Entry[]) {
    if(!entries) {
        return [];
    }

    const dict: any = {};

    entries.filter(entry => entry.Job && entry.Job.TechStack).forEach(entry => {
        entry.Job.TechStack.forEach(stack => {
            if(!dict[stack.Category]) {
                dict[stack.Category] = [...stack.Stack]
            } else {
                stack.Stack.forEach(tech => {
                    if(dict[stack.Category].indexOf(tech) === -1) {
                        dict[stack.Category].push(tech);
                    }
                })
            }
        }) 
    });

    return dict;
}