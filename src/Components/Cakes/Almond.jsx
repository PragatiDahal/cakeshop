import React from 'react'
import { useState } from 'react';

const Almond = ({ onAddToCart }) => {
    const [deliveryLocation, setDeliveryLocation] = useState('');
  const [specialMessage, setSpecialMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    onAddToCart({ deliveryLocation, specialMessage });
  };

  return (
    <div className="flex flex-col flex-wrap max-w-lg mx-auto p-8  bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Almond Coconut Cake</h2>
      <img
        className="w-full h-auto md:w-[450px] md:h-[450px] rounded-md mb-4"
        src="https://i.pinimg.com/564x/9b/5e/7e/9b5e7e4444c6f1099cc7d95fea09cd24.jpg"
        alt="Chocolate Cake"
      />
      <p className="text-gray-700 text-lg mb-4">
        Our delicious chocolate cake is made with the finest cocoa powder, ensuring a rich and decadent flavor in every bite. Whether you're celebrating a special occasion or simply indulging in a sweet treat, our chocolate cake is the perfect choice.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="deliveryLocation" className="block text-gray-700 font-bold mb-2">Delivery Location:</label>
          <input
            type="text"
            id="deliveryLocation"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter delivery location"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="specialMessage" className="block text-gray-700 font-bold mb-2">Special Message:</label>
          <textarea
            id="specialMessage"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter special message"
            rows="4"
            value={specialMessage}
            onChange={(e) => setSpecialMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="bg-[#F4BBC9] text-white py-2 px-4 rounded-md hover:bg-red-500">Add to Cart</button>
      </form>
    </div>
   
  )
}

export default Almond