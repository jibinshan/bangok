import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "30% center" }}
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/bangkok-poster.jpg"
          ></video>
        </div>
        <div className="z-50 flex h-full w-full max-w-[1300px] items-center justify-center">
          <div className="flex w-fit flex-col items-end justify-center">
            <h1 className="mt-4 text-center font-montserrat text-6xl font-[400] uppercase leading-[80%] text-[#FBEAD2] sm:text-7xl md:mt-8 md:text-8xl lg:text-9xl">
              Bangkok
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
