import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";
import { LOGIN_URL, DASH_URL, RES_URL } from "../../utils/Constants";

//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: LOGIN_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const axiosinstance = axios.create(

  console.log("hi",localStorage.token),{
  baseURL: DASH_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.token}`,
    'Content-type': 'application/json'
  },
})

export const axiosinstances= axios.create(
  {
    baseURL: RES_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.token}`,
    'Content-type': 'application/json'
  },
}
)

export const fetchData = (values) => axios.post(LOGIN_URL, values).then((res)=> res.data.data.token) //change this
export const fetchdata=() => axios.get(DASH_URL, {
  headers: {
    'Authorization': `Bearer ${localStorage.token}`,
    'Content-type': 'application/json'
  },

}).then((res)=>res.data.data.results)
export const fetchdata1=()=>axios.get(RES_URL,{
  headers: {
    'Authorization': `Bearer ${localStorage.token}`,
    'Content-type': 'application/json'
  },
}).then((res)=>res.data.data.results)
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
