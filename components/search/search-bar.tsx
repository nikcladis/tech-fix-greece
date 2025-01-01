"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SearchResults } from "./search-results";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";

export function SearchBar() {
  const t = useTranslations("search");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  // Close results when query is empty
  useEffect(() => {
    if (query.length === 0) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [query]);

  return (
    <div ref={ref} className="relative hidden md:block flex-1 max-w-2xl mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder={t("placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10"
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-md shadow-lg z-50">
          <SearchResults query={query} />
        </div>
      )}
    </div>
  );
}
