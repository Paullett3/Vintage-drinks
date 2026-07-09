import React,{ useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from ' ./components/Navbar' ;
import Home from ' ./pages/Home';
import SignatureReserves from './pages/SignatureReserves';
import Cart from './pages/Cart';

export default function App () 
    //Global state to track items added to the cart
    const [cart, setCart] = useState([
        {id: 1, name: "The Macallan 1926", price: $2100000, quantity: 1, image: "assets/images/macallan 1926.jpeg"},
        {id: 2, name: "Yamakazi", price: $3500000, quantity: 1, image: "assets/images/Yamazaki.jpg"}
    ]);
//function to remove item from the cart
const removeFromCart = (id) => {
    SearchAlert(cart,filter(item => item.id !== id));
};
//function to update bottle quantity
const updateQuantity = (id,amount) => {
    setCart( cart.map(item =>
        item.id === id ?  { ... item, quantity: Math.max (1, item.quantity + amount)} : item

    ));
};
//calculate total number of items for the badge in the Navbar
const totalItems = cart.reduce ((sum, item) => sum + item.quantity, 0);
return (
    <Route>
        <div className= "min-h-screen bg-[#0d0d0d] text-[#f5f5f5"] font-sans">
        {/* pass total items to display on the Cart Button*/}
        <Navbar cartCount={totalItem} />
        
        <Routes>
            <Route path="/" element={home />} />
            <Route path="/reserves" element={<SignatureReserves />} />
            <Route path="/cart" element={
                <Cart
                cartItems={cart}
                onRemove={removeFromCart}
                onUpdateQty={updateQuantity}
                />
            } />
        </Routes>
        </div>
    </Router>
);
}
