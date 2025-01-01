"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export function FooterSection() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: t("links.facebook"),
      icon: Facebook,
      href: "https://facebook.com/techfixgreece",
    },
    {
      name: t("links.instagram"),
      icon: Instagram,
      href: "https://instagram.com/techfixgreece",
    },
    {
      name: t("links.twitter"),
      icon: Twitter,
      href: "https://twitter.com/techfixgreece",
    },
  ];

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TechFix Greece. {t("license")}
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">{t("follow")}</span>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
