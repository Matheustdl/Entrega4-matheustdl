import { z } from 'zod';

const numberRegex = /^\(\d{2}\)\d{8,9}$/;

const contactSchemaRequest = z.object({
    name: z.string(),
    email: z.string().email(),
    telephone: z.string().regex(numberRegex, 'Invalid telephone number'),
});

const contactSchema = contactSchemaRequest.extend({
    id: z.number(),
    createdAt: z.string(),
});

const contactSchemaArr = z.array(contactSchema);

const contactSchemaUpdateRequest = contactSchema.partial().omit({
    id: true,
});

export {
    contactSchema,
    contactSchemaRequest,
    contactSchemaArr,
    contactSchemaUpdateRequest,
};
