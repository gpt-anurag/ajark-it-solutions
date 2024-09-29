import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const useful_links = [
  { id: 1, link: 'Home' },
  { id: 2, link: 'About us' },
  { id: 3, link: 'Services' },
  { id: 4, link: 'Terms of service' },
  { id: 5, link: 'Privacy policy' },
]
const services_links = [
  { id: 1, link: 'Web Design' },
  { id: 2, link: 'Training' },
  { id: 3, link: 'Career Consultants' },
  { id: 4, link: 'CV Review' },
]

const socials = [
  { id: 1, icon: <BsTwitterX /> },
  { id: 2, icon: <BsFacebook /> },
  { id: 3, icon: <BsInstagram /> },
  { id: 4, icon: <BsLinkedin /> },
]

const Footer = () => {
  return (
    <div className='bg-[#060606] text-white'>
      <div className='w-2/3 2xl:w-4/5 my-0 py-8 mx-auto flex justify-between'>
        <div className='flex flex-col justify-between'>
          <div>
            <h2>AJARK</h2>
            <br />
            A108 Adam Street <br />
            New York, NY 535022 <br />
            <br />
            <p>
              <span>Phone:</span> +123 3243 45
            </p>
            <p>
              <span>Email:</span> info@example.com
            </p>
          </div>
          <div className='flex justify-between'>
            {socials.map((item) => {
              return <div key={item.id}>{item.icon}</div>
            })}
          </div>
        </div>

        <div className='flex gap-10'>
          <div>
            <h5>Useful Links</h5>
            <ul>
              {useful_links.map((item) => {
                return (
                  <li key={item.id}>
                    <span>&#62;</span> {item.link}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h5>Our Services</h5>
            <ul>
              {services_links.map((item) => {
                return (
                  <li key={item.id}>
                    <span>&#62;</span> {item.link}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60898.52405920879!2d78.36947000000002!3d17.452162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931fa7aa6827%3A0x77727cd7075984e1!2sWorkafella%20Western%20Aqua%2C%20HiTech%20City!5e0!3m2!1sen!2sus!4v1727582024888!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: '0px' }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
