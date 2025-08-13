import React from "react";

export default function IndependenceFooter() {
  return (
    <footer className="bg-green-900 text-white py-6 px-4 md:px-12 relative overflow-hidden mt-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Image */}
        <img
          src="/star.jpg"
          alt="Pakistan Flag Left"
          className="w-20 md:w-28  rounded-full cursor-pointer mb-4 md:mb-0 drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />

        {/* Center Text */}
        <div className="text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 drop-shadow-md">
            🇵🇰 Happy Independence Day! 🇵🇰
          </h2>
          <p className="mt-2 text-sm md:text-lg text-gray-200 leading-relaxed">
            14th August — The day our beloved Pakistan came into existence.  
            Let’s cherish the sacrifices of our heroes and strive for a brighter future! 💚
          </p>
          <p className="mt-2 font-semibold">— From HBQ Family with ❤️</p>
        </div>

        {/* Right Image */}
        <img
          src="/last.png"
          alt="Pakistan Flag Right"
          className="w-20 cursor-pointer md:w-28 mt-4 md:mt-0 drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
    </footer>
  );
}
