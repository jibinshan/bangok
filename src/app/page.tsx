import Special from "@/app/(section)/(special)/Special";
import Booking from "@/app/(section)/Booking";
import ExploreMenu from "@/app/(section)/ExploreMenu";
import Gallery from "@/app/(section)/Gallery";
import Hero from "@/app/(section)/Hero";
import Reviews from "@/app/(section)/Reviews";
import WeOffer from "@/app/(section)/WeOffer";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "./(section)/AboutUs";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="fixed" />
        <Hero />
        <AboutUs />
        <ExploreMenu />
        <WeOffer />
        <Special />
        <Booking />
        <Reviews />
        <Gallery />
        {/* <AboutUs /> */}
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2">
        <ViewMenu />
      </div>
    </main>
  );
}
