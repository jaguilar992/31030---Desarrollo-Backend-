import axios from "axios";

// const baseUrl = "http://localhost:3000"

const client = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 2000,
  headers: {},
});


export default client;