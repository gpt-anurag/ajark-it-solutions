import Image from 'next/image'
import React from 'react'

const SoftSkills = () => {
  return (
    <section className="">
      <div className="flex w-full justify-center gap-20">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/softskills.svg"}
            alt="softskills"
            width={400}
            height={400}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#35550d]">
            Softskills
          </figcaption>
        </figure>
        
      </div>
    </section>
  )
}

export default SoftSkills