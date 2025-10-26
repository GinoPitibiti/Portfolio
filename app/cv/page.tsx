'use client';

import { motion } from 'framer-motion';

export default function CVPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Léopold Schwarz - Artiste Multidisciplinaire
          </p>
          <button className="px-8 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors">
            Télécharger le CV (PDF)
          </button>
        </motion.div>

        {/* CV Content */}
        <div className="space-y-12">
          {/* Info Personnelles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Informations
            </h2>
            <div className="space-y-2 text-neutral-700">
              <p><span className="font-semibold">Né:</span> 1993, Paris, France</p>
              <p><span className="font-semibold">Basé:</span> Paris, France</p>
              <p><span className="font-semibold">Disciplines:</span> Peinture, Illustration, Sculpture</p>
            </div>
          </motion.section>

          {/* Formation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Formation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Année préparatoire en Design Graphique</h3>
                <p className="text-neutral-600">École privée, Paris | 2012-2013</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Baccalauréat Littéraire</h3>
                <p className="text-neutral-600">Paris | 2011</p>
              </div>
            </div>
          </motion.section>

          {/* Expérience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Pratique Artistique
            </h2>
            <p className="text-neutral-700 mb-4">
              Plus de 10 ans de pratique artistique continue en peinture, illustration et sculpture
            </p>
          </motion.section>

          {/* Expositions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Expositions Sélectionnées
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Exposition Solo</h3>
                <p className="text-neutral-600">OpenBach Galerie, Paris | 27 avril - 9 mai 2024</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Exposition Collective</h3>
                <p className="text-neutral-600">Association Empreintes et Arts, Paris | 2023</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Salon d'Art Contemporain</h3>
                <p className="text-neutral-600">Galerie du Marais, Paris | Octobre 2023</p>
              </div>
            </div>
          </motion.section>

          {/* Projets */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Projets Réalisés
            </h2>
            <ul className="space-y-2 text-neutral-700">
              <li>• Bande dessinée sur la boxe (60 pages)</li>
              <li>• Livre illustré pour enfants</li>
              <li>• Tarot divinatoire illustré (78 cartes, Krita)</li>
              <li>• Multiples séries de peintures et sculptures</li>
              <li>• Produits dérivés et reproductions d'œuvres</li>
            </ul>
          </motion.section>

          {/* Compétences */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Compétences Techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Peinture</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Acrylique</li>
                  <li>• Huile</li>
                  <li>• Techniques mixtes</li>
                  <li>• Grand format</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Illustration</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Krita</li>
                  <li>• Bande dessinée</li>
                  <li>• Illustration jeunesse</li>
                  <li>• Character design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sculpture</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Modelage</li>
                  <li>• Assemblage</li>
                  <li>• Matériaux mixtes</li>
                  <li>• Installation</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Influences */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4 pb-2 border-b-2 border-neutral-900">
              Influences & Inspirations
            </h2>
            <p className="text-neutral-700">
              Cinéma, bande dessinée, littérature, cultures du monde entier.
              Recherche constante de renouvellement et d'expérimentation de nouvelles techniques.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
