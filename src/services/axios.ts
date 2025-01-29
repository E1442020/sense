import axios from "axios";
// import { logout } from "../../auth/slice/authSlice";
import { Navigate } from "react-router-dom";

export const HOSTNAME = "http://localhost:3000/";

const BASE_END_POINT = `${HOSTNAME}`;

const baseURL = BASE_END_POINT;
const Axios = axios.create({ baseURL });
Axios.defaults.baseURL = baseURL;
Axios.defaults.headers["x-app-token"] = "";
// Axios.defaults.headers["accept-language"] = i18n.language;

Axios.interceptors.request.use(async (req: any) => {
  // const token = store.getState().authReducer?.token;

  //don't check the token in login or register
  if (req.url === "user/auth/login" || req.url === "user/auth/signup") {
    return req;
  }

  // req.headers.Authorization = `Bearer ${token}`;

  ///to handle form data
  if (req.data instanceof FormData) {
    req.headers["Content-Type"] = "multipart/form-data";
  }
  console.log("gg");

  return req;
});

Axios.interceptors.response.use(
  (res) => {
    // console.log({ res });
    return res;
  },
  (err) => {
    // console.log({ err });

    if (err?.response?.status === 401 || err?.response?.status === 403) {
      // store.dispatch(logout());
      Navigate({ to: "/" });
    } else {
    }

    return Promise.reject(err);
  }
);

export default Axios;
