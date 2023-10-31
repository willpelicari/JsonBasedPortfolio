interface CardProps {
  key: number
  title: string
  description: string
  icon: string
}

export default function Card({
  title,
  description,
  icon,
  ...props
}: CardProps) {
  return (
    <div
      key={props.key}
      className="bg-slate-200 dark:bg-slate-800 px-8 py-10 rounded-md"
    >
      <img
        src={icon}
        style={{ maxHeight: 60, maxWidth: 60, marginBottom: 10 }}
        alt="card icon"
      />
      <h4 className="font-medium text-gray-700 dark:text-gray-300 text-lg mb-4">
        {title}
      </h4>
      <p className="font-normal text-gray-500 text-md">{description}</p>
    </div>
  )
}
