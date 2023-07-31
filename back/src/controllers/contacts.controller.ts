import { Request, Response } from 'express';
import { createContactService } from '../services/contacts/createContacts.service';
import updateContactService from '../services/contacts/updateContact.service';
import deleteContactService from '../services/contacts/deleteContactService.service';
import Contact from '../entities/contacts.entities';
import listContactService from '../services/contacts/listContact.service';
import listContactsByIdUserService from '../services/users/listContactsUser.service';

const createContactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;
    const newContact = await createContactService(req.body, userId);

    return res.status(201).json(newContact);
};
const listContactController = async (req: Request, res: Response) => {
    const userId = res.locals.userId;
    const contacts = await listContactService(userId);

    return res.json(contacts);
};
const listContactsByUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id);

    const contactUser: Contact[] | null = await listContactsByIdUserService(
        userId
    );

    return res.json(contactUser);
};

const updateContactController = async (req: Request, res: Response) => {
    const contactId = Number(req.params.id);
    const updateContact = await updateContactService(req.body, contactId);
    return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
    const contactId = Number(req.params.id);
    await deleteContactService(contactId);
    res.status(204).send();
};

export {
    createContactController,
    listContactController,
    listContactsByUserController,
    updateContactController,
    deleteContactController,
};
