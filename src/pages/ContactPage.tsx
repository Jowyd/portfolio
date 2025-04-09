import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  useEffect(() => {
    // Page animation
    const pageTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    pageTimeline.fromTo(
      ".contact-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    pageTimeline.fromTo(
      ".contact-description",
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.5"
    );

    pageTimeline.fromTo(
      ".form-container",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );

    return () => {
      pageTimeline.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden py-32" ref={pageRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="contact-title text-4xl md:text-6xl font-khteka mb-8">
            Let's talk
          </h1>

          <p className="contact-description text-xl mb-12">
            Just one small action stands between us and getting acquainted. A
            great journey begins with the first word "hello!"
          </p>

          <div className="form-container bg-fiddle-dark bg-opacity-50 p-8 lg:p-12 border border-fiddle-accent border-opacity-20">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-fiddle-light"
                  >
                    Your name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-fiddle-accent border-opacity-30 py-3 px-2 text-fiddle-light focus:border-fiddle-light outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-fiddle-light"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-fiddle-accent border-opacity-30 py-3 px-2 text-fiddle-light focus:border-fiddle-light outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-fiddle-light"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-fiddle-accent border-opacity-30 py-3 px-2 text-fiddle-light focus:border-fiddle-light outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-fiddle-light"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-fiddle-accent border-opacity-30 py-3 px-2 text-fiddle-light focus:border-fiddle-light outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="inline-block px-8 py-4 bg-fiddle-light text-fiddle-dark font-khteka-mono hover:bg-opacity-90 transition-colors disabled:opacity-70"
                >
                  {formStatus === "idle" && "Send message"}
                  {formStatus === "submitting" && "Sending..."}
                  {formStatus === "success" && "Message sent!"}
                  {formStatus === "error" && "Error, try again"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
