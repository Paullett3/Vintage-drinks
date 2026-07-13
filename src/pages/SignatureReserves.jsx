import React from 'react';

export default function SignatureReserves() {
  // Mock data representing rare vintage catalog items
  const reservesList = [
    { id: 1, name: "The Macallan 25 Year Old Single Malt", origin: "Speyside, Scotland", desc: "Matured in hand-picked sherry oak casks from Jerez, Spain. Rich wood spice, dried fruits, and a warm amber hue.", price: "$2,500" },
    { id: 2, name: "Pappy Van Winkle's Family Reserve 23 Year", origin: "Kentucky, USA", desc: "An incredibly rare wheated bourbon. Deeply complex with notes of dark caramel, ripe fruits, oak, and sweet spice.", price: "$3,200" },
    { id: 3, name: "Yamazaki 18 Year Old Single Malt", origin: "Osaka, Japan", desc: "Award-winning Japanese masterpiece. Rich with prominent notes of cherry, dried cranberry, and profound Japanese oak (Mizunara).", price: "$1,800" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-serif text-[#e58e26] mb-2 text-center">Our Signature Reserves</h1>
      <p className="text-gray-400 text-center mb-12 italic">Vaulted treasures curated exclusively for the discerning palate.</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {reservesList.map((whisky) => (
          <div key={whisky.id} className="bg-[#141414] border border-[#262626] p-6 rounded-lg hover:border-[#e58e26] transition-all duration-300">
            <span className="text-xs text-[#e58e26] tracking-widest uppercase font-semibold">{whisky.origin}</span>
            <h3 className="text-xl font-serif my-2">{whisky.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{whisky.desc}</p>
            <div className="flex justify-between items-center border-t border-[#262626] pt-4">
              <span className="text-lg font-mono font-bold text-[#e58e26]">{whisky.price}</span>
              <button className="text-sm bg-transparent border border-[#e58e26] text-[#e58e26] px-4 py-2 rounded hover:bg-[#e58e26] hover:text-black transition-all duration-200">
                Acquire Bottle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}