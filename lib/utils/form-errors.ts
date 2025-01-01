import { useTranslations } from "next-intl";

export function useFormErrorMessage() {
  const t = useTranslations("auth");

  return (message: string | undefined) => {
    if (!message) return undefined;

    if (message.startsWith("validation.")) {
      return t(`validation.${message.split(".")[1]}`);
    }

    return message;
  };
}
