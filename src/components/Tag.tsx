import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../contexts/FilterContext'

interface TagProps {
  key: number
  bgColor?: string
  value: string
}

export default function Tag({
  bgColor = 'bg-gray-100 dark:bg-gray-900',
  value,
  ...props
}: TagProps) {
  const filterContext = useContext(FilterContext)
  const [isSelected, setTagAsSelected] = useState(false)

  useEffect(() => {
    setTagAsSelected(filterContext.filteredTags.includes(value))
  }, [filterContext.filteredTags, value])

  function switchTag(value: string): void {
    let filteredTags = [...filterContext.filteredTags]
    const tagPosition = filteredTags.indexOf(value)

    if (tagPosition >= 0) {
      filteredTags.splice(tagPosition, 1)
    } else {
      filteredTags.push(value)
    }

    filterContext.setTags(filteredTags)
  }

  return (
    <button
      onClick={() => switchTag(value)}
      key={props.key}
      className={`m-1 inline-block ${
        isSelected
          ? 'text-green-700 dark:text-green-400 bg-green-500/10 dark:bg-green-950 ring-green-600/20 dark:ring-green-500/20'
          : bgColor
      }  hover:bg-blue-300 dark:hover:bg-blue-700 text-gray-800 dark:text-gray-200 text-md font-medium mr-2 px-2.5 py-0.5 rounded ring-1 ring-inset`}
    >
      {value}
    </button>
  )
}
