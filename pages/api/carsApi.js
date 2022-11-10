import axios from "axios";

const carsApi = axios.create({
  baseURL: "https://cars-nodejs-api.herokuapp.com",
});

export default carsApi;