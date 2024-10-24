import { useContext, useEffect, useState } from 'react'
import { Entry } from '../@types/CustomTypes'
import { FilterContext } from '../contexts/FilterContext'
import Tag from './Tag'

interface ExperienceEntryProps {
  key: number
  entry: Entry
}

export default function ExperienceEntry({
  entry,
  ...props
}: ExperienceEntryProps) {
  const consultingText =
    entry?.thirdParty?.ribbonDescription ?? 'consulting for '
  const bgColor = entry?.thirdParty?.ribbonBgColor ?? 'bg-green-400'
  const fontColor = entry?.thirdParty?.ribbonFontColor ?? 'text-black'

  const [showExperience, setShowExperience] = useState(true)
  const filterContext = useContext(FilterContext)

  useEffect(() => {
    if (filterContext.filteredTags.length === 0) {
      setShowExperience(true)
    } else {
      setShowExperience(
        entry.jobs
          .map((x) => x.techStack)
          .flat()
          .map((x) => x.stack)
          .flat()
          .some((tech) => filterContext.filteredTags.includes(tech))
      )
    }
  }, [entry.jobs, filterContext.filteredTags])

  return (
    entry && (
      <li
        className={`${
          !showExperience ? 'hidden' : 'block md:flex'
        } items-start space-x-3 mb-10 bg-slate-200 dark:bg-slate-800 text-black dark:text-white shadow-sm px-4 py-8 rounded`}
      >
        <div key={props.key} className="text-center w-fit mx-auto">
          <a
            href={entry.company.link}
            target="_blank"
            aria-label={entry.company.name}
            rel="noreferrer"
          >
            {
              <img
                src={entry.company.logo}
                style={{
                  width: 150,
                  maxWidth: 150,
                  minHeight: 150,
                  marginRight: 5
                }}
                alt={entry.company.name}
              />
            }
          </a>
          {entry.thirdParty && (
            <div
              className={`px-1 text-xs block font-semibold ${fontColor} ${bgColor}`}
            >
              {consultingText + ' '}
              {entry.thirdParty.name && (
                <a
                  href={entry.thirdParty.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.thirdParty.name}
                </a>
              )}
            </div>
          )}
        </div>
        <div className="grid gap-10">
          {entry.jobs.map((job, key) => (
            <div key={`${props.key}-${key}`} className="space-y-2">
              <div className="flex-col md:flex-row mb-5 flex items-center justify-between space-x-4 mr-4 text-center">
                <h4 className="text-xl md:text-2xl font-semibold">
                  {job.title}
                </h4>
                <span className="text-md md:text-lg whitespace-nowrap">
                  {job.duration}
                </span>
              </div>
              <div className="mb-5">
                {job.techStack
                  .map((x) => x.stack)
                  .flat()
                  .map((element, key) => (
                    <Tag key={key} value={element} />
                  ))}
              </div>
              <div>
                <p className="whitespace-pre-line align-bottom">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </li>
    )
  )
}
