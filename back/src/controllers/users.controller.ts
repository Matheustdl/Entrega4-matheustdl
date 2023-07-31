import { Request, Response } from 'express';

import {
    TUpdateUserRequest,
    TUserRequest,
    TUserResponse,
} from '../interfaces/users.interfaces';
import createUserServices from '../services/users/createUser.service';
import retrieveUserService from '../services/users/retrieveUserService.service';
import deleteUsersService from '../services/users/deleteUserService.service';
import updateUserService from '../services/users/updateUserService.service';

const createUserController = async (req: Request, res: Response) => {
    const userData: TUserRequest = req.body;
    const newUser = await createUserServices(userData);

    return res.status(201).json(newUser);
};
const retrieveUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id);

    const user: TUserResponse = await retrieveUserService(userId);

    return res.json(user);
};

const updateUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUpdateUserRequest = req.body;
    const userId: number = parseInt(req.params.id);

    const newUserData: TUserResponse = await updateUserService(
        userData,
        userId
    );
    return res.json(newUserData);
};

const deleteUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id);

    await deleteUsersService(userId);

    return res.status(204).send();
};

export {
    createUserController,
    updateUsersController,
    deleteUsersController,
    retrieveUsersController,
};
