import axios from "axios"
import Config from "../configs/Config"

const API = axios.create({
  baseURL: Config.API.URL,
  withCredentials: true
});

export default API;