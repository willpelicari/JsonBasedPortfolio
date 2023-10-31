import { ReactNode } from 'react'

export interface BasicSectionProps {
  id: string
  children: ReactNode
}

export default function BasicSection({ id, children }: BasicSectionProps) {
  return (
    <section className="py-10" id={id}>
      {children}
    </section>
  )
}
