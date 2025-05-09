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
    'Multi-hyphenate specializing in web dev and podcasts based in Southern California. Work with me on your next project!',
  EMAIL: 'mr@marklreyes.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://marklreyes.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/testimonials', label: 'testimonials' },
  { href: '/contact', label: 'contact' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://www.linkedin.com/in/marklreyes', label: 'LinkedIn' },
  { href: 'https://github.com/marklreyes', label: 'GitHub' },
  { href: 'https://calendly.com/markreyes', label: 'Calendly' },
  { href: 'mr@marklreyes.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
