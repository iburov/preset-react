import * as axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export function blankFunction() {
  let getUsersUrl = `${baseUrl}blank`;
  return axios.get(getUsersUrl);
}
