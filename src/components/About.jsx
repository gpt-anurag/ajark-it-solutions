import React from 'react'
import { BsCheck2All } from 'react-icons/bs'

const About = () => {
  return (
    <div className='text-black'>
      <div className='sm:w-2/3 sm:2xl:w-4/5 my-0 mx-auto sm:py-16 py-4 px-6 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <span className='text-black/30 font-bold'>ABOUT</span>
          <div className='w-40 h-[0.5px] bg-red-600'></div>
        </div>
        <h2 className='text-4xl intersect:animate-fade-down intersect:animate-once'>
          <span className='font-bold intersect:animate-fade-down intersect:animate-once'>
            ABOUT{' '}
          </span>
          US
        </h2>
        <h3 className='sm:text-center text-3xl font-bold mb-4'>
          We are your one-stop solution
        </h3>
        <div className='text-black/70 flex gap-4 '>
          <div className='flex-1 flex flex-col gap-4'>
            <ul className='grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-8'>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <div className='flex-col'>
                  <h2 className='text-xl font-semibold'>
                    Real-World Experience{' '}
                  </h2>
                  <p>{`Gain hands-on experience by working on actual projects, boosting your resume and confidence`}</p>
                </div>
              </li>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <div className='flex-col'>
                  <h2 className='text-xl font-semibold'>Expert Training </h2>
                  <p>{`Learn from industry professionals through tailored training programs designed to equip you with in-demand skills`}</p>
                </div>
              </li>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <div className='flex-col'>
                  <h2 className='text-xl font-semibold'>Job Opportunities </h2>
                  <p>{`Connect with top companies looking for fresh talent, giving you a direct path to employment after training`}</p>
                </div>
              </li>
              <li className='flex gap-2 '>
                <span className='text-xl mt-1 text-brand'>
                  <BsCheck2All />
                </span>
                <div className='flex-col'>
                  <h2 className='text-xl font-semibold'>
                    Supportive Community{' '}
                  </h2>
                  <p>{` Join a network of like-minded peers and mentors who are dedicated to your success and growth`}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          <a
            href='#'
            className='font-bold bg-brand text-white px-3 py-4 rounded-md hover:bg-brand/60'
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
