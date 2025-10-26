'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface Artwork {
  id: number;
  title: string;
  category: string;
  year: string;
  medium: string;
  image: string;
  description: string;
}

interface LightboxProps {
  artwork: Artwork;
  onClose: () => void;
}

export default function Lightbox({ artwork, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors z-10"
          aria-label="Fermer"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative w-full md:w-2/3 h-96 md:h-[600px]">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/3 text-white space-y-4">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2">{artwork.title}</h2>
              <p className="text-neutral-300 capitalize">{artwork.category} • {artwork.year}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Technique</h3>
              <p className="text-neutral-300">{artwork.medium}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Description</h3>
              <p className="text-neutral-300">{artwork.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
