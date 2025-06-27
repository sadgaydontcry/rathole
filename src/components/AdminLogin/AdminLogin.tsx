import React, { useState } from 'react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    setMessage('You are rejected unfortunately');
    setUsername('');
    setPassword('');
  };

  return (
    <section
      id="admin_ash"
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#000000', // Full black background
        margin: 0,
        padding: 0
      }}
    >
      {/* Windows Vista Dialog */}
      <div 
        className="shadow-2xl"
        style={{
          background: 'linear-gradient(to bottom, #f0f0f0 0%, #e0e0e0 100%)',
          border: '1px solid #5a5a5a',
          borderRadius: '8px',
          width: '420px',
          minHeight: '320px',
          overflow: 'hidden'
        }}
      >
        {/* Vista Title Bar */}
        <div 
          className="relative"
          style={{
            background: 'linear-gradient(to bottom, #7db9e8 0%, #1e5799 100%)',
            height: '30px',
            borderBottom: '1px solid #4a90c2'
          }}
        >
          <div className="flex items-center h-full px-3">
            <span className="text-white text-sm font-normal">🔐 Administrator Authentication</span>
            <div className="ml-auto flex">
              {/* Vista Window Controls */}
              <div className="w-6 h-5 bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 mr-1 flex items-center justify-center text-white text-xs hover:from-blue-300 hover:to-blue-500">
                _
              </div>
              <div className="w-6 h-5 bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 mr-1 flex items-center justify-center text-white text-xs hover:from-blue-300 hover:to-blue-500">
                □
              </div>
              <div className="w-6 h-5 bg-gradient-to-b from-red-400 to-red-600 border border-red-700 flex items-center justify-center text-white text-xs hover:from-red-300 hover:to-red-500">
                ×
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {/* Vista Icon and Header */}
          <div className="text-center mb-6">
 
            <h3 className="text-gray-800 text-base font-normal">TYPE TO ENTER THIS HEART</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-normal mb-2">User name:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 text-black text-sm"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%)',
                  border: '1px solid #a0a0a0',
                  borderRadius: '3px',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #4a90e2'}
                onBlur={(e) => e.target.style.border = '1px solid #a0a0a0'}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-normal mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-black text-sm"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%)',
                  border: '1px solid #a0a0a0',
                  borderRadius: '3px',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #4a90e2'}
                onBlur={(e) => e.target.style.border = '1px solid #a0a0a0'}
              />
            </div>
            
            {/* Vista Style Buttons */}
            <div className="flex justify-end space-x-3 mt-8">
              <button
                className="px-6 py-2 text-black text-sm font-normal"
                style={{
                  background: 'linear-gradient(to bottom, #f5f5f5 0%, #e0e0e0 100%)',
                  border: '1px solid #a0a0a0',
                  borderRadius: '3px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  minWidth: '80px'
                }}
               >
                Cancel
              </button>
              <button
                onClick={handleLogin}
                className="px-6 py-2 text-white text-sm font-normal"
                style={{
                  background: 'linear-gradient(to bottom, #7db9e8 0%, #1e5799 100%)',
                  border: '1px solid #4a90c2',
                  borderRadius: '3px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                  minWidth: '80px'
                }}
               >
                OK
              </button>
            </div>
            
            {message && (
              <div className="mt-4 p-3" style={{
                background: 'linear-gradient(to bottom, #ffebee 0%, #ffcdd2 100%)',
                border: '1px solid #f44336',
                borderRadius: '4px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}>
                <div className="flex items-center">
                  <span className="text-red-600 text-lg mr-2">⚠️</span>
                  <p className="text-red-800 text-sm font-normal">{message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vista Background Elements */}
      <div className="absolute bottom-6 right-6 text-white text-sm opacity-50">
        Press Ctrl+Alt+Del for security options
      </div>
    </section>
  );
};

export default AdminLogin;