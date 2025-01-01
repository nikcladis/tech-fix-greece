"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { SignUpForm } from "./signup-form";
import { SocialAuthButtons } from "./social-auth-buttons";
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

        <div className="grid gap-6">
          <SocialAuthButtons />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("orContinueWith")}
              </span>
            </div>
          </div>

          {view === "login" ? (
            <LoginForm onToggle={toggleView} />
          ) : (
            <SignUpForm onToggle={toggleView} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
