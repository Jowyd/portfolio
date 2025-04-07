import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoIcon from "./Logo";
import "./header.css";
import useScrollHandler from "../hooks/useScrollHandler";

const NavItem = ({
  to,
  label,
  power,
}: {
  to: string;
  label: string;
  power?: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const classNames = `text-2xl flex-1 text-center ${
    isActive
      ? "text-fiddle-light"
      : "text-fiddle-gray group-hover:text-fiddle-gray-dark hover:text-fiddle-light transition-colors"
  }`;

  return (
    <Link to={to} className={classNames}>
      <span className={`relative ${isActive ? "active-nav" : ""}`}>
        {label}
        {power && (
          <span className="ml-1 text-xs absolute top-0 font-khteka-mono">
            {power}
          </span>
        )}
      </span>
    </Link>
  );
};

const LogoLink = () => (
  <Link
    to="/"
    className="flex bg-primary py-2 px-2 rounded-3xl w-3/7 justify-between items-center"
  >
    <div className="flex flex-col p-1">
      <h1 className="text-fiddle-light font-khteka text-5xl">Myal.K</h1>
      <span className="hidden md:block text-fiddle-gray text-m font-xarrovv">
        心の平安
      </span>
    </div>
    <div className="hidden md:flex items-center">
      <span className="mr-4 text-fiddle-gray text-sm">DEVELOPER</span>
    </div>
    <LogoIcon width={50} height={50} />
  </Link>
);

const Header = () => {
  const scrolled = useScrollHandler(50);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-2 lg:px-5 transition-all duration-300 flex ${
        scrolled ? "" : ""
      }`}
    >
      <div className="flex items-start justify-between w-full gap-2">
        <LogoLink />

        <nav className="flex items-center space-x-8 flex-auto p-2 rounded-2xl bg-fiddle-dark justify-around group">
          <NavItem to="/work" label="Work" power={"(15)"} />
          <NavItem to="/about" label="About" />
          <NavItem to="/connect" label="Let's talk" power={"+"} />
          <NavItem to="https://exp.fiddle.digital" label="Exp." power={"↗"} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
