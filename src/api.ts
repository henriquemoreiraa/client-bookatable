import axios from "axios";

const url = "https://serverbookatable.vercel.app/api";

export default axios.create({
  baseURL: `${url}`,
});
