import { MdClose } from "react-icons/md";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";
import { IUserUpdate } from "../../../providers/userProvider/@types";
import { useEffect } from "react";
import { userSchemaUpdateRequest } from "../../../validator/editUser";
import { ModalDialog } from "../../../styles/GlobalStyle";

const UserEditModal = () => {
  const { setUserEditModal, userUpdate, user, setUserEdit } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUserUpdate>({
    resolver: zodResolver(userSchemaUpdateRequest),
  });

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("phone", user.phone);
    }
  }, [user, setValue]);

  const submit: SubmitHandler<IUserUpdate> = async (formData) => {
    const id = Number(localStorage.getItem("user-id") || "");

    try {
      if (user) {
        await userUpdate(formData, id);
        setUserEdit(formData);
        setUserEditModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalDialog>
      <h2>Editar Perfil</h2>
      <button
        type="button"
        aria-label="Fechar"
        onClick={() => setUserEditModal(false)}
      >
        <MdClose size={21} />
      </button>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")} placeholder="Seu nome" />
        {errors.name && <span>{errors.name.message}</span>}

        <input type="email" {...register("email")} placeholder="Seu email" />
        {errors.email && <span>{errors.email.message}</span>}

        <input type="text" {...register("phone")} placeholder="Seu telefone" />
        {errors.phone && <span>{errors.phone.message}</span>}

        <button type="submit">Editar</button>
      </form>
    </ModalDialog>
  );
};

export default UserEditModal;
