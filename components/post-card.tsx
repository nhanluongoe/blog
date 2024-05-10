import Link from 'next/link'

import Post from '@/interfaces/Post'
import { dateToMonthYear } from '@/utils/format'

import Tag from './tag'

interface PostProps {
  post: Post
}

export default function PostCard(props: PostProps) {
  const { post } = props
  const { slug, date, title, summary, tags } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative flex w-full cursor-pointer flex-col rounded-md border border-gray-200 border-opacity-60 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-950"
    >
      <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-accent-500 dark:text-gray-50">
        {title}
      </h2>
      <time
        className="absolute right-2 top-2 text-sm text-accent-700 dark:text-accent-400"
        dateTime={date}
      >
        {dateToMonthYear(date)}
      </time>
      <p className="my-2 block flex-grow text-gray-600 dark:text-gray-300">{summary}</p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </Link>
  )
}
