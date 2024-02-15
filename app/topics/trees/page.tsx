import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const slideLinks = [
  {
    name: "Trees",
    link: "https://drive.google.com/file/d/1ciReQWYZwvedm2zY7_ctj61BtyWbpAJ8/view",
  },
  {
    name: "AVL Trees",
    link: "https://drive.google.com/file/d/1l2480bGGeWL4hMFB-Rx-8gay8F0glPjC/view",
  },
  {
    name: "Red-Black Trees",
    link: "https://drive.google.com/file/d/1yTB_7hggujNdTlkV1uyJTO2k02mHCuo9/view",
  },
];

export default function TreesPage() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center p-4 w-full">
      <div className="grid grid-cols-3 gap-4">
        {slideLinks.map((slide) => (
          <Link key={slide.name} href={slide.link} target="_blank">
            <Card>
              <CardHeader>{slide.name}</CardHeader>
              <CardContent>Image goes here</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
