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

      saveToken(token);
      setUser({ email, token });

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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
