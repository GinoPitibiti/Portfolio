'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2058&auto=format&fit=crop"
            alt="Art background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl font-bold mb-6"
          >
            Léopold Schwarz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 mb-8"
          >
            Artiste Peintre, Illustrateur, Sculpteur
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors"
            >
              Découvrir mes œuvres
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neutral-900 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-900 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Œuvres Sélectionnées
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Peinture",
              image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
              href: "/portfolio?category=peinture"
            },
            {
              title: "Illustration",
              image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
              href: "/portfolio?category=illustration"
            },
            {
              title: "Sculpture",
              image: "https://images.unsplash.com/photo-1580421770402-e0c17229e16a?w=800",
              href: "/portfolio?category=sculpture"
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link href={category.href}>
                <div className="relative h-96 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-center group-hover:text-neutral-600 transition-colors">
                  {category.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-8"
          >
            À propos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-700 mb-8 leading-relaxed"
          >
            Né en 1993 à Paris, je suis un artiste multidisciplinaire dont le travail explore
            la peinture, l'illustration et la sculpture depuis plus de 10 ans. Inspiré par des
            influences variées allant du cinéma à la bande dessinée, en passant par la littérature
            et les cultures du monde entier, je cherche constamment à renouveler mon approche et
            à expérimenter de nouvelles techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-2 border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
