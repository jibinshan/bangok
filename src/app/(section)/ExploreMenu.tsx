import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ExploreMenu = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#131313] px-4 md:px-12">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-16 md:py-44">
        <h3 className="mb-10 text-center font-montserrat text-base font-[400] uppercase tracking-[1.98px] text-[#DCDCDC]">
          explore menu
        </h3>
        <div className="relative mb-14 mt-20 flex h-full w-full flex-col justify-between gap-12 px-4 md:flex-row md:gap-20">
          <h2 className="absolute -top-32 left-[5%] mt-5 font-montserrat text-7xl font-[400] text-[#262626] md:left-[12%] md:text-[118px]">
            Bangkok
          </h2>
          <div className="z-10 mt-0 flex h-full w-full justify-center md:mt-12 md:w-1/3">
            <Image
              src="/images/home/explore-menu/image1.png"
              width={435}
              height={319}
              alt="1"
              className="h-[250px] w-full max-w-[400px] object-cover md:h-[290px]"
            />
          </div>
          <div className="z-10 flex h-full w-full justify-center md:w-1/3">
            <Image
              src="/images/home/explore-menu/image2.png"
              width={365}
              height={495}
              alt="1"
              className="h-[250px] w-full max-w-[400px] object-cover md:h-[520px]"
            />
          </div>
          <div className="z-10 mt-0 flex h-full w-full justify-center md:mt-40 md:w-1/3">
            <Image
              src="/images/home/explore-menu/image3.png"
              width={439}
              height={320}
              alt="1"
              className="h-[250px] w-full max-w-[400px] object-cover md:h-[290px]"
            />
          </div>
          <h2 className="absolute -bottom-5 right-[25%] z-20 hidden font-montserrat text-8xl font-[400] text-[#FBF5DC] md:block md:text-9xl">
            Menu
          </h2>
        </div>
        <p className="max-w-[600px] px-2 text-center font-manrope font-[300] leading-[160%] tracking-[0.54px] text-[#C1B6A6] md:px-0">
          Bangkok 7 Thai Restaurant&apos;s menu features a delightful array of authentic Thai dishes&comma; including aromatic curries&comma; stir-fries&comma; noodles&comma; and fresh salads&period; Each dish is crafted with high-quality ingredients and bold flavors&comma; offering vegetarian&comma; vegan&comma; and gluten-free options&period;
        </p>
        <Button
          variant="outline"
          className="group mt-6 items-center gap-[1.19rem] rounded-none border-primary bg-transparent px-6 py-7 font-manrope text-sm font-[600] uppercase tracking-[1.96px] text-[#FFF] hover:bg-primary"
          asChild
        >
          <Link href="/table-booking">
            Table Booking
            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ExploreMenu;
