import { topics } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 90,
  },
};

const TopicsDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
      <DropdownMenuTrigger
        className="flex flex-row items-center gap-1 hover:cursor-pointer"
        asChild
      >
        <div>
          Topics
          <motion.div animate={open ? "open" : "closed"} variants={variants}>
            <ChevronRight />
          </motion.div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[200]">
        <ul>
          {topics.map((topic, index) => (
            <li
              className="hover:text-primary text-primary/70 hover:cursor-pointer"
              key={index}
            >
              <Link onClick={() => setOpen(false)} href={topic.href}>
                {topic.name}
              </Link>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TopicsDropdown;
