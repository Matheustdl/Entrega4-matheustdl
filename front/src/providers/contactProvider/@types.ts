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
  contacts: IContact[];
  createNewContact: (formData: IContact) => Promise<void>;
  contactCreateModal: boolean;
  setContactCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
}
