"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { SignUpForm } from "./signup-form";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function AuthDialog({
  isOpen,
  onClose,
  defaultView = "login",
}: {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: "login" | "signup";
}) {
  const [view, setView] = useState<"login" | "signup">(defaultView);
  const t = useTranslations("auth");

  const toggleView = () => {
    setView(view === "login" ? "signup" : "login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {view === "login" ? t("loginTitle") : t("signupTitle")}
          </DialogTitle>
          <DialogDescription>
            {view === "login" ? t("loginDescription") : t("signupDescription")}
          </DialogDescription>
        </DialogHeader>
        {view === "login" ? (
          <LoginForm onToggle={toggleView} />
        ) : (
          <SignUpForm onToggle={toggleView} />
        )}
      </DialogContent>
    </Dialog>
  );
}
