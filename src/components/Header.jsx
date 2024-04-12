const Header = () => {
  return (
    <div>
      <section className="flex items-center relative">
        <section className="m-6 font-LilitaOne text-4xl text-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <p>Travelify</p>
        </section>
        <p className="font-Poppins font-light ml-14 hover:text-green-500">Recommended Places</p>
        <p className="font-Poppins font-light ml-14 hover:text-green-500">Explore</p>
        <p className="font-Poppins font-light ml-14 hover:text-green-500">Tours</p>
        <section className="flex items-center ml-14">
          <p className="font-Poppins font-light hover:text-green-500">Hotels</p>
        </section>
        <section className="flex items-center ml-14">
          <p className="font-Poppins font-light hover:text-green-500">Flights</p>
        </section>
        <section className="flex items-center ml-14">
          <p className="font-Poppins font-light hover:text-green-500">Tour</p>
        </section>
        <section className="flex items-center ml-14">
          <p className="font-Poppins font-light hover:text-green-500">Cabs</p>
        </section>

      </section>
    </div>
  )
}

export default Header