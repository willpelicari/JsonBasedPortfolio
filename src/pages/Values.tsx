import { Card } from '../@types/CustomTypes'
import { default as CardComponent } from '../components/Card'
import Section from '../components/Section'

interface ValuesProps {
  content: {
    title: string
    description: string
    cards: Card[]
  }
}

export default function Values({ content }: ValuesProps) {
  return (
    <Section
      id="values"
      title={content.title}
      description={content.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.cards?.map((card, key) => (
          <CardComponent
            key={key}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </Section>
  )
}
