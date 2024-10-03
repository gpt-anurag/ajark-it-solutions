import { CarouselNext } from '@/components/ui/carousel'
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

const FeaturedServices = () => {
  return (
    <section className='bg-[#060606] text-white'>
      <div className='relative w-2/3 2xl:w-4/5 my-0 mx-auto '>
        <div className='absolute flex justify-between py-10 bottom-0 z-30'>
          {featured_services_data.map((item) => {
            return (
              <div
                key={item.id}
                className='flex gap-4 cursor-pointer border-y-0 border-white/30 border px-4 pl-6 p-2'
              >
                <div
                  className='text-5xl font-extrabold text-brand'
                  onClick={CarouselNext}
                >
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
      </div>
    </section>
  )
}

export default FeaturedServices
