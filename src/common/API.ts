import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");

export const api = axios.create({
  baseURL: "https://gm-dream.team/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});
