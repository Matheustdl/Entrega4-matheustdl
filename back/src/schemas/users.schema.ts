import { z } from 'zod';

const numberRegex = /^\(\d{2}\)\d{8,9}$/;

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    phone: z.string().refine((val) => numberRegex.test(val), {
        message: 'Invalid phone number',
    }),
    createdAt: z.string(),
});

const userRequestSchema = userSchema.omit({
    id: true,
    createdAt: true,
});

const userResponseSchema = userSchema.omit({
    password: true,
});

const listUserSchema = z.array(userResponseSchema);

const userSchemaUpdateRequest = userSchema.partial().omit({
    id: true,
});

export {
    userRequestSchema,
    userSchema,
    userResponseSchema,
    listUserSchema,
    userSchemaUpdateRequest,
};
