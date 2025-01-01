"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Wrench className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl">TechFix</span>
    </Link>
  );
}
