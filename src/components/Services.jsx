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
    title: 'Skill Development Workshops',
    description: ` Offer workshops focused on essential skills (technical, soft skills, and industry-specific knowledge) to prepare freshers for real-world challenges`,
  },
  {
    id: 2,
    icon: <BsCardChecklist />,
    title: 'Mentorship and Coaching',
    description: ` Connect students with experienced professionals for personalized guidance, helping them navigate their careers and develop industry-specific knowledge`,
  },
  {
    id: 3,
    icon: <BsBarChart />,
    title: 'Project-Based Learning',
    description: `Provide opportunities for students to work on actual client projects, enabling them to apply their skills in a professional setting and showcase their abilities to potential employers`,
  },
  {
    id: 4,
    icon: <BsBinoculars />,
    title: 'Internship Placement Programs',
    description: `Facilitate internship opportunities with MNCs, allowing freshers to gain hands-on experience while companies benefit from fresh perspectives`,
  },
  {
    id: 5,
    icon: <BsSun />,
    title: 'Resume Building and Interview Guidance',
    description: `Offer services that assist students in crafting impactful resumes and preparing for interviews, making them more competitive in the job market`,
  },
  {
    id: 6,
    icon: <BsCalendar4Week />,
    title: 'Talent Outsourcing Solutions for Clients',
    description: `Provide MNCs with access to a pool of trained, enthusiastic freshers, tailored to meet their specific project needs while ensuring quality and reliability`,
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
                className={`flex gap-4 border rounded p-4 shadow ${item.id % 2 === 0 ? 'bg-green-400' : 'bg-red-400'}` }
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
