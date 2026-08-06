"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'

import { license, LicenseType } from "../../../public/data/LicensesData";

export default function Licenses() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({delay : 1000})
      ]}     
      className="w-full max-w-3xl bg-red-500 mt-auto"
    >
      <CarouselContent>
        {license.map((l: LicenseType, index: number) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <div className="relative aspect-square overflow-hidden border-0 p-0">
                <img
                  src={l.URL}
                  alt={`License ${index + 1}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  );
}
