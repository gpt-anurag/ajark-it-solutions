'use client'

import React, { useCallback } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel'
import FeaturedServices, {
  featured_services_data as data,
} from './FeaturedServices'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'

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
]

const Hero = () => {
  const [emblaApi] = useEmblaCarousel()
  const [api, setApi] = React.useState(emblaApi)

  React.useEffect(() => {
    if (!api) {
      return
    }
  }, [api])

  const onCardClick = (id) => {
    if (api) {
      api.selectedScrollSnap()
      api.scrollTo(id)
    }
  }

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
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
        {/* <Button onClick={onCardClick}>jaskdjflk;asjdfkl</Button> */}
      </Carousel>

      <FeaturedServices onCardClick={onCardClick} />
    </>
  )
}

export default Hero
