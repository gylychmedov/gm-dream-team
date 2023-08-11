import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import { api } from "@/common/API";

const Watcher = () => {
  const token = getCookie("token");
  useEffect(() => {
    token && api.get("auth/me").then((res) => console.log(res.data));
  }, []);

  return <Toaster />;
};

export default Watcher;
