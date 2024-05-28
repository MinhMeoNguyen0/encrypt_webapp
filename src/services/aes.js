// services/aes.js
import request from "@/utils/request";

export const encryptAES = (params) => {
  return request.post("/api/encrypt/aes", { data: params });
};

export const decryptAES = (params) => {
  return request.post("/api/decrypt/aes", { data: params });
};
