"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707] px-4 md:px-12">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <h3 className="font-400 text-center font-montserrat text-base uppercase tracking-[1.98px] text-[#DCDCDC]">
            Reviews
          </h3>
          <h1 className="mb-6 max-w-[600px] text-center font-montserrat text-5xl font-[400] text-[#FBEAD2] sm:text-6xl md:mb-8">
            Hear Our Guests
          </h1>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-sm border border-[#2C2A28] bg-[#0B0B0B] px-6 py-8 md:basis-1/3"
                  >
                    <div className="flex w-full items-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-[#FBEAD2]">{review.author_name}</p>
                        <span className="text-[#9C9995]">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Icons.star key={index} className="text-primary" />
                      ))}
                    </div>
                    <div className="">
                      <p className="line-clamp-5 text-[#FBEAD2]">
                        {review.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
