import {axiosinstance} from '../../network/apis';
const handlerEnabled = false;

// Replace endpoint and change api name
export const loadUsersApi = async () => {
  return await axiosinstance.get(`ENDPOINT`, { handlerEnabled });
};

// export default loadUsersApi;
