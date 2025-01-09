import Image from "next/image";

const Hero = ({}) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "30% center" }}
            src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bangkok-preview.jpg"
          ></video>
        </div>
        <div className="z-50 flex h-full w-full max-w-[1300px] items-center justify-center">
          <div className="flex w-fit flex-col items-end justify-center">
            <h1 className="font-playfair text-7xl font-normal uppercase leading-[80%] sm:text-8xl md:text-9xl lg:text-[11.62rem]">
              Bangkok
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
