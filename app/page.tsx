import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Scrollthing from "./components/HorizontalScrollCarousel";
import Bubblething from "./components/BubbleText";
import Footer from "./components/Footer";
import WithSpeechBubbles from "./components/Testimonials";
import CardText from "./components/card";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Bubblething />
      <WithSpeechBubbles />
      <Scrollthing />
      <CardText/>
      <Footer />
    </main>
  );
}
