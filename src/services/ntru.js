// services/ntru.js
import request from "@/utils/request";

export const encryptNTRU = (params) => {
  return request.post("/api/encrypt/ntru", { data: params });
};

export const decryptNTRU = (params) => {
  return request.post("/api/decrypt/ntru", { data: params });
};
