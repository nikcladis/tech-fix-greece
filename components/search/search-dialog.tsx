"use client";

import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SearchInput } from "./search-input";

export function SearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("search");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-screen h-full md:h-auto md:max-h-[80vh] p-6 md:max-w-[600px] rounded-none md:rounded-lg flex flex-col gap-4">
        <DialogHeader className="sr-only">
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <SearchInput containerClassName="mt-4" autoFocus onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
