import { Card } from '../@types/CustomTypes'
import { default as CardComponent } from '../components/Card'
import Section from '../components/Section'

interface ValuesProps {
  content: {
    Title: string
    Description: string
    Cards: Card[]
  }
}

export default function Values({ content }: ValuesProps) {
  return (
    <Section
      id="values"
      title={content.Title}
      description={content.Description}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.Cards?.map((card, key) => (
          <CardComponent
            key={key}
            title={card.Title}
            description={card.Description}
            icon={card.Icon}
          />
        ))}
      </div>
    </Section>
  )
}
