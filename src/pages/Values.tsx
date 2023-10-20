import { Section } from "../components/Section";
import { Card } from "../components/Card";

type Card = {
    Icon :string,
    Title :string,
    Description :string
}

interface ValuesProps
{
    content: {
        Title :string,
        Description :string,
        Cards :Card[]
    }
}

export function Values({ content }:ValuesProps)
{
    return (
        <Section id="values" title={content.Title} description={content.Description}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                { content.Cards?.map(card => (
                        <Card 
                        title={card.Title} 
                        description={card.Description}
                        icon={card.Icon}
                    />
                ))}
            </div>
        </Section>
    );
}