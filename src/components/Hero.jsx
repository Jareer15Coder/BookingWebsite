import landscape2 from '../Icons/landscape2.jpeg'
import landscape3 from '../Icons/landscape3.jpeg'
import beach from '../Icons/beach.jpg'

const Hero = () => {
  return (
    <div>
      <section className="ml-20 leading-snug text-black font-Poppins font-bold text-6xl">
        <p>Find the Top</p>
        <p className="text-green-500">Places Around.</p>
      </section>
      <p className="ml-20 mt-4 font-light font-Poppins text-slate-500">We bring you not only a stay option, but an experience in <br/>your budget to enjoy the luxury.</p>
      <button className="ml-20 mt-6 h-10 w-40 rounded-lg transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300">
        <p className="align-center text-white text-Poppins font-medium text-lg">Discover Now</p>
      </button>  
      <img src={landscape2} className='absolute rounded-lg size-[500px] inset-y-0 right-0 mt-32 mr-20'></img>
      <div>
        <img src={beach} className='absolute inset-y-0 right-0 mt-40 mr-[550px] border-4 border-white rounded-full size-14'></img>
        <img src={landscape3} className='absolute inset-y-0 right-0 mt-64 mr-[535px] border-4 border-white rounded-full size-20'></img>
      </div>
    </div>
  )
}

export default Hero