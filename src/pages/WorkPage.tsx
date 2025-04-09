import { useParams } from "react-router-dom";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import WorkLink from "../components/WorkLinks";
import { getLink, works } from "../data/work";

const DistortionMaterial = shaderMaterial(
  {
    uMouse: new THREE.Vector2(0, 0),
  },
  `
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Conversion des coordonnées de la souris en espace local
    vec2 mouse = uMouse * 2.5;
    
    // Calcul de la direction et distance depuis la souris
    vec2 dir = pos.xy - mouse;
    float distance = length(dir);
    
    // Calcul de la distorsion avec une fonction de décroissance
    float strength = 0.3;
    float displacement = strength * (1.0 / (distance + 0.2));
    
    // Application de la distorsion
    pos.xy += dir * displacement;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  `
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(153, 213, 124, 0.1);
  }
  `
);

extend({ DistortionMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      distortionMaterial: any;
    }
  }
}

const DistortedPlane = () => {
  const mesh = useRef<any>(null);

  useFrame(({ mouse }) => {
    if (mesh.current) {
      mesh.current.material.uniforms.uMouse.value.set(mouse.x, mouse.y);
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[55, 55, 64, 64]} />
      <distortionMaterial wireframe />
    </mesh>
  );
};

const BackgroundEffect = () => (
  <Canvas camera={{ position: [0, 0, 0.5] }} className="w-full h-full">
    <DistortedPlane />
  </Canvas>
);

export const WorkPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary h-100 w-full">
        <BackgroundEffect />
      </div>
      <section className="relative flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold">Work</h1>
        <p className="mt-4 text-lg">
          Here are some of the projects I have worked on.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Work links will go here */}
          {works.map((work) => (
            <WorkLink key={work.id} {...work} link={getLink(work.id)} />
          ))}
        </div>
      </section>
    </div>
  );
};
