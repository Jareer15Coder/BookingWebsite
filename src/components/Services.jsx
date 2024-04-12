import hotel3 from '../Icons/hotel3.jpg'

const Services = () => {
  return (
    <div>
      <section className='flex items-center mt-52'>
        <img src={hotel3} width="400" height="96" className='rounded-lg ml-20 '></img>
        <section className='mb-56'>
          <section className=''>
            <p className="grow ml-20 text-5xl font-bold font-Poppins">The Best Holidays<br/>Start Here!</p>
            <p className="grow ml-20 mt-10 text-normal font-light font-Poppins">Book your hotel with us and do not forget to grab an awesome hotel<br/>deal to save massive on your stay.</p>
          </section>
          <section className='absolute inset-x-0 ml-[535px] grid grid-cols-2 grid-rows-2 mt-[50px]'>
            <grid className="m-6">
              <p className='font-bold text-xl font-Poppins'>Quality Food</p>
              <p className='font-light font-Poppins text-base'>Our Food is perfectly tamed<br/>according to your tastes</p>
            </grid>
            <grid className="m-6">
              <p className='font-bold text-xl font-Poppins'>Quick Services</p>
              <p className='font-light font-Poppins text-base'>Instant service on just<br/>a single call</p>
            </grid>
            <grid className="m-6">
              <p className='font-bold text-xl font-Poppins'>High Security</p>
              <p className='font-light font-Poppins text-base'>Top-notch security to<br/>ensure a delightful experience.</p>
            </grid>
            <grid className="m-6">
              <p className='font-bold text-xl font-Poppins'>24 Hours Alert</p>
              <p className='font-light  font-Poppins text-base'>Alerts and Tips when<br/>you need them</p>
            </grid>
          </section>
        </section>
        
      </section>
    </div>
  )
}

export default Services