import { getAssignments } from "@/actions/assignmentActions";
import Worksheet from "@/components/assignment-page/worksheet";
import { Separator } from "@/components/ui/separator";
import { worksheets } from "@/lib/data";
import Link from "next/link";

/**
 * Server-side component to list all assignments.
 * It fetches data on each request, ensuring the latest data is always rendered.
 * This component uses Server-Side Rendering (SSR) for dynamic content.
 * @returns A JSX element representing the list of assignments.
 */

export default async function Assignments() {
  const assignments = await getAssignments();
  return (
    <main className="h-full flex flex-col container mx-auto items-start justify-start pt-20 gap-8">
      <header className="self-center text-5xl font-semibold mb-12">
        Assignments
      </header>
      <section>
        <h1 className="self-start underline font-semibold text-3xl">
          Programming Assignments
        </h1>

        <ul className="flex flex-col gap-4 items-start justify-start pt-6">
          {assignments.map((assignment) => (
            <li
              className="hover:text-primary text-primary/30 transition-opacity duration-300"
              key={assignment.id}
            >
              <Link href={`assignments/assignment/${assignment.id}`}>
                {assignment.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="w-full py-1 rounded-lg" />
      <section className="w-full">
        <h1 className="self-start underline font-semibold text-3xl">
          Worksheets
        </h1>
        <ul className="flex flex-row justify-around items-center pt-6 w-full">
          {Object.entries(worksheets).map(([semester, worksheetItems]) => (
            <li key={semester}>
              <h2 className="text-2xl font-semibold my-2">{semester}</h2>
              <ul className="list-none">
                {worksheetItems.map((item) => (
                  <li
                    key={item.id}
                    className="hover:text-primary text-primary/30 transition-opacity duration-300"
                  >
                    <Worksheet {...item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
