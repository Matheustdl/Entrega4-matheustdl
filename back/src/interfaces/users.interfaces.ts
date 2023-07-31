import { z } from 'zod';
import {
    listUserSchema,
    userRequestSchema,
    userResponseSchema,
    userSchema,
} from '../schemas/users.schema';
import { DeepPartial } from 'typeorm';

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUSerArr = z.infer<typeof listUserSchema>;
type TUpdateUserRequest = DeepPartial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUSerArr, TUpdateUserRequest };
