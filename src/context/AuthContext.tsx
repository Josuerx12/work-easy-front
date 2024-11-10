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
import { getCookie, setCookie, deleteCookie } from "cookies-next";

export type ContextType = {
  login: (props: { email: string; password: string }) => Promise<unknown>;
  logout: () => void;
  loading: boolean;
  user?: IUser | null;
  token?: string;
};

export const AuthContext = createContext<ContextType>({} as ContextType);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null | undefined>();
  const [load, setLoad] = useState(true);

  const token = getCookie("refreshToken_workeasy");

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        setupHttp.defaults.headers.common.Authorization = `Bearer ${token}`;
        await getUser();
      }
      setLoad(false);
    };
    loadUser();
  }, [token]);

  const getUser = async () => {
    try {
      const res = await setupHttp.get("/users/userAuthenticated");
      const userResponse = res.data;

      setUser(userResponse);
    } catch (error: any) {
      deleteCookie("refreshToken_workeasy");
      setUser(null);
      setupHttp.defaults.headers.common.Authorization = ``;

      throw error.response.data.errors;
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      const res = await setupHttp.post("/auth/login", credentials);
      const token = res.data.token;

      setUser(res.data.user);

      setCookie("refreshToken_workeasy", token);
      setupHttp.defaults.headers.common.Authorization = `Bearer ${token}`;

      await getUser();
    } catch (error: any) {
      setupHttp.defaults.headers.common.Authorization = ``;
      console.log(error);
      throw error.response.data.errors;
    }
  };

  const logout = () => {
    deleteCookie("refreshToken_workeasy");
    setupHttp.defaults.headers.common.Authorization = ``;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, token, user, logout, loading: load }}>
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
