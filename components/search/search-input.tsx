"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SearchResults } from "./search-results";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  containerClassName?: string;
  dropdownClassName?: string;
  autoFocus?: boolean;
  onClose?: () => void;
}

export function SearchInput({
  containerClassName,
  dropdownClassName,
  autoFocus,
  onClose,
}: SearchInputProps) {
  const t = useTranslations("search");
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setIsFocused(false);
    onClose?.();
  });

  return (
    <div ref={ref} className={cn("relative", containerClassName)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder={t("placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full pl-10"
          autoFocus={autoFocus}
        />
      </div>
      {isFocused && (
        <div
          className={cn(
            "absolute top-full left-0 right-0 mt-2 bg-background border rounded-md shadow-lg z-50",
            dropdownClassName
          )}
        >
          <SearchResults query={query} showInitial={isFocused} />
        </div>
      )}
    </div>
  );
}
