import { BackButton } from "@/components/ui/back-button";
import { prisma } from "@/lib/prisma";

type AssignmentPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const assignments = await prisma.assignment.findMany();
  return assignments.map((assignment) => ({
    id: assignment.id,
  }));
}

const getAssignmentById = async (id: string) => {
  const assignment = await prisma.assignment.findUnique({
    where: {
      id,
    },
  });

  if (assignment && assignment.pdfData) {
    // Convert the binary data to a Base64 string
    const pdfBase64 = Buffer.from(assignment.pdfData).toString("base64");
    return { ...assignment, pdfBase64 };
  }

  return assignment;
};

export const dynamic = "force-dynamic";

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
