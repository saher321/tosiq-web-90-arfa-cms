import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slide1 from "../../assets/images/repairs1.jpg"
const Slider = () => {
    const slides = [
        { id: 1, src: './repairs1.jpg'}
    ]
  return (
      <Carousel className="w-full">
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <img src={slide1} className='rounded-3xl h-[75vh] w-full object-cover' />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <img src={slide1} className='rounded-3xl h-[75vh] w-full object-cover' />
            </div>
          </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default Slider
