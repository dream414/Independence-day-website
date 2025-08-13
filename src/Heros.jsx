import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const heroes = [
  {
    name: "Quaid-e-Azam Muhammad Ali Jinnah",
    img: "quaid.jpg",
    text: "Founder of Pakistan, a visionary leader who led the nation towards independence with determination and unity."
  },
  {
    name: "Allama Iqbal",
    img: "allama.jpg",
    text: "Poet of the East and philosopher, whose vision inspired Muslims to seek a separate homeland."
  },
  {
    name: "Liaquat Ali Khan",
    img: "liaquat.jpg",
    text: "Pakistan's first Prime Minister, known for his dedication to the country's progress and unity."
  },
  {
    name: "Fatima Jinnah",
    img: "fatima.jpg",
    text: "Leader and activist, known as the Mother of the Nation, who empowered women in Pakistan's freedom struggle."
  },
  {
    name: "Sir Syed Ahmed Khan",
    img: "alikhan.jpg",
    text: "Educational reformer who introduced modern education for Muslims in the subcontinent."
  },
  {
    name: "Maulana Muhammad Ali Johar",
    img: "johar.jpg",
    text: "Freedom fighter and journalist who played a vital role in the political awakening of Muslims."
  }
];

export default function HeroesSlider() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="heros" className="py-16 bg-gradient-to-b from-green-50 to-white h-auto">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">
          Heroes of Pakistan's Independence
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination" // Custom dots
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {heroes.map((hero, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`flex flex-col items-center text-center bg-white p-5 shadow-xl rounded-2xl hover:shadow-green-400 transition-all duration-300 h-[380px] cursor-pointer mt-4 ${
                  activeIndex === index ? "scale-85" : "scale-89"
                }`}
              >
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="w-full h-[200px] object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {hero.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {hero.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
}
