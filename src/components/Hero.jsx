'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import FeaturedServices, {
  featured_services_data as data,
} from './FeaturedServices'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const image_links = [
  {
    id: 1,
    link: '/img/hero-carousel/hero-carousel-1.jpg',
  },
  {
    id: 2,
    link: '/img/hero-carousel/hero-carousel-2.jpg',
  },
  {
    id: 3,
    link: '/img/hero-carousel/hero-carousel-3.jpg',
  },
  {
    id: 4,
    link: '/img/hero-carousel/hero-carousel-4.jpg',
  },
  {
    id: 5,
    link: '/img/hero-carousel/hero-carousel-5.jpg',
  },
]

const Hero = () => {
  return (
    <>
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
        <CarouselContent>
          {image_links.map((item) => {
            return (
              <CarouselItem key={item.id}>
                <div className='relative w-screen h-screen overflow-hidden bg-black'>
                  {/* <p className='bg-black text-white z-50'>{item.id}</p> */}
                  <Image
                    src={item.link}
                    alt='hero image'
                    fill
                    objectFit='cover'
                    className='opacity-50'
                  />
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
      <FeaturedServices />
    </>
  )
}

export default Hero
