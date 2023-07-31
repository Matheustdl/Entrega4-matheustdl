import { zodResolver } from "@hookform/resolvers/zod";
import { IContact } from "../../../providers/contactProvider/@types";
import { createContactSchema } from "../../../validator/contacts";
import { ModalDialog } from "../../../styles/GlobalStyle";
import { MdClose } from "react-icons/md";

import { SubmitHandler, useForm } from "react-hook-form";
import { ContactContext } from "../../../providers/contactProvider";
import { useContext } from "react";

const CreateContactModal = () => {
  const { createNewContact, setContactCreateModal } =
    useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: zodResolver(createContactSchema),
  });

  const submit: SubmitHandler<IContact> = async (formData) => {
    console.log(formData);
    createNewContact(formData);
    setContactCreateModal(false);
  };

  return (
    <div>
      <ModalDialog>
        <h2>Adicionar Contato</h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setContactCreateModal(false)}
        >
          <MdClose size={21} />
        </button>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Nome do contato"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            type="email"
            {...register("email")}
            placeholder="Email do contato"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="text"
            {...register("telephone")}
            placeholder="Telefone do contato"
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}

          <button type="submit">Adicionar</button>
        </form>
      </ModalDialog>
    </div>
  );
};

export default CreateContactModal;
