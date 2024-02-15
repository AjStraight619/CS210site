import { instructorInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const InstructorInfo = () => {
  return (
    <section className="w-1/2">
      <Card className="flex flex-col gap-4 items-center justify-start p-4 rounded-lg shadow-lg shadow-black dark:shadow-xl dark:shadow-gray-800">
        <CardHeader>
          <CardTitle>{instructorInfo.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="w-full flex flex-col gap-2">
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
