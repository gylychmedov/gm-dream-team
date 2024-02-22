import { api } from "@/common/API";
import Layout from "@/components/Layout/Layout";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { setCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";

const RecoveryPassword = () => {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("auth/password/forgot", {
        email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          setCookie("token", res.data.token, { path: "/", maxAge: 86400 });
          toast.success("Success");
          window?.location.replace("/");
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  };

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
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 "
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {t("reset-password")}
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {t("email")}
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-850 hover:bg-opacity-90 cursor-pointer text-white bg-primary-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-3 text-center "
              >
                {t("reset-password")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default RecoveryPassword;
