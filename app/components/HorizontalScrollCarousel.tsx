'use client';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Bubblething from "./BubbleText";

const Scrollthing = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex h-48 items-center justify-center ">
        
        <span className="font-semibold uppercase text-gray-500">
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center bg-gray-100">
        <span className="font-semibold uppercase bg-gray-100">
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-100">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-red-500" // bg-red-500
      >
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className=" p-8 text-6xl font-black uppercase text-white ">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  

export default Scrollthing;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "../imgs/abstract/1.jpg",
    title: "Increased access to potential partners.",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Expanded Dating Pool",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Convenience",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Flexibility",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Time Efficiency",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Introvert-Friendly",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Safety and privacy controls.",
    id: 7,
  },
];