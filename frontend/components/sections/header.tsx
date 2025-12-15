"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { navigationLinks } from "@/data/landing-page"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar"

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navItems = navigationLinks.map((link) => ({
    name: link.label,
    link: link.href,
  }))

  return (
    <Navbar className="top-0">
      {/* Desktop navbar */}
      <NavBody>
        <Link href="/" className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm font-normal">
          <Image
            src="/logo.jpeg"
            alt="Agency.io Logo"
            width={30}
            height={30}
            className="rounded-lg object-cover"
          />
          <span className="text-base font-semibold text-slate-900">Agency.io</span>
        </Link>

        <NavItems items={navItems} onItemClick={() => setIsMobileOpen(false)} />

        <div className="hidden items-center gap-3 lg:flex">
          <NavbarButton
            href="#cta"
            variant="dark"
            className="rounded-full bg-violet-600 text-white hover:bg-violet-700"
          >
            Login
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile navbar */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2 px-2 py-1 text-sm font-normal">
            <Image
              src="/logo.jpeg"
              alt="Agency.io Logo"
              width={28}
              height={28}
              className="rounded-lg object-cover"
            />
            <span className="text-base font-semibold text-slate-900">Agency.io</span>
          </Link>

          <MobileNavToggle isOpen={isMobileOpen} onClick={() => setIsMobileOpen((prev) => !prev)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)}>
          <div className="flex w-full flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-4 flex w-full flex-col gap-3">
            <NavbarButton
              href="#work"
              variant="secondary"
              className="w-full bg-transparent shadow-none text-slate-700 hover:text-slate-900"
            >
              View Work
            </NavbarButton>
            <NavbarButton href="#cta" variant="dark" className="w-full">
              Book Call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
