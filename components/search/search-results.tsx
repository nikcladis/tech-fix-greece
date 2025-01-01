"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/client";
import { Smartphone, Laptop, Tablet } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const SEARCH_ITEMS = [
  {
    category: "phones",
    items: [
      { id: "iphone", label: "iPhone Repair", icon: Smartphone },
      { id: "samsung", label: "Samsung Repair", icon: Smartphone },
      // Add more items
    ],
  },
  {
    category: "laptops",
    items: [
      { id: "macbook", label: "MacBook Repair", icon: Laptop },
      { id: "dell", label: "Dell Repair", icon: Laptop },
      // Add more items
    ],
  },
  {
    category: "tablets",
    items: [
      { id: "ipad", label: "iPad Repair", icon: Tablet },
      { id: "galaxy-tab", label: "Galaxy Tab Repair", icon: Tablet },
      // Add more items
    ],
  },
];

export function SearchResults({ query }: { query: string }) {
  const t = useTranslations("search");

  const filteredItems = SEARCH_ITEMS.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  if (query.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-6">
        {t("startTyping")}
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-6">
        {t("noResults")}
      </div>
    );
  }

  return (
    <ScrollArea className="h-[300px] p-4">
      <div className="space-y-6">
        {filteredItems.map((category) => (
          <div key={category.category}>
            <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
              {t(`categories.${category.category}`)}
            </h3>
            <div className="space-y-2">
              {category.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/estimate?type=${category.category}&model=${item.id}`}
                  className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
