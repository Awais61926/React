import headphoneImage from './assets/headphone.webp';
import headphone2 from './assets/headphone2.webp';
import pngegg1 from './assets/pngegg1.png';
import pngegg2 from './assets/pngegg2.png';
import l2 from './assets/l2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
  <div>
    <div className='w-full  h-[200px] flex bg-slate-400'>
       <img src={l2} className='w-[110px] h-[100px] m-4'/>

       
<div>
  <input
    placeholder='Search Item'
    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  sm:w-[70px] md:w-[570px] lg:w-[820px] xl:w-[1270px] p-3.5 mt-9'
  />
</div>


      <div className='m-2 mt-9'>
        <FontAwesomeIcon icon={faCartShopping} className='text-3xl' />
        <h1>Cart</h1>
      </div>
    </div>

    <div className='flex items-center '>
      <h1 className='text-center text-2xl bg-black p-4 my-2 text-white'>Featured Products</h1>
    </div>
    <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={headphoneImage} className='my-1'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/* Second card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={headphone2} className='px-14 my-1'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Ronin RX-500 wireless Gaming Headphones with active noise caneclation and 20hrs battery backup</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/* Third Card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/* Fourth Card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg2} className='px-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/*fifth Card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={headphoneImage}/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/* Sixth Card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/*  seventh Card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/* eighth Card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
    {/* ninth card */}
    <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/* tenth card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/*eleventh card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>
      {/*twelfth card */}
      <div className="bg-white w-[300px] h-[370px] shadow-lg">
        <img src={pngegg1} className=' mx-12'/>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-xl text-green-500 font-semibold'>Gaming Headphones For Sale</h1>
          <p className='mx-4 text-justify'>Best Gaming Headphones you can find in the market with active noise caneclation</p>
        <p className='text-lg font-semibold'>Price <span className='text-green-500'>20$</span></p>
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-green-500 text-white px-3 py-2 rounded shadow'>Add To Cart</button>
          <button className='border border-green-500 py-2 px-3 rounded'>View Product</button>
        </div>
        </div>
      </div>

    </div>
   </div>
  )
}

export default App;