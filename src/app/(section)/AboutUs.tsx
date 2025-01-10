import { Icons } from "@/components/Icon";
import ModelBox from "@/components/ModelBox";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const slideData: {
  ModelUrl: string;
}[] = [
  {
    ModelUrl: "/models/albondigas.glb",
  },
  {
    ModelUrl: "/models/steak-tartare.glb",
  },
  {
    ModelUrl: "/models/king-prawns.glb",
  },
];

const AboutUs = () => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 pb-32 pt-32">
        <h3 className="font-montserrat text-center text-sm font-[400] uppercase tracking-[1.98px] text-[#DCDCDC]">
          About Us
        </h3>
        <h1 className="font-montserrat text-center text-3xl font-[400] tracking-[1.48px] text-[#FBEAD2] sm:text-6xl">
          Welcome to Bangkok. <br />A steakhouse experience. <br />A doorway to
          perfection.
        </h1>
        <Button
          variant="outline"
          className="group mt-10 items-center gap-[1.19rem] rounded-none border-primary py-7 font-semibold uppercase text-white hover:bg-primary lg:z-40"
        >
          <Link
            href="/table-booking"
            className="flex items-center gap-[1.19rem]"
          >
            Book Table{" "}
            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
