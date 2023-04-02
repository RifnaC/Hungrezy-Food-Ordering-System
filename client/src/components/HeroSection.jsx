import React from "react";

function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center leading-10">
      <h1 className="font-bold text-6xl font-serif">Hungrezy</h1>
      <p className="font-mono">You choose it We place it</p>
      <a href="#categories">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full tracking-widest">
          View Menu
        </button>
      </a>
    </div>
  );
}
 
export default HeroSection;
