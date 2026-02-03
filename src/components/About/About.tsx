import React from "react";

const About: React.FC = () => {
  return (
<section
id="about"
// className="py-20 px-10 bg-white shadow-lg max-w-4xl mx-auto border border-black"
className="mb-36"
>
  <h2
    className="text-center mb-3 font-bold mt-5"
    style={{
      fontSize: "25px",
      color: "white",
      fontFamily: "Bitcount Grid Double", // Add this line
      textShadow: "3px 3px 0 #020, 6px 6px 0rgb(19, 13, 6), 9px 9px 0 #000",
    }}
  >
  I love human skin
  </h2>




<div className="max-w-2xl mx-auto px-6 font-mono">

  {/* Main Content */}
  <div className="bg-black border-2 border-white p-6 mb-4 text-white font-mono text-sm leading-relaxed">
    <p className="mb-4">
      &gt; HI! I am happy to hear that you are considering getting a tattoo from me!
    </p>
    <p className="mb-6">
      &gt; My arts are about dreams, technology, tasty food, roadside scenery, 
      artificial intelligence unknown civilizations, aliens, and some weird craps 
      played on the Oscilloscope
    </p>   

    <p className="text-center text-pink-200">※o(ωﾟ*)ﾌﾚｰ ※＼(*ﾟωﾟ*)/※ ﾌﾚｰ(*ﾟω)o※</p>
    <div className="border border-white p-4 mb-4 bg-gray-900">
      <p className="text-center text-pink-200 mb-2 font-bold">
        CONSULTATION REQUIREMENTS
      </p>
      
      <div className="text-left text-pink-200">
        <p>[ ] Ideas / Specific flash images</p>
        <p>[ ] Tattoo Placement</p>
        <p>[ ] Available time</p>
        <p>[ ] Additional Information</p>
        <p>[ ] Budget</p>
      </div>
    </div>

<div className="border border-white p-2 mb-2 bg-gray-900">
  <p className="text-center text-pink-200 mb-2 font-bold">
    PAYMENT & DEPOSIT
  </p>
  

  <p className="text-center text-pink-200">---Cash Swish PayPal Bitcoin---</p>
  <p className="text-left px-1">To confirm the booking, 500sek/50$/50€/50£ deposit is required, and it will be cut from the final. Also feel free to ask for updating/making changes of the tattoo design until you feel safe and happy ☺️</p>

  

</div>

    <p className="mb-2">&gt; Cheers</p>
    <p className="text-pink-200">
      &gt; Booking/Consultation: 
      <a href="mailto:sadgay007@gmail.com" className="underline hover:text-white">
        sadgay007@gmail.com
      </a>
      / DM 
    </p>
  </div>

  {/* Footer */}

</div>


</section>
  );
};

export default About;
