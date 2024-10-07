'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='absolute text-white z-10 w-full  font-semibold text-xl'>
      <div className='sm:w-2/3 sm:2xl:w-4/5 my-0 mx-auto flex items-center justify-between py-8 px-4 sm:px-0'>
        <a href='#' className='text-4xl'>
          AJARK
        </a>
        <nav className='flex items-center hidden sm:block'>
          <ul className='flex flex-row gap-8'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/services'}>About</Link>
            </li>
            <li className=''>
              <DropdownMenu className='bg-white text-black'>
                <DropdownMenuTrigger>All Services</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup className='bg-white text-black'>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Trainings</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className='bg-white text-black'>
                          <DropdownMenuItem>Soft Skills</DropdownMenuItem>
                          <DropdownMenuItem>Frontend</DropdownMenuItem>
                          <DropdownMenuItem>Backend</DropdownMenuItem>
                          <DropdownMenuItem>FullStack</DropdownMenuItem>
                          <DropdownMenuItem>Testing</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator className='text-black pb-[1px] bg-black' />

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Resumes & CVs
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className='bg-white text-black'>
                          <DropdownMenuItem>CV Review</DropdownMenuItem>
                          <DropdownMenuItem>CV Building</DropdownMenuItem>
                          <DropdownMenuItem>
                            Abroad CV Building
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator className='text-black pb-[1px] bg-black' />
                    <DropdownMenuItem>Career Consultants</DropdownMenuItem>
                    <DropdownMenuItem>Staffing</DropdownMenuItem>
                    <DropdownMenuItem>Outsourcing</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>Contact US</li>
          </ul>
        </nav>
        <div className='text-4xl'>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
