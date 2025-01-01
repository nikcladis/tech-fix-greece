"use client";

import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./button";
import { Logo } from "./logo";
import { LanguageSwitcher } from "../language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { CartPanel } from "./cart-panel";
import { AuthDialog } from "../auth/auth-dialog";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "./sheet";
import { useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const authT = useTranslations("auth");
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <CartPanel />
          <Button variant="ghost" onClick={() => setIsAuthOpen(true)}>
            <User className="h-5 w-5 mr-3" />
            {authT("login")}
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <CartPanel />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="text-left">
                <SheetTitle>{t("menu")}</SheetTitle>
                <SheetDescription>
                  {t("menuDescription", {
                    defaultValue: "Access navigation options",
                  })}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                <Button variant="ghost" className="w-full justify-start h-11">
                  <Search className="h-5 w-5 mr-3" />
                  {t("search")}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-11"
                  onClick={() => setIsAuthOpen(true)}
                >
                  <User className="h-5 w-5 mr-3" />
                  {authT("login")}
                </Button>
                <div className="flex items-center justify-between h-11">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Single Auth Dialog Instance */}
      <AuthDialog isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
