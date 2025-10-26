'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';

type Category = 'all' | 'peinture' | 'illustration' | 'sculpture';

interface Artwork {
  id: number;
  title: string;
  category: Category;
  year: string;
  medium: string;
  image: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Composition Abstraite",
    category: "peinture",
    year: "2024",
    medium: "Acrylique sur toile, 120x150cm",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
    description: "Exploration des formes et des couleurs dans une composition dynamique."
  },
  {
    id: 2,
    title: "Portrait Contemporain",
    category: "peinture",
    year: "2023",
    medium: "Huile sur toile, 80x100cm",
    image: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800",
    description: "Portrait expressionniste explorant l'émotion humaine."
  },
  {
    id: 3,
    title: "Série Boxe - Planche 1",
    category: "illustration",
    year: "2023",
    medium: "Illustration numérique (Krita)",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    description: "Extrait de la bande dessinée sur la boxe."
  },
  {
    id: 4,
    title: "Character Design",
    category: "illustration",
    year: "2024",
    medium: "Illustration numérique",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    description: "Conception de personnages pour projet narratif."
  },
  {
    id: 5,
    title: "Assemblage #3",
    category: "sculpture",
    year: "2024",
    medium: "Matériaux mixtes, 45x60x30cm",
    image: "https://images.unsplash.com/photo-1580421770402-e0c17229e16a?w=800",
    description: "Sculpture assemblée à partir de matériaux trouvés."
  },
  {
    id: 6,
    title: "Forme Organique",
    category: "sculpture",
    year: "2023",
    medium: "Terre cuite, 30x40cm",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800",
    description: "Exploration des formes organiques en céramique."
  },
  {
    id: 7,
    title: "Paysage Urbain",
    category: "peinture",
    year: "2024",
    medium: "Acrylique sur toile, 100x120cm",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    description: "Vision personnelle de l'architecture parisienne."
  },
  {
    id: 8,
    title: "Tarot - L'Ermite",
    category: "illustration",
    year: "2023",
    medium: "Illustration numérique",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
    description: "Carte du tarot divinatoire illustré."
  },
  {
    id: 9,
    title: "Nature Morte Moderne",
    category: "peinture",
    year: "2024",
    medium: "Huile sur toile, 60x80cm",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description: "Réinterprétation contemporaine de la nature morte classique."
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'peinture', label: 'Peinture' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'sculpture', label: 'Sculpture' }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes œuvres en peinture, illustration et sculpture
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            >
              <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{artwork.year}</p>
                    <p className="text-xs text-neutral-300">{artwork.medium}</p>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">{artwork.title}</h3>
              <p className="text-sm text-neutral-600 capitalize">{artwork.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          artwork={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
