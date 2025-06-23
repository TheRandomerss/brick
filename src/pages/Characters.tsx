import React from 'react';
import { Star, Moon } from 'lucide-react';

const Characters: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sage font-handwritten">
            Meet My Characters
          </h2>
          <div className="sketch-divider mx-auto mb-6"></div>
          <p className="text-xl text-charcoal/80 font-body max-w-2xl mx-auto">
            Two souls on their own unique journeys, each with their own dreams and stories to tell
          </p>
        </section>

        {/* Characters */}
        <div className="space-y-16">
          {/* Daxx */}
          <section className="character-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="character-image-placeholder daxx-colors">
                <div className="placeholder-content">
                  <Star className="w-16 h-16 mb-4" />
                  <p className="text-lg font-handwritten">Daxx's Portrait</p>
                  <p className="text-sm opacity-70">Illustration Coming Soon</p>
                </div>
              </div>
              
              <div className="character-info">
                <h3 className="text-3xl font-bold mb-4 text-sage font-handwritten">
                  Daxx
                </h3>
                <div className="character-traits mb-6">
                  <span className="trait-tag">Adventurous</span>
                  <span className="trait-tag">Optimistic</span>
                  <span className="trait-tag">Free-spirited</span>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4 font-body">
                  Daxx is a wandering artist who finds inspiration in the most unexpected places. 
                  With a backpack full of sketchbooks and a heart full of curiosity, they travel 
                  from town to town, capturing the beauty in everyday moments.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6 font-body">
                  Their infectious enthusiasm and genuine kindness make friends wherever they go. 
                  Daxx believes that every person has a story worth telling, and every sunset 
                  deserves to be painted.
                </p>
                <div className="character-details">
                  <h4 className="font-bold text-sage mb-2 font-handwritten">Favorite Things:</h4>
                  <ul className="text-charcoal/70 space-y-1 font-body">
                    <li>• Sunrise sketching sessions</li>
                    <li>• Street food and local cafes</li>
                    <li>• Collecting pressed flowers</li>
                    <li>• Sharing stories with strangers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Yasuri */}
          <section className="character-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="character-info lg:order-2">
                <h3 className="text-3xl font-bold mb-4 text-sage font-handwritten">
                  Yasuri
                </h3>
                <div className="character-traits mb-6">
                  <span className="trait-tag">Thoughtful</span>
                  <span className="trait-tag">Mysterious</span>
                  <span className="trait-tag">Wise</span>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4 font-body">
                  Yasuri is a quiet observer who finds profound meaning in solitude and reflection. 
                  They spend their days in a cozy bookshop, surrounded by stories and the gentle 
                  company of plants and soft music.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6 font-body">
                  Though reserved, Yasuri has a deep well of wisdom and compassion. They're the 
                  friend who listens without judgment and offers comfort through gentle presence 
                  rather than many words.
                </p>
                <div className="character-details">
                  <h4 className="font-bold text-sage mb-2 font-handwritten">Favorite Things:</h4>
                  <ul className="text-charcoal/70 space-y-1 font-body">
                    <li>• Rainy afternoon reading</li>
                    <li>• Herbal tea ceremonies</li>
                    <li>• Tending to houseplants</li>
                    <li>• Writing in journals</li>
                  </ul>
                </div>
              </div>
              
              <div className="character-image-placeholder yasuri-colors lg:order-1">
                <div className="placeholder-content">
                  <Moon className="w-16 h-16 mb-4" />
                  <p className="text-lg font-handwritten">Yasuri's Portrait</p>
                  <p className="text-sm opacity-70">Illustration Coming Soon</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Character Relationship */}
        <section className="mt-16">
          <div className="sketch-card p-6 md:p-8 bg-sage/5">
            <h3 className="text-2xl font-bold mb-4 text-sage font-handwritten text-center">
              Their Story Together
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed font-body text-center max-w-3xl mx-auto">
              Though different in many ways, Daxx and Yasuri share a beautiful friendship built on 
              mutual respect and understanding. Daxx brings adventure and spontaneity to Yasuri's 
              peaceful world, while Yasuri offers Daxx a safe harbor and thoughtful perspective. 
              Together, they explore the balance between movement and stillness, excitement and tranquility.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Characters;