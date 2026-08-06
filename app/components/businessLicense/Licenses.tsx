// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function Licenses() {
//   return (
//     <div className="w-full mt-10 h-100 bg-red-100">
//       <Carousel className="w-full">
//         <CarouselContent>
//           <CarouselItem>
//             <div className="w-[200px] h-[200px] bg-green-500">somehin</div>
//           </CarouselItem>
//           <CarouselItem>
//             <div className="w-[200px] h-[200px] bg-green-500">somehin</div>
//           </CarouselItem>
//           <CarouselItem>
//             <div className="w-10 h-10 bg-green-500">somehin</div>
//           </CarouselItem>
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// }

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { license, LicenseType } from "../../../public/data/LicensesData";


export default function Licenses() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl bg-red-500 "
    >
      <CarouselContent>
        {license.map((l: LicenseType, index: number) => (
          <CarouselItem key={index} className="basis-1/4">
            <div className="p-1">
              <div className="relative aspect-square overflow-hidden border-0 p-0">
                <img
                  src={l.URL}
                  alt={`License ${index + 1}`}
                  width={400}
                  height={400}
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
