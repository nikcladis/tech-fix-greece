"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/client";

export function NewsletterSection() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold">{t("title")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={!agreed}>
                {t("subscribe")}
              </Button>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                required
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                {t("agreeToTerms")}{" "}
                <Link href="/terms" className="underline hover:text-primary">
                  {t("termsLink")}
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
