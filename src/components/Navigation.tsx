import React from 'react';
import { Home, Users, Image, User } from 'lucide-react';

type Page = 'home' | 'characters' | 'gallery' | 'biography';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'characters' as Page, label: 'Characters', icon: Users },
    { id: 'gallery' as Page, label: 'Gallery', icon: Image },
    { id: 'biography' as Page, label: 'About', icon: User },
  ];

  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-cream/80 border-b border-sage/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="sketch-logo">
            <h1 className="text-2xl font-bold text-sage font-handwritten">
              Creative Canvas
            </h1>
            <div className="sketch-underline"></div>
          </div>
          
          <ul className="flex gap-2 md:gap-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`nav-button flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 font-handwritten ${
                      currentPage === item.id
                        ? 'text-sage bg-sage/10 shadow-inner'
                        : 'text-charcoal/70 hover:text-sage hover:bg-sage/5'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;