'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Process de Création - Peinture Abstraite",
    description: "Découvrez mon processus de création d'une œuvre abstraite de A à Z",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder - remplacer par vraies vidéos
    thumbnail: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800"
  },
  {
    id: 2,
    title: "Visite d'Atelier",
    description: "Une visite guidée de mon atelier et présentation de mes œuvres en cours",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    thumbnail: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800"
  },
  {
    id: 3,
    title: "Making of - Sculpture",
    description: "Les étapes de réalisation d'une sculpture en matériaux mixtes",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    thumbnail: "https://images.unsplash.com/photo-1580421770402-e0c17229e16a?w=800"
  },
  {
    id: 4,
    title: "Illustration Numérique sur Krita",
    description: "Tutorial et démonstration d'illustration numérique avec Krita",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
  }
];

export default function VideosPage() {
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
            Vidéos
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Découvrez mon processus créatif et mes projets artistiques en vidéo
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Video Player */}
              <div className="relative aspect-video bg-black group cursor-pointer">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2">{video.title}</h3>
                <p className="text-neutral-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-neutral-900 text-white rounded-lg p-12"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">
            Suivez-moi sur les réseaux sociaux
          </h2>
          <p className="text-neutral-300 mb-6">
            Pour ne manquer aucune nouvelle création et suivre mon actualité artistique
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/leopold_schwarz0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            >
              Instagram - Peinture
            </a>
            <a
              href="https://instagram.com/leopold_illustration0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            >
              Instagram - Illustration
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
