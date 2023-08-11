import { api } from "@/common/API";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";

const Signin = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    api
      .post("auth/login", {
        username: userData.username,
        password: userData.password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          toast.success("Success");
          window?.location.replace("/");
        }
      })
      .catch((e) => toast.error(e.message));
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
              Login
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
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>

              <div
                onClick={() => handleSubmit()}
                className="w-full bg-blue-850 text-white bg-primary-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-3 text-center "
              >
                Login
              </div>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account?
                <Link
                  href="/user/signup"
                  className="font-medium text-primary-600 hover:underline ml-2 text-blue-500"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
