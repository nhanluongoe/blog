import Link from './link'

const Card = async ({ title, description, href, year, repo }) => {
  const { stargazers_count: numOfStars } = await (
    await fetch(`https://api.github.com/repos/nhanluongoe/${repo}`, {
      next: { revalidate: 60 * 60 }, // revalidate every 1 hour
    })
  ).json()

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div className="overflow-hidden rounded-md border border-gray-200 border-opacity-60 bg-gray-50 dark:border-gray-900 dark:bg-gray-950">
        <div className="p-3">
          <div className="flex justify-between pb-2">
            <time className="text-accent-500">{year}</time>
            <div>
              <span className="text-gray-900 dark:text-gray-300">{numOfStars}</span> ⭐️
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold leading-5 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-900 dark:text-gray-300">{description}</p>
          {href && (
            <Link
              href={href}
              className="rounded-lg border border-gray-200 px-2 py-1 font-medium leading-6 hover:border-gray-900 dark:border-gray-900 dark:hover:border-gray-200"
              aria-label={`Link to ${title}`}
            >
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
