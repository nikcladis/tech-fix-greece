"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, useAuthSchemas } from "@/lib/schemas/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";

// Optional helper for prefixing or formatting error messages
const useFormErrorMessage = () => {
  return (message: string | undefined) => {
    return message ? message : null;
  };
};

interface LoginFormProps {
  onToggle: () => void;
}

export function LoginForm({ onToggle }: LoginFormProps) {
  // For text like "Login", "No account?", etc.
  const t = useTranslations("auth");
  // For validation schemas with localized messages
  const { loginSchema } = useAuthSchemas();

  // Create the form
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const getErrorMessage = useFormErrorMessage();

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Implement login logic here
      console.log("Login data:", data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  className={fieldState.error ? "border-destructive" : ""}
                />
              </FormControl>
              <FormMessage>
                {getErrorMessage(fieldState.error?.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{t("password")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className={fieldState.error ? "border-destructive" : ""}
                />
              </FormControl>
              <FormMessage>
                {getErrorMessage(fieldState.error?.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {t("login")}
        </Button>
        <p className="text-center text-sm">
          {t("noAccount")}{" "}
          <Button variant="link" onClick={onToggle} className="p-0">
            {t("signupLink")}
          </Button>
        </p>
      </form>
    </Form>
  );
}
