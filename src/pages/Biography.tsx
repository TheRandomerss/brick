import React from 'react';
import { Palette, BookOpen, Coffee, Heart } from 'lucide-react';

const Biography: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sage font-handwritten">
            About the Artist
          </h2>
          <div className="sketch-divider mx-auto mb-6"></div>
          <p className="text-xl text-charcoal/80 font-body">
            A journey through art, stories, and quiet moments of inspiration
          </p>
        </section>

        {/* Main Bio */}
        <section className="mb-16">
          <div className="sketch-card p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="artist-photo-placeholder">
                  <div className="placeholder-content">
                    <Palette className="w-16 h-16 mb-4" />
                    <p className="font-handwritten">Artist Portrait</p>
                    <p className="text-sm opacity-70">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-sage font-handwritten">
                  Hello, I'm a Storyteller Through Art
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4 font-body">
                  My journey as a manga artist began in quiet coffee shops and peaceful parks, 
                  where I found myself constantly sketching the world around me. There's something 
                  magical about capturing a fleeting moment—the way sunlight filters through leaves, 
                  or how someone's face lights up when they laugh.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4 font-body">
                  I believe that the most powerful stories are often found in the gentlest moments. 
                  My art focuses on creating characters and scenes that feel like a warm embrace, 
                  offering viewers a peaceful escape from the busy world.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed font-body">
                  When I'm not drawing, you'll find me reading in cozy corners, tending to my 
                  small garden, or exploring new places with my sketchbook in hand. Every experience 
                  becomes inspiration for the next piece.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Artistic Journey */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-sage font-handwritten text-center">
            My Artistic Journey
          </h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="text-xl font-bold text-sage font-handwritten mb-2">
                  Early Beginnings
                </h4>
                <p className="text-charcoal/80 font-body">
                  Started drawing as a way to process emotions and capture the beauty I saw in 
                  everyday life. My first sketches were simple observations of people and places 
                  that moved me.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="text-xl font-bold text-sage font-handwritten mb-2">
                  Character Development
                </h4>
                <p className="text-charcoal/80 font-body">
                  Began creating original characters like Daxx and Yasuri, each representing 
                  different aspects of the human experience. These characters became vessels 
                  for exploring themes of friendship, growth, and finding peace.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="text-xl font-bold text-sage font-handwritten mb-2">
                  Finding My Voice
                </h4>
                <p className="text-charcoal/80 font-body">
                  Developed a distinctive style that emphasizes soft lines, gentle expressions, 
                  and atmospheric storytelling. My work began to resonate with others who 
                  appreciated quiet, contemplative art.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4 className="text-xl font-bold text-sage font-handwritten mb-2">
                  Present Day
                </h4>
                <p className="text-charcoal/80 font-body">
                  Continuing to create art that brings peace and joy to others. Always learning, 
                  always growing, and always grateful for the opportunity to share my vision 
                  with the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Values */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-sage font-handwritten text-center">
            My Creative Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="philosophy-card">
              <BookOpen className="w-8 h-8 mb-4 text-sage" />
              <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">
                Stories in Every Stroke
              </h4>
              <p className="text-charcoal/70 font-body">
                Every line I draw carries intention and emotion. I believe that even the 
                simplest sketch can tell a profound story if created with genuine feeling.
              </p>
            </div>
            
            <div className="philosophy-card">
              <Heart className="w-8 h-8 mb-4 text-sage" />
              <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">
                Art as Comfort
              </h4>
              <p className="text-charcoal/70 font-body">
                My goal is to create art that serves as a gentle companion—something that 
                brings comfort during difficult times and joy during peaceful moments.
              </p>
            </div>
            
            <div className="philosophy-card">
              <Coffee className="w-8 h-8 mb-4 text-sage" />
              <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">
                Slow Living
              </h4>
              <p className="text-charcoal/70 font-body">
                I embrace a slower pace of creation, taking time to observe, reflect, and 
                pour genuine care into each piece rather than rushing to produce quantity.
              </p>
            </div>
            
            <div className="philosophy-card">
              <Palette className="w-8 h-8 mb-4 text-sage" />
              <h4 className="text-xl font-bold mb-3 text-sage font-handwritten">
                Authentic Expression
              </h4>
              <p className="text-charcoal/70 font-body">
                I stay true to my own vision and voice, creating art that feels authentic 
                to my experiences and emotions rather than following trends.
              </p>
            </div>
          </div>
        </section>

        {/* Contact/Connect */}
        <section>
          <div className="sketch-card p-6 md:p-8 bg-sage/5 text-center">
            <h3 className="text-2xl font-bold mb-4 text-sage font-handwritten">
              Let's Connect
            </h3>
            <p className="text-charcoal/80 mb-6 font-body max-w-2xl mx-auto">
              I love connecting with fellow art enthusiasts, other creators, and anyone who 
              appreciates the beauty in quiet moments. Feel free to reach out if my work 
              resonates with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="cta-button">
                View My Gallery
              </button>
              <button className="cta-button-outline">
                Meet My Characters
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Biography;