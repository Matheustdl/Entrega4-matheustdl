import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IContact } from "../../providers/contactProvider/@types";

export const ContactCart = () => {
  const [contact, setcontact] = useState<IContact[]>([]);

  useEffect(() => {
    const RenderItens = async () => {
      const token = localStorage.getItem("user-id");
      try {
        const id = localStorage.getItem("user-id") || "";
        const response = await api.get(`/user/${id}/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setcontact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    RenderItens();
  }, [setcontact]);
  return (
    <>
      {contact.map((contacts) => (
        <li key={contacts.id}>
          <div>
            <p>{contacts.name}</p>
            <p>{contacts.email}</p>
            <p>{contacts.telephone}</p>
          </div>
        </li>
      ))}
    </>
  );
};
