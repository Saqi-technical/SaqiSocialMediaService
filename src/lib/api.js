import { request } from "./apiHandler";
const baseUrl = "https://backend.saqisolutions.com/api";
export const API = {
  // User
  userLogin: (body) => request.post(baseUrl + "/user/sign-in", body),
  userRegister: (body) => request.post(baseUrl + "/user/sign-up", body),

  // orders
  createOrder: (body) =>
    request.post(baseUrl + "/order/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getOrderById: (id) => request.get(baseUrl + `/order/${id}`),
};
