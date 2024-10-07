'use client'

import Link from 'next/link'
import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { BsCardChecklist } from 'react-icons/bs'
import { BsBarChart } from 'react-icons/bs'

export const featured_services_data = [
  {
    id: 1,
    icon: <BsBriefcase />,
    title: 'Lorem Ipsum',
    description: `Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`,
  },
  {
    id: 2,
    icon: <BsCardChecklist />,
    title: 'Lorem Ipsum',
    description: `Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`,
  },
  {
    id: 3,
    icon: <BsBarChart />,
    title: 'Lorem Ipsum',
    description: `Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`,
  },
]

const FeaturedServices = ({ onCardClick }) => {
  return (
    <section className='bg-[#060606]/50 text-white absolute bottom-0'>
      <div className='sm:w-2/3 sm:2xl:w-4/5 my-0 mx-auto flex sm:flex-row flex-col justify-between sm:py-10 py-0 gap-0'>
        {featured_services_data.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                onCardClick(item.id - 1)
              }}
              className={`flex gap-4 cursor-pointer  p-4 hover:bg-white/10 ${
                item.id === 2
                  ? 'border-2 border-white/30 sm:border-y-0 border-x-0'
                  : ''
              }`}
            >
              <div className='text-5xl font-extrabold text-brand'>
                {item.icon}
              </div>
              <div className='flex flex-col gap-4'>
                <h4 className='font-semibold text-2xl hover:text-brand'>
                  {item.title}
                </h4>
                <p className='text-white/80'>{item.description}</p>
                <Link href={'#'} className='text-white/70 hover:text-brand'>
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedServices
