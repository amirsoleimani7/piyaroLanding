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

export default function Licenses() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <div className="relative aspect-square overflow-hidden border-0 p-0">
                <img
                  src={`https://picsum.photos/400/400?grayscale&random=${index + 5}`}
                  alt={`Slide ${index + 1}`}
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
