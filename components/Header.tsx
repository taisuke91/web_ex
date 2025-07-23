"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="z-50">
          <Image src="/logo.svg" alt="NOIR Logo" width={120} height={32} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>
        </div>
      </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
            "md:hidden fixed top-0 left-0 w-full h-screen bg-background transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
            <nav className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-2xl font-medium uppercase tracking-wider transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
        </div>
    </header>
  )
}

