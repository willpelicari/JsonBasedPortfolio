import { Section } from '../components/Section'
import { ExperienceEntry } from '../components/ExperienceEntry'
import { useContext } from 'react'
import { FilterContext } from './Home'
import { Tag } from '../components/Tag'
import { Experiences } from '../@types/CustomTypes'

interface CareerProps {
    experiences: Experiences
}

export function Career({ experiences } :CareerProps)
{
    const filterContext = useContext(FilterContext);

    return (
        <Section id="experiences" title={experiences.Title}>
            <div className="mt-10 p-8 mx-auto">
                <div className="flex justify-between mx-2 my-4">
                    {filterContext.filteredTags.length > 0 && <p className="font-bold">Filtering experiences by:  {
                        filterContext.filteredTags.map((tag, key) => <Tag key={key} value={tag} bgColor="bg-gray-100" hoverColor="bg-blue-200" />)
                    }</p> }
                    {/* <p>Showing {} out of {experiences.Entries.length}</p> */}
                </div>
                <ul className="space-y-12">
                    {experiences.Entries && experiences.Entries.map((entry, key) => (
                        <ExperienceEntry key={key} entry={entry}/>
                    ))}
                </ul>
            </div>
        </Section>
    );
}