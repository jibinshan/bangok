import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({ }) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="absolute w-full h-full bg-black/50"
      />
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row z-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-playfair text-5xl leading-[60px]">
            Join Us for an Unforgettable Thai Experience
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] tracking-[2px]">
            Are you ready to indulge in the finest Thai cuisine in Kendal? Whether it’s a cozy dinner for two or a lively celebration, Bangkok 7 Thai Restaurant invites you to savor the authentic flavors we’ve perfected over the years. Let us show you why dining at Bangkok 7 is a truly unforgettable experience filled with the vibrant essence of Thailand.
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
    </section >
  );
};

export default JoinUs;
