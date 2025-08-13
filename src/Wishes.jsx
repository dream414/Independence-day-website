import { motion } from "framer-motion";
import { useState } from "react";

export default function Wishes() {
  const [zoom, setZoom] = useState(false);

  return (
    <section id="wish" className="relative py-20 px-6 bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-gray-900 overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/dil.png')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
        
        {/* Heart Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            onClick={() => setZoom(!zoom)}
            className="cursor-pointer border-4 border-amber-50 hover:border-emerald-800 transition-all duration-500 flex justify-center items-center bg-white rounded-full shadow-lg overflow-hidden"
            style={{
              width: zoom ? "380px" : "320px",
              height: zoom ? "380px" : "320px",
            }}
          >
            <img
              src="/dil.png" // Transparent background wali heart PNG
              alt="Heart"
              className="w-full h-full object-cover mt-7"
            />
          </div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          className="md:w-1/2 text-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 via-green-900 to-green-700 bg-clip-text text-transparent">
            A Heartfelt Message from HBQ Family 🇵🇰
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-800">
            On behalf of the <strong>HBQ Family</strong>, we wish you a joyful{" "}
            <strong>14th August</strong>! Let’s celebrate the independence of
            our beloved Pakistan with unity, pride, and love.  
            <span className="text-green-700 font-semibold block"> Pakistan Zindabad! 💚</span>
          </p>

          <button className="px-8 py-3 bg-green-500 hover:bg-yellow-400 rounded-full text-white font-semibold shadow-lg transition-all transform hover:scale-105">
           👈 Click This Heart Flag
          </button>
        </motion.div>
      </div>
    </section>
  );
}
