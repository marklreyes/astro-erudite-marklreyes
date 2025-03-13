export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Mark L. Reyes',
  DESCRIPTION:
    'astro-erudite is a opinionated, no-frills blogging template—built with Astro, Tailwind, and shadcn/ui.',
  EMAIL: 'mr@marklreyes.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://marklreyes.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://www.linkedin.com/in/marklreyes', label: 'LinkedIn' },
  { href: 'https://github.com/marklreyes', label: 'GitHub' },
  { href: 'mr@marklreyes.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
