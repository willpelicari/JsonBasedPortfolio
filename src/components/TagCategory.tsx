import Tag from './Tag'

interface TagCategoryProps {
  title: string
  listOfTags: string[]
}

export default function TagCategory({ title, listOfTags }: TagCategoryProps) {
  return (
    <div className="px-12 py-1 mb-4 rounded-md bg-slate-200 dark:bg-slate-800 ">
      <h3 className="lg:text-2xl text-black/70 dark:text-white/70">{title}</h3>
      <div className="flex-wrap p-1 flex flex-row">
        {listOfTags.map((element, key) => (
          <Tag key={key} value={element} />
        ))}
      </div>
    </div>
  )
}
