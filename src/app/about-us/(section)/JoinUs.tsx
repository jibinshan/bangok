import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-playfair text-5xl leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Are you ready to indulge in the best steak of your life? Whether
            it’s an intimate dinner for two or a grand celebration, Bangkok
            invites you to savor the flavors we’ve honed over the years. Allow
            us to reveal what makes dining at Bangkok a truly unforgettable
            experience.
          </p>
          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent px-6 py-6 font-semibold uppercase text-white hover:bg-primary"
          >
            Table Booking{" "}
            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
