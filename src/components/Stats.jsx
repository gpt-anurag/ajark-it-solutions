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
      <div className='w-2/3 my-0  py-12 mx-auto flex justify-between'>
        {data.map((item) => {
          return (
            <div key={item.id} className='flex flex-col items-center gap-4'>
              <p className='text-4xl'>{item.icon}</p>
              <p className='text-5xl text-brand font-bold'>
                {item.stat_number}
              </p>
              <p className='text-lg font-semibold'>{item.stat_type}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats
