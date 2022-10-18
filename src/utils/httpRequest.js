import axios from "axios";

export const httpRequest = axios.create({
  baseURL: "https://634572cc39ca915a69ff7e75.mockapi.io/api",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});
