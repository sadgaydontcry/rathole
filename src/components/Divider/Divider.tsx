import React, { useState } from "react";
import Wishlists from '../Wishlists/Wishlists';

const Divider: React.FC = () => {
  const [showWishlists, setShowWishlists] = useState(false);

  return (
    <section id="divider" className="min-h-screen flex flex-col items-center justify-center py-20">
      {/* Always centered spinning image */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={`${process.env.PUBLIC_URL}/resources/IMG_3855.png`}
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-white animate-spin-slow shadow-lg"
        />
        
        {/* Windows Vista Style Button */}
        <button
          onClick={() => setShowWishlists(!showWishlists)}
          className="mt-8 px-8 py-3 text-sm font-normal"
          style={{
            background: showWishlists 
              ? 'linear-gradient(to bottom, #ffcdd2 0%, #f8bbd9 100%)' 
              : 'linear-gradient(to bottom, #7db9e8 0%, #1e5799 100%)',
            border: '1px solid #4a90c2',
            borderRadius: '6px',
            color: showWishlists ? '#d32f2f' : 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            minWidth: '200px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            const target = e.target as HTMLButtonElement;  // Fix TypeScript error
            if (showWishlists) {
              target.style.background = 'linear-gradient(to bottom, #ffb3ba 0%, #f48fb1 100%)';
            } else {
              target.style.background = 'linear-gradient(to bottom, #85c1ed 0%, #2660a4 100%)';
            }
          }}
          onMouseOut={(e) => {
            const target = e.target as HTMLButtonElement;  // Fix TypeScript error
            if (showWishlists) {
              target.style.background = 'linear-gradient(to bottom, #ffcdd2 0%, #f8bbd9 100%)';
            } else {
              target.style.background = 'linear-gradient(to bottom, #7db9e8 0%, #1e5799 100%)';
            }
          }}
        >
          {showWishlists ? '✖️ Hide Voting Panel' : '🗳️ Open Voting Panel'}
        </button>
      </div>

      {/* Wishlists Component (embedded with smooth transition) */}
      <div 
        className={`w-full max-w-4xl transition-all duration-500 ease-in-out ${
          showWishlists 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}
      >
        {showWishlists && <Wishlists />}
      </div>
    </section>
  );
};

export default Divider;