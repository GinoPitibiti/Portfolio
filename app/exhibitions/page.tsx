'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Exhibition {
  id: number;
  title: string;
  type: 'solo' | 'collective';
  location: string;
  date: string;
  description: string;
  image: string;
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Exposition Solo à OpenBach Galerie",
    type: "solo",
    location: "OpenBach Galerie, Paris",
    date: "27 avril - 9 mai 2024",
    description: "Exposition personnelle présentant une sélection de peintures et dessins récents explorant le thème de la transformation urbaine.",
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800"
  },
  {
    id: 2,
    title: "Exposition Collective - Empreintes et Arts",
    type: "collective",
    location: "Association Empreintes et Arts, Paris",
    date: "2023",
    description: "Participation à l'exposition collective annuelle avec présentation de sculptures et peintures.",
    image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?w=800"
  },
  {
    id: 3,
    title: "Salon d'Art Contemporain",
    type: "collective",
    location: "Galerie du Marais, Paris",
    date: "Octobre 2023",
    description: "Présentation d'une série d'illustrations dans le cadre du salon annuel d'art contemporain.",
    image: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800"
  },
  {
    id: 4,
    title: "Résidence d'Artiste",
    type: "solo",
    location: "Atelier Collectif, Paris",
    date: "Été 2023",
    description: "Résidence de création de trois mois axée sur le développement de nouvelles techniques de sculpture.",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800"
  }
];

export default function ExhibitionsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Expositions & Résidences
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Parcours d'expositions personnelles et collectives, résidences artistiques
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className={`relative h-80 rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <Image
                  src={exhibition.image}
                  alt={exhibition.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-block px-4 py-1 bg-neutral-900 text-white text-sm rounded-full">
                  {exhibition.type === 'solo' ? 'Exposition Solo' : 'Exposition Collective'}
                </div>

                <h2 className="font-serif text-3xl font-bold">{exhibition.title}</h2>

                <div className="space-y-2">
                  <p className="text-neutral-600">
                    <span className="font-semibold">Lieu:</span> {exhibition.location}
                  </p>
                  <p className="text-neutral-600">
                    <span className="font-semibold">Date:</span> {exhibition.date}
                  </p>
                </div>

                <p className="text-neutral-700 leading-relaxed">
                  {exhibition.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-neutral-100 rounded-lg p-12 text-center"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">Projets à Venir</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto mb-6">
            Ouvert aux opportunités d'expositions et de résidences artistiques.
            N'hésitez pas à me contacter pour discuter de collaborations futures.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </div>
  );
}
