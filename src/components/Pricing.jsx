const includedFeatures = [
  '24/7 Food service',
  'Member resources',
  'Swimming Pool access',
  'Tour Guide',
]

const Pricing = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-bold font-Poppins tracking-tight text-gray-900 sm:text-4xl">Book Your Hotel Now.</h2>
          <p className="mt-6 text-lg font-Poppins leading-8 text-gray-600">
            Book you hotel upto 3 days before your planned holiday with cashback available.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-green-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold font-Poppins tracking-tight text-gray-900">Checkout</h3>
            <p className="mt-6 text-base font-Poppins leading-7 text-gray-600">
              Book the room of your dreams with completely secure payment.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold font-Poppins leading-6 text-green-500">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <div className="h-6 w-5 flex-none font-Poppins text-green-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-green-500/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold font-Poppins text-gray-600">Pay once, hassle-free</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold font-Poppins tracking-tight text-gray-900">$100</span>
                  <span className="text-sm font-semibold leading-6 font-Poppins tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block font-Poppins w-full rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                >
                  Book now
                </a>
                <p className="mt-6 text-xs font-Poppins leading-5 text-gray-600">
                  Invoices and receipts available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing