import {axiosinstances} from '../../network/apis';
const handlerEnabled = false;

// Replace endpoint and change api name
export const loadUsersApi = async () => {
  return await axiosinstances.get(`ENDPOINT`, { handlerEnabled });
};

// export default loadUsersApi;
