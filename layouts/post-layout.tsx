import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/comments'
import Link from '@/components/link'
import PageTitle from '@/components/page-title'
import SectionContainer from '@/components/section-container'
import Tag from '@/components/tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/scroll-top-and-comment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="divide-dashed xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div className="text-start">
                <Link
                  href={`/${basePath}`}
                  className="text-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
                  aria-label="Back to the blog"
                >
                  &larr; Back
                </Link>
              </div>
              <div>
                <PageTitle>{title} </PageTitle>
              </div>
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="font-small text-base leading-6 text-gray-900 dark:text-gray-900">
                    <time
                      dateTime={date}
                      className="md:text-md text-sm text-gray-900 dark:text-gray-500"
                    >
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              {tags && (
                <div className="my-2 flex flex-wrap justify-center">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}
            </div>
          </header>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
          </div>
        </div>
      </article>
      <Comments />
    </SectionContainer>
  )
}
