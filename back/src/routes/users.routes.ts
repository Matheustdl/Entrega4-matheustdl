import { Router } from 'express';
import {
    createUserController,
    deleteUsersController,
    retrieveUsersController,
    updateUsersController,
} from '../controllers/users.controller';
import ensureEmailNotExistsMiddleware from '../middlewares/ensureEmailNotExist.middleware';
import ensureDataValidMiddleware from '../middlewares/ensureDataValid.middleware';
import {
    userRequestSchema,
    userSchemaUpdateRequest,
} from '../schemas/users.schema';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureIdExistsMiddleware from '../middlewares/ensureIdExistsMiddleware.middleware';
import ensureOwnerUserMiddleware from '../middlewares/ensureOwnerUserMiddleware.middleware';
import { listContactsByUserController } from '../controllers/contacts.controller';

const userRoutes = Router();

userRoutes.post(
    '',
    ensureDataValidMiddleware(userRequestSchema),
    ensureEmailNotExistsMiddleware,
    createUserController
);

userRoutes.get(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureIdExistsMiddleware,
    retrieveUsersController
);
userRoutes.get(
    '/:id/contacts',
    ensureIdExistsMiddleware,
    listContactsByUserController
);

userRoutes.patch(
    '/:id',
    ensureIdExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureOwnerUserMiddleware,
    ensureDataValidMiddleware(userSchemaUpdateRequest),
    updateUsersController
);
userRoutes.delete(
    '/:id',
    ensureIdExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureOwnerUserMiddleware,
    deleteUsersController
);

export default userRoutes;
