import { MdClose } from "react-icons/md";
import { useAuth } from "../../../hooks/useAuth";
import { ModalDialog } from "../../../styles/GlobalStyle";

const UserDeleteModal = () => {
  const { setUserDeleteModal, userDelete } = useAuth();
  const id = Number(localStorage.getItem("user-id") || "");

  return (
    <ModalDialog>
      <h2>Você deseja mesmo deletar a sua conta?</h2>
      <button
        type="button"
        aria-label="Fechar"
        onClick={() => setUserDeleteModal(false)}
      >
        <MdClose size={21} />
      </button>

      <button
        type="button"
        onClick={() => [userDelete(id), setUserDeleteModal(false)]}
      >
        Deletar
      </button>
    </ModalDialog>
  );
};

export default UserDeleteModal;
