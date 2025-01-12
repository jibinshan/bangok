"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const slideData: {
  modelUrl: string;
  price: string;
  name: string;
}[] = [
  {
    name: "Albondigas",
    price: "30",
    modelUrl: "/models/albondigas.glb",
  },
  {
    name: "Bangkok Special Burger",
    price: "40",
    modelUrl: "/models/bavette-special-burger.glb",
  },
  {
    name: "Crispy Steak (asado)",
    price: "50",
    modelUrl: "/models/crispy-steak-(asado).glb",
  },
  {
    name: "King Prawns",
    price: "60",
    modelUrl: "/models/king-prawns.glb",
  },
  {
    name: "Padron Peppers",
    price: "80",
    modelUrl: "/models/padron-peppers.glb",
  },
  {
    name: "Potato And Leek Gratin",
    price: "100",
    modelUrl: "/models/potato-and-leek-gratin.glb",
  },
  {
    name: "Steak Tartare",
    price: "100",
    modelUrl: "/models/steak-tartare.glb",
  },
];

const Special = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707] px-4 py-32 md:px-12 md:py-24">
      <div className="relative flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="absolute right-16 top-24 hidden md:block">
          <p className="font-manrope text-base font-[300] tracking-[0.54px] text-[#C1B6A6]">
            Bavette was born from a passion for <br /> bringing the finest cuts
            of beef to the <br /> table, with a commitment to <br />{" "}
            sustainability.
          </p>
        </div>
        <div className="absolute -top-32 left-32 md:-top-10">
          <div className="flex flex-col justify-start">
            <h3 className="mb-4 font-montserrat text-base font-[400] uppercase tracking-[1.98px] text-[#DCDCDC]">
              Special
            </h3>
            <h1 className="max-w-[600px] font-montserrat text-4xl font-[400] text-[#FBEAD2] md:text-5xl">
              Bangkok <br /> Signature <br /> Steaks
            </h1>
          </div>
        </div>
        {/* <p className="max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0">
          Bangkok was born from a passion for bringing the finest cuts of beef
          to the table, with a commitment to sustainability.
        </p> */}
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Special;
