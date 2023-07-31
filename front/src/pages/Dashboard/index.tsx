import { useContext, useEffect } from "react";
import { IUser } from "../../providers/userProvider/@types";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { ContactCart } from "../../components/card";
import UserInfo from "../../components/userInfo";
import CreateContactModal from "../../components/modal/createContact";
import { ContactContext } from "../../providers/contactProvider";
import { api } from "../../services/api";
import { IContact } from "../../providers/contactProvider/@types";


export const Dashboard = () => {
  const { Logoult, setUserData, user } = useAuth();
  const { contactCreateModal, setContactCreateModal, setContacts } =
    useContext(ContactContext);

  /* useEffect(() => {
    setUserData({
      name: localStorage.getItem("user-name") || "",
      email: localStorage.getItem("user-email") || "",
      phone: localStorage.getItem("user-phone") || "",
      id: localStorage.getItem("user-id") || "",
    } as unknown as IUser);
    (async () => {
      const id = localStorage.getItem("@USER_DATA-id") || "";

      const response = await api.get<IContact[]>(`users/${id}/contacts`);
      setContacts(response.data);
    })();
  }, [user, navigate]);
  }, []);
  */
  useEffect(() => {
    setUserData({
      name: localStorage.getItem("user-name") || "",
      email: localStorage.getItem("user-email") || "",
      phone: localStorage.getItem("user-phone") || "",
      id: localStorage.getItem("user-id") || "",
    } as unknown as IUser);

    (async () => {
      const id = localStorage.getItem("user-id") || "";

      const response = await api.get<IContact[]>(`user/${id}/contacts`);
      setContacts(response.data);
    })();
  }, [user, setUserData, setContacts]);

  return (
    <>
      <header>
        <button type="button" onClick={() => Logoult()}>
          <MdLogout size={28} />
        </button>
      </header>

      <section>
        <UserInfo />
      </section>

      <main>
        <h2>Contatos:</h2>
        <ul>
          <ContactCart />
        </ul>

        <button onClick={() => setContactCreateModal(true)}>
          Adicionar Contato
        </button>
        {contactCreateModal && <CreateContactModal />}
      </main>
    </>
  );
};
