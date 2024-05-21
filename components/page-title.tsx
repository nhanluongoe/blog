import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="md:leading-14 text-2xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-4xl">
      {children}
    </h1>
  )
}
