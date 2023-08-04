import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Seu Nome completo"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  phone: z
    .string()
    .nonempty("Telefone inválido! Ex: (xx)xxxxxxxxx")
    .regex(/^\(\d{2}\)\d{8,9}$/),
});

export type RegisterData = z.infer<typeof registerSchema>;
