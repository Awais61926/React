import React, { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import i2 from './assets/i2.png';

function LandingPage() {
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleHeartClick = () => {
    setHeartClicked(!isHeartClicked);


    const message = isHeartClicked ? 'Removed from Wishlist' : 'Added to Wishlist';
    setAlertMessage(message);

    
    setTimeout(() => {
      setAlertMessage('');
    }, 700);
  };

  return (
    <div>
      {alertMessage && (
        <div className='bg-gray-400 text-white p-2 text-center fixed top-0 left-0 w-full'>
          {alertMessage}
        </div>
      )}
      <div className='flex items-center'>
        <h1 className='text-center text-2xl bg-black p-4 my-2 text-white'>
          Featured Products
        </h1>
      </div>
      <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Product Card */}
        <div className='relative bg-white w-full sm:w-[250px] h-[350px] shadow-lg transform transition-all hover:scale-105'>
          <div className='absolute top-2 right-2 bg-gray-100 p-2 rounded-full'>
            <FaHeart
              size={20}
              color={isHeartClicked ? 'red' : 'grey'}
              onClick={handleHeartClick}
              className='cursor-pointer transition-transform transform-gpu hover:scale-110'
            />
          </div>
          <span className='absolute top-0 left-0 bg-yellow-300 text-white py-1 px-2 transform ml-1 rounded-b'>
            -31%
          </span>
          <img src={i2} alt='Product' className='w-full h-[150px] object-cover' />
          <div className='flex flex-col justify-center p-4'>
            
            <p className='my-2 text-justify'>
              Eos M50 Without lens
            </p>
            <div className='flex items-center my-2'>
              <span className='text-lg text-gray-500 line-through mr-2'>$700</span>
              <span className='text-lg text-green-500'>$500</span>
            </div>
            <div className='flex items-center my-2'>
              {[...Array(5)].map((star, index) => (
                <FaStar key={index} className='text-yellow-500 mr-1' />
              ))}
              <span className='text-gray-500 ml-2'>(15 reviews)</span>
            </div>
            <div className='flex items-center justify-around mt-2'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300'>
                Add to Cart
              </button>
              <button className='bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
