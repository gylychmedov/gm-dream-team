import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div
        className="relative bg-fixed bg-white overflow-hidden bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1595076590135-e070743b31c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src="" alt="" />
        <div className=" flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-36">
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
          <div className="lg:w-9/12 bg-black/5 backdrop-blur rounded-xl p-5 lg:flex lg:items-center">
            <div className="">
              <h1 className="text-3xl font-black text-white mb-4 ">
                Welcome to the <br /> GM-DREAM TEAM agency
              </h1>
              <h2 className="text-xl leading-relaxed font-medium text-white">
                Unlock Your Grant Management Talent with GM-Dream Team and Make
                Your Dreams a Reality
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center space-x-2 font-semibold rounded-lg px-7 py-3 leading-6  bg-pink-650 text-white hover:text-white "
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="relative mx-5 lg:w-96">
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 border-opacity-30 rounded-full -mt-16 -ml-20" />
              <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 border-opacity-30 rounded-full -mt-20 -ml-14" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 border-opacity-30 rounded-full -mb-16 -mr-20" />
              <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 border-opacity-30 rounded-full -mb-20 -mr-14" />
              <img
                src="/logo.svg"
                className="rounded-lg mx-auto shadow-lg bg-white w-60 relative"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
