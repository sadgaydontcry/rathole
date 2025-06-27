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
          className="rounded-full w-42 h-32 border-1 border-white animate-spin-slow shadow-lg"
        />
        
        {/* Windows Vista Style Button */}
        <button
          onClick={() => setShowWishlists(!showWishlists)}
          className="mt-80 px-8 py-3 text-sm font-normal"
          style={{
            background: showWishlists 
              ? 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(255, 217, 236) 100%)' 
              : 'linear-gradient(to bottom, rgb(255, 217, 236) 0%, rgb(0, 0, 0) 100%)',
            border: '1px solid rgb(243, 243, 243)',  // Fixed spacing
            borderRadius: '3px',
            color: showWishlists ? 'rgb(255, 217, 236)' : 'white',  // Updated text color
            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
            minWidth: '200px',
            transition: 'all 0.3s ease'
          }}
        >
          {showWishlists ? 'Hide Voting Panel' : '🗳️ Wishlists Voting'}
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