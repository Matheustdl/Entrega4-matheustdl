import { useEffect, useContext } from "react";
import { api } from "../../services/api";
import { ContactContext } from "../../providers/contactProvider";
import { UlContainer } from "./styled";

export const ContactCart = () => {
  const { contacts, setContacts } = useContext(ContactContext);

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("user-token");
      try {
        const id = localStorage.getItem("user-id") || "";
        const response = await api.get(`/user/${id}/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      <UlContainer>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.telephone}</p>
            </div>
          </li>
        ))}
      </UlContainer>
    </>
  );
};
