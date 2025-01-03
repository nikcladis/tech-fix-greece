"use client";

import { SearchInput } from "./search-input";

export function SearchBar() {
  return (
    <SearchInput containerClassName="hidden md:block flex-1 max-w-2xl mx-8" />
  );
}
