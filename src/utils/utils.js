// utils.js
export function getAccessToken() {
    return localStorage ? localStorage.getItem("access-token") : null;
  }
  
  export function setAccessToken(token) {
    localStorage.setItem("access-token", token);
  }