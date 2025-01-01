"use client";

import { Zap, Users, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("features");

  const features = [
    {
      icon: Zap,
      title: t("fast.title"),
      description: t("fast.description"),
    },
    {
      icon: Users,
      title: t("professional.title"),
      description: t("professional.description"),
    },
    {
      icon: Shield,
      title: t("warranty.title"),
      description: t("warranty.description"),
    },
  ];

  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
