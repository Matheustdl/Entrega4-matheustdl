import { z } from "zod";

export const userSchemaUpdateRequest = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\d{8,9}$/)
    .optional(),
});

export type UpdateUser = z.infer<typeof userSchemaUpdateRequest>;
