import React from "react";

function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center leading-10 ">
      <h1 className="font-extrabold text-6xl font-serif font-noto pt-0">Hungrezy</h1>
      <p className="font-serif font-roboto">You choose it We place it</p>
      <a href="#categories">
        <button class="bg-gray-300 hover:bg-gray-500 text-black font-medium py-0 px-4 rounded-full tracking-widest font-serif font-roboto">
          View Menu
        </button>
      </a>
    </div>
  );
}
 
export default HeroSection;
