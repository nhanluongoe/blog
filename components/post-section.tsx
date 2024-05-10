import Post from '@/interfaces/Post'
import Link from 'next/link'
import PostCard from './post-card'

const MAX_DISPLAY = 5

interface PostSectionProps {
  posts: Post[]
}

export default function PostSection(props: PostSectionProps) {
  const { posts } = props

  return (
    <div className="mt-12">
      <h1 className="md:leading-14 pb-3 pl-2 text-xl font-bold  tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-3xl">
        Latest Posts
      </h1>

      <div className="grid grid-cols-1 gap-2 md:gap-3">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          return <PostCard key={post.slug} post={post} />
        })}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}
