import Card from '@/components/card'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="">
        <div className="space-y-2 md:space-y-5">
          <h1 className="page-title">Projects</h1>
        </div>
        <div className="container py-2 md:py-8">
          <div className="-m-4 grid grid-cols-1 flex-wrap items-stretch md:grid-cols-2">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                repo={d.repo}
                description={d.description}
                year={d.year}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
