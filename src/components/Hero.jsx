"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FeaturedServices, {
  featured_services_data as data,
} from "./FeaturedServices";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import useEmblaCarousel from "embla-carousel-react";

const image_links = [
  {
    id: 1,
    link: "/img/hero-carousel/hero-carousel-1.jpg",
  },
  {
    id: 2,
    link: "/img/hero-carousel/hero-carousel-2.jpg",
  },
  {
    id: 3,
    link: "/img/hero-carousel/hero-carousel-3.jpg",
  },
];

const Hero = () => {
  const [emblaApi] = useEmblaCarousel();
  const [api, setApi] = React.useState(emblaApi);

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const onCardClick = (id) => {
    if (api) {
      api.selectedScrollSnap();
      api.scrollTo(id);
    }
  };

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
                <div className="relative h-screen w-screen overflow-hidden bg-black">
                  <Image
                    src={item.link}
                    alt="hero image"
                    fill
                    objectFit="cover"
                    className="opacity-50"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <FeaturedServices onCardClick={onCardClick} />
    </>
  );
};

export default Hero;
