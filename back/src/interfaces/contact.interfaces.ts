import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
    contactSchema,
    contactSchemaRequest,
    contactSchemaArr,
} from '../schemas/contactSchema.schema';

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactResponseArr = z.infer<typeof contactSchemaArr>;
type TContactUpdate = DeepPartial<TContactRequest>;

export {
    TContact,
    TContactRequest,
    TContactResponse,
    TContactResponseArr,
    TContactUpdate,
};
