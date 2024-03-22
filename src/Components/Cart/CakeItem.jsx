import React from 'react';

const CakeItem = ({ cake, onAddToCart }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{cake.name}</h2>
      <p className="text-gray-600">{cake.description}</p>
      <img className="flex flex-wrap w-[420px] h-[420px] rounded-2xl pt-2" src={cake.image} alt={cake.name}/>
      <p className="text-gray-800 font-semibold mt-2">Rs.{cake.price}</p>
      <button
        className="mt-2 bg-[#F4BBC9] hover:bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={() => onAddToCart(cake)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CakeItem;