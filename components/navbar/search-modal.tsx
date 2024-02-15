/* eslint-disable react/display-name */
"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import SearchBar from "./search";

const SearchModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <div className="h-full w-[10rem] relative border rounded-md flex flex-row items-center justify-start gap-2 px-1 py-2 hover:cursor-text">
          <span>
            <Search className="text-primary/70" />
          </span>
          <p className="text-primary/70">Search...</p>
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-2 items-center justify-center w-full">
        <div className="mt-2" />
        <SearchBar />
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
