// services/rsa.js
import request from "@/utils/request";

export const encryptRSA = (params) => {
  return request.post("/api/encrypt/rsa", { data: params });
};

export const decryptRSA = (params) => {
  return request.post("/api/decrypt/rsa", { data: params });
};
