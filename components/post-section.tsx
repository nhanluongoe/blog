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
      <div className="mb-5 flex items-center justify-between">
        <h1 className="page-title">Latest Posts</h1>
        {posts.length > MAX_DISPLAY && (
          <div className="group flex justify-end text-base leading-6">
            <Link
              href="/blog"
              className="text-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
              aria-label="All posts"
            >
              all posts{' '}
              <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-1">
                {' '}
                &rsaquo;{' '}
              </span>
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 md:gap-4">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          return <PostCard key={post.slug} post={post} />
        })}
      </div>
    </div>
  )
}
