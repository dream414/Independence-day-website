import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <>
      {/* Confetti effect */}
      {showConfetti && <Confetti />}

      <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{ backgroundImage: "url('/1.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4 text-center">
          <div className="text-white max-w-3xl">
            {/* Motion heading */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              HAPPY Independence Day To All Of You
              <br /> From HBQ Computer Institute Family
            </motion.h1>

            {/* Motion paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="mt-8 sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Celebrating the spirit of Freedom with Love From HBQ Family,
              Wishing You a Joyous Independence Day.
            </motion.p>

            {/* Motion button */}
            <motion.button
              type="button" // React best practice
              onClick={() => setShowConfetti(true)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 px-6 py-3 bg-green-500 hover:bg-yellow-400 cursor-pointer transition-all rounded-full text-white font-semibold shadow-lg text-lg"
            >
              🎉 Celebrate Now Click Here 👇
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
