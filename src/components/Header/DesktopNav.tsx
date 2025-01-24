"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about-us"
    },
    {
        name: "contact Us",
        path: "/contact-us"
    },
]
const DesktopNav = () => {
  const pathname = usePathname()

  return (
    <nav className='flex gap-8 capitalize font-urbanist '>
      {
        links.map((link, index) => (
            <Link href={link.path} key={index} className={`${link.path === pathname ? "dark:text-white text-red-700" : "text-blue-700 font-bold text-base"} transition-all`}>
            {link.name}
            </Link>
        ))
      }
    </nav>
  )
}

export default DesktopNav
