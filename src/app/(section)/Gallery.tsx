import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Gallery = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707] pt-10 md:pt-24">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <h3 className="text-center font-montserrat text-base font-[400] uppercase tracking-[1.98px] text-[#DCDCDC]">
          gallery
        </h3>
        <h1 className="text-center font-montserrat text-4xl font-[400] text-[#FBEAD2] md:text-5xl">
          A Glimpse of Bangkok
        </h1>
        <div className="relative mt-4 h-full w-full md:mt-16">
          <Image
            src="/images/home/gallery/gallery.png"
            alt="gallery"
            className="h-full w-full object-cover"
            width={1920}
            height={980}
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <Button
              className="gap-1 px-4 py-8 text-center font-playfair text-base font-[300] leading-none tracking-[1px] text-[#FBEAD2] md:gap-[1.10rem] md:px-[2.5rem] md:py-[2.9rem] md:text-xl"
              style={{
                borderRadius: "10rem",
                border: "1px solid, #BC995D",
                background: "rgba(7, 7, 7, 0.26)",
                backdropFilter: "blur(12px)",
              }}
              asChild
            >
              <Link href="https://www.instagram.com/bavettesteakhouse/">
                <Icons.instagram className="h-8 w-8 text-primary md:h-11 md:w-11" />
                Check out our instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
