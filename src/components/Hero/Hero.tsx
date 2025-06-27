import React, { useState } from 'react';


const Hero: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleIconClick = (component: string) => {
    setActiveComponent(activeComponent === component ? null : component);
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-20"
    >

    </section>
  );
};

export default Hero;