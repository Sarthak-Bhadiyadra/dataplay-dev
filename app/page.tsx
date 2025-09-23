import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import WhoCanApply from "@/components/WhoCanApply";
import Mentors from "@/components/Mentors";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import FellowshipPrograms from "@/components/FellowshipPrograms";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Fellowship Programs Section */}
      <FellowshipPrograms />

      {/* Courses Section */}
      <Courses />

      {/* Mentors Section */}
      <Mentors />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Who Can Apply Section */}
      <WhoCanApply />

      {/* Gallery Section */}
      <Gallery />

      <Footer />
    </>
  );
}
