import Image from 'next/image'
import React from 'react'

const WebDesignPage = () => {
  return (
    <section className=''>
      <Image
        src={'/img/services.jpg'}
        alt='services image'
        layout='responsive'
        height={648}
        width={1024}
        objectFit='cover'
      />
      <div className='py-4 flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold '>
          Temporibus et in vero dicta aut eius lidero plastis trand lined
          voluptas dolorem ut voluptas
        </h2>
        <p>
          Blanditiis voluptate odit ex error ea sed officiis deserunt.
          Cupiditate non consequatur et doloremque consequuntur. Accusantium
          labore reprehenderit error temporibus saepe perferendis fuga doloribus
          vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti
          officia qui.
        </p>
        <ul>
          <li><span></span>Aut eum totam accusantium voluptatem.</li>
          <li><span></span>Assumenda et porro nisi nihil nesciunt voluptatibus.</li>
          <li><span></span>Ullamco laboris nisi ut aliquip ex ea</li>
        </ul>
        <p>
          Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
          illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
          pariatur itaque nesciunt fuga.
        </p>
      </div>
    </section>
  )
}

export default WebDesignPage
