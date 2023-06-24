import Layout from "@/components/Layout/Layout";
import Services from "@/components/Services/Services";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const TurnkeyPage = () => {
  return (
    <Layout title="Turnkey" className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-blue-850 bg-opacity-70"></div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-20 lg:py-36 px-3 sm:px-5">
          <div className="">
            <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Turnkey services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Turnkey Grant Management Services: Simplifying the Funding Process
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to our webpage dedicated to turnkey grant management
              services. If you or your organization are seeking financial
              assistance for projects, programs, or research, navigating the
              complex world of grants can be overwhelming. That's where turnkey
              grant management services come in. Our team provides comprehensive
              solutions to streamline the grant application, management, and
              reporting processes, allowing you to focus on achieving your
              goals. In this web page, we will explore the key features,
              benefits, and steps involved in our turnkey grant management
              services.
              <br />
              The agency's turnkey grant management services cover various
              crucial aspects of the grant lifecycle, including organizations'
              training on a grant management process. This includes conducting
              thorough research to identify suitable funding opportunities that
              align with the organization's goals and priorities. The "GM-dream
              team" leverages its expertise and extensive network to identify
              relevant grantor organizations and funding sources that are most
              likely to support the organization's project ideas.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Once potential funding opportunities are identified, the agency
              assists in the preparation and composition of high-quality grant
              proposals. Our experienced team of grant writers crafts compelling
              narratives, ensuring that the proposals effectively communicate
              the organization's objectives, activities, and anticipated impact.
              They pay careful attention to aligning the proposal with the
              specific requirements and guidelines set by the grantor
              organizations.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Upon successful grant awards, the "GM-dream team" continues to
              support the organization through coaching the organization's grant
              management team on the efficient grant project management
              throughout the entire grant lifecycle. This includes setting up
              proper project monitoring and evaluation systems, ensuring that
              progress is tracked, and project outcomes are measured against
              predefined indicators. We provide consultation in financial
              management, ensuring that funds are allocated appropriately and
              transparently, and adhere to the grantor's reporting requirements.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Moreover, the agency provides guidance and support in compliance
              with all relevant regulations and policies to ensure the smooth
              execution of the grant project. Our team couches you on handling
              grant-related administrative tasks, and helps mitigate any
              potential challenges that may arise during the project
              implementation phase.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              By offering turnkey grant management services, the "GM-dream team"
              grant agency becomes a valuable partner for organizations looking
              to maximize their chances of securing grants and effectively
              managing them. This comprehensive approach provides support at
              each step of a grant management process.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contact Us
              <br />
              If you're seeking professional grant management services or have
              any inquiries, we would love to hear from you. Please reach out to
              our team using the contact information below:
              <br />
              Email: gm-dream@team
              <br />
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Thank you for visiting our website, and we look forward to
              assisting you in your grant management endeavors!
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-pink-650 w-80 text-center py-4 text-sm font-semibold text-white shadow-sm hover:-translate-y-1 duration-500"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Services /> */}
    </Layout>
  );
};

export default TurnkeyPage;
