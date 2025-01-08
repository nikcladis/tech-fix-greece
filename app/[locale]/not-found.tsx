"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/client";
import { ErrorLayout } from "@/components/layouts/error-layout";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <ErrorLayout image="404" title={t("title")} description={t("description")}>
      <Button asChild>
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </ErrorLayout>
  );
}
