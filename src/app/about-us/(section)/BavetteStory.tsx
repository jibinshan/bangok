import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="text-center font-playfair text-8xl text-[#262626] md:left-[15%] md:text-8xl">
          The Bangkok
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-playfair text-6xl sm:text-7xl md:text-start">
              Bangkok Restaurant: <br />Thai Flavors
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Bangkok Restaurant was established to bring the vibrant essence of Thai cuisine to diners across the Kendal. Inspired by Thailand’s bustling street food culture and rich culinary heritage, the restaurant preserves the authenticity of traditional recipes while infusing a modern twist. Each dish is crafted with passion, using fresh, high-quality ingredients to capture the bold, aromatic flavors that define Thai food.
              <br />
              <br />
              Bangkok Restaurant offers more than just a meal—it’s a gateway to Thailand’s culinary soul. From the warm, inviting atmosphere to the meticulously curated menu, every element reflects the charm and vibrancy of Bangkok. With a dedication to delivering an authentic and unforgettable dining experience, the restaurant has become a favorite destination for UK food lovers seeking a true taste of Thailand.
            </p>
            <Link href='/table-booking'>
              <Button
                variant="outline"
                className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent px-6 py-6 font-semibold uppercase text-white hover:bg-primary"
              >
                Table Booking{" "}
                <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
              </Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
