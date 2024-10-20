/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IUser, LoginCredentials } from "@/interfaces/user.interface";
import { setupHttp } from "@/services/setupHttp";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCookie, setCookie } from "cookies-next";

export type ContextType = {
  login: (props: { email: string; password: string }) => Promise<unknown>;
  user?: IUser | null;
  token?: string;
};

export const AuthContext = createContext<ContextType>({} as ContextType);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>();

  const token = getCookie("refreshToken");

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        setupHttp.defaults.headers.common.Authorization = `Bearer ${token}`;
        await getUser();
      }
    };
    loadUser();
  }, [token]);

  const getUser = async () => {
    try {
      const res = await setupHttp.get("/auth/user");
      const user = res.data.payload.user;

      setUser(user);
    } catch (error: any) {
      setupHttp.defaults.headers.common.Authorization = ``;
      throw error.response.data.payload.errors;
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      const res = await setupHttp.post("/auth/login", credentials);
      const token = res.data.payload.token;

      setCookie("refreshToken", token);
      setupHttp.defaults.headers.common.Authorization = `Bearer ${token}`;

      await getUser();
    } catch (error: any) {
      setupHttp.defaults.headers.common.Authorization = ``;
      console.log(error);
      throw error.response.data.payload.errors;
    }
  };

  return (
    <AuthContext.Provider value={{ login, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Nenhum contexto informado!");
  }

  return context;
};
