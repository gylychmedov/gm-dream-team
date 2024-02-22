import { api } from "@/common/API";
import Layout from "@/components/Layout/Layout";
import { setCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Signup = () => {
  const { t } = useTranslation("user");
  const [showPassword, setShowPassword] = useState(false);

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
              {t("create_account")}
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {t("username")}
                </label>
                <input
                  value={userData.username}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  placeholder={t("username")}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {t("your_email")}
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
                  {t("phone")}
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
                  {t("password")}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 pr-12 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                    required
                  />{" "}
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-0.5 bottom-0.5 right-0.5  px-2 min-w-[48px] -ml-0.5 flex items-center rounded-r-lg bg-gray-50 text-gray-500"
                  >
                    {showPassword ? (
                      <IoMdEye size={24} />
                    ) : (
                      <IoMdEyeOff size={24} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {t("confirm_password")}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={userData.password_confirm}
                    name="password_confirm"
                    id="password_confirm"
                    placeholder="••••••••"
                    className="bg-gray-50 pr-12 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                    required
                  />{" "}
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-0.5 bottom-0.5 right-0.5  px-2 min-w-[48px] -ml-0.5 flex items-center rounded-r-lg bg-gray-50 text-gray-500"
                  >
                    {showPassword ? (
                      <IoMdEye size={24} />
                    ) : (
                      <IoMdEyeOff size={24} />
                    )}
                  </div>
                </div>
              </div>

              <div
                onClick={() => handleSubmit()}
                className="w-full bg-blue-850 text-white bg-primary-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-3 text-center "
              >
                {t("create_account")}
              </div>
              <p className="text-sm font-light text-gray-500">
                {t("already_have_account")}?
                <Link
                  href="/user/signin"
                  className="font-medium text-primary-600 hover:underline text-blue-500 ml-2"
                >
                  {t("login_here")}
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
