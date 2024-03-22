import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl  font-semibold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <p>{item.name}</p>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                onClick={() => onRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="mt-4 bg-[#F4BBC9] hover:bg-red-500 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;