"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/client";
import { Logo } from "@/components/ui/logo";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          {t("title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
        <Link href="/estimate">
          <Button size="lg" className="mt-8">
            {t("button")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
