import React from 'react'
import {
  BsBinoculars,
  BsBriefcase,
  BsCalendar4Week,
  BsSun,
  BsBarChart,
  BsCardChecklist,
} from 'react-icons/bs'

const data = [
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
  {
    id: 4,
    icon: <BsBinoculars />,
    title: 'Lorem Ipsum',
    description: `Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`,
  },
  {
    id: 5,
    icon: <BsSun />,
    title: 'Lorem Ipsum',
    description: `Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`,
  },
  {
    id: 6,
    icon: <BsCalendar4Week />,
    title: 'Lorem Ipsum',
    description: `Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`,
  },
]

const Services = () => {
  return (
    <div className='text-black'>
      <div className='w-2/3 2xl:w-4/5 my-0 mx-auto py-16 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <span className='text-black/30 font-bold'>SERVICES</span>
          <div className='w-40 h-[0.5px] bg-red-600'></div>
        </div>
        <h2 className='text-4xl mb-8'>
          <span className='font-bold'>OUR </span>SERVICES
        </h2>
        <div className='grid grid-cols-2 grid-rows-3 gap-4 '>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className='flex gap-4 border rounded p-4 shadow'
              >
                <div className='text-brand text-4xl mt-1'>{item.icon}</div>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-2xl font-semibold'>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
