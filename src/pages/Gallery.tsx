import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Heart, Eye } from 'lucide-react';

interface Artwork {
  id: number;
  src: string;
  title: string;
  description: string;
  tags: string[];
}

const Gallery: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Generate artwork data - in a real app, this would come from an API or CMS
  useEffect(() => {
    const generateArtworks = () => {
      const artworkData: Artwork[] = [];
      const titles = [
        "Morning Coffee Sketch", "Peaceful Garden", "Character Study - Daxx", 
        "Rainy Day Mood", "Character Study - Yasuri", "Sunset Dreams",
        "Cozy Reading Corner", "Spring Blossoms", "Quiet Moments",
        "Adventure Awaits", "Bookshop Vibes", "Gentle Breeze"
      ];
      
      const descriptions = [
        "A quiet moment captured in pencil and paper",
        "Finding beauty in everyday scenes",
        "Exploring character emotions and expressions",
        "Atmospheric study of mood and lighting",
        "Personal reflection through art",
        "Dreamy landscape with soft colors"
      ];
      
      const tagOptions = [
        ["sketch", "daily life"], ["nature", "peaceful"], ["character", "portrait"],
        ["mood", "atmospheric"], ["character", "study"], ["landscape", "dreamy"],
        ["interior", "cozy"], ["nature", "spring"], ["lifestyle", "calm"],
        ["adventure", "dynamic"], ["interior", "books"], ["nature", "serene"]
      ];

      for (let i = 1; i <= 12; i++) {
        artworkData.push({
          id: i,
          src: `/images/image${i}.png`,
          title: titles[(i - 1) % titles.length],
          description: descriptions[(i - 1) % descriptions.length],
          tags: tagOptions[(i - 1) % tagOptions.length]
        });
      }
      
      setArtworks(artworkData);
    };

    generateArtworks();
  }, []);

  const allTags = ['all', ...Array.from(new Set(artworks.flatMap(art => art.tags)))];
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.tags.includes(filter));

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Replace broken image with placeholder
    e.currentTarget.style.display = 'none';
    const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sage font-handwritten">
            Art Gallery
          </h2>
          <div className="sketch-divider mx-auto mb-6"></div>
          <p className="text-xl text-charcoal/80 font-body max-w-2xl mx-auto">
            A collection of sketches, studies, and finished pieces that capture quiet moments and gentle stories
          </p>
        </section>

        {/* Filter Tags */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`filter-tag ${filter === tag ? 'active' : ''}`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-grid">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="gallery-item"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="artwork-container">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="artwork-image"
                  onError={handleImageError}
                />
                <div className="artwork-placeholder">
                  <ImageIcon className="w-12 h-12 mb-2" />
                  <p className="font-handwritten text-sm">{artwork.title}</p>
                  <p className="text-xs opacity-70">Artwork #{artwork.id}</p>
                </div>
                <div className="artwork-overlay">
                  <div className="overlay-content">
                    <h3 className="text-lg font-bold mb-2 font-handwritten">{artwork.title}</h3>
                    <p className="text-sm mb-3 font-body">{artwork.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {artwork.tags.map(tag => (
                        <span key={tag} className="tag-mini">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="overlay-actions">
                    <button className="action-button">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="action-button">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <ImageIcon className="w-16 h-16 text-charcoal/30 mx-auto mb-4" />
            <p className="text-charcoal/60 font-body">No artworks found for this filter</p>
          </div>
        )}

        {/* Modal for Selected Artwork */}
        {selectedArtwork && (
          <div className="modal-overlay" onClick={() => setSelectedArtwork(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-image-container">
                <img
                  src={selectedArtwork.src}
                  alt={selectedArtwork.title}
                  className="modal-image"
                  onError={handleImageError}
                />
                <div className="modal-placeholder">
                  <ImageIcon className="w-20 h-20 mb-4" />
                  <p className="text-xl font-handwritten mb-2">{selectedArtwork.title}</p>
                  <p className="text-sm opacity-70">Artwork #{selectedArtwork.id}</p>
                </div>
              </div>
              <div className="modal-info">
                <h3 className="text-2xl font-bold mb-2 text-sage font-handwritten">
                  {selectedArtwork.title}
                </h3>
                <p className="text-charcoal/80 mb-4 font-body">
                  {selectedArtwork.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedArtwork.tags.map(tag => (
                    <span key={tag} className="tag-mini">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelectedArtwork(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;