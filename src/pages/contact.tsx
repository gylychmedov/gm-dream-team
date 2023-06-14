import Layout from "@/components/Layout/Layout";
import { TbWorldWww } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <main className="grid grid-cols-12 gap-3 md:pt-5 md:pb-10 lg:gap-10 contain">
        <header className="col-span-12 flex-center py-10  flex-center flex-col">
          <span className="text-teal-850 font-bold">NEED HELP?</span>
          <span className="text-gray-900 font-bold text-3xl mt-3">
            Get in Touch with us?
          </span>
        </header>
        <section className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 lg:gap-5 group">
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-blue-500/10 w-14 h-14 flex-center rounded-full text-blue-500 mb-5">
              <TbWorldWww size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              Our Website
            </h2>
            <div className="text-gray-600">www.gm-dream.com</div>
            <div className="text-gray-600">www.gm-dream.com</div>
          </aside>
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-green-500/10 w-14 h-14 flex-center rounded-full text-green-500 mb-5">
              <BiSupport size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              Call Us On
            </h2>
            <div className="text-gray-600">+993 (61) 12 34 56</div>
            <div className="text-gray-600">+993 (61) 12 34 56</div>
          </aside>
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-yellow-500/10 w-14 h-14 flex-center rounded-full text-yellow-500 mb-5">
              <MdMail size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              Email Us
            </h2>
            <div className="text-gray-600">support@example.com</div>
            <div className="text-gray-600">support@example.com</div>
          </aside>
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-orange-500/10 w-14 h-14 flex-center rounded-full text-orange-500 mb-5">
              <IoShareSocialSharp size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              Social accounts
            </h2>
            <div className="text-gray-600">Instagram</div>
            <div className="text-gray-600">Twitter</div>
            <div className="text-gray-600">Facebook</div>
          </aside>
        </section>
        <section className="col-span-12 md:col-span-6 flex flex-col space-y-4">
          <input className="input" placeholder="Name*" />
          <input className="input" placeholder="Email*" />
          <input className="input" placeholder="Phone" />
          <input className="input" placeholder="Subject" />
          <textarea className="input" placeholder="Your message" rows={3} />
          <button className="bg-pink-650 py-3 text-base rounded-lg text-white">
            Submit Now
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
