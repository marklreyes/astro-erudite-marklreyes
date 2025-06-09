import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NAV_LINKS } from '@/consts'
import { Menu } from 'lucide-react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleViewTransitionStart = () => {
      setIsOpen(false)
      // Force scroll unlock on navigation
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    const handleViewTransitionEnd = () => {
      // Ensure scroll is unlocked after navigation completes
      setTimeout(() => {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
      }, 100)
    }

    // Handle scroll lock issues on mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('astro:before-swap', handleViewTransitionStart)
    document.addEventListener('astro:after-swap', handleViewTransitionEnd)

    // Add passive event listener for better mobile performance
    document.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      document.removeEventListener('astro:before-swap', handleViewTransitionStart)
      document.removeEventListener('astro:after-swap', handleViewTransitionEnd)
      document.removeEventListener('touchmove', handleTouchMove)

      // Cleanup any stuck scroll locks
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Handle menu state changes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)

    if (!open) {
      // Ensure scroll is restored when menu closes
      setTimeout(() => {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
      }, 50)
    }
  }

  const handleItemClick = () => {
    setIsOpen(false)

    // Force unlock scroll before navigation
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''

    // Add small delay to ensure the unlock takes effect
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <div ref={menuRef}>
      <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger
          asChild
          onClick={() => {
            setIsOpen((val) => !val)
          }}
        >
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            title="Menu"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-background"
          onCloseAutoFocus={(e) => {
            // Prevent focus issues that can cause scroll lock
            e.preventDefault()
          }}
        >
          {NAV_LINKS.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <a
                href={item.href}
                className="w-full text-lg font-medium capitalize"
                onClick={handleItemClick}
              >
                {item.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileMenu
