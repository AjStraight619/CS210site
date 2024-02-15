"use client";
import { links } from "@/lib/data";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import SearchModal from "./search-modal";
import TopicsDropdown from "./topics-dropdown";

const Navbar = () => {
  // const pathname = usePathname();
  // if (pathname.includes("/assignment")) return null;

  return (
    <nav className="fixed top-0 w-full h-16 border-b border-primary-foreground bg-background z-[100]">
      <div className="flex justify-between items-center h-full px-4">
        <ul className="flex items-center gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="hover:underline" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
          <TopicsDropdown />
        </ul>

        <div className="flex items-center gap-4">
          <SearchModal />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
