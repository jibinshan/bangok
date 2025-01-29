"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";


const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({ }) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707] px-4 py-32 md:px-12 md:py-24">
      <div className="relative flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="absolute right-16 top-24 hidden md:block">
          <p className="font-manrope text-base font-[300] tracking-[0.54px] text-[#C1B6A6]">
            Bangkok7 was born from a passion for <br /> bringing the finest thai
            food to the <br /> table, with a commitment to <br />{" "}
            sustainabile ingredients.
          </p>
        </div>
        <div className="absolute -top-32 left-2 md:-top-10 md:left-32">
          <div className="flex flex-col justify-start">
            <h3 className="mb-4 text-center font-montserrat text-base font-[400] uppercase tracking-[1.98px] text-[#DCDCDC] md:text-start">
              Special
            </h3>
            <h1 className="max-w-[350px] text-center font-montserrat text-4xl font-[400] text-[#FBEAD2] md:text-start md:text-5xl">
              Bangkok Signature Foods
            </h1>
          </div>
        </div>
        {/* <p className="max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0">
          Bangkok was born from a passion for bringing the finest cuts of beef
          to the table, with a commitment to sustainability.
        </p> */}
        {modelData && (
          <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Special;
