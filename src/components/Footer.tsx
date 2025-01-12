import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-center gap-12 bg-black px-2 pt-12">
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:gap-12">
        <div className="flex w-full flex-col items-center justify-center gap-2 md:mt-10 md:w-1/3">
          <Image src="/images/logo.png" width={180} height={158} alt="logo" />
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3 md:flex-row md:gap-20">
            <Button
              variant="link"
              className="font-400 w-fit items-center justify-start px-0 py-0 text-start font-montserrat text-sm uppercase tracking-[1.08px] text-[#FBEAD2] text-accent"
              asChild
            >
              <Link href="/about-us">Menu</Link>
            </Button>
            <Button
              variant="link"
              className="font-400 w-fit items-center justify-start px-0 py-0 text-start font-montserrat text-sm uppercase tracking-[1.08px] text-[#FBEAD2]"
              asChild
            >
              <Link href="/contact">About</Link>
            </Button>
            <Button
              variant="link"
              className="font-400 w-fit items-center justify-start px-0 py-0 text-start font-montserrat text-sm uppercase tracking-[1.08px] text-[#FBEAD2]"
              asChild
            >
              <Link href="/table-booking">Contact</Link>
            </Button>
            <Button
              variant="link"
              className="font-400 w-fit items-center justify-start px-0 py-0 text-start font-montserrat text-sm uppercase tracking-[1.08px] text-[#FBEAD2]"
              asChild
            >
              <Link href="/about-us">Booking</Link>
            </Button>
            <Button
              variant="link"
              className="font-400 w-fit items-center justify-start px-0 py-0 text-start font-montserrat text-sm uppercase tracking-[1.08px] text-[#FBEAD2]"
              asChild
            >
              <Link href="/about-us">Gift Voucher </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="w-full">
          <hr className="border-t-1 w-full border-line" />
        </div>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-28">
          <div className="flex flex-col items-center justify-start gap-3">
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-[#fbead2]">
              Contact
            </span>
            <p className="text-center font-manrope text-xs font-[400] text-[#C2B4A0]">
              0151 245 1500 <br /> Info@bavetteliverpool.co.uk <br /> $9
              Allerton Rd, Liverpool L25 7RE
            </p>
          </div>
          <hr className="hidden h-28 w-0.5 bg-line md:block" />
          <div className="relative flex flex-col items-center justify-center">
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-[#fbead2]">
              Location
            </span>
            <p className="mt-2 text-center font-manrope text-xs font-[400] text-[#C2B4A0]">
              45 Deansgate, Manchester, United <br /> Kingdom, M3 2AY.
            </p>
            <div className="relative">
              <div className="absolute left-6 top-9 flex flex-row items-center justify-center gap-4">
                <Image
                  src="/images/location.svg"
                  width={24}
                  height={24}
                  alt="logo"
                  // className="h-4 w-48"
                />
                <p className="font-montserrat text-xs font-[400] uppercase text-[#D8B56B]">
                  Find our Location
                </p>
              </div>
              <Image
                src="/images/frame.svg"
                width={321}
                height={73}
                alt="logo"
                className="h-24 w-56"
              />
            </div>
          </div>
          <hr className="hidden h-28 w-0.5 bg-line md:block" />
          <div className="flex flex-col items-center justify-start gap-3">
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-[#fbead2]">
              Opening Hours
            </span>
            <p className="text-center font-manrope text-xs font-[400] text-[#C2B4A0]">
              Monday–Friday: 8:00 AM – 10:00 PM <br />
              Saturday–Sunday: 9:00 AM – 11:00 PM
            </p>
          </div>{" "}
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-4 md:mr-6 md:w-1/3">
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/insta.svg"
              alt="insta"
              width={41}
              height={42}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/site.svg"
              alt="site"
              width={33}
              height={27}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/google.svg"
              alt="google"
              width={41}
              height={42}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/your-target-page" passHref>
            <Image
              src="/images/home/footer/fb.svg"
              alt="fb"
              width={42}
              height={42}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full">
          <hr className="border-t-1 w-full border-line" />
        </div>
        <div className="flex h-12 w-full flex-row justify-between px-4 py-2 md:px-36">
          <div>
            <span className="text-xs">© 2024 Bangkok</span>
          </div>
          <div>
            <span className="text-xs">Powerd by foodo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
