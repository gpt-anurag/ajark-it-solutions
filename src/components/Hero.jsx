import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { featured_services_data as data } from './FeaturedServices'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const image_links = [
  {
    id: 1,
    link: '../../public/img/hero-carousel/hero-carousel-1.jpg',
  },
  {
    id: 2,
    link: '/public/img/hero-carousel/hero-carousel-1.jpg',
  },
  {
    id: 3,
    link: '/public/img/hero-carousel/hero-carousel-1.jpg',
  },
  {
    id: 4,
    link: '/public/img/hero-carousel/hero-carousel-1.jpg',
  },
  {
    id: 5,
    link: '/public/img/hero-carousel/hero-carousel-1.jpg',
  },
]

const Hero = () => {
  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className='p-0'>
            <div className='p-0'>
              <Card>
                <CardContent className='flex aspect-auto w-screen items-center justify-center p-0'>
                  <div className='bg-black'>
                    <p className='text-white'>{index}</p>
                    <img
                      src='/img/hero-carousel/hero-carousel-1.jpg'
                      alt='Hero Image'
                      // layout='responsive'
                      width='100%' // Set the width and height for the original aspect ratio
                      height='800px' // Adjust these numbers according to your image's aspect ratio
                      // quality={100} // Optional: control image quality (0 to 100)
                      // priority={true} // Optional: preload the image for better performance
                      className='opacity-50'
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='text-white' />
      <CarouselNext className='text-white' />
    </Carousel>
  )
}

export default Hero
