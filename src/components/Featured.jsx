import display1 from '../Icons/display1.jpg'
import display2 from '../Icons/display2.jpg'
import display3 from '../Icons/display3.jpg'
import display4 from '../Icons/display4.jpg'

const Featured = () => {
  return (
    <div>
      <section>
        <p className="text-5xl font-Poppins font-bold ml-[450px] mt-[75px]">Featured Hotels</p>
        <div className='grid grid-cols-4 mt-14'>
          <section>
            <img src={display1} className='ml-10 w-60 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'></img>
            <p className='ml-10 text-2xl font-Poppins font-bold mt-4'>Blue Comfort</p>
            <p className='ml-10 text-base font-Poppins text-green-500 font-semibold mt-1'>$455 /starting at</p>
          </section>
          <secion>
            <img src={display2} className='ml-6 w-60 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'></img>
            <p className='ml-10 text-2xl font-Poppins font-bold mt-4'>New Apollo Hotel</p>
            <p className='ml-10 text-base font-Poppins text-green-500 font-semibold mt-1'>$900 /starting at</p>
          </secion>
          <section>
            <img src={display3} className='ml-6 w-60 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'></img>
            <p className='ml-10 text-2xl font-Poppins font-bold mt-4'>New Age Hotel</p>
            <p className='ml-10 text-base font-Poppins text-green-500 font-semibold mt-1'>$585 /starting at</p>
          </section>
          <section>
            <img src={display4} className='ml-6 w-60 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'></img>
            <p className='ml-10 text-2xl font-Poppins font-bold mt-4'>Helios Resort</p>
            <p className='ml-10 text-base font-Poppins text-green-500 font-semibold mt-1'>$780 /starting at</p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Featured