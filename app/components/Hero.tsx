'use client'   ; //  strict mode
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <><Navbar /><section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-red-500 font-medium">
          Meet new people everyday
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-black">
          Matching with new people has never been easier
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">

        </p>
        <button className="bg-red-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a partner
        </button>
      </div>
      <div className="my-36"><ShuffleGrid /></div>
      
    </section></>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://c0.wallpaperflare.com/preview/936/184/58/peopletravel-adventure-dating-holiday.jpg",
  },
  {
    id: 2,
    src: "https://www.shutterstock.com/shutterstock/videos/1045314517/thumb/5.jpg?ip=x480",
  },
  {
    id: 3,
    src: "https://www.momjunction.com/wp-content/uploads/2020/07/250-Funny-And-Interesting-Speed-Dating-Questions-To-Ask-Banner-910x1024.jpg",
  },
  {
    id: 4,
    src: "https://czechtheworld.com/wp-content/uploads/2022/07/357-best-speed-dating-questions-to-get-to-know-quickly-8.jpg",
  },
  {
    id: 5,
    src: "https://www.flirtsavvy.com/wp-content/uploads/2019/12/couple-dating-4-1-800x533.jpg",
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/1303739047/video/cant-beat-this-feeling.jpg?s=640x640&k=20&c=JqHghzIHd-NKV_TH2y35MUidhEN9OAGxRt8DNJ3-WD0=",
  },
  {
    id: 7,
    src: "https://media.gettyimages.com/id/1288888209/video/high-angle-close-up-of-women-sitting-on-sofa-using-cell-phone-social-media-dating-app-cedar.jpg?s=640x640&k=20&c=OlAw_9oqoRPfPUebfLOyXcjmfhLVeg11EoG46o0zQjA=",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://www.shutterstock.com/shutterstock/videos/1044486907/thumb/12.jpg?ip=x480",
  },
  {
    id: 10,
    src: "https://www.shutterstock.com/shutterstock/videos/1032303683/thumb/1.jpg?ip=x480",
  },
  {
    id: 11,
    src: "https://cdn.shortpixel.ai/spai/q_lossy+w_780+to_webp+ret_img/flingorlove.com/wp-content/uploads/2022/06/Is-Speed-Dating-Still-A-Thing.png",
  },
  {
    id: 12,
    src: "https://cdn.shortpixel.ai/spai/q_lossy+w_688+to_webp+ret_img/flingorlove.com/wp-content/uploads/2022/06/Speed-dating-in-a-cafe.jpg",
  },
  {
    id: 13,
    src: "https://cdn.shortpixel.ai/spai/q_lossy+w_688+to_webp+ret_img/flingorlove.com/wp-content/uploads/2022/06/a-guy-looks-happy-with-the-girl-on-a-speed-dating-event.jpg",
  },
  {
    id: 14,
    src: "https://cdn.shortpixel.ai/spai/q_lossy+w_688+to_webp+ret_img/flingorlove.com/wp-content/uploads/2022/06/Smiling-young-woman-having-fun-in-a-speed-dating.jpg  ",
  },
  {
    id: 15,
    src: "https://cdn.shortpixel.ai/spai/q_lossy+w_688+to_webp+ret_img/flingorlove.com/wp-content/uploads/2022/06/A-man-in-a-speed-dating-event-looking-very-happy.jpg",
  },
  {
    id: 16,
    src: "https://coolwallpapers.me/th700/5264266-man-woman-couple-love-dating-poc-sparkler-water-caucasian-sunset-dusk-glow-aferican-american-light-fourth-of-july-portrait-model-spring-lake-ocean-creative-commons-images.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;