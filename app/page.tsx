'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const artworkImages = [
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
    "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    "https://images.unsplash.com/photo-1580421770402-e0c17229e16a?w=800",
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800",
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800",
    "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800",
    "https://images.unsplash.com/photo-1577985051167-0d49eec21977?w=800",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Plus visuel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Grille d'images en arrière-plan */}
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-1">
          {artworkImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative w-full h-full"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white/95" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="font-serif text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
              Léopold Schwarz
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-neutral-900 to-transparent rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-neutral-700 mb-12 font-light"
          >
            Artiste Multidisciplinaire • Paris
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="group relative px-10 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 font-medium">Découvrir le Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group relative px-10 py-4 border-2 border-neutral-900 rounded-full overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 text-neutral-900 group-hover:text-white font-medium transition-colors">Me Contacter</span>
              <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neutral-900 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-neutral-900 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Grille d'œuvres immersive */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">Œuvres Récentes</h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-neutral-900 to-transparent rounded-full" />
          </motion.div>

          {/* Grille Masonry */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artworkImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.98, y: -5 }}
                className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{
                  height: index % 5 === 0 ? '400px' : index % 3 === 0 ? '300px' : '250px'
                }}
              >
                <Image
                  src={img}
                  alt={`Artwork ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Œuvre {index + 1}</p>
                    <p className="text-sm text-neutral-200">2024</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full hover:shadow-2xl transition-all duration-300"
            >
              <span className="font-medium">Voir Tout le Portfolio</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section À Propos avec images */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
                  <Image src="https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=400" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl -mt-8">
                  <Image src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1580421770402-e0c17229e16a?w=400" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl font-bold mb-6">Artiste Multidisciplinaire</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-neutral-900 to-neutral-600 rounded-full mb-8" />
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Né en 1993 à Paris, je pratique la peinture, l'illustration et la sculpture
                depuis plus de 10 ans. Mon travail explore les frontières entre ces disciplines,
                créant un dialogue entre techniques traditionnelles et contemporaines.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 group"
              >
                <span className="font-medium">En savoir plus</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
