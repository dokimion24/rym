import axios from "axios";

const serviceApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default serviceApi;
