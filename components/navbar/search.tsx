"use client";
import { Input } from "@/components/ui/input";
import { ModalHandle } from "@/lib/types";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchModal from "./search-modal";

export default function SearchBar() {
  const modalRef = useRef<ModalHandle>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleFocus = () => {
    modalRef.current?.openModal();
  };

  const handleBlur = () => {
    // Consider a delay or other logic here as immediate blur can conflict with modal interactions
    modalRef.current?.closeModal();
  };

  return (
    <>
      <div className="ml-auto p-2 flex items-center">
        <div className="relative w-full">
          <Input
            className="text-muted-foreground pl-10 w-[10rem]"
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={handleFocus}
            // onBlur={handleBlur} // Consider re-enabling or adjusting based on your modal interaction
            defaultValue={searchParams.get("search")?.toString()}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <SearchModal ref={modalRef} />
    </>
  );
}
