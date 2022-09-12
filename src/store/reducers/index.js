import { combineReducers } from "redux";
import lang from "../Lang/LangReducer";
import loader from "../Loader/LoaderReducer";
import snackbar from "../Snackbar/SnackbarReducer";
import Feature1 from "../Feature1/FeatureReducer";
import login from "../Login/LoginReducers";
import needy from "../Needy/NeedyReducer";
import token from "../Token/tokenReducer";
// import LoginReducers from "../Login/LoginReducers";


export default combineReducers({
  lang,
  login,
  token,
  needy,
  loader,
  snackbar,
  Feature1
  // LoginReducers
  
});
