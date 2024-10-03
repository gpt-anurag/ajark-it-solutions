import React from 'react'
import { BsCheck2All } from 'react-icons/bs'

const About = () => {
  return (
    <div className='text-black'>
      <div className='w-2/3 2xl:w-4/5 my-0 mx-auto py-16 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <span className='text-black/30 font-bold'>ABOUT</span>
          <div className='w-40 h-[0.5px] bg-red-600'></div>
        </div>
        <h2 className='text-4xl'>
          <span className='font-bold'>ABOUT </span>US
        </h2>
        <div className='text-black/70 flex gap-4 '>
          <div className='flex-1 flex flex-col gap-4'>
            <p>{`We're your go-to source for all things kitchen equipment. From frying & boiling machines to refrigeration units, and everything in between – we've got you covered. Plus, we offer dining and serving essentials like trolleys, storage cabinets, tables, and dishwashing tools.`}</p>
            <ul className='flex flex-col gap-2'>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <p>{`Experience top-notch kitchen solutions with The Perfect Partner – Where Consultation, Design, and Customization Come Together!"`}</p>
              </li>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <p>{`Experience top-notch kitchen solutions with The Perfect Partner – Where Consultation, Design, and Customization Come Together!"`}</p>
              </li>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <p>{`Experience top-notch kitchen solutions with The Perfect Partner – Where Consultation, Design, and Customization Come Together!"`}</p>
              </li>
            </ul>
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <p>{`Kitchen appliance consultancy involves providing expert advice, guidance, and solutions to individuals or businesses in the selection, design, and implementation of kitchen appliances for various purposes. Consultants in this field assist clients in making informed decisions about which appliances to choose based on their specific needs, budget, space constraints, and intended use.`}</p>
            <a href='#' className='font-bold text-brand'>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
