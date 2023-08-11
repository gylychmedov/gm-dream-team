import { api } from "@/common/API";
import Layout from "@/components/Layout/Layout";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    phone: "",
    username: "",
    password: "",
    password_confirm: "",
  });

  const handleSubmit = () => {
    if (userData.password == userData.password_confirm) {
      api
        .post("auth/register", {
          email: userData.email,
          phone: userData.phone,
          username: userData.username,
          password: userData.password,
        })
        .then((res) => {
          if (res.data.message == "SUCCESS") {
            toast.success("Success");
            setCookie("token", res.data.token, { path: "/", maxAge: 86400 });
            window?.location.replace("/");
          }
        })
        .catch((e) => toast.error(e.message));
    } else {
      toast.error("Password wrong");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLFormElement>) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <Layout className="bg-gray-50" title="Signup">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:my-56 lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
          GM-Dream Team
        </a>
        <form
          onChange={handleChange}
          className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 "
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  value={userData.username}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  value={userData.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone
                </label>
                <input
                  value={userData.phone}
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  placeholder="+123456789"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  value={userData.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  value={userData.password_confirm}
                  type="password"
                  name="password_confirm"
                  id="password_confirm"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              {/* <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline "
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div> */}
              <div
                onClick={() => handleSubmit()}
                className="w-full bg-blue-850 text-white bg-primary-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-3 text-center "
              >
                Create an account
              </div>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/user/signin"
                  className="font-medium text-primary-600 hover:underline text-blue-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
