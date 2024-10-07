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
            <div className='text-3xl text-brand border p-4 rounded-full mb-2 flex flex-col justify-between'>
              <a
                target='_'
                href='https://www.google.com/maps/dir//Western+Aqua,+Whitefields,+HITEC+City,+Kondapur,+Telangana+500081/@17.4522014,78.2870895,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb93c45446dfcf:0xd4a8392fcd7203ea!2m2!1d78.3694913!2d17.4522184?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
                className=''
              >
                <LuMapPin />
              </a>
            </div>
            <h4 className='text-2xl text-brand font-semibold mb-4'>
              Our Address
            </h4>
            <p>
              12th Floor, Workafella, Western Aqua Building, Opp Tech Mahindra,
              Kondapur, Hyderabad - 500081
            </p>
          </div>
          <div className='col-start-1 col-end-2 row-start-2 row-end-4 bg-white shadow rounded p-4 border flex flex-col items-center justify-start'>
            <div className='text-3xl text-brand border p-4 rounded-full mb-2'>
              <a href='mailto:info@ajarkitsolutions.com?cc=accounts@ajarkitsolutions.com&subject=Enquiry to Connect with AJARK IT Solutions'>
                <BiEnvelope />
              </a>
            </div>
            <h4 className='text-2xl text-brand font-semibold mb-4'>Email</h4>
            <p>info@example.com</p>
          </div>
          <div className='col-start-2 col-end-3 row-start-2 row-end-4 bg-white shadow rounded p-4 border flex flex-col items-center justify-start'>
            <div className='text-3xl text-brand border p-4 rounded-full mb-2'>
              <a href='tel:+91630194972'>
                <FiPhoneCall />
              </a>
            </div>
            <h4 className='text-2xl text-brand font-semibold mb-4'>Call Us</h4>
            <p>+91 630194972</p>
          </div>
          <div className='col-start-3 col-end-5 row-start-1 row-end-4 bg-white shadow rounded p-4 border grid w-full'>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
