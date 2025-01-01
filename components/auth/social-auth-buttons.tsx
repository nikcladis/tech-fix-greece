"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTheme } from "next-themes";

export function SocialAuthButtons() {
  const t = useTranslations("auth");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        variant="outline"
        className="h-12"
        onClick={() => console.log("Google login")}
      >
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-2"
        />
        Google
      </Button>
      <Button
        variant="outline"
        className="h-12"
        onClick={() => console.log("Apple login")}
      >
        <Image
          src="/icons/apple.svg"
          alt="Apple"
          width={28}
          height={28}
          className={`mr-2 mt-0.5 ${isDark ? "invert" : ""}`}
        />
        Apple
      </Button>
    </div>
  );
}
