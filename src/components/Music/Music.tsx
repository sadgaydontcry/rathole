import React from 'react';

const Music: React.FC = () => {
  return (
    <div className="bg-black border-2 border-pink-200 p-6 mb-6">
      <h3 className="text-pink-200 text-center font-bold mb-4">🎵 MUSIC</h3>
      <div className="flex justify-center">
        <iframe 
          src="https://open.spotify.com/embed/playlist/48UzzY0zbDerRVC2O0u7Oe" 
          width="300" 
          height="380" 
          frameBorder="0" 
          allowTransparency={true}
          allow="encrypted-media"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Music;