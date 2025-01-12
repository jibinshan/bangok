import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { type FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BookCheck, Dock, Gift, Phone, ShieldQuestion } from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-logo.png"
              width={162}
              height={35}
              alt="Foodo"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start pt-6">
            <Button
              variant="link"
              className={cn(
                "flex w-full justify-start border-b-[1px] border-b-gray-800 p-0 uppercase text-accent text-white",
              )}
              asChild
            >
              <Link href="/menu" className="flex gap-2 py-6">
                <Dock /> <span>Menu</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="flex w-full justify-start border-b-[1px] border-b-gray-800 p-0 uppercase text-accent text-white"
            >
              <Link href="/about-us" className="flex gap-2 py-6">
                <ShieldQuestion /> <span>About</span>{" "}
              </Link>
            </Button>
            <Button
              variant="link"
              className="flex w-full justify-start border-b-[1px] border-b-gray-800 p-0 uppercase text-accent text-white"
              asChild
            >
              <Link href="/contact" className="flex gap-2 py-6">
                <Phone /> <span>Contact</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="flex w-full justify-start border-b-[1px] border-b-gray-800 p-0 px-1 uppercase text-accent text-white"
            >
              <Link href="/table-booking" className="flex gap-2 py-6">
                <BookCheck /> <span>Booking</span>{" "}
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="flex w-full justify-start p-0 uppercase text-accent text-white"
            >
              <Link href="/gift-voucher" className="flex gap-2 py-6">
                <Gift /> <span>Gift Voucher</span>
              </Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
