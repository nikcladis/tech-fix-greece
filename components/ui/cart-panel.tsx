"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export function CartPanel() {
  const t = useTranslations("nav");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">{t("cart")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            {t("cart")}
          </SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
          <SheetDescription>{t("cartEmpty")}</SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  );
}
