import { createContext, useEffect, useState } from "react";
import { IContact, IContactContext, IDefaultProviderProps } from "./@types";
import { api } from "../../services/api";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contact, setContact] = useState<IContact[]>([]);
  const [contactCreateModal, setContactCreateModal] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);
  /*const [, setContactData] = useState<IContact | null>(null);
  const [, setDataContact] = useState(false);
  const [, setLoading] = useState(false);*/

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      const profileForm = async () => {
        try {
          const response = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContact(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      profileForm();
    }
  }, []);

  /* const createNewContact = async (formData: IContact) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(formData);
      setContacts([...contacts, response.data]);
      setUserData({
        name: response.data.name,
        email: response.data.email,
        telephone: response.data.telephone,
        id: response.data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };*/
  /*const createNewContact = async (formData: IContact) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts((prevContacts) => [...prevContacts, response.data]);
      setUserData({
        name: response.data.name,
        email: response.data.email,
        telephone: response.data.telephone,
        id: response.data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };*/
  /*const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("user-token");
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

  useEffect(() => {
    fetchContacts();
  }, []);*/
  /* const createNewContact = async (formData: IContact) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(true);
      setContacts([...contacts, response.data]);
      setDataContact(true);
      setContactData({
        name: response.data.name,
        email: response.data.email,
        telephone: response.data.telephone,
        id: response.data.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };*/
  const createNewContact = async (formData: IContact) => {
    try {
      const token = localStorage.getItem("user-token");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContact([...contact, response.data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactContext.Provider
      value={{
        createNewContact,
        contact,
        setContact,
        contactCreateModal,
        setContactCreateModal,
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
