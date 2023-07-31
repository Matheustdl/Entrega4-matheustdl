import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Contact } from "../../pages/Dashboard";

export const ContactCart = () => {
  const [contacts, setcontacts] = useState<Contact[]>([]);

  useEffect(() => {
    const RenderItens = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const id = localStorage.getItem("user-id") || "";
        const response = await api.get(`/user/${id}/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setcontacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    RenderItens();
  }, []);
  return (
    <>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
        </li>
      ))}
    </>
  );
};
