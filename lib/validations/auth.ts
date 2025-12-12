import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "emailRequired" })
    .email({ message: "emailInvalid" }),
  password: z.string().min(1, { message: "passwordRequired" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "nameRequired" })
      .min(2, { message: "nameMinLength" }),
    email: z
      .string()
      .min(1, { message: "emailRequired" })
      .email({ message: "emailInvalid" }),
    password: z
      .string()
      .min(1, { message: "passwordRequired" })
      .min(8, { message: "passwordMinLength" }),
    confirmPassword: z.string().min(1, { message: "passwordRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsDoNotMatch",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "emailRequired" })
    .email({ message: "emailInvalid" }),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "passwordRequired" })
      .min(8, { message: "passwordMinLength" }),
    confirmPassword: z.string().min(1, { message: "passwordRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsDoNotMatch",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
