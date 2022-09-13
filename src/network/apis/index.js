import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";
import { LOGIN_URL, DASH_URL } from "../../utils/Constants";

//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: LOGIN_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const axiosinstance = axios.create({
  baseURL: DASH_URL,
  headers: {
    // 'Authorization': `Bearer ${localStorage.token}`,
    'Content-type': 'application/json'
  }
})

export const fetchData = (values) => axios.post(LOGIN_URL, values).then((res)=> res.data.password) //change this
export const fetchdata=() => axios.get(DASH_URL).then((res)=>res.data)
// Handle request process

axiosInstance.interceptors.request.use(request => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

axiosinstance.interceptors.request.use(request => requestHandler(request));
// Handle response process
axiosinstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);
