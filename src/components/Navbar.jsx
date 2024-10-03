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

const Navbar = () => {
  return (
    <div className='absolute z-20 w-full text-white font-semibold text-xl'>
      <div className='w-2/3 2xl:w-4/5 my-0 mx-auto flex justify-between py-8 px-0'>
        <a href='#' className='text-4xl'>
          AJARK
        </a>
        <nav className='flex items-center'>
          <ul className='flex flex-row gap-8'>
            <li>Home</li>
            <li>About</li>
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
      </div>
    </div>
  )
}

export default Navbar
