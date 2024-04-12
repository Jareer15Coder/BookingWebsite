const Footer = () => {
  return (
    <footer>
        <section className="flex inline">
          <p className="text-green-500 text-4xl font-LilitaOne font-bold ml-10"><br/>Travelify</p>
          <p className="text-white font-Poppins text-base font-medium mt-10 ml-6">Explore Destinations you<br/>have not yet dreamed of</p>
          <grid className="grid grid-cols-4">
            <element className="ml-14 mt-10">
              <p className="text-3xl font-bold font-Poppins text-white">Pages</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">About</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Locations</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Bookings</p>
              <p className="font-Poppins mt-4 mb-6 text-white hover:text-green-500">Contact Us</p>
            </element> 
            <element className="ml-14 mt-10">
              <p className="text-3xl font-bold font-Poppins text-white">Links</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Sign Up</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Sign In</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Privacy Policy</p>
              <p className="font-Poppins mt-4 mb-10 text-white hover:text-green-500">Terms & Conditions</p>
            </element> 
            <element className="ml-14 mt-10">
              <p className="text-3xl font-bold font-Poppins text-white">Offices</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Pakistan</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Iran</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Turkey</p>
              <p className="font-Poppins mt-4 mb-6 text-white hover:text-green-500">Russia</p>
            </element> 
            <element className="ml-14 mt-10">
              <p className="text-3xl font-bold font-Poppins text-white">Booking</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Hotel</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Flights</p>
              <p className="font-Poppins mt-4 text-white hover:text-green-500">Tour</p>
              <p className="font-Poppins mt-4 mb-6 text-white hover:text-green-500">Cabs</p>
            </element> 
          </grid>
        </section>
    </footer>
  )
}

export default Footer