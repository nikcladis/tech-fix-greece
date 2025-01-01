"use client";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "@/i18n/client";
import { useLocale } from "next-intl";
import { Flag } from "@/components/ui/flag";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "el" : "en";
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <Button variant="ghost" onClick={switchLocale}>
      <Flag code={locale === "en" ? "gr" : "gb"} className="h-5 w-5 mr-3" />
      {locale === "en" ? "Ελληνικά" : "English"}
    </Button>
  );
}
