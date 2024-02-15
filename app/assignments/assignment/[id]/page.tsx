import { BackButton } from "@/components/ui/back-button";
import { prisma } from "@/lib/prisma";

type AssignmentPageProps = {
  params: {
    id: string;
  };
};

/**
 * Fetches the static paths for assignments, which Next.js will use to statically generate pages at build time.
 * @returns {Promise<{ paths: { params: { id: string } }[], fallback: boolean }>}
 */

export async function generateStaticParams() {
  const assignments = await prisma.assignment.findMany();
  return assignments.map((assignment) => ({
    id: assignment.id,
  }));
}

/**
 * Retrieves a single assignment by ID from the database, including its PDF data.
 * The PDF data is converted from binary to a Base64 string for rendering in the browser.
 * @param id The unique identifier for the assignment.
 * @returns The assignment data along with the Base64-encoded PDF data.
 */

const getAssignmentById = async (id: string) => {
  const assignment = await prisma.assignment.findUnique({
    where: {
      id,
    },
  });

  if (assignment && assignment.pdfData) {
    const pdfBase64 = Buffer.from(assignment.pdfData).toString("base64");
    return { ...assignment, pdfBase64 };
  }

  return assignment;
};

/**
 * The server component for rendering the assignment page. It fetches the assignment data
 * using the getAssignmentById function and displays it in an iframe.
 * Utilizes Static Site Generation (SSG) for performance and SEO benefits.
 * @param params Contains the ID of the assignment to fetch.
 * @returns A JSX element representing the page content.
 */

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  const { id } = params;
  console.log("Fetching assignment with id: ", id);
  const assignment = (await getAssignmentById(id)) as any;
  const pdfSrc = `data:application/pdf;base64,${assignment?.pdfBase64}`;

  return (
    <>
      <BackButton />
      <main className="flex flex-col items-center justify-center px-4 py-8 w-full relative">
        <h1 className="text-2xl font-semibold mb-8">{assignment?.name}</h1>
        {assignment?.pdfBase64 && (
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative" style={{ paddingBottom: "75%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full shadow-xl rounded-lg overflow-hidden"
                src={pdfSrc}
                title="PDF Content"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
