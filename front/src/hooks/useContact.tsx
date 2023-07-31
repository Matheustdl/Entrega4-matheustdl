import { useContext } from "react";
import { ContactContext } from "../providers/contactProvider/contactProvider";

export const useContact = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};
