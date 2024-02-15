"use client";

import Header from "@/components/topics-page/header";
import { usePathname } from "next/navigation";

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const getTitleForPage = () => {
    return pathname
      .split("/")
      .slice(-1)[0]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-full relative pt-24">
      <Header title={getTitleForPage()} />
      {children}
    </section>
  );
}
