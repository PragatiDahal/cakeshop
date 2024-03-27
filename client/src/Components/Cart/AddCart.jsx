import React from 'react'
import {useState} from 'react'
import CakeItem from '././CakeItem'
import ShoppingCart from '././ShoppingCart'

const AddCart = () => {
    const [cart, setCart] = useState([]);
    const cakes = [
    { id: 1, name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 800, image:'https://i.pinimg.com/564x/af/e8/a0/afe8a0ce6eaee8a7bb59e4fde73b951e.jpg' },
    { id: 2, name: 'Vanilla Cake', description: 'Creamy vanilla cake', price: 850, image:'https://i.pinimg.com/564x/77/20/82/772082e37096730f5c3a6f50ecc97bce.jpg' },
    { id: 3, name: 'Red Velvet Cake', description: 'Rich red velvet cake', price: 950, image:'https://i.pinimg.com/564x/33/c9/f7/33c9f7ecb35642043318a7c80c58c489.jpg' },
  ];

  const handleAddToCart = (cake) => {
    setCart([...cart, cake]);
  };

  const handleRemoveFromCart = (cake) => {
    const updatedCart = cart.filter((item) => item.id !== cake.id);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl justify-center items-center font-semibold mb-4"> USA Cake Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cakes.map((cake) => (
          <CakeItem key={cake.id} cake={cake} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  )
}

export default AddCart