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
        className={`text-fiddle-dark hover:text-fiddle-dark transition-colors text-center text-8xl hover-underline-animation ${className}`}
      >
        {label}
      </Link>
    </span>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-12 px-2 border-t border-fiddle-accent border-opacity-20 bg-amber-700">
      <div className="flex flex-col">
        <div className="w-full flex flex-col items-center mb-4">
          <div className="flex items-center justify-center mb-4 w-full gap-1">
            <span className="bg-fiddle-dark w-full h-[1px]"></span>
            <h2 className="block text-fiddle-gray text-4xl bg-fiddle-dark rounded-3xl px-6 py-2 w-fit">
              Myal.K
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

        <div className="flex flex-col space-y-4">
          <a
            href="https://www.awwwards.com/Fiddle.Digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fiddle-gray hover:text-fiddle-light transition-colors"
          >
            Awwwards
          </a>
          <a
            href="https://www.instagram.com/fiddle.digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fiddle-gray hover:text-fiddle-light transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://dribbble.com/FiddleDigital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fiddle-gray hover:text-fiddle-light transition-colors"
          >
            Dribbble
          </a>
          <a
            href="https://www.behance.net/fiddledigital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fiddle-gray hover:text-fiddle-light transition-colors"
          >
            Behance
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-fiddle-accent border-opacity-10">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button
              className="text-fiddle-gray hover:text-fiddle-light transition-colors text-sm"
              onClick={() => {
                localStorage.removeItem("cookiesAccepted");
                window.location.reload();
              }}
            >
              Cookie preferences
            </button>
            <span className="text-fiddle-gray text-sm">
              Fiddle.Digital {year}
            </span>
            <Link
              to="/404"
              className="text-fiddle-gray hover:text-fiddle-light transition-colors text-sm"
            >
              p. 4 04
            </Link>
          </div>

          <Link to="/" className="flex items-center">
            <span className="text-fiddle-gray text-sm">Fiddle.Digital</span>
            <span className="mx-2 text-fiddle-gray text-sm">Design agency</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
