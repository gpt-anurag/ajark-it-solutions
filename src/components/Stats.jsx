import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { BsJournalRichtext } from 'react-icons/bs'
import { BsHeadset } from 'react-icons/bs'
import { BsPeople } from 'react-icons/bs'

const data = [
  {
    id: 1,
    icon: <BsEmojiSmile />,
    stat_type: 'Clients',
    stat_number: 5,
  },
  {
    id: 2,
    icon: <BsJournalRichtext />,
    stat_type: 'Projects',
    stat_number: 4,
  },
  {
    id: 3,
    icon: <BsHeadset />,
    stat_type: 'Candidates Supported',
    stat_number: 145,
  },
  {
    id: 4,
    icon: <BsPeople />,
    stat_type: 'Team Members',
    stat_number: 32,
  },
]

const Stats = () => {
  return (
    <section className='bg-[#f7f7f7]'>
      <div className='w-2/3 my-0  py-12 mx-auto flex sm:flex-row flex-col sm:gap-0 gap-14 justify-between'>
        {data.map((item) => {
          return (
            <div key={item.id} className='flex flex-col items-center gap-4'>
              <p className='sm:text-4xl text-6xl'>{item.icon}</p>
              <p className='text-5xl text-brand font-bold'>
                {item.stat_number}
              </p>
              <p className='sm:text-lg text-2xl font-semibold'>
                {item.stat_type}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats
