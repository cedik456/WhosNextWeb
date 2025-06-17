import { createContext, useContext, useState } from "react";
import api from "../utils/axiosInstance";
import { removeToken, saveToken } from "../utils/storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  async function login(email, password) {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      const token = data.token;

      const userData = { email, token };
      saveToken(token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  }

  async function signup(name, email, password) {
    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      const token = data.token;

      const userData = { name, email, token };
      saveToken(token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  }

  function logout() {
    removeToken();
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
