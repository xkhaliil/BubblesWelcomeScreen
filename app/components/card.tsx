"use client"; //  strict mode
import { motion } from "framer-motion";
const CardText = () => {
  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3 className="text-indigo-600 font-semibold">
            Be a Bubble
          </h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Join the bubble community
          </p>
          <p className="text-gray-600">
            Welcome to Bubbles, where the world of dating is about to get a
            little more exciting. Our mission is to create a fun and dynamic
            platform for singles to connect, mingle, and find the bubbles of
            love in a world of possibilities. With Bubbles, you can burst
            through the barriers of traditional dating and embark on an
            adventure that's as unique as you are. Whether you're seeking a
            soulmate, a casual companion, or a lifelong friend, Bubbles is here
            to help you make meaningful connections. Get ready to dive into a
            sea of opportunities and let your love story begin to bubble up!
          </p>
        </div>
        <div className="px-20 ml-96 mt-28">
        <Card />
        </div>
      </div>
    </section>
  );
};


const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-red-500 p-8"
    >
      <div className="relative z-10 text-white">
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          Join Bubbles?
          <br />
        </motion.span>
        <p>Create an account and start swipping to find your perfect match</p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Sign up
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default CardText;
