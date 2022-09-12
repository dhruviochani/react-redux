import * as types from "./NeedyTypes";

const INITIAL_STATE = {fullName:'', mobileNo: '', email: '', country: '', state: '', city: '', preferedLanguage: '', 
demo: '', time:[''], startTime: [''], endTime: [''], technology: [''] };

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ENTER_PERSONAL_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
