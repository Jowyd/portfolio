import { redirect, useParams } from "react-router-dom";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { works } from "../data/work";

const DistortedPlane = () => {
  const mesh = useRef<any>(null);

  useFrame(({ mouse }) => {
    if (mesh.current) {
      mesh.current.rotation.z = mouse.x * 0.2;
      mesh.current.scale.x = 1 + mouse.x * 0.1;
      mesh.current.scale.y = 1 + mouse.y * 0.1;
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[5, 5, 8, 8]} />
      <meshBasicMaterial color="#544d56" wireframe />
    </mesh>
  );
};

const BackgroundEffect = () => (
  <Canvas camera={{ position: [0, 0, 0.5] }}>
    <DistortedPlane />
  </Canvas>
);

export const WorkDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const workId = parseInt(id || "0", 10); // Convert id to a number
  const work = works.find((work) => work.id === workId); // Find the work by id
  if (!work) {
    redirect("/404"); // Redirect to 404 if work not found
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-fiddle-dark h-100 w-full">
        <BackgroundEffect />
      </div>
      <section className="relative flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold">Work Details</h1>
        <p className="mt-4 text-lg">
          Here are the details for work ID: {work?.id}.
        </p>
        <p>
          <strong>Title:</strong> {work?.title}
        </p>
        {/* Work details will go here */}
      </section>
    </div>
  );
};
