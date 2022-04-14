import axios from "axios";
const baseUrl = "http://localhost:3000";

export default (resource, token) => {
  return axios.create({
    baseURL: `${baseUrl}/${resource}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
