import { Entry, Experiences } from '../@types/CustomTypes'
import Section from '../components/Section'
import TagCategory from '../components/TagCategory'

interface ToolboxProps {
  title: string
  description: string
  experiences: Experiences
}

export function Toolbox({ title, description, experiences }: ToolboxProps) {
  const categories = BuildCategories(experiences.entries)

  return (
    <Section id="toolbox" title={title} description={description}>
      {categories &&
        Object.keys(categories).map((category, key) => (
          <TagCategory
            key={key}
            title={category}
            listOfTags={categories[category]}
          />
        ))}
    </Section>
  )
}

function BuildCategories(entries: Entry[]) {
  if (!entries) {
    return []
  }

  const dict: any = {}

  entries
    .filter((entry) => entry.jobs?.map((x) => x.techStack).flat())
    .forEach((entry) => {
      entry.jobs
        .map((x) => x.techStack)
        .flat()
        .forEach((stack) => {
          if (!dict[stack.category]) {
            dict[stack.category] = [...stack.stack]
          } else {
            stack.stack.forEach((tech) => {
              if (dict[stack.category].indexOf(tech) === -1) {
                dict[stack.category].push(tech)
              }
            })
          }
        })
    })

  return dict
}
