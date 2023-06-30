import Layout from "@/components/Layout/Layout";
import { GiHeartKey } from "react-icons/gi";

const ForGrantorsPage = () => {
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
              <span>For Grantors</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to the "GM-Dream Team" grant agency! We are your dedicated
              partner in bridging the gap between grantor and grantee
              organizations. Our agency plays a vital role in educating
              potential grantee organizations about grant policies and
              requirements, ensuring a seamless and effective grant management
              process for both parties.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              At the "GM-Dream Team" grant agency, we understand the importance
              of establishing strong connections between grantor and grantee
              organizations. We serve as a reliable link, facilitating
              communication, understanding, and collaboration between these two
              crucial entities. Our goal is to ensure that grantor organizations
              find suitable and capable grantees who can effectively implement
              projects aligned with their mission and goals.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              One of the key services we offer to grantor organizations is the
              education and training of potential grantee organizations. We
              recognize that grant policies and requirements can sometimes be
              complex and overwhelming, particularly for organizations new to
              the grant-seeking process. Our agency is here to simplify and
              demystify these policies, guiding potential grantees through every
              step of the way.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our team of experienced professionals provides comprehensive
              training sessions and consultations for potential grantees. We
              familiarize them with the grant application process, help them
              understand the specific requirements of grantor organizations, and
              offer guidance on how to craft competitive grant proposals.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              By educating potential grantees on grant policies and
              requirements, we contribute to streamlining the overall grant
              management process. When potential grantees have a clear
              understanding of what grantor organizations expect, they can
              tailor their proposals accordingly, leading to more efficient and
              effective grant applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              We work closely with grantor organizations to understand their
              priorities, funding objectives, and desired outcomes. Through this
              collaboration, we provide valuable insights to potential grantees,
              ensuring that their project ideas align with the mission and goals
              of the grantor organizations. This alignment increases the chances
              of successful grant applications and promotes a strong partnership
              between grantor and grantee organizations.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              At the "GM-Dream Team" grant agency, we believe in building a
              stronger grant community by fostering knowledge sharing and
              collaboration. Through our educational efforts, we empower
              potential grantees to develop the skills and expertise necessary
              to navigate the grant landscape successfully. By equipping them
              with the knowledge of grant policies and requirements, we
              contribute to the growth and development of capable grantees who
              can drive positive change in their communities.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Partner with Us:
              <br />
              We invite grantor organizations to partner with us in creating a
              thriving grant ecosystem. By collaborating with the "GM-dream
              team" grant agency, you can access a pool of well-informed and
              competent potential grantees who are equipped to meet your
              specific requirements. Together, we can ensure that your grants
              are awarded to deserving organizations that have the capacity to
              make a lasting impact.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contact us today to learn more about how we can support your
              grantor organization and be a catalyst for positive change through
              effective grant management education and assistance. Let's work
              together to empower potential grantees and create a brighter
              future for our communities.
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

export default ForGrantorsPage;
