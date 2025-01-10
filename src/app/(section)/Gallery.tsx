import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Gallery = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070707] pt-10 md:pt-24">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <h3 className="text-center font-montserrat text-sm font-[400] uppercase tracking-[1.98px] text-[#DCDCDC]">
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
              className="gap-[1.19rem] font-playfair text-lg text-white lg:px-[2rem] lg:py-[2.6rem]"
              style={{
                borderRadius: "10rem",
                border: "1px solid, #BC995D",
                background: "rgba(7, 7, 7, 0.26)",
                backdropFilter: "blur(17px)",
              }}
              asChild
            >
              <Link href="https://www.instagram.com/bavettesteakhouse/">
                <Icons.instagram className="text-primary" />
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
