import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Gallery from './pages/Gallery';
import Biography from './pages/Biography';
import './styles/globals.css';

type Page = 'home' | 'characters' | 'gallery' | 'biography';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'characters':
        return <Characters />;
      case 'gallery':
        return <Gallery />;
      case 'biography':
        return <Biography />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="paper-texture"></div>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;