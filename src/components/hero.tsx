import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Scene } from "three";
import { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const model = useGLTF.preload("/3d/arms.glb");

export function Hero(props: { scene: Scene; position: any }) {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

function Model() {
  const glb = useLoader(GLTFLoader, "/3d/arms.glb");
  console.log(glb);
  return <primitive object={glb.scene} scale={0.1} />;
}
