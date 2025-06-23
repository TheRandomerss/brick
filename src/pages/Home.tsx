import React from 'react';
import { Palette, Heart, Coffee } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="sketch-card p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-sage font-handwritten">
                Welcome to My World
              </h2>
              <div className="sketch-divider mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-charcoal/80 font-handwritten leading-relaxed">
                Where imagination meets paper, and stories come to life through art
              </p>
            </div>
            
            <div className="floating-doodles">
              <div className="doodle doodle-1">✨</div>
              <div className="doodle doodle-2">🌸</div>
              <div className="doodle doodle-3">☁️</div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="sketch-card p-6 md:p-8">
            <h3 className="text-3xl font-bold mb-6 text-sage font-handwritten text-center">
              Creating Stories, One Sketch at a Time
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 font-body">
              Hi there! I'm a manga artist who believes in the power of quiet moments and gentle storytelling. 
              My art is inspired by everyday beauty, peaceful scenes, and the small adventures that make life meaningful.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-body">
              Through my characters and illustrations, I hope to share a sense of calm and wonder with you. 
              Each piece is drawn with love and the intention to create a little pocket of peace in your day.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="value-card">
            <div className="icon-wrapper">
              <Palette className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">Creative Freedom</h4>
            <p className="text-charcoal/70 font-body">
              Art without boundaries, where imagination flows freely and authentically
            </p>
          </div>

          <div className="value-card">
            <div className="icon-wrapper">
              <Heart className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">Gentle Stories</h4>
            <p className="text-charcoal/70 font-body">
              Characters and narratives that warm the heart and soothe the soul
            </p>
          </div>

          <div className="value-card">
            <div className="icon-wrapper">
              <Coffee className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">Cozy Vibes</h4>
            <p className="text-charcoal/70 font-body">
              Creating art that feels like a warm hug on a quiet afternoon
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="sketch-card p-6 md:p-8 bg-sage/5">
            <h3 className="text-2xl font-bold mb-4 text-sage font-handwritten">
              Explore My Creative Journey
            </h3>
            <p className="text-charcoal/80 mb-6 font-body">
              Discover my original characters, browse through my artwork, and learn more about my artistic story
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="cta-button">
                Meet My Characters
              </button>
              <button className="cta-button-outline">
                View Gallery
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;