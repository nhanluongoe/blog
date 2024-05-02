import Card from '@/components/card'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="">
        <div className="space-y-2 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10">
            Projects
          </h1>
        </div>
        <div className="container py-8">
          <div className="-m-4 flex flex-wrap items-stretch">
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
