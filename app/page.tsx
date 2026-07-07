import Hero from "@/app/components/Hero";
import Overview from "@/app/components/Overview";
import KeyFeatures from "@/app/components/KeyFeatures";
import IdealFor from "@/app/components/IdealFor";
import Gallery from "@/app/components/Gallery";
import VideoTour from "@/app/components/VideoTour";
import Location from "@/app/components/Location";
import WhatsAppCTA from "@/app/components/WhatsAppCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <Hero />
        <Overview />
        <KeyFeatures />
        <IdealFor />
        <Gallery />
        <VideoTour />
        <Location />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}
