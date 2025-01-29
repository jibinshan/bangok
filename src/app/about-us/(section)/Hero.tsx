import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-playfair text-5xl font-semibold leading-[66px] text-[#fbead2] lg:text-5xl">
                Discover Bangkok: A Feast of Flavors in Every Bite
              </h1>
              <p className="font-manrope font-normal text-[#C1B6A6]">
                Bangkok is a vibrant culinary haven where every dish reflects a blend of tradition and innovation. From bustling street food markets to fine dining experiences, the city offers flavors that captivate your taste buds and tell stories of its rich cultural heritage. Whether it`s the spicy tang of Tom Yum or the sweet indulgence of Mango Sticky Rice, Bangkok truly turns every meal into a masterpiece.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/hero.png"
              width={951}
              height={975}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
