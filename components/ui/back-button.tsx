"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const { back } = useRouter();

  const handleClick = () => {
    back();
  };

  return (
    <button
      className="absolute top-4 left-4 z-[999] flex items-center justify-center gap-2"
      onClick={handleClick}
    >
      <ChevronLeft />
      <span className="text-primary/70 hover:text-primary transition-colors duration-200">
        Back
      </span>
    </button>
  );
};
