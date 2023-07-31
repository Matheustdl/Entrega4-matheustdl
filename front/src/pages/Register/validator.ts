import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Seu Nome completo"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\d{8,9}$/)
    .nonempty("Senha é obrigatória"),
});

export type RegisterData = z.infer<typeof registerSchema>;