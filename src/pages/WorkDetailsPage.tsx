import { useParams } from "react-router-dom";

export const WorkDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold">Work Details</h1>
      <p className="mt-4 text-lg">Here are the details for work ID: {id}.</p>
      {/* Work details will go here */}
    </div>
  );
};
