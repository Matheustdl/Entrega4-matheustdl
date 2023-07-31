import { createContext, useEffect, useState } from "react";
import { LoginData } from "../../pages/Login/validator";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  AuthContextValues,
  AuthProviderProps,
  IUser,
  IUserUpdate,
} from "./@types";
import { RegisterData } from "../../pages/Register/validator";

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [userData, setUserData] = useState<IUser | null>(null);
  const [userEditModal, setUserEditModal] = useState(false);
  const [userDeleteModal, setUserDeleteModal] = useState(false);
  const [userEdit, setUserEdit] = useState<IUserUpdate | null>(null);
  const [dataUpdated, setDataUpdated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, [navigate]);

  const userLogin = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      window.localStorage.setItem("user-token", response.data.token);
      window.localStorage.setItem("user-name", response.data.user.name);
      window.localStorage.setItem("user-id", response.data.user.id);
      window.localStorage.setItem("user-email", response.data.user.email);
      window.localStorage.setItem("user-phone", response.data.user.phone);

      setUser(response.data);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const registerUser = async (data: RegisterData) => {
    try {
      setLoading(true);
      await api.post("/user", data);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  /* const userUpdate = async (formData: IUserUpdate, userId: number) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.patch(`/user/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(true);
      setUser(response.data);
      localStorage.setItem("user-name", response.data.name);
      localStorage.setItem("user-email", response.data.email);
      localStorage.setItem("user-phone", response.data.phone);
      setDataUpdated(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (dataUpdated) {
      setDataUpdated(false);
    }
  }, [dataUpdated]);*/
  const userUpdate = async (formData: IUserUpdate, userId: number) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.patch(`/user/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(true);
      setUser(response.data);
      localStorage.setItem("user-name", response.data.name);
      localStorage.setItem("user-email", response.data.email);
      localStorage.setItem("user-phone", response.data.phone);
      setDataUpdated(true);

      // Atualize os dados do usuário no estado do componente e no armazenamento local
      setUserData({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        id: response.data.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userDelete = async (userId: number) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.delete(`/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const Logoult = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        loading,
        user,
        Logoult,
        registerUser,
        userData,
        setUserData,
        userEditModal,
        setUserEditModal,
        userDeleteModal,
        setUserDeleteModal,
        userEdit,
        setUserEdit,
        userUpdate,
        userDelete,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
