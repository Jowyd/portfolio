import { redirect, useParams, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { works } from "../data/work";
import { Icon } from "@iconify/react";

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
  const workId = parseInt(id || "0", 10);
  const work = works.find((work) => work.id === workId);

  if (!work) {
    redirect("/404");
    return null;
  }

  // Filtrer les autres projets (exclure le projet actuel)
  const otherProjects = works.filter((w) => w.id !== workId).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-fiddle-dark">
      <div className="h-[30vh] w-full">
        <BackgroundEffect />
      </div>

      <main className="relative -mt-20 bg-white rounded-t-3xl min-h-[70vh] p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-12 animate-fade-in-up object-center">
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-32 h-32 rounded-xl shadow-lg mb-6 object-cover animate-scale-in object-center"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up delay-100">
              {work.title}
            </h1>
            <div className="flex gap-2 flex-wrap justify-center animate-fade-in-up delay-200">
              {work.tag.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-fiddle-dark/10 rounded-full text-sm text-fiddle-dark hover:bg-fiddle-dark/20 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-12 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-semibold mb-4">About this project</h2>
            <p className="text-gray-700 leading-relaxed">{work.description}</p>
          </div>

          {/* Technologies Section */}
          <div className="mb-12 animate-fade-in-up delay-400">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {work.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {typeof tech.icon === "string" &&
                  tech.icon.endsWith(".png") ? (
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  ) : (
                    <Icon icon={tech.icon as string} className="w-6 h-6" />
                  )}
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          {work.images && work.images.length > 0 && (
            <div className="animate-fade-in-up delay-500">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {work.images.map((image, index) => {
                  // Définir des tailles différentes pour créer un effet bento
                  const getSizeClass = () => {
                    switch (index % 6) {
                      case 0:
                        return "md:col-span-2 md:row-span-2 h-96";
                      case 1:
                        return "h-48";
                      case 2:
                        return "h-48";
                      case 3:
                        return "md:col-span-2 h-48";
                      case 4:
                        return "h-48";
                      case 5:
                        return "h-48";
                      default:
                        return "h-48";
                    }
                  };

                  return (
                    <div
                      key={index}
                      className={`group relative overflow-hidden rounded-lg shadow-lg ${getSizeClass()}`}
                    >
                      <img
                        src={image}
                        alt={`${work.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Other Projects Section */}
          <div className="mt-20 pt-12 border-t border-gray-200 animate-fade-in-up delay-600">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Autres projets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/work/${project.id}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 w-full h-full object-center">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white text-lg font-semibold mb-1">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tag.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/20 rounded-full text-xs text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
