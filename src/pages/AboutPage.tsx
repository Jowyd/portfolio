import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubCalendar from "react-github-calendar";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    heroTimeline.fromTo(
      ".hero-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Services animation
    gsap.fromTo(
      ".service-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );

    // Description animation
    gsap.fromTo(
      ".description p",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
        },
      }
    );

    // Awards animation
    gsap.fromTo(
      ".award-item",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: awardsRef.current,
          start: "top 85%",
        },
      }
    );

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
      <section className="pt-32 pb-16 px-6 lg:px-12" ref={heroRef}>
        <div className="container mx-auto">
          <div className="hero-text max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-khteka mb-8">
              Inside every person is a whole world. This is the greatest gift.
              And only some are generous enough to share theirs with us. All the
              best around is the manifestation of these people.
            </h1>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <GitHubCalendar
          username="jowyd"
          theme={{
            light: ["#f0f0f0", "#d9d9d9", "#bfbfbf", "#8c8c8c", "#000000"],
            dark: ["#333333", "#4d4d4d", "#666666", "#808080", "#000000"],
          }}
          blockSize={14}
          blockMargin={6}
          hideTotalCount={true}
        />
      </section>
      {/* Services Section */}
      <section className="py-12 px-6 lg:px-12" ref={servicesRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-khteka mb-8">
                Services
              </h2>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-2">
                <li className="service-item text-lg ">Art direction</li>
                <li className="service-item text-lg ">Branding / Identity</li>
                <li className="service-item text-lg ">
                  Design language development
                </li>
                <li className="service-item text-lg ">Design systems</li>
                <li className="service-item text-lg ">Interface design</li>
                <li className="service-item text-lg ">User experience</li>
                <li className="service-item text-lg ">Web design</li>
                <li className="service-item text-lg ">Motion design</li>
                <li className="service-item text-lg ">Web development</li>
                <li className="service-item text-lg ">
                  Launch and maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-6 lg:px-12" ref={descriptionRef}>
        <div className="container mx-auto">
          <div className="max-w-3xl description space-y-10">
            <p className="text-lg md:text-xl ">
              The journey is about discovery, innovation, and ultimately,
              crafting experiences that resonate on a human level.
            </p>
            <p className="text-lg md:text-xl ">
              The word design, in our understanding, is not at all separate from
              how it works and the benefit it brings. Design, after all, is
              attractiveness. What works must be attractive. What is beneficial
              must be attractive.
            </p>
            <p className="text-lg md:text-xl ">
              Only in the combination of these three entities is true
              superpower, real strength, and the path to success revealed. And
              we simply love to walk this path again and again with the people
              who have been so kind as to give us this opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {/* <section className="py-16 px-6 lg:px-12" ref={awardsRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-khteka mb-12">
            Awards & Recognitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="award-item">
              <h3 className="text-xl font-khteka mb-2">The Webby Awards</h3>
              <p className="">1 Nomination</p>
            </div>
            <div className="award-item">
              <h3 className="text-xl font-khteka mb-2">Awwwards</h3>
              <p className="">1 SOTD + 1 DEV + 1 AH + 1 ME + 10 HM</p>
            </div>
            <div className="award-item">
              <h3 className="text-xl font-khteka mb-2">The FWA</h3>
              <p className="">1 FOTD</p>
            </div>
            <div className="award-item">
              <h3 className="text-xl font-khteka mb-2">Css Design Awards</h3>
              <p className="">6 SOTD + 5 Special Kudos</p>
            </div>
            <div className="award-item">
              <h3 className="text-xl font-khteka mb-2">Orpetron</h3>
              <p className="">5 SOTD + 2 OWDA</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
