import React from 'react';
import h from './assets/h.jpg';

function HeroSection() {
  return (
    <div>
      <div className="h-[400px] bg-cover bg-fixed bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${h})` }}>
        <h1 className='text-4xl text-yellow-500 font-semibold font-serif mb-6'>Connecting You to Tomorrow's Technology</h1>
        <div className='flex items-center justify-center gap-6'>
          <button className='bg-green-500 text-white px-4 py-2 rounded shadow'>Shop Now</button>
          <button className='bg-gray-500 text-white px-4 py-2 rounded shadow'>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
