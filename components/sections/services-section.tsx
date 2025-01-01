"use client";

import { Smartphone, Laptop, Tablet } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      icon: Smartphone,
      title: t("phones.title"),
      description: t("phones.description"),
    },
    {
      icon: Laptop,
      title: t("laptops.title"),
      description: t("laptops.description"),
    },
    {
      icon: Tablet,
      title: t("tablets.title"),
      description: t("tablets.description"),
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
