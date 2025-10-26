'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    title: "Composition Abstraite #1",
    category: "peinture",
    year: "2024",
    medium: "Acrylique sur toile, 120x150cm",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
    description: "Exploration des formes et des couleurs dans une composition dynamique, jouant sur les contrastes et la profondeur."
  },
  {
    id: 2,
    title: "Portrait Contemporain",
    category: "peinture",
    year: "2024",
    medium: "Huile sur toile, 80x100cm",
    image: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800",
    description: "Portrait expressionniste explorant l'émotion humaine à travers une palette de couleurs vibrantes."
  },
  {
    id: 3,
    title: "Métropole Nocturne",
    category: "peinture",
    year: "2024",
    medium: "Acrylique sur toile, 100x120cm",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    description: "Vision personnelle de l'architecture parisienne de nuit, entre réalité et abstraction."
  },
  {
    id: 4,
    title: "Nature Morte Moderne",
    category: "peinture",
    year: "2023",
    medium: "Huile sur toile, 60x80cm",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description: "Réinterprétation contemporaine de la nature morte classique avec des objets du quotidien."
  },
  {
    id: 5,
    title: "Série Boxe - Planche 1",
    category: "illustration",
    year: "2023",
    medium: "Illustration numérique (Krita)",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    description: "Extrait de la bande dessinée de 60 pages sur l'univers de la boxe, mêlant réalisme et expressivité graphique."
  },
  {
    id: 6,
    title: "Character Design - Série Fantasy",
    category: "illustration",
    year: "2024",
    medium: "Illustration numérique",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    description: "Conception de personnages pour projet narratif fantasy, exploration de silhouettes et costumes."
  },
  {
    id: 7,
    title: "Tarot - L'Ermite",
    category: "illustration",
    year: "2023",
    medium: "Illustration numérique (Krita)",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
    description: "Carte du tarot divinatoire illustré, faisant partie d'un jeu complet de 78 cartes."
  },
  {
    id: 8,
    title: "Livre Jeunesse - Illustration",
    category: "illustration",
    year: "2024",
    medium: "Aquarelle et encre",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800",
    description: "Illustration pour livre jeunesse, mêlant techniques traditionnelles et finitions numériques."
  },
  {
    id: 9,
    title: "Assemblage #3",
    category: "sculpture",
    year: "2024",
    medium: "Matériaux mixtes, 45x60x30cm",
    image: "https://images.unsplash.com/photo-1580421770402-e0c17229e16a?w=800",
    description: "Sculpture assemblée à partir de matériaux trouvés, explorant la notion de recyclage créatif."
  },
  {
    id: 10,
    title: "Forme Organique",
    category: "sculpture",
    year: "2023",
    medium: "Terre cuite, 30x40cm",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800",
    description: "Exploration des formes organiques en céramique, inspirée par la nature et le corps humain."
  },
  {
    id: 11,
    title: "Installation - Fragments",
    category: "sculpture",
    year: "2024",
    medium: "Bois, métal, 200x150x100cm",
    image: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800",
    description: "Installation sculpturale questionnant la fragmentation de l'espace et la perception du volume."
  },
  {
    id: 12,
    title: "Série Abstraite #7",
    category: "peinture",
    year: "2024",
    medium: "Techniques mixtes, 90x90cm",
    image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?w=800",
    description: "Expérimentation avec différents médiums et textures pour créer des couches de profondeur."
  },
  {
    id: 13,
    title: "Portrait - Série Identité",
    category: "illustration",
    year: "2024",
    medium: "Encre et aquarelle",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    description: "Série explorant l'identité à travers le portrait, techniques traditionnelles."
  },
  {
    id: 14,
    title: "Sculpture Murale",
    category: "sculpture",
    year: "2023",
    medium: "Plâtre et acrylique, 80x80x15cm",
    image: "https://images.unsplash.com/photo-1544084944-a65390e32dfd?w=800",
    description: "Relief mural jouant sur les ombres et la lumière, entre peinture et sculpture."
  },
  {
    id: 15,
    title: "Études Urbaines",
    category: "peinture",
    year: "2023",
    medium: "Acrylique sur papier, 50x70cm",
    image: "https://images.unsplash.com/photo-1520420097861-e4959843b682?w=800",
    description: "Série d'études rapides capturant l'essence des paysages urbains parisiens."
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Tout', icon: '✦' },
    { id: 'peinture', label: 'Peinture', icon: '🎨' },
    { id: 'illustration', label: 'Illustration', icon: '✏️' },
    { id: 'sculpture', label: 'Sculpture', icon: '🗿' }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-neutral-900 to-transparent rounded-full mb-6" />
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {filteredArtworks.length} œuvre{filteredArtworks.length > 1 ? 's' : ''} • Peinture, Illustration, Sculpture
          </p>
        </motion.div>

        {/* Category Filter - Plus stylé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`group relative px-8 py-3 rounded-full transition-all duration-300 overflow-hidden ${
                selectedCategory === category.id
                  ? 'text-white shadow-xl scale-105'
                  : 'text-neutral-700 hover:scale-105 hover:shadow-lg'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </span>
              {selectedCategory === category.id ? (
                <motion.div
                  layoutId="category-pill"
                  className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              ) : (
                <div className="absolute inset-0 bg-neutral-100 group-hover:bg-neutral-200 transition-colors" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="relative h-96 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-neutral-300">{artwork.year} • {artwork.category}</p>
                      <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                      <p className="text-sm text-neutral-300 line-clamp-2">{artwork.medium}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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
