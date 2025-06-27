import React, { useState } from 'react';

const Wishlists: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [votes, setVotes] = useState<{[key: string]: number}>({});

  const countries = [
    'Japan', 'South Korea', 'Thailand', 'Germany', 'France', 'UK', 'USA', 'Canada',
    'Australia', 'Brazil', 'Mexico', 'Italy', 'Spain', 'Netherlands',
    'Norway', 'Denmark', 'Finland', 'Belgium', 'Switzerland', 'Austria', 'Portugal'
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
    <div className="mb-36">


      <div className="max-w-2xl mx-auto px-6 font-mono">
        <div className="bg-black border-2 border-white p-6 mb-4 text-white font-mono text-sm leading-relaxed">
          <p className="mb-4">
            &gt; Help me decide where to go for my next tattoo adventure!
          </p>

          <p className="text-center text-pink-200">※(ﾟωﾟ*)ﾉ VOTE NOW ヽ(*ﾟωﾟ*)ﾉ※</p>
          
          <div className="border border-white p-4 mb-4 bg-gray-900">

            
            <div className="space-y-4">
              <div>
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
                className="bg-pink-200 text-black font-bold px-4 py-2 rounded hover:bg-pink-300 w-full"
                disabled={!selectedCountry}
              >
                Cast Vote!
              </button>
              
              {Object.keys(votes).length > 0 && (
                <div className="mt-6">
                  <h4 className="text-pink-200 font-bold mb-2">Current Results:</h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {Object.entries(votes)
                      .sort(([,a], [,b]) => b - a)
                      .map(([country, count]) => (
                        <div key={country} className="text-pink-200 text-sm flex justify-between">
                          <span>{country}:</span>
                          <span>{count} vote{count !== 1 ? 's' : ''}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="mb-2">&gt; Your vote helps me plan my artistic journey!</p>
          <p className="text-pink-200">
            &gt; Thanks for participating! ✈️🎨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wishlists;