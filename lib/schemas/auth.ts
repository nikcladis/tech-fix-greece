// lib/schemas/auth.ts
import { z } from "zod";
import { useTranslations } from "next-intl";

// Types
export type LoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type SignupFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// Factory function that takes in a translator
export const createAuthSchemas = (t: (key: string) => string) => {
  // Reusable helper
  const nonEmptyString = (key: string) =>
    z.string().min(1, { message: t(`${key}Required`) });

  // Email schema
  const emailSchema = z
    .string()
    .min(1, { message: t("emailRequired") })
    .email({ message: t("emailInvalid") })
    .refine((email) => email.toLowerCase() === email, {
      message: t("emailLowercase"),
    });

  // Password schema (example: must have uppercase, etc.)
  const passwordSchema = z
    .string()
    .min(8, { message: t("passwordMin") })
    .regex(/[A-Z]/, { message: t("passwordUppercase") })
    .regex(/[a-z]/, { message: t("passwordLowercase") })
    .regex(/[0-9]/, { message: t("passwordNumber") })
    .regex(/[^A-Za-z0-9]/, { message: t("passwordSpecial") });

  // Name schema
  const nameSchema = z
    .string()
    .min(2, { message: t("nameMin") })
    .max(50, { message: t("nameMax") })
    .regex(/^[a-zA-Z\s]*$/, { message: t("nameFormat") });

  // Login schema
  const loginSchema = z.object({
    email: emailSchema,
    password: nonEmptyString("password"),
    rememberMe: z.boolean().optional(),
  });

  // Signup schema
  const signupSchema = z
    .object({
      name: nameSchema,
      email: emailSchema,
      password: passwordSchema,
      confirmPassword: nonEmptyString("confirmPassword"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordMatch"),
      path: ["confirmPassword"],
    });

  return {
    loginSchema,
    signupSchema,
  };
};

// Hook to get the schemas with the correct translations
export const useAuthSchemas = () => {
  // This automatically looks up keys under "auth.validation" in your locales
  const t = useTranslations("auth.validation");
  return createAuthSchemas(t);
};
