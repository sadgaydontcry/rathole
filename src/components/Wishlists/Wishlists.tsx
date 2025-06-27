import React, { useState } from 'react';

const Wishlists: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [votes, setVotes] = useState<{[key: string]: number}>({});

  const countries = [
    'Japan', 'South Korea', 'Thailand', 'Germany', 'France', 'UK', 'USA', 'Canada',
    'Australia', 'Brazil', 'Mexico', 'Italy', 'Spain', 'Netherlands', 'Sweden'
  ];

  const handleVote = () => {
    if (selectedCountry) {
      setVotes(prev => ({
        ...prev,
        [selectedCountry]: (prev[selectedCountry] || 0) + 1
      }));
      setSelectedCountry('');
    }
  };

  return (
    <div className="bg-black border-2 border-pink-200 p-6">
      <h3 className="text-pink-200 text-center font-bold mb-4">🗳️ TATTOO TRIP VOTING</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-pink-200 text-sm font-bold mb-2">
            Vote for my next tattoo trip destination:
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-pink-200 text-pink-200"
          >
            <option value="">Select a country...</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        
        <button
          onClick={handleVote}
          className="bg-pink-200 text-black font-bold px-4 py-2 rounded hover:bg-pink-300"
          disabled={!selectedCountry}
        >
          Vote!
        </button>
        
        {Object.keys(votes).length > 0 && (
          <div className="mt-6">
            <h4 className="text-pink-200 font-bold mb-2">Current Votes:</h4>
            <div className="space-y-1">
              {Object.entries(votes)
                .sort(([,a], [,b]) => b - a)
                .map(([country, count]) => (
                  <div key={country} className="text-pink-200 text-sm">
                    {country}: {count} vote{count !== 1 ? 's' : ''}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlists;