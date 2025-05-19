import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { featured } from "../data/work";
import aboutData from "../data/about";

gsap.registerPlugin(ScrollTrigger);

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

const HomePage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-fiddle-dark" />
          <BackgroundEffect />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {aboutData.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-100">
            {aboutData.description}
          </p>
          <div className="mt-12 animate-fade-in-up delay-200">
            <Link
              to="/work"
              className="inline-block px-8 py-4 bg-white text-fiddle-dark rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={(el) => addToRefs(el, 0)} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64 relative">
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
      </section>

      {/* Skills Section */}
      <section ref={(el) => addToRefs(el, 1)} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutData.technologies.slice(0, 8).map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
              >
                <Icon
                  icon={tech.icon}
                  className="w-12 h-12 mb-3 text-fiddle-dark group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-block px-8 py-4 bg-fiddle-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section ref={(el) => addToRefs(el, 2)} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <Link
            to="/connect"
            className="inline-block px-8 py-4 bg-fiddle-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
