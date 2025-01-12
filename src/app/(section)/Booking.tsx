import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Booking = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 bg-[#131313] md:flex-row">
        <div className="h-full w-full overflow-hidden md:w-1/2">
          <Image
            src="/images/home/private-dining/dining.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-full w-full rounded-lg md:rounded-none"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center gap-3 p-6 md:w-1/2 md:items-start lg:ml-24">
          <h3 className="font-montserrat text-base font-[400] uppercase tracking-[1.98px] text-[#DCDCDC]">
            Booking
          </h3>
          <h1 className="max-w-[500px] text-center font-montserrat text-4xl font-[400] text-[#FBEAD2] sm:text-6xl md:text-start md:text-5xl">
            Private & <br /> Group Dining
          </h1>
          <p className="mt-4 max-w-[450px] text-center font-manrope text-sm font-[300] leading-[160%] tracking-[0.54px] text-[#C1B6A6] md:text-start">
            At Bangkok, we offer exceptional private and group dining
            experiences tailored to your needs, whether it&apos;s an intimate
            celebration or a lively gathering with friends. Enjoy our exquisite
            menu in a dedicated space, where attentive service and a warm
            atmosphere ensure a memorable occasion for all.
          </p>
          <Button
            variant="outline"
            className="group mt-4 w-fit items-center gap-[1.19rem] rounded-none border-primary bg-transparent px-6 py-7 font-manrope text-sm font-[600] uppercase tracking-[1.96px] text-white hover:bg-primary"
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
      </div>
    </section>
  );
};

export default Booking;
