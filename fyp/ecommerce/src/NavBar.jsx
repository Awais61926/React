import l2 from './assets/l2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function NavBar(){
    return(
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

        </div>
    )
}
export {NavBar}