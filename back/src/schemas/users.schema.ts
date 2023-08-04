import { z } from 'zod';

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    phone: z
        .string()
        .nonempty('Telefone inválido! Ex: (xx)xxxxxxxxx')
        .regex(/^\(\d{2}\)\d{8,9}$/),
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
