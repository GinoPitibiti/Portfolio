'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            À propos
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Artiste multidisciplinaire basé à Paris
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
              alt="Léopold Schwarz"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Biographie</h2>
              <p className="text-neutral-700 leading-relaxed">
                Né en 1993 à Paris, Léopold Schwarz est un artiste multidisciplinaire dont
                le travail explore la peinture, l'illustration et la sculpture. Après l'obtention
                de son baccalauréat littéraire en 2011, il suit de 2012 à 2013 une année préparatoire
                en design graphique dans une école privée.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Démarche Artistique</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Inspiré par des influences variées allant du cinéma à la bande dessinée,
                en passant par la littérature et les cultures du monde entier, je cherche
                constamment à renouveler mon approche et à expérimenter de nouvelles techniques.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Ma pratique artistique, développée depuis plus de 10 ans, se caractérise par
                une exploration continue des différents médiums et une recherche permanente
                d'expression visuelle authentique.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-8 text-center">Projets Réalisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bande Dessinée sur la Boxe",
                description: "Roman graphique de 60 pages explorant l'univers de la boxe"
              },
              {
                title: "Livre pour Enfants",
                description: "Illustrations et narration pour un conte jeunesse"
              },
              {
                title: "Tarot Divinatoire",
                description: "78 cartes illustrées avec le logiciel Krita"
              },
              {
                title: "Expositions",
                description: "Plusieurs expositions de peintures et dessins à Paris"
              },
              {
                title: "Produits Dérivés",
                description: "Reproductions et merchandising d'œuvres originales"
              },
              {
                title: "Sculptures",
                description: "Créations tridimensionnelles en divers matériaux"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-neutral-100 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-neutral-900 text-white rounded-lg p-12"
        >
          <h2 className="font-serif text-4xl font-bold mb-8 text-center">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Peinture</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• Acrylique</li>
                <li>• Huile</li>
                <li>• Techniques mixtes</li>
                <li>• Grande format</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Illustration</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• Illustration numérique (Krita)</li>
                <li>• Bande dessinée</li>
                <li>• Illustration jeunesse</li>
                <li>• Character design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Sculpture</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• Modelage</li>
                <li>• Assemblage</li>
                <li>• Matériaux mixtes</li>
                <li>• Installation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
