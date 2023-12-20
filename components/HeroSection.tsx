import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="mb-5 flex">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-5xl text-zinc-700 dark:text-white">Build things from small pieces.</p>
        <Link href="/blog" className="w-fit">
          <button className="button-primary my-5 w-[200px]">Read blogs</button>
        </Link>
      </div>
      <div className="relative grid h-fit w-fit flex-1 place-content-center">
        <Image src="/static/images/hero.png" height={350} width={350} alt="hero-image" />
      </div>
    </section>
  )
}