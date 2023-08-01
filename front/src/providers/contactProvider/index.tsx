import { createContext, useEffect, useState } from "react";
import { IContact, IContactContext, IDefaultProviderProps } from "./@types";
import { api } from "../../services/api";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contactCreateModal, setContactCreateModal] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      const fetchContacts = async () => {
        try {
          const response = await api.get("/contacts", {
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
    }
  }, []);
  const createNewContact = async (formData: IContact) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts([...contacts, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        createNewContact,
        contactCreateModal,
        setContactCreateModal,
        setContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
