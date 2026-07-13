import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, onRemove, onUpdateQty }) {
  // Calculate total checkout cost
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-serif text-gray-400 mb-4">Your vault is currently empty.</h2>
        <Link to="/reserves" className="text-[#e58e26] underline hover:text-[#f39c12]">Browse Signature Reserves</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-[#e58e26] mb-8">Your Cart Vault</h1>
      
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-[#141414] p-5 border border-[#262626] rounded-lg gap-4">
            <div className="flex items-center gap-6">
              <img src={item.image} alt={item.name} className="w-16 h-24 object-cover bg-neutral-800 rounded" />
              <div>
                <h3 className="text-lg font-serif">{item.name}</h3>
                <p className="text-[#e58e26] font-mono mt-1">${item.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Quantity management controls */}
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-[#333] rounded">
                <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1 hover:bg-[#262626] text-gray-400">-</button>
                <span className="px-4 py-1 font-mono">{item.quantity}</span>
                <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1 hover:bg-[#262626] text-gray-400">+</button>
              </div>
              
              {/* Delete button */}
              <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-400 text-sm transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout summary panel */}
      <div className="mt-10 p-6 bg-[#141414] border border-[#262626] rounded-lg text-right">
        <h3 className="text-xl text-gray-400">Total Investment</h3>
        <p className="text-3xl font-mono text-[#e58e26] font-bold mt-2">${totalPrice.toLocaleString()}</p>
        <button className="mt-4 bg-[#e58e26] text-black font-bold px-8 py-3 rounded hover:bg-[#f39c12] transition-colors w-full sm:w-auto">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}