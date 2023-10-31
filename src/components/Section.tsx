import BasicSection, { BasicSectionProps } from './BasicSection'

interface SectionProps extends BasicSectionProps {
  title: string
  description?: string
}

export default function Section({
  id,
  title,
  description,
  children
}: SectionProps) {
  return (
    <BasicSection id={id}>
      <div className="max-w-screen-xl mx-auto">
        <div className="px-4 text-gray-800 dark:text-gray-200">
          <h2 className="text-3xl lg:text-4xl">{title}</h2>
          {description && (
            <p className="mt-6 lg:text-xl mb-10">{description}</p>
          )}
        </div>
        {children}
      </div>
    </BasicSection>
  )
}
