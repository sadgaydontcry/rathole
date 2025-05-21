import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center"
    >
      <h1
          className="font-bold mt-5"
          style={{
            fontSize: '60px',
            color: "white",
            textShadow: "3px 3px 0 #000, 6px 6px 0 #FF8C00, 9px 9px 0 #000",
          }}
        > Welcome to RATHOLE U f.3king RATS</h1>
        {/* <h1 className="text-5xl font-bold mb-4"> rathole</h1> */}
        {/* <p className="text-lg">about text</p> */}
    </section>
  );
};

export default Hero;
