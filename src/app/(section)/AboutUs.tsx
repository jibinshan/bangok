
import Image from "next/image";

const text = "About Us"

const AboutUs = () => {
  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center bg-transparent">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 h-full w-full max-w-[1360px]"></div>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="welcome-one font-stone text-xl font-[200] text-primary md:-ml-[50px]">
                Our Story
              </p>
              <p className="non-italic flex items-center justify-center gap-3 text-center font-inter text-4xl font-[300] uppercase text-primary md:text-6xl">
                <Image
                  src="/images/left.png"
                  alt="left"
                  width={44}
                  height={12}
                  className="about-arrow w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
                <span className="head-welcome">
                  {text.split("").map((char, index) => (
                    <span key={index} className="key head-welcome">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <Image
                  src="/images/right.png"
                  alt="right"
                  width={44}
                  height={12}
                  className="about-arrow h-fit w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <div className="flex flex-col items-center gap-5">
              <p className="welcome-two w-full text-center text-[#AAA9A9] md:-ml-[50px] md:w-[530px]">
                Bangkok 7 Thai Restaurant in Kendal offers authentic Thai cuisine crafted with fresh ingredients, blending traditional flavors with a warm, welcoming ambiance.
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-[1300px] grid-cols-1 items-center justify-center gap-9 md:grid-cols-3 md:justify-between">
            <div className="w-full flex justify-center items-center">
              <Image
                src="/images/home/about/i_image1.png"
                alt="right"
                width={407}
                height={570}
                className="about-arrow w-4/5 border-2 border-[#FFD700] object-cover h-[200px] md:h-[507px] md:w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src="/images/home/about/i_image2.png"
                alt="right"
                width={407}
                height={570}
                className="about-arrow w-4/5 border-2 border-[#FFD700] object-cover h-[200px] md:h-[507px] md:w-fit"
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src="/images/home/about/i_image3.png"
                alt="right"
                width={407}
                height={570}
                className="about-arrow w-4/5 border-2 border-[#FFD700] object-cover h-[200px] md:h-[507px] md:w-fit"
                style={{
                  transform: "scale(0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
