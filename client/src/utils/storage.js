export function saveToken(token) {
  localStorage.setItem("authToken", token);
}
export function getToken() {
  localStorage.getItem("authToken");
}
export function removeToken() {
  localStorage.removeItem("authToken");
}
