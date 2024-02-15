/* eslint-disable react/display-name */
"use client";
import { Search } from "lucide-react";
import { forwardRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import SearchBar from "./search";

const SearchModal = forwardRef((_props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        <div className="h-[2rem] w-[10rem] relative border border-primary-foreground rounded-md flex flex-row items-center justify-start gap-2 px-1 hover:cursor-pointer">
          <span>
            <Search className="text-primary/70" />
          </span>
          <p className="text-primary/70">Search...</p>
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-2 items-center justify-center w-full">
        <SearchBar />
      </DialogContent>
    </Dialog>
  );
});

export default SearchModal;
