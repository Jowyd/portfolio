import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import aboutData from "../data/about";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { works as otherProjects } from "../data/work";
import { Link } from "react-router-dom";

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

const AboutPage = () => {
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Education Section */}
        <section
          ref={(el) => addToRefs(el, 0)}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-8">
            {aboutData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{edu.school}</p>
                <p className="text-gray-700">{edu.description}</p>
                {edu.current && (
                  <span className="inline-block mt-4 px-3 py-1 bg-fiddle-dark/10 text-fiddle-dark rounded-full text-sm">
                    Current
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          ref={(el) => addToRefs(el, 1)}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {aboutData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end mt-2 md:mt-0">
                    <span className="text-sm text-gray-500">{exp.period}</span>
                    {exp.duration && (
                      <span className="text-sm text-gray-500">{exp.duration}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-fiddle-dark/10 text-fiddle-dark rounded-full text-sm">
                    {exp.type}
                  </span>
                  {exp.current && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        <Icon icon={tech.icon} className="w-4 h-4" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section
          ref={(el) => addToRefs(el, 2)}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {aboutData.technologies.map((tech, index) => (
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
        </section>

        {/* Software Section */}
        <section
          ref={(el) => addToRefs(el, 3)}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutData.software.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Icon
                  icon={tool.icon}
                  className="w-8 h-8 text-fiddle-dark"
                />
                <span className="font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Section */}
        <section
          ref={(el) => addToRefs(el, 4)}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.learning.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Icon
                  icon={tech.icon}
                  className="w-8 h-8 text-fiddle-dark"
                />
                <div>
                  <h3 className="font-medium text-gray-700">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mt-20 pt-12 border-t border-gray-200 animate-fade-in-up delay-600">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Other Projects
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
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
