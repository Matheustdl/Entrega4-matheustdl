import { useContext, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import UserInfo from "../../components/userInfo";
import CreateContactModal from "../../components/modal/createContact";
import { ContactContext } from "../../providers/contactProvider";
import { ContactCart } from "../../components/card";

import { HeaderDash } from "../../components/headerDash";
import { Container } from "./styles";

export const Dashboard = () => {
  const { setUserData, user } = useAuth();
  const { contactCreateModal, setContactCreateModal, setContacts } =
    useContext(ContactContext);

  useEffect(() => {
    setUserData({
      name: localStorage.getItem("user-name") || "",
      email: localStorage.getItem("user-email") || "",
      phone: localStorage.getItem("user-phone") || "",
      id: Number(localStorage.getItem("user-id") || ""),
    });
  }, [user, setUserData, setContacts]);

  return (
    <>
      <HeaderDash />
      <section>
        <UserInfo />
      </section>
      <Container>
        <h2>Contatos:</h2>
        <ContactCart />

        
        <button onClick={() => setContactCreateModal(true)}>
          Adicionar Contato
        </button>
        {contactCreateModal && <CreateContactModal />}
      </Container>
    </>
  );
};
