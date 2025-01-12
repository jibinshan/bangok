"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import CartSheet from "@/components/cart/CartSheet";
import { BetaMenuActive } from "@/lib/constants";
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
        `${position} top-0 z-50 flex w-full px-4 md:px-[130px] justify-center items-center md:ml-4`,
        isScrolled && "bg-black",
        pathname !== "/" && "bg-black"
      )}
    >
      <Link href="/" className="flex md:hidden">
        <Image
          src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-logo.png"
          width={160}
          height={100}
          alt="logo"
          className="w-28"
        />
      </Link>
      <div
        className={cn(
          "flex h-[10vh] w-full items-center transition-all duration-300 ease-in-out",
          isScrolled && "max-w-[1300px]",
        )}
      >
        <div className="flex h-full w-full items-center justify-between md:justify-end">

          <div className="hidden flex-row items-center justify-center gap-[5.88rem] md:mt-8 md:flex">
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/menu">Menu</Link>
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

            <Link href="/">
              <Image
                src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-logo.png"
                width={160}
                height={100}
                alt="logo"
                className="w-28"
              />
            </Link>

            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/table-booking">Booking</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent flex justify-center items-start"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button>
            <Button
              className="group items-center rounded-none bg-primary px-6 py-6 font-montserrat text-sm font-[600] uppercase tracking-[1.86px] text-[#282828] hover:bg-primary"
              variant="secondary"
              asChild
            >
              <Link href="/menu" className="text-sm">
                View Menu
              </Link>
            </Button>
          </div>
          {isScrolled && (
            <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
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
          )}
        </div>
      </div>
      <div className="flex md:hidden">
        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
