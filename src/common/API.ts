import axios from "axios";

export const api = axios.create({
  baseURL: "http://gm-dream.team/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
