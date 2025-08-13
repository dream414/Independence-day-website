import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image with spiral border animation */}
        <motion.div
          className="relative w-94 h-97 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-green-700 animate-spin-slow"></div>
          <img
            src="/about.png"
            alt="Malik Azam"
            className="w-full h-full object-contain rounded-full border-4 bg-gradient-to-br from-green-100 via-emerald-300 to-green-300 border-green-700 shadow-lg hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          className="text-gray-800 max-w-xl text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Malik Azam — A True National Hero
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Malik Azam played a remarkable role in the freedom and progress of
            Pakistan. He dedicated his life to serving the nation and never
            hesitated to make sacrifices whenever the country needed him. His
            leadership, courage, and love for Pakistan will always remain in our
            hearts.
          </p>
          <p className="text-lg leading-relaxed">
            Today, as we remember his contributions, we pledge to continue his
            mission — to work together for the unity, strength, and prosperity
            of Pakistan.
          </p>
        </motion.div>
      </div>

      {/* Custom animation for slow spin */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}
