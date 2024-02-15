import { instructorInfo } from "@/lib/data";
import { Card, CardContent, CardHeader } from "../ui/card";

const InstructorInfo = () => {
  return (
    <section className="">
      <Card className="flex flex-col gap-4 items-center justify-start p-4 rounded-lg shadow-lg dark:shadow-xl">
        <CardHeader>{instructorInfo.name}</CardHeader>
        <CardContent>
          <ul className="w-full">
            {Object.entries(instructorInfo).map(([key, value]) => {
              if (key === "name") return null;

              return (
                <li key={key} className="text-sm">
                  <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
                  {value}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default InstructorInfo;
