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
      className="group relative flex w-full cursor-pointer flex-col rounded-md border border-gray-200 border-opacity-60 bg-gray-50 p-3 transition-transform duration-300 hover:scale-[1.02] dark:border-gray-800 dark:bg-gray-950"
    >
      <h2 className="text-md text-gray-900 group-hover:text-accent-500 dark:text-gray-50 md:text-xl">
        {title}
      </h2>
      <time
        className="invisible absolute right-2 top-2 text-xs text-accent-700 dark:text-accent-400 md:visible md:text-sm"
        dateTime={date}
      >
        {dateToMonthYear(date)}
      </time>
      <p className="md:text-md my-2 block flex-grow text-sm text-gray-600 dark:text-gray-300">
        {summary}
      </p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </Link>
  )
}
