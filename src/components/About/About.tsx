import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      // className="py-20 px-10 bg-white shadow-lg max-w-4xl mx-auto border border-black"
      className="mb-36"
    >
      <h2
        className="text-center mb-8 font-bold mt-5"
        style={{
          fontSize: "25px",
          color: "white",
          textShadow: "3px 3px 0 #020, 6px 6px 0rgb(19, 13, 6), 9px 9px 0 #000",
        }}
      >
      I no longer fear my monsters
      </h2>
      <div className="max-w-3xl px-10 mx-auto text-center text-white">
        <p>Bussiness sadgay007@gmail.com</p>
        <p> ">"3 </p>
        <img
          src={`${process.env.PUBLIC_URL}/resources/brat_gif.webp`}
          alt="Brat GIF"
          className="mx-auto rounded-lg mt-10 animate-border-pulse"
          width="500"
          // style={{
          //   border: "5px solid #ff00ff", // Custom border
          //   borderRadius: "10px", // Rounded corners
          //   boxShadow:
          //     "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff", // Glowing shadow effect
          // }}
        />
      </div>
    </section>
  );
};

export default About;
