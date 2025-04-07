import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const designTextRef = useRef<HTMLDivElement>(null);
  const workShowcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    heroTimeline.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    heroTimeline.fromTo(
      ".hero-subtitle",
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.5"
    );

    // Services section animation on scroll
    const serviceItems = document.querySelectorAll(".service-item");

    gsap.fromTo(
      serviceItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );

    // Design text animation
    if (designTextRef.current) {
      const designTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: designTextRef.current,
          start: "top 80%",
        },
      });

      designTimeline.fromTo(
        ".design-text span",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7, stagger: 0.07 }
      );
    }

    // Cleanup ScrollTrigger on component unmount
    return () => {
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center px-6 lg:px-12"
        ref={heroRef}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-7xl font-khteka text-fiddle-light mb-8">
            <div className="hero-title">House of digital</div>
            <div className="hero-title">aesthetics ©</div>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl font-khteka-mono text-fiddle-gray max-w-2xl mb-12">
            Place where well-crafted web projects are born. We provide
            end-to-end web development and design services.
          </p>
          <div className="hero-subtitle font-khteka-mono text-fiddle-accent mt-10">
            <span className="text-xl">2025</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-12 bg-fiddle-dark" ref={servicesRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-khteka text-fiddle-light mb-12">
                Design
              </h2>
              <div ref={designTextRef} className="space-y-1 design-text">
                <p>
                  <span>That functions</span>
                </p>
                <p>
                  <span>That speaks</span>
                </p>
                <p>
                  <span>That inspires</span>
                </p>
                <p>
                  <span>That captivates</span>
                </p>
                <p>
                  <span>That educates</span>
                </p>
                <p>
                  <span>That amazes</span>
                </p>
                <p className="mt-4 text-fiddle-accent">
                  <span>Precise. Innovative. Futuristic. Expressive.</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-khteka text-fiddle-light mb-6">
                Together with you, we create new stories. Modern, technological,
                successful.
              </h3>
              <p className="text-fiddle-gray mb-10">
                We deliver what we're responsible for: Engaging user experience,
                world class web design & development, unique brand identity
                solutions to shine.
              </p>
              <div className="space-y-6">
                <p className="service-item text-fiddle-gray">
                  Our clients get industry leading digital products, all looking
                  into the future. Years pass by and designs we provide are
                  still worthy.
                </p>
                <p className="service-item text-fiddle-gray">
                  We make it possible as 10+ years experience in digital world
                  doesn't go unnoticed.
                </p>
                <p className="service-item text-fiddle-gray">
                  Gathering the best talents – engineers in minds helps us craft
                  the best thought-out solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Showcase Section */}
      <section className="py-20 px-6 lg:px-12" ref={workShowcaseRef}>
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-khteka text-fiddle-light mb-6">
              Broadcasting your brand worldwide
            </h2>
            <ul className="flex flex-col md:flex-row gap-6">
              <li className="text-fiddle-gray">w/Feeling</li>
              <li className="text-fiddle-gray">w/Experience</li>
              <li className="text-fiddle-gray">w/Value</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image grid would go here - using placeholders */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="aspect-square bg-fiddle-secondary opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-fiddle-light text-fiddle-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-khteka mb-8">
            Time to connect
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Just one small action stands between us and getting acquainted. A
            great journey begins with the first word "hello!"
          </p>
          <Link
            to="/connect"
            className="inline-block px-8 py-4 bg-fiddle-dark text-fiddle-light font-khteka-mono hover:bg-opacity-90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
