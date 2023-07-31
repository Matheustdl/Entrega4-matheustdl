export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IContact {
  id: number;
  name: string;
  email: string;
  telephone: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}

export interface IContactContext {
  contact: IContact[];
  setContact: React.Dispatch<React.SetStateAction<IContact[]>>;
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  createNewContact: (formData: IContact) => Promise<void>;
  contactCreateModal: boolean;
  setContactCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
}
