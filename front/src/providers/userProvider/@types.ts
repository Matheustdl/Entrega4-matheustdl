import { Dispatch, ReactNode } from "react";
import { LoginData } from "../../pages/Login/validator";
import { RegisterData } from "../../pages/Register/validator";

export interface AuthProviderProps {
  children: ReactNode;
}
export interface IUser {
  find(arg0: (userData: { id: number }) => boolean): unknown;
  id: string;
  name: string;
  email: string;
  phone: string;
}
export interface IUserUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
export interface IUserRegister {
  name: string;
  email: string;
  password: number | string;
  Phone: string | number;
}
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}
export interface AuthContextValues {
  userLogin: (data: LoginData) => Promise<void>;
  registerUser: (formData: RegisterData) => Promise<void>;
  loading: boolean;
  user: IUser | null;
  Logoult: () => void;
  userData: IUser | null;
  setUserData: Dispatch<React.SetStateAction<IUser | null>>;
  userEditModal: boolean;
  setUserEditModal: Dispatch<React.SetStateAction<boolean>>;
  userDeleteModal: boolean;
  setUserDeleteModal: Dispatch<React.SetStateAction<boolean>>;
  userEdit: IUserUpdate | null;
  setUserEdit: React.Dispatch<React.SetStateAction<IUserUpdate | null>>;
  userUpdate: (formData: IUserUpdate, userId: number) => Promise<void>;
  userDelete: (userId: number) => Promise<void>;
}

export interface loginResponse {
  token: string;
}
