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
        <p>HI! I am happy to hear that you are considering getting a tattoo from me!
As I am studying PhD in Electronic Engineering, I only work on Fri & Sat.
My arts are about dreams, technology, tasty food, roadside scenery, artificial intelligence unknown civilizations, aliens, and some weird craps played on the Oscilloscope</p>
        <p> ">"3 </p>
        <p>There are a few details that I require from all potential customers.</p>
        <p> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
<ul>
  <li>Tattoo Idea Description / Specific flash pic</li>
  <li>Tattoo Placement</li>
  <li>Ref images</li>
  <li>Available time</li>
  <li>Additional Information</li>
  <li><b>Budget</b></li>
</ul>
<p> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>

<p>it's always good for me to know if it's your first tattoo so I know to reserve more time to talk about the after care.</p>
<ul>
  <li>Payment: Cash / Swish / Paypal</li>
  <li>Deposit: 500sek / 50$ / 50euro</li>
</ul>
<p>Cheers</p>
<p>复仇服务: sadgay007@gmail.com</p>
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
