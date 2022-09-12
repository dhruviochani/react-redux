import {axiosInstance} from '../../network/apis';
import { LOGIN_URL } from '../../utils/Constants';
const handlerEnabled = false;

// Replace endpoint and change api name
const loginApiRequest = async () => {
  return await axiosInstance.get(LOGIN_URL, { handlerEnabled });
};

export default {
  loginApiRequest
};