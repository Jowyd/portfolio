import { Link } from "react-router-dom";

export const WorkPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold">Work</h1>
      <p className="mt-4 text-lg">
        Here are some of the projects I have worked on.
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Work links will go here */}
        <Link
          to="/work/1"
          className="p-4 border rounded-lg shadow-md hover:bg-gray-100"
        >
          CACA
        </Link>
      </div>
    </div>
  );
};
