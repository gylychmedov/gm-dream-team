import { BiSupport } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-7 text-3xl font-lato-bold text-center">
          Other services
        </h2>
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl ">
          <div className="bg-blue-850/5 p-8 sm:p-10 flex-center space-x-3">
            <BsFillPlayCircleFill size={34} />
            <div className="text-3xl font-lato-bold">Courses</div>
          </div>
          <div className="bg-blue-850/5 p-6 sm:p-10 flex-center space-x-3">
            <BiSupport size={34} />
            <div className="text-3xl font-lato-bold">Consultation</div>
          </div>

          <div className="bg-blue-850/5 p-8 sm:p-10 flex-center space-x-3">
            <FaUser size={34} />
            <div className="text-3xl font-lato-bold">M & E</div>
          </div>
          <div className="bg-blue-850/5 p-6 sm:p-10 flex-center space-x-3">
            <BiSupport size={34} />
            <div className="text-3xl font-lato-bold">Consultation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
