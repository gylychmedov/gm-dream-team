export default function Banner() {
  return (
    <>
      <div className="relative  bg-white overflow-hidden">
        <div className=" flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div
            className="absolute left-1/2 right-0 top-0 z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b57c] to-[#9189fc8e] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>
              <h1 className="text-4xl font-black text-black mb-4 ">
                Grant
                <span className="text-blue-600"> Managment</span>
              </h1>
              <h2 className="text-xl leading-relaxed font-medium text-gray-700">
                Welcome to the "GM-Dream Team" grant agency! We are your
                dedicated partner in bridging the gap between grantor and
                grantee organizations.
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 "
                >
                  <span>Contact us</span>
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none "
                >
                  <span>Learn more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="relative mx-5 lg:w-96">
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mt-16 -ml-20" />
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mt-20 -ml-14" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mb-16 -mr-20" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mb-20 -mr-14" />
              <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 border border-blue-850/50" />
              <div className="absolute inset-0 rounded-xl -m-6 rotate-1 border border-pink-650/50 bg-opacity-75 shadow-inner" />
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
                className="relative rounded-lg mx-auto shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
