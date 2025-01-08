"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { ErrorLayout } from "@/components/layouts/error-layout";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorLayout
      image="error"
      title={t("title")}
      description={t("description")}
    >
      <Button onClick={reset}>{t("tryAgain")}</Button>
    </ErrorLayout>
  );
}
