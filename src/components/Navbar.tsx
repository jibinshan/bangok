"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
// import CartSheet from "@/components/cart/CartSheet";
// import { BetaMenuActive } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex w-full items-center justify-center px-4 lg:px-[130px] lg:pb-5`,
        isScrolled && "bg-black",
        pathname !== "/" && "bg-transparent",
      )}
    >
      <Link href="/" className="flex lg:hidden">
        <Image
          src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-logo.png"
          width={160}
          height={100}
          alt="logo"
          className="h-20 w-32"
        />
      </Link>
      <div
        className={cn(
          "flex h-[10vh] w-full items-center transition-all duration-300 ease-in-out",
          isScrolled && "max-w-[1300px]",
        )}
      >
        <div className="flex h-full w-full items-center justify-between lg:justify-center xl:ml-36">
          <div className="hidden flex-row items-center justify-center gap-[3.80rem] lg:mt-8 lg:flex 2xl:gap-[5.88rem]">
          <Link href="/">
              <Image
                src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-logo.png"
                width={160}
                height={100}
                alt="logo"
                className="h-20 w-32"
              />
            </Link>
            
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/contact">Contact</Link>
            </Button>

            

            {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/table-booking">Table &nbsp; Booking</Link>
            </Button> */}
            {/* <Button
              asChild
              variant="link"
              className="flex items-start justify-center px-0 uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
            <Button
              className="group items-center rounded-none bg-[#fed728] px-6 py-6 font-montserrat text-sm font-[600] uppercase tracking-[1.86px] text-[#282828] hover:bg-[#fed728]"
              variant="secondary"
              asChild
            >
              <Link href="/table-booking" className="text-sm">
                Table Booking
              </Link>
            </Button>
          </div>
          {/* {isScrolled && (
            <div className="hidden items-center justify-center gap-[2.5rem] lg:flex">
              {pathname !== "/" && (
                <CartSheet>
                  <Button
                    variant="ghost"
                    className="px-1 py-1 hover:bg-transparent"
                    disabled={!BetaMenuActive}
                  >
                    <span className="sr-only">Shopping Cart</span>
                    <Icons.shoppingCart />
                  </Button>
                </CartSheet>
              )}
            </div>
          )} */}
        </div>
      </div>
      <div className="flex lg:hidden">
        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Table Booking</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary lg:hidden"
            >
              <span className="sr-only">Table Booking</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
