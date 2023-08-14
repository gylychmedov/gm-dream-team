import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import { api } from "@/common/API";
import useUserStore from "@/store/useUser";

const Watcher = () => {
  const { isAuth, setUser } = useUserStore();
  const token = getCookie("token");
  useEffect(() => {
    token &&
      !isAuth &&
      api.get("auth/me").then((res) => setUser(res.data.user));
  }, []);

  return <Toaster />;
};

export default Watcher;
