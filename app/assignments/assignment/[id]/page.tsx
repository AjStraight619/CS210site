import { prisma } from "@/lib/prisma";
import Iframe from "react-iframe";

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
  console.log(id);
  const assignment = (await getAssignmentById(id)) as any;
  const pdfSrc = `data:application/pdf;base64,${assignment?.pdfBase64}`;

  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col pt-10 items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">{assignment?.name}</h1>
        {assignment?.pdfBase64 && (
          <Iframe src={pdfSrc} width="600" height="800" url=""></Iframe>
        )}
      </div>
    </main>
  );
}
