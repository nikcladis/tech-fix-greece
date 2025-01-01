"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, useAuthSchemas } from "@/lib/schemas/auth";
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

// Same helper if you want, or import from somewhere
const useFormErrorMessage = () => {
  return (message: string | undefined) => {
    return message ? message : null;
  };
};

interface SignUpFormProps {
  onToggle: () => void;
}

export function SignUpForm({ onToggle }: SignUpFormProps) {
  // For text: "Name", "Password", "Sign up"
  const t = useTranslations("auth");
  // For the localized signup schema
  const { signupSchema } = useAuthSchemas();

  // Setup the form
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const getErrorMessage = useFormErrorMessage();

  const onSubmit = async (data: SignupFormData) => {
    try {
      // Implement sign-up logic here
      console.log("Sign up data:", data);
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{t("name")}</FormLabel>
              <FormControl>
                <Input
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{t("confirmPassword")}</FormLabel>
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
          {t("signup")}
        </Button>
        <p className="text-center text-sm">
          {t("haveAccount")}{" "}
          <Button variant="link" onClick={onToggle} className="p-0">
            {t("loginLink")}
          </Button>
        </p>
      </form>
    </Form>
  );
}
