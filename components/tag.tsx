import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="inline rounded-md text-sm text-accent-700 hover:text-accent-500 dark:text-accent-400  dark:hover:text-accent-300"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
