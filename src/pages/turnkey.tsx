import Layout from "@/components/Layout/Layout";

// const ContactPage = () => {
//   return (
//     <Layout title="Contact">

//       <main className="grid grid-cols-12 gap-3 md:pt-5 md:pb-10 lg:gap-10 contain">
//         <header className="col-span-12 flex-center py-10  flex-center flex-col">
//           <span className="text-teal-850 font-bold">NEED HELP?</span>
//           <span className="text-gray-900 font-bold text-3xl mt-3">
//             Get in Touch with us?
//           </span>
//         </header>

//         {/* <section className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 lg:gap-5 group"></section>
//         <section className="col-span-12 md:col-span-6 flex flex-col space-y-4"></section> */}
//       </main>
//     </Layout>
//   );
// };

const ConsultationPage = () => {
  return (
    <Layout title="Consultation" className="relative bg-white">
      <main className="grid grid-cols-12 contain  overflow-hidden py-10">
        <section className="col-span-12 lg:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
        <section className="col-span-12 lg:col-span-6">
          <img
            className="w-full bg-gray-50 object-cover"
            src="https://img.freepik.com/free-photo/mature-lawyer-pointing-signature-place-contract-document-with-pen_23-2147898521.jpg?w=740&t=st=1687043430~exp=1687044030~hmac=1177df0c261944dadba8de6680e79a73498560cb4a4f904986c125afec6bde74"
            alt=""
          />
        </section>
      </main>
    </Layout>
  );
};

export default ConsultationPage;
