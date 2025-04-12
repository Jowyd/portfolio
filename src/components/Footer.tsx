import { Link } from "react-router-dom";

const NavItem = ({
  to,
  label,
  className = "",
}: {
  to: string;
  label: string;
  className?: string;
}) => {
  return (
    <span className={`${className}`}>
      <Link
        to={to}
        className={`text-fiddle-dark hover:text-fiddle-dark transition-colors text-center text-8xl hover-underline-animation`}
      >
        {label}
      </Link>
    </span>
  );
};

const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-fiddle-dark transition-colors hover-underline-animation bg-fiddle-gray"
    >
      <span>{label}</span>
    </a>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-12 px-4 border-fiddle-accent mt-4">
      <div className="flex flex-col">
        <div className="w-full flex flex-col items-center mb-4">
          <div className="flex items-center justify-center mb-4 w-full gap-1">
            <span className="bg-fiddle-dark w-full h-[1px]"></span>
            <h2 className="block text-fiddle-gray text-4xl bg-fiddle-dark rounded-3xl px-4 py-1 w-fit">
              Lyam
            </h2>
            <span className="bg-fiddle-dark w-full h-[1px]"></span>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-between">
          <NavItem to="/work" label="Work" />
          <NavItem
            to="/about"
            label="About"
            className="absolute left-1/2 transform -translate-x-1/2"
          />
          <NavItem to="/connect" label="Let's Talk" />
        </div>

        <div className="flex w-full flex-col justify-center items-center py-6 gap-2">
          <div className="flex justify-center gap-4">
            <SocialLink label="Github" href="https://github.com/jowyd" />
            <SocialLink
              label="LinkedIn"
              href="https://fr.linkedin.com/in/lyam-keovilay-4494702a0"
            />
          </div>
          <SocialLink
            label="lyam.keovilay@proton.me"
            href="lyam.keovilay@proton.me"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-fiddle-dark border-opacity-10">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm">Lyam.K © {year}</span>
            <Link to="/404" className="transition-colors text-sm">
              p. 4 04
            </Link>
          </div>

          <Link to="/" className="flex items-center">
            <span className="text-sm">Lyam.K</span>
            <span className="mx-2 text-sm">Developer</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
