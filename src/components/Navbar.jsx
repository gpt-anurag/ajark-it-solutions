import React from 'react'

const Navbar = () => {
  return (
    <div className='w-2/3 2xl:w-4/5 my-0 mx-auto flex justify-between py-8 px-0'>
      <a href='#'>AJARK</a>
      <nav className=''>
        <ul className='flex flex-row gap-8'>
          <li>Home</li>
          <li>About</li>
          <li>All Services</li>
          <li>Contact US</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
