import { useContext } from 'react'
import { Experiences } from '../@types/CustomTypes'
import ExperienceEntry from '../components/ExperienceEntry'
import Section from '../components/Section'
import Tag from '../components/Tag'
import { FilterContext } from '../contexts/FilterContext'

interface CareerProps {
  experiences: Experiences
}

export function Career({ experiences }: CareerProps) {
  const filterContext = useContext(FilterContext)

  return (
    <Section id="experiences" title={experiences.title}>
      <div className="mt-10 mx-auto text-black dark:text-white">
        <div className="flex justify-between mx-2 my-4">
          {filterContext.filteredTags.length > 0 && (
            <p className="font-bold">
              Filtering experiences by:{' '}
              {filterContext.filteredTags.map((tag, key) => (
                <Tag key={key} value={tag} />
              ))}
            </p>
          )}
          {/* <p>Showing {} out of {experiences.Entries.length}</p> */}
        </div>
        <ul className="space-y-12">
          {experiences.entries?.map((entry, key) => (
            <ExperienceEntry key={key} entry={entry} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
