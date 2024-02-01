import { loginUser } from "@/app/actions/auth";
import { jwtDecode } from "jwt-decode";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextProps = {
  user: any;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const result = await loginUser(credentials);
      if (result.success) {
        setUser(result.data);
      } else {
        console.error("Login failed:", result.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
