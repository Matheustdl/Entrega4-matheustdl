import { Router } from 'express';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import {
    createContactController,
    deleteContactController,
    listContactController,
    updateContactController,
} from '../controllers/contacts.controller';
import { contactSchemaUpdateRequest } from '../schemas/contactSchema.schema';
import ensureDataValidMiddleware from '../middlewares/ensureDataValid.middleware';

const contactsRoutes = Router();

contactsRoutes.post('', ensureTokenIsValidMiddleware, createContactController);

contactsRoutes.get('', listContactController);

contactsRoutes.patch(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureDataValidMiddleware(contactSchemaUpdateRequest),
    updateContactController
);

contactsRoutes.delete(
    '/:id',
    ensureTokenIsValidMiddleware,
    deleteContactController
);

export default contactsRoutes;
