import React from 'react'
import { LuMapPin } from 'react-icons/lu'
import { BiEnvelope } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
// import Form from './ContactUsForm'
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
  return (
    <div className='text-black/80 bg-[#f6f9fd]'>
      <div className='w-2/3 2xl:w-4/5 my-0 mx-auto py-16 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <span className='text-black/30 font-bold uppercase'>Contact</span>
          <div className='w-40 h-[0.5px] bg-red-600'></div>
        </div>
        <h2 className='text-4xl mb-8'>
          <span className='font-bold'>CONTACT </span>US
        </h2>
        <div className='grid grid-cols-4 grid-rows-2 gap-8 justify-between'>
          <div className='col-start-1 col-end-3 row-start-1 row-end-1 bg-white shadow rounded p-4 border flex flex-col items-center'>
            <div className='text-3xl text-brand border p-4 rounded-full mb-2'>
              <LuMapPin />
            </div>
            <h4 className='text-2xl text-brand font-semibold'>Our Address</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className='col-start-1 col-end-2 row-start-2 row-end-4 bg-white shadow rounded p-4 border flex flex-col items-center'>
            <div className='text-3xl text-brand border p-4 rounded-full mb-2'>
              <BiEnvelope />
            </div>
            <h4 className='text-2xl text-brand font-semibold'>Email</h4>
            <p>info@example.com</p>
          </div>
          <div className='col-start-2 col-end-3 row-start-2 row-end-4 bg-white shadow rounded p-4 border flex flex-col items-center'>
            <div className='text-3xl text-brand border p-4 rounded-full mb-2'>
              <FiPhoneCall />
            </div>
            <h4 className='text-2xl text-brand font-semibold'>Call Us</h4>
            <p>+1 5589 55488 55</p>
            <p>+1 5589 55488 55</p>
          </div>
          <div className='col-start-3 col-end-5 row-start-1 row-end-4 bg-white shadow rounded p-4 border'>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
