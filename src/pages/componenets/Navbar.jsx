import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Navbar ({ cartCount }) {
    return (
        <nav className="flex justify-between items-center px-10 py-6 bg -[#141414] border-b border-[#262626]">
            <link to="/" className="text-2xl font-serif font-bold text -[#e58e26] tracking-wide">
         Vintage Whisky
            </link>
        </nav>
    )
}