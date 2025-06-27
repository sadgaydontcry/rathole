import React from "react";

const Divider: React.FC = () => {
  return (
    <section id="divider" className="flex justify-center my-96">
      <img
        src={`${process.env.PUBLIC_URL}/resources/IMG_3855.png`}
        alt="Profile"
        className="rounded-full w-30 h-24 border-1 border-white animate-spin-slow"
      />
    </section>
  );
};

export default Divider;
