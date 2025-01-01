"use client";

import { ShoppingCart, X } from "lucide-react";
import { Button } from "./button";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function CartPanel() {
  const t = useTranslations("nav");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">{t("cart")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            {t("cart")}
          </DialogTitle>
          <DialogDescription>{t("cartEmpty")}</DialogDescription>
        </DialogHeader>
        {/* Add cart items or content here */}
      </DialogContent>
    </Dialog>
  );
}
